import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize, take } from "rxjs/operators";
import { RecoverService } from "./recover.service";

@Component({
	selector: "app-recover-form",
	templateUrl: "./recover-form.component.html",
	styleUrls: ["./recover-form.component.scss"]
})
export class RecoverFormComponent {
	login = "";
	isLoading = false;
	hasError = false;

	@ViewChild("loginInput") loginInput: ElementRef | undefined;

	constructor(
		private recoverService: RecoverService,
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

		this.recover();
	}

	validateInput(inputName: string, form: NgForm): boolean {
		if (!form.controls[inputName]) {
			return false;
		}

		return (
			form.controls[inputName].invalid && form.controls[inputName].touched
		);
	}

	recover(): void {
		this.hasError = false;
		this.isLoading = true;

		const userData = {
			login: this.login
		};

		this.recoverService
			.recover(userData)
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
