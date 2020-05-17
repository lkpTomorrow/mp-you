import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mp-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  constructor() { }


  @Input() data:any;
  ngOnInit() {
  }

}
