import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // este serviço vai ter acesso à lista de produtos:

  produtos: IProduto[] = produtos;

  constructor(){}

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
