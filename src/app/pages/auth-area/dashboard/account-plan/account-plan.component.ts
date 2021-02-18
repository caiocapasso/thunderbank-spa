import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { PlanoContaService } from '../../../../shared/services/plano-conta.service';

@Component({
	selector: "app-account-plan",
	templateUrl: "./account-plan.component.html",
	styleUrls: ["./account-plan.component.scss"]
})
export class AccountPlanComponent implements OnInit {
	faWallet = faWallet;

	@Input() plano: any;
	@Output() planoChange = new EventEmitter<any>();
	planosConta: any;

	constructor(private planoContaService: PlanoContaService) {}

	ngOnInit(): void {
		this.planoContaService.obterTodosPlanos().subscribe(response => {
		  	this.planosConta = response;
		})
	}

	pegarValor(event: any) {
		this.plano = event.value;
		this.planoChange.emit(event.value);
	}
}
