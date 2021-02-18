import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
	faMoneyCheckAlt,
	faCreditCard,
	faMoneyBill,
	faWallet,
	faCommentsDollar,
	faHandHoldingUsd,
	faCoins
} from "@fortawesome/free-solid-svg-icons";

import { Usuario } from "src/app/shared/models/usuario.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { LancamentoService } from "src/app/shared/services/lancamento.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	faMoneyCheckAlt = faMoneyCheckAlt;
	faCreditCard = faCreditCard;
	faMoneyBill = faMoneyBill;
	faWallet = faWallet;
	faCommentsDollar = faCommentsDollar;
	faHandHoldingUsd = faHandHoldingUsd;
	faCoins = faCoins;

	usuario: Usuario | undefined;
	dashBoard: any;
	lancamentos: any[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private authService: AuthService,
		private lancamentoService: LancamentoService
	) { }

	ngOnInit(): void {
		this.usuario = this.authService.getUser();
		this.lancamentoService.obterLancamentos().subscribe((response) => {
			response.reverse().slice(0, 5).forEach((e: any) => {
				const tipo = this.authService
					.getUser()
					?.contas.indexOf(e.contaId);
				e.contaTipo = tipo == 0 ? "Conta Débito" : "Conta Crédito";
				this.lancamentos.push(e);
			});
		});

		this.dashBoard = this.activatedRoute.snapshot.data.dashBoard;
	}
}
