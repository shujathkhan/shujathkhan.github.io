import { Component, OnInit } from '@angular/core';
import {TextScramble} from './TextScramble';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    const phrases = [
      'Thinker',
      'Designer',
      'Creative developer',
      'Problem solver',
      '#justsaying',
      'Dancer',
      
    ]

    const el = document.querySelector('.text')
    const fx = new TextScramble(el)

    let counter = 0
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        
      })
      counter = (counter + 1) // % phrases.length
   
    }
    next();
    var myInterval = setInterval(function(){
      if(counter==phrases.length){
        clearInterval(myInterval);
        const fx1 = new TextScramble(document.querySelector('.reflectIam'))
        fx1.setText('I am Shujath').then(() => {
        
        })
      }else{
        next();
      }
    },2000)
    this.loadScript('../assets/js/imagesloaded.pkgd.min.js');
    this.loadScript('../assets/js/TweenMax.min.js');
    this.loadScript('../assets/js/demo.js');
    
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
