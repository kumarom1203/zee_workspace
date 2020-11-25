import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Logger } from '../../../../../core/logger/logger.service';

const log = new Logger('EditBranchComponent');

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  regConfig: FormGroup;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<EditStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    log.debug(this.data);
    this.createForm();
  }

  createForm(): void {
    this.regConfig = this.formBuilder.group({
      staffName: new FormControl(this.data.Staff_Group_Name, [Validators.required, Validators.maxLength(120)]),
    });
  }

  get f(): any {
    return this.regConfig.controls;
  }

  hasError = (contorlName: string, errorName: string) => {
    return ((this.submitted || this.f[contorlName].touched)
      && this.f[contorlName].hasError(errorName)
    );
  }


  onCloseDialog(): void {
    this.matDialogRef.close({});
  }
  onSubmitDialog() {
    this.submitted = true;
    this.data['Staff_Group_Name'] = this.regConfig.value['staffName'];
    this.matDialogRef.close(this.data);
  }


}
