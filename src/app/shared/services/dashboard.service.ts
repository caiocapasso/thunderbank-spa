import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root"
})
export class DashboardService {
	constructor(private http: HttpClient, private authService: AuthService) { }


	obterSaldo(): Observable<any> {
		let usuario = this.authService.getUser();
		return this.http.get(`${environment.API_URL}conta/dashboard/${usuario.id}`);
	}
}