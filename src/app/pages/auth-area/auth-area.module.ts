import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PaymentComponent } from "./dashboard/payment/payment.component";
import { AccountPlanComponent } from "./dashboard/account-plan/account-plan.component";
import { DepositFormComponent } from "./dashboard/deposit/deposit-form/deposit-form.component";
import { DepositComponent } from "./dashboard/deposit/deposit.component";
import { PaymentFormComponent } from "./dashboard/payment/payment-form/payment-form.component";
import { CreditCardFormComponent } from "./dashboard/credit-card/credit-card-form/credit-card-form.component";
import { ProfileFormComponent } from "./dashboard/profile/profile-form/profile-form.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { TransferFormComponent } from "./dashboard/transfer/transfer-form/transfer-form.component";
import { TransferComponent } from "./dashboard/transfer/transfer.component";
import { CreateComponent } from "./dashboard/account-plan/create/create.component";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthAreaRoutingModule } from "./auth-area-routing.module";
import { AuthAreaComponent } from "./auth-area.component";
import { CreditCardComponent } from "./dashboard/credit-card/credit-card.component";
import { IConfig, NgxMaskModule } from "ngx-mask";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
	declarations: [
		AuthAreaComponent,
		DashboardComponent,
		AccountPlanComponent,
		CreateComponent,
		DepositComponent,
		DepositFormComponent,
		PaymentComponent,
		PaymentFormComponent,
		CreditCardFormComponent,
		ProfileComponent,
		ProfileFormComponent,
		TransferComponent,
		TransferFormComponent,
		CreditCardComponent
	],
	imports: [
		CommonModule,
		AuthAreaRoutingModule,
		FontAwesomeModule,
		FormsModule,
		HttpClientModule,
		SharedModule,
		NgxMaskModule.forRoot()
	]
})
export class AuthAreaModule {}
