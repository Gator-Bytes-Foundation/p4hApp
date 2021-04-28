import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() loading: boolean; 
  constructor() { 
    this.loading = false; 
    console.log('constructor for profile'); 
  }

  ngOnInit(): void {
    //this.loading = false; 
    console.log('init for profile'); 

  }
}
