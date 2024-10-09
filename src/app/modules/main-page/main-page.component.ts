import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatSelectModule   } from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule    } from '@angular/material/input';
import { EmailPopupComponent } from '../register-user/email-popup/email-popup.component';
import { PopupService } from '../../services/email-popup.service';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    EmailPopupComponent,
    NgIf,
    MatDialogModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }

  categorias: string[] = ['Cultura', 'Educação', 'Tecnologia'];
  bancas: string[] = ['FINEP'];
  estados: string[] = ['PA', 'RS', 'RO'];

  // Valores selecionados para os selects
  selectedBanca: string = '';
  selectedCategoria: string = '';
  selectedEstado: string = '';
}
