import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { LoginResponse } from "./login.model";
import { LoginService } from "./login.service";

@Component({
	selector: "app-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
	usuario = "";
	senha = "";

	@ViewChild("usuarioInput") usuarioInput: ElementRef | undefined;
	@ViewChild("senhaInput") senhaInput: ElementRef | undefined;

	constructor(
		private loginService: LoginService,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {}

	onSubmit(form: NgForm): void {
		console.log("form was submmited", form);

		if (!form.valid) {
			console.log("form is not valid");
			form.controls.usuario.markAsTouched();
			form.controls.senha.markAsTouched();
			return;
		}

		if (form.controls.usuario.invalid) {
			this.senhaInput?.nativeElement.focus();
			return;
		}

		if (form.controls.senha.invalid) {
			this.usuarioInput?.nativeElement.focus();
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
		const credenciais = {
			usuario: this.usuario,
			senha: this.senha
		};

		this.loginService.logar(credenciais).subscribe(
			(response) => this.onSuccessLogin(response),
			(error) => this.onErrorLogin(error)
		);
	}

	onSuccessLogin(response: LoginResponse): void {
		console.log("onSuccessLogin() -> ", response);
		this.router.navigate(["dashboard"]);
	}

	onErrorLogin(error: HttpErrorResponse): void {
		console.log("onErrorLogin ->  ", error);
	}
}
