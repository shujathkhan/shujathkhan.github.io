import { Component, OnInit, HostListener } from '@angular/core';
import * as luxy from 'luxy.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fxmulti';


  ngOnInit() {
    var orientation = window.screen.orientation;
    if (orientation.type === "landscape-primary") {
      luxy.init();
    }

  }
}
