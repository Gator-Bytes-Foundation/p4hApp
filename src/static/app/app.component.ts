import { Component } from '@angular/core';
import { Event, RouterModule, Routes, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'p4hApp';
  public loading = false;

  constructor(router:Router) {
    router.events.subscribe((event: Event ) => {
      if(event instanceof NavigationStart) {
        this.loading = true; 
      }
      if(event instanceof NavigationEnd) {
        this.loading = false; 
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}
