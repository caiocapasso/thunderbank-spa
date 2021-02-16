import { registerLocaleData } from "@angular/common";
import localePT from "@angular/common/locales/pt";
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthAreaComponent } from "./pages/auth-area/auth-area.component";
import { AccountPlanComponent } from "./pages/auth-area/dashboard/account-plan/account-plan.component";
import { DashboardComponent } from "./pages/auth-area/dashboard/dashboard.component";
import { PaymentComponent } from "./pages/auth-area/dashboard/payment/payment.component";
import { Error404Component } from "./pages/error404/error404.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginFormComponent } from "./shared/components/login-form/login-form.component";
import { ProfileComponent } from "./pages/auth-area/dashboard/profile/profile.component";
import { SpinningLoaderComponent } from "./shared/components/spinning-loader/spinning-loader.component";
import { RecoverComponent } from "./pages/recover/recover.component";

registerLocaleData(localePT, "pt");

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		Error404Component,
		AuthAreaComponent,
		PaymentComponent,
		RegisterComponent,
		AccountPlanComponent,
		LoginFormComponent,
		ProfileComponent,
		SpinningLoaderComponent,
		RecoverComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
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
