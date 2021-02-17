import { Component, OnInit } from "@angular/core";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  faWallet = faWallet;
  constructor() { }

  ngOnInit(): void {
  }
}