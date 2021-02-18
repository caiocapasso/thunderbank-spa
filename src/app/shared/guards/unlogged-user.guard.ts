import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
	providedIn: "root"
})
export class UnloggedUserGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) { }

	canActivate(): boolean {
		if (!this.authService.isLogged()) {
			return true;
		}

		this.router.navigate(["dashboard"]);
		return false;
	}
}
