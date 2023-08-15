import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { ActivatedRoute } from '@angular/router';

declare global {
  interface Window {
    bootstrap: any;
  }
}


@Component({
  selector: 'app-realisation-details',
  templateUrl: './realisation-details.component.html',
  styleUrls: ['./realisation-details.component.scss']
})

export class RealisationDetailsComponent implements OnInit {

  project: any;  // Stocker les détails du projet actuel
  private carousel: any; // Stocke l'instance du carrousel initialisé

  @ViewChild('carouselExampleControls', { static: false }) carouselElement!: ElementRef; // Utilisation de ViewChild



  constructor(
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  projects = [
    {
      id: 1,
      title: 'Wildflix',
      technologies: ['Typescript', 'Angular', 'Java', 'SpringBoot', 'Bootstrap', 'HTML', 'CSS'],
      description: 'Application destinée aux coachs et aux clubs voulant suivre les performances et la progression de leurs sportifs',
      functionalities: [
        'Création de programmes sur plusieurs semaines',
        'Planification des séances d\'entrainement pour une équipe ou un sportif',
        'Suivi de la réalisation des exercices',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },
    {
      id: 2,
      title: 'Amazing Recipes',
      technologies: ['Javascript', 'Typescript', 'Angular', 'HTML', 'CSS', 'API', 'Bootstrap'],
      description: 'Description du projet 2',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        '/assets/recette-photos/recette1.png',
        '/assets/recette-photos/recette2.png',
        '/assets/recette-photos/recette3.png',
        '/assets/recette-photos/recette4.png',
        '/assets/recette-photos/recette5.png',
        '/assets/recette-photos/recette6.png',
        '/assets/recette-photos/recette7.png',

      ]
    },
    {
      id: 3,
      title: 'My Personal Site Web',
      technologies: ['Javascript', 'Typescript', 'Angular', 'HTML', 'CSS', 'Bootstrap'],
      description: 'Description du projet 3',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },
    {
      id: 4,
      title: 'Magicways',
      technologies: ['Javascript', 'HTML', 'CSS', 'Wordpress', 'Bootstrap'],
      description: 'Description du projet 4',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },
    {
      id: 5,
      title: 'Restaurant Sofia',
      technologies: ['Javascript', 'HTML', 'CSS', 'Wordpress', 'Bootstrap'],
      description: 'Description du projet 5',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },
    {
      id: 6,
      title: 'Armada Travel Madagascar',
      technologies: ['Javascript', 'HTML', 'CSS', 'Wordpress', 'Bootstrap'],
      description: 'Description du projet 6',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },
    {
      id: 7,
      title: 'Association Turquoises',
      technologies: ['Javascript', 'HTML', 'CSS', 'Wordpress', 'Bootstrap'],
      description: 'Description du projet 6',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },

    {
      id: 8,
      title: 'kwiper',
      technologies: ['Javascript', 'HTML', 'CSS', 'Wordpress'],
      description: 'Description du projet 6',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },
    {
      id: 9,
      title: 'Astrocenter',
      technologies: ['Javascript', 'HTML', 'CSS', 'Wordpress', 'Symphony'],
      description: 'Description du projet 6',
      functionalities: [
        'Suivi en direct de la position des utilisateurs',
        'Clustering des utilisateurs',
        'Vue en toile d\'araignée sur utilisateurs trop rapprochés',
        // ... autres fonctionnalités ...
      ],
      images: [
        'chemin/vers/image1.jpg',
        'chemin/vers/image2.jpg',
        // ... autres images ...
      ]
    },


  ];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = Number(params.get('id'));
      this.project = this.projects.find(proj => proj.id === projectId);
    });
  }

  ngAfterViewInit() {
    const carouselElement = this.carouselElement.nativeElement;
    if (carouselElement) {
      const nextArrow = carouselElement.querySelector('.carousel-control-next');
      const prevArrow = carouselElement.querySelector('.carousel-control-prev');

      if (nextArrow) {
        this.renderer.listen(nextArrow, 'click', (event) => {
          event.preventDefault();
          this.carousel.next();
        });
      }

      if (prevArrow) {
        this.renderer.listen(prevArrow, 'click', (event) => {
          event.preventDefault();
          this.carousel.prev();
        });
      }

      this.carousel = new window['bootstrap'].Carousel(carouselElement);
    }
  }

  playCarousel() {
    if (this.carousel) {
      this.carousel.cycle();
    }
  }

  pauseCarousel() {
    if (this.carousel) {
      this.carousel.pause();
    }
  }

  prevSlide() {
    if (this.carousel) {
      this.carousel.prev();
    }
  }

  nextSlide() {
    if (this.carousel) {
      this.carousel.next();
    }
  }
}
