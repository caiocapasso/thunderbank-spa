import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanoContaService } from '../../services/plano-conta.service';

@Component({
  selector: 'app-select-account-plan',
  templateUrl: './select-account-plan.component.html',
  styleUrls: ['./select-account-plan.component.scss']
})
export class SelectAccountPlanComponent implements OnInit {

  @Output() plano = new EventEmitter<any>();
  planosConta: any;

  @Input() tipo = 0;

  constructor(private planoContaService: PlanoContaService) { }

  ngOnInit(): void {
    this.planoContaService.obterPlanos(this.tipo).subscribe(response => {
      this.planosConta = response;
    })
  }

  pegarValor(event: any) {
    this.plano.emit(event.value);
  }

}
