import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {LoginPageComponent} from "./login-page.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    FormsModule,
    RouterModule
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [],
  bootstrap: [LoginPageComponent]
})
export class LoginPageModule {
}
