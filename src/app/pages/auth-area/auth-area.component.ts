import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import { faPooStorm } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-auth-area",
	templateUrl: "./auth-area.component.html",
	styleUrls: ["./auth-area.component.scss"]
})
export class AuthAreaComponent implements OnInit {
	faPooStorm = faPooStorm;
	usuario = "";

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.usuario = this.authService.getUser().nome;
	}

	logout(): void {
		this.authService.logout();
		void this.router.navigate(["home"]);
	}
}
