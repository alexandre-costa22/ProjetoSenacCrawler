import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatSelectModule   } from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule    } from '@angular/material/input';
import { EmailPopupComponent } from '../register-user/email-popup/email-popup.component';
import { TmplAstBoundAttribute } from '@angular/compiler';


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
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  categorias: string[] = ['Cultura', 'Educação', 'Tecnologia'];
  bancas: string[] = ['FINEP'];
  estados: string[] = ['PA', 'RS', 'RO'];

  // Valores selecionados para os selects
  selectedBanca: string = '';
  selectedCategoria: string = '';
  selectedEstado: string = '';

  isPopupVisible = false

  openClosePopup() {
    if(this.isPopupVisible = false){
        this.isPopupVisible = true
      console.log(this.isPopupVisible)
    } else if (this.isPopupVisible = true){
      this.isPopupVisible = false
      console.log(this.isPopupVisible)
    }
  }
}
