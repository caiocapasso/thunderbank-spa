import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root"
})
export class PlanoContaService {
	constructor(private http: HttpClient, private authService: AuthService) {
	}

	obterPlanosReceita(): Observable<any> {

		const headers = new HttpHeaders({ "Content-Type": "application/json", "authorization": "Bearer " + this.authService.getToken() });
		return this.http.get(`${environment.API_URL}plano-conta/tipo/1`, { headers: headers });
	}

}
