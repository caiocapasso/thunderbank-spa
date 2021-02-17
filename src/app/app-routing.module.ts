import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthAreaComponent } from "./pages/auth-area/auth-area.component";
import { AccountPlanComponent } from "./pages/auth-area/dashboard/account-plan/account-plan.component";
import { DashboardComponent } from "./pages/auth-area/dashboard/dashboard.component";
import { DashBoardResolver } from "./pages/auth-area/dashboard/dashboard.resolver";
import { DepositComponent } from "./pages/auth-area/dashboard/deposit/deposit.component";
import { PaymentComponent } from "./pages/auth-area/dashboard/payment/payment.component";
import { ProfileComponent } from "./pages/auth-area/dashboard/profile/profile.component";
import { TransferComponent } from "./pages/auth-area/dashboard/transfer/transfer.component";
import { Error404Component } from "./pages/error404/error404.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RecoverComponent } from "./pages/recover/recover.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoggedUserGuard } from "./shared/guards/logged-user.guard";
import { UnloggedUserGuard } from "./shared/guards/unlogged-user.guard";

const routes: Routes = [
	{
		path: "",
		component: AuthAreaComponent,
		canActivate: [LoggedUserGuard],
		children: [
			{
				path: "dashboard",
				component: DashboardComponent,
				resolve: { dashBoard: DashBoardResolver }
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
	},
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "register",
		component: RegisterComponent,
		canActivate: [UnloggedUserGuard]
	},
	{
		path: "login",
		component: LoginComponent,
		canActivate: [UnloggedUserGuard]
	},
	{
		path: "recover",
		component: RecoverComponent,
		canActivate: [UnloggedUserGuard]
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
export class AppRoutingModule { }
