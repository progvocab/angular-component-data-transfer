import { Component, OnInit, Input ,Output ,EventEmitter } from '@angular/core';
import { NgModel , NgForm } from '@angular/forms';  


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: [ ]
})
export class PersonDetailsComponent implements OnInit {

  constructor() { }
  @Input() salutation ;
  @Input() firstName ;
  @Input() lastName ;
  yearOfBirth = '';
   @Output() valueChange = new EventEmitter();
  ngOnInit() {
  }
  update(){
    this.valueChange.emit(this.yearOfBirth);
  }
}