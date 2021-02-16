import { Component, OnInit } from "@angular/core";
import { faPooStorm } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-main-logo",
	templateUrl: "./main-logo.component.html",
	styleUrls: ["./main-logo.component.scss"]
})
export class MainLogoComponent implements OnInit {
	faPooStorm = faPooStorm;
	constructor() {}

	ngOnInit(): void {}
}
