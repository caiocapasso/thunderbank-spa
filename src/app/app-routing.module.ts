import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedUserGuard } from "./shared/guards/logged-user.guard";
import { UnloggedUserGuard } from "./shared/guards/unlogged-user.guard";

const routes: Routes = [
	{
		path: "dashboard",
		loadChildren: () =>
			import("./pages/auth-area/auth-area.module").then(
				(m) => m.AuthAreaModule
			),
		canActivate: [LoggedUserGuard]
	},
	{
		path: "home",
		loadChildren: () =>
			import("./pages/home/home.module").then((m) => m.HomeModule),
		canActivate: [UnloggedUserGuard]
	},
	{
		path: "register",
		loadChildren: () =>
			import("./pages/register/register.module").then(
				(m) => m.RegisterModule
			),
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
		loadChildren: () =>
			import("./pages/recover/recover.module").then(
				(m) => m.RecoverModule
			),
		canActivate: [UnloggedUserGuard]
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "**",
		loadChildren: () =>
			import("./pages/error404/error404.module").then(
				(m) => m.Error404Module
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
