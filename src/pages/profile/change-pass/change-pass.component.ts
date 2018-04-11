import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogService } from '../../../core/dialog/dialog.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html'
})
export class ChangePassComponent implements OnInit {

  @Input() user: any;
  @Output() changeF: EventEmitter<any> = new EventEmitter();
  private pass: String;
  private oldPass: String;
  private cfPass: String;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {

  }

  submit() {

    if(!this.check()) return;

    this.user.password = this.oldPass;
    this.user.newPassword = this.pass;

    this.changeF.emit();
  }

  check() {

    if(this.pass != this.cfPass) {

      this.dialogService.showError("New Pass doens't match the cf one!");

      return false;
    }

    return true;
  }

}