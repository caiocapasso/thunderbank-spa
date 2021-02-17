import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthAreaComponent } from "./auth-area.component";
import { AccountPlanComponent } from "./dashboard/account-plan/account-plan.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashBoardResolver } from "./dashboard/dashboard.resolver";
import { DepositComponent } from "./dashboard/deposit/deposit.component";
import { PaymentComponent } from "./dashboard/payment/payment.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { TransferComponent } from "./dashboard/transfer/transfer.component";
import { CreditCardComponent } from "./dashboard/credit-card/credit-card.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "dashboard",
		pathMatch: "full"
	},
	{
		path: "",
		component: AuthAreaComponent,
		children: [
			{
				path: "",
				component: DashboardComponent,
				resolve: { dashBoard: DashBoardResolver }
			},
			{
				path: "account-plan",
				component: AccountPlanComponent
			},
			{
				path: "deposit",
				component: DepositComponent
			},
			{
				path: "payment",
				component: PaymentComponent
			},
			{
				path: "profile",
				component: ProfileComponent
			},
			{
				path: "transfer",
				component: TransferComponent
			},
			{
				path: "credit-card",
				component: CreditCardComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthAreaRoutingModule { }
