import { HttpErrorResponse } from "@angular/common/http";
import { ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router"; 
import { finalize, take } from "rxjs/operators";
import { Lancamento } from "src/app/shared/models/lancamento.model";
import { LancamentoService } from "src/app/shared/services/lancamento.service";
@Component({
	selector: "app-credit-card-form",
	templateUrl: "./credit-card-form.component.html", 
	styleUrls: ["./credit-card-form.component.scss"]
})
export class CreditCardFormComponent {
	dados: Lancamento = {
		contaDestinoNumero: "",
		contaId: 0,
		dataHora: new Date(),
		descricao: "",
		lancamentoTipo: "",
		planoContaId: 0,
		valor: 0
	};

	isLoading = false;
	hasError = false;

	@ViewChild("valorInput") valorInput: ElementRef | undefined;
	@ViewChild("descricaoInput") descricaoInput: ElementRef | undefined;
	@ViewChild("planoContaInput") planoContaInput: ElementRef | undefined;

	constructor(
		private lancamentoService: LancamentoService,
		private router: Router
	) {}

	onSubmit(form: NgForm): void {
		if (!form.valid) {
			Object.keys(form.controls).forEach((key) => {
				form.controls[key].markAsTouched();
			});
			return;
		}

		for (const control of Object.keys(form.controls)) {
			if (form.controls[control].invalid) {
				const input = `${control}Input` as keyof CreditCardFormComponent;
				(this[input] as ElementRef).nativeElement.focus();
				break;
			}
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

		this.lancamentoService
			.realizarLancamento(this.dados)
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
		void this.router.navigate(["dashboard"]);
	}

	onError(error: HttpErrorResponse): void {
		this.hasError = true;
		console.log("onError ->  ", error);
	}

	pegarValorSelect(valor: any) {
		this.dados.planoContaId = valor;
	}
}