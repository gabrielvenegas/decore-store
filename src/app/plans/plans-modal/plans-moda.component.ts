import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'plans-modal',
    templateUrl: 'plans-modal.component.html',
})
export class PlansModalComponent implements OnInit {


    constructor(
        public dialogRef: MatDialogRef<PlansModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit(): void {
        console.log(this.data);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    update() { }
}