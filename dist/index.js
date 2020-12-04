(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayStatus = exports.MockDotpayService = exports.MockDotpayPaymentPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "MockDotpayPaymentPlugin", { enumerable: true, get: function () { return index_1.MockDotpayPaymentPlugin; } });
var index_2 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "MockDotpayService", { enumerable: true, get: function () { return index_2.MockDotpayService; } });
var index_3 = __webpack_require__(/*! ./src/types/index */ "./src/types/index.ts");
Object.defineProperty(exports, "DotpayStatus", { enumerable: true, get: function () { return index_3.DotpayStatus; } });


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDotpayPaymentPlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var dotpay_reducer_1 = __webpack_require__(/*! ./store/dotpay.reducer */ "./src/store/dotpay.reducer.ts");
var dotpay_default_1 = __webpack_require__(/*! ./store/dotpay.default */ "./src/store/dotpay.default.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/types/index.ts");
/**
 * Libstorefront plugin template
 */
var MockDotpayPaymentPlugin = function (_a) {
    var _b = _a.shouldFail, shouldFail = _b === void 0 ? false : _b, _c = _a.failStatus, failStatus = _c === void 0 ? types_1.DotpayStatus.SUCCESS : _c;
    return function (libstorefront) {
        libstorefront.getIOCContainer().bind(service_1.MockDotpayService).to(service_1.MockDotpayService);
        libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
            lsf.registerModule(libstorefront_1.createLibstorefrontModule('dotpay', dotpay_reducer_1.dotpayReducer, dotpay_default_1.DotpayDefaultState));
            lsf.getIOCContainer().get(service_1.MockDotpayService).setConfig({ shouldFail: shouldFail, failStatus: failStatus });
        });
        libstorefront.listenTo(libstorefront_1.HookType.AfterInit, function () { return libstorefront.getIOCContainer().get(service_1.MockDotpayService).loadLastTransactionFromCache(); });
    };
};
exports.MockDotpayPaymentPlugin = MockDotpayPaymentPlugin;


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDotpayService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var dotpay_thunks_1 = __webpack_require__(/*! ../store/dotpay.thunks */ "./src/store/dotpay.thunks.ts");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var MockDotpayService = /** @class */ (function () {
    function MockDotpayService(store) {
        this.store = store;
    }
    /**
     * Returns dotpay form that should be POST send
     * as application/x-www-form-urlencoded form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    MockDotpayService.prototype.getDotpayPaymentForm = function () {
        return this.store.dispatch(dotpay_thunks_1.MockDotpayThunks.getDotpayForm());
    };
    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    MockDotpayService.prototype.getDotpayPaymentStatus = function () {
        return this.store.dispatch(dotpay_thunks_1.MockDotpayThunks.getDotpayStatus(this.shouldFail, this.failStatus));
    };
    /**
     * Sends parsed dotpay form
     */
    MockDotpayService.prototype.sendDotpayForm = function () {
        return this.store.dispatch(dotpay_thunks_1.MockDotpayThunks.sendDotpayForm(this.shouldFail, this.failStatus));
    };
    MockDotpayService.prototype.loadLastTransactionFromCache = function () {
        this.store.dispatch(dotpay_thunks_1.MockDotpayThunks.loadLastDotpayTransaction());
    };
    MockDotpayService.prototype.setConfig = function (_a) {
        var shouldFail = _a.shouldFail, failStatus = _a.failStatus;
        this.shouldFail = shouldFail;
        this.failStatus = failStatus;
    };
    MockDotpayService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], MockDotpayService);
    return MockDotpayService;
}());
exports.MockDotpayService = MockDotpayService;


/***/ }),

/***/ "./src/store/dotpay.actions.ts":
/*!*************************************!*\
  !*** ./src/store/dotpay.actions.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayActions = void 0;
var DotpayActions;
(function (DotpayActions) {
    DotpayActions.SN_DOTPAY = 'dotpay';
    DotpayActions.SET_DOTPAY_FORM = DotpayActions.SN_DOTPAY + '/SET_FORM';
    DotpayActions.setDotpayForm = function (form) { return ({
        type: DotpayActions.SET_DOTPAY_FORM,
        payload: form
    }); };
    DotpayActions.SET_DOTPAY_URL = DotpayActions.SN_DOTPAY + '/SET_URL';
    DotpayActions.setDotpayUrl = function (url) { return ({
        type: DotpayActions.SET_DOTPAY_URL,
        payload: url
    }); };
    DotpayActions.SET_DOTPAY_STATUS = DotpayActions.SN_DOTPAY + '/SET_STATUS';
    DotpayActions.setDotpayStatus = function (status) { return ({
        type: DotpayActions.SET_DOTPAY_STATUS,
        payload: status
    }); };
})(DotpayActions = exports.DotpayActions || (exports.DotpayActions = {}));


/***/ }),

/***/ "./src/store/dotpay.default.ts":
/*!*************************************!*\
  !*** ./src/store/dotpay.default.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayDefaultState = void 0;
var types_1 = __webpack_require__(/*! ../types */ "./src/types/index.ts");
exports.DotpayDefaultState = {
    form: null,
    url: null,
    status: types_1.DotpayStatus.NOT_EXISTS
};


/***/ }),

/***/ "./src/store/dotpay.reducer.ts":
/*!*************************************!*\
  !*** ./src/store/dotpay.reducer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotpayReducer = void 0;
var dotpay_default_1 = __webpack_require__(/*! ./dotpay.default */ "./src/store/dotpay.default.ts");
var dotpay_actions_1 = __webpack_require__(/*! ./dotpay.actions */ "./src/store/dotpay.actions.ts");
var dotpayReducer = function (state, action) {
    if (state === void 0) { state = dotpay_default_1.DotpayDefaultState; }
    switch (action.type) {
        case dotpay_actions_1.DotpayActions.SET_DOTPAY_FORM: {
            return __assign(__assign({}, state), { form: action.payload });
        }
        case dotpay_actions_1.DotpayActions.SET_DOTPAY_STATUS: {
            return __assign(__assign({}, state), { status: action.payload });
        }
        case dotpay_actions_1.DotpayActions.SET_DOTPAY_URL: {
            return __assign(__assign({}, state), { url: action.payload });
        }
        default: return state || dotpay_default_1.DotpayDefaultState;
    }
};
exports.dotpayReducer = dotpayReducer;


/***/ }),

/***/ "./src/store/dotpay.thunks.ts":
/*!************************************!*\
  !*** ./src/store/dotpay.thunks.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDotpayThunks = void 0;
var dotpay_actions_1 = __webpack_require__(/*! ./dotpay.actions */ "./src/store/dotpay.actions.ts");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var types_1 = __webpack_require__(/*! ../types */ "./src/types/index.ts");
var timeoutPromise = function (time) {
    if (time === void 0) { time = 2000; }
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, time); });
};
var MockDotpayThunks;
(function (MockDotpayThunks) {
    var _this = this;
    // @ts-ignore
    MockDotpayThunks.getDotpayForm = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var mockData, mockDotpayResponse, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    mockData = {
                        amount: 424.25,
                        api_version: "dev",
                        bylaw: 1,
                        ch_lock: 0,
                        channel: null,
                        chk: "e84b61f89df0254fd55dbdfe4761fdf2e918cc37e684fa7af21d00cc2b913f6f",
                        city: "Twojego Starego",
                        control: 37,
                        country: "PL",
                        currency: "PLN",
                        customer: "eyJwYXllciI6eyJmaXJzdF9uYW1lIjoiTWF0ZXVzeiIsImxhc3RfbmFtZSI6IlBpZXRyb3dpYWsiLCJlbWFpbCI6ImplYmFjLXBpc0BncnVwYWttay5wbCIsInBob25lIjoiNTE1IDMzMyAxMzIxIn0sIm9yZGVyIjp7ImRlbGl2ZXJ5X2FkZHJlc3MiOnsiY2l0eSI6IlR3b2plZ28gU3RhcmVnbyIsInN0cmVldCI6IkxlY2hhIiwiYnVpbGRpbmdfbnVtYmVyIjoiS2FjennFhHNraWVnbyAzIiwicG9zdGNvZGUiOiIzMy0xMDAiLCJjb3VudHJ5IjoiUEwifX19",
                        description: "Nr zamówienia: 6000000038/37",
                        email: "jebac-pis@grupakmk.pl",
                        firstname: "Mateusz",
                        id: 768175,
                        ignore_last_payment_channel: 1,
                        lang: "pl",
                        lastname: "Pietrowiak",
                        personal_data: 1,
                        phone: "515 333 1321",
                        postcode: "33-100",
                        street: "Lecha",
                        street_n1: "Kaczyńskiego 3",
                        type: 0,
                        url: "https://ktm.staging.grupakmk.pl/checkout/dotpay/status",
                        urlc: "https://mage.ktm.staging.grupakmk.pl/dotpay/payment/confirm"
                    };
                    mockDotpayResponse = {
                        data: mockData,
                        url: 'https://ssl.dotpay.pl/test_payment/'
                    };
                    return [4 /*yield*/, dispatch(dotpay_actions_1.DotpayActions.setDotpayForm(mockDotpayResponse.data))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, dispatch(dotpay_actions_1.DotpayActions.setDotpayUrl(mockDotpayResponse.url))];
                case 2:
                    _a.sent();
                    libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.ORDERS).setItem('last_dotpay_payment', getState().dotpay);
                    return [2 /*return*/, mockDotpayResponse];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    }); }; };
    // @ts-ignore
    MockDotpayThunks.getDotpayStatus = function (shouldFail, failStatus) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var timeoutPromise, status_1, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timeoutPromise = function () { return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 1000); }); };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    status_1 = shouldFail ? (failStatus || types_1.DotpayStatus.ERROR) : types_1.DotpayStatus.SUCCESS;
                    return [4 /*yield*/, timeoutPromise()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(status_1))];
                case 3:
                    _a.sent();
                    return [2 /*return*/, status_1];
                case 4:
                    e_2 = _a.sent();
                    console.warn('Error while fetching status: ', e_2);
                    return [2 /*return*/, null];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    MockDotpayThunks.sendDotpayForm = function (shouldFail, failStatus) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var trackStatus, dotpay, e_3;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    trackStatus = function () {
                        var interval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            var status;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, dispatch(MockDotpayThunks.getDotpayStatus(shouldFail, failStatus))];
                                    case 1:
                                        status = _a.sent();
                                        if (status === types_1.DotpayStatus.SUCCESS) {
                                            clearInterval(interval);
                                        }
                                        libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.ORDERS).setItem('last_dotpay_payment', getState().dotpay);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 5000);
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    dotpay = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().dotpay;
                    return [4 /*yield*/, timeoutPromise(4000)];
                case 2:
                    _a.sent();
                    trackStatus();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    trackStatus();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }; };
    MockDotpayThunks.loadLastDotpayTransaction = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var lastDotpayPayment, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.ORDERS).getItem('last_dotpay_payment')];
                case 1:
                    lastDotpayPayment = _a.sent();
                    if (!lastDotpayPayment) {
                        return [2 /*return*/];
                    }
                    dispatch(dotpay_actions_1.DotpayActions.setDotpayUrl(lastDotpayPayment.url));
                    dispatch(dotpay_actions_1.DotpayActions.setDotpayForm(lastDotpayPayment.form));
                    dispatch(dotpay_actions_1.DotpayActions.setDotpayStatus(lastDotpayPayment.status));
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
})(MockDotpayThunks = exports.MockDotpayThunks || (exports.MockDotpayThunks = {}));


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotpayStatus = void 0;
var DotpayStatus;
(function (DotpayStatus) {
    DotpayStatus[DotpayStatus["NOT_EXISTS"] = 1] = "NOT_EXISTS";
    DotpayStatus[DotpayStatus["ERROR"] = 0] = "ERROR";
    DotpayStatus[DotpayStatus["PENDING"] = 1] = "PENDING";
    DotpayStatus[DotpayStatus["SUCCESS"] = 2] = "SUCCESS";
    DotpayStatus[DotpayStatus["TOO_MANY"] = 3] = "TOO_MANY";
    DotpayStatus[DotpayStatus["OTHER_STATUS"] = 4] = "OTHER_STATUS"; // Status different than ERROR or PENDING
})(DotpayStatus = exports.DotpayStatus || (exports.DotpayStatus = {}));


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map