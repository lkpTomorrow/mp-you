import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { map, tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class HomeService {
  // path = "/marketplace-web/api/product/"; // TODO-kskb 
  path = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getProductList(field: "hot" | "new"): Observable<any[]> {
    if (field === "hot") {
      console.log('hot-homeService')
      return this.queryProductInfo();
    } else {
      return this.queryNewProduct();
    }
  }
  // hot分类
  queryProductInfo() {
    console.log('hot-service')
    const url = `${this.path}query-productInfo`;
    return this.http.get(url).pipe(map(res => this.parseProductList(res)));
    // TODO pipe-map传递的是整个的res返回（在多个返回的时候，map类似数组的map）；第二个map是数组的map；
  }
  // new分类
  queryNewProduct() {
    console.log('new-service')
    const url = `${this.path}query-newProduct`;
    return this.http.get(url).pipe(map(res => this.parseProductList(res)));
  }

  parseProductList(list):any[] {
    console.log('map的参数：',list); // 就是整个的res
    if(!list){
      return [];
    }
    return list.map(item=>({
      tenantId: item.tenantId,
      productCode: item.productCode,
      orderSupplierId: item.orderSupplierId,
      thumb: 'http://placehold.it/400x200',
      title: item.productName,
      star: item.overallMerit || 0,
      price: item.productPrice,
      desc: item.productSummary,
      link:`/pages/product/detail/${item.productCode}`
    })).slice(0,6);
    // TODO slice 不改变原数组，返回新数组；
    // splice改变原数组，返回删除的部分的数组
  }
}
