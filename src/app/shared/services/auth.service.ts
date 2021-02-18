import { Injectable, OnInit } from "@angular/core";
import { Usuario } from "../models/usuario.model";
import { tokenService } from "../utils/localStorage";

@Injectable({
	providedIn: "root"
})
export class AuthService implements OnInit {
	usuario: any;
	token: string | undefined;

	constructor() { }

	ngOnInit() {

	}

	getUser(): Usuario {
		if (this.usuario) {
			return this.usuario;
		}

		const tempUsuario = localStorage.getItem("usuario");
		if (tempUsuario) {
			this.usuario = JSON.parse(tempUsuario) as Usuario;
		}
		return this.usuario;
	}

	getToken(): string | undefined {
		if (this.token) {
			return this.token;
		}

		const tokenGuardado = localStorage.getItem("token");
		if (tokenGuardado) {
			this.token = tokenGuardado;
		}

		return this.token;
	}

	setUser(usuario: Usuario): void {
		this.usuario = usuario;
		localStorage.setItem("usuario", JSON.stringify(usuario));
	}

	setToken(token: string): void {
		this.token = token;
		localStorage.setItem("token", token);
	}

	isLogged(): boolean {
		return !!(this.getUser() && this.getToken());
	}

	isValidToken(): boolean {
		if (!this.getToken()) {
			return false;
		}
		let tokenInfo = tokenService.parseJwt(this.getToken() as string)
		return new Date() < new Date(tokenInfo.exp);
	}

	logout(): void {
		localStorage.removeItem("token");
		localStorage.removeItem("usuario");
		delete this.usuario;
		delete this.token;
	}
}
