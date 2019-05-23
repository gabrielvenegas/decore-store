import { Component, OnInit } from '@angular/core';
import { PlanService } from './plans.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PlansModalComponent } from './plans-modal/plans-moda.component';
import { NewPlanModalComponent } from './new-plan-modal/new-plan-modal.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  // Public variable 
  plans: [];
  count: number;
  searchText: string;
  // Private variables
  private _destroyed$ = new Subject();
  constructor(private planService: PlanService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPlans();
  }

  openDialog(plan: any): void {
    const dialogRef = this.dialog.open(PlansModalComponent, {
      width: '500px',
      data: plan
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getPlans() {
    this.planService.get()
      .pipe(takeUntil(this._destroyed$))
      .subscribe(res => {
        this.plans = res[0];
        this.count = res[1];
      });
  }

  newPlan() {
    const dialogRef = this.dialog.open(NewPlanModalComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
