import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Error404RoutingModule } from "./error404-routing.module";
import { Error404Component } from "./error404.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	declarations: [Error404Component],
	imports: [
		CommonModule,
		Error404RoutingModule,
		FontAwesomeModule,
		SharedModule
	]
})
export class Error404Module {}
