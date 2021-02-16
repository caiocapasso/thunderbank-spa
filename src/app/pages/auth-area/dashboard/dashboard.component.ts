import { Component, OnInit } from "@angular/core";
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
import { DashboardService } from "src/app/shared/services/dashboard.service";
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

	usuario: any;
	dashBoard: any;
	lancamentos: any;

	constructor(private authService: AuthService, private dashBoardService: DashboardService, private lancamentoService: LancamentoService) { }

	ngOnInit(): void {
		this.usuario = this.authService.getUser();
		this.dashBoardService.obterSaldo().subscribe(response => {
			this.dashBoard = response
		});
		this.lancamentoService.obterLancamentos().subscribe(response => {
			this.lancamentos = response
		});
	}
}
