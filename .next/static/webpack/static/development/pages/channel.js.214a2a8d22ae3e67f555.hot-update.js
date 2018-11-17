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
    className: "jsx-1518671599"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-1518671599"
  }, "Podcasts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1518671599" + " " + 'modal'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1518671599" + " " + 'clip'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1518671599"
  }, onClose ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: onClose,
    className: "jsx-1518671599"
  }, "< Volver") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "channel",
    params: {
      slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(audio_clip.channel.title),
      id: audio_clip.channel.id
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1518671599"
  }, "< Volver"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picture", {
    className: "jsx-1518671599"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(audio_clip.urls.image || audio_clip.channel.urls.logo_image.original, ")")
    },
    className: "jsx-1518671599"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1518671599" + " " + 'player'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1518671599"
  }, audio_clip.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-1518671599"
  }, audio_clip.channel.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
    controls: true,
    autoPlay: true,
    className: "jsx-1518671599"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: audio_clip.urls.high_mp3,
    type: "audio/mpeg",
    className: "jsx-1518671599"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "950577731",
    css: "nav.jsx-1518671599{background:none;}nav.jsx-1518671599 a.jsx-1518671599{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-1518671599{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-1518671599{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-1518671599 div.jsx-1518671599{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-1518671599{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-1518671599{margin:0;}h6.jsx-1518671599{margin:0;margin-top:1em;}audio.jsx-1518671599{margin-top:2em;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DcUIsQUFHZ0MsQUFHSyxBQU9SLEFBT0EsQUFTRixBQU9FLEFBS0osQUFHQSxBQUlNLFNBTmxCLEFBR2tCLEVBZkgsRUFPZSxFQVloQixDQTdDZCxLQUdnQixFQXdCZSxDQWUvQixFQUlBLFFBMUNlLE1BOEJNLE1BN0JILEtBdUJTLE9BTzNCLEdBN0J3QixhQUlULEFBT08sQ0FZUyxXQWxCTixpQkFtQnpCLFFBdkJBLHFEQUtzQixHQU1JLGdCQUxYLFlBQ2YsdUVBS1ksdUNBQ2EsOEVBQ1gsV0FDQyxZQUNmIiwiZmlsZSI6Ii9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcydcblxuY29uc3QgUG9kY2FzdFBsYXllciA9ICh7IGF1ZGlvX2NsaXAsIG9uQ2xvc2UgfSkgPT4ge1xuICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICA8aGVhZGVyPlBvZGNhc3RzPC9oZWFkZXI+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpcCc+XG4gICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAge29uQ2xvc2VcbiAgICAgICAgICAgICAgICAgICAgID8gPGEgb25DbGljaz17b25DbG9zZX0+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICA6IDxMaW5rIHJvdXRlPSdjaGFubmVsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBzbHVnKGF1ZGlvX2NsaXAuY2hhbm5lbC50aXRsZSksIGlkOiBhdWRpb19jbGlwLmNoYW5uZWwuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L0xpbms+fVxuICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXVkaW9fY2xpcC51cmxzLmltYWdlIHx8IGF1ZGlvX2NsaXAuY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cbiAgICAgICAgICAgICAgIDwvcGljdHVyZT5cblxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllcic+XG4gICAgICAgICAgICAgICAgICA8aDM+e2F1ZGlvX2NsaXAudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoNj57YXVkaW9fY2xpcC5jaGFubmVsLnRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICA8YXVkaW8gY29udHJvbHMgYXV0b1BsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2F1ZGlvX2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cbiAgICAgICAgICAgICAgICAgIDwvYXVkaW8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IGEge1xuICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbGlwIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNiB7XG4gICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdWRpbyB7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RQbGF5ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/PodcastPlayer.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2446307557",
    css: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGNEIsQUFHNEIsU0FDYSxzQkFDTCxpQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9jb21wb25lbnRzL1BvZGNhc3RQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuXG5jb25zdCBQb2RjYXN0UGxheWVyID0gKHsgYXVkaW9fY2xpcCwgb25DbG9zZSB9KSA9PiB7XG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGlwJz5cbiAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICB7b25DbG9zZVxuICAgICAgICAgICAgICAgICAgICAgPyA8YSBvbkNsaWNrPXtvbkNsb3NlfT4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDogPExpbmsgcm91dGU9J2NoYW5uZWwnXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6IHNsdWcoYXVkaW9fY2xpcC5jaGFubmVsLnRpdGxlKSwgaWQ6IGF1ZGlvX2NsaXAuY2hhbm5lbC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdWRpb19jbGlwLnVybHMuaW1hZ2UgfHwgYXVkaW9fY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxuICAgICAgICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cbiAgICAgICAgICAgICAgICAgIDxoMz57YXVkaW9fY2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPGg2PnthdWRpb19jbGlwLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9fY2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxuICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsaXAge1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9kY2FzdFBsYXllclxuIl19 */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/components/PodcastPlayer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastPlayer);

/***/ }),

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
      // event.preventDefault()
      _this.setState({
        openPodcast: podcast
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
        audio_clip: openPodcast
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
        css: ".content.jsx-2013219012{display:grid;grid-template-columns:2fr 1fr;}@media only screen and (max-width:600px){.content.jsx-2013219012{grid-template-columns:1fr;}}.modal.jsx-2013219012{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXdCLEFBR2dDLEFBS2dCLEFBSWQsYUFSZSxFQVN4QixNQUNDLEtBTFAsRUFNUSxRQUNDLE9BWFosRUFZaUIsY0FDakIiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcic7XG5cbi8vIENPTVBPTkVOVFNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IENoYW5uZWxzR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxzR3JpZCdcbmltcG9ydCBQb2RjYXN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RMaXN0JztcbmltcG9ydCBQb2RjYXN0UGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdFBsYXllcic7XG5cbmNsYXNzIGNoYW5uZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsXG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVzIH0pIHtcbiAgICAgIGNvbnN0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG4gICAgICB0cnkge1xuICAgICAgICAgY29uc3QgW3JlcXVlc3RDaGFubmVsLCByZXF1ZXN0Q2hpbGRDaGFubmVscywgcmVxdWVzdEF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxuICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcbiAgICAgICAgICAgIGZldGNoKGBodHRwOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICAgICAgIF0pXG5cbiAgICAgICAgIGlmIChyZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgPj0gNDA0KSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcXVlc3RDaGFubmVsLnN0YXR1c1xuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbDogbnVsbCwgYXVkaW9fY2xpcHM6IG51bGwsIGNoYW5uZWxzOiBudWxsLCBzdGF0dXNDb2RlOiByZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgfVxuICAgICAgICAgfVxuXG4gICAgICAgICBjb25zdCB7IGJvZHk6IHsgY2hhbm5lbCB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hhbm5lbC5qc29uKClcbiAgICAgICAgIGNvbnN0IHsgYm9keTogeyBjaGFubmVscyB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hpbGRDaGFubmVscy5qc29uKClcbiAgICAgICAgIGNvbnN0IHsgYm9keTogeyBhdWRpb19jbGlwcyB9IH0gPSBhd2FpdCByZXF1ZXN0QXVkaW9zLmpzb24oKVxuICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlOiAyMDAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXG4gICAgICAgICByZXR1cm4geyBjaGFubmVsOiBudWxsLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XG4gICAgICB9XG5cbiAgIH1cblxuICAgaGFuZGxlT3BlblBvZGNhc3QgPSAoZXZlbnQsIHBvZGNhc3QpID0+IHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuUG9kY2FzdDogcG9kY2FzdCB9KVxuICAgfVxuXG4gICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVscywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgeyBvcGVuUG9kY2FzdCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgcmV0dXJuICg8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz4pXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPExheW91dCB0aXRsZT1cIlBvZGNhc3RzXCI+XG4gICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICBiYW5uZXI9e2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9XG4gICAgICAgICAgICAgICB0aXRsZT17Y2hhbm5lbC50aXRsZX0gLz5cbiAgICAgICAgICAgIHtvcGVuUG9kY2FzdCAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICAgICA8UG9kY2FzdFBsYXllciBhdWRpb19jbGlwPXtvcGVuUG9kY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgPFBvZGNhc3RMaXN0IGF1ZGlvcz17YXVkaW9fY2xpcHN9IG9uQ2xpY2tQb2RjYXN0PXt0aGlzLmhhbmRsZU9wZW5Qb2RjYXN0fSAvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJpZXNcIj5cbiAgICAgICAgICAgICAgICAgIHtjaGFubmVscy5sZW5ndGggPiAwICYmIDxoMj5TZXJpZXM8L2gyPn1cbiAgICAgICAgICAgICAgICAgIDxDaGFubmVsc0dyaWQgY2hhbm5lbHM9e2NoYW5uZWxzfSBlbGVtZW50cz1cImNoYW5uZWxzXCIgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApXG4gICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5uZWwiXX0= */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/pages/channel.js */"
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/channel")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=channel.js.214a2a8d22ae3e67f555.hot-update.js.map