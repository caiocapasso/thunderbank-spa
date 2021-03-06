import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
	providedIn: "root"
})
export class LoggedUserGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService) { }

	canActivate(): boolean {

		if (this.authService.isValidToken() && this.authService.isLogged()) {
			return true;
		}
		this.authService.logout()
		this.router.navigate(["login"]);
		return false;
	}
}
