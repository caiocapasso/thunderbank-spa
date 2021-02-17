import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SpinningLoaderComponent } from "./components/spinning-loader/spinning-loader.component";
import { MainLogoComponent } from "./components/main-logo/main-logo.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SelectAccountPlanComponent } from "./components/select-account-plan/select-account-plan.component";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		SpinningLoaderComponent,
		MainLogoComponent,
		LoginFormComponent,
		SidebarComponent,
		SelectAccountPlanComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		FormsModule,
		HttpClientModule,
		RouterModule
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		SpinningLoaderComponent,
		MainLogoComponent,
		LoginFormComponent,
		SidebarComponent,
		SelectAccountPlanComponent
	]
})
export class SharedModule {}
