/*! scripts/pre_tumblelog.js */

!function() {
    function e(a) {
        var r = a.target || a.srcElement;

        if ("password" === r.type)
            return n(t) ? void window.removeEventListener("keypress", e, !0) : (r.value = "", !1)
    }

    var t = translated_warning_string, n = window.confirm;
    
    "undefined" != typeof window.addEventListener && window.addEventListener("keypress", e, !0)
}(), function() {
    function e(e, t) {
        if (s.push(t), o)
            for (; s.length;) {
                var n = s.shift();

                e.contentWindow.postMessage(n, e.src.split("/analytics.html")[0])
            }
    }

    if ("undefined" != typeof __pbpa && __pbpa !== !1) {
        var t = {},
            n = document.createElement("a"),
            a = window.addEventListener ? "addEventListener" : "attachEvent",
            i = "attachEvent" === a ? "onmessage" : "message",
            o = !1,
            s = [];

        window[a](i, function(e) {
            var t = e.data && e.data.split ? e.data.split(";") : "";

            "analytics_iframe_ga_non_ajax_received" === t[0] && (o = !0)
        }, !1);

        var c = function() {
                var t = document.getElementById("ga_target");

                if (!t)
                    return !0;

                var a = "/";

                "undefined" != typeof this.called_url && (a = this.called_url), n.href = a, a = n.href;
                
                var r = "unknown_ajax_blog_route";

                n.pathname.match(/^\/page/) && (r = "/page/:page"), n.pathname.match(/^\/api\/read\/json/) && (r = "/api/read/json");
                
                try {
                    var i = !0,
                        o = ["tick_google_analytics", i, a, r].join(";");
                    if (e(t, o), "undefined" != typeof COMSCORE) {
                        var s = "tick_comscore;" + a;

                        e(t, s)
                    }
                } catch (c) {}

                return !0
            }, p = function() {
                if ("undefined" == typeof __pbpm || __pbpm !== !1) {
                    try {
                        var e = parseInt(this.getResponseHeader("X-Tumblr-Pixel"));

                        if (!e) return;

                        for (var t, n = "", a = 0; e > a; a++) {
                            if (t = this.getResponseHeader("X-Tumblr-Pixel-" + a), !t) return;

                            n += t
                        }

                        var i, o = n.split("--");

                        o.forEach(function(e) {
                            e += "&A=1", i = new Image(1, 1), i.src = (r = e.replace(/&R=[^&$]*/, "")) + ("&R=" + escape(document.referrer)).substr(0, 2e3 - r.length).replace(/%.?.?$/, "")
                        })
                    } catch (s) {}
                    
                    return !0
                }
            }, l = function() {
                var e = "/";

                "undefined" != typeof this.called_url && (e = this.called_url), n.href = e;

                var t = "unknown_ajax_blog_route";

                n.pathname.match(/^\/page/) && (t = "/page/:page"), n.pathname.match(/^\/api\/read\/json/) && (t = "/api/read/json");

                try {
                    var a = window.YAHOO;

                    if (a && a.rapid) {
                        var r = {
                            pd: t,
                            _li: 0,
                            i_rad: 0,
                            i_strm: 0
                        };

                        a.rapid.beaconEvent("tpv", r)
                    }
                } catch (i) {}

                return !0
            }, d = function() {
                var e = document.createElement("div");

                e.innerHTML = this.responseText;

                for (var t = e.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                    var a, r = t[n];

                    a = r.classList ? r.classList.contains("pppt") : new RegExp("(^| )pppt( |$)", "gi").test(r.className), a && new Function(r.text)()
                }
            }, u = function(e) {
                n.href = e;

                var a = n.pathname;

                return "/" !== a[0] && (a = "/" + a), a.match(/^\/page\/[0-9]+\/?$/) || a.match(/^\/api\/read\/json$/) ? t[a] ? !1 : (t[a] = 1, !0) : !1
            }, h = XMLHttpRequest.prototype.send;

        XMLHttpRequest.prototype.onCreate;

        XMLHttpRequest.prototype.send = function(e) {
            var t = this;
            u(this.called_url) && (this[a]("load", function() {
                return p.call(t)
            }, !0), this[a]("load", function() {
                return c.call(t)
            }, !1), this[a]("load", function() {
                return l.call(t)
            }, !1), this[a]("load", function() {
                return d.call(t)
            }, !0)), h.call(this, e)
        };

        var f = XMLHttpRequest.prototype.open;

        XMLHttpRequest.prototype.open = function(e, t, n) {
            this.called_url = t, f.call(this, e, t, n)
        }
    }
}(), function() {
    "#_=_" === window.location.hash && (window.history && window.history.replaceState ? history.replaceState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "")
}();