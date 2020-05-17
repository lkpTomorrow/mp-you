import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mp-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  @Input() navList:any;
  constructor() { }

  // public navList:any=[];
  ngOnInit() {
    // this.navList=this.list;
    console.log('header-ngOnInit',this.navList)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('header-ngAfterViewInit',this.navList)
  }
}
