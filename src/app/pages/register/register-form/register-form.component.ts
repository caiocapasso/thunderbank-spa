import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize, take } from "rxjs/operators";
import { RegisterService } from "./register.service";

@Component({
	selector: "app-register-form",
	templateUrl: "./register-form.component.html",
	styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent {
	cpf = "";
	nome = "";
	tel = "";
	login = "";
	senha = "";
	aceite = false;
	isLoading = false;
	hasError = false;

	/*@ViewChild("cpfInput") cpfInput: ElementRef | undefined;
	@ViewChild("nomeInput") nomeInput: ElementRef | undefined;
	@ViewChild("telInput") telInput: ElementRef | undefined;
	@ViewChild("loginInput") loginInput: ElementRef | undefined;
	@ViewChild("senhaInput") senhaInput: ElementRef | undefined;
*/
	constructor(
		private registerService: RegisterService,
		private router: Router
	) { }

	onSubmit(form: NgForm): void {
		console.log("form was submmited", form);

		if (!form.valid) {
			console.log("form is not valid");
			Object.keys(form.controls).forEach((key) => {
				form.controls[key].markAsTouched();
			});
			return;
		}

		this.register();
	}

	validateInput(inputName: string, form: NgForm): boolean {
		if (!form.controls[inputName]) {
			return false;
		}

		return (
			form.controls[inputName].invalid && form.controls[inputName].touched
		);
	}

	register(): void {
		this.hasError = false;
		this.isLoading = true;

		const userData = {
			cpf: this.cpf,
			nome: this.nome,
			telefone: this.tel,
			login: this.login,
			senha: this.senha
		};

		this.registerService
			.register(userData)
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
		//alert de sucesso
		void this.router.navigate(["login"]);
	}

	onErrorLogin(error: HttpErrorResponse): void {
		this.hasError = true;
		console.log("onError ->  ", error);
	}
}
