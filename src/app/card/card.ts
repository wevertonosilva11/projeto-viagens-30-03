import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  // 1. O titulo que estava faltando
tituloPrincipal = 'why choose Touz'; 

// 2. A lista de bagagens no lugar certo
diferenciais = [
  {
    icone: '/cards/ticket.svg fill.png';
    titulo: 'ultimate flexibility'
    descrisao: "you're in control, with free cancellation..."
  },
{
  icone: '/cards/hot-air-balloon.svg fill.png',
  titulo: 'Memorable experiences',
  descricao: 'Browse and book tours and activities...'
},
{
  icone:'/cards/diamond.svg fill.png',
  titulo: 'Quality at our core'
  descrisao: 'High-quality standards. Millions of reviews...'
},
{icone: '/cards/medal.svg fill.png',
  titulo: 'Award-winnig support',
  descrisao: 'New price? New plan? No problem...'
}

];
}

