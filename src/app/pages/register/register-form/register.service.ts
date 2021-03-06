import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Register } from "../../../shared/models/register.model";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class RegisterService {
	constructor(private httpClient: HttpClient) { }

	register(credenciais: Register): Observable<Object> {
		return this.httpClient.post(`${environment.API_URL}usuario`, {
			...credenciais,
			saldo: 1000
		});
	}
}
