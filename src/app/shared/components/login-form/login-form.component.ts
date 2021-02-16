import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize, take } from "rxjs/operators";
import { LoginService } from "./login.service";

@Component({
	selector: "app-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent {
	usuario = "";
	senha = "";
	isLoading = false;
	hasError = false;

	@ViewChild("usuarioInput") userInput: ElementRef | undefined;
	@ViewChild("senhaInput") passInput: ElementRef | undefined;

	constructor(private loginService: LoginService, private router: Router) {}

	onSubmit(form: NgForm): void {
		console.log("form was submmited", form);

		if (!form.valid) {
			console.log("form is not valid");
			form.controls.usuario.markAsTouched();
			form.controls.senha.markAsTouched();
			return;
		}

		if (form.controls.usuario.invalid) {
			this.passInput?.nativeElement.focus();
			return;
		}

		if (form.controls.senha.invalid) {
			this.userInput?.nativeElement.focus();
			return;
		}

		this.login();
	}

	validateInput(inputName: string, form: NgForm): boolean {
		if (!form.controls[inputName]) {
			return false;
		}

		return (
			form.controls[inputName].invalid && form.controls[inputName].touched
		);
	}

	login(): void {
		this.hasError = false;
		this.isLoading = true;

		const userData = {
			usuario: this.usuario,
			senha: this.senha
		};

		this.loginService
			.login(userData)
			.pipe(
				take(1),
				finalize(() => (this.isLoading = false))
			)
			.subscribe(
				() => this.onSuccessLogin(),
				(error) => this.onErrorLogin(error)
			);
	}

	onSuccessLogin(): void {
		void this.router.navigate(["dashboard"]);
	}

	onErrorLogin(error: HttpErrorResponse): void {
		this.hasError = true;
		console.log("onErrorLogin ->  ", error);
	}
}
