import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-email-popup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule
  ],
  templateUrl: './email-popup.component.html',
  styleUrls: ['./email-popup.component.css'],
})
export class EmailPopupComponent {
  public gatilhoSpinner: boolean = false;
  public gatilhoConfirma: boolean = false;

  constructor(public dialogRef: MatDialogRef<EmailPopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onFormSubmit(event: Event): void {
    event.preventDefault(); // Previne envio padrão
    this.gatilhoSpinner = true;

    setTimeout(() => {
      this.gatilhoSpinner = false;
      this.gatilhoConfirma = true;
    }, 3000); // Simula o tempo de envio
  }
}
