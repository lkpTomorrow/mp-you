import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }


  @Input() list:any[];
  ngOnInit() {
  }

}
