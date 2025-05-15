!function r(a, s, l) {
    function d(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var n = "function" == typeof require && require;
                if (!e && n)
                    return n(t, !0);
                if (u)
                    return u(t, !0);
                var i = new Error("Cannot find module '" + t + "'");
                throw i.code = "MODULE_NOT_FOUND",
                i
            }
            var o = s[t] = {
                exports: {}
            };
            a[t][0].call(o.exports, function(e) {
                return d(a[t][1][e] || e)
            }, o, o.exports, r, a, s, l)
        }
        return s[t].exports
    }
    for (var u = "function" == typeof require && require, e = 0; e < l.length; e++)
        d(l[e]);
    return d
}({
    1: [function(e, t, n) {}
    , {}],
    2: [function(o, r, e) {
        (function(e) {
            var t, n = void 0 !== e ? e : "undefined" != typeof window ? window : {}, i = o(1);
            "undefined" != typeof document ? t = document : (t = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (t = n["__GLOBAL_DOCUMENT_CACHE@4"] = i),
            r.exports = t
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        1: 1
    }],
    3: [function(e, n, t) {
        (function(e) {
            var t;
            t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
            n.exports = t
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    
    
    
    
    8: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , L = i(e(3))
          , F = i(e(2))
          , j = i(e(9))
          , I = e(29)
          , M = e(30)
          , O = e(10)
          , D = e(27);
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function H(e, t, n) {
            var c = this;
            !function(e) {
                if (!(e instanceof H))
                    throw new TypeError("Cannot call a class as a function")
            }(this);
            var f = this;
            n = Array.isArray(n) ? n : null,
            f.defaults = {
                renderers: [],
                fakeNodeName: "mediaelementwrapper",
                pluginPath: "build/",
                shimScriptAccess: "sameDomain"
            },
            t = Object.assign(f.defaults, t),
            f.mediaElement = F.default.createElement(t.fakeNodeName);
            var i = e
              , o = !1;
            if ("string" == typeof e ? f.mediaElement.originalNode = F.default.getElementById(e) : i = (f.mediaElement.originalNode = e).id,
            void 0 === f.mediaElement.originalNode || null === f.mediaElement.originalNode)
                return null;
            f.mediaElement.options = t,
            i = i || "mejs_" + Math.random().toString().slice(2),
            f.mediaElement.originalNode.setAttribute("id", i + "_from_mejs");
            var r = f.mediaElement.originalNode.tagName.toLowerCase();
            function a(t, e) {
                if ("https:" === L.default.location.protocol && 0 === t.indexOf("http:") && D.IS_IOS && -1 < j.default.html5media.mediaTypes.indexOf(e)) {
                    var n = new XMLHttpRequest;
                    n.onreadystatechange = function() {
                        if (4 !== this.readyState || 200 !== this.status)
                            return t;
                        var e = (L.default.URL || L.default.webkitURL).createObjectURL(this.response);
                        return f.mediaElement.originalNode.setAttribute("src", e),
                        e
                    }
                    ,
                    n.open("GET", t),
                    n.responseType = "blob",
                    n.send()
                }
                return t
            }
            -1 < ["video", "audio"].indexOf(r) && !f.mediaElement.originalNode.getAttribute("preload") && f.mediaElement.originalNode.setAttribute("preload", "none"),
            f.mediaElement.originalNode.parentNode.insertBefore(f.mediaElement, f.mediaElement.originalNode),
            f.mediaElement.appendChild(f.mediaElement.originalNode);
            var s = void 0;
            if (null !== n)
                s = n;
            else if (null !== f.mediaElement.originalNode)
                switch (s = [],
                f.mediaElement.originalNode.nodeName.toLowerCase()) {
                case "iframe":
                    s.push({
                        type: "",
                        src: f.mediaElement.originalNode.getAttribute("src")
                    });
                    break;
                case "audio":
                case "video":
                    var l = f.mediaElement.originalNode.children.length
                      , d = f.mediaElement.originalNode.getAttribute("src");
                    if (d) {
                        var u = f.mediaElement.originalNode
                          , m = (0,
                        M.formatType)(d, u.getAttribute("type"));
                        s.push({
                            type: m,
                            src: a(d, m)
                        })
                    }
                    for (var p = 0; p < l; p++) {
                        var h = f.mediaElement.originalNode.children[p];
                        if ("source" === h.tagName.toLowerCase()) {
                            var v = h.getAttribute("src")
                              , g = (0,
                            M.formatType)(v, h.getAttribute("type"));
                            s.push({
                                type: g,
                                src: a(v, g)
                            })
                        }
                    }
                }
            function y(t, e, n, i) {
                var o = t[e];
                Object.defineProperty(t, e, {
                    get: function() {
                        return n.apply(t, [o])
                    },
                    set: function(e) {
                        return o = i.apply(t, [e])
                    }
                })
            }
            function E(e) {
                if ("src" !== e) {
                    var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1)
                      , n = function() {
                        return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["get" + t] ? f.mediaElement.renderer["get" + t]() : null
                    }
                      , i = function(e) {
                        void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["set" + t] && f.mediaElement.renderer["set" + t](e)
                    };
                    y(f.mediaElement, e, n, i),
                    f.mediaElement["get" + t] = n,
                    f.mediaElement["set" + t] = i
                }
            }
            function b() {
                return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer.getSrc() : null
            }
            function S(e) {
                var t = [];
                if ("string" == typeof e)
                    t.push({
                        src: e,
                        type: e ? (0,
                        M.getTypeFromFile)(e) : ""
                    });
                else if ("object" === (void 0 === e ? "undefined" : A(e)) && void 0 !== e.src) {
                    var n = (0,
                    M.absolutizeUrl)(e.src)
                      , i = e.type
                      , o = Object.assign(e, {
                        src: n,
                        type: "" !== i && null != i || !n ? i : (0,
                        M.getTypeFromFile)(n)
                    });
                    t.push(o)
                } else if (Array.isArray(e))
                    for (var r = 0, a = e.length; r < a; r++) {
                        var s = (0,
                        M.absolutizeUrl)(e[r].src)
                          , l = e[r].type
                          , d = Object.assign(e[r], {
                            src: s,
                            type: "" !== l && null != l || !s ? l : (0,
                            M.getTypeFromFile)(s)
                        });
                        t.push(d)
                    }
                var u = O.renderer.select(t, f.mediaElement.options.renderers.length ? f.mediaElement.options.renderers : [])
                  , c = void 0;
                if (f.mediaElement.paused || (f.mediaElement.pause(),
                c = (0,
                I.createEvent)("pause", f.mediaElement),
                f.mediaElement.dispatchEvent(c)),
                f.mediaElement.originalNode.src = t[0].src || "",
                null !== u || !t[0].src)
                    return t[0].src ? f.mediaElement.changeRenderer(u.rendererName, t) : null;
                f.mediaElement.generateError("No renderer found", t)
            }
            function x(e, t) {
                try {
                    if ("play" !== e || "native_dash" !== f.mediaElement.rendererName && "native_hls" !== f.mediaElement.rendererName)
                        f.mediaElement.renderer[e](t);
                    else {
                        var n = f.mediaElement.renderer[e](t);
                        n && "function" == typeof n.then && n.catch(function() {
                            f.mediaElement.paused && setTimeout(function() {
                                var e = f.mediaElement.renderer.play();
                                void 0 !== e && e.catch(function() {
                                    f.mediaElement.renderer.paused || f.mediaElement.renderer.pause()
                                })
                            }, 150)
                        })
                    }
                } catch (e) {
                    f.mediaElement.generateError(e, s)
                }
            }
            function w(i) {
                f.mediaElement[i] = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer[i] && (f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function() {
                        x(i, t)
                    }).catch(function(e) {
                        f.mediaElement.generateError(e, s)
                    }) : x(i, t)),
                    null
                }
            }
            f.mediaElement.id = i,
            f.mediaElement.renderers = {},
            f.mediaElement.events = {},
            f.mediaElement.promises = [],
            f.mediaElement.renderer = null,
            f.mediaElement.rendererName = null,
            f.mediaElement.changeRenderer = function(e, t) {
                var n = c
                  , i = 2 < Object.keys(t[0]).length ? t[0] : t[0].src;
                if (void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e)
                    return n.mediaElement.renderer.pause(),
                    n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(),
                    n.mediaElement.renderer.show(),
                    n.mediaElement.renderer.setSrc(i),
                    !0;
                void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(),
                n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(),
                n.mediaElement.renderer.hide());
                var o = n.mediaElement.renderers[e]
                  , r = null;
                if (null != o)
                    return o.show(),
                    o.setSrc(i),
                    n.mediaElement.renderer = o,
                    n.mediaElement.rendererName = e,
                    !0;
                for (var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : O.renderer.order, s = 0, l = a.length; s < l; s++) {
                    var d = a[s];
                    if (d === e) {
                        r = O.renderer.renderers[d];
                        var u = Object.assign(r.options, n.mediaElement.options);
                        return (o = r.create(n.mediaElement, u, t)).name = e,
                        n.mediaElement.renderers[r.name] = o,
                        n.mediaElement.renderer = o,
                        n.mediaElement.rendererName = e,
                        o.show(),
                        !0
                    }
                }
                return !1
            }
            ,
            f.mediaElement.setSize = function(e, t) {
                void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer.setSize(e, t)
            }
            ,
            f.mediaElement.generateError = function(e, t) {
                e = e || "",
                t = Array.isArray(t) ? t : [];
                var n = (0,
                I.createEvent)("error", f.mediaElement);
                n.message = e,
                n.urls = t,
                f.mediaElement.dispatchEvent(n),
                o = !0
            }
            ;
            var T = j.default.html5media.properties
              , P = j.default.html5media.methods;
            y(f.mediaElement, "src", b, S),
            f.mediaElement.getSrc = b,
            f.mediaElement.setSrc = S;
            for (var C = 0, k = T.length; C < k; C++)
                E(T[C]);
            for (var _ = 0, N = P.length; _ < N; _++)
                w(P[_]);
            return f.mediaElement.addEventListener = function(e, t) {
                f.mediaElement.events[e] = f.mediaElement.events[e] || [],
                f.mediaElement.events[e].push(t)
            }
            ,
            f.mediaElement.removeEventListener = function(e, t) {
                if (!e)
                    return f.mediaElement.events = {},
                    !0;
                var n = f.mediaElement.events[e];
                if (!n)
                    return !0;
                if (!t)
                    return f.mediaElement.events[e] = [],
                    !0;
                for (var i = 0; i < n.length; i++)
                    if (n[i] === t)
                        return f.mediaElement.events[e].splice(i, 1),
                        !0;
                return !1
            }
            ,
            f.mediaElement.dispatchEvent = function(e) {
                var t = f.mediaElement.events[e.type];
                if (t)
                    for (var n = 0; n < t.length; n++)
                        t[n].apply(null, [e])
            }
            ,
            f.mediaElement.destroy = function() {
                var e = f.mediaElement.originalNode.cloneNode(!0)
                  , t = f.mediaElement.parentElement;
                e.removeAttribute("id"),
                e.remove(),
                f.mediaElement.remove(),
                t.appendChild(e)
            }
            ,
            s.length && (f.mediaElement.src = s),
            f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function() {
                f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode)
            }).catch(function() {
                o && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)
            }) : (f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode),
            o && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)),
            f.mediaElement
        }
        L.default.MediaElement = H,
        j.default.MediaElement = H,
        n.default = H
    }
    , {
        10: 10,
        2: 2,
        27: 27,
        29: 29,
        3: 3,
        30: 30,
        9: 9
    }],
    9: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e(3)
          , o = {
            html5media: {
                properties: ["volume"],
                readOnlyProperties: [],
                methods: ["play", "pause"],
                events: ["loadedmetadata", "play", "playing", "pause", "waiting"],
                mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
            }
        };
        (i && i.__esModule ? i : {
            default: i
        }).default.mejs = o,
        n.default = o
    }
    , {
        3: 3
    }],
    10: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.renderer = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = function(e, t, n) {
            return t && s(e.prototype, t),
            n && s(e, n),
            e
        }
          , r = e(9)
          , a = r && r.__esModule ? r : {
            default: r
        };
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var l = (o(u, [{
            key: "add",
            value: function(e) {
                if (void 0 === e.name)
                    throw new TypeError("renderer must contain at least `name` property");
                this.renderers[e.name] = e,
                this.order.push(e.name)
            }
        }, {
            key: "select",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []
                  , n = t.length;
                if (t = t.length ? t : this.order,
                !n) {
                    var i = [/^(html5|native)/i, /^flash/i, /iframe$/i]
                      , o = function(e) {
                        for (var t = 0, n = i.length; t < n; t++)
                            if (i[t].test(e))
                                return t;
                        return i.length
                    };
                    t.sort(function(e, t) {
                        return o(e) - o(t)
                    })
                }
                for (var r = 0, a = t.length; r < a; r++) {
                    var s = t[r]
                      , l = this.renderers[s];
                    if (null != l)
                        for (var d = 0, u = e.length; d < u; d++)
                            if ("function" == typeof l.canPlayType && "string" == typeof e[d].type && l.canPlayType(e[d].type))
                                return {
                                    rendererName: l.name,
                                    src: e[d].src
                                }
                }
                return null
            }
        }, {
            key: "renderers",
            set: function(e) {
                if (null !== e && "object" !== (void 0 === e ? "undefined" : i(e)))
                    throw new TypeError("renderers must be an array of objects.");
                this._renderers = e
            },
            get: function() {
                return this._renderers
            }
        }]),
        u)
          , d = n.renderer = new l;
        function u() {
            !function(e) {
                if (!(e instanceof u))
                    throw new TypeError("Cannot call a class as a function")
            }(this),
            this.renderers = {},
            this.order = []
        }
        a.default.Renderers = d
    }
    , {
        9: 9
    }],
       
    18: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.config = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = function(e, t, n) {
            return t && a(e.prototype, t),
            n && a(e, n),
            e
        }
          , S = s(e(3))
          , x = s(e(2))
          , v = s(e(9))
          , g = s(e(8))
          , r = s(e(19))
          , w = e(27)
          , E = e(29)
          , d = e(32)
          , b = e(30)
          , T = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }(e(28));
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        v.default.mepIndex = 0,
        v.default.players = {};
        var l = n.config = {
            
            classPrefix: "",
            
            
        };
        v.default.MepDefaults = l;
        var u = (i(c, [{
            key: "getElement",
            value: function(e) {
                return e
            }
        }, {
            key: "init",
            value: function() {
                var n = this
                  , e = Object.assign({}, n.options, {
                    success: function(e, t) {
                        n._meReady(e, t)
                    },
                    error: function(e) {
                        n._handleError(e)
                    }
                })
                  , t = n.node.tagName.toLowerCase();
                
                   
                    n.container = x.default.createElement("div"),
              		n.getElement(n.container).setAttribute("aria-label", "Audio Player"),
                    n.getElement(n.container).innerHTML = '<div class="' + n.options.classPrefix + 'inner"><div class="' + n.options.classPrefix + 'mediaelement"></div></div>',
                   
                    n.node.parentNode.insertBefore(n.getElement(n.container), n.node)
                   
                   
                   
                    n.getElement(n.container).querySelector("." + n.options.classPrefix + "mediaelement").appendChild(n.node)
                   
                    
                if (v.default.MepDefaults = e,
                new g.default(n.media,e,n.mediaFiles),
                void 0 !== n.getElement(n.container) && n.options.features.length && n.controlsAreVisible && !n.options.hideVideoControlsOnLoad) {
                    var h = (0,
                    E.createEvent)("controlsshown", n.getElement(n.container));
                    n.getElement(n.container).dispatchEvent(h)
                }
            }
        }, {
            key: "_setDefaultPlayer",
            value: function() {
                var e = this;
                e.proxy && e.proxy.pause(),
                e.proxy = new r.default(e)
            }
        }, {
            key: "_meReady",
            value: function(e, t) {
                var n = this
                  , i = t.getAttribute("autoplay")
                  , o = !(null == i || "false" === i)
                  , r = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);
                if (n.getElement(n.controls),
                n.getElement(n.container) && n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play") && (n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""),
                !n.created) {
                    if (n.created = !0,
                    n.media = e,
                    n.domNode = t,
                    !(w.IS_ANDROID && n.options.AndroidUseNativeControls || w.IS_IPAD && n.options.iPadUseNativeControls || w.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
                        if (!n.isVideo && !n.options.features.length && !n.options.useDefaultControls)
                            return o && r && n.play(),
                            void (n.options.success && ("string" == typeof n.options.success ? S.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));
                                           
                                  
                    }
                    o && r && n.play(),
                    n.options.success && ("string" == typeof n.options.success ? S.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
                }
            }
        }]),
        c);
        function c(e, t) {
            !function(e) {
                if (!(e instanceof c))
                    throw new TypeError("Cannot call a class as a function")
            }(this);
            var n = this
              , i = "string" == typeof e ? x.default.getElementById(e) : e;
            if (!(n instanceof c))
                return new c(i,t);
            if (n.node = n.media = i,
            n.node) {
                if (n.media.player)
                    return n.media.player;
                if (n.hasFocus = !1,
                n.controlsAreVisible = !0,
                n.controlsEnabled = !0,
                n.controlsTimer = null,
                n.currentMediaTime = 0,
                n.proxy = null,
                void 0 === t) {
                    var o = n.node.getAttribute("data-mejsoptions");
                    t = o ? JSON.parse(o) : {}
                }
                return n.options = Object.assign({}, l, t),
                n.options.loop && !n.media.getAttribute("loop") ? (n.media.loop = !0,
                n.node.loop = !0) : n.media.loop && (n.options.loop = !0),
                n.options.timeFormat || (n.options.timeFormat = "mm:ss",
                n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"),
                n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")),
                (0,
                d.calculateTimeFormat)(0, n.options, n.options.framesPerSecond || 25),
                n.id = "mep_" + v.default.mepIndex++,
                (v.default.players[n.id] = n).init(),
                n
            }
        }
        S.default.MediaElementPlayer = u,
        v.default.MediaElementPlayer = u,
        n.default = u
    }
    , {
        19: 19,
        2: 2,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        32: 32,
        8: 8,
        9: 9
    }],
    19: [function(e, t, n) {
    }],
    
    
    24: [function(e, t, n) {
        "use strict";
        var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , E = a(e(3))
          , b = a(e(9))
          , S = e(10)
          , x = e(29)
          , i = e(27)
          , o = e(30)
          , r = e(28);
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var w = {
            promise: null,
            load: function(e) {
                return "undefined" != typeof Hls ? w.promise = new Promise(function(e) {
                    e()
                }
                ).then(function() {
                    w._createPlayer(e)
                }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/hls.js@latest",
                w.promise = w.promise || (0,
                r.loadScript)(e.options.path),
                w.promise.then(function() {
                    w._createPlayer(e)
                })),
                w.promise
            },
            _createPlayer: function(e) {
                var t = new Hls(e.options);
                return E.default["__ready__" + e.id](t),
                t
            }
        }
          , s = {
            name: "native_hls",
            options: {
                prefix: "native_hls",
                hls: {
                    path: "https://cdn.jsdelivr.net/npm/hls.js@latest",
                    autoStartLoad: !1,
                    debug: !1
                }
            },
            canPlayType: function(e) {
                return i.HAS_MSE && -1 < ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
            },
            create: function(d, o, u) {
                var e = d.originalNode
                  , r = d.id + "_" + o.prefix
                  , t = e.getAttribute("preload")
                  , n = e.autoplay
                  , c = null
                  , f = null
                  , m = 0
                  , p = u.length;
                f = e.cloneNode(!0),
                (o = Object.assign(o, d.options)).hls.autoStartLoad = t && "none" !== t || n;
                for (var i = b.default.html5media.properties, h = b.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
                    return "error" !== e
                }), v = function(e) {
                    var t = (0,
                    x.createEvent)(e.type, d);
                    d.dispatchEvent(t)
                }, a = function(i) {
                    var e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                    f["get" + e] = function() {
                        return null !== c ? f[i] : null
                    }
                    ,
                    f["set" + e] = function(e) {
                        if (-1 === b.default.html5media.readOnlyProperties.indexOf(i))
                            if ("src" === i) {
                                if (f[i] = "object" === (void 0 === e ? "undefined" : y(e)) && e.src ? e.src : e,
                                null !== c) {
                                    c.destroy();
                                    for (var t = 0, n = h.length; t < n; t++)
                                        f.removeEventListener(h[t], v);
                                    (c = w._createPlayer({
                                        options: o.hls,
                                        id: r
                                    })).loadSource(e),
                                    c.attachMedia(f)
                                }
                            } else
                                f[i] = e
                    }
                }, s = 0, l = i.length; s < l; s++)
                    a(i[s]);
                if (E.default["__ready__" + r] = function(e) {
                    d.hlsPlayer = c = e;
                    for (var o = Hls.Events, t = function(e) {
                        if ("loadedmetadata" === e) {
                            var t = d.originalNode.src;
                            c.detachMedia(),
                            c.loadSource(t),
                            c.attachMedia(f)
                        }
                        f.addEventListener(e, v)
                    }, n = 0, i = h.length; n < i; n++)
                        t(h[n]);
                    function r(i) {
                        o.hasOwnProperty(i) && c.on(o[i], function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                            return function(e, t) {
                                if ("hlsError" === e && (console.warn(t),
                                (t = t[1]).fatal))
                                    switch (t.type) {
                                    case "mediaError":
                                        var n = (new Date).getTime();
                                        if (!s || 3e3 < n - s)
                                            s = (new Date).getTime(),
                                            c.recoverMediaError();
                                        else if (!l || 3e3 < n - l)
                                            l = (new Date).getTime(),
                                            console.warn("Attempting to swap Audio Codec and recover from media error"),
                                            c.swapAudioCodec(),
                                            c.recoverMediaError();
                                        else {
                                            var i = "Cannot recover, last media error recovery failed";
                                            d.generateError(i, f.src),
                                            console.error(i)
                                        }
                                        break;
                                    case "networkError":
                                        if ("manifestLoadError" === t.details)
                                            if (m < p && void 0 !== u[m + 1])
                                                f.setSrc(u[m++].src),
                                                f.load(),
                                                f.play();
                                            else {
                                                var o = "Network error";
                                                d.generateError(o, u),
                                                console.error(o)
                                            }
                                        else {
                                            var r = "Network error";
                                            d.generateError(r, u),
                                            console.error(r)
                                        }
                                        break;
                                    default:
                                        c.destroy()
                                    }
                                else {
                                    var a = (0,
                                    x.createEvent)(e, d);
                                    a.data = t,
                                    d.dispatchEvent(a)
                                }
                            }(o[i], t)
                        })
                    }
                    var s = void 0
                      , l = void 0;
                    for (var a in o)
                        r(a)
                }
                ,
                0 < p)
                    for (; m < p; m++)
                        if (S.renderer.renderers[o.prefix].canPlayType(u[m].type)) {
                            f.setAttribute("src", u[m].src);
                            break
                        }
                "auto" === t || n || (f.addEventListener("play", function() {
                    null !== c && c.startLoad()
                }),
                f.addEventListener("pause", function() {
                    null !== c && c.stopLoad()
                })),
                f.setAttribute("id", r),
                e.parentNode.insertBefore(f, e),
                e.autoplay = !1,
                e.style.display = "none",
                f.setSize = function(e, t) {
                    return f.style.width = e + "px",
                    f.style.height = t + "px",
                    f
                }
                ,
                f.hide = function() {
                    return f.pause(),
                    f.style.display = "none",
                    f
                }
                ,
                f.show = function() {
                    return f.style.display = "",
                    f
                }
                ,
                f.destroy = function() {
                    null !== c && (c.stopLoad(),
                    c.destroy())
                }
                ;
                var g = (0,
                x.createEvent)("rendererready", f);
                return d.dispatchEvent(g),
                d.promises.push(w.load({
                    options: o.hls,
                    id: r
                })),
                f
            }
        };
        o.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
        }),
        S.renderer.add(s)
    }
    , {
        10: 10,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        9: 9
    }],
    25: [function(e, t, n) {
        "use strict";
        var i = r(e(3))
          , g = r(e(2))
          , y = r(e(9))
          , E = e(10)
          , b = e(29)
          , o = e(27);
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = {
            name: "html5",
            options: {
                prefix: "html5"
            },
            canPlayType: function(e) {
                var t = g.default.createElement("video");
                return o.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && o.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
            },
            create: function(n, e, t) {
                var i = n.id + "_" + e.prefix
                  , o = !1
                  , r = null;
                void 0 === n.originalNode || null === n.originalNode ? (r = g.default.createElement("audio"),
                n.appendChild(r)) : r = n.originalNode,
                r.setAttribute("id", i);
                for (var a = y.default.html5media.properties, s = function(t) {
                    var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                    r["get" + e] = function() {
                        return r[t]
                    }
                    ,
                    r["set" + e] = function(e) {
                        -1 === y.default.html5media.readOnlyProperties.indexOf(t) && (r[t] = e)
                    }
                }, l = 0, d = a.length; l < d; l++)
                    s(a[l]);
                for (var u, c = y.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function(e) {
                    return "error" !== e
                }), f = 0, m = c.length; f < m; f++)
                    u = c[f],
                    r.addEventListener(u, function(e) {
                        if (o) {
                            var t = (0,
                            b.createEvent)(e.type, e.target);
                            n.dispatchEvent(t)
                        }
                    });
                
                r.show = function() {
                    return o = !0,
                    r.style.display = "",
                    r
                }
                ;
                var p = 0
                  , h = t.length;
                if (0 < h)
                    for (; p < h; p++)
                        if (E.renderer.renderers[e.prefix].canPlayType(t[p].type)) {
                            r.setAttribute("src", t[p].src);
                            break
                        }
                r.addEventListener("error", function(e) {
                    4 === e.target.error.code && o && (p < h && void 0 !== t[p + 1] ? (r.src = t[p++].src,
                    r.load(),
                    r.play()) : n.generateError("Media error: Format(s) not supported or source(s) not found", t))
                });
                var v = (0,
                b.createEvent)("rendererready", r);
                return n.dispatchEvent(v),
                r
            }
        };
        i.default.HtmlMediaElement = y.default.HtmlMediaElement = a,
        E.renderer.add(a)
    }
    , {
        10: 10,
        2: 2,
        27: 27,
        29: 29,
        3: 3,
        9: 9
    }],
    27: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_PASSIVE_EVENT = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;
        var o = a(e(3))
          , r = a(e(2))
          , i = a(e(9));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        for (var s = n.NAV = o.default.navigator, l = n.UA = s.userAgent.toLowerCase(), d = n.IS_IPAD = /ipad/i.test(l) && !o.default.MSStream, u = n.IS_IPHONE = /iphone/i.test(l) && !o.default.MSStream, c = n.IS_IPOD = /ipod/i.test(l) && !o.default.MSStream, f = (n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !o.default.MSStream,
        n.IS_ANDROID = /android/i.test(l)), m = n.IS_IE = /(trident|microsoft)/i.test(s.appName), p = (n.IS_EDGE = "msLaunchUri"in s && !("documentMode"in r.default)), h = n.IS_CHROME = /chrome/i.test(l), v = n.IS_FIREFOX = /firefox/i.test(l), g = n.IS_SAFARI = /safari/i.test(l) && !h, y = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), E = (n.HAS_MSE = "MediaSource"in o.default), b = n.SUPPORT_POINTER_EVENTS = function() {
           
        }(),  x = ["source", "track", "audio", "video"], w = void 0, T = 0, P = x.length; T < P; T++);
            
        
       
    }
    , {
        2: 2,
        3: 3,
        9: 9
    }],
    28: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.removeClass = n.addClass = n.hasClass = void 0,
        n.loadScript = a;
        var o = r(e(2))
          , i = r(e(9));
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function a(i) {
            return new Promise(function(e, t) {
                var n = o.default.createElement("script");
                n.src = i,
                n.async = !0,
                n.onload = function() {
                    n.remove(),
                    e()
                }
                ,
                n.onerror = function() {
                    n.remove(),
                    t()
                }
                ,
                o.default.head.appendChild(n)
            }
            )
        }
        
       
        
        
        
    }
    , {
        2: 2,
        9: 9
    }],
    29: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.escapeHTML = r,
        n.createEvent = d;
        var i = e(9)
          , o = i && i.__esModule ? i : {
            default: i
        };
        function r(e) {
            if ("string" != typeof e)
                throw new Error("Argument passed must be a string");
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return e.replace(/[&<>"]/g, function(e) {
                return t[e]
            })
        }
        
       
        function d(e, t) {
            if ("string" != typeof e)
                throw new Error("Event name must be a string");
            var n = e.match(/([a-z]+\.([a-z]+))/i)
              , i = {
                target: t
            };
            return null !== n && (e = n[1],
            i.namespace = n[2]),
            new window.CustomEvent(e,{
                detail: i
            })
        }
        
        
    }
    , {
        9: 9
    }],
    30: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.typeChecks = void 0,
        n.absolutizeUrl = s,
        n.formatType = l,
        n.getMimeFromType = d,
        n.getTypeFromFile = u,
        n.getExtension = c,
        n.normalizeExtension = f;
        var i = e(9)
          , o = i && i.__esModule ? i : {
            default: i
        }
          , r = e(29)
          , a = n.typeChecks = [];
        function s(e) {
            if ("string" != typeof e)
                throw new Error("`url` argument must be a string");
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + (0,
            r.escapeHTML)(e) + '">x</a>',
            t.firstChild.href
        }
        function l(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
            return e && !t ? u(e) : t
        }
        function d(e) {
            if ("string" != typeof e)
                throw new Error("`type` argument must be a string");
            return e && -1 < e.indexOf(";") ? e.substr(0, e.indexOf(";")) : e
        }
        function u(e) {
            if ("string" != typeof e)
                throw new Error("`url` argument must be a string");
            for (var t = 0, n = a.length; t < n; t++) {
                var i = a[t](e);
                if (i)
                    return i
            }
            var o = f(c(e))
              , r = "video/mp4";
            return o && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(o) ? r = "video/" + o : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(o) && (r = "audio/" + o)),
            r
        }
        function c(e) {
            if ("string" != typeof e)
                throw new Error("`url` argument must be a string");
            var t = e.split("?")[0].split("\\").pop().split("/").pop();
            return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
        }
        function f(e) {
            if ("string" != typeof e)
                throw new Error("`extension` argument must be a string");
            switch (e) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return e
            }
        }
        o.default.Utils = o.default.Utils || {},
        o.default.Utils.typeChecks = a,
        o.default.Utils.absolutizeUrl = s,
        o.default.Utils.formatType = l,
        o.default.Utils.getMimeFromType = d,
        o.default.Utils.getTypeFromFile = u,
        o.default.Utils.getExtension = c,
        o.default.Utils.normalizeExtension = f
    }
    , {
        29: 29,
        9: 9
    }],
    
    32: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.isDropFrame = C,
        n.secondsToTimeCode = r,
        n.timeCodeToSeconds = a,
        n.calculateTimeFormat = s,
        n.convertSMPTEtoSeconds = l;
        var i = e(9)
          , o = i && i.__esModule ? i : {
            default: i
        };
        function C() {
            return !((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
        }
        function r(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
              , n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 25
              , o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0
              , r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "hh:mm:ss";
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            var a = Math.round(.066666 * i)
              , s = Math.round(i)
              , l = 24 * Math.round(3600 * i)
              , d = Math.round(600 * i)
              , u = C(i) ? ";" : ":"
              , c = void 0
              , f = void 0
              , m = void 0
              , p = void 0
              , h = Math.round(e * i);
            if (C(i)) {
                h < 0 && (h = l + h);
                var v = (h %= l) % d;
                h += 9 * a * Math.floor(h / d),
                a < v && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
                var g = Math.floor(h / s);
                c = Math.floor(Math.floor(g / 60) / 60),
                f = Math.floor(g / 60) % 60,
                m = n ? g % 60 : Math.floor(h / s % 60).toFixed(o)
            } else
                c = Math.floor(e / 3600) % 24,
                f = Math.floor(e / 60) % 60,
                m = n ? Math.floor(e % 60) : Math.floor(e % 60).toFixed(o);
            c = c <= 0 ? 0 : c,
            m = 60 === (m = m <= 0 ? 0 : m) ? 0 : m,
            f = 60 === (f = f <= 0 ? 0 : f) ? 0 : f;
            for (var y = r.split(":"), E = {}, b = 0, S = y.length; b < S; ++b) {
                for (var x = "", w = 0, T = y[b].length; w < T; w++)
                    x.indexOf(y[b][w]) < 0 && (x += y[b][w]);
                ~["f", "s", "m", "h"].indexOf(x) && (E[x] = y[b].length)
            }
            var P = t || 0 < c ? (c < 10 && 1 < E.h ? "0" + c : c) + ":" : "";
            return P += (f < 10 && 1 < E.m ? "0" + f : f) + ":",
            P += "" + (m < 10 && 1 < E.s ? "0" + m : m),
            n && (P += (p = (p = (h % s).toFixed(0)) <= 0 ? 0 : p) < 10 && E.f ? u + "0" + p : u + p),
            P
        }
        function a(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 25;
            if ("string" != typeof e)
                throw new TypeError("Time must be a string");
            if (0 < e.indexOf(";") && (e = e.replace(";", ":")),
            !/\d{2}(\:\d{2}){0,3}/i.test(e))
                throw new TypeError("Time code must have the format `00:00:00`");
            var n = e.split(":")
              , i = void 0
              , o = 0
              , r = 0
              , a = 0
              , s = 0
              , l = 0
              , d = Math.round(.066666 * t)
              , u = Math.round(t)
              , c = 3600 * u
              , f = 60 * u;
            switch (n.length) {
            default:
            case 1:
                a = parseInt(n[0], 10);
                break;
            case 2:
                r = parseInt(n[0], 10),
                a = parseInt(n[1], 10);
                break;
            case 3:
                o = parseInt(n[0], 10),
                r = parseInt(n[1], 10),
                a = parseInt(n[2], 10);
                break;
            case 4:
                o = parseInt(n[0], 10),
                r = parseInt(n[1], 10),
                a = parseInt(n[2], 10),
                s = parseInt(n[3], 10)
            }
            return i = C(t) ? c * o + f * r + u * a + s - d * ((l = 60 * o + r) - Math.floor(l / 10)) : (c * o + f * r + t * a + s) / t,
            parseFloat(i.toFixed(3))
        }
        function s(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 25;
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            for (var i = Math.floor(e / 3600) % 24, o = Math.floor(e / 60) % 60, r = Math.floor(e % 60), a = [[Math.floor((e % 1 * n).toFixed(3)), "f"], [r, "s"], [o, "m"], [i, "h"]], s = t.timeFormat, l = s[1] === s[0], d = l ? 2 : 1, u = s.length < d ? s[d] : ":", c = s[0], f = !1, m = 0, p = a.length; m < p; m++)
                if (~s.indexOf(a[m][1]))
                    f = !0;
                else if (f) {
                    for (var h = !1, v = m; v < p; v++)
                        if (0 < a[v][0]) {
                            h = !0;
                            break
                        }
                    if (!h)
                        break;
                    l || (s = c + s),
                    s = a[m][1] + u + s,
                    l && (s = a[m][1] + s),
                    c = a[m][1]
                }
            t.timeFormat = s
        }
        function l(e) {
            if ("string" != typeof e)
                throw new TypeError("Argument must be a string value");
            for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, i = 1, o = 0, r = (e = e.split(":").reverse()).length; o < r; o++)
                i = 1,
                0 < o && (i = Math.pow(60, o)),
                n += Number(e[o]) * i;
            return Number(n.toFixed(t))
        }
        o.default.Utils = o.default.Utils || {},
        o.default.Utils.secondsToTimeCode = r,
        o.default.Utils.timeCodeToSeconds = a,
        o.default.Utils.calculateTimeFormat = s,
        o.default.Utils.convertSMPTEtoSeconds = l
    }
    , {
        9: 9
    }]
}, {}, [8, 25, 24, 18, 19]),





"mediaSession" in navigator &&
    (navigator.mediaSession.metadata = new MediaMetadata({
        artwork: [
          	{ src: "https://iradiostudio.com//img/player/plogo-96.webp", sizes: "96x96", type: "image/png" },
            { src: "https://iradiostudio.com//img/player/plogo-256.webp", sizes: "256x256", type: "image/png" },
            { src: "https://iradiostudio.com//img/player/plogo-384.webp", sizes: "384x384", type: "image/png" },
            { src: "https://iradiostudio.com//img/player/plogo-512.webp", sizes: "512x512", type: "image/png" },
        ],
    }));
var $content = $("#content");
var datatype = $content.data('type');
function PlayerEvent(){
var data = $("#a-player")[0].attributes['data-http'].nodeValue;
        var e,
            t = document.querySelectorAll("video, audio"),
            n = t.length;
        for (e = 0; e < n; e++) {
          
            new MediaElementPlayer(t[e], {
             
                features: ["playpause"],
                forceLive: !0,
                success: function (e) {
                  if (localStorage.getItem('volume')) {
    player.volume = localStorage.getItem('volume');
  }
                  
                  if (!localStorage.getItem('visited_before')) {

    localStorage.setItem('visited_before', 'true');
} else {
    // Not first time: safe to autoplay
    setTimeout(function () {
        
            player.play();
        
    }, 200);
}
                  
                    e.addEventListener("loadedmetadata", function () {          
                      
                      
                  }),
                        e.addEventListener("error", function (e) {
     
                          if(data=='yes'){
                            player.pause();
                            $("#offair").empty();
                             $("#offair").addClass('offair_error sec-flex').append('<div class="offair offair_error_btn sec-flex"><div class="pl-open"></div>Click here to play</div>');
                            setTimeout(function () {   
                              $("#contentplay.pl").addClass('offair');
                              $(".pl").off("click");
                              $(".offair").click(function(){
  								 playlink();
   								});

  								}, 500);                         
                      }
                          else
                          {
                            player.pause();
                            $("#offair").empty();
                            $("#offair").addClass('offair_error sec-flex').append('<div class="offair_error_btn sec-flex">This Station is Currently Offline</div>');
                            
                            
                          }
                          
                        });
                },
               
            });
            
        }
}
function VolumeEvent(){
  var volumeSlider = document.getElementById('volumeSlider');
  var muteButton = document.getElementById('muteButton');

  if (localStorage.getItem('volume')) {
    volumeSlider.value = localStorage.getItem('volume');
    updateMuteButton();
  }

  volumeSlider.addEventListener('input', function() {
    player.volume = volumeSlider.value;
    localStorage.setItem('volume', volumeSlider.value);
    updateMuteButton();
  });
  

  function updateMuteButton() {
    volumeSlider.setAttribute('value', volumeSlider.value);
    if (volumeSlider.value === "0") {
      muteButton.innerHTML = '<div class="mute"></div>';
    } else {
      muteButton.innerHTML = '<div class="unmute"></div>';
    };
   
  }
}
function PlayEvent(){
   $(".pl, .pa, .sp").off("click");
  $('#player_play, #player_button').removeClass('play pause').addClass('spinner'); 
   $('#contentplay, #player_button').removeClass('pl pa').addClass('sp');  
   $(".playinfo").empty().html('Buffering');
   $(".sp").click(function(){
   player.pause();
   });
}
function PauseEvent(){
   $(".pa, .sp").off("click");
   $('#player_play, #player_button').removeClass('pause spinner').addClass('play');
  $('#contentplay, #player_button').removeClass('pa sp').addClass('pl');
   $(".playinfo").empty().html('Stopped');
   $(".pl").click(function(){
   player.play();
   });
}
function PlayingEvent(){   
   $(".pl, .sp").off("click");
   $('#player_play, #player_button').removeClass('play spinner').addClass('pause');
  $('#contentplay, #player_button').removeClass('pl sp').addClass('pa');
   $(".playinfo").empty().html('Playing');
   $("#offair").empty().removeClass('offair_error');
   $(".pa").click(function(){
   player.pause();
   });  
}



function playlink() {
  var url = 'http://p.' + urlBase + '/?p=' + slug ;

  window.open(url, 'MyWindow', 'menubar=1,resizable=1,width=650,height=650,left=510,top=200');
  return false;
}



function playoption(){ 

VolumeEvent();
PlayerEvent();
setTimeout(function () {   
player.addEventListener('waiting',PlayEvent);
player.addEventListener('pause',PauseEvent);                
player.addEventListener('playing',PlayingEvent);
  $(".pl").click(function(){
   player.play();
   });
  }, 100);     
   
};



// Function to handle streaming playback
function streamplayoption() {
  
  var $aPlayer = $("#a-player");
    var streamURL = $aPlayer.data('stream');
    var type = $aPlayer.is('[data-type]') ? $aPlayer.data('type') : null;
  
   var newAudioElement = $('<audio id="player" controls>');
            $('body').append(newAudioElement);
   var player = document.getElementById('player');
   if (type) {
        player.setAttribute('type', type);
    }
  
  if (streamURL) {
        player.src = streamURL;
		playoption();
      	$("#player").empty();
  }

     
}

// Call fetchStreamURLs to fetch the URLs, then pass them to streamplayoption for playback

function openplayerlink() {
    var url = $("#offair").attr('data-stream');
    window.open(url, '_blank');

    return false;
}
function iframelink() {
  
    var url = '//i.' + urlBase + '/?p=' + slug ;

  window.open(url, 'MyWindow', 'menubar=1,resizable=1,width=650,height=650,left=510,top=200');
  return false;
}




if (datatype === 'single') {
    // Get base URL and identifiers from #content attributes
    var urlBase = $content.data('domain');
    var slug = $content.data('slug');

    // If the audio player exists, initialize stream player options
    if ($('#a-player').length) {
        streamplayoption();
    }

    // Handle .popup button click - simulate click on .offair_error_btn
    $('.popup').on('click', function () {
        $('#offair').find('.offair_error_btn').click();
    });

    // Handle .openplayer click to trigger openplayerlink function
    $('.openplayer').on('click', function () {
        openplayerlink();
    });

    // Handle .iframe click to trigger iframelink function
    $('.iframe').on('click', function () {
        iframelink();
    });
} else {
if (!localStorage.getItem('visited_before')) {
    localStorage.setItem('visited_before', 'true');
}
}
