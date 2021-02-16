import { Component, OnInit } from "@angular/core";

import { faWallet } from "@fortawesome/free-solid-svg-icons";
@Component({
	selector: "app-payment",
	templateUrl: "./payment.component.html",
	styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
	faWallet = faWallet;
	constructor() {}

	ngOnInit(): void {}
}
