
import * as THREE from 'three';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private mouseX = 0;
  private  mouseY = 0;
  private windowHalfX = window.innerWidth / 2;
			private windowHalfY = window.innerHeight / 2;
  createGeometry = function(){
    var geometry = new THREE.BufferGeometry();
				var vertices = [];
				var vertex = new THREE.Vector3();
				for ( var i = 0; i < 500; i ++ ) {
					vertex.x = Math.random() * 2 - 1;
					vertex.y = Math.random() * 2 - 1;
					vertex.z = Math.random() * 2 - 1;
					vertex.normalize();
					vertex.multiplyScalar( 350 );
					vertices.push( vertex.x, vertex.y, vertex.z );
					vertex.multiplyScalar( Math.random() * 0.2 + 1 );
					vertices.push( vertex.x, vertex.y, vertex.z );
				}
				geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
				return geometry;
  }
  // onDocumentMouseMove(event){
  //   this.mouseX = event.clientX - this.windowHalfX;
	// 			this.mouseY = event.clientY - this.windowHalfY;
  // }

  // onDocumentTouchStart(event) {
  //   if ( event.touches.length > 1 ) {
  //     event.preventDefault();
  //     this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
  //     this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
  //   }
  // }
  // onDocumentTouchMove (event) {
  //   if ( event.touches.length == 1 ) {
  //     event.preventDefault();
  //     this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
  //     this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
  //   }
  // }
  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

    
    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x4f4f4f );
    this.light.position.z = 10;
    this.scene.add(this.light);
    let i, line,material, p, parameters = [ [ 0.25, 0x000000, 2 ], [ 0.5, 0x000000, 2 ], [ 0.75, 0x000000, 0.75 ], [ 1, 0x000000, 0.5 ], [ 1.25, 0x000000, 0.8 ],
							       [ 3.0, 0x000000, 0.75 ], [ 3.5, 0x000000, 0.5 ], [ 4.5, 0x000000, 0.25 ], [ 5.5, 0x000000, 0.125 ] ];

    let geometry = this.createGeometry();
    // i=1
    for( i = 0; i < parameters.length; ++ i ) {
      p = parameters[ i ];
      material = new THREE.LineBasicMaterial( { color: p[ 1 ], opacity: p[ 2 ] } );
      line = new THREE.LineSegments( geometry, material );
      line.scale.x = line.scale.y = line.scale.z = p[ 0 ];
      line.userData.originalScale = p[ 0 ];
      line.rotation.y = Math.random() * Math.PI * 4;
      
      line.rotation.z = Math.random() * Math.PI;
      line.rotation.x = Math.random() * (Math.PI/6);
      line.updateMatrix();
      this.scene.add( line );
      
    }
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    this.renderer.setPixelRatio( window.devicePixelRatio );

    // document.getElementById('engine-wrapper').appendChild( this.renderer.domElement );
    // document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
    // document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
    // document.addEventListener( 'touchmove', this.onDocumentTouchMove, false );
    // setInterval( function () {
    //   // geometry = createGeometry();
    //   this.scene.traverse( function ( object ) {
    //     if (object.isLine) {
    //       object.geometry.dispose();
    //       object.geometry = geometry;
    //     }
    //   } );
    // }, 1000 );
  }

  animate(): void {
    window.addEventListener('DOMContentLoaded', () => {
      this.render();
    });
    // document.addEventListener('mousemove',(event)=>{
    //   this.onDocumentMouseMove(event)
    // })
    // document.addEventListener('touchstart',(event)=>{
    //   this.onDocumentTouchStart(event)
    // })
    // document.addEventListener('touchmove',(event)=>{
    //   this.onDocumentTouchMove(event)
    // })
    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });
    this.camera.position.y += ( - this.mouseY + 200 - this.camera.position.y ) * .05;
    this.camera.lookAt( this.scene.position );
    this.renderer.render( this.scene, this.camera );
    var time = Date.now() *0.00002;
				for ( var i = 0; i < this.scene.children.length; i ++ ) {
					var object = this.scene.children[ i ];
					
						object.rotation.y = time * ( i < 4 ? ( i + 1 ) : - ( i + 1 ) );
						if ( i < 5 ) {
							var scale = object.userData.originalScale * ( i / 5 + 1 ) * ( 1 + 0.5 * Math.sin(7* time ) );
							object.scale.x = object.scale.y = object.scale.z ;
						}
					

    // this.renderer.render(this.scene, this.camera);
  }
}

  resize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }
}
