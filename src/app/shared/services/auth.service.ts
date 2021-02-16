import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario.model";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	usuario: Usuario | undefined;
	token: string | undefined;

	constructor() {}

	getUsuario() {
		if (this.usuario) {
			return this.usuario;
		}

		const tempUsuario = localStorage.getItem("usuario");
		if (tempUsuario) {
			this.usuario = JSON.parse(tempUsuario) as Usuario;
		}
		return this.usuario;
	}

	getToken() {
		if (this.token) {
			return this.token;
		}

		const tokenGuardado = localStorage.getItem("token");
		if (tokenGuardado) {
			this.token = tokenGuardado;
		}

		return this.token;
	}

	setUsuario(usuario: Usuario) {
		this.usuario = usuario;
		localStorage.setItem("usuario", JSON.stringify(usuario));
	}

	setToken(token: string) {
		this.token = token;
		localStorage.setItem("token", token);
	}
}
