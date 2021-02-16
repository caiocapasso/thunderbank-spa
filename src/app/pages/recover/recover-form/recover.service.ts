import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Recover } from "./recover.model";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class RecoverService {
	constructor(private httpClient: HttpClient) {}

	//TODO: precisa implementar
	recover(credenciais: Recover): Observable<object> {
		return this.httpClient.post(
			`${environment.API_URL}usuario/recuperar`,
			credenciais
		);
	}
}
