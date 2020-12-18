import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  Obj:any = 
  [
  {
    fav:'Add to Favourite',
    com:'Add to Compare',
    sort:'Shortlist Product',
    cart:'Add to cart',
    contact:'Contact Seller'
  }
]
  @Output() data = new EventEmitter<any>();
  ngOnInit(): void {
    this.data.emit(this.Obj)
  }
  
}
