import { HomeService } from './../home.service';
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mp-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private $service:HomeService) {}

  /**
   * 最新和最热产品
   */
  public productListActived: "hot" | "new" = "hot"; // hot：热门；new：最新
  public productList$: Observable<any[]>;

  ngOnInit() {
    // hot | new 产品
    this.loadProductList("hot");
  }

  /**
   * 产品列表类型变更--tab change
   */
  handleProductListChange(field: "hot" | "new") {
    console.log('change-tab',field)
    if (this.productListActived === field) return;
    this.productListActived = field;
    this.loadProductList(field);
  }
  /**
   * 加载产品列表信息-- 加载列表
   */
  loadProductList(field: "hot" | "new") {
    console.log('hot-home.component')
    // TODO 如果不subscribe的话，那么函数是不执行的； htm中使用async也会执行的；
    // this.productList$ = this.$service.getProductList(field).subscribe(
    //   res=>{
    //     console.log(res)
    //   }
    // )
     this.productList$ = this.$service.getProductList(field); // TODO 返回的是数据流
  }
}
