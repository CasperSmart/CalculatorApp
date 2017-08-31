import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-res',
  templateUrl: './calc-res.component.html',
  styleUrls: ['./calc-res.component.css']
})
export class CalcResComponent implements OnInit {

  result: number

  constructor() { }

  ngOnInit() {}
  
  onCalculated(result){
    this.result = result;
  }
}
