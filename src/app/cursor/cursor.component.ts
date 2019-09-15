import { Component, OnInit } from '@angular/core';
import TweenMax from '../../assets/js/TweenMax.min.js';
@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = (document.querySelector('.cursor--small') as HTMLDivElement);
    // this.loadScript('../assets/js/TweenMax.min.js');
    const initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener('mousemove', e => {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
     // innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      // if you are already using TweenMax in your project, you might as well
      // use TweenMax.set() instead
      TweenMax.set(innerCursor, {
        x: clientX,
        y: clientY
      });

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
    };

    initCursor();
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
