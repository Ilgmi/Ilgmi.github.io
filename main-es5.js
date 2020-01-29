function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" menuId=\"main-menu\"\r\n              (ionWillOpen)=\"menuWillOpen($event)\"\r\n              (ionDidOpen)=\"menuDidOpen($event)\"\r\n              (ionDidClose)=\"menuDidClose($event)\">\r\n      \r\n      <ion-content>\r\n        <ion-slides #switcher\r\n                    class=\"menu-slide\"\r\n                    [options]=\"slideConfig\"\r\n                    (ionSlideDidChange)=\"slideDidChange($event)\">\r\n          <ion-slide>\r\n            <app-group-navigation-menu class=\"width-100-p\">\r\n\r\n            </app-group-navigation-menu>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <app-channel-navigation-menu class=\"width-100-p\">\r\n\r\n            </app-channel-navigation-menu>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col text-center>\r\n              <app-bullet *ngFor=\"let isActive of slideStates; let i = index; trackBy:identifyBullet\"  [active]=\"isActive\" (bullet-click)=\"slideTo(i)\"></app-bullet>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/create-group-modal/create-group-modal.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/create-group-modal/create-group-modal.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsCreateGroupModalCreateGroupModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"dismissModal()\">Abbrechen</ion-button>\n    </ion-buttons>\n    <ion-title>Gruppe erstellen</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button [disabled]=\"createGroupForm.invalid\" (click)=\"createGroup()\">Hinzufügen</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\">\n  <form [formGroup]=\"createGroupForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Name:</ion-label>\n            <ion-input placeholder=\"Name\" type=\"text\" formControlName=\"name\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item-divider></ion-item-divider>\n          <ion-item>\n            <ion-label>Event</ion-label>\n            <ion-toggle #event formControlName=\"isEvent\"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"event.checked\" formGroupName=\"event\">\n        <ion-col>\n          <ion-item  >\n            <ion-label>Ganztägig</ion-label>\n            <ion-toggle #holeDay formControlName=\"isWholeDay\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>Beginn</ion-label>\n            <ion-datetime formControlName=\"from\"\n                          [pickerFormat]=\"holeDay.checked ? 'DDMMYYYY' : 'DDMMYYYYHHmm'\" [value]=\"nowDate\"\n                          [displayFormat]=\"holeDay.checked ? 'DD.MM.YYYY' : 'DD.MM.YYYY HH:mm'\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Ende</ion-label>\n            <ion-datetime formControlName=\"to\"\n                          [pickerFormat]=\"holeDay.checked ? 'DDMMYYYY' : 'DDMMYYYYHHmm'\" [value]=\"nowDatePlusOne\"\n                          [displayFormat]=\"holeDay.checked ? 'DD.MM.YYYY' : 'DD.MM.YYYY HH:mm'\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col>\n          <ion-item-divider></ion-item-divider>\n          <ion-item class=\"group-description\" >\n            <ion-textarea formControlName=\"description\" placeholder=\"Beschreibung\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>\n            Form: {{ createGroupForm.value | json }}\n          </p>\n          <p>\n            Form Status: {{ createGroupForm.status }}\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsSubscribeToGroupModalSubscribeToGroupModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n\r\n    <ion-title>Einer Gruppe beitreten</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button  (click)=\"dismissModal()\">Abbrechen</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"createNewGroup()\">Neue Gruppe erstellen</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-searchbar (ionInput)=\"filterList($event)\"></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let groupInfo of filteredGroups\">\r\n            <ion-avatar slot=\"start\">\r\n\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2>{{groupInfo.name}}</h2>\r\n            </ion-label>\r\n            <ion-button shape=\"round\" fill=\"clear\" size=\"large\" (click)=\"subscribeToGroup(groupInfo.id)\">\r\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationMenuChannelNavigationMenuChannelNavigationMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      Channels\n    </ion-col>\n    <ion-col>\n      <ion-button size=\"small\" shape=\"round\" fill=\"outline\">\n        <ion-icon\n                  name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-menu-toggle *ngFor=\"let channel of subscribedChannels$ | async; trackBy:identifyChannel\" auto-hide=\"false\">\n          <ion-item\n                  [class.is-active]=\"channel.id === (currentChannel$|async).id\"\n                  (click)=\"selectChannel(channel)\"\n                  [routerDirection]=\"'root'\"\n                  [routerLink]=\"'chat'\" >\n            <ion-icon name=\"Home\" slot=\"start\"></ion-icon>\n            <ion-label>\n              {{channel.name}}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button>Add</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationMenuGroupNavigationMenuGroupNavigationMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid>\n  <ion-row>\n    <ion-col>\n      <h3>Gruppen</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-menu-toggle *ngFor=\"let group of subscribedGroups$ | async; trackBy:identifyGroup\"\n                         auto-hide=\"false\">\n          <ion-item\n                  [class.is-active]=\"group.id === (currentGroup$ | async).id\"\n                  (click)=\"selectGroup(group)\"\n                  [routerDirection]=\"'root'\"\n                  [routerLink]=\"'chat'\">\n            <ion-icon name=\"Home\" slot=\"start\"></ion-icon>\n            <ion-label>{{group.name}}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"presentSubscribeToGroupModal()\">Add</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/view-components/bullet/bullet.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/components/view-components/bullet/bullet.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcSharedComponentsViewComponentsBulletBulletComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span (click)=\"onClick()\" class=\"bullet\" [class.bullet-active]=\"active\" >\r\n  </span>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'chat',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | list-list-module */
        "list-list-module").then(__webpack_require__.bind(null,
        /*! ./list/list.module */
        "./src/app/list/list.module.ts")).then(function (m) {
          return m.ListPageModule;
        });
      }
    }, {
      path: 'chat',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chat-chat-module */
        "chat-chat-module").then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }, {
      path: 'event',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | events-event-event-module */
        "events-event-event-module").then(__webpack_require__.bind(null,
        /*! ./events/event/event.module */
        "./src/app/events/event/event.module.ts")).then(function (m) {
          return m.EventPageModule;
        });
      }
    }, {
      path: 'edit-group',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | group-edit-group-edit-group-module */
        "group-edit-group-edit-group-module").then(__webpack_require__.bind(null,
        /*! ./group/edit-group/edit-group.module */
        "./src/app/group/edit-group/edit-group.module.ts")).then(function (m) {
          return m.EditGroupPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-slide {\n  height: 95%;\n}\n\n.width-100-p {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RzXFx2Y2EtYXBwXFxGcm9udGVuZFxcdmNhLWNvbS1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtc2xpZGV7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbi53aWR0aC0xMDAtcHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIubWVudS1zbGlkZSB7XG4gIGhlaWdodDogOTUlO1xufVxuXG4ud2lkdGgtMTAwLXAge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/states/app-state/app-state */
    "./src/shared/states/app-state/app-state.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, store, menu) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.store = store;
        this.menu = menu;
        this.slideConfig = {
          initialSlide: 1,
          speed: 0,
          autoHeight: true
        };
        this.slideStates = [false, true];
        this.appPages = [{
          title: 'Home',
          url: '/home',
          icon: 'home'
        }, {
          title: 'List',
          url: '/list',
          icon: 'list'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "menuDidOpen",
        value: function menuDidOpen(event) {
          this.menu.swipeGesture(false, 'main-menu');
        }
      }, {
        key: "menuDidClose",
        value: function menuDidClose(event) {
          this.menu.swipeGesture(true, 'main-menu');
        }
      }, {
        key: "menuWillOpen",
        value: function menuWillOpen(event) {
          this.switcher.update();
        }
      }, {
        key: "identifyBullet",
        value: function identifyBullet(index, item) {
          return index;
        }
      }, {
        key: "slideTo",
        value: function slideTo(index) {
          this.switcher.slideTo(index, 300);
          this.updateSlideStates(index);
        }
      }, {
        key: "slideDidChange",
        value: function slideDidChange(event) {
          var _this2 = this;

          this.switcher.getActiveIndex().then(function (index) {
            _this2.updateSlideStates(index);
          });
        }
      }, {
        key: "updateSlideStates",
        value: function updateSlideStates(index) {
          this.slideStates = this.slideStates.fill(false);
          this.slideStates[index] = true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_6__["AppState"].currentGroup), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])], AppComponent.prototype, "currentGroup$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('switcher', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], AppComponent.prototype, "switcher", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/states/app-state/app-state */
    "./src/shared/states/app-state/app-state.ts");
    /* harmony import */


    var _shared_components_view_components_view_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/components/view-components/view-components.module */
    "./src/shared/components/view-components/view-components.module.ts");
    /* harmony import */


    var _navigation_menu_navigation_menu_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navigation-menu/navigation-menu.module */
    "./src/app/navigation-menu/navigation-menu.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_shared_components_view_components_view_components_module__WEBPACK_IMPORTED_MODULE_11__["ViewComponentsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["NgxsModule"].forRoot([_shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_10__["AppState"]]), _navigation_menu_navigation_menu_module__WEBPACK_IMPORTED_MODULE_12__["NavigationMenuModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modals/create-group-modal/create-group-modal.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modals/create-group-modal/create-group-modal.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsCreateGroupModalCreateGroupModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".group-description {\n  --min-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2NyZWF0ZS1ncm91cC1tb2RhbC9FOlxcUHJvamVjdHNcXHZjYS1hcHBcXEZyb250ZW5kXFx2Y2EtY29tLWFwcC9zcmNcXGFwcFxcbW9kYWxzXFxjcmVhdGUtZ3JvdXAtbW9kYWxcXGNyZWF0ZS1ncm91cC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2NyZWF0ZS1ncm91cC1tb2RhbC9jcmVhdGUtZ3JvdXAtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2NyZWF0ZS1ncm91cC1tb2RhbC9jcmVhdGUtZ3JvdXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtZGVzY3JpcHRpb257XHJcbiAgLS1taW4taGVpZ2h0OiAyNTBweDtcclxufVxyXG4iLCIuZ3JvdXAtZGVzY3JpcHRpb24ge1xuICAtLW1pbi1oZWlnaHQ6IDI1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/create-group-modal/create-group-modal.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modals/create-group-modal/create-group-modal.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CreateGroupModalComponent */

  /***/
  function srcAppModalsCreateGroupModalCreateGroupModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateGroupModalComponent", function () {
      return CreateGroupModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_states_app_state_actions_group_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/states/app-state/actions/group.actions */
    "./src/shared/states/app-state/actions/group.actions.ts");

    var CreateGroupModalComponent =
    /*#__PURE__*/
    function () {
      function CreateGroupModalComponent(modalController, store) {
        _classCallCheck(this, CreateGroupModalComponent);

        this.modalController = modalController;
        this.store = store;
        this.createGroupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)),
          isEvent: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          event: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            isWholeDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().toISOString()),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date(Date.now() + 60 * 60 * 1000).toISOString())
          }, this.dateLessThan('from', 'to'))
        });
      }

      _createClass(CreateGroupModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dateLessThan",
        value: function dateLessThan(from, to) {
          return function (group) {
            var f = new Date(group.get(from).value);
            var t = new Date(group.get(to).value);
            console.log(f.getTime(), t.getTime());

            if (f.getTime() > t.getTime()) {
              return {
                dates: 'Date from should be less than Date to'
              };
            }
          };
        }
      }, {
        key: "createGroup",
        value: function createGroup() {
          var group = this.createGroupForm.getRawValue();

          if (group.isEvent) {
            var event = group.event;
            this.store.dispatch(new _shared_states_app_state_actions_group_actions__WEBPACK_IMPORTED_MODULE_5__["CreateEventGroup"](group.name, group.description, event.isWholeDay, event.from, event.to));
          } else {
            this.store.dispatch(new _shared_states_app_state_actions_group_actions__WEBPACK_IMPORTED_MODULE_5__["CreateLocalGroup"](group.name, group.description));
          }

          this.modalController.dismiss({
            dismissed: false
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss({
            dismissed: true
          });
        }
      }]);

      return CreateGroupModalComponent;
    }();

    CreateGroupModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    CreateGroupModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-group-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-group-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/create-group-modal/create-group-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-group-modal.component.scss */
      "./src/app/modals/create-group-modal/create-group-modal.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])], CreateGroupModalComponent);
    /***/
  },

  /***/
  "./src/app/modals/modals.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/modals/modals.module.ts ***!
    \*****************************************/

  /*! exports provided: ModalsModule */

  /***/
  function srcAppModalsModalsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsModule", function () {
      return ModalsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _create_group_modal_create_group_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-group-modal/create-group-modal.component */
    "./src/app/modals/create-group-modal/create-group-modal.component.ts");
    /* harmony import */


    var _subscribe_to_group_modal_subscribe_to_group_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subscribe-to-group-modal/subscribe-to-group-modal.component */
    "./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ModalsModule = function ModalsModule() {
      _classCallCheck(this, ModalsModule);
    };

    ModalsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_subscribe_to_group_modal_subscribe_to_group_modal_component__WEBPACK_IMPORTED_MODULE_5__["SubscribeToGroupModalComponent"], _create_group_modal_create_group_modal_component__WEBPACK_IMPORTED_MODULE_4__["CreateGroupModalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      exports: [_subscribe_to_group_modal_subscribe_to_group_modal_component__WEBPACK_IMPORTED_MODULE_5__["SubscribeToGroupModalComponent"], _create_group_modal_create_group_modal_component__WEBPACK_IMPORTED_MODULE_4__["CreateGroupModalComponent"]],
      entryComponents: [_subscribe_to_group_modal_subscribe_to_group_modal_component__WEBPACK_IMPORTED_MODULE_5__["SubscribeToGroupModalComponent"], _create_group_modal_create_group_modal_component__WEBPACK_IMPORTED_MODULE_4__["CreateGroupModalComponent"]]
    })], ModalsModule);
    /***/
  },

  /***/
  "./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsSubscribeToGroupModalSubscribeToGroupModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9zdWJzY3JpYmUtdG8tZ3JvdXAtbW9kYWwvc3Vic2NyaWJlLXRvLWdyb3VwLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: SubscribeToGroupModalComponent */

  /***/
  function srcAppModalsSubscribeToGroupModalSubscribeToGroupModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeToGroupModalComponent", function () {
      return SubscribeToGroupModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/states/app-state/app-state */
    "./src/shared/states/app-state/app-state.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_states_app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/states/app-state/app-state.actions */
    "./src/shared/states/app-state/app-state.actions.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _create_group_modal_create_group_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../create-group-modal/create-group-modal.component */
    "./src/app/modals/create-group-modal/create-group-modal.component.ts");

    var SubscribeToGroupModalComponent =
    /*#__PURE__*/
    function () {
      function SubscribeToGroupModalComponent(store, modalController) {
        _classCallCheck(this, SubscribeToGroupModalComponent);

        this.store = store;
        this.modalController = modalController;
      }

      _createClass(SubscribeToGroupModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.notSubscribedGroups$.subscribe(function (x) {
            _this3.filteredGroups = x;
            _this3.groups = x;
          });
        }
      }, {
        key: "filterList",
        value: function filterList(event) {
          this.filteredGroups = this.groups;

          if (!event.detail && !event.detail.target) {
            return;
          }

          var search = event.detail.target.value;

          if (search) {
            return;
          }

          this.filteredGroups = this.filteredGroups.filter(function (group) {
            if (group && search) {
              return group.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            }
          });
        }
      }, {
        key: "subscribeToGroup",
        value: function subscribeToGroup(groupId) {
          this.store.dispatch(new _shared_states_app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_5__["SubscribeToGroup"](groupId));
          this.dismissModal();
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "createNewGroup",
        value: function createNewGroup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _create_group_modal_create_group_modal_component__WEBPACK_IMPORTED_MODULE_7__["CreateGroupModalComponent"]
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    _context.next = 7;
                    return modal.onDidDismiss();

                  case 7:
                    data = _context.sent;

                    if (data.data.dismissed) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 11;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 300);
                    });

                  case 11:
                    this.dismissModal();

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return SubscribeToGroupModalComponent;
    }();

    SubscribeToGroupModalComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].notSubscribedGroups), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], SubscribeToGroupModalComponent.prototype, "notSubscribedGroups$", void 0);
    SubscribeToGroupModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subscribe-to-group-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subscribe-to-group-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subscribe-to-group-modal.component.scss */
      "./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], SubscribeToGroupModalComponent);
    /***/
  },

  /***/
  "./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationMenuChannelNavigationMenuChannelNavigationMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-active {\n  --ion-background-color: #4c8dff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1tZW51L2NoYW5uZWwtbmF2aWdhdGlvbi1tZW51L0U6XFxQcm9qZWN0c1xcdmNhLWFwcFxcRnJvbnRlbmRcXHZjYS1jb20tYXBwL3NyY1xcYXBwXFxuYXZpZ2F0aW9uLW1lbnVcXGNoYW5uZWwtbmF2aWdhdGlvbi1tZW51XFxjaGFubmVsLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi1tZW51L2NoYW5uZWwtbmF2aWdhdGlvbi1tZW51L2NoYW5uZWwtbmF2aWdhdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tbWVudS9jaGFubmVsLW5hdmlnYXRpb24tbWVudS9jaGFubmVsLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1hY3RpdmV7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzRjOGRmZjtcclxufVxyXG4iLCIuaXMtYWN0aXZlIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzRjOGRmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ChannelNavigationMenuComponent */

  /***/
  function srcAppNavigationMenuChannelNavigationMenuChannelNavigationMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelNavigationMenuComponent", function () {
      return ChannelNavigationMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/states/app-state/app-state */
    "./src/shared/states/app-state/app-state.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_states_app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/states/app-state/app-state.actions */
    "./src/shared/states/app-state/app-state.actions.ts");

    var ChannelNavigationMenuComponent =
    /*#__PURE__*/
    function () {
      function ChannelNavigationMenuComponent(store) {
        _classCallCheck(this, ChannelNavigationMenuComponent);

        this.store = store;
      }

      _createClass(ChannelNavigationMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectChannel",
        value: function selectChannel(channel) {
          this.store.dispatch(new _shared_states_app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_5__["SetCurrentChannel"](channel.id));
        }
      }, {
        key: "identifyChannel",
        value: function identifyChannel(index, item) {
          return item.id;
        }
      }]);

      return ChannelNavigationMenuComponent;
    }();

    ChannelNavigationMenuComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].subscribedChannels), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], ChannelNavigationMenuComponent.prototype, "subscribedChannels$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].currentChannel), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], ChannelNavigationMenuComponent.prototype, "currentChannel$", void 0);
    ChannelNavigationMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-channel-navigation-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./channel-navigation-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./channel-navigation-menu.component.scss */
      "./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], ChannelNavigationMenuComponent);
    /***/
  },

  /***/
  "./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationMenuGroupNavigationMenuGroupNavigationMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-active {\n  --ion-background-color: #4c8dff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1tZW51L2dyb3VwLW5hdmlnYXRpb24tbWVudS9FOlxcUHJvamVjdHNcXHZjYS1hcHBcXEZyb250ZW5kXFx2Y2EtY29tLWFwcC9zcmNcXGFwcFxcbmF2aWdhdGlvbi1tZW51XFxncm91cC1uYXZpZ2F0aW9uLW1lbnVcXGdyb3VwLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi1tZW51L2dyb3VwLW5hdmlnYXRpb24tbWVudS9ncm91cC1uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi1tZW51L2dyb3VwLW5hdmlnYXRpb24tbWVudS9ncm91cC1uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtYWN0aXZle1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0YzhkZmY7XHJcbn1cclxuIiwiLmlzLWFjdGl2ZSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0YzhkZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: GroupNavigationMenuComponent */

  /***/
  function srcAppNavigationMenuGroupNavigationMenuGroupNavigationMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupNavigationMenuComponent", function () {
      return GroupNavigationMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/states/app-state/app-state */
    "./src/shared/states/app-state/app-state.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_states_app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/states/app-state/app-state.actions */
    "./src/shared/states/app-state/app-state.actions.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _modals_subscribe_to_group_modal_subscribe_to_group_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modals/subscribe-to-group-modal/subscribe-to-group-modal.component */
    "./src/app/modals/subscribe-to-group-modal/subscribe-to-group-modal.component.ts");

    var GroupNavigationMenuComponent =
    /*#__PURE__*/
    function () {
      function GroupNavigationMenuComponent(store, modalController) {
        _classCallCheck(this, GroupNavigationMenuComponent);

        this.store = store;
        this.modalController = modalController;
      }

      _createClass(GroupNavigationMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectGroup",
        value: function selectGroup(group) {
          this.store.dispatch(new _shared_states_app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_5__["SetCurrentGroup"](group.id));
        }
      }, {
        key: "identifyGroup",
        value: function identifyGroup(index, item) {
          return item.id;
        }
      }, {
        key: "presentSubscribeToGroupModal",
        value: function presentSubscribeToGroupModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modals_subscribe_to_group_modal_subscribe_to_group_modal_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeToGroupModalComponent"]
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return GroupNavigationMenuComponent;
    }();

    GroupNavigationMenuComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].subscribedGroups), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], GroupNavigationMenuComponent.prototype, "subscribedGroups$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_states_app_state_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].currentGroup), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], GroupNavigationMenuComponent.prototype, "currentGroup$", void 0);
    GroupNavigationMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-group-navigation-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./group-navigation-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./group-navigation-menu.component.scss */
      "./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], GroupNavigationMenuComponent);
    /***/
  },

  /***/
  "./src/app/navigation-menu/navigation-menu.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/navigation-menu/navigation-menu.module.ts ***!
    \***********************************************************/

  /*! exports provided: NavigationMenuModule */

  /***/
  function srcAppNavigationMenuNavigationMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationMenuModule", function () {
      return NavigationMenuModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _channel_navigation_menu_channel_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./channel-navigation-menu/channel-navigation-menu.component */
    "./src/app/navigation-menu/channel-navigation-menu/channel-navigation-menu.component.ts");
    /* harmony import */


    var _group_navigation_menu_group_navigation_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./group-navigation-menu/group-navigation-menu.component */
    "./src/app/navigation-menu/group-navigation-menu/group-navigation-menu.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _modals_modals_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modals/modals.module */
    "./src/app/modals/modals.module.ts");

    var NavigationMenuModule = function NavigationMenuModule() {
      _classCallCheck(this, NavigationMenuModule);
    };

    NavigationMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_channel_navigation_menu_channel_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["ChannelNavigationMenuComponent"], _group_navigation_menu_group_navigation_menu_component__WEBPACK_IMPORTED_MODULE_4__["GroupNavigationMenuComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _modals_modals_module__WEBPACK_IMPORTED_MODULE_7__["ModalsModule"]],
      exports: [_channel_navigation_menu_channel_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["ChannelNavigationMenuComponent"], _group_navigation_menu_group_navigation_menu_component__WEBPACK_IMPORTED_MODULE_4__["GroupNavigationMenuComponent"]]
    })], NavigationMenuModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/shared/components/view-components/bullet/bullet.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/shared/components/view-components/bullet/bullet.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcSharedComponentsViewComponentsBulletBulletComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bullet {\n  width: 12px;\n  height: 12px;\n  margin: 0 4px;\n  display: inline-block;\n  border-radius: 100%;\n  border: 1px solid #9d9d9d;\n}\n\n.bullet:hover {\n  cursor: pointer;\n}\n\n.bullet-active {\n  background-color: #4c8dff;\n  border-color: #4c8dff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvY29tcG9uZW50cy92aWV3LWNvbXBvbmVudHMvYnVsbGV0L0U6XFxQcm9qZWN0c1xcdmNhLWFwcFxcRnJvbnRlbmRcXHZjYS1jb20tYXBwL3NyY1xcc2hhcmVkXFxjb21wb25lbnRzXFx2aWV3LWNvbXBvbmVudHNcXGJ1bGxldFxcYnVsbGV0LmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9jb21wb25lbnRzL3ZpZXctY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL3NoYXJlZC9jb21wb25lbnRzL3ZpZXctY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1bGxldHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luOiAwIDRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOWQ5ZDlkO1xyXG59XHJcblxyXG4uYnVsbGV0OmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1bGxldC1hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGRmZjtcclxuICBib3JkZXItY29sb3I6ICM0YzhkZmY7XHJcbn1cclxuIiwiLmJ1bGxldCB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzlkOWQ5ZDtcbn1cblxuLmJ1bGxldDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4ZGZmO1xuICBib3JkZXItY29sb3I6ICM0YzhkZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/shared/components/view-components/bullet/bullet.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/shared/components/view-components/bullet/bullet.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BulletComponent */

  /***/
  function srcSharedComponentsViewComponentsBulletBulletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BulletComponent", function () {
      return BulletComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BulletComponent =
    /*#__PURE__*/
    function () {
      function BulletComponent() {
        _classCallCheck(this, BulletComponent);

        this.active = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(BulletComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.click.emit();
        }
      }]);

      return BulletComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BulletComponent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('bullet-click'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BulletComponent.prototype, "click", void 0);
    BulletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bullet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bullet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/view-components/bullet/bullet.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bullet.component.scss */
      "./src/shared/components/view-components/bullet/bullet.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BulletComponent);
    /***/
  },

  /***/
  "./src/shared/components/view-components/view-components.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/shared/components/view-components/view-components.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ViewComponentsModule */

  /***/
  function srcSharedComponentsViewComponentsViewComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponentsModule", function () {
      return ViewComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _bullet_bullet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bullet/bullet.component */
    "./src/shared/components/view-components/bullet/bullet.component.ts");

    var ViewComponentsModule = function ViewComponentsModule() {
      _classCallCheck(this, ViewComponentsModule);
    };

    ViewComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_bullet_bullet_component__WEBPACK_IMPORTED_MODULE_3__["BulletComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_bullet_bullet_component__WEBPACK_IMPORTED_MODULE_3__["BulletComponent"]]
    })], ViewComponentsModule);
    /***/
  },

  /***/
  "./src/shared/entities/channel.ts":
  /*!****************************************!*\
    !*** ./src/shared/entities/channel.ts ***!
    \****************************************/

  /*! exports provided: Channel */

  /***/
  function srcSharedEntitiesChannelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Channel", function () {
      return Channel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Channel = function Channel(channelId, name) {
      _classCallCheck(this, Channel);

      this.messageIds = [];
      this.participantIds = [];
      this.currentMessage = '';
      this.id = channelId;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/shared/entities/group.ts":
  /*!**************************************!*\
    !*** ./src/shared/entities/group.ts ***!
    \**************************************/

  /*! exports provided: Group */

  /***/
  function srcSharedEntitiesGroupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Group", function () {
      return Group;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _enums_group_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enums/group-type.enum */
    "./src/shared/enums/group-type.enum.ts");

    var Group = function Group(id, name) {
      var groupType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _enums_group_type_enum__WEBPACK_IMPORTED_MODULE_1__["GroupType"].Event;

      _classCallCheck(this, Group);

      this.channelIds = [];
      this.participantIds = [];
      this.description = '';
      this.id = id;
      this.groupType = groupType;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/shared/entities/message.ts":
  /*!****************************************!*\
    !*** ./src/shared/entities/message.ts ***!
    \****************************************/

  /*! exports provided: Message */

  /***/
  function srcSharedEntitiesMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Message = function Message(messageId, content, createdOn, userId) {
      _classCallCheck(this, Message);

      this.id = messageId;
      this.content = content;
      this.createdOn = createdOn;
      this.userId = userId;
    };
    /***/

  },

  /***/
  "./src/shared/entities/user.ts":
  /*!*************************************!*\
    !*** ./src/shared/entities/user.ts ***!
    \*************************************/

  /*! exports provided: User */

  /***/
  function srcSharedEntitiesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(id, userName) {
      _classCallCheck(this, User);

      this.id = id;
      this.userName = userName;
    };
    /***/

  },

  /***/
  "./src/shared/enums/group-type.enum.ts":
  /*!*********************************************!*\
    !*** ./src/shared/enums/group-type.enum.ts ***!
    \*********************************************/

  /*! exports provided: GroupType */

  /***/
  function srcSharedEnumsGroupTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupType", function () {
      return GroupType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GroupType;

    (function (GroupType) {
      GroupType[GroupType["Group"] = 0] = "Group";
      GroupType[GroupType["LocalGroup"] = 1] = "LocalGroup";
      GroupType[GroupType["Event"] = 2] = "Event";
    })(GroupType || (GroupType = {}));
    /***/

  },

  /***/
  "./src/shared/states/app-state/actions/channel.actions.ts":
  /*!****************************************************************!*\
    !*** ./src/shared/states/app-state/actions/channel.actions.ts ***!
    \****************************************************************/

  /*! exports provided: CreateNewChannel */

  /***/
  function srcSharedStatesAppStateActionsChannelActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNewChannel", function () {
      return CreateNewChannel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CreateNewChannel = function CreateNewChannel(name) {
      var participantsIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      _classCallCheck(this, CreateNewChannel);

      this.name = name;
      this.participantsIds = participantsIds;
    };

    CreateNewChannel.type = '[App State] Create new Channel';
    /***/
  },

  /***/
  "./src/shared/states/app-state/actions/group.actions.ts":
  /*!**************************************************************!*\
    !*** ./src/shared/states/app-state/actions/group.actions.ts ***!
    \**************************************************************/

  /*! exports provided: CreateEventGroup, CreateLocalGroup */

  /***/
  function srcSharedStatesAppStateActionsGroupActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEventGroup", function () {
      return CreateEventGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateLocalGroup", function () {
      return CreateLocalGroup;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CreateEventGroup = function CreateEventGroup(name) {
      var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var isWholeDay = arguments.length > 2 ? arguments[2] : undefined;
      var from = arguments.length > 3 ? arguments[3] : undefined;
      var to = arguments.length > 4 ? arguments[4] : undefined;

      _classCallCheck(this, CreateEventGroup);

      this.name = name;
      this.description = description;
      this.isWholeDay = isWholeDay;
      this.from = from;
      this.to = to;
    };

    CreateEventGroup.type = '[Group] Create New Local Group';

    var CreateLocalGroup = function CreateLocalGroup(name, description) {
      _classCallCheck(this, CreateLocalGroup);

      this.name = name;
      this.description = description;
    };

    CreateLocalGroup.type = '[Group] Create Local Group';
    /***/
  },

  /***/
  "./src/shared/states/app-state/app-state.actions.ts":
  /*!**********************************************************!*\
    !*** ./src/shared/states/app-state/app-state.actions.ts ***!
    \**********************************************************/

  /*! exports provided: SetCurrentChannel, SetCurrentGroup, SubscribeToGroup, AddMessage, SaveMessageToChannel */

  /***/
  function srcSharedStatesAppStateAppStateActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetCurrentChannel", function () {
      return SetCurrentChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetCurrentGroup", function () {
      return SetCurrentGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeToGroup", function () {
      return SubscribeToGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMessage", function () {
      return AddMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveMessageToChannel", function () {
      return SaveMessageToChannel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SetCurrentChannel = function SetCurrentChannel(channelId) {
      _classCallCheck(this, SetCurrentChannel);

      this.channelId = channelId;
    };

    SetCurrentChannel.type = '[App State] Set CurrentChannel';

    var SetCurrentGroup = function SetCurrentGroup(groupId) {
      _classCallCheck(this, SetCurrentGroup);

      this.groupId = groupId;
    };

    SetCurrentGroup.type = '[App State] Set CurrentGroup';

    var SubscribeToGroup = function SubscribeToGroup(groupId) {
      _classCallCheck(this, SubscribeToGroup);

      this.groupId = groupId;
    };

    SubscribeToGroup.type = '[App State] Subscribe to Group';

    var AddMessage = function AddMessage(content) {
      _classCallCheck(this, AddMessage);

      this.content = content;
    };

    AddMessage.type = '[Chat Page] Add Message';

    var SaveMessageToChannel = function SaveMessageToChannel(channelId, content) {
      _classCallCheck(this, SaveMessageToChannel);

      this.channelId = channelId;
      this.content = content;
    };

    SaveMessageToChannel.type = '[Chat Page] Update Current Message';
    /***/
  },

  /***/
  "./src/shared/states/app-state/app-state.ts":
  /*!**************************************************!*\
    !*** ./src/shared/states/app-state/app-state.ts ***!
    \**************************************************/

  /*! exports provided: AppState */

  /***/
  function srcSharedStatesAppStateAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _group$participantIds, _group2$participantId;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppState", function () {
      return AppState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _entities_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../entities/group */
    "./src/shared/entities/group.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../tests/helpers/guid */
    "./src/tests/helpers/guid.ts");
    /* harmony import */


    var _entities_channel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../entities/channel */
    "./src/shared/entities/channel.ts");
    /* harmony import */


    var _entities_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../entities/user */
    "./src/shared/entities/user.ts");
    /* harmony import */


    var _app_state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-state.actions */
    "./src/shared/states/app-state/app-state.actions.ts");
    /* harmony import */


    var _entities_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../entities/message */
    "./src/shared/entities/message.ts");
    /* harmony import */


    var _enums_group_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../enums/group-type.enum */
    "./src/shared/enums/group-type.enum.ts");
    /* harmony import */


    var _actions_group_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./actions/group.actions */
    "./src/shared/states/app-state/actions/group.actions.ts");
    /* harmony import */


    var _actions_channel_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./actions/channel.actions */
    "./src/shared/states/app-state/actions/channel.actions.ts");

    var constUser = new _entities_user__WEBPACK_IMPORTED_MODULE_5__["User"]('e51636d8-2a9d-43bf-8f67-be9c1146ec99', 'ich');
    var constUser2 = new _entities_user__WEBPACK_IMPORTED_MODULE_5__["User"]('df6ed3e6-82ed-4a1b-b75b-d9699d9ce1f5', 'Max');
    var m1 = [new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message Allgemein 1', new Date(Date.now()).getTime(), constUser.id), new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message Allgemein 2', new Date(Date.now()).getTime(), constUser2.id), new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message Allgemein 3', new Date(Date.now()).getTime(), constUser.id)];
    var m2 = [new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message Drop Treff 1', new Date(Date.now()).getTime(), constUser.id), new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message Drop Treff 2', new Date(Date.now()).getTime(), constUser2.id), new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message  Drop Treff 3', new Date(Date.now()).getTime(), constUser.id)];

    var channels = _construct(Array, [new _entities_channel__WEBPACK_IMPORTED_MODULE_4__["Channel"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Allgemein'), new _entities_channel__WEBPACK_IMPORTED_MODULE_4__["Channel"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Drop Treffen'), new _entities_channel__WEBPACK_IMPORTED_MODULE_4__["Channel"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Stammtisch')]);

    channels[0].messageIds = m1.map(function (x) {
      return x.id;
    });
    channels[1].messageIds = m2.map(function (x) {
      return x.id;
    });

    function setParticipanst(channesl, messages, groupId) {
      channesl.forEach(function (x) {
        var userIds = new Set();
        messages.forEach(function (m) {
          return userIds.add(m.userId);
        });
        x.participantIds = Array.from(userIds.values());
        x.groupId = groupId;
      });
    }

    var m3 = [new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message Drop Treff 1', new Date(Date.now()).getTime(), constUser.id), new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message Drop Treff 2', new Date(Date.now()).getTime(), constUser2.id), new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Message  Drop Treff 3', new Date(Date.now()).getTime(), constUser.id)];
    var group2Channels = [new _entities_channel__WEBPACK_IMPORTED_MODULE_4__["Channel"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Allgemein')];
    var group = new _entities_group__WEBPACK_IMPORTED_MODULE_1__["Group"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'VCA Karlsruhe', _enums_group_type_enum__WEBPACK_IMPORTED_MODULE_8__["GroupType"].Event);
    var group2 = new _entities_group__WEBPACK_IMPORTED_MODULE_1__["Group"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'VCA Stuttgart', _enums_group_type_enum__WEBPACK_IMPORTED_MODULE_8__["GroupType"].LocalGroup);
    var group3Channels = [new _entities_channel__WEBPACK_IMPORTED_MODULE_4__["Channel"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'Allgemein')];
    var group3 = new _entities_group__WEBPACK_IMPORTED_MODULE_1__["Group"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), 'VCS St.P', _enums_group_type_enum__WEBPACK_IMPORTED_MODULE_8__["GroupType"].LocalGroup);

    (_group$participantIds = group.participantIds).push.apply(_group$participantIds, [constUser.id, constUser2.id]);

    (_group2$participantId = group2.participantIds).push.apply(_group2$participantId, [constUser.id, constUser2.id]);

    setParticipanst(channels, m1, group.id);
    setParticipanst(group2Channels, m2, group2.id);
    setParticipanst(group3Channels, m3, group3.id);

    var AppState =
    /*#__PURE__*/
    function () {
      function AppState() {
        _classCallCheck(this, AppState);
      }

      _createClass(AppState, [{
        key: "setCurrentChannel",
        value: function setCurrentChannel(ctx, action) {
          var currentUiState = ctx.getState().uiState;
          currentUiState.currentChannelId = action.channelId;
          currentUiState.lastVisitChannel.set(currentUiState.currentGroupId, action.channelId);
          ctx.patchState({
            uiState: currentUiState
          });
        }
      }, {
        key: "createNewChannel",
        value: function createNewChannel(ctx, action) {
          var _newChannel$participa;

          var currentState = ctx.getState();
          var newChannel = new _entities_channel__WEBPACK_IMPORTED_MODULE_4__["Channel"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), action.name);
          newChannel.groupId = currentState.uiState.currentGroupId;
          newChannel.participantIds.push(currentState.uiState.userId);

          (_newChannel$participa = newChannel.participantIds).push.apply(_newChannel$participa, _toConsumableArray(action.participantsIds));

          currentState.dataStore.channels.set(newChannel.id, newChannel);
          currentState.uiState.currentChannelId = newChannel.id;
          ctx.patchState({
            dataStore: currentState.dataStore,
            uiState: currentState.uiState
          });
        }
      }, {
        key: "setCurrentGroup",
        value: function setCurrentGroup(ctx, action) {
          var currentState = ctx.getState();
          currentState.uiState.currentGroupId = action.groupId;

          if (currentState.uiState.lastVisitChannel.has(action.groupId)) {
            currentState.uiState.currentChannelId = currentState.uiState.lastVisitChannel.get(action.groupId);
          } else {
            var groupChannels = Array.from(currentState.dataStore.channels.values()).filter(function (x) {
              return x.groupId === action.groupId;
            });

            if (groupChannels.length > 0) {
              currentState.uiState.currentChannelId = groupChannels[0].id;
            } else {
              currentState.uiState.currentChannelId = null;
            }
          }

          ctx.patchState({
            uiState: currentState.uiState
          });
        }
      }, {
        key: "subscribeToGroup",
        value: function subscribeToGroup(ctx, action) {
          var state = ctx.getState();
          var dataStore = state.dataStore;
          var groupToSubscribe = dataStore.groups.get(action.groupId);
          groupToSubscribe.participantIds = [].concat(_toConsumableArray(groupToSubscribe.participantIds), [state.uiState.userId]);
          ctx.patchState({
            dataStore: dataStore
          });
        }
      }, {
        key: "createLocalGroup",
        value: function createLocalGroup(ctx, action) {
          var state = ctx.getState();
          var newGroup = new _entities_group__WEBPACK_IMPORTED_MODULE_1__["Group"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), action.name, _enums_group_type_enum__WEBPACK_IMPORTED_MODULE_8__["GroupType"].LocalGroup);
          newGroup.description = action.description;
          newGroup.participantIds.push(state.uiState.userId);
          state.dataStore.groups.set(newGroup.id, newGroup);
          state.uiState.currentGroupId = newGroup.id;
          ctx.patchState({
            uiState: state.uiState,
            dataStore: state.dataStore
          });
          ctx.dispatch(new _actions_channel_actions__WEBPACK_IMPORTED_MODULE_10__["CreateNewChannel"]('Allgemein'));
        }
      }, {
        key: "addMessage",
        value: function addMessage(ctx, action) {
          var state = ctx.getState();
          var dataStore = state.dataStore;
          var messages = [];

          if (dataStore.messages.has(state.uiState.currentChannelId)) {
            messages = dataStore.messages.get(state.uiState.currentChannelId);
          }

          dataStore.messages.set(state.uiState.currentChannelId, [].concat(_toConsumableArray(messages), [new _entities_message__WEBPACK_IMPORTED_MODULE_7__["Message"](_tests_helpers_guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(), action.content, Date.now(), state.uiState.userId)]));
          ctx.patchState({
            dataStore: dataStore
          });
        }
      }, {
        key: "updateCurrentMessage",
        value: function updateCurrentMessage(ctx, action) {
          var currentUiState = ctx.getState().uiState;
          currentUiState.channelMessage.set(action.channelId, action.content);
          ctx.patchState({
            uiState: currentUiState
          });
        }
      }], [{
        key: "currentChannel",
        value: function currentChannel(state) {
          return state.dataStore.channels.get(state.uiState.currentChannelId);
        }
      }, {
        key: "currentGroup",
        value: function currentGroup(state) {
          return state.dataStore.groups.get(state.uiState.currentGroupId);
        }
      }, {
        key: "subscribedChannels",
        value: function subscribedChannels(state) {
          return Array.from(state.dataStore.channels.values()).filter(function (x) {
            return x.participantIds.includes(state.uiState.userId) && x.groupId === state.uiState.currentGroupId;
          });
        }
      }, {
        key: "subscribedGroups",
        value: function subscribedGroups(state) {
          return Array.from(state.dataStore.groups.values()).filter(function (x) {
            return x.participantIds.includes(state.uiState.userId);
          }).map(function (g) {
            return {
              id: g.id,
              name: g.name,
              groupType: g.groupType
            };
          });
        }
      }, {
        key: "notSubscribedGroups",
        value: function notSubscribedGroups(state) {
          var userid = state.uiState.userId;
          return Array.from(state.dataStore.groups.values()).filter(function (x) {
            return !x.participantIds.includes(userid);
          }).map(function (g) {
            return {
              id: g.id,
              name: g.name,
              groupType: g.groupType
            };
          });
        }
      }, {
        key: "user",
        value: function user(state) {
          return state.dataStore.users.get(state.uiState.userId);
        }
      }, {
        key: "currentChatMessages",
        value: function currentChatMessages(state) {
          var mapToVM = function mapToVM(message) {
            var name = state.dataStore.users.has(message.userId) ? state.dataStore.users.get(message.userId).userName : '';
            return {
              id: message.id,
              content: message.content,
              timestamp: message.createdOn,
              userName: name
            };
          };

          var messages = state.dataStore.messages.get(state.uiState.currentChannelId).map(function (x) {
            return mapToVM(x);
          });
          console.log(messages);
          return messages;
        }
      }, {
        key: "currentChatMessage",
        value: function currentChatMessage(state) {
          if (state.uiState.channelMessage.has(state.uiState.currentChannelId)) {
            return state.uiState.channelMessage.get(state.uiState.currentChannelId);
          }

          return '';
        }
      }]);

      return AppState;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SetCurrentChannel"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SetCurrentChannel"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppState.prototype, "setCurrentChannel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_channel_actions__WEBPACK_IMPORTED_MODULE_10__["CreateNewChannel"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_channel_actions__WEBPACK_IMPORTED_MODULE_10__["CreateNewChannel"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppState.prototype, "createNewChannel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SetCurrentGroup"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SetCurrentGroup"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppState.prototype, "setCurrentGroup", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SubscribeToGroup"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SubscribeToGroup"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppState.prototype, "subscribeToGroup", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_actions_group_actions__WEBPACK_IMPORTED_MODULE_9__["CreateLocalGroup"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_group_actions__WEBPACK_IMPORTED_MODULE_9__["CreateLocalGroup"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppState.prototype, "createLocalGroup", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_state_actions__WEBPACK_IMPORTED_MODULE_6__["AddMessage"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_state_actions__WEBPACK_IMPORTED_MODULE_6__["AddMessage"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppState.prototype, "addMessage", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SaveMessageToChannel"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _app_state_actions__WEBPACK_IMPORTED_MODULE_6__["SaveMessageToChannel"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], AppState.prototype, "updateCurrentMessage", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", _entities_channel__WEBPACK_IMPORTED_MODULE_4__["Channel"])], AppState, "currentChannel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", _entities_group__WEBPACK_IMPORTED_MODULE_1__["Group"])], AppState, "currentGroup", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], AppState, "subscribedChannels", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], AppState, "subscribedGroups", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], AppState, "notSubscribedGroups", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", _entities_user__WEBPACK_IMPORTED_MODULE_5__["User"])], AppState, "user", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], AppState, "currentChatMessages", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", String)], AppState, "currentChatMessage", null);
    AppState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
      name: 'appState',
      defaults: {
        dataStore: {
          groups: new Map([[group.id, group], [group2.id, group2], [group3.id, group3]]),
          channels: new Map([[channels[0].id, channels[0]], [channels[1].id, channels[1]], [group2Channels[0].id, group2Channels[0]], [group3Channels[0].id, group3Channels[0]]]),
          messages: new Map([[channels[0].id, m1], [channels[1].id, m2], [group2Channels[0].id, m3]]),
          events: new Map(),
          users: new Map([[constUser.id, constUser], [constUser2.id, constUser2]])
        },
        uiState: {
          userId: constUser.id,
          currentGroupId: group.id,
          currentChannelId: channels[0].id,
          lastVisitChannel: new Map(),
          channelMessage: new Map()
        }
      },
      children: []
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AppState);
    /***/
  },

  /***/
  "./src/tests/helpers/guid.ts":
  /*!***********************************!*\
    !*** ./src/tests/helpers/guid.ts ***!
    \***********************************/

  /*! exports provided: Guid */

  /***/
  function srcTestsHelpersGuidTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Guid", function () {
      return Guid;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Guid =
    /*#__PURE__*/
    function () {
      function Guid() {
        _classCallCheck(this, Guid);
      }

      _createClass(Guid, null, [{
        key: "newGuid",
        value: function newGuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }]);

      return Guid;
    }();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\vca-app\Frontend\vca-com-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map