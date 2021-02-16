import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Lancamento } from "../models/lancamento.model";

@Injectable({
	providedIn: "root"
})
export class LancamentoService {
	constructor(private http: HttpClient, private authService: AuthService) {}

	obterLancamentos(): Observable<any> {
		const usuario = this.authService.getUser();
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});
		return this.http.get(
			`${environment.API_URL}lancamento/${usuario.contas[0]}`,
			{ headers }
		);
	}

	realizarDeposito(lancamento: Lancamento): Observable<any> {
		const usuario = this.authService.getUser();
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});

		return this.http.post(
			`${environment.API_URL}lancamento/${usuario.contas[0]}`,
			lancamento,
			{ headers }
		);
	}
}

//FIXME: referência servico implementado no projeto anterior
// const url = baseUrl + "lancamento";
// const salvar = ({ valor, descricao, planoDeConta }) => {
//   if (token) {
//     const headers = new Headers({ "Content-Type": "application/json" });
//     headers.append("authorization", "Bearer " + token);

//     const jwtDecode = tokenService.parseJwt(token);

//     return fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         contaId: jwtDecode.conta,
//         planoContaId: planoDeConta,
//         valor: valor,
//         descricao: descricao,
//         lancamentoTipo: "RECEITA",
//         dataHora: new Date(),
//       }),
//       headers: headers,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(`Erro: ${response.status} - ${response.statusText}`);
//         }
//         return response;
//       })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };
