import { Component, OnInit } from "@angular/core";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-deposit",
	templateUrl: "./deposit.component.html",
	styleUrls: ["./deposit.component.scss"]
})
export class DepositComponent implements OnInit {
	faHandHoldingUsd = faHandHoldingUsd;
	constructor() {}

	ngOnInit(): void {}
}
