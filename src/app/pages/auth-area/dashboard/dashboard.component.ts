import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/shared/models/usuario.model";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	usuario: Usuario | undefined;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.usuario = this.authService.getUsuario();
	}
}
