import { Component, OnInit } from '@angular/core';
import {EngineService} from './engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {
  private canEleId = 'renderCanvas';
  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();
  }

}
