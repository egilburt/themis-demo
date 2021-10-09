import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from '@angular/material/dialog';

import {AddOrEditEmployeeDialog, ManageEmployeesComponent} from "./manage-employees.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ManageEmployeesComponent,
    AddOrEditEmployeeDialog
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ManageEmployeesComponent
  ],
  providers: [],
  bootstrap: [ManageEmployeesComponent]
})
export class ManageEmployeesModule {
}
