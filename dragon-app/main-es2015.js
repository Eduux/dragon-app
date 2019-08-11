(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dragon-detail/dragon-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dragon-detail/dragon-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row dragon-detal\">\n        <div class=\"col-lg-12\">\n            <a [routerLink]=\"['/home']\">Voltar</a>\n            <h2>Dragão detalhes:</h2>\n            <h5>Nome: <b>{{dragon.name}}</b></h5>\n            <p>Tipo: <b>{{dragon.type}}</b></p>\n            <p>Criação: <b>{{dragon.createdAt | date: 'dd/MM/yyyy'}}</b></p>\n        </div>\n    </div>\n</div>\n\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dragons-list/dragons-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dragons-list/dragons-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-dark bg-dark new-nav\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\">Usuário: {{user.login}}</a>\n            <p (click)=\"logout()\">Sair <i class=\"fas fa-sign-out-alt\"></i></p>\n        </div>\n    </nav>\n\n    <div class=\"container\">\n        <div class=\"page-header\">\n            <h1><img src=\"assets/favicon.png\">Dragon App</h1>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <button class=\"btn btn-success\" (click)=\"modal = true;\">Cadastrar novo dragão +</button>\n        </div>\n        <div class=\"col-sm-6 col-lg-6 dragon-block\" *ngFor=\"let dragon of dragons; let i = index\"\u001c>\n            <div>\n                <h5>Nome: <b>{{dragon.name}}</b></h5>\n                <p>Tipo: <b>{{dragon.type}}</b></p>\n                <p>Criação: <b>{{dragon.createdAt | date: 'dd/MM/yyyy'}}</b></p>\n\n                <div class=\"acoes-dragon\">\n                    <i [routerLink]=\"['/dragon', dragon.id]\"  class=\"fas fa-eye\"></i>\n                    <i (click)=\"openEdit(i, dragon)\" class=\"fas fa-edit\"></i>\n                    <i (click)=\"deleteDragon(dragon.id, i)\" class=\"fas fa-trash-alt\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal-dragon\" *ngIf=\"modal\">\n    <div>\n        <form [formGroup]=\"dragonN\">\n            <div class=\"header-form\"><p>Cadastrar <i (click)=\"modal = false;\" class=\"fas fa-times-circle\"></i></p></div>\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Nome\" class=\"form-control\"\n                formControlName=\"name\" #name required>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Tipo\" class=\"form-control\"\n                formControlName=\"type\" #type required>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"submit\" (click)=\"newDragon()\" value=\"Cadastrar\" class=\"btn btn-primary\">\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"modal-dragon\" *ngIf=\"modalEdit\">\n    <div>\n        <form [formGroup]=\"dragonN\">\n            <div class=\"header-form\"><p>Editar <i (click)=\"modalEdit = false;\" class=\"fas fa-times-circle\"></i></p></div>\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Nome\" class=\"form-control\"\n                formControlName=\"name\" #name required>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Tipo\" class=\"form-control\"\n                formControlName=\"type\" #type required>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"submit\" (click)=\"editDragon()\" value=\"Cadastrar\" class=\"btn btn-primary\">\n            </div>\n        </form>\n    </div>\n</div>\n\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-div\">\n    <div>\n        <img src=\"assets/favicon.png\">\n        <form [formGroup]=\"user\">\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Digite o login\" class=\"form-control\" \n                formControlName=\"login\" #login required>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" placeholder=\"Digite a senha\" class=\"form-control\"\n                formControlName=\"senha\" #senha required>\n            </div>\n            <button type=\"submit\" (click)=\"logar()\">Entrar</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_logged_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/logged.guard */ "./src/app/guards/logged.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dragons_list_dragons_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dragons-list/dragons-list.component */ "./src/app/components/dragons-list/dragons-list.component.ts");
/* harmony import */ var _components_dragon_detail_dragon_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dragon-detail/dragon-detail.component */ "./src/app/components/dragon-detail/dragon-detail.component.ts");



// Guards


// Components



const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guards_logged_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedGuard"]] },
    { path: 'home', component: _components_dragons_list_dragons_list_component__WEBPACK_IMPORTED_MODULE_6__["DragonsListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'dragon/:id', component: _components_dragon_detail_dragon_detail_component__WEBPACK_IMPORTED_MODULE_7__["DragonDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dragon-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dragons_list_dragons_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dragons-list/dragons-list.component */ "./src/app/components/dragons-list/dragons-list.component.ts");
/* harmony import */ var _components_dragon_detail_dragon_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dragon-detail/dragon-detail.component */ "./src/app/components/dragon-detail/dragon-detail.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






// Components




// Loader

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_dragons_list_dragons_list_component__WEBPACK_IMPORTED_MODULE_8__["DragonsListComponent"],
            _components_dragon_detail_dragon_detail_component__WEBPACK_IMPORTED_MODULE_9__["DragonDetailComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dragon-detail/dragon-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/dragon-detail/dragon-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dragon-detal {\n  margin-top: 30px;\n  border-bottom: 1px solid;\n}\n\n@media (min-width: 800px) {\n  .dragon-detal a {\n    float: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHVhcmRvc2FudGFuYS9EZXNrdG9wL1Bhc3RhIFNlbSBUacyBdHVsby9kcmFnb24tYXBwL3NyYy9hcHAvY29tcG9uZW50cy9kcmFnb24tZGV0YWlsL2RyYWdvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZHJhZ29uLWRldGFpbC9kcmFnb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxZQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJhZ29uLWRldGFpbC9kcmFnb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWdvbi1kZXRhbCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjgwMHB4KXtcbiAgICAuZHJhZ29uLWRldGFsIGEge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufSIsIi5kcmFnb24tZGV0YWwge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAuZHJhZ29uLWRldGFsIGEge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dragon-detail/dragon-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dragon-detail/dragon-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: DragonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragonDetailComponent", function() { return DragonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dragon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dragon.service */ "./src/app/services/dragon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);




// Loader

// Sweet alert

let DragonDetailComponent = class DragonDetailComponent {
    constructor(dragonService, route, spinner) {
        this.dragonService = dragonService;
        this.route = route;
        this.spinner = spinner;
        this.dragon = {};
        this.route.params.subscribe(param => {
            this.id = param.id;
        });
        this.listDragon();
    }
    listDragon() {
        this.spinner.show();
        this.dragonService.listDragon(this.id).then(response => {
            this.dragon = response;
            this.spinner.hide();
        }).catch(err => {
            console.log(err);
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Erro!', err, 'error');
        });
    }
};
DragonDetailComponent.ctorParameters = () => [
    { type: src_app_services_dragon_service__WEBPACK_IMPORTED_MODULE_2__["DragonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
DragonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dragon-detail',
        template: __webpack_require__(/*! raw-loader!./dragon-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dragon-detail/dragon-detail.component.html"),
        styles: [__webpack_require__(/*! ./dragon-detail.component.scss */ "./src/app/components/dragon-detail/dragon-detail.component.scss")]
    })
], DragonDetailComponent);



/***/ }),

/***/ "./src/app/components/dragons-list/dragons-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/dragons-list/dragons-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dragon-block {\n  margin-top: 30px;\n}\n.dragon-block > div {\n  border-bottom: 1px solid #353a40;\n  padding: 13px;\n  border-radius: 5px;\n  position: relative;\n}\n.dragon-block > div p {\n  margin-bottom: 5px;\n}\n.acoes-dragon {\n  position: absolute;\n  right: 12px;\n  bottom: 17px;\n}\n.acoes-dragon > i {\n  margin: 0px 5px;\n  cursor: pointer;\n}\n.new-nav {\n  color: white;\n}\n.new-nav p {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin-top: 20px;\n}\n.page-header img {\n  height: auto;\n  width: 200px;\n  margin-right: 10px;\n}\n@media (max-width: 400px) {\n  .navbar {\n    padding: 3px;\n  }\n}\n.modal-dragon {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.62);\n}\n.modal-dragon > div {\n  background-color: white;\n  width: 80%;\n  padding: 20px;\n  border-radius: 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.69);\n}\n.modal-dragon .header-form {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.23);\n  margin-bottom: 20px;\n}\n.modal-dragon .header-form p {\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-dragon .header-form p i {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHVhcmRvc2FudGFuYS9EZXNrdG9wL1Bhc3RhIFNlbSBUacyBdHVsby9kcmFnb24tYXBwL3NyYy9hcHAvY29tcG9uZW50cy9kcmFnb25zLWxpc3QvZHJhZ29ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RyYWdvbnMtbGlzdC9kcmFnb25zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNJLGtCQUFBO0FDQ1o7QURJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtBQ0RKO0FER0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNEUjtBREtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7QURJSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGUjtBRFFBO0VBQ0k7SUFDSSxZQUFBO0VDTE47QUFDRjtBRFdBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNUSjtBRFdJO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNUUjtBRGFJO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEYVE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDWFo7QURhWTtFQUNJLGVBQUE7QUNYaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RyYWdvbnMtbGlzdC9kcmFnb25zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhZ29uLWJsb2NrIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgPiBkaXYge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM1M2E0MDtcbiAgICAgICAgcGFkZGluZzogMTNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY29lcy1kcmFnb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICBib3R0b206IDE3cHg7XG59XG5cbi5hY29lcy1kcmFnb24gPiBpIHtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3LW5hdiB7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDo0MDBweCl7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG59XG5cblxuLy8gTW9kYWxcblxuLm1vZGFsLWRyYWdvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Mik7XG5cbiAgICA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42OSk7XG4gICAgfVxuXG5cbiAgICAuaGVhZGVyLWZvcm0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5kcmFnb24tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmRyYWdvbi1ibG9jayA+IGRpdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzUzYTQwO1xuICBwYWRkaW5nOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcmFnb24tYmxvY2sgPiBkaXYgcCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmFjb2VzLWRyYWdvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMTdweDtcbn1cblxuLmFjb2VzLWRyYWdvbiA+IGkge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy1uYXYge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmV3LW5hdiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBhZ2UtaGVhZGVyIGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cbn1cbi5tb2RhbC1kcmFnb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Mik7XG59XG4ubW9kYWwtZHJhZ29uID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjY5KTtcbn1cbi5tb2RhbC1kcmFnb24gLmhlYWRlci1mb3JtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubW9kYWwtZHJhZ29uIC5oZWFkZXItZm9ybSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vZGFsLWRyYWdvbiAuaGVhZGVyLWZvcm0gcCBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dragons-list/dragons-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dragons-list/dragons-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: DragonsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragonsListComponent", function() { return DragonsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dragon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dragon.service */ "./src/app/services/dragon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






// Sweet alert

// Loader

let DragonsListComponent = class DragonsListComponent {
    constructor(dragonService, router, spinner, loginService, fb) {
        this.dragonService = dragonService;
        this.router = router;
        this.spinner = spinner;
        this.loginService = loginService;
        this.fb = fb;
        this.modal = false;
        this.modalEdit = false;
        this.listDragons();
        this.user = this.loginService.userLogado;
        this.dragonN = this.fb.group({
            id: [''],
            name: [''],
            type: ['']
        });
    }
    // Lista todos os dragoes por ordem alfabética orderna('nomedapropriedade')
    listDragons() {
        this.spinner.show();
        this.dragonService.listDragons()
            .then(response => {
            this.dragons = response;
            this.dragons.sort(this.ordena("name"));
            this.spinner.hide();
        }).catch(err => {
            console.log(err);
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Erro!', err, 'error');
        });
    }
    // Verifica o formulário para nao deixar preencher vazio
    verificaForm(name, type) {
        if (name) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Erro!', 'Preencha o campo nome', 'error');
            return false;
        }
        if (type) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Erro!', 'Preencha o campo tipo', 'error');
            return false;
        }
        return true;
    }
    // Cadastrando Dragão
    newDragon() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (yield this.verificaForm(this.dragonN.get('name').hasError('required'), this.dragonN.get('type').hasError('required'))) {
                this.dragonService.newDragon(this.dragonN.get('name').value, this.dragonN.get('type').value)
                    .then(response => {
                    this.dragons.push(response);
                    this.dragons.sort(this.ordena("name"));
                    this.modal = false;
                    this.dragonN.controls["name"].setValue("");
                    this.dragonN.controls["type"].setValue("");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Sucesso!', 'Dragão cadastrado com sucesso!', 'success');
                }).catch(err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Erro!', err, 'error');
                });
            }
        });
    }
    // Abre modal dragão e preenche para edicao
    openEdit(index, dragon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalEdit = true;
            this.index = index;
            this.dragonN.controls["id"].setValue(dragon.id);
            this.dragonN.controls["name"].setValue(dragon.name);
            this.dragonN.controls["type"].setValue(dragon.type);
        });
    }
    // Editando dragão
    editDragon() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dragon = {
                id: this.dragonN.get('id').value,
                name: this.dragonN.get('name').value,
                type: this.dragonN.get('type').value
            };
            if (yield this.verificaForm(this.dragonN.get('name').hasError('required'), this.dragonN.get('type').hasError('required'))) {
                this.dragonService.editDragon(dragon)
                    .then(response => {
                    console.log(response);
                    this.dragons[this.index] = response;
                    this.dragons.sort(this.ordena("name"));
                    this.modalEdit = false;
                    this.dragonN.controls["id"].setValue("");
                    this.dragonN.controls["name"].setValue("");
                    this.dragonN.controls["type"].setValue("");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Sucesso!', 'Dragão editado com sucesso!', 'success');
                }).catch(err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Erro!', err, 'error');
                });
            }
        });
    }
    // Deletar dragão
    deleteDragon(id, index) {
        console.log(index);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Tem certeza?',
            text: "Deseja excluir o dragão?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Deletar',
            cancelButtonText: 'Cancelar'
        }).then((response) => {
            if (response.value) {
                this.dragonService.deletedragon(id)
                    .then(response => {
                    console.log(response);
                    this.dragons.splice(index, 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Deletado', 'Dragão deletado com sucesso!', 'success');
                }).catch(err => {
                    console.log(err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Erro!', err, 'error');
                });
            }
        });
    }
    // Função para ordenar os dragões pela propriedade
    ordena(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            if (sortOrder == -1) {
                return b[property].toString().localeCompare(a[property]);
            }
            else {
                return a[property].toString().localeCompare(b[property]);
            }
        };
    }
    logout() {
        this.loginService.logout();
        this.router.navigate(['login']);
    }
};
DragonsListComponent.ctorParameters = () => [
    { type: src_app_services_dragon_service__WEBPACK_IMPORTED_MODULE_2__["DragonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DragonsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dragons-list',
        template: __webpack_require__(/*! raw-loader!./dragons-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dragons-list/dragons-list.component.html"),
        styles: [__webpack_require__(/*! ./dragons-list.component.scss */ "./src/app/components/dragons-list/dragons-list.component.scss")]
    })
], DragonsListComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n.login-div button {\n  width: 100%;\n  background-color: #7e1313;\n  border: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHVhcmRvc2FudGFuYS9EZXNrdG9wL1Bhc3RhIFNlbSBUacyBdHVsby9kcmFnb24tYXBwL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTEzMTM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn0iLCIubG9naW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubG9naW4tZGl2IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UxMzEzO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




// Sweet alert

// Services

let LoginComponent = class LoginComponent {
    constructor(fb, loginService, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.user = this.fb.group({
            login: [''],
            senha: ['']
        });
    }
    logar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (yield this.verificaForm()) {
                this.loginService.logar(this.user.get('login').value, this.user.get('senha').value)
                    .then(response => {
                    //Swal.fire('Sucesso!', response, 'success'); 
                    this.router.navigate(['home']);
                }).catch(err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Erro!', err, 'error');
                });
            }
        });
    }
    verificaForm() {
        if (this.user.get('login').hasError('required')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Erro!', 'Preencha o campo login', 'error');
            return false;
        }
        if (this.user.get('senha').hasError('required')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Erro!', 'Preencha o campo senha', 'error');
            return false;
        }
        return true;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");



// Login service

let AuthGuard = class AuthGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate() {
        if (!this.loginService.userLogado)
            this.router.navigate(['login']);
        return this.loginService.userLogado ? true : false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/logged.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/logged.guard.ts ***!
  \****************************************/
/*! exports provided: LoggedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedGuard", function() { return LoggedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");



// Login service

let LoggedGuard = class LoggedGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate() {
        if (this.loginService.userLogado)
            this.router.navigate(['home']);
        return !this.loginService.userLogado ? true : false;
    }
};
LoggedGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
LoggedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoggedGuard);



/***/ }),

/***/ "./src/app/services/dragon.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dragon.service.ts ***!
  \********************************************/
/*! exports provided: DragonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragonService", function() { return DragonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DragonService = class DragonService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";
    }
    listDragons() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl).subscribe(response => {
                resolve(response);
            }), err => {
                reject(err);
            };
        });
    }
    listDragon(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/' + id).subscribe(response => {
                resolve(response);
            }), err => {
                reject(err);
            };
        });
    }
    newDragon(name, type) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl, { name: name, type: type }).subscribe(response => {
                resolve(response);
            }), err => {
                reject(err);
            };
        });
    }
    editDragon(dragon) {
        return new Promise((resolve, reject) => {
            this.http.put(this.apiUrl + '/' + dragon.id, { name: dragon.name, type: dragon.type }).subscribe(response => {
                resolve(response);
            }), err => {
                reject(err);
            };
        });
    }
    deletedragon(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.apiUrl + "/" + id).subscribe(response => {
                resolve(response);
            }), err => {
                reject(err);
            };
        });
    }
};
DragonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DragonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DragonService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginService = class LoginService {
    constructor() {
        this.user = JSON.parse(localStorage.getItem('userDragon'));
    }
    // Retorna user logado
    get userLogado() {
        return this.user;
    }
    // Seta storage
    logar(login, senha) {
        return new Promise((resolve, reject) => {
            if (login == 'teste' && senha == '12qw') {
                localStorage.setItem('userDragon', JSON.stringify({ login: login }));
                this.user = { login: login };
                resolve('Logado com sucesso!');
            }
            else {
                reject('Login ou senha inválidos');
            }
        });
    }
    logout() {
        // Remove user do storage
        localStorage.removeItem('userDragon');
        this.user = null;
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eduardosantana/Desktop/Pasta Sem Título/dragon-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map