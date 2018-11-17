webpackHotUpdate("static/development/pages/podcast.js",{

/***/ "./pages/podcast.js":
/*!**************************!*\
  !*** ./pages/podcast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return podcast; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var podcast =
/*#__PURE__*/
function (_Component) {
  _inherits(podcast, _Component);

  function podcast() {
    _classCallCheck(this, podcast);

    return _possibleConstructorReturn(this, _getPrototypeOf(podcast).apply(this, arguments));
  }

  _createClass(podcast, [{
    key: "render",
    value: function render() {
      var audio_clip = this.props.audio_clip;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3988374263"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
        className: "jsx-3988374263"
      }, "Podcasts"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3988374263" + " " + 'modal'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3988374263" + " " + 'clip'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("picture", {
        className: "jsx-3988374263"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(audio_clip.urls.image || audio_clip.channel.urls.logo_image.original, ")")
        },
        className: "jsx-3988374263"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3988374263" + " " + 'player'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        className: "jsx-3988374263"
      }, audio_clip.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
        className: "jsx-3988374263"
      }, audio_clip.channel.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-3988374263"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("source", {
        src: audio_clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-3988374263"
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3005639249",
        css: "nav.jsx-3988374263{background:none;}nav.jsx-3988374263 a.jsx-3988374263{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-3988374263{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-3988374263{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-3988374263 div.jsx-3988374263{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-3988374263{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-3988374263{margin:0;}h6.jsx-3988374263{margin:0;margin-top:1em;}audio.jsx-3988374263{margin-top:2em;width:100%;}.modal.jsx-3988374263{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvcGFnZXMvcG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3dCLEFBR3NDLEFBR0ssQUFPUixBQU9BLEFBU0YsQUFPRSxBQUtKLEFBR0EsQUFJTSxBQUtBLFNBWGxCLEFBR2tCLEVBZkgsRUFPZSxFQVloQixBQUtMLENBbERULEtBR2dCLEFBZ0ROLEVBeEJxQixDQWUvQixFQUlBLEVBTVcsTUFoREksRUFpREgsSUFuQlMsS0FvQkosQ0FqREMsS0F1QlMsT0FPM0IsQ0FvQkEsRUFqRHdCLGFBSVQsQUFPTyxDQVlTLFdBbEJOLGlCQW1CekIsUUF2QkEscURBS3NCLEdBTUksZ0JBTFgsWUFDZix1RUFLWSx1Q0FDYSw4RUFDWCxXQUNDLFlBQ2YiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9wYWdlcy9wb2RjYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwb2RjYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAgIGNvbnN0IGlkUG9kY2FzdCA9IHF1ZXJ5LmlkXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vYXVkaW9fY2xpcHMvJHtpZFBvZGNhc3R9Lm1wM2ApXG4gICAgICBjb25zdCB7IGJvZHk6IHsgYXVkaW9fY2xpcCB9IH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgICAgY29uc29sZS5sb2coYXVkaW9fY2xpcClcbiAgICAgIHJldHVybiB7IGF1ZGlvX2NsaXAgfVxuICAgfVxuXG4gICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGF1ZGlvX2NsaXAgfSA9IHRoaXMucHJvcHNcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaXAnPlxuICAgICAgICAgICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2F1ZGlvX2NsaXAudXJscy5pbWFnZSB8fCBhdWRpb19jbGlwLmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XG4gICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxuICAgICAgICAgICAgICAgICAgICAgPGgzPnthdWRpb19jbGlwLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICA8aDY+e2F1ZGlvX2NsaXAuY2hhbm5lbC50aXRsZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIGF1dG9QbGF5PXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpb19jbGlwLnVybHMuaGlnaF9tcDN9IHR5cGU9J2F1ZGlvL21wZWcnIC8+XG4gICAgICAgICAgICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5hdiBhIHtcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuY2xpcCB7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwaWN0dXJlIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLnBsYXllciB7XG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaDYge1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYXVkaW8ge1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgIH1cbiAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/pages/podcast.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2605519919",
        css: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvcGFnZXMvcG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRytCLEFBR3VCLFNBQ2Esc0JBQ0wsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvcGFnZXMvcG9kY2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcG9kY2FzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgICBjb25zdCBpZFBvZGNhc3QgPSBxdWVyeS5pZFxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7aWRQb2RjYXN0fS5tcDNgKVxuICAgICAgY29uc3QgeyBib2R5OiB7IGF1ZGlvX2NsaXAgfSB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICAgIGNvbnNvbGUubG9nKGF1ZGlvX2NsaXApXG4gICAgICByZXR1cm4geyBhdWRpb19jbGlwIH1cbiAgIH1cblxuICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBhdWRpb19jbGlwIH0gPSB0aGlzLnByb3BzXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGlwJz5cbiAgICAgICAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdWRpb19jbGlwLnVybHMuaW1hZ2UgfHwgYXVkaW9fY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cbiAgICAgICAgICAgICAgICAgICAgIDxoMz57YXVkaW9fY2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgPGg2PnthdWRpb19jbGlwLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9fY2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLmNsaXAge1xuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICB9XG4gICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/pages/podcast.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, idPodcast, request, _ref2, audio_clip;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idPodcast = query.id;
                _context.next = 4;
                return fetch("https://api.audioboom.com/audio_clips/".concat(idPodcast, ".mp3"));

              case 4:
                request = _context.sent;
                _context.next = 7;
                return request.json();

              case 7:
                _ref2 = _context.sent;
                audio_clip = _ref2.body.audio_clip;
                console.log(audio_clip);
                return _context.abrupt("return", {
                  audio_clip: audio_clip
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return podcast;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/podcast")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=podcast.js.a32f0e4d384766b420ae.hot-update.js.map