"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! 6cb84fa */
webpackJsonp([1], { UWmH: function UWmH(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(e, t) {
        for (var n, r = 0; r < t.length; r++) {
          n = t[r], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        u = r(n("GiK3")),
        i = r(n("KSGD")),
        c = n("RH2O"),
        a = n("F8kA"),
        f = n("WiM9"),
        l = r(n("ALEy")),
        s = function () {
      function e() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(e, u.default.Component), o(e, [{ key: "render", value: function value() {
          var e = this.props.classes;return u.default.createElement("div", { className: e.root }, u.default.createElement(l.default, { noWrap: !0 }, "Welcome come to user list!"));
        } }]), e;
    }();s.propTypes = { classes: i.default.object.isRequired }, t.default = (0, c.connect)(function () {
      return {};
    }, {})((0, f.withStyles)(function () {
      return { root: { textAlign: "center" } };
    })((0, a.withRouter)(s)));
  } });