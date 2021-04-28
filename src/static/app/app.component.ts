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

  constructor(private router: Router) {

    router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: Event): void {

      if(event instanceof NavigationStart) {
        this.loading = true; 
        console.log('loading is true'); 
      }
      if(event instanceof NavigationEnd) {
        this.loading = false; 
        console.log('loading is false');  
      } 
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.loading = false;
      }
      if (event instanceof NavigationError) {
        this.loading = false;
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
  }
}
