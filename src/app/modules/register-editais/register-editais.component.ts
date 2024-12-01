import { Component, OnInit } from '@angular/core';
import { EditaisService } from '../../services/editais.service';
import { BancasService } from '../../services/bancas.service';
import { firstValueFrom } from 'rxjs';
import { Banca } from '../../class/itemBancas';

@Component({
  selector: 'app-register-editais',
  templateUrl: './register-editais.component.html',
  styleUrls: ['./register-editais.component.css']
})
export class RegisterEditaisComponent implements OnInit {
  bancas: any[] = [];
  editais: any[] = [];
  newEdital = { titulo: '', descricao: '', nome_banca: '', valor: '', link: '', vencimento: '', data_publicacao: '' };

  constructor(private editaisService: EditaisService, private bancasService: BancasService) {}

  ngOnInit(): void {
    // Carregar bancas ao inicializar o componente
    this.fetchBancas();

    // Carregar editais
    this.editaisService.getEditais().subscribe((data) => {
      this.editais = data;
    });
  }

  async fetchBancas(): Promise<void> {
    try {
      const dados = await firstValueFrom(this.bancasService.getBancas());
      this.bancas = dados.map((item: any) => new Banca(item));
    } catch (error) {
      console.error('Erro ao buscar as bancas:', error);
    }
  }

  addEdital() {
    if (this.newEdital.titulo && this.newEdital.descricao && this.newEdital.nome_banca) {
      this.editaisService.addEdital(this.newEdital);
      this.newEdital = { titulo: '', descricao: '', nome_banca: '', valor: '', link: '', vencimento: '', data_publicacao: '' };
    }
  }

  deleteEdital(id: string) {
    this.editaisService.deleteEdital(id);
  }
}
