import { CommonModule, registerLocaleData } from "@angular/common";
import localePT from "@angular/common/locales/pt";
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthAreaModule } from "./pages/auth-area/auth-area.module";
import { HomeModule } from "./pages/home/home.module";
import { RegisterModule } from "./pages/register/register.module";
import { RecoverModule } from "./pages/recover/recover.module";
import { Error404Module } from "./pages/error404/error404.module";
import { authInterceptorProviders } from "./helper/auth.interceptor";

registerLocaleData(localePT, "pt");
@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		FontAwesomeModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		AuthAreaModule,
		HomeModule,
		RegisterModule,
		RecoverModule,
		Error404Module
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: "pt"
		},
		{
			provide: DEFAULT_CURRENCY_CODE,
			useValue: "BRL"
		}, authInterceptorProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
