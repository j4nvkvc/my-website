import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-verification',
  template: `
    <div>
      <h2>Route Verification</h2>
      <p>Checking different routes...</p>
    </div>
  `,
  styles: []
})
export class RouteVerificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Define an array of routes to check
    const routesToCheck = ['/home', '/about', '/realisations', '/contact'];

    // Loop through routes and navigate to each
    routesToCheck.forEach(route => {
      this.router.navigate([route]);
    });
  }
}

