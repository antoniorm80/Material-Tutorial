import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JerarquiaService {

  constructor() { }

  public loadScript() {
    console.log('preparing to load');
    let node = document.createElement('script');
    node.src = './assets/js/hierarchy.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('body')[0].appendChild(node);
  }
}
