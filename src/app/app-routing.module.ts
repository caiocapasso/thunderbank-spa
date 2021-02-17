import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./pages/error404/error404.component";
import { HomeComponent } from "./pages/home/home.component";
import { RecoverComponent } from "./pages/recover/recover.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoggedUserGuard } from "./shared/guards/logged-user.guard";
import { UnloggedUserGuard } from "./shared/guards/unlogged-user.guard";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import("./pages/auth-area/auth-area.module").then(
				(m) => m.AuthAreaModule
			),
		canActivate: [LoggedUserGuard]
	},
	{
		path: "home",
		component: HomeComponent,
		canActivate: [UnloggedUserGuard]
	},
	{
		path: "register",
		component: RegisterComponent,
		canActivate: [UnloggedUserGuard]
	},
	{
		path: "login",
		loadChildren: () =>
			import("./pages/login/login.module").then((m) => m.LoginModule),
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
export class AppRoutingModule {}
