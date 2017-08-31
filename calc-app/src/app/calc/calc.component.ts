import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

   private _result;
   @Input() number1;
   @Input() number2;
   @Input() sign = '';
   @Output() onCalculated = new EventEmitter<number>();

   get result() :number{
    return this._result;
   }

   clear(){
    this.number1 = undefined;
    this.number2 = undefined;
    this._result = undefined;
    this.sign = undefined;
    this.onCalculated.emit(undefined);
   }
  onNumbersChange(){
   switch(this.sign){
    case '+':
      this._result = this.number1 + this.number2; 
    break;
    case '-':
    this._result = this.number1 - this.number2; 
    break;
    case '*':
    this._result = this.number1 * this.number2; 
    break;
    case '/':
    this._result = this.number1 / this.number2; 
    break;
   }
 }
 getResult(){
  this.onNumbersChange();
  this.onCalculated.emit(this.result);
 }
 operation (sign)
 {
  this.sign = sign;
  this.onNumbersChange();
  this.onCalculated.emit(this.result);
 }
  constructor() { }

  ngOnInit() {
  }

}
