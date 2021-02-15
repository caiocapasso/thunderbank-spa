export class UserTransfer {
	constructor(
		public login: string,
		public senha: string,
		public contaId: number,
		public planoContaId: number,
		public valor: number,
		public descricao: string,
		public lancamentoTipo: string,
		public dataHora: Date
	) {}
}
