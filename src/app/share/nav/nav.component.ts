import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  constructor() { }

  @Input() list:any;
  ngOnInit() {
    console.log('nav-ngOnInit',this.list);
    setTimeout(()=>{
      console.log('nav-ngOnInit-timeout',this.list);
    },1000)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('nav-ngAfterViewInit',this.list);
  }
}
