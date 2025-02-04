import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';

import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [CommonModule, NgbModule, MatTabsModule, MatSidenavModule ],
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  providers: []
})
export class LayoutModule {}
