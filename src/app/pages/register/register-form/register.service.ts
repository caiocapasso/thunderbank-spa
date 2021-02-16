import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Register } from "./register.model";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class RegisterService {
	constructor(private httpClient: HttpClient) { }

	register(credenciais: Register): Observable<object> {
		console.log("exibindo o que tá vindo" + JSON.stringify(credenciais))
		return this.httpClient.post(`${environment.API_URL}usuario`, {
			...credenciais,
			saldo: 1000
		});
	}
}
