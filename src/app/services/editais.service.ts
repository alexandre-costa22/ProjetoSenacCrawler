import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, deleteDoc, doc, updateDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditaisService {
  private collectionPath = 'editais'; // Nome da coleção no Firestore

  constructor(private firestore: Firestore) {}

  // Obter todos os editais
  getEditais(): Observable<any[]> {
    const editalCollection = collection(this.firestore, this.collectionPath);
    return collectionData(editalCollection, { idField: 'id' });
  }

  // Adicionar um novo edital
  addEdital(edital: { titulo: string; descricao: string; nome_banca: string }) {
    const editalCollection = collection(this.firestore, this.collectionPath);
    return addDoc(editalCollection, edital);
  }

  // Atualizar um edital existente
  updateEdital(id: string, data: Partial<{ titulo: string; descricao: string; nome_banca: string }>) {
    const editalDoc = doc(this.firestore, `${this.collectionPath}/${id}`);
    return updateDoc(editalDoc, data);
  }

  // Deletar um edital
  deleteEdital(id: string) {
    const editalDoc = doc(this.firestore, `${this.collectionPath}/${id}`);
    return deleteDoc(editalDoc);
  }
}
