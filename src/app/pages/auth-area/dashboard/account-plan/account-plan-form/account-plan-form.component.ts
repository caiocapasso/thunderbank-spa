import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { faCheckCircle, faBan } from "@fortawesome/free-solid-svg-icons";
import { take, finalize } from "rxjs/operators";
import { RegisterFormComponent } from "src/app/pages/register/register-form/register-form.component";
import { RegisterService } from "src/app/pages/register/register-form/register.service";
import { AccountPlan } from "src/app/shared/models/account-plan.model";
import { Register } from "src/app/shared/models/register.model";
import { PlanoContaService } from "src/app/shared/services/plano-conta.service";
@Component({
	selector: "app-account-plan-form",
	templateUrl: "./account-plan-form.component.html",
	styleUrls: ["./account-plan-form.component.scss"]
})
export class AccountPlanFormComponent {
	faCheckCircle = faCheckCircle;
	faBan = faBan;

	dados: AccountPlan = {
		tipo: 0,
		descricao: "",
		usuarioId: 0
	};

	aceite = false;

	isLoading = false;
	hasError = false;

	constructor(
		private planoContaService: PlanoContaService,
		private router: Router
	) { }

	onSubmit(form: NgForm): void {
		if (!form.valid) {
			Object.keys(form.controls).forEach((key) => {
				form.controls[key].markAsTouched();
			});
			return;
		}

		this.submit();
	}

	validateInput(inputName: string, form: NgForm): boolean {
		if (!form.controls[inputName]) {
			return false;
		}

		return (
			form.controls[inputName].invalid && form.controls[inputName].touched
		);
	}

	submit(): void {
		this.hasError = false;
		this.isLoading = true;

		this.planoContaService
			.criarPlano(this.dados)
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
		void this.router.navigate(["dashboard/account-plan"]);
	}

	onError(error: HttpErrorResponse): void {
		this.hasError = true;
		console.log("onError ->  ", error);
	}
}
