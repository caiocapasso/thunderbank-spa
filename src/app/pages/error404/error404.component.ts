import { Component } from "@angular/core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-error404",
	templateUrl: "./error404.component.html",
	styleUrls: ["./error404.component.scss"]
})
export class Error404Component {
	faExclamationTriangle = faExclamationTriangle;
}
