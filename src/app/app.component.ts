import { Component } from "@angular/core";
import { NzI18nService } from "ng-zorro-antd";

// import getISOWeek from 'date-fns/get_iso_week';
import { en_US, zh_CN } from "ng-zorro-antd";
import { PreloaderSpinnerService } from "./core/preloader-spinner.service";
@Component({
  selector: "mp-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "market-place";

  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;

  constructor(
    private i18n: NzI18nService,
    public preloader: PreloaderSpinnerService
  ) {}

  onChange(result: Date): void {
    console.log("onChange: ", result);
  }

  getWeek(result: Date): void {
    // console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.preloader.hide();
  }
}
