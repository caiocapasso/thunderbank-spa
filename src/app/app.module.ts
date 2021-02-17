import { CommonModule, registerLocaleData } from "@angular/common";
import localePT from "@angular/common/locales/pt";
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthAreaComponent } from "./pages/auth-area/auth-area.component";
import { Error404Component } from "./pages/error404/error404.component";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RecoverComponent } from "./pages/recover/recover.component";
import { RecoverFormComponent } from "./pages/recover/recover-form/recover-form.component";
import { RegisterFormComponent } from "./pages/register/register-form/register-form.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "./shared/shared.module";
import { AuthAreaModule } from "./pages/auth-area/auth-area.module";

registerLocaleData(localePT, "pt");

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		Error404Component,
		AuthAreaComponent,
		RegisterComponent,
		RegisterFormComponent,
		RecoverComponent,
		RecoverFormComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		SharedModule,
		AuthAreaModule
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: "pt"
		},
		{
			provide: DEFAULT_CURRENCY_CODE,
			useValue: "BRL"
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
