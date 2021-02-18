import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PlanoContaService } from "../../../../shared/services/plano-conta.service";
import {
	faPlus,
	faMoneyCheckAlt,
	faTrash,
	faEdit
} from "@fortawesome/free-solid-svg-icons";
import { AccountPlan } from "src/app/shared/models/account-plan.model";

@Component({
	selector: "app-account-plan",
	templateUrl: "./account-plan.component.html",
	styleUrls: ["./account-plan.component.scss"]
})
export class AccountPlanComponent implements OnInit {
	faPlus = faPlus;
	faMoneyCheckAlt = faMoneyCheckAlt;
	faTrash = faTrash;
	faEdit = faEdit;

	@Input() plano: any;
	@Output() planoChange = new EventEmitter<any>();
	planosConta: AccountPlan[] | undefined;

	constructor(private planoContaService: PlanoContaService) { }

	ngOnInit(): void {
		this.planoContaService
			.obterTodosPlanos()
			.subscribe((response: AccountPlan[]) => {
				this.planosConta = response;
			});
	}

	pegarValor(event: any): void {
		this.plano = event.value;
		this.planoChange.emit(event.value);
	}

	deletarPlano(id: number) {
		this.planoContaService.deletarPlano(id);
	}
}
