import { Component,OnInit } from '@angular/core';
import { Event, RouterModule, Routes, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {LoadingService} from './loading.service.';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'p4hApp';
  loading: boolean = false;
  routing: boolean = false;

  
  constructor(private router: Router, private loadingService: LoadingService) {

    router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event)
    });

    this.loadingService.isLoading.subscribe((v) => {
      console.log('loading: ' + v);
      this.loading = v;
    });
  }

  ngOnInit() {
  }

  navigationInterceptor(event: Event): void {

      if(event instanceof NavigationStart) {
        this.routing = true; 
        console.log('routing is true'); 
      }
      if(event instanceof NavigationEnd) {
        this.routing = false; 
        console.log('routing is false');  
      } 
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.routing = false;
      }
      if (event instanceof NavigationError) {
        this.routing = false;
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
  }
}
