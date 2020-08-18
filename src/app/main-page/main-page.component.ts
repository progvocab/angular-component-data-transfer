import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ ]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getData(e){
    console.log(e);
  }

}