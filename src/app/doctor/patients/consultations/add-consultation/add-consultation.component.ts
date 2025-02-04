import { User } from './../../../../core/models/user';
import { Exploration } from './../../analyses/analyse.model';
import { Consultation } from './../consultation.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultationService } from 'src/app/doctor/services/consultation.service';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {
@Output() page = new EventEmitter<string>();
  consultation: Consultation = {
    _id: undefined,
    idUser: '',
    initial: true ,
    previous: false ,
    idPreviousConsultation: undefined,
    idNextConsultation: undefined,
    idPatient: '',
    doctor: '',
    patient: '',
    motif: '',
    antecedents: '',
    examen: '',
    hypotheses: '',
    evaluation: '',
    isGN: true,
    referer: false,
    ordonnance: false,
    analyse: false,
    resultat: false,
    createdAt: '',
    date: '',
    refererList: [],
    medicaments: [],
    explorations: [],
    enabled: true
  };

  arrayExpo = []; // c'est pour compter le nombre de tableau analyse

  loading = false; // une fois que submit a eté cliqué le bouton loading apparait
  docProfile: User = JSON.parse(localStorage.getItem('currentUser'));
  rows = [];
  consultationForm: FormGroup; // form pour les s

  // tslint:disable-next-line:variable-name
  constructor(private consultS: ConsultationService,
              public httpClient: HttpClient,
              public dialog: MatDialog,
              private router: Router,
              private modalService: NgbModal,
    // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar,
              private fb: FormBuilder
  ) {
    this.consultationForm = this.fb.group({
      // tslint:disable-next-line:variable-name
      motif: ["", [Validators.required]],
      antecedents: ["", [Validators.required]],
      examen: ["", [Validators.required]],
      hypotheses: ["", [Validators.required]],
      refererContent: [""],
      isCheckedReferer: false, // dit si on doit envoyer ailleurs ou pas
      isCheckedOM: false, // si on doit faire une ordonnance medicale
      isCheckedOP: false, // dit si on doit faire une ordonnance prescriptive

    });



  }
  ngOnInit() {
  }
  checkOrdonnance() {

    window.open("#/doctor/patients/ordonnance", "_blank");
  }
  async onSubmit() {

this.loading = true;
    // une fois le bouton sauvegarder cliqué
this.consultation.motif = this.consultationForm.get('motif').value;
this.consultation.antecedents = this.consultationForm.get('antecedents').value;
this.consultation.examen = this.consultationForm.get('examen').value;
this.consultation.hypotheses = this.consultationForm.get('hypotheses').value;
this.consultation.referer = this.consultationForm.get('isCheckedReferer').value;
this.consultation.ordonnance = this.consultationForm.get('isCheckedOM').value;
this.consultation.analyse = this.consultationForm.get('isCheckedOP').value;
this.consultation.idUser = this.docProfile._id;
this.consultation.doctor = this.docProfile.name;
this.consultation.date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
this.consultation.idPatient = localStorage.getItem('idPatient');


await this.consultS.addConsultation(this.consultation).subscribe(() => {
      this.showNotification(
        "bg-green",
        "Consultation enregistrée",
        "bottom",
        "right"
      );
      this.goToAllConsultation();
      this.loading = true;
    }, (error: HttpErrorResponse) => {
      if (error.status === 401) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.router.navigate(["/authentication/signin"]);
      }
      else {
        this.showNotification(
          "bg-red",
          "Un probleme est survenu, veuillez reessayer",
          "bottom",
          "right"
        );
      }
    });
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this._snackBar.open(text, "", {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
  addNewMedoc(array) {
    // cette fonction ajoute un medicament au tableau des medoc de la consultation elle est connecté au
    // props des medocs
    this.consultation.medicaments = array;
  }
  addNewExploration(analyses: Exploration) {
    // cette fonction ajoute une exploration au tableau des exploration de la consultation elle est connecté au
    // props des explorations
    this.consultation.explorations[this.consultation.explorations.length - 1].analyses =  analyses.analyses;
    this.consultation.explorations[this.consultation.explorations.length - 1].typeI =  analyses.typeI;
    this.consultation.explorations[this.consultation.explorations.length - 1].typeII =  analyses.typeII;
    this.consultation.explorations[this.consultation.explorations.length - 1].typeIII =  analyses.typeIII;
    this.consultation.explorations[this.consultation.explorations.length - 1].typeIV =  analyses.typeIV;

  }

  goToAllConsultation() { // une fois la consultation enregistrer on change de page pour aller à l'historique
    this.page.emit('1');
  }

  addRowReferer(): void {
    this.consultation.refererList = [
      ...this.consultation.refererList,
      {
        refererType: '',
        refererContent: '',
        _id: undefined,
      }
    ];
  }

  addRowExpo(): void {
    this.consultation.explorations = [
      ...this.consultation.explorations,
      {
        analyses: [],
        typeI: '',
        typeII: '',
        typeIII: '',
        typeIV: '',
        resultat: false,
        resultatUrl: '',
        _id: undefined
      }
    ];
  }

  deleteRowReferer(content: string): void {
    this.consultation.refererList = this.consultation.refererList.filter(d => d.refererContent !== content);
  }

  deleteRowExpo(content): void {
    this.consultation.explorations = this.consultation.explorations.filter(d => d.analyses !== content);
  }


}
