import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'mp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { 
    // tab的选中状态
    this.currentUrl = this.router.routerState.snapshot.url;
  }

  @Input() list:any;

  public currentUrl:string; // 当前url
  public subscription:Subscription;
  ngOnInit() {

    // TODO 路由事件
    this.subscription= this.router.events
    .pipe(filter((event:RouterEvent)=>event instanceof NavigationEnd))
    .subscribe((event:RouterEvent)=>{
      this.currentUrl = event.url;
    })
  }

  // 取消订阅（有订阅就必须取消！！！！）
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    
  }
}
