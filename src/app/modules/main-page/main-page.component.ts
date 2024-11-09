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

  categorias: string[] = ['Cultura', 'Educação', 'Tecnologia'];
  bancas: string[] = ['FINEP'];
  estados: string[] = ['PA', 'RS', 'RO'];

  // Valores selecionados para os selects
  selectedBanca: string = '';
  selectedCategoria: string = '';
  selectedEstado: string = '';

  editais: Edital[] = []; // Array para armazenar os editais
  itemsPerPage = 4; // Itens por página
  currentPage = 1; // Página atual

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }

  async fetchEditais(): Promise<void> {
    try {
      const response = await fetch('https://senac-crawlers.onrender.com/api/editais/'); // URL da sua API
      const data = await response.json();

      // Mapeia cada item JSON para uma instância da classe Edital
      this.editais = data.map((item: any) => new Edital(item));
    } catch (error) {
      console.error('Erro ao buscar os editais:', error);
    }
  }

  ngOnInit(): void {
    // Chama fetchEditais ao iniciar o componente para carregar os dados
    this.fetchEditais();
  }

  // Método para obter os itens da página atual
  get paginatedEditais(): Edital[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.editais.slice(startIndex, endIndex);
  }

  // Número total de páginas
  get totalPages(): number {
    return Math.ceil(this.editais.length / this.itemsPerPage);
  }

  // Navegar para a próxima página
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Navegar para a página anterior
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Ir para uma página específica
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
