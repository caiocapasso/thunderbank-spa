import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
	selector: "app-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
	usuario = "";
	senha = "";

	constructor() {}

	ngOnInit(): void {}

	onSubmit(form: NgForm): void {
		console.log("form was submmited", form);

		if (!form.valid) {
			console.log("form is not valid");
			form.controls.usuario.markAsTouched();
			form.controls.senha.markAsTouched();
			return;
		}

		console.log("form is valid");
		this.login();
	}

	exibeErro(inputName: string, form: NgForm): boolean {
		if (!form.controls[inputName]) {
			return false;
		}

		return (
			form.controls[inputName].invalid && form.controls[inputName].touched
		);
	}

	login(): void {
		console.log("login");
	}
}
