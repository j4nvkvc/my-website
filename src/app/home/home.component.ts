import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})

export class HomeComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
// Liste des rôles possibles
const roles = ['Fullstack', 'Back-end', 'Front-end', 'Java Angular'];

// Élément span contenant le rôle
const dynamicRoleElement = document.getElementById('dynamicRole');

  // Vérification de null avant d'accéder à la propriété textContent
  if (dynamicRoleElement) {
    let currentRoleIndex = 0;

    setInterval(() => {
      dynamicRoleElement.textContent = roles[currentRoleIndex];
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }, 2000); // Change le rôle toutes les 3 secondes (ajustez selon vos préférences)
  }


  }


}
