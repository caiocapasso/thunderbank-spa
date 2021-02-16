import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/shared/models/usuario.model";
import { AuthService } from "src/app/shared/services/auth.service";
import {
	faMoneyCheckAlt,
	faCreditCard,
	faMoneyBill,
	faWallet,
	faCommentsDollar,
	faHandHoldingUsd,
	faCoins
} from "@fortawesome/free-solid-svg-icons";

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

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.usuario = this.authService.getUser();
	}
}
