import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class LancamentoService {
	constructor() {}
}

//FIXME: referência servico implementado no projeto anterior
// const url = baseUrl + "lancamento";
// const salvar = ({ valor, descricao, planoDeConta }) => {
//   if (token) {
//     const headers = new Headers({ "Content-Type": "application/json" });
//     headers.append("authorization", "Bearer " + token);

//     const jwtDecode = tokenService.parseJwt(token);

//     return fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         contaId: jwtDecode.conta,
//         planoContaId: planoDeConta,
//         valor: valor,
//         descricao: descricao,
//         lancamentoTipo: "RECEITA",
//         dataHora: new Date(),
//       }),
//       headers: headers,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(`Erro: ${response.status} - ${response.statusText}`);
//         }
//         return response;
//       })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };

// const obterLancamentos = () => {
//   if (token) {
//     const headers = new Headers({ "Content-Type": "application/json" });
//     headers.append("authorization", "Bearer " + token);

//     const jwtDecode = tokenService.parseJwt(token);

//     return fetch(url + "/" + jwtDecode.conta, {
//       method: "GET",
//       headers: headers,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(`Erro: ${response.status} - ${response.statusText}`);
//         }
//         return response;
//       })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };
