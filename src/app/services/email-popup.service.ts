import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmailPopupComponent } from '../modules/register-user/email-popup/email-popup.component';


@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(EmailPopupComponent);
  }
}