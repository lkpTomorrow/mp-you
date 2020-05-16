import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderSpinnerService {


  private _selector = 'preloader';
  private _element:HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  public show(): void{
    this._element.style['display']='block';
  }

  public hide(): void{
    this._element.style.display= 'none';
  }

}
