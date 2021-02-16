import { Component, OnInit } from "@angular/core";

import { faUser } from "@fortawesome/free-solid-svg-icons";
@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
	faUser = faUser;
	constructor() {}

	ngOnInit(): void {}
}
