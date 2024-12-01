import { Component } from '@angular/core';
import { PopupService } from '../../services/email-popup.service';
import { Edital } from '../../class/itemEditais';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  bancas: string[] = ['Todas','FINEP', 'Fundect', 'FAPESC', 'FAPERGS']; 
  selectedBanca: string = ''; 
  filtrarResultados: string = '';  // Variável para armazenar o texto do input de filtro
  editais: Edital[] = []; 
  itemsPerPage = 10; 
  currentPage = 1; 
  loading: boolean = false;  

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }

  async fetchEditais(): Promise<void> {
    this.loading = true;
    try {
      const response = await fetch('https://senac-crawlers.onrender.com/api/editais/'); 
      const data = await response.json();
      this.editais = data.map((item: any) => new Edital(item));
    } catch (error) {
      console.error('Erro ao buscar os editais:', error);
    } finally {
      this.loading = false;  
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

  retornaImagem(banca:string){
    let bancaUpper = banca.toUpperCase()
    if (bancaUpper == "FAPERGS"){
      return "assets/icons/fapergs.png"
    } else if (bancaUpper == "FAPESC") {
      return "assets/icons/FAPESC.png"
    } else if (bancaUpper == "FINEP"){
      return "assets/icons/finep.png"
    } else if (bancaUpper == "FUNDECT"){
      return "assets/icons/fundect.png"
    } else {
      return ""
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
    let filtered = this.editais;

    // Filtra pela banca
    if (this.selectedBanca && this.selectedBanca !== 'Todas') {
      filtered = filtered.filter((edital) =>
        edital.nome_banca.toLowerCase().includes(this.selectedBanca.toLowerCase())
      );
    }

    // Filtra pelo texto de busca (no título, descrição ou nome da banca)
    if (this.filtrarResultados) {
      const query = this.filtrarResultados.toLowerCase();
      filtered = filtered.filter((edital) =>
        edital.titulo.toLowerCase().includes(query) ||
        edital.descricao.toLowerCase().includes(query) ||
        edital.nome_banca.toLowerCase().includes(query)
      );
    }

    return filtered;
  }
}
