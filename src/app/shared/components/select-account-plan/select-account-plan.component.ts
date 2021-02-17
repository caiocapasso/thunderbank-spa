import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlanoContaService } from '../../services/plano-conta.service';

@Component({
  selector: 'app-select-account-plan',
  templateUrl: './select-account-plan.component.html',
  styleUrls: ['./select-account-plan.component.scss']
})
export class SelectAccountPlanComponent implements OnInit {

  @Output() plano = new EventEmitter<any>();
  planosConta: any;

  constructor(private planoContaService: PlanoContaService) { }

  ngOnInit(): void {
    this.planoContaService.obterPlanosReceita().subscribe(response => {
      this.planosConta = response;
    })
  }

  pegarValor(event: any) {
    this.plano.emit(event.value);
  }

}
