import { registerLocaleData } from "@angular/common";
import localePT from "@angular/common/locales/pt";
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthAreaComponent } from "./auth-area/auth-area.component";
import { UserAccountPlanComponent } from "./auth-area/user-dashboard/user-account-plan/user-account-plan.component";
import { UserDashboardComponent } from "./auth-area/user-dashboard/user-dashboard.component";
import { UserPaymentComponent } from "./auth-area/user-dashboard/user-payment/user-payment.component";
import { Error404Component } from "./error404/error404.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { LoginFormComponent } from "./shared/components/login-form/login-form.component";
import { UserProfileComponent } from "./auth-area/user-dashboard/user-profile/user-profile.component";
import { SpinningLoaderComponent } from "./shared/components/spinning-loader/spinning-loader.component";

registerLocaleData(localePT, "pt");

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent,
		UserLoginComponent,
		UserRegisterComponent,
		UserDashboardComponent,
		Error404Component,
		AuthAreaComponent,
		UserPaymentComponent,
		UserRegisterComponent,
		UserAccountPlanComponent,
		LoginFormComponent,
		UserProfileComponent,
		SpinningLoaderComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
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
