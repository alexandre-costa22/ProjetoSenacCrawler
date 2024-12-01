import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-email-popup',
  templateUrl: './email-popup.component.html',
  styleUrls: ['./email-popup.component.css']
})

export class EmailPopupComponent {
  constructor(public dialogRef: MatDialogRef<EmailPopupComponent>) {}

  public gatilhoSpinner : boolean = false;
  public gatilhoConfirma: boolean = false;

  // Método para fechar o diálogo
  closeDialog(): void {
    this.dialogRef.close();
  }

  cadastra(){
    this.gatilhoSpinner = true;
  }
}
