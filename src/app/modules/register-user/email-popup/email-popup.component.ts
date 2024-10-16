import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../../main-page/main-page.component';
import { MatDialogRef } from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-email-popup',
  standalone: true,
  templateUrl: './email-popup.component.html',
  imports: [CommonModule, FormsModule, MainPageComponent, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule],
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
