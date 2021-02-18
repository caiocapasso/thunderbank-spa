import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AccountPlan } from "../models/account-plan.model";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root"
})
export class PlanoContaService {
	constructor(private http: HttpClient, private authService: AuthService) {}

	obterTodosPlanos(): Observable<AccountPlan[]> {
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});
		return this.http.get<AccountPlan[]>(
			`${environment.API_URL}plano-conta/`,
			{
				headers: headers
			}
		);
	}

	//tipo: 1=Receita; 2=Despesas
	obterPlanos(tipo: number): Observable<any> {
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});
		return this.http.get(`${environment.API_URL}plano-conta/tipo/${tipo}`, {
			headers: headers
		});
	}

	deletarPlano(id: number): Observable<any> {
		console.log("deleta plano = ", id);
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});
		return this.http.delete(`${environment.API_URL}plano-conta/${id}`, {
			headers: headers
		});
	}

	criarPlano(dados: AccountPlan): Observable<any> {
		console.log("criar plano = ", dados);
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			authorization: `Bearer ${this.authService.getToken()}`
		});

		return this.http.post(`${environment.API_URL}plano-conta/`, dados, {
			headers: headers
		});
	}
}
