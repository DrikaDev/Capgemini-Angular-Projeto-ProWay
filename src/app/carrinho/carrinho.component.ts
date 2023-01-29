import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho, produtos } from '../produtos/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[]= [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

    ngOnInit(): void{
      this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    }

    // criar método para calcular o total dos valores do carrinho:
    calculaTotal(){
      this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
    }

    removerProdutoCarrinho(produtoId: number){
      this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId)
      this.carrinhoService.removerProdutoCarrinho(produtoId);
      this.calculaTotal();
    }

    comprar(){
      alert("Parabéns, compra finalizada!");
      this.carrinhoService.limparCarrinho();
      this.router.navigate(['produtos']);
    }
}
