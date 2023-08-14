import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {


  selectedProject: any; // Stocker les détails du projet sélectionné

  constructor() { }

  setSelectedProject(project: any) {
    this.selectedProject = project;
  }

  getSelectedProject() {
    return this.selectedProject;
  }

}
