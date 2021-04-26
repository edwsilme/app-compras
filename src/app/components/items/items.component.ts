import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total:number = 0;


  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 4000,
        quantity: 2,
        completed: false
      },

      {
        id: 1,
        title: 'pera',
        price: 3200,
        quantity: 5,
        completed: true
      },

    ];

    this.getTotal();

  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();
  }

  toggleItem(item: Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items.filter(item => !item.completed)
    .map(item => item.quantity * item.price)
    .reduce( (acc, item) => acc += item, 0);
  }

}
