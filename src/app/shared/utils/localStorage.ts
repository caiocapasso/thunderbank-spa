// exemplo objeto decodificado:
//jwt = {
//conta: 1 //-> conta do usuario
//exp: 1613334911
//iat: 1613331311
//iss: "bank line"
//sub: "1" //-> id do usuario
//nome: "franklin" //-> nome do usuario
//}

const parseJwt = (token) => {
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	return JSON.parse(jsonPayload);
};

const formatarDinheiro = (valor: number) => {
	return valor
		? valor.toLocaleString("pt-BR", {
				minimumFractionDigits: 2,
				style: "currency",
				currency: "BRL"
		  })
		: "valor indisponível";
};

const formatarData = (valor: string): string => {
	const tempDate = new Date(valor);
	console.log(tempDate);
	const bla = `${tempDate.getDate()}/${
		tempDate.getMonth() + 1
	}/${tempDate.getFullYear()}`;
	console.log(bla);
	return bla;
};

export const token = (): string | null => {
	return localStorage.getItem("token");
};

const sair = (): void => {
	console.log("saiu");
	window.localStorage.removeItem("token");
	window.location.replace("/");
};

const isLogado = (): boolean => {
	console.log("isLogado = ", window.localStorage.getItem("token"));
	return !!window.localStorage.getItem("token");
};

export const tokenService = {
	parseJwt,
	isLogado,
	sair,
	formatarData,
	formatarDinheiro
};
