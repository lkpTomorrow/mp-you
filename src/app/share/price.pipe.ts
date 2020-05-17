import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { toNumber } from 'ng-zorro-antd';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  static currency:any;

  constructor(@Inject(LOCALE_ID) _locale:string){
    console.log('price-pipe-local：',_locale)
    PricePipe.currency = new CurrencyPipe(_locale); // TODO 具体没太懂；使用ts内使用pipe的方法写一个管道
  }


  transform(value: number | string | null | undefined, args?: any): string {
    
   const num = toNumber(value,null); // TODO 直接复制粘贴了convert.js



   // 参照： <span>{{num | currency: ‘CNY‘:‘symbol-narrow‘}}</span>
   return num<=0?'面议': PricePipe.currency.transform(num,'CNY','symbol-narrow');


  }

}
