module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/Banner.js";



var Banner = function Banner(_ref) {
  var banner = _ref.banner,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1226233666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: banner,
    alt: title,
    className: "jsx-1226233666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1226233666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1226233666",
    css: "div.jsx-1226233666{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-1226233666{width:100%;height:auto;}h1.jsx-1226233666{position:absolute;color:white;text-shadow:0 1px 2px black;font-size:3rem;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9CYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3FCLEFBR2tDLEFBTVAsQUFJTyxXQUhOLE9BTkMsQUFVRCxLQUhmLE9BSStCLDRCQUNiLGVBQ04sU0FDWixVQWIwQixtR0FDSiw2RkFDdEIiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9jb21wb25lbnRzL0Jhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQmFubmVyID0gKHsgYmFubmVyLCB0aXRsZSB9KSA9PiB7XG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxpbWcgc3JjPXtiYW5uZXJ9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxuIl19 */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/Banner.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/ChannelsGrid.js":
/*!************************************!*\
  !*** ./components/ChannelsGrid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");





var ChannelsGrid = function ChannelsGrid(_ref) {
  var channels = _ref.channels,
      elements = _ref.elements;
  var link = elements === 'channels' ? '/channel?id=' : '/podcast?id=';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-803309588" + " " + "channels"
  }, channels.map(function (channel) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "channel",
      params: {
        slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__["default"])(channel.title),
        id: channel.id
      },
      key: channel.id,
      prefetch: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-803309588" + " " + "channel"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: channel.urls.logo_image ? channel.urls.logo_image.original : channel.urls.image,
      alt: "",
      className: "jsx-803309588"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-803309588"
    }, channel.title)));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "803309588",
    css: ".channels.jsx-803309588{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-803309588{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-803309588 img.jsx-803309588{border - radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-803309588{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9DaGFubmVsc0dyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JxQixBQUc2QixBQU1GLEFBTU0sQUFLUixZQUNDLENBakJGLENBTU0sTUFNb0IsT0FYM0IsQ0FpQkcsTUFYTCxNQUxpRCxJQWlCbkQsQ0FYWSxRQVlILE9BUFAsV0FDZCxBQU9BLHdCQVpBLEdBTkEiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9jb21wb25lbnRzL0NoYW5uZWxzR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXG5cbmNvbnN0IENoYW5uZWxzR3JpZCA9ICh7IGNoYW5uZWxzLCBlbGVtZW50cyB9KSA9PiB7XG4gICBjb25zdCBsaW5rID0gZWxlbWVudHMgPT09ICdjaGFubmVscycgPyAnL2NoYW5uZWw/aWQ9JyA6ICcvcG9kY2FzdD9pZD0nXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxuICAgICAgICAge2NoYW5uZWxzLm1hcCgoY2hhbm5lbCkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgIHJvdXRlPSdjaGFubmVsJ1xuICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICBzbHVnOiBzbHVnKGNoYW5uZWwudGl0bGUpLCBpZDogY2hhbm5lbC5pZFxuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgIGtleT17Y2hhbm5lbC5pZH1cbiAgICAgICAgICAgICAgIHByZWZldGNoPlxuICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlID8gY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgOiBjaGFubmVsLnVybHMuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDI+e2NoYW5uZWwudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICkpfVxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICB9XG4gICAgICAgICAgICBhLmNoYW5uZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlciAtIHJhZGl1czogM3B4O1xuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2RpdiA+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxzR3JpZFxuIl19 */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/ChannelsGrid.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChannelsGrid);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3267391863"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-3267391863"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3267391863"
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3267391863"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3267391863"
  }, title))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2195037791",
    css: "header.jsx-3267391863{color:#fff;background:#8756ca !important;padding:15px;text-align:center !important;}header.jsx-3267391863 a.jsx-3267391863{color:#fff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJxQixBQUcyQixBQU1BLFdBTG1CLEFBTVQsOEJBTFIsYUFDZ0IsT0FLaEMsc0JBSkEiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKVxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgIDxoZWFkZXI+PExpbmsgaHJlZj1cIi9cIj48YT57dGl0bGV9PC9hPjwvTGluaz48L2hlYWRlcj5cbiAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2EgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciBhIHtcbiAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xuICAgICAgICAgICAgI25wcm9ncmVzcyB7XG4gICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI25wcm9ncmVzcyAuYmFyIHtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xuICAgICAgICAgICAgI25wcm9ncmVzcyAucGVnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyOWQsIDAgMCA1cHggIzI5ZDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcblxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xuICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxuICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/Layout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1566345889",
    css: "body{margin:0;font-family:system-ui;}#nprogress{pointer-events:none;}#nprogress .bar{background:black;position:fixed;z-index:1031;top:0;left:0;width:100%;height:3px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0I0QixBQUd5QixBQUtXLEFBSUgsQUFXTixBQWVBLEFBUUgsQUFjSyxBQU1FLEFBSW1CLEFBQ0UsQUFHVixBQUNFLFNBdkVOLEVBMkNiLEdBdkJNLEFBZUgsRUFzQkcsQ0FoREEsQ0FzRGxCLEVBMURBLEdBdUNzQixNQVJULEVBbkNiLEFBaUVzQyxDQXhEdEIsQUFXTixDQThDOEIsQ0FUeEMsUUFwQ1ksQUFlSCxHQTFCQSxBQW1Db0IsTUFsQ25CLEFBMEJDLEdBZkMsSUFWRSxJQTBCZCxJQWZ1QyxHQVZ6QixLQWlDUSxNQWhDdEIsQ0F1RDhCLE1BQ0UsU0F2QlQsUUF2QlgsWUFFd0MsR0FzQmxDLGtCQUV3Qyw4QkF2QkosNEJBd0JLLG1CQXZCTix5RkF3QnJELG9EQXZCQSIsImZpbGUiOiIvVXNlcnMvZXN0ZWJhbi9Eb2N1bWVudHMvQ3Vyc29zL1BsYXR6aS9OZXh0LmpzL3BvZGNhc3RzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgPGhlYWRlcj48TGluayBocmVmPVwiL1wiPjxhPnt0aXRsZX08L2E+PC9MaW5rPjwvaGVhZGVyPlxuICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIGEge1xuICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXG4gICAgICAgICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXG4gICAgICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xuICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xuXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXG4gICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI5ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXG4gICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcbiAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcbiAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/Layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/PodcastList.js":
/*!***********************************!*\
  !*** ./components/PodcastList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");




var getDate = function getDate(timestamp) {
  timestamp = "".concat(timestamp, "000");
  var date = new Date(Number(timestamp));
  return "".concat(date.getDate(), " / ").concat(date.getMonth() + 1, " / ").concat(date.getFullYear());
};

var PodcastList = function PodcastList(_ref) {
  var audios = _ref.audios,
      onClickPodcast = _ref.onClickPodcast;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2133660708" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2133660708"
  }, "\xDAltimos podcasts"), audios.map(function (audio) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/".concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(audio.channel.title), ".").concat(audio.channel.id, "/").concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(audio.title), ".").concat(audio.id),
      onClick: function onClick(event) {
        return onClickPodcast(event, audio);
      },
      key: audio.id,
      className: "jsx-2133660708" + " " + "audio-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: audio.urls.image || 'https://image.flaticon.com/icons/svg/831/831299.svg',
      className: "jsx-2133660708"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2133660708" + " " + "container-text"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-2133660708"
    }, audio.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2133660708"
    }, audio.user.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2133660708"
    }, getDate(audio.recorded_at_ts))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2133660708",
    css: ".container.jsx-2133660708{padding:0 10px;}.audio-container.jsx-2133660708{display:grid;grid-template-columns:1fr 3fr;padding:5px 0;-webkit-text-decoration:none;text-decoration:none;color:#4A4A4A;border-bottom:1px solid rgba(0,0,0,0.1);width:80%;margin-left:10px;}img.jsx-2133660708{height:100px;width:100%;border-radius:5px;}.container-text.jsx-2133660708{margin-left:10px;}h4.jsx-2133660708{margin:0;}.container-text.jsx-2133660708 span.jsx-2133660708{width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnFCLEFBRytCLEFBR0YsQUFVQSxBQUtJLEFBSXJCLEFBR0EsU0FIQyxHQUdBLENBckJpQyxBQVVuQixFQWJkLEVBa0JBLE9BSnFCLGtCQUNyQixDQVhpQixjQUNPLGtEQUNQLGNBQzZCLHdDQUNqQyxVQUVkLGlCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJ1xuXG5jb25zdCBnZXREYXRlID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgdGltZXN0YW1wID0gYCR7dGltZXN0YW1wfTAwMGBcbiAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShOdW1iZXIodGltZXN0YW1wKSlcbiAgIHJldHVybiBgJHtkYXRlLmdldERhdGUoKX0gLyAke2RhdGUuZ2V0TW9udGgoKSArIDF9IC8gJHtkYXRlLmdldEZ1bGxZZWFyKCl9YFxufVxuXG5jb25zdCBQb2RjYXN0TGlzdCA9ICh7IGF1ZGlvcywgb25DbGlja1BvZGNhc3QgfSkgPT4ge1xuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICA8aDI+w5psdGltb3MgcG9kY2FzdHM8L2gyPlxuICAgICAgICAge2F1ZGlvcy5tYXAoKGF1ZGlvKSA9PiAoXG4gICAgICAgICAgICA8YSBocmVmPXtgLyR7c2x1ZyhhdWRpby5jaGFubmVsLnRpdGxlKX0uJHthdWRpby5jaGFubmVsLmlkfS8ke3NsdWcoYXVkaW8udGl0bGUpfS4ke2F1ZGlvLmlkfWB9XG4gICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IG9uQ2xpY2tQb2RjYXN0KGV2ZW50LCBhdWRpbyl9IFxuICAgICAgICAgICAgICAga2V5PXthdWRpby5pZH0gXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdWRpby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdWRpby51cmxzLmltYWdlIHx8ICdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvODMxLzgzMTI5OS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGg0PnthdWRpby50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+e2F1ZGlvLnVzZXIudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e2dldERhdGUoYXVkaW8ucmVjb3JkZWRfYXRfdHMpfTwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgKSl9XG4gICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hdWRpby1jb250YWluZXIge1xuICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lci10ZXh0IHtcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgbWFyZ2luOiAwICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXItdGV4dCBzcGFuIHtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweFxuICAgICAgICAgICAgfVxuICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RMaXN0XG4iXX0= */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/PodcastList.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastList);

/***/ }),

/***/ "./components/PodcastPlayer.js":
/*!*************************************!*\
  !*** ./components/PodcastPlayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);





var PodcastPlayer = function PodcastPlayer(_ref) {
  var audio_clip = _ref.audio_clip,
      onClose = _ref.onClose;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3204185423"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3204185423"
  }, "Podcasts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3204185423" + " " + 'modal'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3204185423" + " " + 'clip'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3204185423"
  }, onClose ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: onClose,
    className: "jsx-3204185423"
  }, "< Volver") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "channel",
    params: {
      slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(audio_clip.channel.title),
      id: audio_clip.channel.id
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3204185423"
  }, "< Volver"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picture", {
    className: "jsx-3204185423"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(audio_clip.urls.image || audio_clip.channel.urls.logo_image.original, ")")
    },
    className: "jsx-3204185423"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3204185423" + " " + 'player'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3204185423"
  }, audio_clip.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3204185423"
  }, audio_clip.channel.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
    controls: true,
    autoPlay: true,
    className: "jsx-3204185423"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: audio_clip.urls.high_mp3,
    type: "audio/mpeg",
    className: "jsx-3204185423"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "320165411",
    css: "nav.jsx-3204185423{background:none;}nav.jsx-3204185423 a.jsx-3204185423{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-3204185423{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-3204185423{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-3204185423 div.jsx-3204185423{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-3204185423{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-3204185423{margin:0;}h6.jsx-3204185423{margin:0;margin-top:1em;}audio.jsx-3204185423{margin-top:2em;width:100%;}.modal.jsx-3204185423{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DcUIsQUFHZ0MsQUFHSyxBQU9SLEFBT0EsQUFTRixBQU9FLEFBS0osQUFHQSxBQUlNLEFBS0EsU0FYbEIsQUFHa0IsRUFmSCxFQU9lLEVBWWhCLEFBS0wsQ0FsRFQsS0FHZ0IsQUFnRE4sRUF4QnFCLENBZS9CLEVBSUEsRUFNVyxNQWhESSxFQWlESCxJQW5CUyxLQW9CSixDQWpEQyxLQXVCUyxPQU8zQixDQW9CQSxFQWpEd0IsYUFJVCxBQU9PLENBWVMsV0FsQk4saUJBbUJ6QixRQXZCQSxxREFLc0IsR0FNSSxnQkFMWCxZQUNmLHVFQUtZLHVDQUNhLDhFQUNYLFdBQ0MsWUFDZiIsImZpbGUiOiIvVXNlcnMvZXN0ZWJhbi9Eb2N1bWVudHMvQ3Vyc29zL1BsYXR6aS9OZXh0LmpzL3BvZGNhc3RzL2NvbXBvbmVudHMvUG9kY2FzdFBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5cbmNvbnN0IFBvZGNhc3RQbGF5ZXIgPSAoeyBhdWRpb19jbGlwLCBvbkNsb3NlIH0pID0+IHtcbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxuXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaXAnPlxuICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgIHtvbkNsb3NlXG4gICAgICAgICAgICAgICAgICAgICA/IDxhIG9uQ2xpY2s9e29uQ2xvc2V9PiZsdDsgVm9sdmVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgOiA8TGluayByb3V0ZT0nY2hhbm5lbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zzogc2x1ZyhhdWRpb19jbGlwLmNoYW5uZWwudGl0bGUpLCBpZDogYXVkaW9fY2xpcC5jaGFubmVsLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPiZsdDsgVm9sdmVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cbiAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2F1ZGlvX2NsaXAudXJscy5pbWFnZSB8fCBhdWRpb19jbGlwLmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XG4gICAgICAgICAgICAgICA8L3BpY3R1cmU+XG5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxuICAgICAgICAgICAgICAgICAgPGgzPnthdWRpb19jbGlwLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDY+e2F1ZGlvX2NsaXAuY2hhbm5lbC50aXRsZX08L2g2PlxuICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIGF1dG9QbGF5PXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpb19jbGlwLnVybHMuaGlnaF9tcDN9IHR5cGU9J2F1ZGlvL21wZWcnIC8+XG4gICAgICAgICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiBhIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xpcCB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwaWN0dXJlIGRpdiB7XG4gICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBsYXllciB7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDYge1xuICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXVkaW8ge1xuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RQbGF5ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/PodcastPlayer.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2446307557",
    css: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHNEIsQUFHNEIsU0FDYSxzQkFDTCxpQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9jb21wb25lbnRzL1BvZGNhc3RQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuXG5jb25zdCBQb2RjYXN0UGxheWVyID0gKHsgYXVkaW9fY2xpcCwgb25DbG9zZSB9KSA9PiB7XG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGlwJz5cbiAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICB7b25DbG9zZVxuICAgICAgICAgICAgICAgICAgICAgPyA8YSBvbkNsaWNrPXtvbkNsb3NlfT4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDogPExpbmsgcm91dGU9J2NoYW5uZWwnXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6IHNsdWcoYXVkaW9fY2xpcC5jaGFubmVsLnRpdGxlKSwgaWQ6IGF1ZGlvX2NsaXAuY2hhbm5lbC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdWRpb19jbGlwLnVybHMuaW1hZ2UgfHwgYXVkaW9fY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxuICAgICAgICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cbiAgICAgICAgICAgICAgICAgIDxoMz57YXVkaW9fY2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPGg2PnthdWRpb19jbGlwLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9fY2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxuICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaXAge1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2RjYXN0UGxheWVyXG4iXX0= */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/PodcastPlayer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastPlayer);

/***/ }),

/***/ "./helpers/slug.js":
/*!*************************!*\
  !*** ./helpers/slug.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slug; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ "slugify");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);

function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/pages/_error.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Error =
/*#__PURE__*/
function (_Component) {
  _inherits(Error, _Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Error).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Oh no :(",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1249058085" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, statusCode === 404 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1249058085" + " " + "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1249058085",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Est\xE1 pagina no existe :(. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1249058085",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1249058085",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Volver al Home")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1249058085" + " " + "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1249058085",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Hubo un problema :(."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1249058085",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Intenta nuevamente en unos segundos."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1249058085",
        css: ".container.jsx-1249058085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90vh;}.message.jsx-1249058085{text-align:center;}a.jsx-1249058085{color:#8756ca;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvcGFnZXMvX2Vycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCd0IsQUFHZ0MsQUFNSyxBQUdKLGNBQ2pCLElBSEEsd0RBTjBCLG1HQUNKLDZGQUNQLFlBQ2YiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9wYWdlcy9fZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgRXJyb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcbiAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbDtcbiAgICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICAgfVxuXG4gICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJPaCBubyA6KFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPT09IDQwNFxuICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Fc3TDoSBwYWdpbmEgbm8gZXhpc3RlIDooLiA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9cIj48YT5Wb2x2ZXIgYWwgSG9tZTwvYT48L0xpbms+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkh1Ym8gdW4gcHJvYmxlbWEgOiguPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkludGVudGEgbnVldmFtZW50ZSBlbiB1bm9zIHNlZ3VuZG9zLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L0xheW91dD5cbiAgICAgIClcbiAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3IiXX0= */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/pages/_error.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_ChannelsGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChannelsGrid */ "./components/ChannelsGrid.js");
/* harmony import */ var _components_PodcastList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PodcastList */ "./components/PodcastList.js");
/* harmony import */ var _components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PodcastPlayer */ "./components/PodcastPlayer.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // COMPONENTS







var channel =
/*#__PURE__*/
function (_Component) {
  _inherits(channel, _Component);

  function channel(props) {
    var _this;

    _classCallCheck(this, channel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(channel).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpenPodcast", function (event, podcast) {
      event.preventDefault();

      _this.setState({
        openPodcast: podcast
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClosePodcast", function (event) {
      event.preventDefault();

      _this.setState({
        openPodcast: null
      });
    });

    _this.state = {
      openPodcast: null
    };
    return _this;
  }

  _createClass(channel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          audio_clips = _this$props.audio_clips,
          channels = _this$props.channels,
          statusCode = _this$props.statusCode;
      var openPodcast = this.state.openPodcast;

      if (statusCode !== 200) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_error__WEBPACK_IMPORTED_MODULE_3__["default"], {
          statusCode: statusCode
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "Podcasts"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        banner: channel.urls.banner_image.original,
        title: channel.title
      }), openPodcast && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2013219012" + " " + "modal"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        audio_clip: openPodcast,
        onClose: this.handleClosePodcast
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2013219012" + " " + "content"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PodcastList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        audios: audio_clips,
        onClickPodcast: this.handleOpenPodcast
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2013219012" + " " + "series"
      }, channels.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-2013219012"
      }, "Series"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ChannelsGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        channels: channels,
        elements: "channels"
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2013219012",
        css: ".content.jsx-2013219012{display:grid;grid-template-columns:2fr 1fr;}@media only screen and (max-width:600px){.content.jsx-2013219012{grid-template-columns:1fr;}}.modal.jsx-2013219012{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRXdCLEFBR2dDLEFBS2dCLEFBSWQsYUFSZSxFQVN4QixNQUNDLEtBTFAsRUFNUSxRQUNDLE9BWFosRUFZaUIsY0FDakIiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcic7XG5cbi8vIENPTVBPTkVOVFNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IENoYW5uZWxzR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxzR3JpZCdcbmltcG9ydCBQb2RjYXN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RMaXN0JztcbmltcG9ydCBQb2RjYXN0UGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdFBsYXllcic7XG5cbmNsYXNzIGNoYW5uZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsXG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVzIH0pIHtcbiAgICAgIGNvbnN0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG4gICAgICB0cnkge1xuICAgICAgICAgY29uc3QgW3JlcXVlc3RDaGFubmVsLCByZXF1ZXN0Q2hpbGRDaGFubmVscywgcmVxdWVzdEF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxuICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcbiAgICAgICAgICAgIGZldGNoKGBodHRwOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICAgICAgIF0pXG5cbiAgICAgICAgIGlmIChyZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgPj0gNDA0KSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcXVlc3RDaGFubmVsLnN0YXR1c1xuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbDogbnVsbCwgYXVkaW9fY2xpcHM6IG51bGwsIGNoYW5uZWxzOiBudWxsLCBzdGF0dXNDb2RlOiByZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgfVxuICAgICAgICAgfVxuXG4gICAgICAgICBjb25zdCB7IGJvZHk6IHsgY2hhbm5lbCB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hhbm5lbC5qc29uKClcbiAgICAgICAgIGNvbnN0IHsgYm9keTogeyBjaGFubmVscyB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hpbGRDaGFubmVscy5qc29uKClcbiAgICAgICAgIGNvbnN0IHsgYm9keTogeyBhdWRpb19jbGlwcyB9IH0gPSBhd2FpdCByZXF1ZXN0QXVkaW9zLmpzb24oKVxuICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlOiAyMDAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXG4gICAgICAgICByZXR1cm4geyBjaGFubmVsOiBudWxsLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XG4gICAgICB9XG5cbiAgIH1cblxuICAgaGFuZGxlT3BlblBvZGNhc3QgPSAoZXZlbnQsIHBvZGNhc3QpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuUG9kY2FzdDogcG9kY2FzdCB9KVxuICAgfVxuXG4gICBoYW5kbGVDbG9zZVBvZGNhc3QgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuUG9kY2FzdDogbnVsbCB9KVxuICAgfVxuXG4gICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVscywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgeyBvcGVuUG9kY2FzdCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgcmV0dXJuICg8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz4pXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPExheW91dCB0aXRsZT1cIlBvZGNhc3RzXCI+XG4gICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICBiYW5uZXI9e2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9XG4gICAgICAgICAgICAgICB0aXRsZT17Y2hhbm5lbC50aXRsZX0gLz5cbiAgICAgICAgICAgIHtvcGVuUG9kY2FzdCAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICA8UG9kY2FzdFBsYXllciBhdWRpb19jbGlwPXtvcGVuUG9kY2FzdH0gb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZVBvZGNhc3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgIDxQb2RjYXN0TGlzdCBhdWRpb3M9e2F1ZGlvX2NsaXBzfSBvbkNsaWNrUG9kY2FzdD17dGhpcy5oYW5kbGVPcGVuUG9kY2FzdH0gLz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyaWVzXCI+XG4gICAgICAgICAgICAgICAgICB7Y2hhbm5lbHMubGVuZ3RoID4gMCAmJiA8aDI+U2VyaWVzPC9oMj59XG4gICAgICAgICAgICAgICAgICA8Q2hhbm5lbHNHcmlkIGNoYW5uZWxzPXtjaGFubmVsc30gZWxlbWVudHM9XCJjaGFubmVsc1wiIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgKVxuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGFubmVsIl19 */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/pages/channel.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res, idChannel, _ref2, _ref3, requestChannel, requestChildChannels, requestAudios, _ref4, _channel, _ref5, channels, _ref6, audio_clips;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                idChannel = query.id;
                _context.prev = 2;
                _context.next = 5;
                return Promise.all([fetch("http://api.audioboom.com/channels/".concat(idChannel)), fetch("http://api.audioboom.com/channels/".concat(idChannel, "/child_channels")), fetch("http://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"))]);

              case 5:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                requestChannel = _ref3[0];
                requestChildChannels = _ref3[1];
                requestAudios = _ref3[2];

                if (!(requestChannel.status >= 404)) {
                  _context.next = 13;
                  break;
                }

                res.statusCode = requestChannel.status;
                return _context.abrupt("return", {
                  channel: null,
                  audio_clips: null,
                  channels: null,
                  statusCode: requestChannel.status
                });

              case 13:
                _context.next = 15;
                return requestChannel.json();

              case 15:
                _ref4 = _context.sent;
                _channel = _ref4.body.channel;
                _context.next = 19;
                return requestChildChannels.json();

              case 19:
                _ref5 = _context.sent;
                channels = _ref5.body.channels;
                _context.next = 23;
                return requestAudios.json();

              case 23:
                _ref6 = _context.sent;
                audio_clips = _ref6.body.audio_clips;
                return _context.abrupt("return", {
                  channel: _channel,
                  audio_clips: audio_clips,
                  channels: channels,
                  statusCode: 200
                });

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](2);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  channel: null,
                  audio_clips: null,
                  channels: null,
                  statusCode: 503
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 28]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return channel;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (channel);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('index').add('channel', '/:slug.:id', 'channel').add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast');

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/channel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/channel.js */"./pages/channel.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "slugify":
/*!**************************!*\
  !*** external "slugify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map