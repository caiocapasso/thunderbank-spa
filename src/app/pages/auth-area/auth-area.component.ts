import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
	selector: "app-auth-area",
	templateUrl: "./auth-area.component.html",
	styleUrls: ["./auth-area.component.scss"]
})
export class AuthAreaComponent implements OnInit {
	usuario = "";

	constructor(private router: Router, private authService: AuthService) {}

	ngOnInit() {
		this.usuario = this.authService.getUser().nome;
	}

	logout(): void {
		console.log("user logged out");
		this.authService.logout();
		void this.router.navigate(["home"]);
	}
}
