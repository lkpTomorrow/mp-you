import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { validateConfig } from "@angular/router/src/config";

import { map } from "rxjs/operators";

@Component({
  selector: "mp-default-layout",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"]
})
export class DefaultLayoutComponent implements OnInit {
  constructor(public http: HttpClient) {}

  public navList: any = [];
  ngOnInit() {
    let url = "http://localhost:3000/nav";
    this.http
      .get(url)
      .pipe(
        map((items: any) =>
          items.map((item:any) => ({
            title: item.categoryName,
            link: `/pages/product/list/${item.id}`
          }))
        )
      )
      .subscribe(res => {
        console.log("接口访问到了：", res);
        this.navList = res || [];
        console.log(this.navList);
      });
  }
}
