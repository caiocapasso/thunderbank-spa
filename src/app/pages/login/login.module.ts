import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { LoginFormComponent } from "src/app/shared/components/login-form/login-form.component";
import { MainLogoComponent } from "src/app/shared/components/main-logo/main-logo.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		LoginRoutingModule,
		LoginFormComponent,
		MainLogoComponent,
		FormsModule
	]
})
export class LoginModule {}
