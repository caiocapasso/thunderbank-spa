import { Usuario } from "../../models/usuario.model";

export interface Login {
	login: string;
	senha: string;
}

export interface LoginResponse {
	conta: {
		descricao: string;
		id: number;
		numero: string;
		saldo: number;
		tipo: string;
	};
	contaCredito: {
		descricao: string;
		id: number;
		numero: string;
		saldo: number;
		tipo: string;
	};
	dataFim: Date;
	dataInicio: Date;
	token: string;
	usuario: Usuario;
}
