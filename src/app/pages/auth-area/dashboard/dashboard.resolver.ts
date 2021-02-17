import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { DashboardService } from "src/app/shared/services/dashboard.service";

@Injectable({
    providedIn: 'root'
})
export class DashBoardResolver implements Resolve<Observable<any>> {

    constructor(private dashBoardService: DashboardService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        return this.dashBoardService.obterSaldo();
    }
}