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
import { RegisterComponent } from "./pages/register/register.component";
import { LoginFormComponent } from "./shared/components/login-form/login-form.component";
import { ProfileComponent } from "./pages/auth-area/dashboard/profile/profile.component";
import { SpinningLoaderComponent } from "./shared/components/spinning-loader/spinning-loader.component";
import { RecoverComponent } from "./pages/recover/recover.component";
import { RecoverFormComponent } from "./pages/recover/recover-form/recover-form.component";
import { RegisterFormComponent } from "./pages/register/register-form/register-form.component";
import { MainLogoComponent } from "./shared/components/main-logo/main-logo.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DepositFormComponent } from "./pages/auth-area/dashboard/deposit/deposit-form/deposit-form.component";
import { CreateComponent } from "./pages/auth-area/dashboard/account-plan/create/create.component";
import { PaymentFormComponent } from "./pages/auth-area/dashboard/payment/payment-form/payment-form.component";
import { ProfileFormComponent } from "./pages/auth-area/dashboard/profile/profile-form/profile-form.component";
import { TransferFormComponent } from "./pages/auth-area/dashboard/transfer/transfer-form/transfer-form.component";
import { TransferComponent } from "./pages/auth-area/dashboard/transfer/transfer.component";
import { DepositComponent } from "./pages/auth-area/dashboard/deposit/deposit.component";
import { SelectAccountPlanComponent } from "./shared/components/select-account-plan/select-account-plan.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

registerLocaleData(localePT, "pt");

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent,
		RegisterComponent,
		DashboardComponent,
		Error404Component,
		AuthAreaComponent,
		PaymentComponent,
		LoginFormComponent,
		RegisterFormComponent,
		AccountPlanComponent,
		ProfileComponent,
		SpinningLoaderComponent,
		RecoverComponent,
		RecoverFormComponent,
		MainLogoComponent,
		DepositFormComponent,
		DepositComponent,
		CreateComponent,
		PaymentFormComponent,
		ProfileFormComponent,
		TransferComponent,
		TransferFormComponent,
		SelectAccountPlanComponent,
		SidebarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		FontAwesomeModule
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
