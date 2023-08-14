import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent {

  showHiddenProjects: boolean = false;

  toggleHiddenProjects() {
    this.showHiddenProjects = !this.showHiddenProjects;

    if (this.showHiddenProjects) {
      const showMoreButton = document.getElementById("showMoreButton");
      if (showMoreButton) {
        showMoreButton.style.display = "none";
      }
    }
  }

  constructor(private router: Router, private sharedDataService: SharedDataService) { }



  navigateToDetails(project: any) {
    this.sharedDataService.setSelectedProject(project); // Stocker les détails du projet sélectionné
    this.router.navigate(['/realisation-details']);
  }


}
