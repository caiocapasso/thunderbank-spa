import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../../services/auth.service";
import { Login, LoginResponse } from "./login.model";
import { tap, map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class LoginService {
	constructor(
		private httpClient: HttpClient,
		private authService: AuthService
	) {}

	logar(credenciais: Login): Observable<LoginResponse> {
		console.log("loginService.logar()");
		return this.httpClient
			.post<LoginResponse>(`${environment.API_URL}login`, credenciais)
			.pipe(
				tap((response) => {
					this.authService.setUsuario(response.usuario);
					this.authService.setToken(response.token);
				}),
				map((response) => {
					response.usuario.nome = response.usuario.nome.toLowerCase();
					return response;
				})
			);
	}
}
