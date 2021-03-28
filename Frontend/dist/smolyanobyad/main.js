(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Stanchev/Documents/GitHub/Food-Delivery/Frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "7Dl1":
/*!*****************************************!*\
  !*** ./src/app/core/app.interceptor.ts ***!
  \*****************************************/
/*! exports provided: AppInterceptor, appInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInterceptorProvider", function() { return appInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




// TO DO make the interceptor for credentials
var AppInterceptor = /** @class */ (function () {
    function AppInterceptor() {
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    AppInterceptor.prototype.intercept = function (req, next) {
        if (!req.url.includes('http')) {
            req = req.clone({ url: "" + this.apiUrl + req.url, withCredentials: true });
        }
        return next.handle(req);
    };
    AppInterceptor.ɵfac = function AppInterceptor_Factory(t) { return new (t || AppInterceptor)(); };
    AppInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInterceptor, factory: AppInterceptor.ɵfac });
    return AppInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
var appInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: AppInterceptor,
    multi: true
};


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "j6+7");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "YpL4");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "D5oR");
/* harmony import */ var _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-address/user-address.component */ "mTx+");
/* harmony import */ var _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-orders/user-orders.component */ "ECzu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _add_new_address_add_new_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-new-address/add-new-address.component */ "hbDI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _user_address_item_user_address_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-address-item/user-address-item.component */ "a/c8");













var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
            ]] });
    return UserModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_3__["CartPageComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_5__["UserAddressComponent"], _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_6__["UserOrdersComponent"], _add_new_address_add_new_address_component__WEBPACK_IMPORTED_MODULE_9__["AddNewAddressComponent"], _user_address_item_user_address_item_component__WEBPACK_IMPORTED_MODULE_11__["UserAddressItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]], exports: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_3__["CartPageComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_5__["UserAddressComponent"], _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_6__["UserOrdersComponent"], _add_new_address_add_new_address_component__WEBPACK_IMPORTED_MODULE_9__["AddNewAddressComponent"], _user_address_item_user_address_item_component__WEBPACK_IMPORTED_MODULE_11__["UserAddressItemComponent"]],
                exports: [
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/dishes'
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

/***/ "D+/u":
/*!*********************************************!*\
  !*** ./src/app/food/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food.service */ "MrCo");
/* harmony import */ var _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dishes/dishes.component */ "adY0");
/* harmony import */ var _user_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/cart/cart.component */ "j6+7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






var MenuComponent = /** @class */ (function () {
    function MenuComponent(foodService) {
        this.foodService = foodService;
        this.menu$ = this.foodService.menu$;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.foodService.getDailyMenu();
    };
    MenuComponent.prototype.clickedOutsideCart = function () {
    };
    MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"])); };
    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 5, vars: 3, consts: [[1, "container-menu"], [1, "menu"], [3, "dishes"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-dishes", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dishes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.menu$).daily_menu);
        } }, directives: [_dishes_dishes_component__WEBPACK_IMPORTED_MODULE_2__["DishesComponent"], _user_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".container-menu[_ngcontent-%COMP%] {\n  width: 80%;\n  display:flex;\n  margin: 100px auto;\n  margin-right: 0px;\n  align-items: flex-start;\n  position:relative;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 70%;\n  border: 3px solid #E25E20;\n  border-radius: 8px;\n  box-shadow: 0px 0px 13px 0px;\n}\n\napp-cart[_ngcontent-%COMP%]{\n  position: -webkit-sticky;\n  position: sticky;\n  top:20px;\n  margin-left: 20px;\n  width: 30%;\n  height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lci1tZW51IHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5tZW51IHtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI0UyNUUyMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggMHB4O1xufVxuYXBwLWNhcnR7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDoyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA3MHZoO1xufSJdfQ== */"] });
    return MenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"] }]; }, null); })();


/***/ }),

/***/ "D5oR":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-address/user-address.component */ "mTx+");
/* harmony import */ var _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-orders/user-orders.component */ "ECzu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ProfileComponent_article_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ProfileComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_article_0_ng_container_7_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r0.user$).username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.editProfileInfo ? _r5 : _r3);
} }
function ProfileComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-user-address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_article_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleUserAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u044A\u043C \u043F\u0440\u043E\u0444\u0438\u043B\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx_r1.user$).username, "");
} }
function ProfileComponent_article_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-user-orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_article_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toggleUserOrders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u044A\u043C \u043F\u0440\u043E\u0444\u0438\u043B\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx_r2.user$).username, "");
} }
function ProfileComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_ng_template_3_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleUserAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041C\u043E\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_ng_template_3_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleUserOrders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041C\u043E\u0438\u0442\u0435 \u043F\u043E\u0440\u044A\u0447\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "article", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_ng_template_3_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.toggleEditProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0421\u043C\u044F\u043D\u0430 \u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r4.user$).phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx_r4.user$).email);
} }
function ProfileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_ng_template_5_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.editProfile(_r18.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E \u0438\u043C\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "article", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "article", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "article", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_ng_template_5_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.toggleEditProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx_r6.user$).username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx_r6.user$).username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, ctx_r6.user$).phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, ctx_r6.user$).phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 14, ctx_r6.user$).email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 16, ctx_r6.user$).email);
} }
function ProfileComponent_ng_template_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var order_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r23);
} }
function ProfileComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_7_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r8.user$).orders);
} }
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.user$ = this.userService.user$;
        this.editProfileInfo = false;
        this.showUserAddress = false;
        this.showUserOrders = false;
    }
    ProfileComponent.prototype.toggleEditProfile = function () {
        this.editProfileInfo = !this.editProfileInfo;
    };
    ProfileComponent.prototype.toggleUserAddress = function () {
        this.showUserAddress = !this.showUserAddress;
    };
    ProfileComponent.prototype.toggleUserOrders = function () {
        this.showUserOrders = !this.showUserOrders;
    };
    ProfileComponent.prototype.editProfile = function (data) {
        this.userService.editUserData(data);
        this.toggleEditProfile();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.editProfileInfo = false;
        this.showUserOrders = false;
        this.showUserAddress = false;
    };
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 3, consts: [["class", "profile", 4, "ngIf"], ["class", "profile show-address", 4, "ngIf"], ["class", "profile show-orders", 4, "ngIf"], ["profileInfoTemplate", ""], ["editProfileTemplate", ""], ["profileOrders", ""], [1, "profile"], [1, "profile-icon"], [1, "fas", "fa-user", "fa-5x"], [1, "profile-username-wrapper"], [1, "profile-info-username"], [4, "ngTemplateOutlet"], [1, "profile", "show-address"], [1, "fas", "fa-map-marker-alt", "fa-5x"], ["type", "button", 1, "profile-btn", "username", 3, "click"], [1, "profile", "show-orders"], [1, "fas", "fa-history", "fa-5x"], [1, "profile-content"], [1, "profile-content-phone"], [1, "profile-content-i-wrapper"], [1, "fas", "fa-phone-alt"], [1, "profile-content-email"], [1, "fas", "fa-at"], [1, "profile-list"], [3, "click"], [1, "profile-buttons"], [1, "profile-btn", "username", 3, "click"], [1, "profile-btn", "password"], [1, "edit-content"], ["name", "profileEditForm", "id", "profileEditForm", 3, "ngSubmit"], ["profileUpdate", "ngForm"], ["for", "username"], ["id", "username", "name", "username", 3, "value", "ngModel"], ["for", "phone"], ["name", "phone", "id", "phone", 3, "value", "ngModel"], ["for", "email"], ["name", "email", "id", "email", 3, "value", "ngModel"], [1, "profile-btn", "username", "confirm-change"], [4, "ngFor", "ngForOf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_article_0_Template, 8, 4, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_article_1_Template, 10, 3, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_article_2_Template, 10, 3, "article", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_ng_template_3_Template, 25, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_ng_template_5_Template, 30, 18, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_ng_template_7_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showUserOrders && !ctx.showUserAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUserAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUserOrders);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_3__["UserAddressComponent"], _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_4__["UserOrdersComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".profile[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    position: relative;\n    border: 2px solid #E25E20;\n    border-radius: 6px;\n    min-height: 300px;\n    width: 25vw;\n    margin: 100px auto;\n    box-shadow: 0 0 6px 0;\n}\n.profile-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%,-66%);\n}\n.profile-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: white;\n    background: #E25E20;\n    padding: 20px;\n    border-bottom-left-radius: 50px;\n    border-bottom-right-radius: 50px;\n}\n.profile-content[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    flex-wrap:wrap;\n}\n.profile-username-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    overflow-wrap: break-word;\n    justify-content: center;\n    width: 100%;\n}\n.profile-info-username[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    border-bottom: 1px solid #E25E20;\n    position: relative;\n    padding: 15px;\n    width: 50%;\n    overflow-wrap: break-word;\n    margin-bottom: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n.profile-content-phone[_ngcontent-%COMP%], .profile-content-email[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    align-items: center;\n    text-align: center;\n    position: relative;\n    padding: 10px;\n}\n.profile-content-phone[_ngcontent-%COMP%]   .fa-phone-alt[_ngcontent-%COMP%], .profile-content-email[_ngcontent-%COMP%]   .fa-at[_ngcontent-%COMP%]{\n    font-size:20px;\n    color:white;\n    padding: 10px;\n}\n.profile-content-phone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .profile-content-email[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 15px;\n    font-weight: bold;\n    overflow-wrap: break-word;\n    letter-spacing: 1.5px;\n}\n.profile-content-i-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\n\n\n\n\n\n.profile-content-i-wrapper[_ngcontent-%COMP%] {\n    background: #E25E20;\n}\n.profile-info-username[_ngcontent-%COMP%]::after {\n    bottom: 3px;\n    position: absolute;\n    content: \"\";\n    width: 102%;\n    border: 1px solid #E25E20;\n    flex-basis: 90%;\n    right: -1.5%;\n}\n.profile-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    align-items: center;\n    margin-top:0;\n}\n.profile-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 5px 20px 20px 20px;\n    width: 95%;\n}\n.profile-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n    padding: 10px;\n    background: #8D9F3E;\n    border-radius: 6px;\n    box-shadow: 0 0 6px 0;\n}\n.profile-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background: white;\n    border: 2px solid #8D9F3E;\n    color: #8D9F3E;\n    padding: 8px;\n    cursor: pointer;\n}\n.profile-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    max-width: 100%;\n    overflow-wrap: break-word;\n}\n.profile-btn[_ngcontent-%COMP%] {\n    padding: 10px;\n    color: white;\n    border-radius: 6px;\n    background: #E25E20;\n    border: none;\n    margin: 10px ;\n    margin-bottom: 20px;\n    font-weight: bold;\n    box-shadow: 0 0 6px 0;\n\n}\n.profile-btn[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background: white;\n    border: 2px solid #E25E20;\n    color: #E25E20;\n    padding: 8px;\n}\n.profile-btn[_ngcontent-%COMP%]:focus{\n    outline: unset;\n}\n.edit-content[_ngcontent-%COMP%] {\n    margin-top:0;\n}\n.edit-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 10px;\n    border-radius: 4px;\n    border: 1px solid #8D9F3E;\n    font-weight: bold;\n}\n  *:focus {\n    outline-color: #E25E20;\n}\n.confirm-change[_ngcontent-%COMP%] {\n    color: white;\n    border-color: #8D9F3E;\n    background: #8D9F3E;\n}\n.confirm-change[_ngcontent-%COMP%]:hover {\n    border-color: #8D9F3E;\n    background: white;\n    color: #8D9F3E;\n}\n.show-address[_ngcontent-%COMP%], .show-orders[_ngcontent-%COMP%] {\n    width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0EsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLElBQUk7QUFDSixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixJQUFJO0FBRUo7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUEsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLElBQUk7QUFFSjtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBSUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7QUFFekI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUVBOztJQUVJLFVBQVU7QUFDZCIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyNUUyMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggMDtcbn1cbi5wcm9maWxlLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNjYlKTtcbn1cblxuLnByb2ZpbGUtaWNvbiBpIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogI0UyNUUyMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG59XG5cbi5wcm9maWxlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6d3JhcDtcbn1cblxuLnByb2ZpbGUtdXNlcm5hbWUtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWluZm8tdXNlcm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UyNUUyMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi8qLmZhLXBlbiB7Ki9cbi8qICAgIGNvbG9yOiAjRTI1RTIwOyovXG4vKiAgICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbi8qICAgIHJpZ2h0OiAyMSU7Ki9cbi8qICAgIGJvdHRvbTogMjMlOyovXG4vKiAgICBmb250LXNpemU6IDE1cHg7Ki9cbi8qICAgIG9wYWNpdHk6IDAuMjsqL1xuLyp9Ki9cbi8qLmZhLXBlbjpob3ZlciB7Ki9cbi8qICAgIG9wYWNpdHk6IDE7Ki9cbi8qICAgIGN1cnNvcjogcG9pbnRlcjsqL1xuLyp9Ki9cblxuLnByb2ZpbGUtY29udGVudC1waG9uZSxcbi5wcm9maWxlLWNvbnRlbnQtZW1haWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9maWxlLWNvbnRlbnQtcGhvbmUgLmZhLXBob25lLWFsdCxcbi5wcm9maWxlLWNvbnRlbnQtZW1haWwgLmZhLWF0e1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJvZmlsZS1jb250ZW50LXBob25lIHAsXG4ucHJvZmlsZS1jb250ZW50LWVtYWlsIHB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuLnByb2ZpbGUtY29udGVudC1pLXdyYXBwZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qLnByb2ZpbGUtY29udGVudC1waG9uZSAuZmEtcGVuLCovXG4vKi5wcm9maWxlLWNvbnRlbnQtZW1haWwgLmZhLXBlbnsqL1xuLyogICAgcmlnaHQ6IC0zJTsqL1xuLyogICAgYm90dG9tOiAzOSU7Ki9cbi8qfSovXG5cbi5wcm9maWxlLWNvbnRlbnQtaS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTI1RTIwO1xufVxuXG5cbi5wcm9maWxlLWluZm8tdXNlcm5hbWU6OmFmdGVyIHtcbiAgICBib3R0b206IDNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAyJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTI1RTIwO1xuICAgIGZsZXgtYmFzaXM6IDkwJTtcbiAgICByaWdodDogLTEuNSU7XG59XG5cbi5wcm9maWxlLWNvbnRlbnQgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOjA7XG59XG5cbi5wcm9maWxlLWNvbnRlbnQgbGkge1xuICAgIG1hcmdpbjogNXB4IDIwcHggMjBweCAyMHB4O1xuICAgIHdpZHRoOiA5NSU7XG59XG5cbi5wcm9maWxlLWNvbnRlbnQgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzhEOUYzRTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAwO1xufVxuLnByb2ZpbGUtY29udGVudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOEQ5RjNFO1xuICAgIGNvbG9yOiAjOEQ5RjNFO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZmlsZS1jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cblxuXG4ucHJvZmlsZS1idG4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTI1RTIwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAwO1xuXG59XG5cbi5wcm9maWxlLWJ0bjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMjVFMjA7XG4gICAgY29sb3I6ICNFMjVFMjA7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4ucHJvZmlsZS1idG46Zm9jdXN7XG4gICAgb3V0bGluZTogdW5zZXQ7XG59XG5cbi5lZGl0LWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6MDtcbn1cbi5lZGl0LWNvbnRlbnQgaW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RDlGM0U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAqOmZvY3VzIHtcbiAgICBvdXRsaW5lLWNvbG9yOiAjRTI1RTIwO1xufVxuXG4uY29uZmlybS1jaGFuZ2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM4RDlGM0U7XG4gICAgYmFja2dyb3VuZDogIzhEOUYzRTtcbn1cbi5jb25maXJtLWNoYW5nZTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOEQ5RjNFO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjOEQ5RjNFO1xufVxuXG4uc2hvdy1hZGRyZXNzLFxuLnNob3ctb3JkZXJzIHtcbiAgICB3aWR0aDogNDAlO1xufSJdfQ== */"] });
    return ProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "DgAN":
/*!***********************************************!*\
  !*** ./src/app/core/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "container-text"], [1, "container-footer"], ["src", "../../../assets/logo.png", "alt", ""], [1, "company-info"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0430 \u043D\u0430\u0441 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u043D\u0430 \u0445\u0440\u0430\u043D\u0430\u0442\u0430 \u0435 \u043E\u0441\u043D\u043E\u0432\u0435\u043D \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442. \u041D\u0430\u0448\u0430\u0442\u0430 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0435 \u0434\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043C\u0435 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0438\u0442\u0435 \u0441\u0438 \u0442\u043E\u0432\u0430, \u043A\u043E\u0435\u0442\u043E \u0441\u0430\u043C\u0438\u0442\u0435 \u043D\u0438\u0435 \u0441\u043B\u0430\u0433\u0430\u043C\u0435 \u043D\u0430 \u043D\u0430\u0448\u0430\u0442\u0430 \u043C\u0430\u0441\u0430. \u0412\u0435\u0447\u0435 \u0441 \u043D\u0430\u0442\u0440\u0443\u043F\u0430\u043D \u0431\u043E\u0433\u0430\u0442 \u043E\u043F\u0438\u0442 \u0432 \u0433\u043E\u0442\u0432\u0435\u043D\u0435\u0442\u043E \u0438 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u0438\u044F\u0442\u0430, \u0441\u044A\u0437\u0434\u0430\u0434\u043E\u0445\u043C\u0435 \u043D\u0430\u0448\u0438\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D. \u041D\u0438\u0435 \u0432\u044F\u0440\u0432\u0430\u043C\u0435, \u0447\u0435 \u0437\u0430\u0431\u044A\u0440\u0437\u0430\u043D\u043E\u0442\u043E \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u0438\u0435 \u043D\u0435 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0437\u0430 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441 \u0441 \u0438\u0437\u0431\u043E\u0440\u0430 \u043D\u0430 \u0445\u0440\u0430\u043D\u0430. \u0412\u0441\u0435\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u0435\u043D \u0434\u0435\u043D \u0412\u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043C\u0435 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u043E \u043E\u0431\u0435\u0434\u043D\u043E \u043C\u0435\u043D\u044E \u0438 \u043E\u0447\u0430\u043A\u0432\u0430\u043C\u0435 \u0412\u0430\u0448\u0438\u044F \u0438\u0437\u0431\u043E\u0440! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\"\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0421\u0442\u0430\u043D\u0447\u0435\u0432\" \u0415\u041E\u041E\u0414 \u0415\u0418\u041A:120545289 \u0441\u044A\u0441 \u0441\u0435\u0434\u0430\u043B\u0438\u0449\u0435: \u0433\u0440.\u0421\u043C\u043E\u043B\u044F\u043D,\u0431\u0443\u043B.\"\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F\"29 \u041C\u041E\u041B.:\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0421\u0442\u0430\u043D\u0447\u0435\u0432");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".container[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  display: flex;\n}\n\n.container-text[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  padding: 20px;\n  text-align: center;\n}\n\n.container-footer[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  padding: 20px;\n  width: 70%;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 40%;\n  margin: 0;\n  padding-bottom: 50px;\n}\n\n.company-info[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: .7rem;\n font-style: normal;\n  font-weight: bold;\n  flex-grow: 1;\n  margin: 0;\n}\n\np[_ngcontent-%COMP%] {\n  font-style: oblique;\n  letter-spacing: 1.3px;\n  line-height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCLGtCQUFrQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVyLXRleHQge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItZm9vdGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogNDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uY29tcGFueS1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IC43cmVtO1xuIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cbiJdfQ== */"] });
    return AboutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ECzu":
/*!***********************************************************!*\
  !*** ./src/app/user/user-orders/user-orders.component.ts ***!
  \***********************************************************/
/*! exports provided: UserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersComponent", function() { return UserOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function UserOrdersComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041D\u044F\u043C\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0438 \u043F\u043E\u0440\u044A\u0447\u043A\u0438...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserOrdersComponent_article_2_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, order_r3.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r3.payment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", order_r3.price.toFixed(2), " \u043B\u0432.");
} }
function UserOrdersComponent_article_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0414\u0430\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041F\u043B\u0430\u0449\u0430\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0421\u0442\u043E\u0439\u043D\u043E\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserOrdersComponent_article_2_tr_13_Template, 10, 6, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngb-pagination", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function UserOrdersComponent_article_2_Template_ngb_pagination_pageChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.page = $event; })("pageChange", function UserOrdersComponent_article_2_Template_ngb_pagination_pageChange_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.refreshOrders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserOrdersComponent_article_2_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.pageSize = $event; })("ngModelChange", function UserOrdersComponent_article_2_Template_select_ngModelChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.refreshOrders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "5 \u043F\u043E\u0440\u044A\u0447\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "10 \u043F\u043E\u0440\u044A\u0447\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "15 \u043F\u043E\u0440\u044A\u0447\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, ctx_r1.orders$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", ctx_r1.collectionSize)("page", ctx_r1.page)("pageSize", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", 15);
} }
var UserOrdersComponent = /** @class */ (function () {
    function UserOrdersComponent(userService) {
        this.userService = userService;
        this.user$ = this.userService.userData$;
        this.orders$ = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return user.orders; }));
        this.page = 1;
        this.pageSize = 5;
    }
    UserOrdersComponent.prototype.ngOnInit = function () {
        this.refreshOrders();
    };
    UserOrdersComponent.prototype.refreshOrders = function () {
        var _this = this;
        this.orders$ = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            _this.collectionSize = user.orders.length;
            return user.orders.map(function (order, i) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: i + 1 }, order)); })
                .slice((_this.page - 1) * _this.pageSize, (_this.page - 1) * _this.pageSize + _this.pageSize);
        }));
    };
    UserOrdersComponent.ɵfac = function UserOrdersComponent_Factory(t) { return new (t || UserOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
    UserOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserOrdersComponent, selectors: [["app-user-orders"]], decls: 4, vars: 6, consts: [["class", "no-orders", 4, "ngIf"], ["class", "orders", 4, "ngIf"], [1, "no-orders"], [1, "orders"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["scope", "row"]], template: function UserOrdersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserOrdersComponent_article_0_Template, 3, 0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserOrdersComponent_article_2_Template, 24, 10, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.orders$).length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.orders$).length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".no-orders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-style: italic;\n    margin: 50% auto;\n}\n\n.orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    border-collapse: unset;\n    margin: 30px auto;\n}\n\n.orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background: lightgrey;\n}\n\n.orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding:10px;\n}\n\n.orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n}\n\n  .pagination {\n    list-style: none;\n    display: flex;\n    text-decoration: unset;\n    justify-content: center;\n    padding-left: 0;\n    font-weight: bold;\n}\n\nngb-pagination[_ngcontent-%COMP%]     .pagination li {\n    margin: 10px;\n}\n\nngb-pagination[_ngcontent-%COMP%]     ul > li:not(.active) > a {\n    color: #E25E20;\n    text-decoration: none;\n}\n\nngb-pagination[_ngcontent-%COMP%]     ul > li.active > a {\n    color: #E25E20;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InVzZXItb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tb3JkZXJzIHAge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW46IDUwJSBhdXRvO1xufVxuXG4ub3JkZXJzIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHVuc2V0O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4ub3JkZXJzIHRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuXG4ub3JkZXJzIHRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOjEwcHg7XG59XG5cbi5vcmRlcnMgdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuOjpuZy1kZWVwIC5wYWdpbmF0aW9uIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm5nYi1wYWdpbmF0aW9uIDo6bmctZGVlcCAucGFnaW5hdGlvbiBsaSB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxubmdiLXBhZ2luYXRpb24gOjpuZy1kZWVwIHVsID4gbGk6bm90KC5hY3RpdmUpID4gYSB7XG4gICAgY29sb3I6ICNFMjVFMjA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5uZ2ItcGFnaW5hdGlvbiA6Om5nLWRlZXAgdWwgPiBsaS5hY3RpdmUgPiBhIHtcbiAgICBjb2xvcjogI0UyNUUyMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
    return UserOrdersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-orders',
                templateUrl: './user-orders.component.html',
                styleUrls: ['./user-orders.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IQ6F":
/*!*****************************************************************!*\
  !*** ./src/app/core/confirm-dialog/confirm-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 8, vars: 2, consts: [[1, "dialog"], [1, "mat-dialog-title"], [1, "mat-dialog-content"], [1, "mat-dialog-buttons"], ["type", "button", "value", "\u0414\u0430", "mat-dialog-close", "true", 1, "mat-dialog-btn", "false"], ["type", "button", "value", "\u041D\u0435", "mat-dialog-close", "false", 1, "mat-dialog-btn", "true"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, " ");
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".dialog[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    background: white;\n    border-radius: 6px;\n    padding: 20px;\n    border: 1px solid #E25E20;\n}\n  *:focus {\n    outline: unset;\n}\n.mat-dialog-title[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n    border-bottom: 1px solid black;\n    text-align: center;\n}\n.mat-dialog-content[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n.mat-dialog-buttons[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n}\n.mat-dialog-btn[_ngcontent-%COMP%] {\n    width: 100px;\n    padding: 5px;\n    border-radius: 6px;\n    background: #E25E20;\n    border: 2px solid #E25E20;\n    color: white;\n    font-weight: bold;\n}\n.mat-dialog-btn[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background: white;\n    color: #E25E20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTI1RTIwO1xufVxuOjpuZy1kZWVwICo6Zm9jdXMge1xuICAgIG91dGxpbmU6IHVuc2V0O1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LWRpYWxvZy1idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWF0LWRpYWxvZy1idG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNFMjVFMjA7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyNUUyMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtZGlhbG9nLWJ0bjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjRTI1RTIwO1xufSJdfQ== */"] });
    return ConfirmDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "J4gr":
/*!***********************************************!*\
  !*** ./src/app/core/terms/terms.component.ts ***!
  \***********************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TermsComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u043D\u0430 \u043B\u0438\u0446\u0430\u0442\u0430 \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043D\u043E\u0441\u043D\u043E \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E, \u043A\u043E\u0435\u0442\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0412\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0\"\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0421\u0442\u0430\u043D\u0447\u0435\u0432\" \u0415\u041E\u041E\u0414\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0415\u0418\u041A/\u0411\u0443\u043B\u0441\u0442\u0430\u0442: BG120545289\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0\u0433\u0440.\u0421\u043C\u043E\u043B\u044F\u043D, \u0431\u0443\u043B.\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F 29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0\u0433\u0440.\u0421\u043C\u043E\u043B\u044F\u043D, \u0431\u0443\u043B.\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F 29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A00878652067");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0delivery@smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0423\u0435\u0431\u0441\u0430\u0439\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043D\u043E\u0441\u043D\u043E \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u0438\u044F \u043D\u0430\u0434\u0437\u043E\u0440\u0435\u043D \u043E\u0440\u0433\u0430\u043D \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u041A\u043E\u043C\u0438\u0441\u0438\u044F \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 02 915 3 518");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "www.cpdp.bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\"\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0421\u0442\u0430\u043D\u0447\u0435\u0432\" \u0415\u041E\u041E\u0414\u00A0 (\u041D\u0430\u0440\u0438\u0447\u0430\u043D\u043E \u043F\u043E-\u0434\u043E\u043B\u0443 \u0437\u0430 \u043A\u0440\u0430\u0442\u043A\u043E\u0441\u0442 \u201E\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u201C \u0438\u043B\u0438 \u201E\u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E\u201C)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u043E\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u044F\u0432\u0430 \u0434\u0435\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u0441\u0438 \u0432 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u044A\u0441 \u0417\u0430\u043A\u043E\u043D\u0430 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0438 \u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442 (\u0415\u0421) 2016/679 \u043D\u0430 \u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u044F \u043F\u0430\u0440\u043B\u0430\u043C\u0435\u043D\u0442 \u0438 \u043D\u0430 \u0421\u044A\u0432\u0435\u0442\u0430 \u043E\u0442 27 \u0430\u043F\u0440\u0438\u043B 2016 \u0433\u043E\u0434\u0438\u043D\u0430 \u043E\u0442\u043D\u043E\u0441\u043D\u043E \u0437\u0430\u0449\u0438\u0442\u0430\u0442\u0430 \u043D\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0442\u0435 \u043B\u0438\u0446\u0430 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0438 \u043E\u0442\u043D\u043E\u0441\u043D\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0442\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0442\u0430\u043A\u0438\u0432\u0430 \u0434\u0430\u043D\u043D\u0438. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438\u043C\u0430 \u0446\u0435\u043B \u0434\u0430 \u0432\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u0430 \u0437\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0430\u0441\u043F\u0435\u043A\u0442\u0438 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u0442\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0432\u0438 \u0434\u0430\u043D\u043D\u0438 \u043E\u0442 \u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u0438 \u043F\u0440\u0430\u0432\u0430\u0442\u0430, \u043A\u043E\u0438\u0442\u043E \u0438\u043C\u0430\u0442\u0435 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u0442\u0430\u0437\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430 \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0435, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0427\u043B. 1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0441\u044A\u0431\u0438\u0440\u0430 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D www.smolyanobyad.com\u00A0 \u0438 \u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438 \u0441 \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0447\u043B. 6, \u0430\u043B. 1, \u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442 (\u0415\u0421) 2016/679 (GDPR), \u0438 \u043F\u043E-\u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E \u0432\u044A\u0437 \u043E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430 \u0441\u043B\u0435\u0434\u043D\u043E\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0418\u0437\u0440\u0438\u0447\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u043E\u0442 \u0412\u0430\u0441 \u043A\u0430\u0442\u043E \u043A\u043B\u0438\u0435\u043D\u0442;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0418\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u044F\u0442\u0430 \u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0441 \u0412\u0430\u0441;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0421\u043F\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u043E\u0432\u043E \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435, \u043A\u043E\u0435\u0442\u043E \u0441\u0435 \u043F\u0440\u0438\u043B\u0430\u0433\u0430 \u0441\u043F\u0440\u044F\u043C\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u0417\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043B\u0435\u0433\u0438\u0442\u0438\u043C\u043D\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438 \u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0438\u043B\u0438 \u043D\u0430 \u0442\u0440\u0435\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u0426\u0435\u043B\u0438 \u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0438 \u043F\u0440\u0438 \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0435\u0442\u043E, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0432\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0427\u043B. 2. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u041D\u0438\u0435 \u0441\u044A\u0431\u0438\u0440\u0430\u043C\u0435 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043C\u0435 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0412\u0438\u0435 \u043D\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442\u0435 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0441 \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u043D\u043E \u0437\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u0446\u0435\u043B\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043F\u044A\u043B\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u043E\u0441\u0442 \u043F\u0440\u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u043E\u0442 \u0440\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0430 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u0441\u0447\u0435\u0442\u043E\u0432\u043E\u0434\u043D\u0438 \u0446\u0435\u043B\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0446\u0435\u043B\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u0442\u0430 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u043E\u0431\u0435\u0437\u043F\u0435\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0437\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u043D\u0430\u0442\u0430 \u0443\u0441\u043B\u0443\u0433\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0431\u044E\u043B\u0435\u0442\u0438\u043D \u043F\u0440\u0438 \u0438\u0437\u0440\u0430\u0437\u0435\u043D\u043E \u043E\u0442 \u0412\u0430\u0441 \u0436\u0435\u043B\u0430\u043D\u0438\u0435;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "(2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u041D\u0438\u0435 \u0441\u043F\u0430\u0437\u0432\u0430\u043C\u0435 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0438 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u0442\u0430 \u043D\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u0437\u0430\u043A\u043E\u043D\u043E\u0441\u044A\u043E\u0431\u0440\u0430\u0437\u043D\u043E\u0441\u0442, \u0434\u043E\u0431\u0440\u043E\u0441\u044A\u0432\u0435\u0441\u0442\u043D\u043E\u0441\u0442 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u0441\u044A\u043E\u0442\u043D\u043E\u0441\u0438\u043C\u043E\u0441\u0442 \u0441 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u0442\u0430 \u0438 \u0441\u0432\u0435\u0436\u0434\u0430\u043D\u0435 \u0434\u043E \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u043D\u0430 \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u0442\u043E\u0447\u043D\u043E\u0441\u0442 \u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u043D\u043E\u0441\u0442 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u044A\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u0441 \u043E\u0433\u043B\u0435\u0434 \u043F\u043E\u0441\u0442\u0438\u0433\u0430\u043D\u0435 \u043D\u0430 \u0446\u0435\u043B\u0438\u0442\u0435;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u0446\u044F\u043B\u043E\u0441\u0442\u043D\u043E\u0441\u0442 \u0438 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u043E \u043D\u0438\u0432\u043E \u043D\u0430 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "(3) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u041F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043C\u043E\u0436\u0435 \u0434\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0441 \u0446\u0435\u043B \u0437\u0430\u0449\u0438\u0442\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u0441\u0438 \u043B\u0435\u0433\u0438\u0442\u0438\u043C\u043D\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u044F\u0442\u0430 \u0441\u0438 \u043A\u044A\u043C \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0430 \u0430\u0433\u0435\u043D\u0446\u0438\u044F \u043F\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435, \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u043D\u0430 \u0432\u044A\u0442\u0440\u0435\u0448\u043D\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438 \u0434\u044A\u0440\u0436\u0430\u0432\u043D\u0438 \u0438 \u043E\u0431\u0449\u0438\u043D\u0441\u043A\u0438 \u043E\u0440\u0433\u0430\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u041A\u0430\u043A\u0432\u0438 \u0432\u0438\u0434\u043E\u0432\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0441\u044A\u0431\u0438\u0440\u0430, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430 \u043D\u0430\u0448\u0435\u0442\u043E \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u0427\u043B. 3. (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 \u0412\u0430\u0441 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u0446\u0435\u043B\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u043E-\u043F\u0440\u043E\u0434\u0430\u0436\u0431\u0430 \u043E\u0442 \u0440\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \u2013 \u0446\u0435\u043B\u0442\u0430 \u043D\u0430 \u0442\u0430\u0437\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0435 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B \u0437\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0437\u0430 \u0437\u0430\u043A\u0443\u043F\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0442\u043E\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u0437\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438 \u0441\u0442\u043E\u043A\u0438. \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0442\u0430 \u0438 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B \u0437\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u043D\u0435 \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0430 \u0441\u0442\u044A\u043F\u043A\u0430 \u043E\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435\u0442\u043E \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0430\u0442\u0430 \u0438 \u0442\u044F \u0435 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u0430 \u0432 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u043D\u0430 \u0441\u0442\u0435\u043F\u0435\u043D \u0438 \u0431\u0435\u0437 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u0417\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043E\u0442 \u043E\u0446\u0435\u043D\u043A\u0430\u0442\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ": \u0412\u044A\u0437 \u043E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0435\u043D\u0430\u0442\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E, \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u0442\u0430 \u201E\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u043E-\u043F\u0440\u043E\u0434\u0430\u0436\u0431\u0430 \u043E\u0442 \u0440\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u201C \u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430 \u0437\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F \u0434\u043E\u0441\u0442\u0430\u0442\u044A\u0447\u043D\u0438 \u0433\u0430\u0440\u0430\u043D\u0446\u0438\u0438 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438 \u043D\u0430 \u0441\u0443\u0431\u0435\u043A\u0442\u0438\u0442\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0432 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u043D\u0438\u044F\u0442\u0430 \u043D\u0430 GDPR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u0421\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0430 \u0441\u0434\u0435\u043B\u043A\u0430 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442 \u0438\u043B\u0438 \u043F\u0430\u0440\u0442\u043D\u044C\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " \u2013 \u0446\u0435\u043B\u0442\u0430 \u043D\u0430 \u0442\u0430\u0437\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0435 \u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0441 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438 \u043F\u0430\u0440\u0442\u043D\u044C\u043E\u0440 \u0438\u043B\u0438 \u043A\u043B\u0438\u0435\u043D\u0442 \u0438 \u043D\u0435\u0433\u043E\u0432\u043E\u0442\u043E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0435. \u041F\u0440\u0435\u0434\u0432\u0438\u0434 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043E\u0431\u0445\u0432\u0430\u0442 \u043D\u0430 \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0438 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u0441\u0442\u0432\u043E\u0442\u043E, \u0447\u0435 \u0447\u0430\u0441\u0442 \u043E\u0442 \u0442\u044F\u0445 \u0441\u0435 \u0441\u044A\u0431\u0438\u0440\u0430\u0442 \u043E\u0442 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u0438 \u0438\u0437\u0442\u043E\u0447\u043D\u0438\u0446\u0438, \u043F\u0440\u043E\u0432\u0435\u0436\u0434\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u043D\u0435 \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\u0418\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0431\u044E\u043B\u0435\u0442\u0438\u043D (\u043D\u044E\u0437\u043B\u0435\u0442\u044A\u0440)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " \u2013 \u0446\u0435\u043B\u0442\u0430 \u043D\u0430 \u0442\u0430\u0437\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0430 \u043F\u043E \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0431\u044E\u043B\u0435\u0442\u0438\u043D\u0438 \u0434\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u0437\u0430\u044F\u0432\u0438\u043B\u0438, \u0447\u0435 \u0436\u0435\u043B\u0430\u044F\u0442 \u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u0442. \u041F\u0440\u0435\u0434\u0432\u0438\u0434 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043E\u0431\u0445\u0432\u0430\u0442 \u043D\u0430 \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043F\u0440\u043E\u0432\u0435\u0436\u0434\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u043D\u0435 \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u0423\u043F\u0440\u0430\u0436\u043D\u044F\u0432\u0430\u043D\u0435 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u043E\u0442\u043A\u0430\u0437 \u0438\u043B\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430\u0446\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " \u2013 \u0446\u0435\u043B\u0442\u0430 \u043D\u0430 \u0442\u0430\u0437\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0430 \u043F\u043E \u0443\u043F\u0440\u0430\u0436\u043D\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u043E\u0442\u043A\u0430\u0437 \u0438\u043B\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u0430\u0446\u0438\u044F \u043E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u041F\u0440\u0435\u0434\u0432\u0438\u0434 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043E\u0431\u0445\u0432\u0430\u0442 \u043D\u0430 \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043F\u0440\u043E\u0432\u0435\u0436\u0434\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u043D\u0435 \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "(2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u0446\u0435\u043B\u0438 \u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u0412\u0430\u0448\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u0449\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " (\u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0449\u0430, \u0438\u043C\u0435 \u0438 \u0434\u0440.) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u0426\u0435\u043B, \u0437\u0430 \u043A\u043E\u044F\u0442\u043E \u0441\u0435 \u0441\u044A\u0431\u0438\u0440\u0430\u0442 \u0434\u0430\u043D\u043D\u0438\u0442\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " 1) \u041E\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0438 \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043A\u044A\u043C \u043D\u0435\u0433\u043E, 2) \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430, \u043A\u0430\u043A\u0442\u043E \u0438 3) \u0437\u0430 \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0431\u044E\u043B\u0435\u0442\u0438\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " - \u0421 \u043F\u0440\u0438\u0435\u043C\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0431\u0449\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438\u043B\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F, \u0438\u043B\u0438 \u043F\u0440\u0438 \u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u0438\u0441\u043C\u0435\u043D \u0434\u043E\u0433\u043E\u0432\u043E\u0440, \u043C\u0435\u0436\u0434\u0443 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0438 \u0412\u0430\u0441 \u0441\u0435 \u0441\u044A\u0437\u0434\u0430\u0432\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435, \u043D\u0430 \u043A\u043E\u0435\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043C\u0435 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u2013 \u0447\u043B. 6, \u0430\u043B. 1, \u0431. (\u0431) GDPR. \u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u0412\u0438 \u0437\u0430 \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0431\u044E\u043B\u0435\u0442\u0438\u043D \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u043D\u0430 \u0434\u0430\u0434\u0435\u043D\u043E \u043E\u0442 \u0412\u0430\u0441 \u0438\u0437\u0440\u0438\u0447\u043D\u043E \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 - \u0447\u043B. 6, \u0430\u043B. 1, \u0431. (\u0430) GDPR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "(\u0438\u043C\u0435\u043D\u0430, \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u0430\u0434\u0440\u0435\u0441 \u0438 \u0434\u0440.) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "\u0426\u0435\u043B, \u0437\u0430 \u043A\u043E\u044F\u0442\u043E \u0441\u0435 \u0441\u044A\u0431\u0438\u0440\u0430\u0442 \u0434\u0430\u043D\u043D\u0438\u0442\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " \u0418\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u043E-\u043F\u0440\u043E\u0434\u0430\u0436\u0431\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438\u0442\u0435 \u0441\u0442\u043E\u043A\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " - \u0421 \u043F\u0440\u0438\u0435\u043C\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0431\u0449\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438\u043B\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F, \u0438\u043B\u0438 \u043F\u0440\u0438 \u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u0438\u0441\u043C\u0435\u043D \u0434\u043E\u0433\u043E\u0432\u043E\u0440, \u043C\u0435\u0436\u0434\u0443 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0438 \u0412\u0430\u0441 \u0441\u0435 \u0441\u044A\u0437\u0434\u0430\u0432\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435, \u043D\u0430 \u043A\u043E\u0435\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043C\u0435 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u2013 \u0447\u043B. 6, \u0430\u043B. 1, \u0431. (\u0431) GDPR.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\u0414\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438 \u043E\u0442 \u0412\u0430\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " \u2013 \u0410\u043A\u043E \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u0434\u0430 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0412\u0430\u0448\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B, \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0432 \u043D\u0435\u0433\u043E \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0438\u043C\u0435, \u0444\u0430\u043C\u0438\u043B\u0438\u044F, \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435\u043D \u043D\u043E\u043C\u0435\u0440. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\u0426\u0435\u043B, \u0437\u0430 \u043A\u043E\u044F\u0442\u043E \u0441\u0435 \u0441\u044A\u0431\u0438\u0440\u0430\u0442 \u0434\u0430\u043D\u043D\u0438\u0442\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " \u0414\u043E\u043F\u044A\u043B\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0432 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u0438\u044F \u043C\u0443 \u0430\u043A\u0430\u0443\u043D\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " \u0412\u0438\u0435 \u0441\u0442\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0438\u0437\u0440\u0438\u0447\u043D\u043E \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u043C\u0443 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0435\u0434\u043D\u0430 \u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0438 \u0446\u0435\u043B\u0438 - 6, \u0430\u043B. 1, \u0431. (a) \u043D\u0430 GDPR \u0432 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430. \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435\u0442\u043E \u043D\u0430 \u0442\u0435\u0437\u0438 \u0434\u0430\u043D\u043D\u0438, \u043D\u0435 \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043D\u0435 \u0441\u044A\u0431\u0438\u0440\u0430 \u0438 \u043D\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u043E\u0442\u043D\u0430\u0441\u044F\u0442 \u0437\u0430 \u0441\u043B\u0435\u0434\u043D\u043E\u0442\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\u0440\u0430\u0437\u043A\u0440\u0438\u0432\u0430\u0442 \u0440\u0430\u0441\u043E\u0432 \u0438\u043B\u0438 \u0435\u0442\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0445\u043E\u0434;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\u0440\u0430\u0437\u043A\u0440\u0438\u0432\u0430\u0442 \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0440\u0435\u043B\u0438\u0433\u0438\u043E\u0437\u043D\u0438 \u0438\u043B\u0438 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0441\u043A\u0438 \u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u044F, \u0438\u043B\u0438 \u0447\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0432 \u0441\u0438\u043D\u0434\u0438\u043A\u0430\u043B\u043D\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\u0433\u0435\u043D\u0435\u0442\u0438\u0447\u043D\u0438 \u0438 \u0431\u0438\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0437\u0434\u0440\u0430\u0432\u043E\u0441\u043B\u043E\u0432\u043D\u043E\u0442\u043E \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438\u043B\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0441\u0435\u043A\u0441\u0443\u0430\u043B\u043D\u0438\u044F \u0436\u0438\u0432\u043E\u0442 \u0438\u043B\u0438 \u0441\u0435\u043A\u0441\u0443\u0430\u043B\u043D\u0430\u0442\u0430 \u043E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "(4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "\u041B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0441\u0430 \u0441\u044A\u0431\u0440\u0430\u043D\u0438 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043E\u0442 \u043B\u0438\u0446\u0430\u0442\u0430, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u043E\u0442\u043D\u0430\u0441\u044F\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "(5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " \u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u043D\u0435 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0430\u043D\u043E \u0432\u0437\u0438\u043C\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0441 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\u0427\u043B. 4. (1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 \u0412\u0430\u0441, \u043A\u0430\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043D\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0438\u043B\u0438 \u043F\u044A\u043B\u043D\u043E\u043C\u043E\u0449\u043D\u0438\u0446\u0438 \u043D\u0430 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u043B\u0438\u0446\u0430-\u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438 \u043F\u0430\u0440\u0442\u043D\u044C\u043E\u0440\u0438, \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u0446\u0435\u043B\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\u0421\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0430 \u0441\u0434\u0435\u043B\u043A\u0430: \u0417\u0430 \u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0430 \u0441\u0434\u0435\u043B\u043A\u0430 \u0441 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u043E \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E, \u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043C\u0435 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043E \u0442\u0440\u0438\u0442\u0435 \u0438\u043C\u0435\u043D\u0430 \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B \u0438\u043B\u0438 \u0443\u043F\u044A\u043B\u043D\u043E\u043C\u043E\u0449\u0435\u043D\u043E\u0442\u043E \u043E\u0442 \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u043B\u0438\u0446\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\u0417\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043E\u0442 \u043E\u0446\u0435\u043D\u043A\u0430\u0442\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " \u041F\u0440\u0435\u0434\u0432\u0438\u0434 \u043D\u0435\u0433\u043E\u043B\u0435\u043C\u0438\u044F \u043E\u0431\u0435\u043C \u043D\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438 \u043B\u0438\u0446\u0430, \u0447\u0438\u0438\u0442\u043E \u0434\u0430\u043D\u043D\u0438 \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u0438 \u043F\u0440\u0435\u0434\u0432\u0438\u0434 \u043B\u0438\u043C\u0438\u0442\u0438\u0440\u0430\u043D\u0438\u044F \u043E\u0431\u0435\u043C \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0441\u044A\u0431\u0438\u0440\u0430\u0442, \u043F\u0440\u043E\u0432\u0435\u0436\u0434\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0432\u044A\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u043D\u0435 \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0437\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " \u041B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0441\u0430 \u0441\u044A\u0431\u0440\u0430\u043D\u0438 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043E\u0442 \u043B\u0438\u0446\u0430\u0442\u0430, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u043E\u0442\u043D\u0430\u0441\u044F\u0442 \u0438 \u043E\u0442 \u0422\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u044A\u0440 \u043A\u044A\u043C \u0410\u0433\u0435\u043D\u0446\u0438\u044F \u043F\u043E \u0432\u043F\u0438\u0441\u0432\u0430\u043D\u0438\u044F\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " \u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u043D\u0435 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0430\u043D\u043E \u0432\u0437\u0438\u043C\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0441 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "\u0427\u043B. 5.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u0442.\u043D\u0430\u0440. \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043F\u044A\u043B\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u043E\u0441\u0442 \u043D\u0430 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430, \u043F\u043E\u0434\u043E\u0431\u0440\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E\u0442\u043E \u043F\u0440\u0435\u0436\u0438\u0432\u044F\u0432\u0430\u043D\u0435, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0446\u0435\u043B\u0438, \u0443\u043B\u0435\u0441\u043D\u0435\u043D \u0434\u043E\u0441\u0442\u044A\u043F \u0438 \u0434\u0440., \u0441 \u043A\u043E\u0435\u0442\u043E \u0412\u0438\u0435 \u0441\u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u044F\u0432\u0430\u0442\u0435 \u0447\u0440\u0435\u0437 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043D\u0430\u0448\u0438\u044F \u0443\u0435\u0431\u0441\u0430\u0439\u0442. \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E \u0432\u0441\u044F\u043A\u043E \u0432\u0440\u0435\u043C\u0435 \u0434\u0430 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0430\u0442\u0435 \u0438/\u0438\u043B\u0438 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u0442\u0435 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\u201C \u0447\u0440\u0435\u0437 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435 \u043D\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0438\u044F \u043E\u0442 \u0412\u0430\u0441 \u0431\u0440\u0430\u0443\u0437\u044A\u0440. \u201E\u0411\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\u201C \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0432\u0430\u0442 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0438 \u043D\u0435 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u0437\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0438 \u043F\u043E\u043B\u0437\u0432\u0430\u0442\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "\u0421\u0440\u043E\u043A \u043D\u0430 \u0441\u044A\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0432\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "\u0427\u043B. 6. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0441\u0440\u043E\u043A \u043D\u0435 \u043F\u043E-\u0434\u044A\u043B\u044A\u0433 \u043E\u0442 \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u0430 \u0412\u0438 \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D. \u0421\u043B\u0435\u0434 \u0437\u0430\u043B\u0438\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u0430 \u0432\u0438, \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043F\u043E\u043B\u0430\u0433\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0438\u0442\u0435 \u0433\u0440\u0438\u0436\u0438 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435 \u0438 \u0443\u043D\u0438\u0449\u043E\u0436\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u0438, \u0431\u0435\u0437 \u043D\u0435\u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0431\u0430\u0432\u044F\u043D\u0435 \u0438\u043B\u0438 \u0434\u0430 \u0433\u0438 \u0430\u043D\u043E\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u0430 (\u0442.\u0435. \u0434\u0430 \u0433\u0438 \u043F\u0440\u0438\u0432\u0435\u0434\u0435 \u0432\u044A\u0432 \u0432\u0438\u0434, \u043A\u043E\u0439\u0442\u043E \u043D\u0435 \u0440\u0430\u0437\u043A\u0440\u0438\u0432\u0430 \u0432\u0430\u0448\u0430\u0442\u0430 \u043B\u0438\u0447\u043D\u043E\u0441\u0442).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u0442\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u043F\u0440\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u0434\u043E \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430, \u043E\u0441\u0432\u0435\u043D \u0430\u043A\u043E \u0441\u0442\u0435 \u0434\u0430\u043B\u0438 \u0441\u0432\u043E\u0435\u0442\u043E \u0438\u0437\u0440\u0438\u0447\u043D\u043E \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u043F\u0440\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430 \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u0434\u043E\u0431\u0440\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0430\u0442\u0430, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043F\u0440\u0435\u043F\u043E\u0440\u044A\u0447\u0430\u043D\u043E \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435 \u0437\u0430 \u0412\u0430\u0441, \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u043D\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043F\u0440\u043E\u043C\u043E\u0446\u0438\u0438, \u043A\u0430\u043A\u0442\u043E \u0438 \u0437\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0446\u0435\u043B\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0437\u0430 \u0441\u0440\u043E\u043A \u043E\u0442 5 \u0433\u043E\u0434\u0438\u043D\u0438 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043F\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438 \u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u0440\u0438 \u0441\u044A\u0434\u0435\u0431\u043D\u0438 \u0438\u043B\u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0438 \u0441\u043F\u043E\u0440\u043E\u0432\u0435 \u0441 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438 \u043D\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "(4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0412\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430, \u0432 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u0441\u0440\u043E\u043A\u044A\u0442 \u0437\u0430 \u0441\u044A\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u0430 \u0431\u044A\u0434\u0435 \u0443\u0434\u044A\u043B\u0436\u0435\u043D \u0441 \u043E\u0433\u043B\u0435\u0434 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441 \u043E\u0433\u043B\u0435\u0434 \u043B\u0435\u0433\u0438\u0442\u0438\u043C\u043D\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438 \u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "(5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u0430 \u043F\u0430\u0437\u0438 \u043F\u043E \u0441\u0438\u043B\u0430\u0442\u0430 \u043D\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0437\u0430 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D \u0441\u0440\u043E\u043A, \u043A\u043E\u0439\u0442\u043E \u043C\u043E\u0436\u0435 \u0434\u0430 \u043D\u0430\u0434\u0445\u0432\u044A\u0440\u043B\u044F \u0441\u0440\u043E\u043A\u0430 \u043D\u0430 \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u0412\u0430\u0448\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438\u043B\u0438 \u0434\u043E \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "\u0427\u043B. 7.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u043D\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438\u0442\u0435 \u0441\u0438 \u043F\u0430\u0440\u0442\u043D\u044C\u043E\u0440\u0438 \u0437\u0430 \u0441\u0440\u043E\u043A\u0430 \u043D\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u0437\u0430 \u0441\u043F\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043B\u0435\u0433\u0438\u0442\u0438\u043C\u043D\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438 \u0438 \u0437\u0430\u043A\u043E\u043D\u043E\u0432\u0438 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430, \u043A\u0430\u0442\u043E \u0442\u043E\u0437\u0438 \u0441\u0440\u043E\u043A \u043C\u043E\u0436\u0435 \u0434\u0430 \u043D\u0430\u0434\u0445\u0432\u044A\u0440\u043B\u044F \u0441\u0440\u043E\u043A\u0430 \u043D\u0430 \u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "\u041F\u0440\u0435\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\u0427\u043B. 8. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043C\u043E\u0436\u0435 \u043F\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 \u043F\u0440\u0435\u0446\u0435\u043D\u043A\u0430 \u0434\u0430 \u043F\u0440\u0435\u0434\u0430\u0432\u0430 \u0447\u0430\u0441\u0442 \u0438\u043B\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0412\u0430\u0448\u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0449\u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435, \u0441 \u043A\u043E\u0438\u0442\u043E \u0441\u0442\u0435 \u0441\u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u043B\u0438, \u043F\u0440\u0438 \u0441\u043F\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u043D\u0438\u044F\u0442\u0430 \u043D\u0430 \u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442 (\u0415\u0421) 2016/679 (GDPR).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "(2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0412\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430 \u0432 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0434\u0430 \u043F\u0440\u0435\u0434\u0430\u0434\u0435 \u0447\u0430\u0441\u0442 \u0438\u043B\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0412\u0430\u0448\u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u0434\u044A\u0440\u0436\u0430\u0432\u0438 \u0438\u043B\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "\u0412\u0430\u0448\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u043F\u0440\u0438 \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0435\u0442\u043E, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "\u041E\u0442\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435\u0442\u043E \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "\u0427\u043B. 9. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " \u0410\u043A\u043E \u043D\u0435 \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 \u0412\u0430\u0441 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0434\u0430 \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u0437\u0430 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0438 \u0446\u0435\u043B\u0438 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0431\u044E\u043B\u0435\u0442\u0438\u043D, \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E \u0432\u0441\u044F\u043A\u043E \u0432\u0440\u0435\u043C\u0435 \u0434\u0430 \u043E\u0442\u0442\u0435\u0433\u043B\u0438\u0442\u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435\u0442\u043E \u0441\u0438 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u043A\u0430\u0442\u043E \u043F\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0437\u0430 \u043E\u0442\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u0432 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 1 \u0438\u043B\u0438 \u0447\u0440\u0435\u0437 \u0438\u0441\u043A\u0430\u043D\u0435 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D \u0442\u0435\u043A\u0441\u0442, \u0438 \u043D\u0438 \u0433\u043E \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u0442\u0435 \u043F\u043E \u0438\u043C\u0435\u0439\u043B.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " \u0421\u043B\u0435\u0434 \u043A\u0430\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0412\u0430\u0448\u0435\u0442\u043E \u0438\u0441\u043A\u0430\u043D\u0435, \u0449\u0435 \u0412\u0438 \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u043C \u043D\u0430 \u0438\u043C\u0435\u0439\u043B\u0430, \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u043F\u043E\u0441\u043E\u0447\u0438\u043B\u0438 \u0437\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0431\u044E\u043B\u0435\u0442\u0438\u043D\u0438 \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u043F\u0438\u0441\u043C\u043E \u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0437\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0412\u0438 \u043A\u0430\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B \u043D\u0430 \u0431\u044E\u043B\u0435\u0442\u0438\u043D\u0438 \u0438 \u0441\u0443\u0431\u0435\u043A\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0435 \u0437\u0430\u044F\u0432\u0435\u043D\u043E \u043E\u0442\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435\u0442\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " \u041E\u0442\u0442\u0435\u0433\u043B\u044F\u043D\u0435\u0442\u043E \u043D\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435\u0442\u043E \u043D\u0435 \u0441\u0435 \u043E\u0442\u0440\u0430\u0437\u044F\u0432\u0430 \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u043E\u0441\u044A\u043E\u0431\u0440\u0430\u0437\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0435\u0442\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0435 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043B \u0434\u043E \u0442\u043E\u0437\u0438 \u043C\u043E\u043C\u0435\u043D\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0434\u043E\u0441\u0442\u044A\u043F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u0427\u043B. 10. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " \u0412\u0438\u0435 \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u0438\u0437\u0438\u0441\u043A\u0430\u0442\u0435 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0430\u043B\u0438 \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0412\u0430\u0441, \u043A\u0430\u0442\u043E \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u0442\u0435 \u0438\u0441\u043A\u0430\u043D\u0435 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D \u0442\u0435\u043A\u0441\u0442 \u043F\u043E \u0438\u043C\u0435\u0439\u043B.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " \u0412\u0438\u0435 \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u0434\u0430\u043D\u043D\u0438\u0442\u0435, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0432\u0430\u0441, \u043A\u0430\u043A\u0442\u043E \u0438 \u0434\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430, \u043E\u0442\u043D\u0430\u0441\u044F\u0449\u0430 \u0441\u0435 \u0434\u043E \u0441\u044A\u0431\u0438\u0440\u0430\u043D\u0435\u0442\u043E, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " \u0421\u043B\u0435\u0434 \u043A\u0430\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0412\u0430\u0448\u0435\u0442\u043E \u0438\u0441\u043A\u0430\u043D\u0435, \u0449\u0435 \u0412\u0438 \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u043C \u043D\u0430 \u0438\u043C\u0435\u0439\u043B\u0430, \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438\u043B\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u043F\u0438\u0441\u043C\u043E \u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0437\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0412\u0438 \u043A\u0430\u0442\u043E \u0441\u0443\u0431\u0435\u043A\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0434\u043E \u043A\u043E\u0438\u0442\u043E \u0435 \u0437\u0430\u044F\u0432\u0435\u043D \u0434\u043E\u0441\u0442\u044A\u043F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "(4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " \u0421\u043B\u0435\u0434 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430, \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0430\u043B. 3, \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0412\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F \u043F\u0440\u0438 \u043F\u043E\u0438\u0441\u043A\u0432\u0430\u043D\u0435, \u043A\u043E\u043F\u0438\u0435 \u043E\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0412\u0430\u0441, \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0430 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0430 \u0444\u043E\u0440\u043C\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "(5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435\u0442\u043E \u043D\u0430 \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0435 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E, \u043D\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0441\u0438 \u0437\u0430\u043F\u0430\u0437\u0432\u0430 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u0434\u0430 \u043D\u0430\u043B\u043E\u0436\u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0442\u0430\u043A\u0441\u0430, \u0432 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u043C\u043E\u0441\u0442 \u0438\u043B\u0438 \u043F\u0440\u0435\u043A\u043E\u043C\u0435\u0440\u043D\u043E\u0441\u0442 \u043D\u0430 \u0438\u0441\u043A\u0430\u043D\u0438\u044F\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u043A\u043E\u0440\u0438\u0433\u0438\u0440\u0430\u043D\u0435 \u0438\u043B\u0438 \u043F\u043E\u043F\u044A\u043B\u0432\u0430\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "\u0427\u043B. 11. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E \u0432\u0441\u044F\u043A\u043E \u0432\u0440\u0435\u043C\u0435 \u0434\u0430 \u043A\u043E\u0440\u0438\u0433\u0438\u0440\u0430\u0442\u0435 \u0438\u043B\u0438 \u0434\u0430 \u043F\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u043D\u0435\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043D\u0435\u043F\u044A\u043B\u043D\u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0412\u0430\u0441, \u043F\u0440\u0435\u0437 \u043E\u043F\u0446\u0438\u044F\u0442\u0430 \u201E\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u0430\u201C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, " \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043A\u043E\u0440\u0438\u0433\u0438\u0440\u0430\u0442\u0435 \u0438\u043B\u0438 \u043F\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u043D\u0435\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043D\u0435\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0412\u0430\u0441 \u0434\u0438\u0440\u0435\u043A\u0442\u043D\u043E \u043F\u0440\u0435\u0437 \u0412\u0430\u0448\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B \u0432 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430 \u0438\u043B\u0438 \u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0438\u0441\u043A\u0430\u043D\u0435 \u0434\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u043E \u0438\u043C\u0435\u0439\u043B, \u043A\u0430\u0442\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0432 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 4 \u0438\u043B\u0438 \u0447\u0440\u0435\u0437 \u0438\u0441\u043A\u0430\u043D\u0435 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D \u0442\u0435\u043A\u0441\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 (\u201E\u0434\u0430 \u0431\u044A\u0434\u0435\u0448 \u0437\u0430\u0431\u0440\u0430\u0432\u0435\u043D\u201C)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "\u0427\u043B. 12. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " \u0412\u0438\u0435 \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430\u0442\u0435 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0447\u0430\u0441\u0442 \u0438\u043B\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0412\u0430\u0441 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0438\u043C\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435\u0442\u043E \u0434\u0430 \u0433\u0438 \u0438\u0437\u0442\u0440\u0438\u0435 \u0431\u0435\u0437 \u043D\u0435\u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0431\u0430\u0432\u044F\u043D\u0435, \u043A\u043E\u0433\u0430\u0442\u043E \u0435 \u043D\u0430\u043B\u0438\u0446\u0435 \u043D\u044F\u043A\u043E\u0435 \u043E\u0442 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438\u0442\u0435 \u043F\u043E-\u0434\u043E\u043B\u0443 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "\u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u043F\u043E\u0432\u0435\u0447\u0435 \u043D\u0435 \u0441\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0438 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u0431\u0438\u043B\u0438 \u0441\u044A\u0431\u0440\u0430\u043D\u0438 \u0438\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0438 \u043F\u043E \u0434\u0440\u0443\u0433 \u043D\u0430\u0447\u0438\u043D;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "\u0412\u0438\u0435 \u043E\u0442\u0442\u0435\u0433\u043B\u0438\u0442\u0435 \u0441\u0432\u043E\u0435\u0442\u043E \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435, \u0432\u044A\u0440\u0445\u0443 \u043A\u043E\u0435\u0442\u043E \u0441\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u0432\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0438 \u043D\u044F\u043C\u0430 \u0434\u0440\u0443\u0433\u043E \u043F\u0440\u0430\u0432\u043D\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "\u0412\u0438\u0435 \u0432\u044A\u0437\u0440\u0430\u0437\u0438\u0442\u0435 \u0441\u0440\u0435\u0449\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438\u0442\u0435 \u0441 \u0412\u0430\u0441 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u043D\u043E \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043D\u0438\u044F \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0438 \u043D\u044F\u043C\u0430 \u0437\u0430\u043A\u043E\u043D\u043D\u0438 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E, \u043A\u043E\u0438\u0442\u043E \u0434\u0430 \u0438\u043C\u0430\u0442 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "\u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0441\u0430 \u0431\u0438\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0438 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043E\u0441\u044A\u043E\u0431\u0440\u0430\u0437\u043D\u043E;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "\u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0441 \u0446\u0435\u043B \u0441\u043F\u0430\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u0440\u0430\u0432\u043D\u043E \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u0415\u0421 \u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u0434\u044A\u0440\u0436\u0430\u0432\u0430 \u0447\u043B\u0435\u043D\u043A\u0430, \u043A\u043E\u0435\u0442\u043E \u0441\u0435 \u043F\u0440\u0438\u043B\u0430\u0433\u0430 \u0441\u043F\u0440\u044F\u043C\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "\u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0441\u0430 \u0431\u0438\u043B\u0438 \u0441\u044A\u0431\u0440\u0430\u043D\u0438 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0442\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043D\u0435 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0430\u043A\u043E \u0433\u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "\u0437\u0430 \u0443\u043F\u0440\u0430\u0436\u043D\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u0441\u0432\u043E\u0431\u043E\u0434\u0430 \u043D\u0430 \u0438\u0437\u0440\u0430\u0437\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "\u0437\u0430 \u0441\u043F\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u043D\u043E \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435, \u043A\u043E\u0435\u0442\u043E \u0438\u0437\u0438\u0441\u043A\u0432\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435, \u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043E \u0432 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u0415\u0421 \u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u0434\u044A\u0440\u0436\u0430\u0432\u0430\u0442\u0430 \u0447\u043B\u0435\u043D\u043A\u0430, \u043A\u043E\u0435\u0442\u043E \u0441\u0435 \u043F\u0440\u0438\u043B\u0430\u0433\u0430 \u0441\u043F\u0440\u044F\u043C\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0438\u043B\u0438 \u0437\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u043E\u0442 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u0438\u043B\u0438 \u043F\u0440\u0438 \u0443\u043F\u0440\u0430\u0436\u043D\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u043D\u0438 \u043F\u0440\u0430\u0432\u043E\u043C\u043E\u0449\u0438\u044F, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u043C\u0443 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "\u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0438 \u043E\u0442 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0442\u0430 \u043D\u0430 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043E\u0442\u043E \u0437\u0434\u0440\u0430\u0432\u0435;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "\u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u0432 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u0435\u0441, \u0437\u0430 \u043D\u0430\u0443\u0447\u043D\u0438 \u0438\u043B\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u0437\u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0446\u0435\u043B\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "\u0437\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E, \u0443\u043F\u0440\u0430\u0436\u043D\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u0438\u043B\u0438 \u0437\u0430\u0449\u0438\u0442\u0430\u0442\u0430 \u043D\u0430 \u043F\u0440\u0430\u0432\u043D\u0438 \u043F\u0440\u0435\u0442\u0435\u043D\u0446\u0438\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " \u0417\u0430 \u0434\u0430 \u0443\u043F\u0440\u0430\u0436\u043D\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u0441\u0438 \u0437\u0430 \u0431\u044A\u0434\u0435\u0442\u0435 \u0437\u0430\u0431\u0440\u0430\u0432\u0435\u043D, \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u0430 \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u0442\u0435 \u043F\u043E \u0438\u043C\u0435\u0439\u043B \u0438\u0441\u043A\u0430\u043D\u0435 \u0437\u0430 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430, \u043A\u0430\u0442\u043E \u043F\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0432 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 2 \u0438\u043B\u0438 \u0447\u0440\u0435\u0437 \u0438\u0441\u043A\u0430\u043D\u0435 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D \u0442\u0435\u043A\u0441\u0442, \u0441\u043B\u0435\u0434 \u043A\u043E\u0435\u0442\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0449\u0435 \u0438\u0437\u043F\u0440\u0430\u0442\u0438 \u043D\u0430 \u0438\u043C\u0435\u0439\u043B\u0430, \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438\u043B\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u043F\u0438\u0441\u043C\u043E \u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0437\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0412\u0438 \u043A\u0430\u0442\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u043D\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0438 \u0441\u0443\u0431\u0435\u043A\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0438\u0441\u043A\u0430\u043D\u0435 \u0437\u0430 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "(4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " \u0421\u043B\u0435\u0434 \u043A\u0430\u0442\u043E \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0438\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0447\u043D\u043E\u0441\u0442 \u043D\u0430 \u043B\u0438\u0446\u0435\u0442\u043E, \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0438\u0441\u043A\u0430\u043D\u0435\u0442\u043E \u0438 \u043B\u0438\u0446\u0435\u0442\u043E, \u0437\u0430 \u043A\u043E\u0435\u0442\u043E \u0441\u0435 \u043E\u0442\u043D\u0430\u0441\u044F\u0442 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0432 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441 \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u043D\u0438\u0442\u0435 \u0412\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438, \u043D\u0438\u0435 \u0449\u0435 \u0438\u0437\u0442\u0440\u0438\u0435\u043C \u0432\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043C\u0435 \u0437\u0430 \u0412\u0430\u0441, \u0432 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441 \u0430\u043B. 3.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "(5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " \u0410\u043A\u043E \u0438\u043C\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0430 \u043E\u0442 \u0412\u0430\u0441 \u043F\u043E\u0440\u044A\u0447\u043A\u0430, \u043A\u043E\u044F\u0442\u043E \u0435 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435, \u043D\u0430\u0439-\u0440\u0430\u043D\u043D\u0438\u044F\u0442 \u043C\u043E\u043C\u0435\u043D\u0442, \u0432 \u043A\u043E\u0439\u0442\u043E \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435\u0442\u0435 \u201E\u0437\u0430\u0431\u0440\u0430\u0432\u0435\u043D\u201C, \u0435 \u043F\u0440\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0442\u043E \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0430\u0432\u0430\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "\u0427\u043B. 13.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, " \u0412\u0438\u0435 \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u0438\u0437\u0438\u0441\u043A\u0430\u0442\u0435 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438\u0442\u0435 \u0441 \u0412\u0430\u0441 \u0434\u0430\u043D\u043D\u0438, \u043A\u0430\u0442\u043E \u043D\u0438 \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u0442\u0435 \u0438\u0441\u043A\u0430\u043D\u0435 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D \u0442\u0435\u043A\u0441\u0442 \u043F\u043E \u0438\u043C\u0435\u0439\u043B, \u043A\u043E\u0433\u0430\u0442\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "\u043E\u0441\u043F\u043E\u0440\u0438\u0442\u0435 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0437\u0430 \u0441\u0440\u043E\u043A, \u043A\u043E\u0439\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430 \u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0434\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u0438 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E, \u043D\u043E \u0412\u0438\u0435 \u043D\u0435 \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438, \u0430 \u0441\u0430\u043C\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u0438\u043C \u0434\u0430 \u0431\u044A\u0434\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043E;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043D\u0435 \u0441\u0435 \u043D\u0443\u0436\u0434\u0430\u0435 \u043F\u043E\u0432\u0435\u0447\u0435 \u043E\u0442 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E, \u043D\u043E \u0412\u0438\u0435 \u0433\u0438 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u0442\u0435 \u0437\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E, \u0443\u043F\u0440\u0430\u0436\u043D\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u0438\u043B\u0438 \u0437\u0430\u0449\u0438\u0442\u0430\u0442\u0430 \u043D\u0430 \u0441\u0432\u043E\u0438 \u043F\u0440\u0430\u0432\u043D\u0438 \u043F\u0440\u0435\u0442\u0435\u043D\u0446\u0438\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "\u0412\u044A\u0437\u0440\u0430\u0437\u0438\u043B\u0438 \u0441\u0442\u0435 \u0441\u0440\u0435\u0449\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0432 \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0430\u043B\u0438 \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0438\u043C\u0430\u0442 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0435\u0434 \u0412\u0430\u0448\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " \u0421\u043B\u0435\u0434 \u043A\u0430\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0412\u0430\u0448\u0435\u0442\u043E \u0438\u0441\u043A\u0430\u043D\u0435, \u0449\u0435 \u0412\u0438 \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u043C \u043D\u0430 \u0438\u043C\u0435\u0439\u043B\u0430, \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438\u043B\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u043F\u0438\u0441\u043C\u043E \u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0437\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0412\u0438 \u043A\u0430\u0442\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u043D\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0438 \u0441\u0443\u0431\u0435\u043A\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0438\u0441\u043A\u0430\u043D\u0435 \u0437\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, " \u0421\u043B\u0435\u0434 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0430\u043B. 2, \u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u0449\u0435 \u043F\u0440\u0435\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u0442\u0430 \u043D\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043D\u043E \u043D\u044F\u043C\u0430 \u0434\u0430 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430, \u0430\u043A\u043E \u0438\u043C\u0430 \u0442\u0430\u043A\u0438\u0432\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u043F\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u043E\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "\u0427\u043B. 14. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, " \u0410\u043A\u043E \u0441\u0442\u0435 \u0434\u0430\u043B\u0438 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435 \u043D\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0438\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430, \u0438\u043B\u0438 \u0430\u043A\u043E \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u0412\u0438 \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u043F\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0430\u043D \u043D\u0430\u0447\u0438\u043D, \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "\u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430\u0442\u0435 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0434\u0430 \u0412\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0432 \u0447\u0435\u0442\u0438\u043C \u0444\u043E\u0440\u043C\u0430\u0442 \u0438 \u0434\u0430 \u0433\u0438 \u043F\u0440\u0435\u0445\u0432\u044A\u0440\u043B\u0438\u0442\u0435 \u043A\u044A\u043C \u0434\u0440\u0443\u0433 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "\u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430\u0442\u0435 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u0440\u044F\u043A\u043E \u0434\u0430 \u043F\u0440\u0435\u0445\u0432\u044A\u0440\u043B\u0438 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u043A\u044A\u043C \u043F\u043E\u0441\u043E\u0447\u0435\u043D \u043E\u0442 \u0412\u0430\u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440, \u043A\u043E\u0433\u0430\u0442\u043E \u0442\u043E\u0432\u0430 \u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0438\u043C\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, " \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0443\u043F\u0440\u0430\u0436\u043D\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u043D\u0430 \u043F\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u043E\u0441\u0442 \u043A\u0430\u0442\u043E \u043D\u0438 \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u0442\u0435 \u043F\u043E \u0438\u043C\u0435\u0439\u043B \u043F\u043E\u043F\u044A\u043B\u043D\u0435\u043D\u0430 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 3 \u0438\u043B\u0438 \u0438\u0441\u043A\u0430\u043D\u0435 \u0432 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D \u0442\u0435\u043A\u0441\u0442, \u0441\u043B\u0435\u0434 \u043A\u043E\u0435\u0442\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0449\u0435 \u0438\u0437\u043F\u0440\u0430\u0442\u0438 \u043D\u0430 \u0438\u043C\u0435\u0439\u043B\u0430, \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438\u043B\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u043F\u0438\u0441\u043C\u043E \u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0437\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0412\u0438 \u043A\u0430\u0442\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u043D\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0438 \u0441\u0443\u0431\u0435\u043A\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0438\u0441\u043A\u0430\u043D\u0435 \u0437\u0430 \u043F\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u043E\u0441\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "(3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, " \u0421\u043B\u0435\u0434 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0430\u043B. 2, \u0414\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E\u0442\u043E \u0438\u0437\u043F\u0440\u0430\u0442\u0438 \u043D\u0430 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438\u044F \u043E\u0442 \u0412\u0430\u0441 \u0438\u043C\u0435\u0439\u043B \u0434\u0430\u043D\u043D\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430 \u0437\u0430 \u0412\u0430\u0441, \u0432\u044A\u0432 \u0444\u043E\u0440\u043C\u0430\u0442 XML.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "\u0427\u043B. 15.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, " \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430\u0442\u0435 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0434\u0430 \u0412\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u0430 \u043E\u0442\u043D\u043E\u0441\u043D\u043E \u0432\u0441\u0438\u0447\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u0438, \u043D\u0430 \u043A\u043E\u0438\u0442\u043E \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0435 \u043F\u043E\u0438\u0441\u043A\u0430\u043D\u043E \u043A\u043E\u0440\u0438\u0433\u0438\u0440\u0430\u043D\u0435, \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u0438\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E, \u0441\u0430 \u0431\u0438\u043B\u0438 \u0440\u0430\u0437\u043A\u0440\u0438\u0442\u0438. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043C\u043E\u0436\u0435 \u0434\u0430 \u043E\u0442\u043A\u0430\u0436\u0435 \u0434\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u0442\u0430\u0437\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u0430\u043A\u043E \u0442\u043E\u0432\u0430 \u0431\u0438 \u0431\u0438\u043B\u043E \u043D\u0435\u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E \u0438\u043B\u0438 \u0438\u0437\u0438\u0441\u043A\u0432\u0430 \u043D\u0435\u0441\u044A\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u043E \u0433\u043E\u043B\u0435\u043C\u0438 \u0443\u0441\u0438\u043B\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0432\u044A\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "\u0427\u043B. 16.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, " \u0412\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0432\u044A\u0437\u0440\u0430\u0437\u0438\u0442\u0435 \u043F\u043E \u0432\u0441\u044F\u043A\u043E \u0432\u0440\u0435\u043C\u0435 \u0441\u0440\u0435\u0449\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u043E\u0442 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u043E\u0442\u043D\u0430\u0441\u044F\u0442 \u0434\u043E \u043D\u0435\u0433\u043E, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u043D\u043E \u0430\u043A\u043E \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u0438\u0440\u0430\u043D\u0435 \u0438\u043B\u0438 \u0434\u0438\u0440\u0435\u043A\u0442\u0435\u043D \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "\u0412\u0430\u0448\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0432\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "\u0427\u043B. 17. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, " \u0410\u043A\u043E \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0435\u0442\u043E \u043C\u043E\u0436\u0435 \u0434\u0430 \u043F\u043E\u0440\u043E\u0434\u0438 \u0432\u0438\u0441\u043E\u043A \u0440\u0438\u0441\u043A \u0437\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u0438, \u0442\u043E\u0439 \u0412\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430 \u0431\u0435\u0437 \u043D\u0435\u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0431\u0430\u0432\u044F\u043D\u0435 \u0437\u0430 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435\u0442\u043E, \u043A\u0430\u043A\u0442\u043E \u0438 \u0437\u0430 \u043C\u0435\u0440\u043A\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u0435\u0442\u0438 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u0435\u0442\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043D\u0435 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u0412\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430, \u0430\u043A\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u0435\u043B \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u0438 \u043C\u0435\u0440\u043A\u0438 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435, \u0437\u0430\u0441\u0435\u0433\u043D\u0430\u0442\u0438 \u043E\u0442 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442\u0442\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "\u0435 \u0432\u0437\u0435\u043B \u0432\u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u043C\u0435\u0440\u043A\u0438, \u043A\u043E\u0438\u0442\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0430\u0442, \u0447\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u044F\u043C\u0430 \u0434\u0430 \u0434\u043E\u0432\u0435\u0434\u0435 \u0434\u043E \u0432\u0438\u0441\u043E\u043A \u0440\u0438\u0441\u043A \u0437\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u0412\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "\u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u0431\u0438 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u043B\u043E \u043D\u0435\u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0438 \u0443\u0441\u0438\u043B\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "\u041B\u0438\u0446\u0430, \u043D\u0430 \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "\u0427\u043B. 18. (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, " \u0417\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0430\u0442\u0430 \u0432 \u043F\u044A\u043B\u043D\u0430\u0442\u0430 \u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u043E\u0441\u0442 \u0438 \u0441 \u043E\u0433\u043B\u0435\u0434 \u0412\u0430\u0448\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438, \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043C\u043E\u0436\u0435 \u0434\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u043D\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043B\u0438\u0446\u0430, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0449\u0438 \u0434\u0430\u043D\u043D\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0449 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "\u0426\u0435\u043B \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "\u0415\u043C\u0438\u043B\u0438\u044F \u0420\u043E\u0441\u0435\u043D\u043E\u0432\u0430\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430 \u0446\u0435\u043B, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0430 \u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438\u0442\u0435 \u043D\u0430 \u0445\u0440\u0430\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "............................................... \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 .....................................................................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "............................................... \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 .....................................................................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "(2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, " \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0449\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0441\u043F\u0430\u0437\u0432\u0430\u0442 \u0432\u0441\u0438\u0447\u043A\u0438 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u043D\u0438\u044F \u0437\u0430 \u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0441\u0442 \u0438 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435\u0442\u043E \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0412\u0438 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "\u0427\u043B. 19.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043D\u0435 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440 \u043D\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u043A\u044A\u043C \u0442\u0440\u0435\u0442\u0438 \u0434\u044A\u0440\u0436\u0430\u0432\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "\u0427\u043B. 20.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, " \u0412 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u0412\u0438 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0433\u043E\u0440\u0435\u043F\u043E\u0441\u043E\u0447\u0435\u043D\u043E\u0442\u043E \u0438\u043B\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u043F\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u0436\u0430\u043B\u0431\u0430 \u0434\u043E \u041A\u043E\u043C\u0438\u0441\u0438\u044F\u0442\u0430 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043A\u0430\u043A\u0442\u043E \u0441\u043B\u0435\u0434\u0432\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, " \u041A\u043E\u043C\u0438\u0441\u0438\u044F \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, " 02 915 3 518");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "www.cpdp.bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "\u0427\u043B. 21.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, " \u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0443\u043F\u0440\u0430\u0436\u043D\u0438\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438\u0442\u0435 \u0441\u0438 \u043F\u0440\u0430\u0432\u0430 \u043E\u0442\u043D\u043E\u0441\u043D\u043E \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u0412\u0430\u0448\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0447\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0438\u0442\u0435, \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438 \u043A\u044A\u043C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F. \u0420\u0430\u0437\u0431\u0438\u0440\u0430 \u0441\u0435, \u0442\u0435\u0437\u0438 \u0444\u043E\u0440\u043C\u0438 \u043D\u0435 \u0441\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0438 \u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435 \u0438\u0441\u043A\u0430\u043D\u0438\u044F\u0442\u0430 \u0441\u0438 \u0432\u044A\u0432 \u0432\u0441\u044F\u043A\u0430\u043A\u0432\u0430 \u0444\u043E\u0440\u043C\u0430, \u043A\u043E\u044F\u0442\u043E \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0438\u0437\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430 \u0442\u043E\u0432\u0430 \u0438 \u0432\u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0430 \u043A\u0430\u0442\u043E \u043F\u0440\u0438\u0442\u0435\u0436\u0430\u0442\u0435\u043B \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "\u0427\u043B. 22.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, " \u0410\u043A\u043E \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435\u0442\u043E \u0441\u0435 \u043E\u0442\u043D\u0430\u0441\u044F \u0437\u0430 \u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440, \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044A\u0442 \u043E\u043F\u0438\u0441\u0432\u0430 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u0438\u0442\u0435 \u0440\u0438\u0441\u043A\u043E\u0432\u0435 \u0437\u0430 \u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u043A\u044A\u043C \u0442\u0440\u0435\u0442\u0438 \u0434\u044A\u0440\u0436\u0430\u0432\u0438 \u043F\u0440\u0438 \u043B\u0438\u043F\u0441\u0430\u0442\u0430 \u043D\u0430 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0437\u0430 \u0430\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](602, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](603, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, "\u0424\u043E\u0440\u043C\u0430 \u0437\u0430 \u043E\u0442\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "\u0412\u0430\u0448\u0435\u0442\u043E \u0438\u043C\u0435*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "\u0412\u0430\u0448\u0438\u044F\u0442 \u0438\u043C\u0435\u0439\u043B, \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430 (e-mail)*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "\u0414\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "\u0415\u0418\u041A/\u0411\u0423\u041B\u0421\u0422\u0410\u0422:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "\u0423\u0435\u0431\u0441\u0430\u0439\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "\u0421 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u043E\u0442\u043E \u043E\u0442\u0442\u0435\u0433\u043B\u044F\u043C \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435\u0442\u043E \u0441\u0438 \u0437\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 \u043C\u0435\u043D \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0431\u044E\u043B\u0435\u0442\u0438\u043D, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438, \u043A\u0430\u0442\u043E \u0441\u044A\u043C \u0437\u0430\u043F\u043E\u0437\u043D\u0430\u0442/\u0430 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0442\u0430 \u0437\u0430 \u043E\u0442\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435\u0442\u043E \u0432 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u044A\u0441 \u0417\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0430\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u043D\u0430 \u043B\u0438\u0446\u0430\u0442\u0430 \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u0412\u0438 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0433\u043E\u0440\u0435\u043F\u043E\u0441\u043E\u0447\u0435\u043D\u043E\u0442\u043E \u0438\u043B\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u043F\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u0436\u0430\u043B\u0431\u0430 \u0434\u043E \u041A\u043E\u043C\u0438\u0441\u0438\u044F\u0442\u0430 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043A\u0430\u043A\u0442\u043E \u0441\u043B\u0435\u0434\u0432\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, " \u041A\u043E\u043C\u0438\u0441\u0438\u044F \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, " 02 915 3 518");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "www.cpdp.bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](689, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](690, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "\u0418\u0441\u043A\u0430\u043D\u0435 \u201E\u0434\u0430 \u0431\u044A\u0434\u0430 \u0437\u0430\u0431\u0440\u0430\u0432\u0435\u043D\u201C - \u0437\u0430 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u043C\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "\u0412\u0430\u0448\u0435\u0442\u043E \u0438\u043C\u0435*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "\u0412\u0430\u0448\u0438\u044F\u0442 \u0438\u043C\u0435\u0439\u043B, \u0441 \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0441\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043B\u0438 \u0438\u043B\u0438 \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0437\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430 (e-mail)*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "\u0414\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, "\u0415\u0418\u041A/\u0411\u0423\u041B\u0421\u0422\u0410\u0422:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](740, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "\u0423\u0435\u0431\u0441\u0430\u0439\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "\u041C\u043E\u043B\u044F \u0432\u0441\u0438\u0447\u043A\u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u044A\u0431\u0438\u0440\u0430\u0442\u0435, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442\u0435 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442\u0435, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438 \u043E\u0442 \u043C\u0435\u043D \u0438\u043B\u0438 \u043E\u0442 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u043C\u0435\u043D, \u0441\u044A\u043E\u0431\u0440\u0430\u0437\u043D\u043E \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0430\u0442\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F, \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u043E\u0442 \u0412\u0430\u0448\u0438\u0442\u0435 \u0431\u0430\u0437\u0438 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "\u0414\u0435\u043A\u043B\u0430\u0440\u0438\u0440\u0430\u043C, \u0447\u0435 \u043C\u0438 \u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E, \u0447\u0435 \u0447\u0430\u0441\u0442 \u0438\u043B\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u043E\u0442 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u043C\u0438 \u0434\u0430\u043D\u043D\u0438 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0442 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u043D\u0438 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u043D\u0438 \u043E\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u043E\u0432\u0438\u0442\u0435 \u043C\u0443 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u0412\u0438 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0433\u043E\u0440\u0435\u043F\u043E\u0441\u043E\u0447\u0435\u043D\u043E\u0442\u043E \u0438\u043B\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u043F\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u0436\u0430\u043B\u0431\u0430 \u0434\u043E \u041A\u043E\u043C\u0438\u0441\u0438\u044F\u0442\u0430 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043A\u0430\u043A\u0442\u043E \u0441\u043B\u0435\u0434\u0432\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, " \u041A\u043E\u043C\u0438\u0441\u0438\u044F \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, " 02 915 3 518");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "www.cpdp.bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](777, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](778, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](779, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "\u0418\u0441\u043A\u0430\u043D\u0435 \u0437\u0430 \u043F\u0440\u0435\u043D\u043E\u0441\u0438\u043C\u043E\u0441\u0442 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "\u0412\u0430\u0448\u0435\u0442\u043E \u0438\u043C\u0435*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "\u0412\u0430\u0448\u0438\u044F\u0442 \u0438\u043C\u0435\u0439\u043B, \u0441 \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0441\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043B\u0438 \u0438\u043B\u0438 \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0437\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430 (e-mail)*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "\u0414\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, "\u0415\u0418\u041A/\u0411\u0423\u041B\u0421\u0422\u0410\u0422:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, "\u0423\u0435\u0431\u0441\u0430\u0439\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "\u041C\u043E\u043B\u044F \u0432\u0441\u0438\u0447\u043A\u0438 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u043C\u0435\u043D \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0441\u044A\u0431\u0438\u0440\u0430\u0442, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 \u0432\u044A\u0432 \u0412\u0430\u0448\u0438\u0442\u0435 \u0431\u0430\u0437\u0438 \u0434\u0430\u043D\u043D\u0438, \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u043D\u0438 \u0432\u044A\u0432 \u0444\u043E\u0440\u043C\u0430\u0442 XML \u043D\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "e-mail: .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u2013 \u043F\u0440\u0438\u0435\u043C\u0430\u0449 \u0434\u0430\u043D\u043D\u0438\u0442\u0435: .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u043D\u043E\u043C\u0435\u0440 (\u0415\u0418\u041A, \u0411\u0423\u041B\u0421\u0422\u0410\u0422, \u0440\u0435\u0433. \u043D\u043E\u043C\u0435\u0440 \u0432 \u041A\u0417\u041B\u0414)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u0412\u0438 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0433\u043E\u0440\u0435\u043F\u043E\u0441\u043E\u0447\u0435\u043D\u043E\u0442\u043E \u0438\u043B\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u043F\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u0436\u0430\u043B\u0431\u0430 \u0434\u043E \u041A\u043E\u043C\u0438\u0441\u0438\u044F\u0442\u0430 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043A\u0430\u043A\u0442\u043E \u0441\u043B\u0435\u0434\u0432\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](866, " \u041A\u043E\u043C\u0438\u0441\u0438\u044F \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, " 02 915 3 518");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "www.cpdp.bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](885, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](886, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](887, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2116 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "\u0418\u0441\u043A\u0430\u043D\u0435 \u0437\u0430 \u043A\u043E\u0440\u0438\u0433\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "\u0412\u0430\u0448\u0435\u0442\u043E \u0438\u043C\u0435*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, "\u0412\u0430\u0448\u0438\u044F\u0442 \u0438\u043C\u0435\u0439\u043B, \u0441 \u043A\u043E\u0439\u0442\u043E \u0441\u0442\u0435 \u0441\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043B\u0438 \u0438\u043B\u0438 \u0441\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B\u0438 \u0437\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430 (e-mail)*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, ": .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, "\u0414\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, "\u0415\u0418\u041A/\u0411\u0423\u041B\u0421\u0422\u0410\u0422:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, "\u0423\u0435\u0431\u0441\u0430\u0439\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, " .........................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](943, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "\u041C\u043E\u043B\u044F \u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u044A\u0431\u0438\u0440\u0430\u0442\u0435, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442\u0435 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442\u0435, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0438 \u043E\u0442 \u043C\u0435\u043D \u0438\u043B\u0438 \u043E\u0442 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u043C\u0435\u043D, \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u043A\u043E\u0440\u0438\u0433\u0438\u0440\u0430\u043D\u0438 \u043A\u0430\u043A\u0442\u043E \u0441\u043B\u0435\u0434\u0432\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](947, "\u0414\u0430\u043D\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u043A\u043E\u0440\u0435\u043A\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "..................................................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](951, "\u041C\u043E\u043B\u044F \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u043A\u043E\u0440\u0438\u0433\u0438\u0440\u0430\u043D\u0438 \u043F\u043E \u0441\u043B\u0435\u0434\u043D\u0438\u044F \u043D\u0430\u0447\u0438\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](953, "..................................................");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u0412\u0438 \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u0433\u043E\u0440\u0435\u043F\u043E\u0441\u043E\u0447\u0435\u043D\u043E\u0442\u043E \u0438\u043B\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u043F\u043E\u0434\u0430\u0434\u0435\u0442\u0435 \u0436\u0430\u043B\u0431\u0430 \u0434\u043E \u041A\u043E\u043C\u0438\u0441\u0438\u044F\u0442\u0430 \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438, \u043A\u0430\u043A\u0442\u043E \u0441\u043B\u0435\u0434\u0432\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](961, " \u041A\u043E\u043C\u0438\u0441\u0438\u044F \u0437\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](965, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u043A\u043E\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, " \u0433\u0440. \u0421\u043E\u0444\u0438\u044F 1592, \u0431\u0443\u043B. \u201E\u041F\u0440\u043E\u0444. \u0426\u0432\u0435\u0442\u0430\u043D \u041B\u0430\u0437\u0430\u0440\u043E\u0432\u201D \u2116 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](973, " 02 915 3 518");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "www.cpdp.bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](980, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](981, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermsComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u0411\u0429\u0418 \u0423\u0421\u041B\u041E\u0412\u0418\u042F \u0417\u0410 \u041F\u041E\u041B\u0417\u0412\u0410\u041D\u0415 \u041D\u0410 \u0423\u0421\u041B\u0423\u0413\u0418\u0422\u0415, \u0414\u041E\u0421\u0422\u042A\u041F\u041D\u0418 \u041F\u0420\u0415\u0417 \u0423\u0415\u0411\u0421\u0410\u0419\u0422\u0410 SMOLYANOBYAD.COM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0443\u0440\u0435\u0436\u0434\u0430 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u0442\u0430 \u043C\u0435\u0436\u0434\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\"\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0421\u0442\u0430\u043D\u0447\u0435\u0432\" \u0415\u041E\u041E\u0414");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", \u0441\u044A\u0441 \u0441\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0433\u0440. \u0421\u043C\u043E\u043B\u044F\u043D, \u0431\u0443\u043B. \"\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u2116");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 29, \u0435\u0442. 1,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0430\u043F.3 \u0438 \u0432\u0441\u0435\u043A\u0438 \u0435\u0434\u0438\u043D \u043E\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438 \u043D\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u0438\u0442\u0435 \u0447\u0440\u0435\u0437 \u0443\u0435\u0431 \u0431\u0430\u0437\u0438\u0440\u0430\u043D\u0430\u0442\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SMOLYANOBYAD.COM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 (\u043D\u0430\u0440\u0438\u0447\u0430\u043D \u043F\u043E-\u0434\u043E\u043B\u0443 \u0437\u0430 \u043A\u0440\u0430\u0442\u043A\u043E\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041A\u043B\u0438\u0435\u043D\u0442\").");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0422\u0415\u0420\u041C\u0418\u041D\u041E\u041B\u041E\u0413\u0418\u042F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u041F\u0440\u0438 \u043F\u0440\u0438\u043B\u0430\u0433\u0430\u043D\u0435 \u0438 \u0442\u044A\u043B\u043A\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0438\u0442\u0435 \u0442\u0435\u0440\u043C\u0438\u043D\u0438 \u0438 \u0438\u0437\u0440\u0430\u0437\u0438 \u0449\u0435 \u0438\u043C\u0430\u0442 \u0441\u043B\u0435\u0434\u043D\u043E\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SMOLYANOBYAD.COM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "https://www.smolyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "obyad.com) \u0435 \u0443\u0435\u0431 \u0431\u0430\u0437\u0438\u0440\u0430\u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u2013 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u0435\u043D \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0440\u0435\u0441\u0443\u0440\u0441 \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442, \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043E\u0441\u0442 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\"\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0421\u0442\u0430\u043D\u0447\u0435\u0432\" \u0415\u041E\u041E\u0414");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u043A\u043E\u0439\u0442\u043E \u0434\u0430\u0432\u0430 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0437\u0430 \u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0443\u0441\u043B\u0443\u0433\u0438, \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0423\u0441\u043B\u043E\u0432\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "1. \u201E\u0423\u0435\u0431\u0441\u0430\u0439\u0442/\u0441\u0430\u0439\u0442\u201D (\"website\") \u0435 \u043E\u0431\u043E\u0441\u043E\u0431\u0435\u043D\u043E \u043C\u044F\u0441\u0442\u043E \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u043D\u0430\u0442\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0440\u0435\u0436\u0430, \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E \u0447\u0440\u0435\u0437 \u0441\u0432\u043E\u044F \u0443\u043D\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u043D \u0430\u0434\u0440\u0435\u0441 (URL) \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B HTTP, HTTPS \u0438\u043B\u0438 \u0434\u0440\u0443\u0433 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u0430\u043D \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0438 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0449\u043E \u0444\u0430\u0439\u043B\u043E\u0432\u0435, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438, \u0442\u0435\u043A\u0441\u0442, \u0437\u0432\u0443\u043A, \u043A\u0430\u0440\u0442\u0438\u043D\u0430, \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2. \u201E\u041D\u0438\u043A\u043B\u0430\u0439 \u0421\u0442\u0430\u043D\u0447\u0435\u0432\u201D \u0415\u041E\u041E\u0414 \u0435 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u043E\u0442\u043E \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u0441 \u0415\u0418\u041A 120545289, \u0441\u044A\u0441 \u0441\u0435\u0434\u0430\u043B\u0438\u0449\u0435 \u0438 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0433\u0440. \u0421\u043C\u043E\u043B\u044F\u043D, \u0431\u0443\u043B. \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F 29, e-mail: nikseood@yahoo.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "3. \u201Ewww.smolyanobyad.com\u201D \u0435 \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u0437\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0438\u044F, \u043A\u043E\u0439\u0442\u043E \u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u0435\u043D \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0440\u0435\u0441\u0443\u0440\u0441 \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0437\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0431\u0430 \u043D\u0430 \u0441\u0442\u043E\u043A\u0438 \u043E\u0442 \u0440\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0441\u043B\u0435\u0434 \u0438\u0437\u0440\u0438\u0447\u043D\u043E\u0442\u043E \u0438\u043C \u0437\u0430\u044F\u0432\u044F\u0432\u0430\u043D\u0435 \u043E\u0442 \u0441\u0442\u0440\u0430\u043D\u0430 \u043D\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " 4. \u201E\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B/\u041A\u043B\u0438\u0435\u043D\u0442\u201D \u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E \u043B\u0438\u0446\u0435, \u043D\u0430\u0432\u044A\u0440\u0448\u0438\u043B\u043E 18 \u0433\u043E\u0434\u0438\u043D\u0438 \u0438\u043B\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E \u043B\u0438\u0446\u0435, \u043A\u043E\u0435\u0442\u043E \u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E \u043F\u043E \u0422\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438\u044F\u0442 \u0437\u0430\u043A\u043E\u043D \u0438 \u0441\u0435 \u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u043B\u043E \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0439\u043A\u0438 \u0441\u0435 \u0438 \u043F\u0430\u0437\u0430\u0440\u0443\u0432\u0430\u0439\u043A\u0438 \u043E\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, ", \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u043D\u043E \u0438 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u0439\u043A\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 5. \u201E\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u0438/\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u201D \u0435 \u043E\u0431\u043E\u0441\u043E\u0431\u0435\u043D\u0430 \u0447\u0430\u0441\u0442 www.smolyanobyad.com, \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0449\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/\u041A\u043B\u0438\u0435\u043D\u0442a, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0430 \u043E\u0442 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/\u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0442\u0430 \u043C\u0443 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u043D\u0430 \u043E\u0442 www.smolyanobyad.com, \u043A\u0430\u0442\u043E \u0434\u043E\u0441\u0442\u044A\u043F\u044A\u0442 \u0434\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B \u0441\u0435 \u043E\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u044F\u0432\u0430 \u0447\u0440\u0435\u0437 \u0432\u044A\u0432\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E \u0438\u043C\u0435 \u0438 \u043F\u0430\u0440\u043E\u043B\u0430. \u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u044F\u0442 \u043F\u0440\u043E\u0444\u0438\u043B \u0434\u0430\u0432\u0430 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442 \u043D\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0434\u0430 \u0440\u0430\u0437\u0433\u043B\u0435\u0436\u0434\u0430 \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435, \u0432\u044A\u0432\u0435\u0434\u0435\u043D\u0438 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0442\u0430, \u0437\u0430\u043F\u0438\u0441\u0438\u0442\u0435 \u0432 \u0430\u0434\u0440\u0435\u0441\u043D\u0430\u0442\u0430 \u043A\u043D\u0438\u0433\u0430, \u0434\u0430 \u0438\u043C\u0430 \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0441\u0432\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u0437\u0430 \u0437\u0430\u043A\u0443\u043F\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0442\u043E\u043A\u0438 \u043E\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0437\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0438\u044F www.smolyanobyad.com, \u0434\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430 \u0441\u0438 \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F, \u0434\u0430 \u0441\u0435 \u0430\u0431\u043E\u043D\u0438\u0440\u0430, \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u043D\u043E \u0434\u0430 \u0441\u0435 \u043E\u0442\u043A\u0430\u0436\u0435 \u043E\u0442 \u0430\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442\u0430, \u0437\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0431\u044E\u043B\u0435\u0442\u0438\u043D \u0438 \u0434\u0440.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "6. \u201E\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E \u0438\u043C\u0435\u201D \u0435 \u0438\u0437\u0431\u0440\u0430\u043D \u043E\u0442 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0443\u043D\u0438\u043A\u0430\u043B\u0435\u043D \u043A\u043E\u0434 \u043E\u0442 \u0431\u0443\u043A\u0432\u0438 \u0438/\u0438\u043B\u0438 \u0446\u0438\u0444\u0440\u0438, \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u043A\u043E\u0438\u0442\u043E \u0442\u043E\u0439 \u0441\u0435 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430 \u0432 www.smolyanobyad.com.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "7. \u201E\u041F\u0430\u0440\u043E\u043B\u0430\u201D \u0435 \u0438\u0437\u0431\u0440\u0430\u043D \u043E\u0442 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u043A\u043E\u0434 \u043E\u0442 \u0431\u0443\u043A\u0432\u0438 \u0438/\u0438\u043B\u0438 \u0446\u0438\u0444\u0440\u0438, \u043A\u043E\u0439\u0442\u043E \u0437\u0430\u0435\u0434\u043D\u043E \u0441 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E\u0442\u043E \u0438\u043C\u0435 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430 \u0441\u044A\u0449\u0438\u044F \u0438 \u043C\u0443 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0442\u0430 \u0434\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0432\u0430\u043B\u0438\u0434\u043D\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u0437\u0430 \u0437\u0430\u043A\u0443\u043F\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043D\u0438\u0442\u0435 \u0432 www.smolyanobyad.com \u0441\u0442\u043E\u043A\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "8. \u201E\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u201D \u0435 \u0432\u0441\u044F\u043A\u043E \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E \u0438\u043B\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E \u043B\u0438\u0446\u0435, \u043A\u043E\u0435\u0442\u043E \u043F\u043E \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0436\u0434\u0430 \u0441\u0442\u043E\u043A\u0438 \u0432 \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u043D \u0432\u0438\u0434 \u0438\u043B\u0438 \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043E \u043F\u0440\u043E\u043C\u0435\u043D\u044F \u0438\u043B\u0438 \u043F\u0440\u0435\u043F\u0440\u0430\u0432\u044F \u0441\u0442\u043E\u043A\u0430 \u0441 \u043E\u0433\u043B\u0435\u0434 \u043F\u0443\u0441\u043A\u0430\u043D\u0435\u0442\u043E \u0439 \u043D\u0430 \u043F\u0430\u0437\u0430\u0440\u0430 \u0438\u043B\u0438 \u0441\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044F \u0437\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B, \u043A\u0430\u0442\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u044F \u0432\u044A\u0440\u0445\u0443 \u0441\u0442\u043E\u043A\u0430\u0442\u0430, \u043E\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u0442\u0430 \u0439 \u0438\u043B\u0438 \u0432\u044A\u0440\u0445\u0443 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u0442\u0430 \u0438\u043B\u0438 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0430\u0442\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0437\u0430 \u043D\u0435\u044F \u0441\u0432\u043E\u0435\u0442\u043E \u0438\u043C\u0435 \u0438\u043B\u0438 \u0444\u0438\u0440\u043C\u0430, \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D \u0438\u043B\u0438 \u0434\u0440\u0443\u0433 \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u0435\u043B\u0435\u043D \u0437\u043D\u0430\u043A.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "9. \u201E\u041E\u043F\u0430\u043A\u043E\u0432\u043A\u0430\u201D \u0441\u0430 \u0441\u044A\u0434\u043E\u0432\u0435 \u0438 \u0432\u0441\u044F\u043A\u0430\u043A\u0432\u0438 \u0434\u0440\u0443\u0433\u0438 \u043F\u0440\u0438\u0441\u043F\u043E\u0441\u043E\u0431\u043B\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u0433\u043E\u0434\u043D\u0438 \u0434\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u044F\u0432\u0430\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u0442\u0430 \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0442 \u0438 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0441\u0442\u043E\u043A\u0438, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043D\u0438 \u043F\u0440\u044F\u043A\u043E \u043D\u0430 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/\u041A\u043B\u0438\u0435\u043D\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "10.\"\u0413\u0440\u0430\u043C\u0430\u0436\"\u0435 \u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0442\u0435 \u0432\u043B\u043E\u0436\u0435\u043D\u0438 \u0432 \u044F\u0441\u0442\u0438\u0435\u0442\u043E \u0432 \u0441\u0443\u0440\u043E\u0432 \u0432\u0438\u0434.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "11. \u201E\u041F\u0440\u043E\u0434\u0430\u0436\u043D\u0430 \u0446\u0435\u043D\u0430\u201D \u0435 \u043A\u0440\u0430\u0439\u043D\u0430\u0442\u0430 \u0446\u0435\u043D\u0430 \u0437\u0430 \u0431\u0440\u043E\u0439\u043A\u0430 \u0438\u043B\u0438 \u0437\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u043E\u043A\u0430 \u0438\u043B\u0438 \u0437\u0430 \u0443\u0441\u043B\u0443\u0433\u0430, \u0432\u043A\u043B\u044E\u0447\u0432\u0430\u0449\u0430 \u0434\u0430\u043D\u044A\u043A\u0430 \u0432\u044A\u0440\u0445\u0443 \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u0430\u0442\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0434\u0430\u043D\u044A\u0446\u0438 \u0438 \u0442\u0430\u043A\u0441\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "12. \u201E\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E \u0441\u044A\u0431\u0438\u0442\u0438\u0435\u201D \u0435 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043E \u043A\u044A\u043C \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043D\u0430 \u0441\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u043E\u0442 \u0438\u0437\u0432\u044A\u043D\u0440\u0435\u0434\u0435\u043D \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440, \u043A\u043E\u0435\u0442\u043E \u043F\u0440\u0430\u0432\u0438 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u043C\u0443 \u043E\u0431\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u043D\u0435\u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "13. \u201E\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u0440\u0435\u043F\u0440\u0430\u0442\u043A\u0430\u201D\u0435 \u0432\u0440\u044A\u0437\u043A\u0430, \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043A\u043E\u044F\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0430\u043D\u043E \u043F\u0440\u0435\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043A\u044A\u043C \u0434\u0440\u0443\u0433\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u0440\u0435\u0441\u0443\u0440\u0441 \u0438\u043B\u0438 \u043E\u0431\u0435\u043A\u0442 \u0447\u0440\u0435\u0437 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u0430\u043D\u0438 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "14. \u201E\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 /\u0421\u0438\u0441\u0442\u0435\u043C\u0430\u201D \u0435 \u0432\u0441\u044F\u043A\u043E \u043E\u0442\u0434\u0435\u043B\u043D\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0438\u043B\u0438 \u0441\u044A\u0432\u043A\u0443\u043F\u043D\u043E\u0441\u0442 \u043E\u0442 \u0432\u0437\u0430\u0438\u043C\u043E\u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0438\u043B\u0438 \u0441\u0445\u043E\u0434\u043D\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430, \u043A\u043E\u0435\u0442\u043E \u0432 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \u043E\u0441\u0438\u0433\u0443\u0440\u044F\u0432\u0430 \u0438\u043B\u0438 \u0435\u0434\u0438\u043D \u043E\u0442 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438\u0442\u0435 \u043D\u0430 \u043A\u043E\u0435\u0442\u043E \u043E\u0441\u0438\u0433\u0443\u0440\u044F\u0432\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "15. \u201EIP \u0410\u0434\u0440\u0435\u0441\u201E (\"IP address\") \u0435 \u0443\u043D\u0438\u043A\u0430\u043B\u0435\u043D \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u043D\u043E\u043C\u0435\u0440, \u0430\u0441\u043E\u0446\u0438\u0438\u0440\u0430\u0449 \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440, \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u043B\u0438 \u0440\u0435\u0441\u0443\u0440\u0441 \u043D\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430, \u043F\u043E \u043D\u0430\u0447\u0438\u043D, \u043A\u043E\u0439\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430 \u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u0438\u043C \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u043D\u0430\u0442\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0440\u0435\u0436\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "16. \u201E\u0422\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u201D \u043F\u043E \u0441\u043C\u0438\u0441\u044A\u043B\u0430 \u043D\u0430 \u0417\u0430\u043A\u043E\u043D\u0430 \u0437\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u0442\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0438\u044F \u0441\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044F\u0449\u0438 \u043F\u0440\u044F\u043A\u043E \u0438\u043B\u0438 \u043A\u043E\u0441\u0432\u0435\u043D\u043E \u0441\u0442\u043E\u043A\u0438\u0442\u0435, \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435 \u0438\u043B\u0438 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F\u0442\u0430 \u043D\u0430 \u043B\u0438\u0446\u0435, \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u0449\u043E \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0430 \u0438\u043B\u0438 \u0437\u0430\u043D\u0430\u044F\u0442\u0447\u0438\u0439\u0441\u043A\u0430 \u0434\u0435\u0439\u043D\u043E\u0441\u0442 \u0438\u043B\u0438 \u0443\u043F\u0440\u0430\u0436\u043D\u044F\u0432\u0430\u0449\u043E \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "17. \u201E\u0417\u043B\u043E\u0443\u043C\u0438\u0448\u043B\u0435\u043D\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u201D \u0441\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438\u043B\u0438 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430\u0449\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0435\u0442\u0438\u043A\u0430\u0442\u0430 \u0438\u043B\u0438 \u043D\u0430\u043D\u0430\u0441\u044F\u0449\u0438 \u0432\u0440\u0435\u0434\u0438 \u043D\u0430 \u043B\u0438\u0446\u0430, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u043A\u044A\u043C \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438\u043B\u0438 \u0430\u0441\u043E\u0446\u0438\u0438\u0440\u0430\u043D\u0438 \u043C\u0440\u0435\u0436\u0438, \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u043D\u0435\u0436\u0435\u043B\u0430\u043D\u0430 \u043F\u043E\u0449\u0430 (\u043D\u0435\u043F\u043E\u0438\u0441\u043A\u0430\u043D\u0438 \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u044F, SPAM, JUNK MAIL), \u043F\u0440\u0435\u043F\u044A\u043B\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0438\u0442\u0435 (FLOOD), \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0441 \u0447\u0443\u0436\u0434\u0438 \u043F\u0440\u0430\u0432\u0430 \u0438 \u043F\u0430\u0440\u043E\u043B\u0438, \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u044A\u0446\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0442\u0435 \u0441 \u0446\u0435\u043B \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 \u043E\u0431\u043B\u0430\u0433\u0430 \u0438\u043B\u0438 \u0434\u043E\u0431\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F (HACK), \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043A\u043E\u0438\u0442\u043E \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u043D\u0438 \u043A\u0430\u0442\u043E \u043F\u0440\u043E\u043C\u0438\u0448\u043B\u0435\u043D \u0448\u043F\u0438\u043E\u043D\u0430\u0436 \u0438\u043B\u0438 \u0441\u0430\u0431\u043E\u0442\u0430\u0436, \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0430\u043D\u0435 \u0438\u043B\u0438 \u0440\u0430\u0437\u0440\u0443\u0448\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u0438\u043B\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0438 \u043C\u0430\u0441\u0438\u0432\u0438 (CRACK), \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u201E\u0442\u0440\u043E\u044F\u043D\u0441\u043A\u0438 \u043A\u043E\u043D\u0435\u201D \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u0438\u0437\u0432\u0438\u043A\u0432\u0430\u043D\u0435 \u0438\u043D\u0441\u0442\u0430\u043B\u0430\u0446\u0438\u044F \u043D\u0430 \u0432\u0438\u0440\u0443\u0441\u0438 \u0438\u043B\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u0437\u0430 \u043E\u0442\u0434\u0430\u043B\u0435\u0447\u0435\u043D \u043A\u043E\u043D\u0442\u0440\u043E\u043B, \u0441\u043C\u0443\u0449\u0430\u0432\u0430\u043D\u0435 \u043D\u043E\u0440\u043C\u0430\u043B\u043D\u0430\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 \u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u0430\u043B\u0438\u0442\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438 \u043D\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u0430\u0441\u043E\u0446\u0438\u0438\u0440\u0430\u043D\u0438\u0442\u0435 \u043C\u0440\u0435\u0436\u0438, \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u0430\u043A\u0432\u0438\u0442\u043E \u0438 \u0434\u0430 \u0435 \u0431\u0438\u043B\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043A\u043E\u0438\u0442\u043E \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u0442 \u043A\u0430\u0442\u043E \u043F\u0440\u0435\u0441\u0442\u044A\u043F\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043F\u043E \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0438\u043B\u0438 \u043F\u043E \u0434\u0440\u0443\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E \u043F\u0440\u0430\u0432\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "18. \u201E\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u201D \u0435 \u0441\u044A\u0441\u0442\u0430\u0432\u043D\u0430 \u0438 \u043E\u0431\u043E\u0441\u043E\u0431\u0435\u043D\u0430 \u0447\u0430\u0441\u0442 \u043E\u0442 \u0443\u0435\u0431\u0441\u0430\u0439\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/ \u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u043F\u043E\u043F\u044A\u043B\u043D\u0438 \u0432\u044F\u0440\u043D\u043E online \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430 \u0444\u043E\u0440\u043C\u0430, \u043D\u0430\u043C\u0438\u0440\u0430\u0449\u0430 \u0441\u0435 \u043D\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0430\u0434\u0440\u0435\u0441 - http://www.smolyanobyad.com/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u041F\u0440\u0438 \u043F\u043E\u043F\u044A\u043B\u0432\u0430\u043D\u0435 \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u0442\u0430 \u0444\u043E\u0440\u043C\u0430 \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F, \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u043F\u044A\u043B\u043D\u0438 \u0438 \u0432\u0435\u0440\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u043E\u0442\u043D\u043E\u0441\u043D\u043E \u0441\u0430\u043C\u043E\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0442\u0430 \u0441\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0442\u0435 \u0438\u0437\u0438\u0441\u043A\u0443\u0435\u043C\u0438 \u043E\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u0442\u0430 \u0444\u043E\u0440\u043C\u0430 \u043D\u0430 http:// www.smolyanobyad.com/ \u0434\u0430\u043D\u043D\u0438, \u043A\u0430\u043A\u0442\u043E \u0438 \u0434\u0430 \u0433\u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430 \u043F\u0440\u0438 \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E \u0432\u043B\u0438\u0437\u0430\u043D\u0435 \u0432 \u0441\u0430\u0439\u0442\u0430. \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0430, \u0447\u0435 \u0434\u0430\u043D\u043D\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0430 \u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F, \u0441\u0430 \u0432\u0435\u0440\u043D\u0438, \u043F\u044A\u043B\u043D\u0438 \u0438 \u0442\u043E\u0447\u043D\u0438 \u0438 \u043F\u0440\u0438 \u043F\u0440\u043E\u043C\u044F\u043D\u0430 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435, \u0449\u0435 \u0433\u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430 \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0441\u0430 \u043E\u0442\u0440\u0430\u0437\u0435\u043D\u0438 \u043D\u0430\u0441\u0442\u044A\u043F\u0438\u043B\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u0438, www.smolyanobyad.com \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u0441\u043F\u0440\u0435 \u043D\u0435\u0437\u0430\u0431\u0430\u0432\u043D\u043E \u0438 \u0431\u0435\u0437 \u043F\u0440\u0435\u0434\u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435 \u043F\u043E\u0434\u0434\u044A\u0440\u0436\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0442\u0430 \u043D\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u044A\u043F\u0430 \u0434\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u044F \u043C\u0443 \u043F\u0440\u043E\u0444\u0438\u043B.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u041F\u0440\u0435\u0434\u0438 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u0437\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u0442\u043E, \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u043C\u043E\u0436\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E \u0434\u0430 \u043F\u043E\u043F\u0440\u0430\u0432\u044F \u0432\u044A\u0432\u0435\u0434\u0435\u043D\u0430\u0442\u0430 \u043E\u0442 \u043D\u0435\u0433\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u0442\u0430 \u0444\u043E\u0440\u043C\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u041F\u0440\u0438 \u0432\u044A\u0437\u043D\u0438\u043A\u043D\u0430\u043B \u0441\u043F\u043E\u0440 \u043A\u043E\u0435 \u043B\u0438\u0446\u0435 \u0435 \u0438\u0437\u044F\u0432\u0438\u043B\u043E \u0432\u043E\u043B\u044F \u0437\u0430 \u043E\u0431\u0432\u044A\u0440\u0437\u0432\u0430\u043D\u0435 \u0441 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u0437\u0430 \u0441\u0442\u0440\u0430\u043D\u0430 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441\u0435 \u0441\u0447\u0438\u0442\u0430 \u043B\u0438\u0446\u0435\u0442\u043E, \u043A\u043E\u0435\u0442\u043E \u0435 \u0437\u0430\u043F\u043B\u0430\u0442\u0438\u043B\u043E \u0446\u0435\u043D\u0430\u0442\u0430 \u043D\u0430 \u0437\u0430\u044F\u0432\u0435\u043D\u0430\u0442\u0430 \u0437\u0430 \u0437\u0430\u043A\u0443\u043F\u0443\u0432\u0430\u043D\u0435 \u0441\u0442\u043E\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\u041F\u0420\u0410\u0412\u0410 \u0418 \u0417\u0410\u0414\u042A\u041B\u0416\u0415\u041D\u0418\u042F \u041D\u0410 \u041F\u041E\u0422\u0420\u0415\u0411\u0418\u0422\u0415\u041B\u042F/\u041A\u041B\u0418\u0415\u041D\u0422\u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442/\u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0438\u043C\u0430 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442 \u0434\u0430 \u0440\u0430\u0437\u0433\u043B\u0435\u0436\u0434\u0430 \u0438 /\u0441\u043B\u0435\u0434 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F/ \u0434\u0430 \u043F\u043E\u0440\u044A\u0447\u0432\u0430 \u043E\u0431\u044F\u0432\u0435\u043D\u0438\u0442\u0435 \u0441\u0442\u043E\u043A\u0438 \u043D\u0430 http://www.smolyanobyad.com/.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442/\u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u0441\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u0430 \u0437\u0430 \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0441\u0432\u043E\u044F\u0442\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442/\u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u043D\u043E\u0441\u0438 \u043F\u044A\u043B\u043D\u0430 \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0441\u0442 \u0437\u0430 \u043E\u043F\u0430\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0441\u0432\u043E\u0435\u0442\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E \u0438\u043C\u0435 \u0438 \u043F\u0430\u0440\u043E\u043B\u0430, \u043A\u0430\u043A\u0442\u043E \u0438 \u0437\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u0442 \u043E\u0442 \u043D\u0435\u0433\u043E \u0438\u043B\u0438 \u043E\u0442 \u0442\u0440\u0435\u0442\u043E \u043B\u0438\u0446\u0435 \u0447\u0440\u0435\u0437 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E\u0442\u043E \u0438\u043C\u0435 \u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430. \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u043D\u0435\u0437\u0430\u0431\u0430\u0432\u043D\u043E \u0434\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0437\u0430 \u0432\u0441\u0435\u043A\u0438 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u0435\u043D \u0434\u043E\u0441\u0442\u044A\u043F \u0447\u0440\u0435\u0437 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043D\u0435\u0433\u043E\u0432\u043E\u0442\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E \u0438\u043C\u0435 \u0438 \u043F\u0430\u0440\u043E\u043B\u0430, \u043A\u0430\u043A\u0442\u043E \u0438 \u0432\u0438\u043D\u0430\u0433\u0438, \u043A\u043E\u0433\u0430\u0442\u043E \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430 \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442 \u043E\u0442 \u0442\u0430\u043A\u043E\u0432\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u0437\u0430\u043F\u043B\u0430\u0442\u0438 \u0446\u0435\u043D\u0430\u0442\u0430 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u0441\u0438 \u0441\u043F\u043E\u0440\u0435\u0434 \u043E\u0431\u044F\u0432\u0435\u043D\u0438\u044F\u0442 \u043D\u0430\u0447\u0438\u043D \u043D\u0430 http://www.smolyanobyad.com/.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u0412\u0441\u0435\u043A\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u0434\u0430\u043B\u0438 \u0435 \u043A\u043B\u0438\u0435\u043D\u0442 \u043D\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0441\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0430\u0432\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\u2022 \u0434\u0430 \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430 \u0438 \u0434\u0430 \u0437\u0430\u0447\u0438\u0442\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u0438 \u043D\u0430 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0438\u0442\u0435 \u0438 \u043F\u0440\u0430\u0432\u0430\u0442\u0430 \u043D\u0430 \u0447\u043E\u0432\u0435\u043A\u0430, \u0441\u044A\u0433\u043B\u0430\u0441\u043D\u043E \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F\u0442\u0430 \u0438 \u0437\u0430\u043A\u043E\u043D\u0438\u0442\u0435 \u043D\u0430 \u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F \u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u0442\u0438\u0442\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0438 \u0430\u043A\u0442\u043E\u0432\u0435;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\u2022 \u0434\u0430 \u043D\u0435 \u043D\u0430\u043A\u044A\u0440\u043D\u044F\u0432\u0430 \u0434\u043E\u0431\u0440\u043E\u0442\u043E \u0438\u043C\u0435 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0433\u043E \u0438 \u0434\u0430 \u043D\u0435 \u043F\u0440\u0438\u0437\u043E\u0432\u0430\u0432\u0430 \u043A\u044A\u043C \u043D\u0430\u0441\u0438\u043B\u0441\u0442\u0432\u0435\u043D\u0430 \u043F\u0440\u043E\u043C\u044F\u043D\u0430 \u043D\u0430 \u043A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043E\u043D\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0440\u0435\u0434, \u043A\u044A\u043C \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0435\u0441\u0442\u044A\u043F\u043B\u0435\u043D\u0438\u0435, \u043A\u044A\u043C \u043D\u0430\u0441\u0438\u043B\u0438\u0435 \u043D\u0430\u0434 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0442\u0430 \u0438\u043B\u0438 \u043A\u044A\u043C \u0440\u0430\u0437\u043F\u0430\u043B\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0430\u0441\u043E\u0432\u0430, \u043D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u0430, \u0435\u0442\u043D\u0438\u0447\u0435\u0441\u043A\u0430 \u0438\u043B\u0438 \u0440\u0435\u043B\u0438\u0433\u0438\u043E\u0437\u043D\u0430 \u0432\u0440\u0430\u0436\u0434\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\u2022 \u0434\u0430 \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430 \u0447\u0443\u0436\u0434\u0438 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u0438 \u0438\u043B\u0438 \u043D\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u0438, \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0438 \u0438\u043B\u0438 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u043D\u0438 \u043F\u0440\u0430\u0432\u0430 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438, \u043A\u0430\u0442\u043E \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043E\u0441\u0442, \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0438\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043E\u0441\u0442 \u0438 \u0434\u0440.;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\u2022 \u0434\u0430 \u0441\u043F\u0430\u0437\u0432\u0430 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E, \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u0438\u0442\u0435 \u0447\u0443\u0436\u0434\u0438 \u0437\u0430\u043A\u043E\u043D\u0438, \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0442\u0430 \u043D\u0430 \u043C\u043E\u0440\u0430\u043B\u0430 \u0438 \u0434\u043E\u0431\u0440\u0438\u0442\u0435 \u043D\u0440\u0430\u0432\u0438 \u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0435\u0442\u0438\u043A\u0430\u0442\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438\u0442\u0435 \u043E\u0442 http://www.smolyanobyad.com/ \u0443\u0441\u043B\u0443\u0433\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\u2022 \u0434\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430 \u043D\u0435\u0437\u0430\u0431\u0430\u0432\u043D\u043E \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0437\u0430 \u0432\u0441\u0435\u043A\u0438 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0435\u043D\u043E \u0438\u043B\u0438 \u043E\u0442\u043A\u0440\u0438\u0442\u043E \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\u2022 \u0434\u0430 \u043D\u0435 \u0437\u0430\u0440\u0435\u0436\u0434\u0430, \u0438\u0437\u043F\u0440\u0430\u0449\u0430, \u043F\u0440\u0435\u0434\u0430\u0432\u0430, \u0440\u0430\u0437\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0432\u0430 \u0438\u043B\u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u043F\u043E \u043A\u0430\u043A\u044A\u0432\u0442\u043E \u0438 \u0434\u0430 \u0431\u0438\u043B\u043E \u043D\u0430\u0447\u0438\u043D \u0438 \u0434\u0430 \u043D\u0435 \u043F\u0440\u0430\u0432\u0438 \u0434\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430 \u0441\u043E\u0444\u0442\u0443\u0435\u0440, \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440\u043D\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438, \u0444\u0430\u0439\u043B\u043E\u0432\u0435, \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438, \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0449\u0438 \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440\u043D\u0438 \u0432\u0438\u0440\u0443\u0441\u0438, \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u0437\u0430 \u043D\u0435\u043E\u0442\u043E\u0440\u0438\u0437\u0438\u0440\u0430\u043D \u043E\u0442\u0434\u0430\u043B\u0435\u0447\u0435\u043D \u043A\u043E\u043D\u0442\u0440\u043E\u043B (\"\u0442\u0440\u043E\u044F\u043D\u0441\u043A\u0438 \u043A\u043E\u043D\u0435\"), \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440\u043D\u0438 \u043A\u043E\u0434\u043E\u0432\u0435, \u0438\u043B\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438 \u0434\u0430 \u043F\u0440\u0435\u043A\u044A\u0441\u0432\u0430\u0442, \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u044F\u0432\u0430\u0442, \u043D\u0430\u0440\u0443\u0448\u0430\u0432\u0430\u0442 \u0438\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0430\u0432\u0430\u0442 \u043D\u043E\u0440\u043C\u0430\u043B\u043D\u043E\u0442\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440\u0435\u043D \u0445\u0430\u0440\u0434\u0443\u0435\u0440 \u0438\u043B\u0438 \u0441\u043E\u0444\u0442\u0443\u0435\u0440 \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0438\u0442\u0435 \u0441\u044A\u043E\u0440\u044A\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0438\u043C\u0430\u0449\u0438 \u0437\u0430 \u0446\u0435\u043B \u043D\u0435\u043E\u0442\u043E\u0440\u0438\u0437\u0438\u0440\u0430\u043D\u043E \u043F\u0440\u043E\u043D\u0438\u043A\u0432\u0430\u043D\u0435 \u0438\u043B\u0438 \u0434\u043E\u0441\u0442\u044A\u043F \u0432 \u0447\u0443\u0436\u0434\u0435\u0441\u0442\u0440\u0430\u043D\u043D\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0438\u043B\u0438 \u0441\u043E\u0444\u0442\u0443\u0435\u0440;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "\u2022 \u0434\u0430 \u043D\u0435 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0437\u043B\u043E\u0443\u043C\u0438\u0448\u043B\u0435\u043D\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\u2022 \u0434\u0430 \u043E\u0431\u0435\u0437\u0449\u0435\u0442\u0438 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430 \u0437\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u043F\u0440\u0435\u0442\u044A\u0440\u043F\u0435\u043D\u0438 \u0432\u0440\u0435\u0434\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043D\u0430\u0442\u0438 \u043F\u043E\u043B\u0437\u0438, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u043D\u043E \u0437\u0430 \u0432\u0441\u044F\u043A\u0430\u043A\u0432\u0438 \u0440\u0430\u0437\u0445\u043E\u0434\u0438 \u0438 \u043F\u043B\u0430\u0442\u0435\u043D\u0438 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0441\u043A\u0438 \u0432\u044A\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F, \u043D\u0430\u0441\u0442\u044A\u043F\u0438\u043B\u0438 \u0432\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u044F\u0432\u0435\u043D\u0438 \u0438\u0441\u043A\u043E\u0432\u0435 \u043E\u0442 \u0438/\u0438\u043B\u0438 \u043F\u043B\u0430\u0442\u0435\u043D\u0438 \u043E\u0431\u0435\u0437\u0449\u0435\u0442\u0435\u043D\u0438\u044F \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438, \u0445\u0438\u043F\u0435\u0440-\u0432\u0440\u044A\u0437\u043A\u0438, \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438 \u0438\u043B\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043A\u043E\u0438\u0442\u043E \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442 \u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043B, \u0440\u0430\u0437\u043F\u043E\u043B\u043E\u0436\u0438\u043B \u043D\u0430 \u0441\u044A\u0440\u0432\u044A\u0440\u0430, \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043B, \u0440\u0430\u0437\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0432\u0430\u043B, \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430 \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u0438 \u0447\u0440\u0435\u0437 /\u0438\u043C\u0435\u0442\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0430/ \u0432 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u0430, \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u0414\u043E\u0431\u0440\u0438\u0442\u0435 \u043D\u0440\u0430\u0432\u0438 \u0438\u043B\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0435\u0442\u0438\u043A\u0430\u0442\u0430;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "14\u0430. \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0441\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0430\u0432\u0430 \u0434\u0430 \u043F\u043E\u0441\u043E\u0447\u0438 \u0442\u043E\u0447\u0435\u043D \u0438 \u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u0430\u0434\u0440\u0435\u0441 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0435\u043D \u0430\u0434\u0440\u0435\u0441, \u0434\u0430 \u043F\u043B\u0430\u0442\u0438 \u0446\u0435\u043D\u0430\u0442\u0430 \u043D\u0430 \u0441\u0442\u043E\u043A\u0430\u0442\u0430, \u0434\u0430 \u0437\u0430\u043F\u043B\u0430\u0442\u0438 \u0440\u0430\u0437\u0445\u043E\u0434\u0438\u0442\u0435 \u043F\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0442\u0430, \u043A\u043E\u0433\u0430\u0442\u043E \u0441\u044A\u0449\u0430\u0442\u0430 \u043D\u0435 \u0435 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u0430 \u0438 \u0434\u0430 \u043E\u0441\u0438\u0433\u0443\u0440\u0438 \u0434\u043E\u0441\u0442\u044A\u043F \u0438 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442 \u0437\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0442\u043E\u043A\u0430\u0442\u0430. \u0412 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u0438\u0437\u0440\u0438\u0447\u043D\u043E \u043D\u0435 \u0435 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u043E, \u0447\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0442\u0430 \u0435 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u0430, \u0441\u044A\u0449\u0430\u0442\u0430 \u0441\u0435 \u0441\u0447\u0438\u0442\u0430 \u0437\u0430 \u0432\u044A\u0437\u043C\u0435\u0437\u0434\u043D\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\u041F\u0420\u0410\u0412\u0410 \u0418 \u0417\u0410\u0414\u042A\u041B\u0416\u0415\u041D\u0418\u042F \u041D\u0410 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "www.smolyanobyad.com \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u0432 \u0441\u0440\u043E\u043A \u0437\u0430\u044F\u0432\u0435\u043D\u0430\u0442\u0430 \u0441\u0442\u043E\u043A\u0430 \u0432 \u043D\u0435\u0439\u043D\u0430\u0442\u0430 \u043D\u0435\u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0430 \u0446\u044F\u043B\u043E\u0441\u0442 \u0438 \u0434\u0430 \u043F\u0440\u0435\u0445\u0432\u044A\u0440\u043B\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0441\u0442\u043E\u043A\u0430\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u043D\u044F\u043C\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435\u0442\u043E \u0438 \u043E\u0431\u0435\u043A\u0442\u0438\u0432\u043D\u0430\u0442\u0430 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442 \u0434\u0430 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430, \u043F\u043E \u043A\u043E\u0439\u0442\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E, \u043D\u043E \u043D\u0435 \u0438 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435 \u0434\u0430 \u0437\u0430\u043F\u0430\u0437\u0432\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u0440\u0430\u0437\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438 \u043D\u0430 \u0441\u044A\u0440\u0432\u044A\u0440\u0430 \u043D\u0430 www.smolyanobyad.com.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u043F\u043E \u0432\u0441\u044F\u043A\u043E \u0432\u0440\u0435\u043C\u0435, \u0431\u0435\u0437 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/\u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043A\u043E\u0433\u0430\u0442\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u044F\u0442 \u043F\u043E\u043B\u0437\u0432\u0430 \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435 \u0432 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043A\u0430\u043A\u0442\u043E \u0438 \u043F\u043E \u043F\u0440\u0435\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0434\u0430 \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u0438, \u0441\u043F\u0440\u0435 \u0438\u043B\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0430. \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u043D\u0435 \u043D\u043E\u0441\u0438 \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0441\u0442 \u0441\u043F\u0440\u044F\u043C\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0438 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430 \u0437\u0430 \u043F\u0440\u0435\u0442\u044A\u0440\u043F\u0435\u043D\u0438 \u0432\u0440\u0435\u0434\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043D\u0430\u0442\u0438 \u043F\u043E\u043B\u0437\u0438, \u043D\u0430\u0441\u0442\u044A\u043F\u0438\u043B\u0438 \u0432\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u044F\u0432\u0430\u043D\u0435\u0442\u043E, \u0441\u043F\u0438\u0440\u0430\u043D\u0435\u0442\u043E, \u043F\u0440\u043E\u043C\u0435\u043D\u044F\u043D\u0435\u0442\u043E \u0438\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0430\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435, \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435\u0442\u043E, \u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u043D\u0435\u0442\u043E, \u0437\u0430\u0433\u0443\u0431\u0432\u0430\u043D\u0435\u0442\u043E, \u043D\u0435\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0441\u0442\u0442\u0430, \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0442\u0430, \u0438\u043B\u0438 \u043D\u0435\u043F\u044A\u043B\u043D\u043E\u0442\u0430\u0442\u0430 \u043D\u0430 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438 \u0438\u043B\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043F\u0440\u0435\u043D\u0430\u0441\u044F\u043D\u0438, \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0438, \u0437\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0438 \u0438\u043B\u0438 \u0441\u0442\u0430\u043D\u0430\u043B\u0438 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u0438 \u0447\u0440\u0435\u0437 /\u0438\u043C\u0435\u0442\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0430/.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u043D\u0435 \u043D\u043E\u0441\u0438 \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0441\u0442 \u0437\u0430 \u0432\u0440\u0435\u0434\u0438, \u043F\u0440\u0438\u0447\u0438\u043D\u0435\u043D\u0438 \u0432\u044A\u0440\u0445\u0443 \u0441\u043E\u0444\u0442\u0443\u0435\u0440\u0430, \u0445\u0430\u0440\u0434\u0443\u0435\u0440\u0430 \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0438\u0442\u0435 \u0441\u044A\u043E\u0440\u044A\u0436\u0435\u043D\u0438\u044F, \u0438\u043B\u0438 \u0437\u0430 \u0437\u0430\u0433\u0443\u0431\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438, \u043F\u0440\u043E\u0438\u0437\u0442\u0435\u043A\u043B\u0438 \u043E\u0442 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438 \u0438\u043B\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438, \u0442\u044A\u0440\u0441\u0435\u043D\u0438, \u0437\u0430\u0440\u0435\u0434\u0435\u043D\u0438 \u0438\u043B\u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0438 \u043F\u043E \u043A\u0430\u043A\u044A\u0432\u0442\u043E \u0438 \u0434\u0430 \u0431\u0438\u043B\u043E \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438. \u0421\u044A\u0432\u0435\u0442\u0438\u0442\u0435, \u043A\u043E\u043D\u0441\u0443\u043B\u0442\u0430\u0446\u0438\u0438\u0442\u0435 \u0438\u043B\u0438 \u043F\u043E\u043C\u043E\u0449\u0442\u0430, \u043E\u043A\u0430\u0437\u0430\u043D\u0438 \u043E\u0442 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0438\u0442\u0435 \u0438 \u0441\u043B\u0443\u0436\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0432\u044A\u0432 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435 \u043E\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435, \u043D\u0435 \u043F\u043E\u0440\u0430\u0436\u0434\u0430 \u043A\u0430\u043A\u0432\u0430\u0442\u043E \u0438 \u0434\u0430 \u0431\u0438\u043B\u043E \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0441\u0442 \u0438\u043B\u0438 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u044F \u0437\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u0441\u044A\u0431\u0438\u0440\u0430 \u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043D\u0430\u0441\u044F\u0449\u0430 \u0441\u0435 \u0434\u043E \u043D\u0435\u0433\u043E\u0432\u0438\u0442\u0435 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438/\u043A\u043B\u0438\u0435\u043D\u0442\u0438, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u0434\u0430\u043B\u0438 \u0441\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 \u043F\u043E \u043F\u0440\u0435\u0434\u0445\u043E\u0434\u043D\u0438\u044F \u0447\u043B\u0435\u043D \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0430 \u043E\u0442 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410, \u043E\u0441\u0432\u0435\u043D \u0432 \u0441\u043B\u0443\u0447\u0430\u0439 \u043D\u0430 \u0438\u0437\u0440\u0438\u0447\u043D\u043E \u043D\u0435\u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F, \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u043B\u0435\u0434\u043D\u0438\u044F e-mail \u0430\u0434\u0440\u0435\u0441: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "delivery@smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0441\u044A\u0431\u0438\u0440\u0430 \u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430, \u0437\u0430 \u0434\u0430 \u043F\u043E\u0434\u043E\u0431\u0440\u044F\u0432\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043D\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438. \u0412\u0441\u0438\u0447\u043A\u0438 \u0446\u0435\u043B\u0438, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0449\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0441\u044A\u043E\u0431\u0440\u0430\u0437\u0435\u043D\u0438 \u0441 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E\u0442\u043E, \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u0438\u0442\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0438 \u0430\u043A\u0442\u043E\u0432\u0435 \u0438 \u0434\u043E\u0431\u0440\u0438\u0442\u0435 \u043D\u0440\u0430\u0432\u0438. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u043D\u0435 \u043D\u043E\u0441\u0438 \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0441\u0442 \u0437\u0430 \u043D\u0435\u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u044F\u0442\u0430 \u0441\u0438 \u043F\u043E \u0442\u043E\u0437\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0440\u0438 \u043D\u0430\u0441\u0442\u044A\u043F\u0432\u0430\u043D\u0435 \u043D\u0430 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u0441\u0442\u0432\u0430, \u043A\u043E\u0438\u0442\u043E \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u043D\u0435 \u0435 \u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0438\u043B \u0438 \u043D\u0435 \u0435 \u0431\u0438\u043B \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0438 \u2013 \u0432\u043A\u043B., \u0441\u043B\u0443\u0447\u0430\u0438 \u043D\u0430 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u0438 \u0441\u044A\u0431\u0438\u0442\u0438\u044F, \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u043D\u0430\u0442\u0430 \u043C\u0440\u0435\u0436\u0430 \u043D\u0430 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u0432 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435\u0442\u043E \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435 \u0438\u0437\u0432\u044A\u043D \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0430 \u043D\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u0438\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430 \u043D\u0430 \u043A\u043E\u043C\u043F\u044E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u043A\u0443\u043A\u0438\u0442\u0430 (cookies). \u041A\u0443\u043A\u0438\u0442\u0430\u0442\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0432\u0430\u0442 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u0438 \u0444\u0430\u0439\u043B\u043E\u0432\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u0442 \u043E\u0442 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u0432\u044A\u0440\u0445\u0443 \u0442\u0432\u044A\u0440\u0434\u0438\u044F \u0434\u0438\u0441\u043A \u043D\u0430 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430\u0442 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F, \u043A\u0430\u0442\u043E \u0433\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u0442 \u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430\u0442 \u043F\u0440\u043E\u0441\u043B\u0435\u0434\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u0442\u0430 \u043C\u0443, \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0430\u0432\u0430, \u0445\u0438\u043F\u0435\u0440-\u0432\u0440\u044A\u0437\u043A\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430, \u043A\u043E\u044F\u0442\u043E \u043F\u043E\u043B\u0437\u0432\u0430 \u0438 \u0437\u0430\u043F\u0438\u0441\u0432\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "\u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0410");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "\u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0438\u043C\u0430 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442 \u0434\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u043D\u0438\u0442\u0435 \u043E\u0442 \u0443\u0435\u0431 \u0441\u0430\u0439\u0442\u0430 \u0441\u0442\u043E\u043A\u0438/\u0430\u0440\u0442\u0438\u043A\u0443\u043B\u0438. \u041F\u043E\u0440\u044A\u0447\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0430 \u0441\u0442\u043E\u043A\u0430 \u0441\u0442\u0430\u0432\u0430 \u0447\u0440\u0435\u0437 \u043D\u0430\u0442\u0438\u0441\u043A\u0430\u043D\u0435 \u043D\u0430 \u0431\u0443\u0442\u043E\u043D\u0430 \u201E\u041F\u041E\u0420\u042A\u0427\u0410\u0419\u201D \u0432 \u043E\u0444\u0435\u0440\u0442\u0430\u0442\u0430 \u043D\u0430 \u0436\u0435\u043B\u0430\u043D\u0430\u0442\u0430 \u0441\u0442\u043E\u043A\u0430. \u0422\u043E\u0432\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0432\u0430 \u0432\u043E\u043B\u0435\u0438\u0437\u044F\u0432\u043B\u0435\u043D\u0438\u0435, \u043A\u043E\u0435\u0442\u043E \u043E\u0431\u0432\u044A\u0440\u0437\u0432\u0430 \u0441\u044A\u0441 \u0441\u0438\u043B\u0430\u0442\u0430 \u043D\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0447\u0430 \u0438\u0437\u0440\u0438\u0447\u043D\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "\u041F\u0440\u0438 \u043F\u043E\u0441\u043E\u0447\u0435\u043D \u043D\u0435\u043F\u044A\u043B\u0435\u043D, \u043D\u0435\u0432\u0435\u0440\u0435\u043D \u0438\u043B\u0438 \u0433\u0440\u0435\u0448\u0435\u043D \u0430\u0434\u0440\u0435\u0441 \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435\u043D \u043D\u043E\u043C\u0435\u0440 \u043E\u0442 \u0441\u0442\u0440\u0430\u043D\u0430 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u0438 \u043F\u043E\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0430\u0442\u0430, \u0441\u0435 \u0441\u0447\u0438\u0442\u0430, \u0447\u0435 \u0441\u044A\u0449\u0430\u0442\u0430 \u0435 \u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0438 \u043D\u0435 \u0432\u044A\u0437\u043D\u0438\u043A\u0432\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435 \u0437\u0430 \u043D\u0435\u0439\u043D\u043E\u0442\u043E \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0442 \u0441\u0442\u0440\u0430\u043D\u0430 \u043D\u0430 \u0443\u0435\u0431 \u0441\u0430\u0439\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "\u041F\u0440\u0435\u0434\u0438 \u043D\u0430\u0442\u0438\u0441\u043A\u0430\u043D\u0435 \u043D\u0430 \u0431\u0443\u0442\u043E\u043D\u0430 \u201C\u041F\u041E\u0420\u042A\u0427\u0410\u0419\u201C, \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442/\u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0441\u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u044F\u0432\u0430, \u0438\u0437\u0446\u044F\u043B\u043E \u043F\u0440\u0438\u0435\u043C\u0430 \u0438 \u0441\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0430\u0432\u0430 \u0434\u0430 \u0441\u043F\u0430\u0437\u0432\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F. \u0422\u0435\u0437\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u0431\u0432\u044A\u0440\u0437\u0432\u0430\u0442 \u0432\u0441\u0438\u0447\u043A\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u0421\u043B\u0435\u0434 \u043A\u043B\u0438\u043A\u0430\u043D\u0435 \u043D\u0430 \u0431\u0443\u0442\u043E\u043D\u0430 \"\u041F\u041E\u0420\u042A\u0427\u0410\u0419\", \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0441\u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u044F\u0432\u0430\u0442 \u0434\u0430 \u0437\u0430\u043A\u0443\u043F\u044F\u0442 \u0441\u0442\u043E\u043A\u0438\u0442\u0435, \u043D\u0430\u043C\u0438\u0440\u0430\u0449\u0438 \u0441\u0435 \u0432 \u201E\u041A\u041E\u041B\u0418\u0427\u041A\u0410\u0422\u0410\u201C. \u0422\u043E\u0432\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043D\u043E \u043E\u0431\u0432\u044A\u0440\u0437\u0432\u0430\u0449\u0430 \u0441\u0438\u043B\u0430. \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442/\u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430 \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u043F\u043E\u0434 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u043D\u0430 \u0443\u043D\u0438\u043A\u0430\u043B\u0435\u043D \u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0430\u0442\u0430 \u043E\u0442 \u043D\u0435\u0433\u043E \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0449\u0430 \u0438 \u0441 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u043E\u0432\u0430 \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0435 \u0441\u0447\u0438\u0442\u0430, \u0447\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u044A\u0442 \u0435 \u0441\u043A\u043B\u044E\u0447\u0435\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0441\u0438 \u0437\u0430\u043F\u0430\u0437\u0432\u0430 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u0434\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u0438 \u043E\u0442\u043A\u0430\u0437 \u043E\u0442 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0430 \u043F\u043E\u0442\u0432\u044A\u0440\u0434\u0435\u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u0432 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u0441\u0442\u043E\u043A\u0438\u0442\u0435 \u043D\u0435 \u0441\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u0438. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "\u041F\u0440\u0438 \u043B\u0438\u043F\u0441\u0430 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u043E\u0432\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442 \u043E\u0442 \u0437\u0430\u044F\u0432\u0435\u043D\u0430\u0442\u0430 \u0441\u0442\u043E\u043A\u0430, \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u044F \u0434\u0435\u043D \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0443\u0432\u0435\u0434\u043E\u043C\u044F\u0432\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/\u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0437\u0430 \u0438\u0437\u0447\u0435\u0440\u043F\u0432\u0430\u043D\u0435\u0442\u043E \u0439 \u0447\u0440\u0435\u0437 \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u043E \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438\u044F \u043E\u0442 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0435\u043D \u0430\u0434\u0440\u0435\u0441 \u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435\u043D \u043D\u043E\u043C\u0435\u0440. \u0412 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D \u043F\u0440\u0435\u0432\u043E\u0434 \u043F\u043E \u0441\u043C\u0435\u0442\u043A\u0430\u0442\u0430 \u043D\u0430 \u0442\u044A\u0440\u0433\u043E\u0432\u0435\u0446\u0430, \u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0449\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0438\u0437\u0431\u0438\u0440\u0430 \u043C\u0435\u0436\u0434\u0443 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0443\u043C\u0438\u0442\u0435, \u043E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u0438\u043B\u0438 \u0447\u0440\u0435\u0437 \u0437\u0430\u043C\u0435\u0441\u0442\u0432\u0430\u0449\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "\u0426\u0415\u041D\u0418:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "\u0412\u0441\u0438\u0447\u043A\u0438 \u0446\u0435\u043D\u0438 \u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " \u0441\u0430 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438 \u0432 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u043B\u0435\u0432\u043E\u0432\u0435, \u0441 \u0432\u043A\u043B\u044E\u0447\u0435\u043D \u0414\u0414\u0421, \u0437\u0430 \u0435\u0434\u0438\u043D \u0431\u0440\u043E\u0439 \u0430\u0440\u0442\u0438\u043A\u0443\u043B. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " \u0441\u0438 \u0437\u0430\u043F\u0430\u0437\u0432\u0430 \u043F\u0440\u0430\u0432\u043E\u0442\u043E \u0434\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u044F \u0446\u0435\u043D\u0438\u0442\u0435 \u0438 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u0438\u0442\u0435 \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0431\u0435\u0437 \u0434\u0430 \u0443\u0432\u0435\u0434o\u043C\u044F\u0432\u0430 \u0437\u0430 \u0442\u043E\u0432\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "\u041F\u0440\u0438 \u0438\u0437\u0431\u043E\u0440 \u0437\u0430\u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0446\u0435\u043D\u0430\u0442\u0430 \u043F\u0440\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 (\u043D\u0430\u043B\u043E\u0436\u0435\u043D \u043F\u043B\u0430\u0442\u0435\u0436), \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442 \u0437\u0430\u043F\u043B\u0430\u0449\u0430 \u0434\u044A\u043B\u0436\u0438\u043C\u0430\u0442\u0430 \u0441\u0443\u043C\u0430 \u043D\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "\u041F\u0440\u0438 \u0438\u0437\u0431\u043E\u0440 \u0437\u0430\u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0446\u0435\u043D\u0430\u0442\u0430 \u0447\u0440\u0435\u0437 \u041A\u0440\u0435\u0434\u0438\u0442\u043D\u0430 \u041A\u0430\u0440\u0442\u0430, \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0437\u0430\u043F\u043B\u0430\u0449\u0430 \u0434\u044A\u043B\u0436\u0438\u043C\u0430\u0442\u0430 \u0441\u0443\u043C\u0430 \u0447\u0440\u0435\u0437 \u043F\u0440\u0438\u0442\u0435\u0436\u0430\u0432\u0430\u043D\u0430 \u043E\u0442 \u043D\u0435\u0433\u043E \u0434\u0435\u0431\u0438\u0442\u043D\u0430 \u0438\u043B\u0438 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u0430 \u043A\u0430\u0440\u0442\u0430, \u0438\u0437\u0434\u0430\u0434\u0435\u043D\u0430 \u043E\u0442 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0430 \u0438\u043B\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0430 \u0431\u0430\u043D\u043A\u0430, \u043F\u0440\u0435\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0430 \u043D\u0430 \u0411\u0430\u043D\u043A\u0430\u0442\u0430 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, ". \u0421\u043B\u0435\u0434 \u043E\u0444\u043E\u0440\u043C\u044F\u043D\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0441\u0435 \u043F\u0440\u0435\u0445\u0432\u044A\u0440\u043B\u044F \u043A\u044A\u043C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u043D\u0430 \u0411\u043E\u0440\u0438\u043A\u0430 \u0447\u0440\u0435\u0437 \u043D\u0430\u0442\u0438\u0441\u043A\u0430\u043D\u0435 \u043D\u0430 \u0431\u0443\u0442\u043E\u043D\u0430 \u201E\u041F\u043B\u0430\u0442\u0438 \u0441 \u043A\u0430\u0440\u0442\u0430\u201C \u0438 \u0441\u043B\u0435\u0434\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0441\u0442\u044A\u043F\u043A\u0438, \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0430\u0432\u0430 \u043F\u043B\u0430\u0449\u0430\u043D\u0435\u0442\u043E. \u041F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u0431\u0438\u0432\u0430 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0430 \u0441\u043B\u0435\u0434 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0430. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "\u041D\u0410\u0427\u0418\u041D\u0418 \u041D\u0410 \u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0410:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "\u0426\u0435\u043D\u0438\u0442\u0435, \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438 \u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " \u0432\u043A\u043B\u044E\u0447\u0432\u0430\u0442 \u043E\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0435 \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 \u0434\u043E \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438\u044F \u043E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 \u043D\u0430 \u0433\u0440. \u0421\u043C\u043E\u043B\u044F\u043D. \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0442\u0430 \u0435 \u0437\u0430 \u0441\u043C\u0435\u0442\u043A\u0430 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "\u0421\u043B\u0435\u0434 \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0430\u0442\u0430 /\u0438 \u0441\u043B\u0435\u0434 \u043F\u0440\u0438\u0441\u0442\u0438\u0433\u0430\u043D\u0435 \u043D\u0430 \u0441\u0443\u043C\u0430\u0442\u0430 \u0432 \u0431\u0430\u043D\u043A\u043E\u0432\u0430\u0442\u0430 \u0441\u043C\u0435\u0442\u043A\u0430 \u043D\u0430 \u0443\u0435\u0431 \u0441\u0430\u0439\u0442\u0430, \u0430\u043A\u043E \u201C\u0437\u0430\u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u0447\u0440\u0435\u0437 \u0434\u0435\u0431\u0438\u0442\u043D\u0430/\u043A\u0440\u0435\u0434\u0438\u0442\u043D\u0430 \u043A\u0430\u0440\u0442\u0430\u201D/ \u0441\u0442\u043E\u043A\u0430 \u0441\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u044F \u043D\u0430 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438\u044F \u043E\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0430\u0434\u0440\u0435\u0441 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "\u0421\u0442\u043E\u043A\u0430\u0442\u0430 \u0441\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u044F \u043E\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 \u0441\u044A\u043E\u0431\u0440\u0430\u0437\u043D\u043E \u0432\u0438\u0434\u0430 \u0439 \u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "\u0412\u0440\u0435\u043C\u0435\u0442\u043E \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0435 \u043E\u0442 60 \u0434\u043E 120 \u043C\u0438\u043D\u0443\u0442\u0438 \u043E\u0442 \u043F\u0440\u0438\u0435\u043C\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u0438 \u0437\u0430\u0432\u0438\u0441\u0438 \u043E\u0442 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u043E\u0442\u043E \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u0430\u043D\u043E\u0442\u043E \u044F\u0441\u0442\u0438\u0435, \u043D\u0430\u0442\u043E\u0432\u0430\u0440\u0435\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u0442\u043E \u0438 \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0434\u043E \u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u0434\u0430 \u043F\u0440\u0435\u0434\u0430\u0434\u0435 \u0441\u0442\u043E\u043A\u0430\u0442\u0430 \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043D\u0430 \u0442\u0440\u0435\u0442\u043E \u043B\u0438\u0446\u0435, \u043A\u043E\u0435\u0442\u043E \u043F\u0440\u0438\u0435\u043C\u0430 \u0438 \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0430\u0432\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435\u0442\u043E \u0439 \u043E\u0442 \u0438\u043C\u0435\u0442\u043E \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/\u043A\u043B\u0438\u0435\u043D\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "\u0417\u0430\u044F\u0432\u043A\u0438\u0442\u0435 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430, \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0438 \u0437\u0430 \u0432\u0440\u0435\u043C\u0435\u0442\u043E \u043E\u0442 09:00 \u0447\u0430\u0441\u0430 \u0434\u043E 11:20 \u0447\u0430\u0441\u0430 \u0441\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0434\u043E 12:30 \u0447\u0430\u0441\u0430 \u043F\u0440\u0438 \u0441\u043F\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0440\u0435\u043C\u0435\u0442\u043E \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "\u0417\u0430\u044F\u0432\u043A\u0438\u0442\u0435 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430, \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0438 \u0437\u0430 \u0432\u0440\u0435\u043C\u0435\u0442\u043E \u0441\u043B\u0435\u0434 11:20 \u0447\u0430\u0441\u0430 \u0441\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0441\u043B\u0435\u0434 12:30 \u0447\u0430\u0441\u0430 \u043F\u0440\u0438 \u0441\u043F\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0440\u0435\u043C\u0435\u0442\u043E \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "\u0410\u043A\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442/\u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u043D\u0435 \u043E\u0441\u0438\u0433\u0443\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0437\u0430 \u043F\u0440\u0435\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0442\u043E\u043A\u0430\u0442\u0430 \u0438\u043B\u0438 \u043D\u0435 \u0431\u044A\u0434\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D \u043D\u0430 \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438\u044F \u043E\u0442 \u043D\u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441 \u0432 \u0433\u043E\u0440\u0435\u0441\u043F\u043E\u043C\u0435\u043D\u0430\u0442\u0438\u044F \u0441\u0440\u043E\u043A, \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u042A\u0422 \u0441\u0435 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0432\u0430 \u043E\u0442 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435\u0442\u043E \u0441\u0438 \u0434\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u0437\u0430\u044F\u0432\u0435\u043D\u0430\u0442\u0430 \u0441\u0442\u043E\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "\u041F\u041E\u0422\u0420\u0415\u0411\u0418\u0422\u0415\u041B\u042F\u0422/\u041A\u041B\u0418\u0415\u041D\u0422\u042A\u0422 \u0418\u041C\u0410 \u041F\u0420\u0410\u0412\u041E \u0414\u0410 \u041E\u0422\u041A\u0410\u0416\u0415(\u0412\u042A\u0420\u041D\u0415) \u0417\u0410\u042F\u0412\u0415\u041D\u0410\u0422\u0410 \u041E\u0422 \u041D\u0415\u0413\u041E \u0421\u0422\u041E\u041A\u0410, \u0410\u041A\u041E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "\u0421\u0442\u043E\u043A\u0430\u0442\u0430 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u043E \u043D\u0435 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0430 \u043D\u0430 \u0437\u0430\u044F\u0432\u0435\u043D\u0430\u0442\u0430 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043E\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0438 \u0442\u043E\u0432\u0430 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438 \u0447\u0440\u0435\u0437 \u043E\u0431\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0439 \u043F\u0440\u0435\u0433\u043B\u0435\u0434,\u043D\u043E \u043D\u0435 \u043F\u043E \u043A\u044A\u0441\u043D\u043E \u043E\u0442 \u0432\u0440\u0435\u043C\u0435\u0442\u043E \u043D\u0430 \u043F\u0440\u0435\u0434\u0430\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u043E\u0442 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "\u0421\u0442\u043E\u043A\u0430\u0442\u0430 \u0438\u043B\u0438 \u043D\u0435\u0439\u043D\u0430\u0442\u0430 \u043E\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0435 \u0431\u0438\u043B\u0430 \u043F\u043E\u0432\u0440\u0435\u0434\u0435\u043D\u0430 \u043F\u0440\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435\u0442\u043E. \u0412 \u0442\u043E\u0437\u0438 \u0441\u043B\u0443\u0447\u0430\u0439 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442 \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043E\u0431\u044A\u0440\u043D\u0435 \u043A\u044A\u043C \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "\u0412\u0441\u0438\u0447\u043A\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u0437\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430\u0446\u0438\u0438 \u0441\u0435 \u043F\u0440\u0438\u0435\u043C\u0430\u0442 \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u0442\u0430 \u0438 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0441\u0442\u043E\u043A\u0430\u0442\u0430. \u0417\u0430 \u043F\u043E\u0441\u0442\u044A\u043F\u0432\u0430\u043D\u0435 \u043A\u044A\u043C \u0440\u0435\u043A\u043B\u0430\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " \u0438\u043B\u0438 \u043D\u0430 \u0442\u0435\u043B.0876251939.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "\u041E\u0422\u041A\u0410\u0417 \u041E\u0422 \u041F\u041E\u0420\u042A\u0427\u041A\u0410:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430 \u0441\u0435 \u043F\u0440\u0430\u0432\u0438 \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 \u043D\u0430 5 \u043C\u0438\u043D\u0443\u0442\u0438 \u0441\u043B\u0435\u0434 \u043D\u0435\u0439\u043D\u043E\u0442\u043E \u0437\u0430\u044F\u0432\u044F\u0432\u0430\u043D\u0435 \u0432 \u043F\u0440\u043E\u0442\u0438\u0432\u0435\u043D \u0441\u043B\u0443\u0447\u0430\u0439 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442/\u043A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u043F\u0440\u0438\u0435\u043C\u0430 \u0438 \u043F\u043B\u0430\u0442\u0438 \u043F\u043E\u0440\u044A\u0447\u0430\u043D\u0430\u0442\u0430 \u0441\u0442\u043E\u043A\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "\u041E\u0442\u043A\u0430\u0437 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0430 \u0441 Online \u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u0438 \u043A\u043E\u0433\u0430\u0442\u043E \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0432\u0435\u0447\u0435 \u0435 \u0437\u0430\u043F\u043B\u0430\u0442\u0438\u043B \u043F\u043E\u0440\u044A\u0447\u0430\u043D\u0430\u0442\u0430 \u0441\u0442\u043E\u043A\u0430 \u0441\u0435 \u043F\u0440\u0430\u0432\u0438 \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 \u043D\u0430 5 \u043C\u0438\u043D\u0443\u0442\u0438 \u0441\u043B\u0435\u0434 \u043D\u0435\u0439\u043D\u043E\u0442\u043E \u0437\u0430\u044F\u0432\u044F\u0432\u0430\u043D\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "www.smolyanobyad.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, " \u0441\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0430\u0432\u0430 \u0434\u0430 \u0432\u044A\u0441\u0442\u0430\u043D\u043E\u0432\u0438 \u0441\u0443\u043C\u0430\u0442\u0430 \u0431\u0435\u0437 \u0431\u0430\u043D\u043A\u043E\u0432\u0438\u0442\u0435 \u0442\u0430\u043A\u0441\u0438 \u043D\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0412\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0441\u0443\u043C\u0438 \u0441\u0442\u0430\u0432\u0430, \u0447\u0440\u0435\u0437 \u043D\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u043F\u043E \u043A\u0430\u0440\u0442\u0430\u0442\u0430 \u0432 \u0441\u0440\u043E\u043A \u043E\u0442 30\u0434\u043D\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "\u041B\u0418\u0427\u041D\u0418 \u0414\u0410\u041D\u041D\u0418");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "\u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0430 \u043D\u0430 \u0441\u0432\u043E\u0438\u0442\u0435 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438/\u043A\u043B\u0438\u0435\u043D\u0442\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0435\u043D\u0430\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438. \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 \u043D\u044F\u043C\u0430 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0438, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438 \u0438\u043B\u0438 \u0434\u043E\u0432\u0435\u0436\u0434\u0430\u043D\u0438 \u0434\u043E \u0437\u043D\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430 \u0438\u0437\u0432\u044A\u043D \u0441\u043B\u0443\u0447\u0430\u0438\u0442\u0435 \u0438 \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0442\u0430, \u043F\u043E\u0441\u043E\u0447\u0435\u043D\u0438 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F. \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0437\u0430\u0449\u0438\u0442\u0430\u0432\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F/\u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0441\u0442\u0430\u043D\u0430\u043B\u0438 \u043C\u0443 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0438 \u043F\u0440\u0438 \u043F\u043E\u043F\u044A\u043B\u0432\u0430\u043D\u0435 \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u0442\u0430 \u0444\u043E\u0440\u043C\u0430 \u0437\u0430 \u0438\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430, \u043A\u0430\u0442\u043E \u0442\u043E\u0432\u0430 \u0437\u0430\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0430\u0434\u0430 \u0432 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u041A\u043B\u0438\u0435\u043D\u0442\u044A\u0442 \u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043D\u0435\u0432\u0435\u0440\u043D\u0438 \u0434\u0430\u043D\u043D\u0438. \u041F\u0440\u0438 \u0441\u043F\u0430\u0437\u0432\u0430\u043D\u0435 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0430\u0449\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0438 \u043A\u043B\u0430\u0443\u0437\u0438\u0442\u0435 \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u043B\u0438\u0447\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043E \u0438 \u0441\u0430\u043C\u043E \u0437\u0430 \u0446\u0435\u043B\u0438\u0442\u0435, \u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u0438 \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430. \u0412\u0441\u044F\u043A\u0430\u043A\u0432\u0438 \u0434\u0440\u0443\u0433\u0438 \u0446\u0435\u043B\u0438, \u0437\u0430 \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u0434\u0430\u043D\u043D\u0438\u0442\u0435, \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0441\u044A\u043E\u0431\u0440\u0430\u0437\u0435\u043D\u0438 \u0441 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E, \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u0438\u0442\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0438 \u0430\u043A\u0442\u043E\u0432\u0435, \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0435\u0442\u0438\u043A\u0430\u0442\u0430, \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0442\u0430 \u043D\u0430 \u043C\u043E\u0440\u0430\u043B\u0430 \u0438 \u0434\u043E\u0431\u0440\u0438\u0442\u0435 \u043D\u0440\u0430\u0432\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0441\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0430\u0432\u0430 \u0434\u0430 \u043D\u0435 \u0440\u0430\u0437\u043A\u0440\u0438\u0432\u0430 \u043D\u0438\u043A\u0430\u043A\u0432\u0438 \u043B\u0438\u0447\u043D\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u043B\u0438\u0446\u0430 - \u0434\u044A\u0440\u0436\u0430\u0432\u043D\u0438 \u043E\u0440\u0433\u0430\u043D\u0438, \u0442\u044A\u0440\u0433\u043E\u0432\u0441\u043A\u0438 \u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u0430, \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438 \u043B\u0438\u0446\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438, \u043E\u0441\u0432\u0435\u043D \u0432 \u0441\u043B\u0443\u0447\u0430\u0438\u0442\u0435 \u043A\u043E\u0433\u0430\u0442\u043E \u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0438\u0437\u0440\u0438\u0447\u043D\u043E\u0442\u043E \u043F\u0438\u0441\u043C\u0435\u043D\u043E \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u041A\u043B\u0438\u0435\u043D\u0442\u0430, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 \u0435 \u0438\u0437\u0438\u0441\u043A\u0430\u043D\u0430 \u043E\u0442 \u0434\u044A\u0440\u0436\u0430\u0432\u043D\u0438 \u043E\u0440\u0433\u0430\u043D\u0438 \u0438\u043B\u0438 \u0434\u043B\u044A\u0436\u043D\u043E\u0441\u0442\u043D\u0438 \u043B\u0438\u0446\u0430, \u043A\u043E\u0438\u0442\u043E \u0441\u043F\u043E\u0440\u0435\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0430\u0449\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0441\u0430 \u043E\u043F\u0440\u0430\u0432\u043E\u043C\u043E\u0449\u0435\u043D\u0438 \u0434\u0430 \u0438\u0437\u0438\u0441\u043A\u0432\u0430\u0442 \u0438 \u0441\u044A\u0431\u0438\u0440\u0430\u0442 \u0442\u0430\u043A\u0430\u0432\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F. \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410 \u0435 \u0434\u043B\u044A\u0436\u0435\u043D \u0434\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 \u043F\u043E \u0441\u0438\u043B\u0430\u0442\u0430 \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "\u0418\u0417\u041C\u0415\u041D\u0415\u041D\u0418\u042F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "\u041E\u0431\u0449\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u043F\u0440\u043E\u043C\u0435\u043D\u044F\u043D\u0438 \u043F\u043E \u0432\u0441\u044F\u043A\u043E \u0432\u0440\u0435\u043C\u0435 \u043E\u0442 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410\u00A0 , \u043A\u043E\u0435\u0442\u043E \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u0438 \u0434\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0442\u0435 \u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u0432 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E\u0442\u043E. \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410\u00A0 \u0441\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0430\u0432\u0430 \u0434\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u0438 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0437\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435 \u0432 \u041E\u0431\u0449\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043A\u0430\u0442\u043E \u043D\u0430 \u0432\u0438\u0434\u043D\u043E \u043C\u044F\u0441\u0442\u043E \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u0441\u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0442\u0430 \u0438\u043C \u0438 \u0434\u0430\u0434\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u044A\u0447\u0435\u043D \u0441\u0440\u043E\u043A \u0434\u0430 \u0441\u0435 \u0437\u0430\u043F\u043E\u0437\u043D\u0430\u0435 \u0441 \u0442\u044F\u0445. \u0412 \u0434\u0430\u0434\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A, \u0430\u043A\u043E \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u043D\u0435 \u0437\u0430\u044F\u0432\u0438, \u0447\u0435 \u043E\u0442\u0445\u0432\u044A\u0440\u043B\u044F \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435, \u0442\u043E \u0442\u043E\u0439 \u0441\u0435 \u0441\u0447\u0438\u0442\u0430 \u043E\u0431\u0432\u044A\u0440\u0437\u0430\u043D \u043E\u0442 \u0442\u044F\u0445. \u0412 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u0437\u0430\u044F\u0432\u0438 \u0432 \u0434\u0430\u0434\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A, \u0447\u0435 \u043D\u0435 \u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435, \u0442\u043E \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410\u00A0 \u0438\u043C\u0430 \u043F\u0440\u0430\u0432\u043E \u0432\u0435\u0434\u043D\u0430\u0433\u0430 \u0434\u0430 \u0441\u043F\u0440\u0435 \u0438\u043B\u0438 \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043D\u0435\u0442\u043E \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435 \u043D\u0430 \u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "\u0412\u0441\u0438\u0447\u043A\u0438 \u0441\u043F\u043E\u0440\u043E\u0432\u0435 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0442\u0435 \u0441\u0435 \u0440\u0435\u0448\u0430\u0432\u0430\u0442 \u0432 \u0434\u0443\u0445 \u043D\u0430 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E \u0438 \u0434\u043E\u0431\u0440\u0430 \u0432\u043E\u043B\u044F. \u0412 \u0441\u043B\u0443\u0447\u0430\u0439, \u0447\u0435 \u0441\u044A\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0435 \u0431\u044A\u0434\u0435 \u043F\u043E\u0441\u0442\u0438\u0433\u043D\u0430\u0442\u043E, \u0432\u0441\u0438\u0447\u043A\u0438 \u043D\u0435\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438 \u0441\u043F\u043E\u0440\u043E\u0432\u0435, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u043D\u043E \u0441\u043F\u043E\u0440\u043E\u0432\u0435, \u043F\u043E\u0440\u043E\u0434\u0435\u043D\u0438 \u0438\u043B\u0438 \u043E\u0442\u043D\u0430\u0441\u044F\u0449\u0438 \u0441\u0435 \u0434\u043E \u0442\u044A\u043B\u043A\u0443\u0432\u0430\u043D\u0435\u0442\u043E \u043C\u0443, \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442, \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u044F\u0432\u0430\u043D\u0435, \u043A\u0430\u043A\u0442\u043E \u0438 \u0441\u043F\u043E\u0440\u043E\u0432\u0435 \u0437\u0430 \u043F\u043E\u043F\u044A\u043B\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0440\u0430\u0437\u043D\u043E\u0442\u0438 \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438\u043B\u0438 \u043F\u0440\u0438\u0441\u043F\u043E\u0441\u043E\u0431\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u043C\u0443 \u043A\u044A\u043C \u043D\u043E\u0432\u043E\u0432\u044A\u0437\u043D\u0438\u043A\u043D\u0430\u043B\u0438 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u0441\u0442\u0432\u0430, \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0432\u0430\u043D\u0438 \u043E\u0442 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u0438\u044F \u0441\u044A\u0434 \u043F\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0422\u042A\u0420\u0413\u041E\u0412\u0415\u0426\u0410, \u0441\u044A\u043E\u0431\u0440\u0430\u0437\u043D\u043E \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u043E\u0442\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u0441\u0442\u0432\u043E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermsComponent_ng_template_53_ng_template_89_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are already a VIP player!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermsComponent_ng_template_53_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TermsComponent_ng_template_53_ng_template_89_p_0_Template, 2, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r5.currentUser$));
} }
function TermsComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044A\u0442 \u043D\u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C, \u0437\u0430 \u0434\u0430 \u043F\u043E\u0434\u043E\u0431\u0440\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044F\u043D\u0435\u0442\u043E, \u0437\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0430\u043D\u043B\u0438\u0437\u0438 \u0438 \u0437\u0430 \u0434\u0430 \u043E\u0441\u0438\u0433\u0443\u0440\u0438 \u0443\u0434\u043E\u0431\u043D\u043E \u0438 \u043F\u0435\u0440\u0441\u043E\u043B\u0430\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u043E \u043F\u0430\u0437\u0430\u0440\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u0412\u0430\u0441, \u043D\u0430\u0448\u0438\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A\u0430\u043A\u0432\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0432\u0430\u0442 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\u201C \u0438 \u043A\u0430\u043A\u0432\u0430 \u0435 \u0442\u044F\u0445\u043D\u0430\u0442\u0430 \u0437\u0430\u0434\u0430\u0447\u0430?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\"\u0411\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\" \u0441\u0430 \u043C\u0430\u043B\u043A\u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u0438 \u0444\u0430\u0439\u043B\u043E\u0432\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 \u0432 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430 \u0438\u043B\u0438 \u0432 \u043F\u0430\u043C\u0435\u0442\u0442\u0430 \u043D\u0430 \u0412\u0430\u0448\u0438\u044F \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440 \u0438/\u0438\u043B\u0438 \u043C\u043E\u0431\u0438\u043B\u043D\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E, \u043A\u043E\u0433\u0430\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0430\u0432\u0430\u0442\u0435 \u0434\u0430\u0434\u0435\u043D \u0443\u0435\u0431\u0441\u0430\u0439\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0426\u0435\u043B\u0442\u0430 \u043D\u0430 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\u201C \u0435 \u0434\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u044F\u0442 \u043F\u0440\u0435\u0436\u0438\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E \u0412\u0438 \u0432 \u043D\u0430\u0448\u0438\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u043E, \u0442\u0430\u043A\u0430 \u0447\u0435 \u0434\u0430 \u043D\u0435 \u0435 \u043D\u0443\u0436\u043D\u043E \u0434\u0430 \u0432\u044A\u0432\u0435\u0436\u0434\u0430\u0442\u0435 \u0441\u0432\u043E\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438 \u043E\u0442\u043D\u043E\u0432\u043E \u0438 \u043E\u0442\u043D\u043E\u0432\u043E. \u0422\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430\u0442 \u043D\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u043C\u043D\u0438 \u0412\u0430\u0448\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u043D\u0438\u044F \u0437\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D \u043F\u0435\u0440\u0438\u043E\u0434 \u043E\u0442 \u0432\u0440\u0435\u043C\u0435, \u0437\u0430 \u0434\u0430 \u043D\u0435 \u0441\u0435 \u043D\u0430\u043B\u0430\u0433\u0430 \u0434\u0430 \u0433\u0438 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u0435 \u0432\u0441\u0435\u043A\u0438 \u043F\u044A\u0442, \u043A\u043E\u0433\u0430\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0430\u0432\u0430\u0442\u0435 \u0441\u0430\u0439\u0442\u0430 \u0438\u043B\u0438 \u043F\u0440\u0435\u043C\u0438\u043D\u0430\u0432\u0430\u0442\u0435 \u043E\u0442 \u0435\u0434\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043A\u044A\u043C \u0434\u0440\u0443\u0433\u0430. \u041D\u044F\u043A\u043E\u0438 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u0441\u044A\u0431\u0438\u0440\u0430\u0442 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0418\u043C\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0432\u0438\u0434\u043E\u0432\u0435 \"\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\". \u0415\u0434\u043D\u0438 \u0438\u0434\u0432\u0430\u0442 \u0434\u0438\u0440\u0435\u043A\u0442\u043D\u043E \u043E\u0442 \u043D\u0430\u0448\u0438\u044F \u0443\u0435\u0431\u0441\u0430\u0439\u0442, \u0434\u0440\u0443\u0433\u0438 \u2013 \u043E\u0442 \u0442\u0440\u0435\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438, \u043A\u043E\u0438\u0442\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438 \u043D\u0430 \u043D\u0430\u0448\u0438\u044F \u0441\u0430\u0439\u0442. Te \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 \u0437\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u043F\u0435\u0440\u0438\u043E\u0434\u0438 \u043E\u0442 \u0432\u0440\u0435\u043C\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430 \u0438\u043B\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E \u0412\u0438. \u201E\u0411\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\u201C \u0437\u0430 \u0441\u0435\u0441\u0438\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u0435 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u0442 \u043E\u0442 \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440\u0430 \u0438\u043B\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E, \u043A\u043E\u0433\u0430\u0442\u043E \u0437\u0430\u0442\u0432\u043E\u0440\u0438\u0442\u0435 \u0443\u0435\u0431 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430 \u0441\u0438. \u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u0438\u0442\u0435 \"\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\" \u043E\u0442 \u0441\u0432\u043E\u044F \u0441\u0442\u0440\u0430\u043D\u0430 \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u043D\u0438 \u043D\u0430 \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440\u0430 \u0438\u043B\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E, \u0434\u043E\u043A\u0430\u0442\u043E \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0440\u0438\u0447\u043D\u043E \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u043E\u0442 \u0412\u0430\u0441 \u0438\u043B\u0438 \u0434\u043E\u043A\u0430\u0442\u043E \u043D\u0435 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0430\u0442 \u0441\u0432\u043E\u044F\u0442\u0430 \u0434\u0430\u0442\u0430 \u043D\u0430 \u0438\u0437\u0442\u0438\u0447\u0430\u043D\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041A\u0430\u043A\u0432\u0438 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043C\u0435 \u0432 \u043D\u0430\u0448\u0438\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041A\u0430\u0442\u043E \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u043D\u0430 \u043D\u0430\u0448\u0438\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u043D\u0438\u0435 \u043C\u043E\u0436\u0435\u043C \u0434\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u0432\u044A\u0432 \u0412\u0430\u0448\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u044A\u0440. \u201E\u0411\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\u201C, \u0438\u0434\u0432\u0430\u0449\u0438 \u043E\u0442 \u043D\u0430\u0448\u0438\u044F \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u0441\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0438 \u043A\u0430\u0442\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "First Party Cookies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u0438 \u043D\u0430\u0439-\u043E\u0441\u043D\u043E\u0432\u043D\u043E \u0446\u0435\u043B\u044F\u0442 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u0441\u0435\u0441\u0438\u044F\u0442\u0430, \u0434\u043E\u043A\u0430\u0442\u043E \u0440\u0430\u0437\u0433\u043B\u0435\u0436\u0434\u0430\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0442\u0435 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u2013 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043C\u0435 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C, \u0437\u0430 \u0434\u0430 \u0441\u044A\u0445\u0440\u0430\u043D\u0438\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0432 \u043A\u043E\u043B\u0438\u0447\u043A\u0430\u0442\u0430. \u0414\u0440\u0443\u0433\u0438 \u0446\u0435\u043B\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u0442\u044F\u0445\u043D\u0430\u0442\u0430 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430 \u0441\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0412\u044A\u0437\u043C\u043E\u0436\u0435\u043D \u0438 \u043B\u0435\u0441\u0435\u043D \u0432\u0445\u043E\u0434 \u0432\u044A\u0432 \u0412\u0430\u0448\u0438\u044F \u043F\u043E\u0442\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u043E\u0434\u0441\u0438\u0433\u0443\u0440\u044F\u0432\u0430\u043D\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0430 \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0411\u0435\u0437 \u0442\u043E\u0437\u0438 \u0442\u0438\u043F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043D\u0430\u0448\u0438\u044F\u0442 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0443\u0441\u043B\u0443\u0433\u0430\u0442\u0430, \u043A\u043E\u044F\u0442\u043E \u0412\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044F\u043C\u0435 \u043D\u0435 \u0431\u0438 \u043C\u043E\u0433\u043B\u0430 \u0434\u0430 \u043E\u043F\u0435\u0440\u0438\u0440\u0430 \u0441 \u043F\u044A\u043B\u043D\u0438\u0442\u0435 \u0441\u0438 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u043D\u043E\u0441\u0442\u0438.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0414\u0440\u0443\u0433\u0438 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C, \u043A\u043E\u0438\u0442\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043C\u0435, \u0438\u0434\u0432\u0430\u0442 \u043E\u0442 \u0442\u0440\u0435\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438 \u0438 \u0441\u0435 \u043D\u0430\u0440\u0438\u0447\u0430\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Third Party Cookies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ". To\u0432\u0430 \u0441\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0411\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438 \u0437\u0430 \u0430\u043D\u0430\u043B\u0438\u0437 \u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " - \u0422\u0435\u0437\u0438 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u043D\u0438 \u043F\u043E\u043C\u0430\u0433\u0430\u0442 \u0434\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043C\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043D\u0430\u0448\u0438\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0434\u0430 \u043F\u0440\u043E\u0441\u043B\u0435\u0434\u044F\u0432\u0430\u043C\u0435 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0430\u0442\u0430 \u0438 \u043A\u043E\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u044F\u0442\u0430 \u0439. \u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043C\u0435 Google Analytics, \u0437\u0430 \u0434\u0430 \u043E\u0446\u0435\u043D\u0438\u043C \u043A\u0430\u043A \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0430\u0442 \u0441 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u2013 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 \u0437\u0430 \u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430 \u0434\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C \u0434\u0430\u043B\u0438 \u0441\u0442\u0435 \u0440\u0430\u0437\u0433\u043B\u0435\u0436\u0434\u0430\u043B\u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043A\u043E\u043B\u043A\u043E \u0432\u0440\u0435\u043C\u0435 \u0441\u0442\u0435 \u043F\u0440\u0435\u043A\u0430\u0440\u0430\u043B\u0438 \u0432 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430 \u0438\u043B\u0438 \u0434\u0430\u043B\u0438 \u0441\u0442\u0435 \u043E\u0442\u0432\u043E\u0440\u0438\u043B\u0438 \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u043D \u043E\u0442 \u043D\u0430\u0441 \u0438\u043C\u0435\u0439\u043B. \u0422\u043E\u0432\u0430 \u043D\u0438 \u043F\u043E\u043C\u0430\u0433\u0430 \u0434\u0430 \u0412\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u0441\u0430\u043C\u043E \u0442\u0430\u0437\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043A\u043E\u044F\u0442\u043E \u0412\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0432\u0430, \u043F\u043E\u0434\u043E\u0431\u0440\u044F\u0432\u0430\u0439\u043A\u0438 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0430 \u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430. \u041F\u043E\u0432\u0435\u0447\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0442\u0443\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0411\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438 \u043D\u0430 \u0441\u043E\u0446\u0438\u0430\u043B\u043D\u0438 \u043C\u0440\u0435\u0436\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " - \u0422\u0435\u0437\u0438 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u0441\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0430\u0442 \u043E\u0442 \u0441\u043E\u0446\u0438\u0430\u043B\u043D\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438 \u043A\u0430\u0442\u043E Facebook, Twitter, G+, Pinterest, YouTube \u0438 \u0446\u0435\u043B\u044F\u0442 \u0434\u0430 \u043E\u0441\u0438\u0433\u0443\u0440\u044F\u0442 \u0438\u043B\u0438 \u043F\u043E\u0434\u043E\u0431\u0440\u044F\u0442 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0430 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430. \u0422\u0430\u043A\u0438\u0432\u0430 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u0430 \u0443\u0441\u043B\u0443\u0433\u0438, \u043A\u043E\u0438\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430\u0442 \u0432\u044A\u0437\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u0444\u0430\u0439\u043B\u043E\u0432\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u0442 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438, \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0430\u0442 \u0431\u0443\u0442\u043E\u043D\u0438 \u0437\u0430 \u0445\u0430\u0440\u0435\u0441\u0432\u0430\u043D\u0435 \u0438\u043B\u0438 \u0441\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435 \u0438 \u0434\u0440. \u041D\u0438\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043C\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u043D\u0438\u0442\u0435 \u043C\u0440\u0435\u0436\u0438, \u0437\u0430 \u0434\u0430 \u043F\u043E\u0434\u043E\u0431\u0440\u0438\u043C \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u0412\u0438 \u0441 \u043D\u0430\u0448\u0438\u044F \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0434\u0430 \u043E\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0438\u043C \u043E\u0449\u0435 \u043F\u043E-\u0431\u043B\u0438\u0437\u043A\u0430 \u0432\u0440\u044A\u0437\u043A\u0430 \u0441 \u0412\u0430\u0441, \u043D\u0430\u0448\u0438\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0438. \u041C\u043E\u043B\u044F, \u0438\u043C\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u0432\u0438\u0434, \u0447\u0435 \u043D\u044F\u043A\u043E\u0438 \u043E\u0442 \u0442\u0435\u0437\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438, \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u043E\u0449\u0435 \u0437\u0430 \u043D\u0435\u0449\u0430 \u043A\u0430\u0442\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430, \u0430\u043D\u0430\u043B\u0438\u0437\u0438 \u0438 \u043F\u0440\u043E\u0443\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 \u043F\u0430\u0437\u0430\u0440\u0430. \u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u0435 \u0412\u0430\u0448\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u043D\u0438\u044F \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435 \u0437\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0432\u044A\u0432 \u0444\u0435\u0439\u0441\u0431\u0443\u043A \u043E\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0442\u0443\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0411\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " - \u0420\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u0442\u0435 \"\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\" \u043D\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430\u0442 \u0434\u0430 \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u043C \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u0441\u0438 \u043A\u044A\u043C \u0412\u0430\u0441 \u0438 \u0412\u0430\u0448\u0438\u0442\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0438. \u0422\u0430\u043A\u0430 \u043C\u043E\u0436\u0435\u043C \u0434\u0430 \u0431\u044A\u0434\u0435\u043C \u0441\u0438\u0433\u0443\u0440\u043D\u0438, \u0447\u0435 \u0449\u0435 \u0412\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u043F\u043E-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0438 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432 \u0431\u044A\u0434\u0435\u0449\u0435. \u0422\u043E\u0437\u0438 \u0442\u0438\u043F \"\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\" \u0437\u0430\u043F\u043E\u043C\u043D\u044F\u0442, \u0447\u0435 \u0441\u0442\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u043B\u0438 \u0441\u0430\u0439\u0442\u0430 \u043D\u0438 \u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438/\u0438\u043B\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0442 \u043D\u0435\u0433\u043E. \u0422\u0430\u043A\u0430 \u043D\u0438\u0435 \u043C\u043E\u0436\u0435\u043C \u0434\u0430 \u0441\u044A\u043E\u0431\u0440\u0430\u0437\u0438\u043C \u0441 \u0442\u043E\u0432\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0412\u0438 \u043F\u043E\u043A\u0430\u0437\u0432\u0430\u043C\u0435. \u0412\u044A\u043F\u0440\u0435\u043A\u0438, \u0447\u0435 \u0442\u0435\u0437\u0438 \"\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\" \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u043B\u0435\u0434\u044F\u0442 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0442\u0430 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E \u0412\u0438 \u043D\u0430 \u043D\u0430\u0448\u0438\u044F \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u0438 \u0434\u0440\u0443\u0433\u0438 \u0441\u0430\u0439\u0442\u043E\u0432\u0435, \u0442\u0435 \u043E\u0431\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u043E \u043D\u0435 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0412\u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u0442 \u043B\u0438\u0447\u043D\u043E. \u0411\u0435\u0437 \u0442\u0435\u0437\u0438 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u0440\u0435\u043A\u043B\u0430\u043C\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0432\u0438\u0436\u0434\u0430\u0442\u0435, \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0438 \u0437\u0430 \u0412\u0430\u0441. \u0417\u0430 \u0434\u0430 \u0433\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0430\u0442\u0435, \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442\u0435 \u0441\u043B\u0435\u0434\u043D\u0438\u044F \u043B\u0438\u043D\u043A: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "www.youronlinechoices.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u041A\u0430\u043A \u0434\u0430 \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u0442\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0414\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u0438 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u201E\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u201C \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0432\u0430\u0442\u0435 \u0447\u0440\u0435\u0437 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435 \u043D\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0438\u044F \u043E\u0442 \u0412\u0430\u0441 \u0431\u0440\u0430\u0443\u0437\u044A\u0440. \u041A\u0430\u0442\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u0412\u0438\u0435 \u0438\u043C\u0430\u0442\u0435 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0442\u0430 \u0434\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u0442\u0435 \u0441\u0432\u043E\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u043D\u0438\u044F \u0437\u0430 \u0432\u0441\u0435\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u044A\u0440 \u0438/\u0438\u043B\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E, \u043A\u043E\u0438\u0442\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442\u0435 \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u0418\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u043D\u0430\u0443\u0447\u0438\u0442\u0435 \u043F\u043E\u0432\u0435\u0447\u0435 \u0437\u0430 \"\u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438\u0442\u0435\", \u043A\u0430\u043A \u0434\u0430 \u0433\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0430\u0442\u0435, \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u0442\u0435 \u0438\u043B\u0438 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435? \u0417\u0430 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u0441\u0435\u0442\u0435\u0442\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "www.aboutcookies.org");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, TermsComponent_ng_template_53_ng_template_89_Template, 2, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} }
var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(); };
    TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 54, vars: 0, consts: [[1, "info"], [1, "info-item"], [1, "info-item-icon"], [1, "far", "fa-clock", "fa-5x"], [1, "info-item-text"], [1, "fas", "fa-truck", "fa-5x"], [1, "fas", "fa-hand-holding-usd", "fa-5x"], ["acc", "ngbAccordion"], ["title", "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442"], ["ngbPanelContent", ""], ["title", "\u041E\u0431\u0449\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F"], ["title", "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 \u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043A\u0438"], [1, "gs-rtf"], ["href", "http://www.cpdp.bg", "target", "_blank", "rel", "noopener"], [2, "text-align", "justify"], ["lang", "en-US", 1, "western"], ["lang", "bg-BG", "align", "justify", 1, "western"], ["name", "__DdeLink__32_864784154"], ["lang", "bg-BG"], ["align", "justify", 1, "western"], [2, "color", "#000000"], [2, "color", "#0000ff"], ["href", "http://www.smolyan/", 1, "western"], ["href", "http://www.smolyanobyad.com/", 1, "western"], ["lang", "en-US", "align", "justify", 1, "western"], [1, "western"], ["href", "mailto:delivery@smolyanobyad.com", 1, "western"], ["href", "https://support.google.com/analytics/answer/6004245?hl=bg", "target", "_blank", "rel", "noopener"], ["href", "https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen", "target", "_blank", "rel", "noopener"], ["href", "http://www.youronlinechoices.com/bg/", "target", "_blank", "rel", "noopener"], ["href", "https://www.aboutcookies.org"], ["isAlreadyVip", ""], ["class", "already-vip-player", 4, "ngIf"], [1, "already-vip-player"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041E\u0442 \u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A \u0434\u043E \u043F\u0435\u0442\u044A\u043A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u0440\u044A\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0438 \u0434\u043E ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "11:20\u0447.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0441\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0430 \u0434\u043E ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "12:30\u0447.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u0438\u0442\u0435 \u043F\u043E\u0440\u044A\u0447\u043A\u0438 \u0441\u043B\u0435\u0434 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "11:20\u0447.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0441\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0441\u043B\u0435\u0434 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "12:30\u0447.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "article", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "article", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0414\u043E\u0441\u0442\u0430\u0432\u044F\u043C\u0435 \u0441\u0430\u043C\u043E \u0432 \u0433\u0440.\u0421\u043C\u043E\u043B\u044F\u043D");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0420\u0435\u0434\u043E\u0432\u043D\u0430\u0442\u0430 \u0446\u0435\u043D\u0430 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0435 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "0.50\u043B\u0432.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u043E\u0440\u044A\u0447\u043A\u0438 \u0437\u0430 \u043A\u0432\u0430\u0440\u0430\u043B\u0438\u0442\u0435: \u041A\u0430\u043F\u0442\u0430\u0436\u0430, \u0420\u0430\u0439\u043A\u043E\u0432\u043E \u0438 \u0423\u0441\u0442\u043E\u0432\u043E, \u043A\u043E\u0438\u0442\u043E \u0441\u0430 \u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u043F\u043E\u0434 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "10\u043B\u0432.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ", \u0449\u0435 \u0441\u0435 \u0442\u0430\u043A\u0441\u0443\u0432\u0430\u0442 \u0441 \u0446\u0435\u043D\u0430 \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 - ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "1.50\u043B\u0432.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "article", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "article", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0412\u0438\u0435 \u0441\u043F\u0435\u0441\u0442\u044F\u0432\u0430\u0442\u0435");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0412\u0441\u0438\u0447\u043A\u0438 \u043F\u0440\u0438\u0431\u043E\u0440\u0438 \u0437\u0430 \u0445\u0440\u0430\u043D\u0430, \u0442\u043E\u0440\u0431\u0438\u0447\u043A\u0438, \u0441\u0430\u043B\u0444\u0435\u0442\u043A\u0438 \u0438 \u0441\u044A\u0434\u0447\u0435\u0442\u0430 \u0441\u0430 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u0438!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngb-accordion", null, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ngb-panel", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TermsComponent_ng_template_49_Template, 982, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ngb-panel", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TermsComponent_ng_template_51_Template, 460, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ngb-panel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TermsComponent_ng_template_53_Template, 91, 0, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".info[_ngcontent-%COMP%] {\n  display:flex;\n  flex-direction: column;\n  max-width: 80%;\n  width: 100%;\n  margin:100px auto;\n  font-size: .8rem;\n  letter-spacing: 1.3px;\n}\n\n.info-item[_ngcontent-%COMP%]{\n  display: flex;\n  align-items:center;\n  margin: 10px auto;\n  width:50%;\n}\n\ni[_ngcontent-%COMP%] {\n  padding:15px;\n}\n\n.info-item-icon[_ngcontent-%COMP%]{\n  width: 25%;\n  background: #E25E20 ;\n  color:white;\n  text-align: center;\n  margin-right: 15px;\n}\n\n.info-item-text[_ngcontent-%COMP%]{\n  padding: 10px;\n  width: 80%;\n}\n\n.info-item-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin: 0;\n}\n\n.info-item-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  margin: 0 0 10px 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n  .card {\n  text-align: center;\n}\n\n  .card-header button {\n  padding: 20px 100px;\n  width: 98%;\n  background: white;\n  border: none;\n  border-radius: 6px;;\n  box-shadow: 0px 0px 5px 0px;\n  font-size: 1.3rem;\n}\n\n  .gs-rtf {\n  margin:10px;\n}\n\n  .card-header button:focus {\n  outline: unset;\n}\n\n  .card-header button:hover {\n  background: #E25E20;\n  color:white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InRlcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46MTAwcHggYXV0bztcbiAgZm9udC1zaXplOiAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xufVxuXG4uaW5mby1pdGVte1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDo1MCU7XG59XG5cbmkge1xuICBwYWRkaW5nOjE1cHg7XG59XG5cbi5pbmZvLWl0ZW0taWNvbntcbiAgd2lkdGg6IDI1JTtcbiAgYmFja2dyb3VuZDogI0UyNUUyMCA7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmluZm8taXRlbS10ZXh0e1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogODAlO1xufVxuXG4uaW5mby1pdGVtLXRleHQgcHtcbiAgbWFyZ2luOiAwO1xufVxuLmluZm8taXRlbS10ZXh0IGgze1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuOjpuZy1kZWVwIC5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbjo6bmctZGVlcCAuY2FyZC1oZWFkZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMjBweCAxMDBweDtcbiAgd2lkdGg6IDk4JTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4OztcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuOjpuZy1kZWVwIC5ncy1ydGYge1xuICBtYXJnaW46MTBweDtcbn1cblxuOjpuZy1kZWVwIC5jYXJkLWhlYWRlciBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiB1bnNldDtcbn1cbjo6bmctZGVlcCAuY2FyZC1oZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0UyNUUyMDtcbiAgY29sb3I6d2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
    return TermsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms',
                templateUrl: './terms.component.html',
                styleUrls: ['./terms.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MrCo":
/*!**************************************!*\
  !*** ./src/app/food/food.service.ts ***!
  \**************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




var FoodService = /** @class */ (function () {
    function FoodService(http) {
        this.http = http;
        this.initialMenu = {
            daily_menu: []
        };
        this.initialCart = {
            products: [],
            totalPrice: 0
        };
        this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialMenu);
    }
    FoodService.prototype.getDailyMenu = function () {
        var _this = this;
        this.http.get('/').subscribe({
            next: function (dailyMenu) {
                _this.menu$.next(dailyMenu);
            }
        });
    };
    FoodService.ɵfac = function FoodService_Factory(t) { return new (t || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    FoodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FoodService, factory: FoodService.ɵfac });
    return FoodService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _click_outside_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-outside.directive */ "s1Eu");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]],
                exports: [
                    _click_outside_directive__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/navigation/navigation.component */ "bh3X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'smolyanobyad';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["main[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




var UserService = /** @class */ (function () {
    function UserService() {
        this.initialCart = {
            products: [],
            totalPrice: 0
        };
        this.initialUser = {
            username: 'stanchev89',
            password: '123123',
            address: [{ location: 'Varna,Lyuben Karavelov 50, ap 8', delivery: 1.5 }, {
                    location: 'Smolyan, ul. Chan 3, ap 43',
                    delivery: 0.5
                }],
            phone: '+359876969696',
            email: 'stanchev89@abv.bg',
            orders: [],
            cart: this.initialCart
        };
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialUser);
        this.userData$ = this.user$.asObservable();
    }
    UserService.prototype.calculateCartTotalPrice = function (cart) {
        cart.totalPrice = 0;
        cart.products.forEach(function (product) {
            cart.totalPrice += product.quantity * product.price;
        });
        return cart.totalPrice;
    };
    UserService.prototype.objectsEqual = function (o1, o2) {
        var _this = this;
        return typeof o1 === 'object' && Object.keys(o1).length > 0
            ? Object.keys(o1).length === Object.keys(o2).length
                && Object.keys(o1).every(function (p) { return _this.objectsEqual(o1[p], o2[p]); })
            : o1 === o2;
    };
    UserService.prototype.arraysEqual = function (arr1, arr2) {
        var _this = this;
        return arr1.length === arr2.length && arr1.every(function (o, idx) { return _this.objectsEqual(o, arr2[idx]); });
    };
    UserService.prototype.addToCart = function (newProduct) {
        var _this = this;
        this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            var cart = user.cart;
            var exist = cart.products.find(function (prod) {
                return prod.name === newProduct.name
                    && prod.price === newProduct.price
                    && _this.arraysEqual(prod.selected_options, newProduct.selected_options);
            });
            if (exist) {
                exist.quantity += newProduct.quantity;
            }
            else {
                cart.products = cart.products.concat(newProduct);
            }
            cart.totalPrice = _this.calculateCartTotalPrice(cart);
            return _this.user$.next(user);
        });
    };
    UserService.prototype.updateCartItem = function (cartItem) {
        var _this = this;
        this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            var cart = user.cart;
            var allItems = cart.products;
            allItems.forEach(function (item) {
                if (item.name === cartItem.name && _this.arraysEqual(item.selected_options, cartItem.selected_options)) {
                    item.quantity = cartItem.quantity;
                }
            });
            cart.totalPrice = _this.calculateCartTotalPrice(cart);
            _this.user$.next(user);
        });
    };
    UserService.prototype.removeItemFromCart = function (itemToRemove) {
        var _this = this;
        this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            var cart = user.cart;
            var allItems = cart.products;
            allItems.forEach(function (item, index) {
                if (item.name === itemToRemove.name && _this.arraysEqual(item.selected_options, itemToRemove.selected_options)) {
                    cart.products.splice(index, 1);
                }
            });
            cart.totalPrice = _this.calculateCartTotalPrice(cart);
            _this.user$.next(user);
        });
    };
    UserService.prototype.clearCart = function () {
        var _this = this;
        this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            user.cart = { products: [], totalPrice: 0 };
            _this.user$.next(user);
        });
    };
    UserService.prototype.addUserAddress = function (newAddress) {
        var _this = this;
        this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            var existAddress = user.address.find(function (a) { return a.location === newAddress.location; });
            if (!existAddress) {
                user.address.push(newAddress);
                user.address = user.address.reverse();
                _this.user$.next(user);
            }
        });
    };
    UserService.prototype.deleteUserAddress = function (addressToDelete) {
        var _this = this;
        this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            var index;
            var existAddress = user.address.find(function (a, i) {
                index = i;
                return a.location === addressToDelete.location;
            });
            if (existAddress) {
                user.address.splice(index, 1);
                _this.user$.next(user);
            }
        });
    };
    UserService.prototype.editUserData = function (data) {
        var _this = this;
        this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            for (var prop in data) {
                user[prop] = data[prop];
            }
            _this.user$.next(user);
        });
    };
    UserService.prototype.finishOrder = function (orderData) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            var newEmptyCart = {
                products: [],
                totalPrice: 0
            };
            var newOrder = {
                cart: user.cart.products,
                price: user.cart.totalPrice,
                address: orderData.address,
                payment: orderData.payment,
                date: Date.now(),
                successful_payment: orderData.payment === 'cash' ? true : false,
            };
            user.orders.push(newOrder);
            user.cart = newEmptyCart;
            _this.user$.next(user);
        }));
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YSYA":
/*!*********************************************!*\
  !*** ./src/app/core/news/news.component.ts ***!
  \*********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 2, vars: 0, template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "news works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLmNvbXBvbmVudC5jc3MifQ== */"] });
    return NewsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YpL4":
/*!*******************************************************!*\
  !*** ./src/app/user/cart-page/cart-page.component.ts ***!
  \*******************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart/cart.component */ "j6+7");



var CartPageComponent = /** @class */ (function () {
    function CartPageComponent() {
    }
    CartPageComponent.prototype.ngOnInit = function () {
    };
    CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(); };
    CartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["app-cart-page"]], decls: 2, vars: 0, consts: [[1, "cart"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"]], styles: [".cart[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: 100px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjYXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbn0iXX0= */"] });
    return CartPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-page',
                templateUrl: './cart-page.component.html',
                styleUrls: ['./cart-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing-module */ "ifAB");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _food_food_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food/food.module */ "d3P2");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.service */ "VGjC");
/* harmony import */ var _food_food_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food/food.service */ "MrCo");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _food_food_service__WEBPACK_IMPORTED_MODULE_9__["FoodService"]], imports: [[
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _food_food_module__WEBPACK_IMPORTED_MODULE_6__["FoodModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _food_food_module__WEBPACK_IMPORTED_MODULE_6__["FoodModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _food_food_module__WEBPACK_IMPORTED_MODULE_6__["FoodModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
                ],
                providers: [_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _food_food_service__WEBPACK_IMPORTED_MODULE_9__["FoodService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a/c8":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-address-item/user-address-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserAddressItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressItemComponent", function() { return UserAddressItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/confirm-dialog/confirm-dialog.component */ "IQ6F");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




var UserAddressItemComponent = /** @class */ (function () {
    function UserAddressItemComponent(dialog) {
        this.dialog = dialog;
        this.deleteRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserAddressItemComponent.prototype.deleteItem = function () {
        var _this = this;
        var confirmDialog = this.dialog.open(_core_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            data: { title: 'Потвърждение',
                message: 'Сигурни ли сте, че искате да изтриете адреса?',
            }
        });
        confirmDialog.afterClosed().subscribe(function (result) {
            if (result === 'true') {
                _this.deleteRequest.emit(_this.item);
            }
        });
    };
    UserAddressItemComponent.ɵfac = function UserAddressItemComponent_Factory(t) { return new (t || UserAddressItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
    UserAddressItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAddressItemComponent, selectors: [["app-user-address-item"]], inputs: { item: "item" }, outputs: { deleteRequest: "deleteRequest" }, decls: 6, vars: 1, consts: [[1, "address-wrapper"], [1, "fas", "fa-home"], [1, "btn-delete-address", 3, "click"], [1, "far", "fa-trash-alt"]], template: function UserAddressItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressItemComponent_Template_button_click_4_listener() { return ctx.deleteItem(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.location);
        } }, styles: [".address-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;;\n    align-items: center;\n    text-align: center;\n    position: relative;\n    padding: 10px;\n}\n.address-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n  *:focus {\n    outline: unset;\n}\n.address-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n.btn-delete-address[_ngcontent-%COMP%] {\n    border-radius: 6px;\n    border:none;\n    background: #E25E20;\n    color: white;\n    font-weight: bold;\n    padding: 1px;\n}\n.btn-delete-address[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background: white;\n    color: #E25E20;\n    border: 1px solid #E25E20;\n    box-shadow: 0 0 3px 0;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWRkcmVzcy1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2QiLCJmaWxlIjoidXNlci1hZGRyZXNzLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5hZGRyZXNzLXdyYXBwZXIgcCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogdW5zZXQ7XG59XG5cbi5hZGRyZXNzLXdyYXBwZXIgaSB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uYnRuLWRlbGV0ZS1hZGRyZXNzIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDogI0UyNUUyMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMXB4O1xufVxuLmJ0bi1kZWxldGUtYWRkcmVzczpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjRTI1RTIwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMjVFMjA7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAwO1xuICAgIHBhZGRpbmc6IDA7XG59Il19 */"] });
    return UserAddressItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAddressItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-address-item',
                templateUrl: './user-address-item.component.html',
                styleUrls: ['./user-address-item.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "a0A8":
/*!*********************************************!*\
  !*** ./src/app/food/dish/dish.component.ts ***!
  \*********************************************/
/*! exports provided: DishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishComponent", function() { return DishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/user.service */ "VGjC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DishComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1);
} }
var DishComponent = /** @class */ (function () {
    function DishComponent(userService) {
        this.userService = userService;
        this.cartItems = this.userService.user$.subscribe(function (user) { return user.cart.products; });
    }
    DishComponent.prototype.ngOnInit = function () {
    };
    DishComponent.prototype.addToCart = function () {
        var objToCart = {
            name: this.dish.name,
            price: this.dish.price,
            options: this.dish.options,
            quantity: 1,
            selected_options: []
        };
        this.userService.addToCart(objToCart);
    };
    DishComponent.ɵfac = function DishComponent_Factory(t) { return new (t || DishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
    DishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DishComponent, selectors: [["app-dish"]], inputs: { dish: "dish" }, decls: 18, vars: 5, consts: [[1, "dish"], ["alt", "", 3, "src"], [1, "dish-content"], [1, "products"], [4, "ngFor", "ngForOf"], [1, "dish-buy"], [1, "dish-buy-options"], [1, "dish-buy-order"], [1, "price"], [1, "price-btn", 3, "click"]], template: function DishComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DishComponent_li_8_Template, 2, 1, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "article", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "article", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DishComponent_Template_button_click_16_listener() { return ctx.addToCart(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0414\u043E\u0431\u0430\u0432\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.dish.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dish.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dish.products);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dish.weight, " \u0433\u0440.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dish.price.toFixed(2), " \u043B\u0432.");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dish[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: .7rem;\n  align-items: center;\n  \n  border-bottom: 1px solid #E25E20;\n  border-top: 1px solid #E25E20;\n  border-radius: 25px;\n  max-width: 100%;\n  height: 100px;\n  overflow: hidden;\n  text-align: center;\n  justify-content: space-between;\n  margin:10px;\n}\n\n.dish-content[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.dish-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100px;\n  max-width: 20%;\n  height: 100px;\n  max-height: 90%;\n  border-radius: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 10px;\n}\n\nul[_ngcontent-%COMP%] {\n  max-height: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 3px;\n  padding-left: 0;\n  list-style-position: inside;\n  align-items: center;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right:5px;\n}\n\nli[_ngcontent-%COMP%]::marker {\n  margin:0;\n}\n\np[_ngcontent-%COMP%] {\n  margin:3px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin:0;\n}\n\n.dish-buy[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.price[_ngcontent-%COMP%] {\n  background: #E25E20;\n  padding: 5px 10px;\n  color:white;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  margin: 0;\n\n}\n\n.price-btn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 100%;\n  background: #8D9F3E;\n  padding: 10px;\n  color:white;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border: none;\n  margin-top: -2px;\n\n}\n\n.price-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.dish-buy-order[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.price-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color:#8D9F3E;\n  border: 2px solid #8D9F3E;\n  border-top:none;\n  padding: 9px;\n}\n\n  .price-btn:focus {\n  outline: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsU0FBUzs7QUFFWDs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJkaXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kaXNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAuN3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjRTI1RTIwOyovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTI1RTIwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UyNUUyMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOjEwcHg7XG59XG5cbi5kaXNoLWNvbnRlbnQge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmRpc2gtY29udGVudCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG51bCB7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnVsIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cblxubGk6Om1hcmtlciB7XG4gIG1hcmdpbjowO1xufVxucCB7XG4gIG1hcmdpbjozcHg7XG59XG5cbmgzIHtcbiAgbWFyZ2luOjA7XG59XG4uZGlzaC1idXkge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucHJpY2Uge1xuICBiYWNrZ3JvdW5kOiAjRTI1RTIwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6d2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAwO1xuXG59XG4ucHJpY2UtYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjOEQ5RjNFO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG5cbn1cblxuLnByaWNlLWJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpc2gtYnV5LW9yZGVyIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnByaWNlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjojOEQ5RjNFO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOEQ5RjNFO1xuICBib3JkZXItdG9wOm5vbmU7XG4gIHBhZGRpbmc6IDlweDtcbn1cblxuOjpuZy1kZWVwIC5wcmljZS1idG46Zm9jdXMge1xuICBvdXRsaW5lOiB1bnNldDtcbn0iXX0= */"] });
    return DishComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dish',
                templateUrl: './dish.component.html',
                styleUrls: ['./dish.component.css']
            }]
    }], function () { return [{ type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, { dish: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "adY0":
/*!*************************************************!*\
  !*** ./src/app/food/dishes/dishes.component.ts ***!
  \*************************************************/
/*! exports provided: DishesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesComponent", function() { return DishesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dish_dish_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dish/dish.component */ "a0A8");




function DishesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dish", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dish_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dish", dish_r5);
} }
function DishesComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dish", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dish_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dish", dish_r6);
} }
function DishesComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dish", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dish_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dish", dish_r7);
} }
function DishesComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dish", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dish_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dish", dish_r8);
} }
function DishesComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dish", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dish_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dish", dish_r9);
} }
var DishesComponent = /** @class */ (function () {
    function DishesComponent() {
    }
    DishesComponent.prototype.ngOnInit = function () {
    };
    DishesComponent.prototype.selectCategory = function (cat) {
        console.log(this.dishes);
        return this.dishes.filter(function (dish) { return dish.category === cat; });
    };
    DishesComponent.ɵfac = function DishesComponent_Factory(t) { return new (t || DishesComponent)(); };
    DishesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DishesComponent, selectors: [["app-dishes"]], inputs: { dishes: "dishes" }, decls: 26, vars: 5, consts: [[1, "food-list"], [1, "salads"], [1, "food-list-title"], [4, "ngFor", "ngForOf"], [1, "soups"], [1, "main-dishes"], [1, "deserts"], [1, "drinks"], [3, "dish"]], template: function DishesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u0430\u043B\u0430\u0442\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DishesComponent_li_5_Template, 2, 1, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0421\u0443\u043F\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DishesComponent_li_10_Template, 2, 1, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0441\u043D\u043E\u0432\u043D\u0438 \u044F\u0441\u0442\u0438\u044F");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DishesComponent_li_15_Template, 2, 1, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0414\u0435\u0441\u0435\u0440\u0442\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DishesComponent_li_20_Template, 2, 1, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041D\u0430\u043F\u0438\u0442\u043A\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DishesComponent_li_25_Template, 2, 1, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectCategory("salad"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectCategory("soup"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectCategory("main-dish"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectCategory("desert"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectCategory("drink"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _dish_dish_component__WEBPACK_IMPORTED_MODULE_2__["DishComponent"]], styles: [".food-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding:30px;\n  padding-top:10px;\n}\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  width: 100%;\n  padding: 0;\n  margin:0;\n}\n.food-list-title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background: #8D9F3E;\n  color: white;\n  border-radius: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2hlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUdBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJkaXNoZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOjMwcHg7XG4gIHBhZGRpbmctdG9wOjEwcHg7XG59XG5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46MDtcbn1cblxuXG4uZm9vZC1saXN0LXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzhEOUYzRTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xufVxuIl19 */"] });
    return DishesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DishesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dishes',
                templateUrl: './dishes.component.html',
                styleUrls: ['./dishes.component.css']
            }]
    }], function () { return []; }, { dishes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "bh3X":
/*!*********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 39, vars: 0, consts: [[1, "container-header"], [1, "container-left"], ["src", "./assets/logo.png", "alt", "", "routerLink", "/", 1, "logo"], [1, "container-middle"], [1, "nav-bar"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/terms"], ["routerLink", "/news"], ["routerLink", "contacts"], [1, "container-right"], [1, "user-bar"], ["routerLink", "/profile"], ["routerLink", "/cart"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041E\u0431\u0435\u0434\u043D\u043E \u043C\u0435\u043D\u044E");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0417\u0430 \u043D\u0430\u0441");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041D\u043E\u0432\u0438\u043D\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "article", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "article", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u0440\u043E\u0444\u0438\u043B");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u041A\u043E\u043B\u0438\u0447\u043A\u0430");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0412\u0445\u043E\u0434");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0418\u0437\u0445\u043E\u0434");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".container-header[_ngcontent-%COMP%]{\n  font-size: 1.1rem;\n  position: relative;\n  margin: 20px auto;\n  display: flex;\n  flex-wrap:wrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  border-bottom: 2px solid #8D9F3E;\n  padding-bottom: 5px;\n}\n.container-left[_ngcontent-%COMP%], .container-right[_ngcontent-%COMP%]{\n  display: flex;\n  width:30%;\n}\n.container-middle[_ngcontent-%COMP%] {\n  display: flex;\n  width:40%\n}\n.container-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap:wrap;\n  font-size: .9rem;\n}\n.container-left[_ngcontent-%COMP%] {\n  align-self:flex-end;\n}\n.container-header[_ngcontent-%COMP%]::after {\n  bottom: -6px;\n  position: absolute;\n  content: \"\";\n  width: 99%;\n  border: 1px solid #8D9F3E;\n  flex-basis: 90%;\n  right: .5%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 200px;\n  max-height: 70px;\n  margin-bottom: 15px;\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin-bottom: 0px;\n  padding:0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding:10px;\n  padding-bottom: 0px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color:black;\n  padding:0;\n}\nimg[_ngcontent-%COMP%]:focus {\n  outline:unset;\n}\nimg[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQSwwQ0FBMEM7QUFDMUMsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixNQUFNO0FBQ04scUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QixNQUFNO0FBQ04sSUFBSSIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWhlYWRlcntcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDp3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzhEOUYzRTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5jb250YWluZXItbGVmdCxcbi5jb250YWluZXItcmlnaHR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOjMwJTtcbn1cbi5jb250YWluZXItbWlkZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6NDAlXG59XG4uY29udGFpbmVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC13cmFwOndyYXA7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG59XG4uY29udGFpbmVyLWxlZnQge1xuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xufVxuXG4uY29udGFpbmVyLWhlYWRlcjo6YWZ0ZXIge1xuICBib3R0b206IC02cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDk5JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhEOUYzRTtcbiAgZmxleC1iYXNpczogOTAlO1xuICByaWdodDogLjUlO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOjA7XG59XG5cbnVsIGxpIHtcbiAgcGFkZGluZzoxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjpibGFjaztcbiAgcGFkZGluZzowO1xufVxuXG5pbWc6Zm9jdXMge1xuICBvdXRsaW5lOnVuc2V0O1xufVxuXG5pbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7Ki9cbi8qICAuY29udGFpbmVyIHsqL1xuLyogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuLyogIH0qL1xuLyogIC5jb250YWluZXItbGVmdCwqL1xuLyogIC5jb250YWluZXItbWlkZGxlLCovXG4vKiAgLmNvbnRhaW5lci1yaWdodCwqL1xuLyogIHVseyovXG4vKiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG4vKiAgfSovXG4vKn0qL1xuIl19 */"] });
    return NavigationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "d3P2":
/*!*************************************!*\
  !*** ./src/app/food/food.module.ts ***!
  \*************************************/
/*! exports provided: FoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodModule", function() { return FoodModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "D+/u");
/* harmony import */ var _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes/dishes.component */ "adY0");
/* harmony import */ var _dish_dish_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dish/dish.component */ "a0A8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.module */ "7UCR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");









var FoodModule = /** @class */ (function () {
    function FoodModule() {
    }
    FoodModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FoodModule });
    FoodModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FoodModule_Factory(t) { return new (t || FoodModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]] });
    return FoodModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FoodModule, { declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_3__["DishesComponent"], _dish_dish_component__WEBPACK_IMPORTED_MODULE_4__["DishComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _dishes_dishes_component__WEBPACK_IMPORTED_MODULE_3__["DishesComponent"], _dish_dish_component__WEBPACK_IMPORTED_MODULE_4__["DishComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hbDI":
/*!*******************************************************************!*\
  !*** ./src/app/user/add-new-address/add-new-address.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddNewAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewAddressComponent", function() { return AddNewAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AddNewAddressComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewAddressComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AddNewAddressComponent = /** @class */ (function () {
    function AddNewAddressComponent(userService) {
        this.userService = userService;
        this.addedNewAddres = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddNewAddressComponent.prototype.ngOnInit = function () {
    };
    AddNewAddressComponent.prototype.addNewAddress = function (data) {
        var priceMap = {
            smolyan: 0.5,
            raikovo: 1.5,
            ustovo: 1.5,
            kaptaja: 1.5
        };
        var newAddress = {
            location: data.newAddress,
            delivery: priceMap[data.region]
        };
        this.userService.addUserAddress(newAddress);
        this.addedNewAddres.emit();
    };
    AddNewAddressComponent.prototype.back = function () {
        this.backBtnClicked.emit();
    };
    AddNewAddressComponent.ɵfac = function AddNewAddressComponent_Factory(t) { return new (t || AddNewAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
    AddNewAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNewAddressComponent, selectors: [["app-add-new-address"]], inputs: { backBtn: "backBtn" }, outputs: { addedNewAddres: "addedNewAddres", backBtnClicked: "backBtnClicked" }, decls: 21, vars: 1, consts: [[1, "container"], [3, "ngSubmit"], ["newAddressForm", "ngForm"], ["for", "region"], ["name", "region", "id", "region", "ngModel", "smolyan"], ["value", "smolyan"], ["value", "raikovo"], ["value", "ustovo"], ["value", "kaptaja"], ["type", "text", "name", "newAddress", "id", "newAddress", "ngModel", "", "placeholder", "\u0412\u044A\u0432\u0435\u0434\u0435\u0442\u0435 \u0442\u043E\u0447\u0435\u043D \u0430\u0434\u0440\u0435\u0441..."], [1, "btn-wrapper"], ["class", "btn-add back", "type", "button", 3, "click", 4, "ngIf"], [1, "btn-add"], ["type", "button", 1, "btn-add", "back", 3, "click"]], template: function AddNewAddressComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043D\u0430 \u043D\u043E\u0432 \u0430\u0434\u0440\u0435\u0441");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewAddressComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); ctx.addNewAddress(_r0.value); return _r0.reset(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0440\u0435\u0433\u0438\u043E\u043D \u0432 \u0433\u0440.\u0421\u043C\u043E\u043B\u044F\u043D: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043C\u043E\u043B\u044F\u043D");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u043A\u0432.\u0420\u0430\u0439\u043A\u043E\u0432\u043E");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u043A\u0432.\u0423\u0441\u0442\u043E\u0432\u043E");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u043A\u0432.\u041A\u0430\u043F\u0442\u0430\u0436\u0430");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "article", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddNewAddressComponent_button_18_Template, 2, 0, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0414\u043E\u0431\u0430\u0432\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backBtn);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    width: 90%;\n    margin: 20px auto;\n}\nform[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\nh5[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n#region[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n    margin:10px;\n    border-radius: 6px;\n    border: 1px solid #8D9F3E;\n    padding:5px;\n}\ninput[_ngcontent-%COMP%] {\n    padding: 10px;\n    margin: 0 auto;\n    width: 80%;\n}\n#region[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n    width: 80px;\n    padding:10px;\n    font-weight: bold;\n    border: 1px solid #8D9F3E;\n    color:white;\n    background: #8D9F3E;\n    border-radius: 6px;\n    margin:10px;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n    background: white;\n    color: #8D9F3E;\n    border: 2px solid #8D9F3E;\n    padding: 9px;\n    cursor: pointer;\n    font-weight: bolder;\n    box-shadow: 0 0 5px 0;\n}\ni[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    top: 6px;\n    background: #E25E20;\n    padding: 3px 5px;\n    color: white;\n    border-radius: 100px;\n}\ni[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n#newAddress[_ngcontent-%COMP%] {\n    width: 90%;\n}\n.back[_ngcontent-%COMP%] {\n    background: #E25E20;\n    border-color: #E25E20;\n}\n.back[_ngcontent-%COMP%]:hover {\n    color: #E25E20;\n    border-color: #E25E20;\n}\n.btn-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctYWRkcmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJhZGQtbmV3LWFkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbn1cbmZvcm0ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5oNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jcmVnaW9uLGlucHV0IHtcbiAgICBtYXJnaW46MTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhEOUYzRTtcbiAgICBwYWRkaW5nOjVweDtcbn1cblxuaW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuI3JlZ2lvbjpob3ZlcixpbnB1dDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMDtcbn1cblxuLmJ0bi1hZGQge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEQ5RjNFO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQ6ICM4RDlGM0U7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjoxMHB4O1xufVxuXG4uYnRuLWFkZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICM4RDlGM0U7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhEOUYzRTtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwO1xufVxuXG5pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI0UyNUUyMDtcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmV3QWRkcmVzcyB7XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTI1RTIwO1xuICAgIGJvcmRlci1jb2xvcjogI0UyNUUyMDtcbn1cbi5iYWNrOmhvdmVyIHtcbiAgICBjb2xvcjogI0UyNUUyMDtcbiAgICBib3JkZXItY29sb3I6ICNFMjVFMjA7XG59XG4uYnRuLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */"] });
    return AddNewAddressComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-new-address',
                templateUrl: './add-new-address.component.html',
                styleUrls: ['./add-new-address.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, { addedNewAddres: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], backBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backBtnClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ifAB":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _food_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food/menu/menu.component */ "D+/u");
/* harmony import */ var _core_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/about/about.component */ "DgAN");
/* harmony import */ var _core_terms_terms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/terms/terms.component */ "J4gr");
/* harmony import */ var _core_news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/news/news.component */ "YSYA");
/* harmony import */ var _core_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/contacts/contacts.component */ "r+j4");
/* harmony import */ var _user_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/cart-page/cart-page.component */ "YpL4");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/profile/profile.component */ "D5oR");








var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _food_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]
    },
    {
        path: 'about',
        component: _core_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'terms',
        component: _core_terms_terms_component__WEBPACK_IMPORTED_MODULE_3__["TermsComponent"]
    },
    {
        path: 'news',
        component: _core_news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]
    },
    {
        path: 'contacts',
        component: _core_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]
    },
    {
        path: 'cart',
        component: _user_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_6__["CartPageComponent"]
    },
    {
        path: 'profile',
        component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "j6+7":
/*!*********************************************!*\
  !*** ./src/app/user/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_new_address_add_new_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-new-address/add-new-address.component */ "hbDI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








var _c0 = ["clickedInside"];
function CartComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.user$).cart.products.length);
} }
function CartComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CartComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u044F\u043C\u0430 \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0430\u0448\u0430\u0442\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430 \u0435 \u043F\u0440\u0438\u0435\u0442\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0438!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_template_9_article_0_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_9_article_0_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.clearCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_template_9_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_9_li_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var item_r18 = ctx.$implicit; var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.updateQuantity(item_r18, _r19.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0431\u043D\u043E\u0432\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_9_li_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var item_r18 = ctx.$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.removeItem(item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r18.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r18.quantity * item_r18.price).toFixed(2), " \u043B\u0432.");
} }
function CartComponent_ng_template_9_article_5_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_9_article_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u043E\u0440\u044A\u0447\u0430\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r15.user$).cart.totalPrice.toFixed(2), " \u043B\u0432.");
} }
function CartComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_ng_template_9_article_0_Template, 2, 0, "article", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_ng_template_9_li_3_Template, 16, 3, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_ng_template_9_article_5_Template, 6, 3, "article", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r6.user$).cart.products.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx_r6.user$).cart.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r6.user$).cart.products.length > 0);
} }
function CartComponent_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CartComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_template_11_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.showAddNewAddressTab ? _r9 : _r11);
} }
function CartComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-new-address", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addedNewAddres", function CartComponent_ng_template_13_Template_app_add_new_address_addedNewAddres_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.addedNewAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_13_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.closeTab(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_template_15_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var address_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](address_r37.location);
} }
function CartComponent_ng_template_15_h5_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r33.userAddressArr$)[_r30.selectedIndex].delivery.toFixed(2), " \u043B\u0432.");
} }
function CartComponent_ng_template_15_h5_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0.50 \u043B\u0432.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_template_15_h3_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r35.user$).cart.totalPrice + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r35.userAddressArr$)[_r30.selectedIndex].delivery).toFixed(2), " \u043B\u0432.");
} }
function CartComponent_ng_template_15_h3_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r36.user$).cart.totalPrice + 0.5).toFixed(2), " \u043B\u0432.");
} }
function CartComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0410\u0434\u0440\u0435\u0441 \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CartComponent_ng_template_15_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.buy(_r29.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_ng_template_15_option_6_Template, 2, 1, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_15_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.toggleAddNewAddres(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u043E\u0431\u0430\u0432\u0438 \u043D\u043E\u0432 \u0430\u0434\u0440\u0435\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "article", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CartComponent_ng_template_15_h5_23_Template, 3, 3, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CartComponent_ng_template_15_h5_25_Template, 2, 0, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "article", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CartComponent_ng_template_15_h3_28_Template, 4, 5, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CartComponent_ng_template_15_h3_30_Template, 3, 3, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041D\u0430\u0447\u0438\u043D \u043D\u0430 \u043F\u043B\u0430\u0449\u0430\u043D\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "article", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u0412 \u0431\u0440\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0421 \u043A\u0430\u0440\u0442\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_15_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0438 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.selectedAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r12.user$).address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, ctx_r12.user$).cart.totalPrice.toFixed(2), " \u043B\u0432.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 11, ctx_r12.user$).cart.totalPrice < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 13, ctx_r12.user$).cart.totalPrice >= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 15, ctx_r12.user$).cart.totalPrice < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 17, ctx_r12.user$).cart.totalPrice >= 10);
} }
var CartComponent = /** @class */ (function () {
    function CartComponent(userService) {
        this.userService = userService;
        this.user$ = this.userService.userData$;
        this.userAddressArr$ = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) { return user.address; }));
        this.orderDetails = false;
        this.showAddNewAddressTab = false;
        this.selectedAddress = null;
        this.orderCompleted = false;
    }
    CartComponent.prototype.onClick = function (targetElement) {
        var clickedInside = this.clickedInside.nativeElement.contains(targetElement);
        // if (!clickedInside) {
        //   console.log('outside clicked');
        // }
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$.subscribe(function (user) { return _this.selectedAddress = user.address[0].location; });
    };
    CartComponent.prototype.updateQuantity = function (item, newQuantity) {
        if (item.quantity !== Number(newQuantity)) {
            item.quantity = Number(newQuantity);
            this.userService.updateCartItem(item);
        }
        return;
    };
    CartComponent.prototype.removeItem = function (item) {
        this.userService.removeItemFromCart(item);
    };
    CartComponent.prototype.clearCart = function () {
        this.userService.clearCart();
    };
    CartComponent.prototype.toggleMenu = function () {
        this.orderDetails = !this.orderDetails;
    };
    CartComponent.prototype.buy = function (data) {
        var _this = this;
        if (data.payment === 'cash') {
            this.userService.finishOrder(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
                _this.showAddNewAddressTab = false;
                _this.orderDetails = false;
                _this.orderCompleted = true;
                setTimeout(function () {
                    _this.orderCompleted = false;
                }, 3000);
            });
        }
    };
    CartComponent.prototype.toggleAddNewAddres = function () {
        this.showAddNewAddressTab = !this.showAddNewAddressTab;
    };
    CartComponent.prototype.closeTab = function () {
        this.showAddNewAddressTab = false;
    };
    CartComponent.prototype.clickedOutsideCart = function () {
        this.showAddNewAddressTab = false;
        this.orderDetails = false;
    };
    CartComponent.prototype.addedNewAddress = function () {
        this.showAddNewAddressTab = false;
    };
    CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], viewQuery: function CartComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clickedInside = _t.first);
        } }, hostBindings: function CartComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        } }, decls: 17, vars: 8, consts: [[1, "cart"], ["clickedInside", ""], ["routerLink", "/cart", "class", "cart-badge", 4, "ngIf"], [1, "fas", "fa-shopping-cart", "fa-2x"], [4, "ngTemplateOutlet"], ["class", "empty-cart", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["cartProducts", ""], ["details", ""], ["addNewAddressForm", ""], ["detailsForm", ""], ["routerLink", "/cart", 1, "cart-badge"], [1, "empty-cart"], ["role", "alert", 1, "alert", "alert-success"], [1, "fas", "fa-check-circle", "fa-5x"], ["class", "cart-clear", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "total-price", 4, "ngIf"], [1, "cart-clear"], [1, "fas", "fa-trash", 3, "click"], [1, "item-container"], [1, "item-name"], [1, "item-info-box"], ["for", "quantity"], ["type", "number", "min", "1", "id", "quantity", 1, "item-quantity", 3, "value"], ["updatedQuantity", ""], [1, "item-price"], [1, "item-btn-box"], [1, "item-btn", "renew", 3, "click"], [1, "item-btn", "remove", 3, "click"], [1, "total-price"], [1, "price"], [1, "order-btn", 3, "click"], [1, "order-info"], [1, "newAddressWrapper"], [3, "addedNewAddres"], [1, "fas", "fa-times", "close-tab", 3, "click"], [1, "details-form-title"], ["name", "test", "id", "test", 3, "ngSubmit"], ["test", "ngForm"], ["name", "address", 1, "address-list", 3, "ngModel"], ["selected", ""], ["name", "address", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn-add-address", 3, "click"], ["addNewAddressBtn", ""], [1, "total-price-cart"], [1, "plus"], [1, "total-price-delivery"], [4, "ngIf"], [1, "total-price-sum"], [1, "payment-method"], ["for", "cash"], ["type", "radio", "id", "cash", "name", "payment", "value", "cash", "ngModel", "cash"], ["for", "card"], ["type", "radio", "id", "card", "name", "payment", "value", "card", "ngModel", "cash"], ["type", "button", 1, "order-btn", "back", 3, "click"], ["type", "submit", 1, "order-btn"], ["name", "address"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_a_2_Template, 3, 3, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_ng_container_5_Template, 1, 0, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_p_6_Template, 2, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_div_8_Template, 6, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_ng_template_9_Template, 7, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartComponent_ng_template_11_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_ng_template_13_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_ng_template_15_Template, 45, 19, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.user$).cart.products.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.orderDetails ? _r7 : _r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.user$).cart.products.length === 0 && !ctx.orderCompleted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderCompleted);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _add_new_address_add_new_address_component__WEBPACK_IMPORTED_MODULE_4__["AddNewAddressComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".cart[_ngcontent-%COMP%] {\n    border: 3px solid #E25E20;\n    border-radius: 8px;\n    box-shadow: 0px 0px 13px 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-height: 100%;\n    overflow: scroll;\n    position: relative;\n}\n\n.cart[_ngcontent-%COMP%]   .fa-shopping-cart[_ngcontent-%COMP%] {\n    color:#8D9F3E;\n    margin: 20px;\n    margin-bottom: 0;\n}\n\n.empty-cart[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    font-style: italic;\n    color: #8D9F3E;\n    margin:5px;\n}\n\n.cart-clear[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    right: 0;\n    top: 0;\n}\n\n.cart-clear[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding: 5px;\n    background: #E25E20;\n    color: white;\n    width: 15px;\n    border-radius: 90px;\n    margin: 8px;\n    text-align: center;\n}\n\n.cart-clear[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\nul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    padding-left: 0;\n    width: 100%;\n}\n\nlabel[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: .6rem;\n    width: 35%;\n}\n\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width:40%;\n    text-align: end;\n    font-weight: bold;\n}\n\n.item-container[_ngcontent-%COMP%] {\n    border-top: 1px dotted black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 10px;\n    width: 100%;\n}\n\n.item-name[_ngcontent-%COMP%] {\n    margin:5px 0 0 0;\n    text-align: center;\n}\n\n.item-info-box[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.item-quantity[_ngcontent-%COMP%] {\n    border: none;\n    width: 25%;\n    border-radius: 6px;\n}\n\n.item-price[_ngcontent-%COMP%] {\n    background: white;\n    color: #E25E20;\n    border: 1px solid #E25E20;\n    padding: 2px 5px;\n    margin-right: 5px;\n    font-weight: bold;\n    border-radius: 6px;\n}\n\n.item-btn-box[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.item-btn[_ngcontent-%COMP%] {\n    padding: 5px;\n    border-radius: 6px;\n    border: none;\n    box-shadow: 0px 0px 3px 0px;\n    font-weight: bold;\n}\n\n.item-btn[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.remove[_ngcontent-%COMP%] {\n    background: #E25E20;\n    color:white;\n    margin-left: 5px;\n}\n\n.remove[_ngcontent-%COMP%]:hover {\n    background: white;\n    color: #E25E20;\n    border: 1px #E25E20 solid;\n    padding:4px;\n}\n\n.renew[_ngcontent-%COMP%] {\n    background: #8D9F3E;\n    color:white;\n    margin-right: 5px;\n}\n\n.renew[_ngcontent-%COMP%]:hover {\n    background: white;\n    color: #8D9F3E;\n    border: 1px #8D9F3E solid;\n    padding:4px;\n}\n\n  .item-btn:focus,   .item-quantity:focus,   .order-btn:focus{\n    outline: unset;\n}\n\n.total-price[_ngcontent-%COMP%] {\n    width: 100%;\n    border-top: 1px solid black;\n    display: flex;\n    align-items: baseline;\n    justify-content: space-between;\n}\n\n.price[_ngcontent-%COMP%] {\n    border: 1px solid #E25E20;\n    border-radius: 6px;\n    padding:8px;\n    font-weight: bold;\n    color:#E25E20;\n    margin:10px;\n}\n\n.order-btn[_ngcontent-%COMP%] {\n    padding:10px;\n    font-weight: bold;\n    border: 1px solid #8D9F3E;\n    color:white;\n    background: #8D9F3E;\n    border-radius: 6px;\n    margin:10px;\n}\n\n.order-btn[_ngcontent-%COMP%]:hover {\n    background: white;\n    color: #8D9F3E;\n    border: 2px solid #8D9F3E;\n    padding: 9px;\n    cursor: pointer;\n    font-weight: bolder;\n    box-shadow: 0 0 5px 0;\n}\n\n.back[_ngcontent-%COMP%]:hover {\n    color:#E25E20;\n    border-color: #E25E20;\n}\n\n.back[_ngcontent-%COMP%] {\n    background: #E25E20;\n    border-color: #E25E20 ;\n}\n\n.order-info[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    width: 100%;\n}\n\n.payment-method[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.payment-method[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 1rem;\n}\n\n.ngb-panel[_ngcontent-%COMP%]{\n    color:red;\n}\n\n  .card-header button {\n    padding: 10px;\n    background: #FFFF;\n    width: 200px;\n    border: none;\n    border-radius: 6px;;\n    box-shadow: 0px 0px 5px 0px;\n    font-size: .9rem;\n    margin:5px;\n}\n\n  .card-header button:hover {\n    cursor: pointer;\n}\n\n  .card select {\n    margin:20px;\n    border-radius: 12px;\n    padding: 10px;\n}\n\n  *:focus {\n    outline: unset;\n}\n\n.cart-badge[_ngcontent-%COMP%] {\n    color: white;\n    font-size: .8rem;\n    font-weight: bold;\n    position: absolute;\n    top: 24px;\n    left: 50%;\n}\n\n.close-tab[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 6%;\n    top: 25px;\n    background: #E25E20;\n    padding: 3px 5px;\n    color: #FFFF;\n    border-radius: 100px;\n}\n\n.close-tab[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.newAddressWrapper[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.btn-add-address[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 5px;\n    width: 150px;\n    border-radius: 6px;\n    border: 1px solid #8D9F3E;\n}\n\n.btn-add-address[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px 0;\n}\n\n.address-list[_ngcontent-%COMP%] {\n    border-radius: 6px;\n    border: 1px solid #8D9F3E;\n    padding: 5px;\n    width: 80%;\n    text-align: center;\n}\n\n.address-list[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px 0;\n}\n\n.details-form-title[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n.total-price[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-end;\n    border-bottom: 1px solid black;\n}\n\n.total-price-cart[_ngcontent-%COMP%], .total-price-delivery[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin:10px;\n}\n\n.total-price-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .total-price-delivery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: .6rem;\n    margin-top:0;\n}\n\n.total-price-cart[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .total-price-delivery[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin:0;\n}\n\n.plus[_ngcontent-%COMP%] {\n    align-self: center;\n}\n\n.total-price-sum[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin-bottom: 10px;\n}\n\n.total-price-sum[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 120px;\n    margin: 5px;\n    border: 3px solid #E25E20;\n    color: #E25E20;\n    font-weight: bold;\n    border-radius: 12px;\n    margin: 0 auto;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.alert-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #8D9F3E;\n    font-style: italic;\n}\n\n.alert-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #8D9F3E;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLE1BQU07QUFDVjs7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDOztBQUNBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNFMjVFMjA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcnQgLmZhLXNob3BwaW5nLWNhcnQge1xuICAgIGNvbG9yOiM4RDlGM0U7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5lbXB0eS1jYXJ0IHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICM4RDlGM0U7XG4gICAgbWFyZ2luOjVweDtcbn1cblxuLmNhcnQtY2xlYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG59XG4uY2FydC1jbGVhciBpIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI0UyNUUyMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJ0LWNsZWFyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAuNnJlbTtcbiAgICB3aWR0aDogMzUlO1xufVxuXG5sYWJlbCBpbnB1dCB7XG4gICAgd2lkdGg6NDAlO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pdGVtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pdGVtLW5hbWUge1xuICAgIG1hcmdpbjo1cHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS1pbmZvLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLml0ZW0tcXVhbnRpdHkge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5pdGVtLXByaWNlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogI0UyNUUyMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTI1RTIwO1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLml0ZW0tYnRuLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tYnRuIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaXRlbS1idG46aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZSB7XG4gICAgYmFja2dyb3VuZDogI0UyNUUyMDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucmVtb3ZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogI0UyNUUyMDtcbiAgICBib3JkZXI6IDFweCAjRTI1RTIwIHNvbGlkO1xuICAgIHBhZGRpbmc6NHB4O1xufVxuXG4ucmVuZXcge1xuICAgIGJhY2tncm91bmQ6ICM4RDlGM0U7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucmVuZXc6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjOEQ5RjNFO1xuICAgIGJvcmRlcjogMXB4ICM4RDlGM0Ugc29saWQ7XG4gICAgcGFkZGluZzo0cHg7XG59XG5cbjo6bmctZGVlcCAuaXRlbS1idG46Zm9jdXMsXG46Om5nLWRlZXAgLml0ZW0tcXVhbnRpdHk6Zm9jdXMsXG46Om5nLWRlZXAgLm9yZGVyLWJ0bjpmb2N1c3tcbiAgICBvdXRsaW5lOiB1bnNldDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJpY2Uge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMjVFMjA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiNFMjVFMjA7XG4gICAgbWFyZ2luOjEwcHg7XG59XG5cbi5vcmRlci1idG4ge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEQ5RjNFO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQ6ICM4RDlGM0U7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjoxMHB4O1xufVxuXG4ub3JkZXItYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzhEOUYzRTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOEQ5RjNFO1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDA7XG59XG4uYmFjazpob3ZlciB7XG4gICAgY29sb3I6I0UyNUUyMDtcbiAgICBib3JkZXItY29sb3I6ICNFMjVFMjA7XG59XG5cbi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTI1RTIwO1xuICAgIGJvcmRlci1jb2xvcjogI0UyNUUyMCA7XG59XG5cbi5vcmRlci1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucGF5bWVudC1tZXRob2Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBheW1lbnQtbWV0aG9kIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5uZ2ItcGFuZWx7XG4gICAgY29sb3I6cmVkO1xufVxuXG46Om5nLWRlZXAgLmNhcmQtaGVhZGVyIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDs7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbWFyZ2luOjVweDtcbn1cblxuOjpuZy1kZWVwIC5jYXJkLWhlYWRlciBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5jYXJkIHNlbGVjdCB7XG4gICAgbWFyZ2luOjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuOjpuZy1kZWVwICo6Zm9jdXMge1xuICAgIG91dGxpbmU6IHVuc2V0O1xufVxuXG4uY2FydC1iYWRnZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjRweDtcbiAgICBsZWZ0OiA1MCU7XG59XG5cbi5jbG9zZS10YWIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNiU7XG4gICAgdG9wOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFMjVFMjA7XG4gICAgcGFkZGluZzogM3B4IDVweDtcbiAgICBjb2xvcjogI0ZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5jbG9zZS10YWI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ld0FkZHJlc3NXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG4tYWRkLWFkZHJlc3Mge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEQ5RjNFO1xufVxuXG4uYnRuLWFkZC1hZGRyZXNzOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwO1xufVxuXG4uYWRkcmVzcy1saXN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhEOUYzRTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGRyZXNzLWxpc3Q6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDA7XG59XG5cbi5kZXRhaWxzLWZvcm0tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnRvdGFsLXByaWNlLWNhcnQsXG4udG90YWwtcHJpY2UtZGVsaXZlcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46MTBweDtcbn1cblxuLnRvdGFsLXByaWNlLWNhcnQgcCxcbi50b3RhbC1wcmljZS1kZWxpdmVyeSBwIHtcbiAgICBmb250LXNpemU6IC42cmVtO1xuICAgIG1hcmdpbi10b3A6MDtcbn1cblxuLnRvdGFsLXByaWNlLWNhcnQgaDUsXG4udG90YWwtcHJpY2UtZGVsaXZlcnkgaDUge1xuICAgIG1hcmdpbjowO1xufVxuXG4ucGx1cyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG90YWwtcHJpY2Utc3VtIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udG90YWwtcHJpY2Utc3VtIGgzIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI0UyNUUyMDtcbiAgICBjb2xvcjogI0UyNUUyMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGVydC1zdWNjZXNzIHAge1xuICAgIGNvbG9yOiAjOEQ5RjNFO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5hbGVydC1zdWNjZXNzIGkge1xuICAgIGNvbG9yOiAjOEQ5RjNFO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"] });
    return CartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, { clickedInside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['clickedInside']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event.target']]
        }] }); })();


/***/ }),

/***/ "mTx+":
/*!*************************************************************!*\
  !*** ./src/app/user/user-address/user-address.component.ts ***!
  \*************************************************************/
/*! exports provided: UserAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressComponent", function() { return UserAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_address_item_user_address_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-address-item/user-address-item.component */ "a/c8");
/* harmony import */ var _add_new_address_add_new_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-new-address/add-new-address.component */ "hbDI");






function UserAddressComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function UserAddressComponent_ng_template_4_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user-address-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteRequest", function UserAddressComponent_ng_template_4_li_2_Template_app_user_address_item_deleteRequest_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.deleteAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var address_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", address_r6);
} }
function UserAddressComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAddressComponent_ng_template_4_li_2_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_ng_template_4_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggleEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r2.user$).address);
} }
function UserAddressComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-new-address", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addedNewAddres", function UserAddressComponent_ng_template_6_Template_app_add_new_address_addedNewAddres_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleEditMode(); })("backBtnClicked", function UserAddressComponent_ng_template_6_Template_app_add_new_address_backBtnClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toggleEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var UserAddressComponent = /** @class */ (function () {
    function UserAddressComponent(userService) {
        this.userService = userService;
        this.user$ = this.userService.userData$;
        this.editMode = false;
    }
    UserAddressComponent.prototype.deleteAddress = function (item) {
        this.userService.deleteUserAddress(item);
    };
    UserAddressComponent.prototype.toggleEditMode = function () {
        this.editMode = !this.editMode;
    };
    UserAddressComponent.ɵfac = function UserAddressComponent_Factory(t) { return new (t || UserAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
    UserAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAddressComponent, selectors: [["app-user-address"]], decls: 8, vars: 1, consts: [[1, "address-bar"], [4, "ngTemplateOutlet"], ["adressListTemplate", ""], ["adressEditTemplate", ""], [1, "address-content"], [1, "address-content-list"], [4, "ngFor", "ngForOf"], [1, "add-new-address"], ["title", "\u0414\u043E\u0431\u0430\u0432\u0438 \u043D\u043E\u0432 \u0430\u0434\u0440\u0435\u0441", 1, "fas", "fa-plus", 3, "click"], [3, "item", "deleteRequest"], ["backBtn", "true", 3, "addedNewAddres", "backBtnClicked"]], template: function UserAddressComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041C\u043E\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAddressComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAddressComponent_ng_template_4_Template, 6, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAddressComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.editMode ? _r3 : _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _user_address_item_user_address_item_component__WEBPACK_IMPORTED_MODULE_3__["UserAddressItemComponent"], _add_new_address_add_new_address_component__WEBPACK_IMPORTED_MODULE_4__["AddNewAddressComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".address-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 10px auto;\n    display: flex;\n    flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: 5px;\n}\n.address-content-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    list-style: none;\n    font-size: 1.3rem;\n    padding-left: 0;\n    margin-bottom: 0;\n}\n.address-content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n.add-new-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 35px;\n    margin: 0;\n    color: #8D9F3E;\n    padding: 10px;\n}\n.add-new-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\napp-add-new-address[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWRkcmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJ1c2VyLWFkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhaW5lciBoMyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYWRkcmVzcy1jb250ZW50LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYWRkcmVzcy1jb250ZW50LWxpc3QgbGkge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmFkZC1uZXctYWRkcmVzcyBpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjOEQ5RjNFO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hZGQtbmV3LWFkZHJlc3MgaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYXBwLWFkZC1uZXctYWRkcmVzcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"] });
    return UserAddressComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-address',
                templateUrl: './user-address.component.html',
                styleUrls: ['./user-address.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ "bh3X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "DgAN");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms/terms.component */ "J4gr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts/contacts.component */ "r+j4");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "YSYA");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "FxTl");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "IQ6F");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.interceptor */ "7Dl1");














var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
            _app_interceptor__WEBPACK_IMPORTED_MODULE_12__["appInterceptorProvider"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
            ]] });
    return CoreModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_5__["TermsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]], exports: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_5__["TermsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]],
                exports: [
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
                ],
                providers: [
                    _app_interceptor__WEBPACK_IMPORTED_MODULE_12__["appInterceptorProvider"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "r+j4":
/*!*****************************************************!*\
  !*** ./src/app/core/contacts/contacts.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 15, vars: 0, consts: [[1, "contacts"], [1, "contacts-item"], [1, "fas", "fa-phone", "fa-3x"], [1, "far", "fa-envelope", "fa-3x"], [1, "fas", "fa-map-marked-alt", "fa-3x"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+359 876251939");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(\u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0442 \u0422\u0435\u043C\u0438\u0434\u0430)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delivery@smolyanobyad.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0433\u0440.\u0421\u043C\u043E\u043B\u044F\u043D \u0431\u0443\u043B.\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F 16 - \u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0442 \"\u0422\u0435\u043C\u0438\u0434\u0430\"");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".contacts[_ngcontent-%COMP%] {\n  display:flex;\n  flex-wrap: wrap;\n  max-width:80%;\n  margin: 100px auto;\n  justify-content: space-between;\n  letter-spacing: 1.3px;\n}\n\n.contacts-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width:30%;\n}\n\n.contacts-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .contacts-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin-bottom: 0;\n  text-align: center;\n  max-width: 100%;\n  overflow-wrap: break-word;\n}\n\n.contacts-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin:0;\n}\n\ni[_ngcontent-%COMP%] {\n  background: #E25E20;\n  color:white;\n  padding:20px 0;\n  text-align: center;\n  width:30%;\n  min-width: 70px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0cyB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtd2lkdGg6ODAlO1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xufVxuXG4uY29udGFjdHMtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOjMwJTtcbn1cbi5jb250YWN0cy1pdGVtIGgyLFxuLmNvbnRhY3RzLWl0ZW0gcHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4uY29udGFjdHMtaXRlbSBwIHtcbiAgbWFyZ2luOjA7XG59XG5cbmkge1xuICBiYWNrZ3JvdW5kOiAjRTI1RTIwO1xuICBjb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzoyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6MzAlO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"] });
    return ContactsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s1Eu":
/*!***************************************************!*\
  !*** ./src/app/shared/click-outside.directive.ts ***!
  \***************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (target) {
        var clickedInside = this.elementRef.nativeElement.contains(target);
        // if (!clickedInside) {
        //   console.log('outside');
        //   this.clickOutside.emit();
        // }else {
        //   console.log('inside');
        // }
    };
    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "appClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        } }, outputs: { clickOutside: "clickOutside" } });
    return ClickOutsideDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appClickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event.target']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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