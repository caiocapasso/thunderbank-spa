import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { Login, LoginResponse } from "./login.model";
import { tokenService } from "../../utils/localStorage";

@Injectable({
	providedIn: "root"
})
export class LoginService {
	constructor(
		private httpClient: HttpClient,
		private authService: AuthService
	) { }

	login(credenciais: Login): Observable<LoginResponse> {
		return this.httpClient
			.post<LoginResponse>(
				`${environment.API_URL}usuario/logar`,
				credenciais
			)
			.pipe(
				tap((response) => {
					const dados = tokenService.parseJwt(response.token);
					const usuario = {
						id: dados.sub,
						nome: dados.nome,
						contas: dados.contas,
						contaNumero: dados.contaNumero,
						cartaoNumero: dados.cartaoNumero
					};
					this.authService.setUser(usuario);
					this.authService.setToken(response.token);
				})
			);
	}

	logout(): void {
		this.authService.logout();
	}
}
