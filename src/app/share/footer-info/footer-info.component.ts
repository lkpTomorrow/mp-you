import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mp-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FooterInfoComponent implements OnInit {

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cdRef.detach(); // TODO 这个到底干嘛的？？？
  }
}
