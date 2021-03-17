import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularfile1';
  public images : any = []
  constructor(private fileservice : FileService){}
  ngOnInit(){
    this.fileservice.getImages().subscribe(data => {
       this.images = data 
    });
  }
}
