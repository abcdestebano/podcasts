webpackHotUpdate("static/development/pages/channel.js",{

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
      event.preventDefault();

      _this.setState({
        openPodcast: podcast
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClosePodcast", function () {
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
        onClose: this.onCloseModal
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
        css: ".content.jsx-2013219012{display:grid;grid-template-columns:2fr 1fr;}@media only screen and (max-width:600px){.content.jsx-2013219012{grid-template-columns:1fr;}}.modal.jsx-2013219012{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lc3RlYmFuL0RvY3VtZW50cy9DdXJzb3MvUGxhdHppL05leHQuanMvcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRXdCLEFBR2dDLEFBS2dCLEFBSWQsYUFSZSxFQVN4QixNQUNDLEtBTFAsRUFNUSxRQUNDLE9BWFosRUFZaUIsY0FDakIiLCJmaWxlIjoiL1VzZXJzL2VzdGViYW4vRG9jdW1lbnRzL0N1cnNvcy9QbGF0emkvTmV4dC5qcy9wb2RjYXN0cy9wYWdlcy9jaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcic7XG5cbi8vIENPTVBPTkVOVFNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IENoYW5uZWxzR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxzR3JpZCdcbmltcG9ydCBQb2RjYXN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RMaXN0JztcbmltcG9ydCBQb2RjYXN0UGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdFBsYXllcic7XG5cbmNsYXNzIGNoYW5uZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsXG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVzIH0pIHtcbiAgICAgIGNvbnN0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG4gICAgICB0cnkge1xuICAgICAgICAgY29uc3QgW3JlcXVlc3RDaGFubmVsLCByZXF1ZXN0Q2hpbGRDaGFubmVscywgcmVxdWVzdEF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxuICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcbiAgICAgICAgICAgIGZldGNoKGBodHRwOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICAgICAgIF0pXG5cbiAgICAgICAgIGlmIChyZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgPj0gNDA0KSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcXVlc3RDaGFubmVsLnN0YXR1c1xuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbDogbnVsbCwgYXVkaW9fY2xpcHM6IG51bGwsIGNoYW5uZWxzOiBudWxsLCBzdGF0dXNDb2RlOiByZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgfVxuICAgICAgICAgfVxuXG4gICAgICAgICBjb25zdCB7IGJvZHk6IHsgY2hhbm5lbCB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hhbm5lbC5qc29uKClcbiAgICAgICAgIGNvbnN0IHsgYm9keTogeyBjaGFubmVscyB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hpbGRDaGFubmVscy5qc29uKClcbiAgICAgICAgIGNvbnN0IHsgYm9keTogeyBhdWRpb19jbGlwcyB9IH0gPSBhd2FpdCByZXF1ZXN0QXVkaW9zLmpzb24oKVxuICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlOiAyMDAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXG4gICAgICAgICByZXR1cm4geyBjaGFubmVsOiBudWxsLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XG4gICAgICB9XG5cbiAgIH1cblxuICAgaGFuZGxlT3BlblBvZGNhc3QgPSAoZXZlbnQsIHBvZGNhc3QpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuUG9kY2FzdDogcG9kY2FzdCB9KVxuICAgfVxuXG4gICBoYW5kbGVDbG9zZVBvZGNhc3QgPSAoKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlblBvZGNhc3Q6IG51bGwgfSlcbiAgIH1cblxuICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMsIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IHsgb3BlblBvZGNhc3QgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGlmIChzdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgIHJldHVybiAoPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+KVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJQb2RjYXN0c1wiPlxuICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgYmFubmVyPXtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfVxuICAgICAgICAgICAgICAgdGl0bGU9e2NoYW5uZWwudGl0bGV9IC8+XG4gICAgICAgICAgICB7b3BlblBvZGNhc3QgJiYgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgPFBvZGNhc3RQbGF5ZXIgYXVkaW9fY2xpcD17b3BlblBvZGNhc3R9IG9uQ2xvc2U9e3RoaXMub25DbG9zZU1vZGFsfSAvPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICA8UG9kY2FzdExpc3QgYXVkaW9zPXthdWRpb19jbGlwc30gb25DbGlja1BvZGNhc3Q9e3RoaXMuaGFuZGxlT3BlblBvZGNhc3R9IC8+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmllc1wiPlxuICAgICAgICAgICAgICAgICAge2NoYW5uZWxzLmxlbmd0aCA+IDAgJiYgPGgyPlNlcmllczwvaDI+fVxuICAgICAgICAgICAgICAgICAgPENoYW5uZWxzR3JpZCBjaGFubmVscz17Y2hhbm5lbHN9IGVsZW1lbnRzPVwiY2hhbm5lbHNcIiAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L0xheW91dD5cbiAgICAgIClcbiAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbm5lbCJdfQ== */\n/*@ sourceURL=/Users/esteban/Documents/Cursos/Platzi/Next.js/podcasts/pages/channel.js */"
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
//# sourceMappingURL=channel.js.625129de05dd8dbad4c6.hot-update.js.map