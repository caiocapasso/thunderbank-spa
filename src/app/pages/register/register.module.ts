import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { IConfig, NgxMaskModule } from "ngx-mask";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
	declarations: [RegisterComponent, RegisterFormComponent],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		FormsModule,
		SharedModule,
		NgxMaskModule.forRoot()
	]
})
export class RegisterModule {}
