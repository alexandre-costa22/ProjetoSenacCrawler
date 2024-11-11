import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmailPopupComponent } from '../register-user/email-popup/email-popup.component';
import { PopupService } from '../../services/email-popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Edital } from '../../class/itemEditais';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


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
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // categorias: string[] = ['Cultura', 'Educação', 'Tecnologia'];
  bancas: string[] = ['Todas','FINEP', 'Fundect', 'FAPESC', 'FAPERGS', 'MP']; 
  // estados: string[] = ['PA', 'RS', 'RO'];

  selectedBanca: string = ''; 
  // selectedCategoria: string = '';
  // selectedEstado: string = '';

  editais: Edital[] = []; 
  itemsPerPage = 10; 
  currentPage = 1; 

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }

  async fetchEditais(): Promise<void> {
    try {
      const response = await fetch('https://senac-crawlers.onrender.com/api/editais/'); 
      const data = await response.json();
      this.editais = data.map((item: any) => new Edital(item));
    } catch (error) {
      console.error('Erro ao buscar os editais:', error);
    }
  }

  ngOnInit(): void {
    this.fetchEditais();
  }

  get paginatedEditais(): Edital[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredEditais.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredEditais.length / this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get filteredEditais(): Edital[] {
    if (this.selectedBanca && this.selectedBanca !== 'Todas') {
      return this.editais.filter((edital) =>
        edital.nome_banca.toLowerCase().includes(this.selectedBanca.toLowerCase())
      );
    } else if (this.selectedBanca === 'Todas') {
      return this.editais;  // Retorna todos os editais quando 'Todas' é selecionada
    }
    return this.editais;  // Caso não haja filtro, retorna todos
  }
  
}
