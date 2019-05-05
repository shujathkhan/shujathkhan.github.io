(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"portfolio","version":"0.0.0","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build --prod","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^7.0.0","@angular/common":"^7.0.0","@angular/compiler":"^7.0.0","@angular/core":"^7.0.0","@angular/forms":"^7.0.0","@angular/http":"^7.0.0","@angular/platform-browser":"^7.0.0","@angular/platform-browser-dynamic":"^7.0.0","@angular/router":"^7.0.0","bootstrap":"^4.1.3","core-js":"^2.5.7","jquery":"^3.3.1","pixi.js":"^4.8.4","rxjs":"^6.3.0","textillate":"^0.4.1","three":"^0.97.0","zone.js":"^0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"~0.10.0","@angular/cli":"^7.0.1","@angular/compiler-cli":"^7.0.0","@angular/language-service":"^7.0.0","@types/jasmine":"^2.8.8","@types/jasminewd2":"~2.0.2","@types/node":"^10.12.0","@types/three":"^0.92.14","codelyzer":"^4.4.2","jasmine-core":"~3.1.0","jasmine-spec-reporter":"~4.2.1","karma":"^3.1.3","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"^2.0.1","karma-jasmine":"^1.1.2","karma-jasmine-html-reporter":"^1.2.0","protractor":"^5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"~3.1.3"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"ucons\">UNDER CONSTRUCTION</div>  -->\n\n\n<div id=\"desc\"></div>\n<div id=\"old\"></div>\n<app-social></app-social>\n<app-logo></app-logo>\n\n<app-engine></app-engine>\n\n<!-- <app-mousetrail></app-mousetrail> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var url1 = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js';
var url2 = 'assets/js/desc.js';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.loadScript = function (url) {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    AppComponent.prototype.ngOnInit = function () {
        // this.loadScript(url1)
        this.loadScript(url2);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        setTimeout(function () {
            document.getElementById('desc').innerHTML = 'A new kind of Web-portfolio Xperience!';
            document.getElementById('old').innerHTML = 'Or did you like the OLD one better? <a style="color:black" target="_blank" href="https://shujathlive.github.io/old_portfolio/backup-portfolio"><i class="fa fa-external-link fa-1x"></i></a>';
        }, 7000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styleUrls: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/engine.component */ "./src/app/engine/engine.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__["EngineComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_6__["SocialComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/engine/engine.component.html":
/*!**********************************************!*\
  !*** ./src/app/engine/engine.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"engine-wrapper\">\n  <canvas id=\"renderCanvas\"></canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/engine/engine.component.ts":
/*!********************************************!*\
  !*** ./src/app/engine/engine.component.ts ***!
  \********************************************/
/*! exports provided: EngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineComponent", function() { return EngineComponent; });
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.service */ "./src/app/engine/engine.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EngineComponent = /** @class */ (function () {
    function EngineComponent(engServ) {
        this.engServ = engServ;
        this.canEleId = 'renderCanvas';
    }
    EngineComponent.prototype.ngOnInit = function () {
        this.engServ.createScene(this.canEleId);
        this.engServ.animate();
    };
    EngineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-engine',
            template: __webpack_require__(/*! ./engine.component.html */ "./src/app/engine/engine.component.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [_engine_service__WEBPACK_IMPORTED_MODULE_0__["EngineService"]])
    ], EngineComponent);
    return EngineComponent;
}());



/***/ }),

/***/ "./src/app/engine/engine.service.ts":
/*!******************************************!*\
  !*** ./src/app/engine/engine.service.ts ***!
  \******************************************/
/*! exports provided: EngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineService", function() { return EngineService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EngineService = /** @class */ (function () {
    function EngineService() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.createGeometry = function () {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
            var vertices = [];
            var vertex = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
            for (var i = 0; i < 500; i++) {
                vertex.x = Math.random() * 2 - 1;
                vertex.y = Math.random() * 2 - 1;
                vertex.z = Math.random() * 2 - 1;
                vertex.normalize();
                vertex.multiplyScalar(350);
                vertices.push(vertex.x, vertex.y, vertex.z);
                vertex.multiplyScalar(Math.random() * 0.2 + 1);
                vertices.push(vertex.x, vertex.y, vertex.z);
            }
            geometry.addAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](vertices, 3));
            return geometry;
        };
    }
    EngineService.prototype.onDocumentMouseMove = function (event) {
        this.mouseX = event.clientX - this.windowHalfX;
        this.mouseY = event.clientY - this.windowHalfY;
    };
    EngineService.prototype.onDocumentTouchStart = function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    };
    EngineService.prototype.onDocumentTouchMove = function (event) {
        if (event.touches.length == 1) {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    };
    EngineService.prototype.createScene = function (elementId) {
        // The first step is to get the reference of the canvas element from our HTML document
        this.canvas = document.getElementById(elementId);
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        this.scene.add(this.camera);
        // soft white light
        this.light = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0x4f4f4f);
        this.light.position.z = 10;
        this.scene.add(this.light);
        var i, line, material, p, parameters = [[0.25, 0x000000, 2], [0.5, 0x000000, 2], [0.75, 0x000000, 0.75], [1, 0x000000, 0.5], [1.25, 0x000000, 0.8],
            [3.0, 0x000000, 0.75], [3.5, 0x000000, 0.5], [4.5, 0x000000, 0.25], [5.5, 0x000000, 0.125]];
        var geometry = this.createGeometry();
        for (i = 0; i < parameters.length; ++i) {
            p = parameters[i];
            material = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: p[1], opacity: p[2] });
            line = new three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"](geometry, material);
            line.scale.x = line.scale.y = line.scale.z = p[0];
            line.userData.originalScale = p[0];
            line.rotation.y = Math.random() * Math.PI;
            line.rotation.z = Math.random() * Math.PI;
            line.rotation.x = Math.random() * (Math.PI / 6);
            line.updateMatrix();
            this.scene.add(line);
        }
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
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
    };
    EngineService.prototype.animate = function () {
        var _this = this;
        window.addEventListener('DOMContentLoaded', function () {
            _this.render();
        });
        document.addEventListener('mousemove', function (event) {
            _this.onDocumentMouseMove(event);
        });
        document.addEventListener('touchstart', function (event) {
            _this.onDocumentTouchStart(event);
        });
        document.addEventListener('touchmove', function (event) {
            _this.onDocumentTouchMove(event);
        });
        window.addEventListener('resize', function () {
            _this.resize();
        });
    };
    EngineService.prototype.render = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.render();
        });
        this.camera.position.y += (-this.mouseY + 200 - this.camera.position.y) * .05;
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
        var time = Date.now() * 0.00002;
        for (var i = 0; i < this.scene.children.length; i++) {
            var object = this.scene.children[i];
            object.rotation.y = time * (i < 4 ? (i + 1) : -(i + 1));
            if (i < 5) {
                var scale = object.userData.originalScale * (i / 5 + 1) * (1 + 0.5 * Math.sin(7 * time));
                object.scale.x = object.scale.y = object.scale.z;
            }
            // this.renderer.render(this.scene, this.camera);
        }
    };
    EngineService.prototype.resize = function () {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    EngineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EngineService);
    return EngineService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  \n</section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logo/logo.component.html":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div id=\"altern\" >C&nbsp;O&nbsp;M&nbsp;I&nbsp;N&nbsp;G  S&nbsp;O&nbsp;O&nbsp;N<br></div>\n<div id=\"three-container\"  ></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/logo/logo.component.scss":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ucons {\n  position: absolute;\n  background: transparent;\n  display: block;\n  min-height: 50%;\n  min-width: 50%;\n  color: lightgrey;\n  font-size: 120px; }\n\n#desc {\n  position: absolute;\n  left: 38%;\n  top: 60%;\n  background: transparent;\n  display: block;\n  min-height: 50%;\n  min-width: 50%;\n  color: black;\n  font-size: 30px; }\n\n#old {\n  position: absolute;\n  left: 51%;\n  z-index: 55;\n  top: 66%;\n  background: transparent;\n  display: block;\n  min-height: 50%;\n  min-width: 50%;\n  color: black;\n  font-size: 20px; }\n\n#altern {\n  display: none;\n  position: absolute;\n  font-size: 500%;\n  top: 35%;\n  left: 25%;\n  min-height: 50%;\n  min-width: 50%; }\n\n#three-container {\n  display: block; }\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (max-width: 600px) {\n  #three-container {\n    display: none; }\n  #altern {\n    display: block;\n    position: absolute;\n    font-size: 500%;\n    top: 25%;\n    left: 25%;\n    min-height: 50%;\n    min-width: 50%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9GOlxcTXkgV29ya3NcXFBvcnRGWFxccG9ydGZvbGlvL3NyY1xcYXBwXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQWlCO0VBRXJCLHdCQUFzQjtFQUN0QixlQUFhO0VBQ2IsZ0JBQWM7RUFDZCxlQUFhO0VBRWIsaUJBQWU7RUFDZixpQkFBZSxFQUdkOztBQUNEO0VBQ0ksbUJBQWlCO0VBQ3JCLFVBQVE7RUFDUixTQUFRO0VBQ1Isd0JBQXNCO0VBQ3RCLGVBQWE7RUFDYixnQkFBYztFQUNkLGVBQWE7RUFFYixhQUFrQjtFQUNsQixnQkFBYyxFQUdiOztBQUNEO0VBQ0ksbUJBQWlCO0VBQ3JCLFVBQVE7RUFDUixZQUFXO0VBQ1gsU0FBUTtFQUNSLHdCQUFzQjtFQUN0QixlQUFhO0VBQ2IsZ0JBQWM7RUFDZCxlQUFhO0VBRWIsYUFBa0I7RUFDbEIsZ0JBQWMsRUFHYjs7QUFDRDtFQUNJLGNBQVk7RUFDWixtQkFBa0I7RUFDbEIsZ0JBQWM7RUFDZCxTQUFPO0VBQ1AsVUFBUTtFQUNSLGdCQUFjO0VBQ2xCLGVBQWEsRUFFWjs7QUFDRDtFQUNJLGVBQ0osRUFBQzs7QUFHRCxzREFBc0Q7O0FBQ3REO0VBQ0k7SUFDSSxjQUNKLEVBQUM7RUFDRDtJQUNJLGVBQWE7SUFDYixtQkFBa0I7SUFDbEIsZ0JBQWM7SUFDZCxTQUFPO0lBQ1AsVUFBUTtJQUNSLGdCQUFjO0lBQ2xCLGVBQWEsRUFFWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiN1Y29uc3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG5cclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuZGlzcGxheTpibG9jaztcclxubWluLWhlaWdodDo1MCU7IFxyXG5taW4td2lkdGg6NTAlO1xyXG5cclxuY29sb3I6bGlnaHRncmV5O1xyXG5mb250LXNpemU6MTIwcHg7XHJcbi8vIHRyYW5zZm9ybTpyb3RhdGUoMzEwZGVnKTtcclxuLy8gLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMxMGRlZyk7XHJcbn1cclxuI2Rlc2N7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDozOCU7XHJcbnRvcDogNjAlO1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5taW4taGVpZ2h0OjUwJTsgXHJcbm1pbi13aWR0aDo1MCU7XHJcblxyXG5jb2xvcjpyZ2IoMCwgMCwgMCk7XHJcbmZvbnQtc2l6ZTozMHB4O1xyXG4vLyB0cmFuc2Zvcm06cm90YXRlKDMxMGRlZyk7XHJcbi8vIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMTBkZWcpO1xyXG59XHJcbiNvbGR7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDo1MSU7XHJcbnotaW5kZXg6IDU1O1xyXG50b3A6IDY2JTtcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuZGlzcGxheTpibG9jaztcclxubWluLWhlaWdodDo1MCU7IFxyXG5taW4td2lkdGg6NTAlO1xyXG5cclxuY29sb3I6cmdiKDAsIDAsIDApO1xyXG5mb250LXNpemU6MjBweDtcclxuLy8gdHJhbnNmb3JtOnJvdGF0ZSgzMTBkZWcpO1xyXG4vLyAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzEwZGVnKTtcclxufVxyXG4jYWx0ZXJue1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOjUwMCU7XHJcbiAgICB0b3A6MzUlO1xyXG4gICAgbGVmdDoyNSU7XHJcbiAgICBtaW4taGVpZ2h0OjUwJTsgXHJcbm1pbi13aWR0aDo1MCU7XHJcblxyXG59XHJcbiN0aHJlZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmJsb2NrXHJcbn1cclxuXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgI3RocmVlLWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcbiAgICAjYWx0ZXJue1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo1MDAlO1xyXG4gICAgICAgIHRvcDoyNSU7XHJcbiAgICAgICAgbGVmdDoyNSU7XHJcbiAgICAgICAgbWluLWhlaWdodDo1MCU7IFxyXG4gICAgbWluLXdpZHRoOjUwJTtcclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG59IFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var url = 'assets/js/logo.js';
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.loadScript = function (url) {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    LogoComponent.prototype.ngOnInit = function () {
        this.loadScript(url);
    };
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/logo/logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"flex-center\">\n        \n    \n</div>"

/***/ }),

/***/ "./src/app/social/social.component.scss":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#flex-center {\n  left: 40%;\n  display: block;\n  position: absolute;\n  bottom: 5%;\n  width: 100%;\n  background: transparent;\n  z-index: 999;\n  align-items: center; }\n\n.icon-3d {\n  padding: 10px;\n  -webkit-animation: icon3d 200ms 10;\n  animation: icon3d 200ms 10;\n  color: black; }\n\n.icon-3d:hover {\n  -webkit-animation: icon3d 200ms infinite;\n  animation: icon3d 200ms infinite; }\n\n@-webkit-keyframes icon3d {\n  0% {\n    text-shadow: 5px 4px #696969, -5px -6px #f1f1f1; }\n  25% {\n    text-shadow: -5px -6px #696969, 5px 4px #f1f1f1; }\n  50% {\n    text-shadow: 5px -4px #696969, -8px 4px #f1f1f1; }\n  75% {\n    text-shadow: -8px -4px #696969, -5px -4px #f1f1f1; }\n  100% {\n    text-shadow: -5px 0 #696969, 5px -4px #f1f1f1; } }\n\n@keyframes icon3d {\n  0% {\n    text-shadow: 5px 4px #696969, -5px -6px #f1f1f1; }\n  25% {\n    text-shadow: -5px -6px #696969, 5px 4px #f1f1f1; }\n  50% {\n    text-shadow: 5px -4px #696969, -8px 4px #f1f1f1; }\n  75% {\n    text-shadow: -8px -4px #696969, -5px -4px #f1f1f1; }\n  100% {\n    text-shadow: -5px 0 #696969, 5px -4px #f1f1f1; } }\n\n@media only screen and (max-width: 600px) {\n  #flex-center {\n    left: 40%;\n    display: block;\n    position: absolute;\n    z-index: 999;\n    bottom: 5%;\n    width: 100%;\n    background: black;\n    align-items: center; }\n  .icon-3d {\n    padding: 10px;\n    -webkit-animation: icon3d 200ms 10;\n    animation: icon3d 200ms 10;\n    color: black; }\n  .icon-3d:hover {\n    -webkit-animation: icon3d 200ms infinite;\n    animation: icon3d 200ms infinite; }\n  @-webkit-keyframes icon3d {\n    0% {\n      text-shadow: 5px 4px #696969, -5px -6px #f1f1f1; }\n    25% {\n      text-shadow: -5px -6px #696969, 5px 4px #f1f1f1; }\n    50% {\n      text-shadow: 5px -4px #696969, -8px 4px #f1f1f1; }\n    75% {\n      text-shadow: -8px -4px #696969, -5px -4px #f1f1f1; }\n    100% {\n      text-shadow: -5px 0 #696969, 5px -4px #f1f1f1; } }\n  @keyframes icon3d {\n    0% {\n      text-shadow: 5px 4px #696969, -5px -6px #f1f1f1; }\n    25% {\n      text-shadow: -5px -6px #696969, 5px 4px #f1f1f1; }\n    50% {\n      text-shadow: 5px -4px #696969, -8px 4px #f1f1f1; }\n    75% {\n      text-shadow: -8px -4px #696969, -5px -4px #f1f1f1; }\n    100% {\n      text-shadow: -5px 0 #696969, 5px -4px #f1f1f1; } } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsL0Y6XFxNeSBXb3Jrc1xcUG9ydEZYXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHNvY2lhbFxcc29jaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBUztFQUNQLGVBQWM7RUFDZCxtQkFBa0I7RUFFbEIsV0FBVTtFQUNaLFlBQVc7RUFDWCx3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixtQ0FBa0M7RUFDbEMsMkJBQTBCO0VBQzFCLGFBQW1CLEVBQ3BCOztBQUNEO0VBQ0UseUNBQXdDO0VBQ3hDLGlDQUFnQyxFQUNqQzs7QUFFRDtFQUNFO0lBQ0UsZ0RBQStDLEVBQUE7RUFFakQ7SUFDRSxnREFBK0MsRUFBQTtFQUVqRDtJQUNFLGdEQUErQyxFQUFBO0VBRWpEO0lBQ0Usa0RBQWlELEVBQUE7RUFFbkQ7SUFDRSw4Q0FBNkMsRUFBQSxFQUFBOztBQWRqRDtFQUNFO0lBQ0UsZ0RBQStDLEVBQUE7RUFFakQ7SUFDRSxnREFBK0MsRUFBQTtFQUVqRDtJQUNFLGdEQUErQyxFQUFBO0VBRWpEO0lBQ0Usa0RBQWlELEVBQUE7RUFFbkQ7SUFDRSw4Q0FBNkMsRUFBQSxFQUFBOztBQUdqRDtFQUNJO0lBQ0ksVUFBUztJQUNQLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLFdBQVU7SUFDWixZQUFXO0lBQ1gsa0JBQWlCO0lBRWpCLG9CQUFtQixFQUNwQjtFQUVEO0lBQ0UsY0FBYTtJQUNiLG1DQUFrQztJQUNsQywyQkFBMEI7SUFDMUIsYUFBbUIsRUFDcEI7RUFDRDtJQUNFLHlDQUF3QztJQUN4QyxpQ0FBZ0MsRUFDakM7RUFFRDtJQUNFO01BQ0UsZ0RBQStDLEVBQUE7SUFFakQ7TUFDRSxnREFBK0MsRUFBQTtJQUVqRDtNQUNFLGdEQUErQyxFQUFBO0lBRWpEO01BQ0Usa0RBQWlELEVBQUE7SUFFbkQ7TUFDRSw4Q0FBNkMsRUFBQSxFQUFBO0VBZGpEO0lBQ0U7TUFDRSxnREFBK0MsRUFBQTtJQUVqRDtNQUNFLGdEQUErQyxFQUFBO0lBRWpEO01BQ0UsZ0RBQStDLEVBQUE7SUFFakQ7TUFDRSxrREFBaUQsRUFBQTtJQUVuRDtNQUNFLDhDQUE2QyxFQUFBLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmxleC1jZW50ZXIge1xyXG4gIGxlZnQ6IDQwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgXHJcbiAgICBib3R0b206IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXHJcbn1cclxuXHJcbi5pY29uLTNkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpY29uM2QgMjAwbXMgMTA7XHJcbiAgYW5pbWF0aW9uOiBpY29uM2QgMjAwbXMgMTA7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG4uaWNvbi0zZDpob3ZlciB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGljb24zZCAyMDBtcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGljb24zZCAyMDBtcyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBpY29uM2Qge1xyXG4gIDAlIHtcclxuICAgIHRleHQtc2hhZG93OiA1cHggNHB4ICM2OTY5NjksIC01cHggLTZweCAjZjFmMWYxO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdGV4dC1zaGFkb3c6IC01cHggLTZweCAjNjk2OTY5LCA1cHggNHB4ICNmMWYxZjE7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogNXB4IC00cHggIzY5Njk2OSwgLThweCA0cHggI2YxZjFmMTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRleHQtc2hhZG93OiAtOHB4IC00cHggIzY5Njk2OSwgLTVweCAtNHB4ICNmMWYxZjE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdGV4dC1zaGFkb3c6IC01cHggMCAjNjk2OTY5LCA1cHggLTRweCAjZjFmMWYxO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAjZmxleC1jZW50ZXIge1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgIFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5pY29uLTNkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpY29uM2QgMjAwbXMgMTA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBpY29uM2QgMjAwbXMgMTA7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbi0zZDpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGljb24zZCAyMDBtcyBpbmZpbml0ZTtcclxuICAgICAgICBhbmltYXRpb246IGljb24zZCAyMDBtcyBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQGtleWZyYW1lcyBpY29uM2Qge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNHB4ICM2OTY5NjksIC01cHggLTZweCAjZjFmMWYxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAyNSUge1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC01cHggLTZweCAjNjk2OTY5LCA1cHggNHB4ICNmMWYxZjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IC00cHggIzY5Njk2OSwgLThweCA0cHggI2YxZjFmMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNzUlIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAtOHB4IC00cHggIzY5Njk2OSwgLTVweCAtNHB4ICNmMWYxZjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC01cHggMCAjNjk2OTY5LCA1cHggLTRweCAjZjFmMWYxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            document.getElementById('flex-center').innerHTML = '<a href="http://github.com/Shujathlive"> <i class="fa fa-github fa-2x icon-3d"></i></a>&nbsp;      <a href="http://linkedin.com/in/shujath-khan"><i class="fa fa-linkedin fa-2x icon-3d"></i></a>&nbsp;      <a href="http://twitter.com/khan_shujath"><i class="fa fa-twitter fa-2x icon-3d"></i></a>&nbsp;      <a href="http://fb.me/shujath.live"><i class="fa fa-facebook fa-2x icon-3d"></i></a>&nbsp;      <a href="http://instagram.com/shujath_khan"><i class="fa fa-instagram fa-2x icon-3d"></i></a>      ';
        }, 7000);
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.scss */ "./src/app/social/social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], [{
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\My Works\PortFX\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map