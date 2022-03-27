import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor( 
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void { 
  let script = this._renderer2.createElement('script');
  script.type = 'text/javascript';
  script.text = `
  var slider = document.getElementById("stars");
  var output = document.getElementById("rating");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  `;
  this._renderer2.appendChild(this._document.body, script);
}

}
