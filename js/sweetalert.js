! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t() }(this, function() { "use strict";

    function V(e) { return (V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

    function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } }

    function i(e, t, n) { return t && o(e.prototype, t), n && o(e, n), e }

    function r() { return (r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }).apply(this, arguments) }

    function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && u(e, t) }

    function c(e) { return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

    function u(e, t) { return (u = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

    function l(e, t, n) { return (l = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }() ? Reflect.construct : function(e, t, n) { var o = [null];
            o.push.apply(o, t); var i = new(Function.bind.apply(e, o)); return n && u(i, n.prototype), i }).apply(null, arguments) }

    function d(e, t) { return !t || "object" != typeof t && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

    function p(e, t, n) { return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var o = function(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e));); return e }(e, t); if (o) { var i = Object.getOwnPropertyDescriptor(o, t); return i.get ? i.get.call(n) : i.value } })(e, t, n || e) } var t = "SweetAlert2:",
        f = function(e) { return Array.prototype.slice.call(e) },
        q = function(e) { console.warn("".concat(t, " ").concat(e)) },
        R = function(e) { console.error("".concat(t, " ").concat(e)) },
        n = [],
        m = function(e) {-1 === n.indexOf(e) && (n.push(e), q(e)) },
        I = function(e) { return "function" == typeof e ? e() : e },
        H = function(e) { return e && "object" === V(e) && "function" == typeof e.then },
        e = Object.freeze({ cancel: "cancel", backdrop: "overlay", close: "close", esc: "esc", timer: "timer" }),
        h = function(e) { var t = {}; for (var n in e) t[e[n]] = "swal2-" + e[n]; return t },
        D = h(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "icon-text", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen"]),
        g = h(["success", "warning", "info", "question", "error"]),
        b = { previousBodyPadding: null },
        v = function(e, t) { return e.classList.contains(t) },
        _ = function(e) { if (e.focus(), "file" !== e.type) { var t = e.value;
                e.value = "", e.value = t } },
        y = function(e, t, n) { e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(function(t) { e.forEach ? e.forEach(function(e) { n ? e.classList.add(t) : e.classList.remove(t) }) : n ? e.classList.add(t) : e.classList.remove(t) })) },
        N = function(e, t) { y(e, t, !0) },
        z = function(e, t) { y(e, t, !1) },
        W = function(e, t) { for (var n = 0; n < e.childNodes.length; n++)
                if (v(e.childNodes[n], t)) return e.childNodes[n] },
        U = function(e) { e.style.opacity = "", e.style.display = e.id === D.content ? "block" : "flex" },
        K = function(e) { e.style.opacity = "", e.style.display = "none" },
        F = function(e) { return e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length) },
        w = function() { return document.body.querySelector("." + D.container) },
        C = function(e) { var t = w(); return t ? t.querySelector("." + e) : null },
        k = function() { return C(D.popup) },
        x = function() { var e = k(); return f(e.querySelectorAll("." + D.icon)) },
        A = function() { return C(D.title) },
        B = function() { return C(D.content) },
        S = function() { return C(D.image) },
        P = function() { return C(D.progresssteps) },
        O = function() { return C(D["validation-message"]) },
        E = function() { return C(D.confirm) },
        Z = function() { return C(D.cancel) },
        Q = function() { return C(D.actions) },
        Y = function() { return C(D.footer) },
        $ = function() { return C(D.close) },
        J = function() { var e = f(k().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e, t) { return e = parseInt(e.getAttribute("tabindex")), (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0 }),
                t = f(k().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e) { return "-1" !== e.getAttribute("tabindex") }); return function(e) { for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }(e.concat(t)).filter(function(e) { return F(e) }) },
        L = function() { return !T() && !document.body.classList.contains(D["no-backdrop"]) },
        T = function() { return document.body.classList.contains(D["toast-shown"]) },
        M = function() { return "undefined" == typeof window || "undefined" == typeof document },
        j = '\n <div aria-labelledby="'.concat(D.title, '" aria-describedby="').concat(D.content, '" class="').concat(D.popup, '" tabindex="-1">\n   <div class="').concat(D.header, '">\n     <ul class="').concat(D.progresssteps, '"></ul>\n     <div class="').concat(D.icon, " ").concat(g.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(D.icon, " ").concat(g.question, '">\n       <span class="').concat(D["icon-text"], '">?</span>\n      </div>\n     <div class="').concat(D.icon, " ").concat(g.warning, '">\n       <span class="').concat(D["icon-text"], '">!</span>\n      </div>\n     <div class="').concat(D.icon, " ").concat(g.info, '">\n       <span class="').concat(D["icon-text"], '">i</span>\n      </div>\n     <div class="').concat(D.icon, " ").concat(g.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(D.image, '" />\n     <h2 class="').concat(D.title, '" id="').concat(D.title, '"></h2>\n     <button type="button" class="').concat(D.close, '">×</button>\n   </div>\n   <div class="').concat(D.content, '">\n     <div id="').concat(D.content, '"></div>\n     <input class="').concat(D.input, '" />\n     <input type="file" class="').concat(D.file, '" />\n     <div class="').concat(D.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(D.select, '"></select>\n     <div class="').concat(D.radio, '"></div>\n     <label for="').concat(D.checkbox, '" class="').concat(D.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(D.label, '"></span>\n     </label>\n     <textarea class="').concat(D.textarea, '"></textarea>\n     <div class="').concat(D["validation-message"], '" id="').concat(D["validation-message"], '"></div>\n   </div>\n   <div class="').concat(D.actions, '">\n     <button type="button" class="').concat(D.confirm, '">OK</button>\n     <button type="button" class="').concat(D.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(D.footer, '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        X = function(e) { var t = w(); if (t && (t.parentNode.removeChild(t), z([document.documentElement, document.body], [D["no-backdrop"], D["toast-shown"], D["has-column"]])), !M()) { var n = document.createElement("div");
                n.className = D.container, n.innerHTML = j, ("string" == typeof e.target ? document.querySelector(e.target) : e.target).appendChild(n); var o, i = k(),
                    r = B(),
                    a = W(r, D.input),
                    s = W(r, D.file),
                    c = r.querySelector(".".concat(D.range, " input")),
                    u = r.querySelector(".".concat(D.range, " output")),
                    l = W(r, D.select),
                    d = r.querySelector(".".concat(D.checkbox, " input")),
                    p = W(r, D.textarea);
                i.setAttribute("role", e.toast ? "alert" : "dialog"), i.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || i.setAttribute("aria-modal", "true"); var f = function(e) { De.isVisible() && o !== e.target.value && De.resetValidationMessage(), o = e.target.value }; return a.oninput = f, s.onchange = f, l.onchange = f, d.onchange = f, p.oninput = f, c.oninput = function(e) { f(e), u.value = c.value }, c.onchange = function(e) { f(e), c.nextSibling.value = c.value }, i }
            R("SweetAlert2 requires document to initialize") },
        G = function(e, t) { if (!e) return K(t); if ("object" === V(e))
                if (t.innerHTML = "", 0 in e)
                    for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
                else t.appendChild(e.cloneNode(!0));
            else e && (t.innerHTML = e);
            U(t) },
        ee = function() { if (M()) return !1; var e = document.createElement("div"),
                t = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" }; for (var n in t)
                if (t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
            return !1 }(),
        te = function(e) { var t = Q(),
                n = E(),
                o = Z(); if (e.showConfirmButton || e.showCancelButton ? U(t) : K(t), e.showCancelButton ? o.style.display = "inline-block" : K(o), e.showConfirmButton ? n.style.removeProperty("display") : K(n), n.innerHTML = e.confirmButtonText, o.innerHTML = e.cancelButtonText, n.setAttribute("aria-label", e.confirmButtonAriaLabel), o.setAttribute("aria-label", e.cancelButtonAriaLabel), n.className = D.confirm, N(n, e.confirmButtonClass), o.className = D.cancel, N(o, e.cancelButtonClass), e.buttonsStyling) { N([n, o], D.styled), e.confirmButtonColor && (n.style.backgroundColor = e.confirmButtonColor), e.cancelButtonColor && (o.style.backgroundColor = e.cancelButtonColor); var i = window.getComputedStyle(n).getPropertyValue("background-color");
                n.style.borderLeftColor = i, n.style.borderRightColor = i } else z([n, o], D.styled), n.style.backgroundColor = n.style.borderLeftColor = n.style.borderRightColor = "", o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "" },
        ne = function(e) { var t = B().querySelector("#" + D.content);
            e.html ? G(e.html, t) : e.text ? (t.textContent = e.text, U(t)) : K(t) },
        oe = function(e) { for (var t = x(), n = 0; n < t.length; n++) K(t[n]); if (e.type)
                if (-1 !== Object.keys(g).indexOf(e.type)) { var o = De.getPopup().querySelector(".".concat(D.icon, ".").concat(g[e.type]));
                    U(o), e.animation && N(o, "swal2-animate-".concat(e.type, "-icon")) } else R('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type, '"')) },
        ie = function(e) { var t = S();
            e.imageUrl ? (t.setAttribute("src", e.imageUrl), t.setAttribute("alt", e.imageAlt), U(t), e.imageWidth ? t.setAttribute("width", e.imageWidth) : t.removeAttribute("width"), e.imageHeight ? t.setAttribute("height", e.imageHeight) : t.removeAttribute("height"), t.className = D.image, e.imageClass && N(t, e.imageClass)) : K(t) },
        re = function(i) { var r = P(),
                a = parseInt(null === i.currentProgressStep ? De.getQueueStep() : i.currentProgressStep, 10);
            i.progressSteps && i.progressSteps.length ? (U(r), r.innerHTML = "", a >= i.progressSteps.length && q("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), i.progressSteps.forEach(function(e, t) { var n = document.createElement("li"); if (N(n, D.progresscircle), n.innerHTML = e, t === a && N(n, D.activeprogressstep), r.appendChild(n), t !== i.progressSteps.length - 1) { var o = document.createElement("li");
                    N(o, D.progressline), i.progressStepsDistance && (o.style.width = i.progressStepsDistance), r.appendChild(o) } })) : K(r) },
        ae = function(e) { var t = A();
            e.titleText ? t.innerText = e.titleText : e.title && ("string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), G(e.title, t)) },
        se = function() { null === b.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (b.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = b.previousBodyPadding + function() { if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0; var e = document.createElement("div");
                e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e); var t = e.offsetWidth - e.clientWidth; return document.body.removeChild(e), t }() + "px") },
        ce = function() { return !!window.MSInputMethodContext && !!document.documentMode },
        ue = function() { var e = w(),
                t = k();
            e.style.removeProperty("align-items"), t.offsetTop < 0 && (e.style.alignItems = "flex-start") },
        le = {},
        de = function(e, t) { var n = w(),
                o = k(); if (o) { null !== e && "function" == typeof e && e(o), z(o, D.show), N(o, D.hide); var i = function() { T() ? pe(t) : (new Promise(function(e) { var t = window.scrollX,
                            n = window.scrollY;
                        le.restoreFocusTimeout = setTimeout(function() { le.previousActiveElement && le.previousActiveElement.focus ? (le.previousActiveElement.focus(), le.previousActiveElement = null) : document.body && document.body.focus(), e() }, 100), void 0 !== t && void 0 !== n && window.scrollTo(t, n) }).then(function() { return pe(t) }), le.keydownTarget.removeEventListener("keydown", le.keydownHandler, { capture: le.keydownListenerCapture }), le.keydownHandlerAdded = !1), n.parentNode && n.parentNode.removeChild(n), z([document.documentElement, document.body], [D.shown, D["height-auto"], D["no-backdrop"], D["toast-shown"], D["toast-column"]]), L() && (null !== b.previousBodyPadding && (document.body.style.paddingRight = b.previousBodyPadding, b.previousBodyPadding = null), function() { if (v(document.body, D.iosfix)) { var e = parseInt(document.body.style.top, 10);
                            z(document.body, D.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e } }(), "undefined" != typeof window && ce() && window.removeEventListener("resize", ue), f(document.body.children).forEach(function(e) { e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden") })) };
                ee && !v(o, D.noanimation) ? o.addEventListener(ee, function e() { o.removeEventListener(ee, e), v(o, D.hide) && i() }) : i() } },
        pe = function(e) { null !== e && "function" == typeof e && setTimeout(function() { e() }) };

    function fe(e) { var t = function e() { for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o]; if (!(this instanceof e)) return l(e, n);
            Object.getPrototypeOf(e).apply(this, n) }; return t.prototype = r(Object.create(e.prototype), { constructor: t }), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e, t } var me = { title: "", titleText: "", text: "", html: "", footer: "", type: null, toast: !1, customClass: "", target: "body", backdrop: !0, animation: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showCancelButton: !1, preConfirm: null, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: null, confirmButtonClass: null, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: null, cancelButtonClass: null, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusCancel: !1, showCloseButton: !1, closeButtonAriaLabel: "Close this dialog", showLoaderOnConfirm: !1, imageUrl: null, imageWidth: null, imageHeight: null, imageAlt: "", imageClass: null, timer: null, width: null, padding: null, background: null, input: null, inputPlaceholder: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputClass: null, inputAttributes: {}, inputValidator: null, validationMessage: null, grow: !1, position: "center", progressSteps: [], currentProgressStep: null, progressStepsDistance: null, onBeforeOpen: null, onAfterClose: null, onOpen: null, onClose: null, useRejections: !1, expectRejections: !1 },
        he = ["useRejections", "expectRejections", "extraParams"],
        ge = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        be = function(e) { return me.hasOwnProperty(e) || "extraParams" === e },
        ve = function(e) { return -1 !== he.indexOf(e) },
        ye = function(e) { for (var t in e) be(t) || q('Unknown parameter "'.concat(t, '"')), e.toast && -1 !== ge.indexOf(t) && q('The parameter "'.concat(t, '" is incompatible with toasts')), ve(t) && m('The parameter "'.concat(t, '" is deprecated and will be removed in the next major release.')) },
        we = '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',
        Ce = {}; var ke = [],
        xe = function() { var e = k();
            e || De(""), e = k(); var t = Q(),
                n = E(),
                o = Z();
            U(t), U(n), N([e, t], D.loading), n.disabled = !0, o.disabled = !0, e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus() },
        Ae = Object.freeze({ isValidParameter: be, isDeprecatedParameter: ve, argsToParams: function(n) { var o = {}; switch (V(n[0])) {
                    case "object":
                        r(o, n[0]); break;
                    default:
                        ["title", "html", "type"].forEach(function(e, t) { switch (V(n[t])) {
                                case "string":
                                    o[e] = n[t]; break;
                                case "undefined":
                                    break;
                                default:
                                    R("Unexpected type of ".concat(e, '! Expected "string", got ').concat(V(n[t]))) } }) } return o }, adaptInputValidator: function(n) { return function(e, t) { return n.call(this, e, t).then(function() {}, function(e) { return e }) } }, close: de, closePopup: de, closeModal: de, closeToast: de, isVisible: function() { return !!k() }, clickConfirm: function() { return E().click() }, clickCancel: function() { return Z().click() }, getContainer: w, getPopup: k, getTitle: A, getContent: B, getImage: S, getIcons: x, getCloseButton: $, getButtonsWrapper: function() { return m("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), C(D.actions) }, getActions: Q, getConfirmButton: E, getCancelButton: Z, getFooter: Y, getFocusableElements: J, getValidationMessage: O, isLoading: function() { return k().hasAttribute("data-loading") }, fire: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return l(this, t) }, mixin: function(n) { return fe(function(e) {
                    function t() { return s(this, t), d(this, c(t).apply(this, arguments)) } return a(t, e), i(t, [{ key: "_main", value: function(e) { return p(c(t.prototype), "_main", this).call(this, r({}, n, e)) } }]), t }(this)) }, queue: function(e) { var r = this;
                ke = e; var a = function() { ke = [], document.body.removeAttribute("data-swal2-queue-step") },
                    s = []; return new Promise(function(i) {! function t(n, o) { n < ke.length ? (document.body.setAttribute("data-swal2-queue-step", n), r(ke[n]).then(function(e) { void 0 !== e.value ? (s.push(e.value), t(n + 1, o)) : (a(), i({ dismiss: e.dismiss })) })) : (a(), i({ value: s })) }(0) }) }, getQueueStep: function() { return document.body.getAttribute("data-swal2-queue-step") }, insertQueueStep: function(e, t) { return t && t < ke.length ? ke.splice(t, 0, e) : ke.push(e) }, deleteQueueStep: function(e) { void 0 !== ke[e] && ke.splice(e, 1) }, showLoading: xe, enableLoading: xe, getTimerLeft: function() { return le.timeout && le.timeout.getTimerLeft() } }),
        Be = "function" == typeof Symbol ? Symbol : function() { var t = 0;

            function e(e) { return "__" + e + "_" + Math.floor(1e9 * Math.random()) + "_" + ++t + "__" } return e.iterator = e("Symbol.iterator"), e }(),
        Se = "function" == typeof WeakMap ? WeakMap : function(n, o, t) {
            function e() { o(this, n, { value: Be("WeakMap") }) } return e.prototype = { delete: function(e) { delete e[this[n]] }, get: function(e) { return e[this[n]] }, has: function(e) { return t.call(e, this[n]) }, set: function(e, t) { o(e, this[n], { configurable: !0, value: t }) } }, e }(Be("WeakMap"), Object.defineProperty, {}.hasOwnProperty),
        Pe = { promise: new Se, innerParams: new Se, domCache: new Se };

    function Oe() { var e = Pe.innerParams.get(this),
            t = Pe.domCache.get(this);
        e.showConfirmButton || (K(t.confirmButton), e.showCancelButton || K(t.actions)), z([t.popup, t.actions], D.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1 }

    function Ee(e) { var t = Pe.domCache.get(this);
        t.validationMessage.innerHTML = e; var n = window.getComputedStyle(t.popup);
        t.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), t.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), U(t.validationMessage); var o = this.getInput();
        o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", D["validation-message"]), _(o), N(o, D.inputerror)) }

    function Le() { var e = Pe.domCache.get(this);
        e.validationMessage && K(e.validationMessage); var t = this.getInput();
        t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), z(t, D.inputerror)) } var Te = function e(t, n) { var o, i, r;
            s(this, e); var a = n;
            this.start = function() { r = !0, i = new Date, o = setTimeout(t, a) }, this.stop = function() { r = !1, clearTimeout(o), a -= new Date - i }, this.getTimerLeft = function() { return r && (this.stop(), this.start()), a }, this.start() },
        Me = { email: function(e, t) { return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid email address") }, url: function(e, t) { return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid URL") } }; var je = function(e) { var t = w(),
            n = k();
        null !== e.onBeforeOpen && "function" == typeof e.onBeforeOpen && e.onBeforeOpen(n), e.animation ? (N(n, D.show), N(t, D.fade), z(n, D.hide)) : z(n, D.fade), U(n), t.style.overflowY = "hidden", ee && !v(n, D.noanimation) ? n.addEventListener(ee, function e() { n.removeEventListener(ee, e), t.style.overflowY = "auto" }) : t.style.overflowY = "auto", N([document.documentElement, document.body, t], D.shown), e.heightAuto && e.backdrop && !e.toast && N([document.documentElement, document.body], D["height-auto"]), L() && (se(), function() { if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !v(document.body, D.iosfix)) { var e = document.body.scrollTop;
                document.body.style.top = -1 * e + "px", N(document.body, D.iosfix) } }(), "undefined" != typeof window && ce() && (ue(), window.addEventListener("resize", ue)), f(document.body.children).forEach(function(e) { e === w() || e.contains(w()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true")) }), setTimeout(function() { t.scrollTop = 0 })), T() || le.previousActiveElement || (le.previousActiveElement = document.activeElement), null !== e.onOpen && "function" == typeof e.onOpen && setTimeout(function() { e.onOpen(n) }) }; var Ve, qe = Object.freeze({ hideLoading: Oe, disableLoading: Oe, getInput: function(e) { var t = Pe.innerParams.get(this),
                n = Pe.domCache.get(this); if (!(e = e || t.input)) return null; switch (e) {
                case "select":
                case "textarea":
                case "file":
                    return W(n.content, D[e]);
                case "checkbox":
                    return n.popup.querySelector(".".concat(D.checkbox, " input"));
                case "radio":
                    return n.popup.querySelector(".".concat(D.radio, " input:checked")) || n.popup.querySelector(".".concat(D.radio, " input:first-child"));
                case "range":
                    return n.popup.querySelector(".".concat(D.range, " input"));
                default:
                    return W(n.content, D.input) } }, enableButtons: function() { var e = Pe.domCache.get(this);
            e.confirmButton.disabled = !1, e.cancelButton.disabled = !1 }, disableButtons: function() { var e = Pe.domCache.get(this);
            e.confirmButton.disabled = !0, e.cancelButton.disabled = !0 }, enableConfirmButton: function() { Pe.domCache.get(this).confirmButton.disabled = !1 }, disableConfirmButton: function() { Pe.domCache.get(this).confirmButton.disabled = !0 }, enableInput: function() { var e = this.getInput(); if (!e) return !1; if ("radio" === e.type)
                for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !1;
            else e.disabled = !1 }, disableInput: function() { var e = this.getInput(); if (!e) return !1; if (e && "radio" === e.type)
                for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !0;
            else e.disabled = !0 }, showValidationMessage: Ee, resetValidationMessage: Le, resetValidationError: function() { m("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"), Le.bind(this)() }, showValidationError: function(e) { m("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"), Ee.bind(this)(e) }, getProgressSteps: function() { return Pe.innerParams.get(this).progressSteps }, setProgressSteps: function(e) { var t = r({}, Pe.innerParams.get(this), { progressSteps: e });
            Pe.innerParams.set(this, t), re(t) }, showProgressSteps: function() { var e = Pe.domCache.get(this);
            U(e.progressSteps) }, hideProgressSteps: function() { var e = Pe.domCache.get(this);
            K(e.progressSteps) }, _main: function(e) { var L = this;
            ye(e); var T = r({}, me, e);! function(t) { var e;
                t.inputValidator || Object.keys(Me).forEach(function(e) { t.input === e && (t.inputValidator = t.expectRejections ? Me[e] : De.adaptInputValidator(Me[e])) }), t.validationMessage && ("object" !== V(t.extraParams) && (t.extraParams = {}), t.extraParams.validationMessage = t.validationMessage), (!t.target || "string" == typeof t.target && !document.querySelector(t.target) || "string" != typeof t.target && !t.target.appendChild) && (q('Target parameter is not valid, defaulting to "body"'), t.target = "body"), "function" == typeof t.animation && (t.animation = t.animation.call()); var n = k(),
                    o = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
                e = n && o && n.parentNode !== o.parentNode ? X(t) : n || X(t), t.width && (e.style.width = "number" == typeof t.width ? t.width + "px" : t.width), t.padding && (e.style.padding = "number" == typeof t.padding ? t.padding + "px" : t.padding), t.background && (e.style.background = t.background); for (var i = window.getComputedStyle(e).getPropertyValue("background-color"), r = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), a = 0; a < r.length; a++) r[a].style.backgroundColor = i; var s = w(),
                    c = $(),
                    u = Y(); if (ae(t), ne(t), "string" == typeof t.backdrop ? w().style.background = t.backdrop : t.backdrop || N([document.documentElement, document.body], D["no-backdrop"]), !t.backdrop && t.allowOutsideClick && q('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), t.position in D ? N(s, D[t.position]) : (q('The "position" parameter is not valid, defaulting to "center"'), N(s, D.center)), t.grow && "string" == typeof t.grow) { var l = "grow-" + t.grow;
                    l in D && N(s, D[l]) }
                t.showCloseButton ? (c.setAttribute("aria-label", t.closeButtonAriaLabel), U(c)) : K(c), e.className = D.popup, t.toast ? (N([document.documentElement, document.body], D["toast-shown"]), N(e, D.toast)) : N(e, D.modal), t.customClass && N(e, t.customClass), re(t), oe(t), ie(t), te(t), G(t.footer, u), !0 === t.animation ? z(e, D.noanimation) : N(e, D.noanimation), t.showLoaderOnConfirm && !t.preConfirm && q("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request") }(T), Object.freeze(T), Pe.innerParams.set(this, T), le.timeout && (le.timeout.stop(), delete le.timeout), clearTimeout(le.restoreFocusTimeout); var M = { popup: k(), container: w(), content: B(), actions: Q(), confirmButton: E(), cancelButton: Z(), closeButton: $(), validationMessage: O(), progressSteps: P() };
            Pe.domCache.set(this, M); var j = this.constructor; return new Promise(function(t, n) { var o = function(e) { j.closePopup(T.onClose, T.onAfterClose), T.useRejections ? t(e) : t({ value: e }) },
                    c = function(e) { j.closePopup(T.onClose, T.onAfterClose), T.useRejections ? n(e) : t({ dismiss: e }) },
                    u = function(e) { j.closePopup(T.onClose, T.onAfterClose), n(e) };
                T.timer && (le.timeout = new Te(function() { c("timer"), delete le.timeout }, T.timer)), T.input && setTimeout(function() { var e = L.getInput();
                    e && _(e) }, 0); for (var l = function(t) { if (T.showLoaderOnConfirm && j.showLoading(), T.preConfirm) { L.resetValidationMessage(); var e = Promise.resolve().then(function() { return T.preConfirm(t, T.extraParams) });
                            T.expectRejections ? e.then(function(e) { return o(e || t) }, function(e) { L.hideLoading(), e && L.showValidationMessage(e) }) : e.then(function(e) { F(M.validationMessage) || !1 === e ? L.hideLoading() : o(e || t) }, function(e) { return u(e) }) } else o(t) }, e = function(e) { var t = e.target,
                            n = M.confirmButton,
                            o = M.cancelButton,
                            i = n && (n === t || n.contains(t)),
                            r = o && (o === t || o.contains(t)); switch (e.type) {
                            case "click":
                                if (i && j.isVisible())
                                    if (L.disableButtons(), T.input) { var a = function() { var e = L.getInput(); if (!e) return null; switch (T.input) {
                                                case "checkbox":
                                                    return e.checked ? 1 : 0;
                                                case "radio":
                                                    return e.checked ? e.value : null;
                                                case "file":
                                                    return e.files.length ? e.files[0] : null;
                                                default:
                                                    return T.inputAutoTrim ? e.value.trim() : e.value } }(); if (T.inputValidator) { L.disableInput(); var s = Promise.resolve().then(function() { return T.inputValidator(a, T.extraParams) });
                                            T.expectRejections ? s.then(function() { L.enableButtons(), L.enableInput(), l(a) }, function(e) { L.enableButtons(), L.enableInput(), e && L.showValidationMessage(e) }) : s.then(function(e) { L.enableButtons(), L.enableInput(), e ? L.showValidationMessage(e) : l(a) }, function(e) { return u(e) }) } else l(a) } else l(!0);
                                else r && j.isVisible() && (L.disableButtons(), c(j.DismissReason.cancel)) } }, i = M.popup.querySelectorAll("button"), r = 0; r < i.length; r++) i[r].onclick = e, i[r].onmouseover = e, i[r].onmouseout = e, i[r].onmousedown = e; if (M.closeButton.onclick = function() { c(j.DismissReason.close) }, T.toast) M.popup.onclick = function() { T.showConfirmButton || T.showCancelButton || T.showCloseButton || T.input || c(j.DismissReason.close) };
                else { var a = !1;
                    M.popup.onmousedown = function() { M.container.onmouseup = function(e) { M.container.onmouseup = void 0, e.target === M.container && (a = !0) } }, M.container.onmousedown = function() { M.popup.onmouseup = function(e) { M.popup.onmouseup = void 0, (e.target === M.popup || M.popup.contains(e.target)) && (a = !0) } }, M.container.onclick = function(e) { a ? a = !1 : e.target === M.container && I(T.allowOutsideClick) && c(j.DismissReason.backdrop) } }
                T.reverseButtons ? M.confirmButton.parentNode.insertBefore(M.cancelButton, M.confirmButton) : M.confirmButton.parentNode.insertBefore(M.confirmButton, M.cancelButton); var s = function(e, t) { for (var n = J(T.focusCancel), o = 0; o < n.length; o++) return (e += t) === n.length ? e = 0 : -1 === e && (e = n.length - 1), n[e].focus();
                    M.popup.focus() };
                le.keydownHandlerAdded && (le.keydownTarget.removeEventListener("keydown", le.keydownHandler, { capture: le.keydownListenerCapture }), le.keydownHandlerAdded = !1), T.toast || (le.keydownHandler = function(e) { return function(e, t) { if (t.stopKeydownPropagation && e.stopPropagation(), "Enter" !== e.key || e.isComposing)
                            if ("Tab" === e.key) { for (var n = e.target, o = J(t.focusCancel), i = -1, r = 0; r < o.length; r++)
                                    if (n === o[r]) { i = r; break }
                                e.shiftKey ? s(i, -1) : s(i, 1), e.stopPropagation(), e.preventDefault() } else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(e.key) ? document.activeElement === M.confirmButton && F(M.cancelButton) ? M.cancelButton.focus() : document.activeElement === M.cancelButton && F(M.confirmButton) && M.confirmButton.focus() : "Escape" !== e.key && "Esc" !== e.key || !0 !== I(t.allowEscapeKey) || (e.preventDefault(), c(j.DismissReason.esc));
                        else if (e.target && L.getInput() && e.target.outerHTML === L.getInput().outerHTML) { if (-1 !== ["textarea", "file"].indexOf(t.input)) return;
                            j.clickConfirm(), e.preventDefault() } }(e, T) }, le.keydownTarget = T.keydownListenerCapture ? window : M.popup, le.keydownListenerCapture = T.keydownListenerCapture, le.keydownTarget.addEventListener("keydown", le.keydownHandler, { capture: le.keydownListenerCapture }), le.keydownHandlerAdded = !0), L.enableButtons(), L.hideLoading(), L.resetValidationMessage(), T.toast && (T.input || T.footer || T.showCloseButton) ? N(document.body, D["toast-column"]) : z(document.body, D["toast-column"]); for (var d, p, f = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], m = 0; m < f.length; m++) { var h = D[f[m]],
                        g = W(M.content, h); if (d = L.getInput(f[m])) { for (var b in d.attributes)
                            if (d.attributes.hasOwnProperty(b)) { var v = d.attributes[b].name; "type" !== v && "value" !== v && d.removeAttribute(v) }
                        for (var y in T.inputAttributes) d.setAttribute(y, T.inputAttributes[y]) }
                    g.className = h, T.inputClass && N(g, T.inputClass), K(g) } switch (T.input) {
                    case "text":
                    case "email":
                    case "password":
                    case "number":
                    case "tel":
                    case "url":
                        d = W(M.content, D.input), "string" == typeof T.inputValue || "number" == typeof T.inputValue ? d.value = T.inputValue : q('Unexpected type of inputValue! Expected "string" or "number", got "'.concat(V(T.inputValue), '"')), d.placeholder = T.inputPlaceholder, d.type = T.input, U(d); break;
                    case "file":
                        (d = W(M.content, D.file)).placeholder = T.inputPlaceholder, d.type = T.input, U(d); break;
                    case "range":
                        var w = W(M.content, D.range),
                            C = w.querySelector("input"),
                            k = w.querySelector("output");
                        C.value = T.inputValue, C.type = T.input, k.value = T.inputValue, U(w); break;
                    case "select":
                        var x = W(M.content, D.select); if (x.innerHTML = "", T.inputPlaceholder) { var A = document.createElement("option");
                            A.innerHTML = T.inputPlaceholder, A.value = "", A.disabled = !0, A.selected = !0, x.appendChild(A) }
                        p = function(e) { e.forEach(function(e) { var t = e[0],
                                    n = e[1],
                                    o = document.createElement("option");
                                o.value = t, o.innerHTML = n, T.inputValue.toString() === t.toString() && (o.selected = !0), x.appendChild(o) }), U(x), x.focus() }; break;
                    case "radio":
                        var B = W(M.content, D.radio);
                        B.innerHTML = "", p = function(e) { e.forEach(function(e) { var t = e[0],
                                    n = e[1],
                                    o = document.createElement("input"),
                                    i = document.createElement("label");
                                o.type = "radio", o.name = D.radio, o.value = t, T.inputValue.toString() === t.toString() && (o.checked = !0); var r = document.createElement("span");
                                r.innerHTML = n, r.className = D.label, i.appendChild(o), i.appendChild(r), B.appendChild(i) }), U(B); var t = B.querySelectorAll("input");
                            t.length && t[0].focus() }; break;
                    case "checkbox":
                        var S = W(M.content, D.checkbox),
                            P = L.getInput("checkbox");
                        P.type = "checkbox", P.value = 1, P.id = D.checkbox, P.checked = Boolean(T.inputValue), S.querySelector("span").innerHTML = T.inputPlaceholder, U(S); break;
                    case "textarea":
                        var O = W(M.content, D.textarea);
                        O.value = T.inputValue, O.placeholder = T.inputPlaceholder, U(O); break;
                    case null:
                        break;
                    default:
                        R('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(T.input, '"')) } if ("select" === T.input || "radio" === T.input) { var E = function(e) { return p((t = e, n = [], "undefined" != typeof Map && t instanceof Map ? t.forEach(function(e, t) { n.push([t, e]) }) : Object.keys(t).forEach(function(e) { n.push([e, t[e]]) }), n)); var t, n };
                    H(T.inputOptions) ? (j.showLoading(), T.inputOptions.then(function(e) { L.hideLoading(), E(e) })) : "object" === V(T.inputOptions) ? E(T.inputOptions) : R("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(V(T.inputOptions))) } else -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(T.input) && H(T.inputValue) && (j.showLoading(), K(d), T.inputValue.then(function(e) { d.value = "number" === T.input ? parseFloat(e) || 0 : e + "", U(d), d.focus(), L.hideLoading() }).catch(function(e) { R("Error in inputValue promise: " + e), d.value = "", U(d), d.focus(), L.hideLoading() }));
                je(T), T.toast || (I(T.allowEnterKey) ? T.focusCancel && F(M.cancelButton) ? M.cancelButton.focus() : T.focusConfirm && F(M.confirmButton) ? M.confirmButton.focus() : s(-1, 1) : document.activeElement && document.activeElement.blur()), M.container.scrollTop = 0 }) } });

    function Re() { if ("undefined" != typeof window) { "undefined" == typeof Promise && R("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"); for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; if (0 === t.length) return R("At least 1 argument is expected!"), !1;
            Ve = this; var o = Object.freeze(this.constructor.argsToParams(t));
            Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0 } }); var i = this._main(this.params);
            Pe.promise.set(this, i) } }
    Re.prototype.then = function(e, t) { return Pe.promise.get(this).then(e, t) }, Re.prototype.catch = function(e) { return Pe.promise.get(this).catch(e) }, Re.prototype.finally = function(e) { return Pe.promise.get(this).finally(e) }, r(Re.prototype, qe), r(Re, Ae), Object.keys(qe).forEach(function(t) { Re[t] = function() { var e; if (Ve) return (e = Ve)[t].apply(e, arguments) } }), Re.DismissReason = e, Re.noop = function() {}; var Ie, He, De = fe((Ie = Re, He = function(e) {
        function t() { return s(this, t), d(this, c(t).apply(this, arguments)) } return a(t, Ie), i(t, [{ key: "_main", value: function(e) { return p(c(t.prototype), "_main", this).call(this, r({}, Ce, e)) } }], [{ key: "setDefaults", value: function(t) { if (m(we), !t || "object" !== V(t)) throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");
                ye(t), Object.keys(t).forEach(function(e) { Ie.isValidParameter(e) && (Ce[e] = t[e]) }) } }, { key: "resetDefaults", value: function() { m(we), Ce = {} } }]), t }(), "undefined" != typeof window && "object" === V(window._swalDefaults) && He.setDefaults(window._swalDefaults), He)); return De.default = De }), "undefined" != typeof window && window.Sweetalert2 && (window.Sweetalert2.version = "7.28.11", window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2);