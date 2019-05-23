import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PlanService } from "../plans.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
    selector: 'new-plan-modal',
    templateUrl: 'new-plan-modal.component.html',
})
export class NewPlanModalComponent implements OnInit, OnDestroy {

    // Public variables
    plan = {
        reference: "",
        preApproval: {
            name: "",
            charge: "",
            period: "",
            amountPerPayment: 0,
            dayOfMonth: 0,
            details: "",
            initialDate: new Date(),
            finalDate: new Date()
        }
    }

    // Private variables
    private _destroyed$ = new Subject();
    constructor(
        public dialogRef: MatDialogRef<NewPlanModalComponent>,
        private planService: PlanService) {
    }

    ngOnInit(): void { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    create() {
        this.planService.create(this.plan)
            .pipe(takeUntil(this._destroyed$))
            .subscribe(res => {
                console.log(res);
            })
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
}