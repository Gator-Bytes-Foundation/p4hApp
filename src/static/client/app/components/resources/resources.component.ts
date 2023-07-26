import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  folders: any[] = [];
  icons: string[] = [];

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {
    this.resourcesService.getResourceFolders().subscribe((resources: { folders: any[]; icons: string[]; }) => {
      this.folders = resources.folders;
      this.icons = resources.icons;
    });
  }
}
