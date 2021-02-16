import { Component, OnInit } from "@angular/core";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-transfer",
	templateUrl: "./transfer.component.html",
	styleUrls: ["./transfer.component.scss"]
})
export class TransferComponent implements OnInit {
	faCommentsDollar = faCommentsDollar;
	constructor() {}

	ngOnInit(): void {}
}
