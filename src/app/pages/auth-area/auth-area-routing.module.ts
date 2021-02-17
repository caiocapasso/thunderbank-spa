import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthAreaComponent } from "./auth-area.component";
import { AccountPlanComponent } from "./dashboard/account-plan/account-plan.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DepositComponent } from "./dashboard/deposit/deposit.component";
import { PaymentComponent } from "./dashboard/payment/payment.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { TransferComponent } from "./dashboard/transfer/transfer.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "dashboard",
		component: AuthAreaComponent,
		children: [
			{
				path: "dashboard",
				component: DashboardComponent
			},
			{
				path: "dashboard/account-plan",
				component: AccountPlanComponent
			},
			{
				path: "dashboard/deposit",
				component: DepositComponent
			},
			{
				path: "dashboard/payment",
				component: PaymentComponent
			},
			{
				path: "dashboard/profile",
				component: ProfileComponent
			},
			{
				path: "dashboard/transfer",
				component: TransferComponent
			},
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full"
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthAreaRoutingModule {}
