import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { Usuario } from "src/app/shared/models/usuario.model";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
	constructor(private router: Router, private authService: AuthService) {}

	logout(): void {
		console.log("user logged out");
		this.authService.logout();
		this.router.navigate(["home"]);
	}

	usuario: any;
	ngOnInit(): void {
		this.usuario = this.authService.getUser();
	}
}
