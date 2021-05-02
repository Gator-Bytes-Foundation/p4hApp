(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/qWk":
/*!****************************!*\
  !*** ./src/static/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "KQZb");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "KA31");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/static/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/logancundiff/Documents/GitHub/p4hApp/src/static/main.ts */"/qWk");


/***/ }),

/***/ "3arn":
/*!********************************************!*\
  !*** ./src/static/app/loading.service..ts ***!
  \********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoadingService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KA31":
/*!**************************************!*\
  !*** ./src/static/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "idWg");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spinner/spinner.component */ "nefD");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "XIhq");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "xv4a");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "srGk");
/* harmony import */ var _load_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./load-interceptor */ "Kz/Z");


 // <-- NgModel lives here
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _load_interceptor__WEBPACK_IMPORTED_MODULE_17__["LoadInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            //RouterModule.forRoot([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        //RouterModule.forRoot([]),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    //RouterModule.forRoot([]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _load_interceptor__WEBPACK_IMPORTED_MODULE_17__["LoadInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
                //entryComponents: [AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "KQZb":
/*!************************************************!*\
  !*** ./src/static/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Kz/Z":
/*!********************************************!*\
  !*** ./src/static/app/load-interceptor.ts ***!
  \********************************************/
/*! exports provided: LoadInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadInterceptor", function() { return LoadInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _loading_service___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service. */ "3arn");





/**
 * This class is for intercepting http requests. When a request starts, we set the loadingSub property
 * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
 * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
 * @class {HttpRequestInterceptor}
 */
class LoadInterceptor {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.requests = [];
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loadingService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        console.log('intercepted');
        this.requests.push(req);
        console.log("No of requests--->" + this.requests.length);
        this.loadingService.isLoading.next(true);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => {
                alert('error' + err);
                this.removeRequest(req);
                observer.error(err);
            }, () => {
                this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}
LoadInterceptor.ɵfac = function LoadInterceptor_Factory(t) { return new (t || LoadInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loading_service___WEBPACK_IMPORTED_MODULE_3__["LoadingService"])); };
LoadInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadInterceptor, factory: LoadInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _loading_service___WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "XIhq":
/*!*************************************************!*\
  !*** ./src/static/app/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 6, vars: 0, consts: [["id", "formFooter"], ["href", "#", 1, "underlineHover"], ["href", "/signup", 1, "underlineHover"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n.login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n.login[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n.full_width_height[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   #formContent[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n.login[_ngcontent-%COMP%]   #formFooter[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n.login[_ngcontent-%COMP%]   h2.inactive[_ngcontent-%COMP%] {\n  color: #cccccc;\n}\n.login[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%] {\n  background-color: #1632AA;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 120, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 15px 20px 20px 20px;\n  transition: all 0.3s ease-in-out;\n}\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%]:hover {\n  background-color: #2340BD;\n  border-style: solid;\n  border-color: aliceblue;\n  border-width: 1px;\n}\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:active, .login[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:active, .login[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:placeholder, .login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:placeholder {\n  color: #cccccc;\n}\n\n\n.fadeInDown[_ngcontent-%COMP%] {\n  animation-name: fadeInDown;\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: fadeIn ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 1s;\n}\n.fadeIn.first[_ngcontent-%COMP%] {\n  animation-delay: 0.4s;\n}\n.fadeIn.second[_ngcontent-%COMP%] {\n  animation-delay: 0.6s;\n}\n.fadeIn.third[_ngcontent-%COMP%] {\n  animation-delay: 0.8s;\n}\n.fadeIn.fourth[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n}\n\n.underlineHover[_ngcontent-%COMP%]:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #1632AA;\n  content: \"\";\n  transition: width 0.2s;\n}\n.underlineHover[_ngcontent-%COMP%]:hover {\n  color: #0d0d0d;\n}\n.underlineHover[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n}\n\n*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFDRCxzQkFBQTtBQUVBO0VBQ0ksY0FBYztFQUNkLHFCQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQXBCO0FBR0U7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0FBQWxCO0FBS0UsY0FBQTtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUhqQjtBQU1FO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBSGpCO0FBTUU7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosNENBQXlDO0VBQ3pDLGtCQUFrQjtBQUh0QjtBQU1FO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QjtBQUhoQztBQVFFLFNBQUE7QUFFQTtFQUNFLGNBQWM7QUFObEI7QUFTRTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFOcEM7QUFXRSxtQkFBQTtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUVmLGlEQUE4QztFQUU5Qyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBSzNCLGdDQUFnQztBQVRwQztBQVlFO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBVHJCO0FBWUU7RUFLRSxzQkFBc0I7QUFUMUI7QUFZRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFLVixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBVGxDO0FBWUU7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBVHBDO0FBWUU7RUFDRSxjQUFjO0FBVGxCO0FBY0UsZUFBQTtBQUVBLHVDQUFBO0FBQ0E7RUFFRSwwQkFBMEI7RUFFMUIsc0JBQXNCO0VBRXRCLHlCQUF5QjtBQVo3QjtBQTRCRTtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQztFQVp2QztFQWNFO0lBQ0UsVUFBVTtJQUVWLGVBQWU7RUFabkI7QUFDRjtBQWVFLGtDQUFBO0FBR0E7RUFBb0I7SUFBTyxVQUFTO0VBTXBDO0VBTndDO0lBQUssVUFBUztFQVN0RDtBQUNGO0FBUkU7RUFDRSxVQUFTO0VBR1QsMkJBQTBCO0VBSTFCLDZCQUE0QjtFQUk1QixzQkFBcUI7QUFTekI7QUFORTtFQUdFLHFCQUFxQjtBQVN6QjtBQU5FO0VBR0UscUJBQXFCO0FBU3pCO0FBTkU7RUFHRSxxQkFBcUI7QUFTekI7QUFORTtFQUdFLG1CQUFtQjtBQVN2QjtBQU5FLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCO0FBUzFCO0FBTkU7RUFDRSxjQUFjO0FBU2xCO0FBTkU7RUFDRSxXQUFXO0FBU2Y7QUFKRSxXQUFBO0FBRUE7RUFDSSxhQUFhO0FBTW5CIiwiZmlsZSI6ImxvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoYWl0aWFuIGZsYWcgYmx1ZTogIzE2MzJBQVxuLyogaGFpdGlhbiBmbGFnIHJlZDogI0IzMEQyQ1xuKi8gXG4vKiAgZm9yIGxvZ2luIHNjcmVlbiAqL1xuXG4ubG9naW4gYSB7XG4gICAgY29sb3I6ICM5MmJhZGQ7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgXG4gIC5sb2dpbiBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXG4gICAgY29sb3I6ICNjY2NjY2M7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogU1RSVUNUVVJFICovXG4gIFxuICAubG9naW4gLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5mdWxsX3dpZHRoX2hlaWdodCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmxvZ2luICNmb3JtQ29udGVudCB7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubG9naW4gI2Zvcm1Gb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogVEFCUyAqL1xuICBcbiAgLmxvZ2luIGgyLmluYWN0aXZlIHtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgfVxuICBcbiAgLmxvZ2luIGgyLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPWJ1dHRvbl0sIC5sb2dpbiBpbnB1dFt0eXBlPXN1Ym1pdF0sIC5sb2dpbiBpbnB1dFt0eXBlPXJlc2V0XSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjMyQUE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTIwLDIzMywwLjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxMjAsMjMzLDAuNCk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIG1hcmdpbjogMTVweCAyMHB4IDIwcHggMjBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAubG9naW4gaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCAubG9naW4gaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCAubG9naW4gaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0MEJEO1xuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgfVxuICBcbiAgLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIC5sb2dpbiBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCAubG9naW4gaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPXRleHRdLCAubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF0gIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzBkMGQwZDtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG4gIH1cbiAgXG4gIC5sb2dpbiBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyLCAubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIEFOSU1BVElPTlMgKi9cbiAgXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbiAgLmZhZGVJbkRvd24ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgXG4gIC5mYWRlSW4ge1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICB9XG4gIFxuICAuZmFkZUluLmZpcnN0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIH1cbiAgXG4gIC5mYWRlSW4uc2Vjb25kIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIH1cbiAgXG4gIC5mYWRlSW4udGhpcmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgfVxuICBcbiAgLmZhZGVJbi5mb3VydGgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICBcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbiAgLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MzJBQTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG4gIH1cbiAgXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gIH1cbiAgXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBPVEhFUlMgKi9cbiAgXG4gICo6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgfSBcbiAgXG4gIFxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.html',
                styleUrls: ['./login.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "idWg":
/*!*****************************************!*\
  !*** ./src/static/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loading_service___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service. */ "3arn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner/spinner.component */ "nefD");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, loadingService) {
        this.router = router;
        this.loadingService = loadingService;
        this.title = 'p4hApp';
        this.loading = false;
        this.routing = false;
        router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
        this.loadingService.isLoading.subscribe((v) => {
            console.log('loading: ' + v);
            this.loading = v;
        });
    }
    ngOnInit() {
    }
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.routing = true;
            console.log('routing is true');
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.routing = false;
            console.log('routing is false');
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.routing = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.routing = false;
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loading_service___WEBPACK_IMPORTED_MODULE_2__["LoadingService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 1, consts: [["class", "spinner-wrapper", 4, "ngIf"], [1, "spinner-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading || ctx.routing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _loading_service___WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "nefD":
/*!*****************************************************!*\
  !*** ./src/static/app/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SpinnerComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
class SpinnerComponent {
    constructor() {
        this.message = 'loading!';
    }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { message: "message" }, decls: 13, vars: 1, consts: [[1, "container"], [1, "row"], ["id", "loader"], [1, "dot"], [1, "loading"], ["class", "spinner-message", 4, "ngIf"], [1, "spinner-message"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SpinnerComponent_p_12_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.message !== "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1) {\n  transform: rotate(45deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1)::before {\n  animation: 0.8s linear 0.1s normal none infinite running load;\n  background: #00ff80 none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2) {\n  transform: rotate(90deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2)::before {\n  animation: 0.8s linear 0.2s normal none infinite running load;\n  background: #00ffea none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3) {\n  transform: rotate(135deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3)::before {\n  animation: 0.8s linear 0.3s normal none infinite running load;\n  background: #00aaff none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4) {\n  transform: rotate(180deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4)::before {\n  animation: 0.8s linear 0.4s normal none infinite running load;\n  background: #0040ff none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5) {\n  transform: rotate(225deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5)::before {\n  animation: 0.8s linear 0.5s normal none infinite running load;\n  background: #2a00ff none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6) {\n  transform: rotate(270deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6)::before {\n  animation: 0.8s linear 0.6s normal none infinite running load;\n  background: #9500ff none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7) {\n  transform: rotate(315deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7)::before {\n  animation: 0.8s linear 0.7s normal none infinite running load;\n  background: magenta none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8) {\n  transform: rotate(360deg);\n}\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8)::before {\n  animation: 0.8s linear 0.8s normal none infinite running load;\n  background: #ff0095 none repeat scroll 0 0;\n}\n#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n.spinner-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQUE7QUFFQSw4RUFBQTtBQUVBO0VBQWEsWUFBWTtBQUF6QjtBQUNBO0VBQU8sU0FBUztFQUFFLGlEQUFpRDtBQUluRTtBQUhBO0VBQ0ksU0FBUztFQUNULGFBQWE7RUFDYixPQUFPO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7QUFNaEI7QUFIRTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsT0FBTztFQUNQLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0FBTWhCO0FBSEU7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sYUFBYTtBQU1qQjtBQUhFO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixhQUFhO0FBTWpCO0FBSEU7RUFDRSx3QkFBd0I7QUFNNUI7QUFIRTtFQUNFLDZEQUE2RDtFQUM3RCwwQ0FBMEM7QUFNOUM7QUFIRTtFQUNFLHdCQUF3QjtBQU01QjtBQUhFO0VBQ0UsNkRBQTZEO0VBQzdELDBDQUEwQztBQU05QztBQUhFO0VBQ0UseUJBQXlCO0FBTTdCO0FBSEU7RUFDRSw2REFBNkQ7RUFDN0QsMENBQTBDO0FBTTlDO0FBSEU7RUFDRSx5QkFBeUI7QUFNN0I7QUFIRTtFQUNFLDZEQUE2RDtFQUM3RCwwQ0FBMEM7QUFNOUM7QUFIRTtFQUNFLHlCQUF5QjtBQU03QjtBQUhFO0VBQ0UsNkRBQTZEO0VBQzdELDBDQUEwQztBQU05QztBQUhFO0VBQ0UseUJBQXlCO0FBTTdCO0FBSEU7RUFDRSw2REFBNkQ7RUFDN0QsMENBQTBDO0FBTTlDO0FBSEU7RUFDRSx5QkFBeUI7QUFNN0I7QUFIRTtFQUNFLDZEQUE2RDtFQUM3RCwwQ0FBMEM7QUFNOUM7QUFIRTtFQUNFLHlCQUF5QjtBQU03QjtBQUhFO0VBQ0UsNkRBQTZEO0VBQzdELDBDQUEwQztBQU05QztBQUhFO0VBQ0UsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7QUFNaEI7QUFIRTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQU12QjtBQUNGO0FBSEU7RUFDRSxrQkFBa0I7QUFNdEIiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGltcG9ydCBcIn5zcGlubmVyXCI7Ki9cblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiNsb2FkZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG4gIFxuICAjbG9hZGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxNzVweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxNzVweDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90IHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDg3LjVweDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90OjpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDg3LjVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB3aWR0aDogODcuNXB4O1xuICB9XG4gIFxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSk6OmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjFzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcbiAgICBiYWNrZ3JvdW5kOiAjMDBmZjgwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIH1cbiAgXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMGZmZWEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuM3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMGFhZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMDQwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMyYTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICM5NTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuN3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6IG1hZ2VudGEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICBcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuOHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICNmZjAwOTUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgfVxuICBcbiAgI2xvYWRlciAubG9hZGluZyB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBsb2FkIHtcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLnNwaW5uZXItbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "srGk":
/*!**********************************************!*\
  !*** ./src/static/app/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "XIhq");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "xv4a");






//This is my case 
const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xv4a":
/*!*****************************************************!*\
  !*** ./src/static/app/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner/spinner.component */ "nefD");




function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor() {
        this.loading = true;
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], inputs: { loading: "loading" }, decls: 1, vars: 1, consts: [["class", "spinner-wrapper", 4, "ngIf"], [1, "spinner-wrapper"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: [".spinner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map