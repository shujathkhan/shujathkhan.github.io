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

module.exports = "<!-- <div id=\"ucons\">UNDER CONSTRUCTION</div>  -->\n<div id=\"desc\"></div> \n<app-logo></app-logo>\n<app-engine></app-engine>\n\n<!-- <app-mousetrail></app-mousetrail> -->\n"

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
        }, 5500);
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

module.exports = "<div>\n<div id=\"three-container\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/logo/logo.component.scss":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ucons {\n  position: absolute;\n  background: transparent;\n  display: block;\n  min-height: 50%;\n  min-width: 50%;\n  color: lightgrey;\n  font-size: 120px; }\n\n#desc {\n  position: absolute;\n  left: 38%;\n  top: 60%;\n  background: transparent;\n  display: block;\n  min-height: 50%;\n  min-width: 50%;\n  color: black;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9GOlxcTXkgV29ya3NcXFBvcnRGWFxccG9ydGZvbGlvL3NyY1xcYXBwXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWlCO0VBRXJCLHdCQUFzQjtFQUN0QixlQUFhO0VBQ2IsZ0JBQWM7RUFDZCxlQUFhO0VBRWIsaUJBQWU7RUFDZixpQkFBZSxFQUdkOztBQUNEO0VBQ0ksbUJBQWlCO0VBQ3JCLFVBQVE7RUFDUixTQUFRO0VBQ1Isd0JBQXNCO0VBQ3RCLGVBQWE7RUFDYixnQkFBYztFQUNkLGVBQWE7RUFFYixhQUFrQjtFQUNsQixnQkFBYyxFQUdiIiwiZmlsZSI6InNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Vjb25ze1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcblxyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5taW4taGVpZ2h0OjUwJTsgXHJcbm1pbi13aWR0aDo1MCU7XHJcblxyXG5jb2xvcjpsaWdodGdyZXk7XHJcbmZvbnQtc2l6ZToxMjBweDtcclxuLy8gdHJhbnNmb3JtOnJvdGF0ZSgzMTBkZWcpO1xyXG4vLyAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzEwZGVnKTtcclxufVxyXG4jZGVzY3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjM4JTtcclxudG9wOiA2MCU7XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbm1pbi1oZWlnaHQ6NTAlOyBcclxubWluLXdpZHRoOjUwJTtcclxuXHJcbmNvbG9yOnJnYigwLCAwLCAwKTtcclxuZm9udC1zaXplOjMwcHg7XHJcbi8vIHRyYW5zZm9ybTpyb3RhdGUoMzEwZGVnKTtcclxuLy8gLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMxMGRlZyk7XHJcbn0iXX0= */"

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