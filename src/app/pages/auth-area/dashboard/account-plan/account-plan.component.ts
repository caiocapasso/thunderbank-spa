import { Component, OnInit } from "@angular/core";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-account-plan",
	templateUrl: "./account-plan.component.html",
	styleUrls: ["./account-plan.component.scss"]
})
export class AccountPlanComponent implements OnInit {
	faWallet = faWallet;
	constructor() {}

	ngOnInit(): void {}
}
