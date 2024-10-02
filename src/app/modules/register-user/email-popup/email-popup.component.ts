import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../../main-page/main-page.component';

@Component({
  selector: 'app-email-popup',
  standalone: true,
  templateUrl: './email-popup.component.html',
  imports: [CommonModule, FormsModule, MainPageComponent],
  styleUrls: ['./email-popup.component.css']
})

export class EmailPopupComponent {

  constructor (main: MainPageComponent){
    this.closePopup = main.openClosePopup
  }

  isVisible: boolean = true;
  email: string = ''; // Definindo a propriedade email

  // Adicionando o método closePopup para fechar o popup
  closePopup() {
  }
}
