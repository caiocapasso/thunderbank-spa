import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthAreaComponent } from "./auth-area/auth-area.component";
import { UserAccountPlanComponent } from "./auth-area/user-dashboard/user-account-plan/user-account-plan.component";
import { UserDashboardComponent } from "./auth-area/user-dashboard/user-dashboard.component";
import { UserDepositComponent } from "./auth-area/user-dashboard/user-deposit/user-deposit.component";
import { UserPaymentComponent } from "./auth-area/user-dashboard/user-payment/user-payment.component";
import { UserProfileComponent } from "./auth-area/user-dashboard/user-profile/user-profile.component";
import { UserTransferComponent } from "./auth-area/user-dashboard/user-transfer/user-transfer.component";
import { Error404Component } from "./error404/error404.component";
import { HomeComponent } from "./home/home.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

const routes: Routes = [
	{
		path: "",
		component: AuthAreaComponent,
		children: [
			{
				path: "user-dashboard",
				component: UserDashboardComponent,
				children: [
					{
						path: "user-account-plan",
						component: UserAccountPlanComponent
					},
					{
						path: "user-deposit",
						component: UserDepositComponent
					},
					{
						path: "user-payment",
						component: UserPaymentComponent
					},
					{
						path: "user-profile",
						component: UserProfileComponent
					},
					{
						path: "user-transfer",
						component: UserTransferComponent
					}
				]
			},
			{
				path: "",
				redirectTo: "user-dashboard",
				pathMatch: "full"
			}
		]
	},
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "user-register",
		component: UserRegisterComponent
	},
	{
		path: "user-login",
		component: UserLoginComponent
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
