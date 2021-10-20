import { ConsultationService } from './consultations/consultation.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSortModule } from "@angular/material/sort";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PatientsRoutingModule } from "./patients-routing.module";
import { AddPatientComponent } from "./add-patient/add-patient.component";
import { AllpatientsComponent } from "./allpatients/allpatients.component";
import { EditPatientComponent } from "./edit-patient/edit-patient.component";
import { PatientProfileComponent } from "./patient-profile/patient-profile.component";
import { DeleteComponent } from "./allpatients/dialog/delete/delete.component";
import { FormDialogComponent } from "./allpatients/dialog/form-dialog/form-dialog.component";
import { PatientService } from "./allpatients/patient.service";
import { ConsultationsComponent } from './consultations/consultations.component';
import {NgxPrintModule} from 'ngx-print';
import { AllOrdonnancesComponent } from './ordonnances/all-ordonnances/all-ordonnances.component';
import { OrdonnanceComponent } from './ordonnances/ordonnance/ordonnance.component';

@NgModule({
  declarations: [
    AddPatientComponent,
    AllpatientsComponent,
    EditPatientComponent,
    PatientProfileComponent,
    DeleteComponent,
    FormDialogComponent,
    ConsultationsComponent,
    AllOrdonnancesComponent,
    OrdonnanceComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [PatientService, ConsultationService],
})
export class PatientsModule {}
