import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mp-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DefaultFooterComponent implements OnInit {

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
   this.cdRef.detach();
  }
}
