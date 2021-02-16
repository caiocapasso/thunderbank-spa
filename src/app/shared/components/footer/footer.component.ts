import { Component, OnInit } from "@angular/core";
import {
	faFacebookSquare,
	faInstagramSquare,
	faYoutubeSquare,
	faTwitterSquare,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { faPooStorm } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
	faFacebookSquare = faFacebookSquare;
	faInstagramSquare = faInstagramSquare;
	faYoutubeSquare = faYoutubeSquare;
	faTwitterSquare = faTwitterSquare;
	faLinkedin = faLinkedin;
	faPooStorm = faPooStorm;

	constructor() {}

	ngOnInit(): void {}
}
