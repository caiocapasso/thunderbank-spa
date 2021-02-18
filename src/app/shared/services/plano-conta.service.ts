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
	constructor(private http: HttpClient, private authService: AuthService) { }

	obterTodosPlanos(): Observable<AccountPlan[]> {
		return this.http.get<AccountPlan[]>(`${environment.API_URL}plano-conta`);
	}

	//tipo: 1=Receita; 2=Despesas
	obterPlanos(tipo: number): Observable<any> {
		return this.http.get(`${environment.API_URL}plano-conta/tipo/${tipo}`);
	}

	deletarPlano(id: number): Observable<any> {
		return this.http.delete(`${environment.API_URL}plano-conta/${id}`);
	}

	criarPlano(dados: AccountPlan): Observable<any> {
		dados.usuarioId = this.authService.getUser().id;
		return this.http.post(`${environment.API_URL}plano-conta`, dados);
	}
}
