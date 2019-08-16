import { Component,OnInit,HostListener } from '@angular/core';
import * as luxy from 'luxy.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fxmulti';
  
  public xPos="0";
  public yPos="0";
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    // https://tympanus.net/Tutorials/CustomCursors/index5.html
    // Needs to be changed
    this.xPos = e.pageX;
    this.yPos = e.pageY;
    
    (document.querySelector('.circle-out') as HTMLElement).style.top = this.yPos.toString() + 'px';
    (document.querySelector('.circle-out') as HTMLElement).style.left = this.xPos.toString() + 'px';
    

  }
  ngOnInit(){
    luxy.init();
    
  }
}
