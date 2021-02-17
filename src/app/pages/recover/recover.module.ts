import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RecoverRoutingModule } from "./recover-routing.module";
import { RecoverComponent } from "./recover.component";
import { RecoverFormComponent } from "./recover-form/recover-form.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	declarations: [RecoverComponent, RecoverFormComponent],
	imports: [CommonModule, RecoverRoutingModule, FormsModule, SharedModule]
})
export class RecoverModule {}
