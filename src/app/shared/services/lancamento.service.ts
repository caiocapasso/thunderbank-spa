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
	constructor(private http: HttpClient, private authService: AuthService) { }

	obterLancamentos(): Observable<any> {

		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});
		return this.http.get(
			`${environment.API_URL}lancamento`,
			{ headers }
		);
	}

	realizarLancamento(lancamento: Lancamento): Observable<any> {
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});

		return this.http.post(
			`${environment.API_URL}lancamento/`,
			lancamento,
			{ headers }
		);
	}
}
