import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize, take } from "rxjs/operators";
import { Register } from "../../../shared/models/register.model";
import { RegisterService } from "./register.service";

@Component({
	selector: "app-register-form",
	templateUrl: "./register-form.component.html",
	styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent {
	dados: Register = {
		cpf: "",
		nome: "",
		tel: "",
		login: "",
		senha: ""
	};

	aceite = false;

	isLoading = false;
	hasError = false;

	@ViewChild("cpfInput") cpfInput: ElementRef | undefined;
	@ViewChild("nomeInput") nomeInput: ElementRef | undefined;
	@ViewChild("telInput") telInput: ElementRef | undefined;
	@ViewChild("loginInput") loginInput: ElementRef | undefined;
	@ViewChild("senhaInput") senhaInput: ElementRef | undefined;

	constructor(
		private registerService: RegisterService,
		private router: Router
	) {}

	onSubmit(form: NgForm): void {
		console.log("form was submmited", form);

		if (!form.valid) {
			console.log("form is not valid");
			Object.keys(form.controls).forEach((key) => {
				form.controls[key].markAsTouched();
			});
			return;
		}

		for (const control of Object.keys(form.controls)) {
			if (form.controls[control].invalid) {
				const input = `${control}Input` as keyof RegisterFormComponent;
				(this[input] as ElementRef).nativeElement.focus();
				break;
			}
		}

		this.userRegister();
	}

	validateInput(inputName: string, form: NgForm): boolean {
		if (!form.controls[inputName]) {
			return false;
		}

		return (
			form.controls[inputName].invalid && form.controls[inputName].touched
		);
	}

	userRegister(): void {
		this.hasError = false;
		this.isLoading = true;

		this.registerService
			.register(this.dados)
			.pipe(
				take(1),
				finalize(() => (this.isLoading = false))
			)
			.subscribe(
				() => this.onSuccess(),
				(error) => this.onError(error)
			);
	}

	onSuccess(): void {
		//alert de sucesso
		void this.router.navigate(["login"]);
	}

	onError(error: HttpErrorResponse): void {
		this.hasError = true;
		console.log("onError ->  ", error);
	}
}
