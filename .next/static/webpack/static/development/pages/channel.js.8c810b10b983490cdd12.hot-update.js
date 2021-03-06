webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/PodcastPlayer.js":
/*!*************************************!*\
  !*** ./components/PodcastPlayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=channel.js.8c810b10b983490cdd12.hot-update.js.map