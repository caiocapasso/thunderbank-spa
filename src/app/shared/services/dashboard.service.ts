import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class DashboardService {
	constructor() {}
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
