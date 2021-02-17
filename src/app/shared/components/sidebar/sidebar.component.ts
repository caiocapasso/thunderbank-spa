import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
	constructor(private router: Router, private authService: AuthService) {}

	logout(): void {
		console.log("user logged out");
		this.authService.logout();
		void this.router.navigate(["home"]);
	}
}
