import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserAccountPlanComponent } from "./user-account-plan.component";

describe("UserAccountPlanComponent", () => {
	let component: UserAccountPlanComponent;
	let fixture: ComponentFixture<UserAccountPlanComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserAccountPlanComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(UserAccountPlanComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
