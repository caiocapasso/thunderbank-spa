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

		//const headers = new Headers({ "Content-Type": "application/json" });
		const headers = new HttpHeaders({ "Content-Type": "application/json", "authorization": "Bearer " + this.authService.getToken() });
		return this.http.get(`${environment.API_URL}conta/dashboard/${usuario.id}`, { headers: headers });
	}
}

//FIXME: referência servico implementado no projeto anterior
// const url = baseUrl + "conta/dashboard";
// const obterSaldo = () => {
//   if (token) {
//     const headers = new Headers({ "Content-Type": "application/json" });
//     headers.append("authorization", "Bearer " + token);
//     const jwtDecode = tokenService.parseJwt(token);
//     console.log('jwtDecode', jwtDecode)

//     return fetch(url + "/" + jwtDecode.conta, {
//       method: "GET",
//       headers: headers,
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw Error(`Erro: ${response.status} - ${response.statusText}`);
//       }
//       return response;
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };
