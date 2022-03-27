import { Component, OnInit, Renderer2, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showVar: boolean = false;
  showFav: boolean = false;
  showCart: boolean = false;
  showSearch: boolean = false;

  toggleAccount() {
    this.showVar = true;
    // console.log(this.showVar, this.showFav, this.showCart, this.showSearch);
  }
  toggleFavourite() {
    this.showFav = true;
    // console.log(this.showVar, this.showFav, this.showCart, this.showSearch);
  }
  toggleCart() {
    this.showCart = true;
    // console.log(this.showVar, this.showFav, this.showCart, this.showSearch);
  }
  toggleSearch() {
    this.showSearch = true;
    // console.log(this.showVar, this.showFav, this.showCart, this.showSearch);
  }
  cross() {
    this.showCart = false;
    this.showFav = false;
    this.showSearch = false;
    this.showVar = false;
    // console.log(this.showVar, this.showFav, this.showCart, this.showSearch);
  }


  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
    ) { }

  ngOnInit(): void { 
  let script = this._renderer2.createElement('script');
  script.type = 'text/javascript';
  script.text = `
  function openside() {
    document.getElementById("sidePanel").style.width = "450px";
  }
  
  function closeside() {
    document.getElementById("sidePanel").style.width = "0";
  }
  `;
  this._renderer2.appendChild(this._document.body, script);
}

}
