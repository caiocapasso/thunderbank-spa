import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthAreaComponent } from "./pages/auth-area/auth-area.component";
import { AccountPlanComponent } from "./pages/auth-area/dashboard/account-plan/account-plan.component";
import { DashboardComponent } from "./pages/auth-area/dashboard/dashboard.component";
import { DepositComponent } from "./pages/auth-area/dashboard/deposit/deposit.component";
import { PaymentComponent } from "./pages/auth-area/dashboard/payment/payment.component";
import { ProfileComponent } from "./pages/auth-area/dashboard/profile/profile.component";
import { TransferComponent } from "./pages/auth-area/dashboard/transfer/transfer.component";
import { Error404Component } from "./pages/error404/error404.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes: Routes = [
	{
		path: "",
		component: AuthAreaComponent,
		children: [
			{
				path: "dashboard",
				component: DashboardComponent,
				children: [
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
					}
				]
			},
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full"
			}
		]
	},
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "register",
		component: RegisterComponent
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "**",
		component: Error404Component
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
