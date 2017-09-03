'use strict';

angular.module('app', ['ui.router', 'ngAnimate']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('code', {
        url: '/',
        templateUrl: '../views/code.html',
        controller: 'codeCtrl'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').controller('codeCtrl', function ($scope, mainService) {

    $scope.getSkills = function () {
        mainService.getSkills().then(function (skills) {
            $scope.skills = skills;
            $scope.learning = skills;
            console.log("skills", skills);

            $scope.skillMap = skills.map(function (skill) {
                return skill;
            });
        });
    };
    $scope.getSkills();

    mainService.getExperience().then(function (experience) {
        $scope.experience = experience;
        console.log("experience", experience);
    });

    mainService.getQuotes().then(function (quotes) {
        $scope.quotes = quotes;
        console.log("quotes", quotes);
    });

    mainService.getProjects().then(function (projects) {
        $scope.projects = projects;
        console.log("projects", projects);
    });

    //FILTER SKILLS

    $scope.skillFilter = function (category) {
        $scope.skills = $scope.skills.filter(function (skill) {
            return skill.skill_category === category;
        });
    };
    $scope.filterSkills = function (category) {

        $scope.skills = $scope.skillMap.map(function (skill) {
            return skill;
        });
        $scope.skillFilter(category);
    };

    //////////////////////////////////////////////////////////////////////////////
    //JQUERY THINGS
    //////////////////////////////////////////////////////////////////////////////

    //SCROLL REVEAL
    window.sr = ScrollReveal({
        origin: 'bottom',
        duration: 500,
        delay: 250,
        easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        scale: 0.9
    }, 50);
    sr.reveal('.section-text');
    sr.reveal('.section-content');
    sr.reveal('.projects-carousel');
    //END/////////////////


    $(document).ready(function () {
        //TRIGGER OVERLAY
        $('.trigger-overlay').on('click', function () {
            $('.overlay').addClass('open');
            $('.project-modal').addClass('open');
            $('.blur-bg').addClass('open');
            $(".overlay-huge").hasClass("open", function () {
                $("body").addClass("no-scroll");
            });
        });
        $('.overlay').on('click', function () {
            $(this).removeClass('open');
            $('.project-modal').removeClass('open');
            $('.blur-bg').removeClass('open');
        });

        //Intro Header Scroll Fade Effect
        var scrollPos = $(this).scrollTop();
        // console.log(scrollPos);

        var fadeStart = 100 // 100px scroll or less will equiv to 1 opacity

        ,
            fadeUntil = 499 // 200px scroll or more will equiv to 0 opacity

        ,
            fading = $('#intro-header');

        $(window).bind('scroll', function () {
            var offset = $(document).scrollTop(),
                opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css('opacity', opacity);
        });

        //Projects CAROUSEL
        $('.projects-carousel').flickity({
            // options
            cellAlign: 'left',
            pageDots: true,
            // groupCells: 3,
            adaptiveHeight: false,
            imagesLoaded: true,
            autoPlay: false,
            contain: true
        });
        $('.project-media-carousel').flickity({
            // options
            cellAlign: 'left',
            pageDots: true,
            // groupCells: 3,
            adaptiveHeight: true,
            imagesLoaded: false,
            autoPlay: true,
            contain: true
        });

        $('.project-card').hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });

        //Filtering
        $('.btn-filter-teal').on('click', function () {
            $(this).addClass('is-filtered');
            $(this).removeClass('btn-filter-teal');
            $(this).siblings().removeClass('is-filtered');
            $(this).siblings().addClass('btn-filter-teal');
        });
    });
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    // *****************************
    $scope.test = mainService.test;
    // *****************************

});
"use strict";

/*
 AngularJS v1.6.3
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (R, y) {
  'use strict';
  function Ea(a, b, c) {
    if (!a) throw Oa("areq", b || "?", c || "required");return a;
  }function Fa(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;W(a) && (a = a.join(" "));W(b) && (b = b.join(" "));return a + " " + b;
  }function Pa(a) {
    var b = {};a && (a.to || a.from) && (b.to = a.to, b.from = a.from);return b;
  }function X(a, b, c) {
    var d = "";a = W(a) ? a : a && F(a) && a.length ? a.split(/\s+/) : [];s(a, function (a, e) {
      a && 0 < a.length && (d += 0 < e ? " " : "", d += c ? b + a : a + b);
    });return d;
  }function Ga(a) {
    if (a instanceof E) switch (a.length) {case 0:
        return a;
      case 1:
        if (1 === a[0].nodeType) return a;break;default:
        return E(ua(a));}if (1 === a.nodeType) return E(a);
  }function ua(a) {
    if (!a[0]) return a;for (var b = 0; b < a.length; b++) {
      var c = a[b];if (1 === c.nodeType) return c;
    }
  }function Qa(a, b, c) {
    s(b, function (b) {
      a.addClass(b, c);
    });
  }function Ra(a, b, c) {
    s(b, function (b) {
      a.removeClass(b, c);
    });
  }function Y(a) {
    return function (b, c) {
      c.addClass && (Qa(a, b, c.addClass), c.addClass = null);c.removeClass && (Ra(a, b, c.removeClass), c.removeClass = null);
    };
  }function na(a) {
    a = a || {};if (!a.$$prepared) {
      var b = a.domOperation || P;a.domOperation = function () {
        a.$$domOperationFired = !0;b();b = P;
      };a.$$prepared = !0;
    }return a;
  }function ha(a, b) {
    Ha(a, b);Ia(a, b);
  }function Ha(a, b) {
    b.from && (a.css(b.from), b.from = null);
  }function Ia(a, b) {
    b.to && (a.css(b.to), b.to = null);
  }function U(a, b, c) {
    var d = b.options || {};c = c.options || {};var f = (d.addClass || "") + " " + (c.addClass || ""),
        e = (d.removeClass || "") + " " + (c.removeClass || "");a = Sa(a.attr("class"), f, e);c.preparationClasses && (d.preparationClasses = Z(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
    f = d.domOperation !== P ? d.domOperation : null;va(d, c);f && (d.domOperation = f);d.addClass = a.addClass ? a.addClass : null;d.removeClass = a.removeClass ? a.removeClass : null;b.addClass = d.addClass;b.removeClass = d.removeClass;return d;
  }function Sa(a, b, c) {
    function d(a) {
      F(a) && (a = a.split(" "));var b = {};s(a, function (a) {
        a.length && (b[a] = !0);
      });return b;
    }var f = {};a = d(a);b = d(b);s(b, function (a, b) {
      f[b] = 1;
    });c = d(c);s(c, function (a, b) {
      f[b] = 1 === f[b] ? null : -1;
    });var e = { addClass: "", removeClass: "" };s(f, function (b, c) {
      var d, f;1 === b ? (d = "addClass", f = !a[c] || a[c + "-remove"]) : -1 === b && (d = "removeClass", f = a[c] || a[c + "-add"]);f && (e[d].length && (e[d] += " "), e[d] += c);
    });return e;
  }function Q(a) {
    return a instanceof E ? a[0] : a;
  }function Ta(a, b, c) {
    var d = "";b && (d = X(b, "ng-", !0));c.addClass && (d = Z(d, X(c.addClass, "-add")));c.removeClass && (d = Z(d, X(c.removeClass, "-remove")));d.length && (c.preparationClasses = d, a.addClass(d));
  }function oa(a, b) {
    var c = b ? "-" + b + "s" : "";ka(a, [la, c]);return [la, c];
  }function wa(a, b) {
    var c = b ? "paused" : "",
        d = $ + "PlayState";ka(a, [d, c]);return [d, c];
  }function ka(a, b) {
    a.style[b[0]] = b[1];
  }function Z(a, b) {
    return a ? b ? a + " " + b : a : b;
  }function Ja(a, b, c) {
    var d = Object.create(null),
        f = a.getComputedStyle(b) || {};s(c, function (a, b) {
      var c = f[a];if (c) {
        var G = c.charAt(0);if ("-" === G || "+" === G || 0 <= G) c = Ua(c);0 === c && (c = null);d[b] = c;
      }
    });return d;
  }function Ua(a) {
    var b = 0;a = a.split(/\s*,\s*/);s(a, function (a) {
      "s" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));a = parseFloat(a) || 0;b = b ? Math.max(a, b) : a;
    });return b;
  }function xa(a) {
    return 0 === a || null != a;
  }function Ka(a, b) {
    var c = S,
        d = a + "s";b ? c += "Duration" : d += " linear all";return [c, d];
  }function La() {
    var a = Object.create(null);return { flush: function flush() {
        a = Object.create(null);
      }, count: function count(b) {
        return (b = a[b]) ? b.total : 0;
      }, get: function get(b) {
        return (b = a[b]) && b.value;
      }, put: function put(b, c) {
        a[b] ? a[b].total++ : a[b] = { total: 1, value: c };
      } };
  }function Ma(a, b, c) {
    s(c, function (c) {
      a[c] = ya(a[c]) ? a[c] : b.style.getPropertyValue(c);
    });
  }var S, za, $, Aa;void 0 === R.ontransitionend && void 0 !== R.onwebkittransitionend ? (S = "WebkitTransition", za = "webkitTransitionEnd transitionend") : (S = "transition", za = "transitionend");void 0 === R.onanimationend && void 0 !== R.onwebkitanimationend ? ($ = "WebkitAnimation", Aa = "webkitAnimationEnd animationend") : ($ = "animation", Aa = "animationend");var pa = $ + "Delay",
      Ba = $ + "Duration",
      la = S + "Delay",
      Na = S + "Duration",
      Oa = y.$$minErr("ng"),
      Va = { transitionDuration: Na, transitionDelay: la, transitionProperty: S + "Property", animationDuration: Ba, animationDelay: pa, animationIterationCount: $ + "IterationCount" },
      Wa = { transitionDuration: Na, transitionDelay: la, animationDuration: Ba, animationDelay: pa },
      Ca,
      va,
      s,
      W,
      ya,
      da,
      Da,
      aa,
      F,
      N,
      E,
      P;y.module("ngAnimate", [], function () {
    P = y.noop;Ca = y.copy;va = y.extend;E = y.element;s = y.forEach;W = y.isArray;F = y.isString;aa = y.isObject;N = y.isUndefined;ya = y.isDefined;Da = y.isFunction;da = y.isElement;
  }).info({ angularVersion: "1.6.3" }).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
    return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function link(b, d, f, e, p) {
        var K, G;b.$watchCollection(f.ngAnimateSwap || f["for"], function (f) {
          K && a.leave(K);G && (G.$destroy(), G = null);if (f || 0 === f) G = b.$new(), p(G, function (b) {
            K = b;a.enter(b, null, d);
          });
        });
      } };
  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
    return { link: function link(b, c, d) {
        function f(a) {
          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
        }var e = d.ngAnimateChildren;F(e) && 0 === e.length ? c.data("$$ngAnimateChildren", !0) : (f(a(e)(b)), d.$observe("ngAnimateChildren", f));
      } };
  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
    function b(a) {
      d = d.concat(a);c();
    }function c() {
      if (d.length) {
        for (var b = d.shift(), p = 0; p < b.length; p++) {
          b[p]();
        }f || a(function () {
          f || c();
        });
      }
    }var d, f;d = b.queue = [];b.waitUntilQuiet = function (b) {
      f && f();f = a(function () {
        f = null;b();c();
      });
    };return b;
  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
    function b(a) {
      if (!a) return null;a = a.split(" ");var b = Object.create(null);s(a, function (a) {
        b[a] = !0;
      });return b;
    }function c(a, c) {
      if (a && c) {
        var d = b(c);return a.split(" ").some(function (a) {
          return d[a];
        });
      }
    }function d(a, b, c) {
      return e[a].some(function (a) {
        return a(b, c);
      });
    }function f(a, b) {
      var c = 0 < (a.addClass || "").length,
          d = 0 < (a.removeClass || "").length;return b ? c && d : c || d;
    }var e = this.rules = { skip: [], cancel: [], join: [] };e.join.push(function (a, b) {
      return !a.structural && f(a);
    });e.skip.push(function (a, b) {
      return !a.structural && !f(a);
    });e.skip.push(function (a, b) {
      return "leave" === b.event && a.structural;
    });e.skip.push(function (a, b) {
      return b.structural && 2 === b.state && !a.structural;
    });e.cancel.push(function (a, b) {
      return b.structural && a.structural;
    });e.cancel.push(function (a, b) {
      return 2 === b.state && a.structural;
    });e.cancel.push(function (a, b) {
      if (b.structural) return !1;
      var d = a.addClass,
          f = a.removeClass,
          e = b.addClass,
          qa = b.removeClass;return N(d) && N(f) || N(e) && N(qa) ? !1 : c(d, qa) || c(f, e);
    });this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$Map", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function (b, c, e, n, z, qa, J, u, H, k, O) {
      function L() {
        var a = !1;return function (b) {
          a ? b() : c.$$postDigest(function () {
            a = !0;b();
          });
        };
      }function A(a, b, c) {
        var g = [],
            d = h[c];d && s(d, function (d) {
          w.call(d.node, b) ? g.push(d.callback) : "leave" === c && w.call(d.node, a) && g.push(d.callback);
        });return g;
      }function B(a, b, c) {
        var g = ua(b);return a.filter(function (a) {
          return !(a.node === g && (!c || a.callback === c));
        });
      }function q(a, h, v) {
        function q(a, c, g, d) {
          G(function () {
            var a = A(ta, k, c);a.length ? b(function () {
              s(a, function (a) {
                a(e, g, d);
              });"close" !== g || k.parentNode || ra.off(k);
            }) : "close" !== g || k.parentNode || ra.off(k);
          });a.progress(c, g, d);
        }function B(a) {
          var b = e,
              c = m;c.preparationClasses && (b.removeClass(c.preparationClasses), c.preparationClasses = null);c.activeClasses && (b.removeClass(c.activeClasses), c.activeClasses = null);D(e, m);ha(e, m);m.domOperation();t.complete(!a);
        }var m = Ca(v),
            e = Ga(a),
            k = Q(e),
            ta = k && k.parentNode,
            m = na(m),
            t = new J(),
            G = L();W(m.addClass) && (m.addClass = m.addClass.join(" "));m.addClass && !F(m.addClass) && (m.addClass = null);W(m.removeClass) && (m.removeClass = m.removeClass.join(" "));m.removeClass && !F(m.removeClass) && (m.removeClass = null);m.from && !aa(m.from) && (m.from = null);m.to && !aa(m.to) && (m.to = null);if (!k) return B(), t;v = [k.getAttribute("class"), m.addClass, m.removeClass].join(" ");if (!Xa(v)) return B(), t;var n = 0 <= ["enter", "move", "leave"].indexOf(h),
            w = O(),
            u = !g || w || ga.get(k);v = !u && x.get(k) || {};var H = !!v.state;u || H && 1 === v.state || (u = !M(k, ta, h));if (u) return w && q(t, h, "start"), B(), w && q(t, h, "close"), t;n && sa(k);w = { structural: n, element: e, event: h, addClass: m.addClass, removeClass: m.removeClass, close: B, options: m, runner: t };if (H) {
          if (d("skip", w, v)) {
            if (2 === v.state) return B(), t;U(e, v, w);return v.runner;
          }if (d("cancel", w, v)) {
            if (2 === v.state) v.runner.end();else if (v.structural) v.close();else return U(e, v, w), v.runner;
          } else if (d("join", w, v)) if (2 === v.state) U(e, w, {});else return Ta(e, n ? h : null, m), h = w.event = v.event, m = U(e, v, w), v.runner;
        } else U(e, w, {});(H = w.structural) || (H = "animate" === w.event && 0 < Object.keys(w.options.to || {}).length || f(w));if (!H) return B(), l(k), t;var z = (v.counter || 0) + 1;w.counter = z;I(k, 1, w);c.$$postDigest(function () {
          e = Ga(a);var b = x.get(k),
              c = !b,
              b = b || {},
              g = 0 < (e.parent() || []).length && ("animate" === b.event || b.structural || f(b));if (c || b.counter !== z || !g) {
            c && (D(e, m), ha(e, m));if (c || n && b.event !== h) m.domOperation(), t.end();g || l(k);
          } else h = !b.structural && f(b, !0) ? "setClass" : b.event, I(k, 2), b = qa(e, h, b.options), t.setHost(b), q(t, h, "start", {}), b.done(function (a) {
            B(!a);(a = x.get(k)) && a.counter === z && l(k);q(t, h, "close", {});
          });
        });return t;
      }function sa(a) {
        a = a.querySelectorAll("[data-ng-animate]");s(a, function (a) {
          var b = parseInt(a.getAttribute("data-ng-animate"), 10),
              c = x.get(a);if (c) switch (b) {case 2:
              c.runner.end();case 1:
              x.delete(a);}
        });
      }function l(a) {
        a.removeAttribute("data-ng-animate");x.delete(a);
      }function M(a, b, c) {
        c = n[0].body;var g = Q(e),
            d = a === c || "HTML" === a.nodeName,
            h = a === g,
            f = !1,
            k = ga.get(a),
            A;for ((a = E.data(a, "$ngAnimatePin")) && (b = Q(a)); b;) {
          h || (h = b === g);if (1 !== b.nodeType) break;a = x.get(b) || {};if (!f) {
            var q = ga.get(b);if (!0 === q && !1 !== k) {
              k = !0;break;
            } else !1 === q && (k = !1);f = a.structural;
          }if (N(A) || !0 === A) a = E.data(b, "$$ngAnimateChildren"), ya(a) && (A = a);if (f && !1 === A) break;d || (d = b === c);if (d && h) break;if (!h && (a = E.data(b, "$ngAnimatePin"))) {
            b = Q(a);continue;
          }b = b.parentNode;
        }return (!f || A) && !0 !== k && h && d;
      }function I(a, b, c) {
        c = c || {};c.state = b;a.setAttribute("data-ng-animate", b);
        c = (b = x.get(a)) ? va(b, c) : c;x.set(a, c);
      }var x = new z(),
          ga = new z(),
          g = null,
          ta = c.$watch(function () {
        return 0 === u.totalPendingRequests;
      }, function (a) {
        a && (ta(), c.$$postDigest(function () {
          c.$$postDigest(function () {
            null === g && (g = !0);
          });
        }));
      }),
          h = Object.create(null),
          t = a.classNameFilter(),
          Xa = t ? function (a) {
        return t.test(a);
      } : function () {
        return !0;
      },
          D = Y(H),
          w = R.Node.prototype.contains || function (a) {
        return this === a || !!(this.compareDocumentPosition(a) & 16);
      },
          ra = { on: function on(a, b, c) {
          var g = ua(b);h[a] = h[a] || [];h[a].push({ node: g, callback: c });
          E(b).on("$destroy", function () {
            x.get(g) || ra.off(a, b, c);
          });
        }, off: function off(a, b, c) {
          if (1 !== arguments.length || F(arguments[0])) {
            var g = h[a];g && (h[a] = 1 === arguments.length ? null : B(g, b, c));
          } else for (g in b = arguments[0], h) {
            h[g] = B(h[g], b);
          }
        }, pin: function pin(a, b) {
          Ea(da(a), "element", "not an element");Ea(da(b), "parentElement", "not an element");a.data("$ngAnimatePin", b);
        }, push: function push(a, b, c, g) {
          c = c || {};c.domOperation = g;return q(a, b, c);
        }, enabled: function enabled(a, b) {
          var c = arguments.length;if (0 === c) b = !!g;else if (da(a)) {
            var d = Q(a);1 === c ? b = !ga.get(d) : ga.set(d, !b);
          } else b = g = !!a;return b;
        } };return ra;
    }];
  }]).provider("$$animation", ["$animateProvider", function (a) {
    var b = this.drivers = [];this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$Map", "$$rAFScheduler", function (a, d, f, e, p, K) {
      function G(a) {
        function b(a) {
          if (a.processed) return a;a.processed = !0;var d = a.domNode,
              e = d.parentNode;f.set(d, a);for (var q; e;) {
            if (q = f.get(e)) {
              q.processed || (q = b(q));break;
            }e = e.parentNode;
          }(q || c).children.push(a);return a;
        }var c = { children: [] },
            d,
            f = new p();for (d = 0; d < a.length; d++) {
          var e = a[d];f.set(e.domNode, a[d] = { domNode: e.domNode, fn: e.fn, children: [] });
        }for (d = 0; d < a.length; d++) {
          b(a[d]);
        }return function (a) {
          var b = [],
              c = [],
              d;for (d = 0; d < a.children.length; d++) {
            c.push(a.children[d]);
          }a = c.length;var f = 0,
              e = [];for (d = 0; d < c.length; d++) {
            var k = c[d];0 >= a && (a = f, f = 0, b.push(e), e = []);e.push(k.fn);k.children.forEach(function (a) {
              f++;c.push(a);
            });a--;
          }e.length && b.push(e);return b;
        }(c);
      }var n = [],
          z = Y(a);return function (p, J, u) {
        function H(a) {
          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
          var b = [];s(a, function (a) {
            var c = a.getAttribute("ng-animate-ref");c && c.length && b.push(a);
          });return b;
        }function k(a) {
          var b = [],
              c = {};s(a, function (a, d) {
            var h = Q(a.element),
                f = 0 <= ["enter", "move"].indexOf(a.event),
                h = a.structural ? H(h) : [];if (h.length) {
              var e = f ? "to" : "from";s(h, function (a) {
                var b = a.getAttribute("ng-animate-ref");c[b] = c[b] || {};c[b][e] = { animationID: d, element: E(a) };
              });
            } else b.push(a);
          });var d = {},
              f = {};s(c, function (c, e) {
            var k = c.from,
                A = c.to;if (k && A) {
              var q = a[k.animationID],
                  x = a[A.animationID],
                  l = k.animationID.toString();
              if (!f[l]) {
                var B = f[l] = { structural: !0, beforeStart: function beforeStart() {
                    q.beforeStart();x.beforeStart();
                  }, close: function close() {
                    q.close();x.close();
                  }, classes: O(q.classes, x.classes), from: q, to: x, anchors: [] };B.classes.length ? b.push(B) : (b.push(q), b.push(x));
              }f[l].anchors.push({ out: k.element, "in": A.element });
            } else k = k ? k.animationID : A.animationID, A = k.toString(), d[A] || (d[A] = !0, b.push(a[k]));
          });return b;
        }function O(a, b) {
          a = a.split(" ");b = b.split(" ");for (var c = [], d = 0; d < a.length; d++) {
            var f = a[d];if ("ng-" !== f.substring(0, 3)) for (var e = 0; e < b.length; e++) {
              if (f === b[e]) {
                c.push(f);break;
              }
            }
          }return c.join(" ");
        }function L(a) {
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = f.get(b[c])(a);if (d) return d;
          }
        }function A(a, b) {
          function c(a) {
            (a = a.data("$$animationRunner")) && a.setHost(b);
          }a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element);
        }function B() {
          var a = p.data("$$animationRunner");!a || "leave" === J && u.$$domOperationFired || a.end();
        }function q(b) {
          p.off("$destroy", B);p.removeData("$$animationRunner");z(p, u);ha(p, u);u.domOperation();I && a.removeClass(p, I);
          p.removeClass("ng-animate");l.complete(!b);
        }u = na(u);var sa = 0 <= ["enter", "move", "leave"].indexOf(J),
            l = new e({ end: function end() {
            q();
          }, cancel: function cancel() {
            q(!0);
          } });if (!b.length) return q(), l;p.data("$$animationRunner", l);var M = Fa(p.attr("class"), Fa(u.addClass, u.removeClass)),
            I = u.tempClasses;I && (M += " " + I, u.tempClasses = null);var x;sa && (x = "ng-" + J + "-prepare", a.addClass(p, x));n.push({ element: p, classes: M, event: J, structural: sa, options: u, beforeStart: function beforeStart() {
            p.addClass("ng-animate");I && a.addClass(p, I);x && (a.removeClass(p, x), x = null);
          }, close: q });p.on("$destroy", B);if (1 < n.length) return l;d.$$postDigest(function () {
          var a = [];s(n, function (b) {
            b.element.data("$$animationRunner") ? a.push(b) : b.close();
          });n.length = 0;var b = k(a),
              c = [];s(b, function (a) {
            c.push({ domNode: Q(a.from ? a.from.element : a.element), fn: function fn() {
                a.beforeStart();var b,
                    c = a.close;if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                  var d = L(a);d && (b = d.start);
                }b ? (b = b(), b.done(function (a) {
                  c(!a);
                }), A(a, b)) : c();
              } });
          });K(G(c));
        });return l;
      };
    }];
  }]).provider("$animateCss", ["$animateProvider", function (a) {
    var b = La(),
        c = La();this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, f, e, p, K, G, n, z) {
      function y(a, b) {
        var c = a.parentNode;return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++O)) + "-" + a.getAttribute("class") + "-" + b;
      }function J(e, k, q, p) {
        var l;0 < b.count(q) && (l = c.get(q), l || (k = X(k, "-stagger"), f.addClass(e, k), l = Ja(a, e, p), l.animationDuration = Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), f.removeClass(e, k), c.put(q, l)));return l || {};
      }function u(a) {
        L.push(a);n.waitUntilQuiet(function () {
          b.flush();c.flush();for (var a = K(), d = 0; d < L.length; d++) {
            L[d](a);
          }L.length = 0;
        });
      }function H(c, f, e) {
        f = b.get(e);f || (f = Ja(a, c, Va), "infinite" === f.animationIterationCount && (f.animationIterationCount = 1));b.put(e, f);c = f;e = c.animationDelay;f = c.transitionDelay;c.maxDelay = e && f ? Math.max(e, f) : e || f;c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
        return c;
      }var k = Y(f),
          O = 0,
          L = [];return function (a, c) {
        function d() {
          l();
        }function n() {
          l(!0);
        }function l(b) {
          if (!(w || E && O)) {
            w = !0;O = !1;g.$$skipPreparationClasses || f.removeClass(a, fa);f.removeClass(a, da);wa(h, !1);oa(h, !1);s(t, function (a) {
              h.style[a[0]] = "";
            });k(a, g);ha(a, g);Object.keys(L).length && s(L, function (a, b) {
              a ? h.style.setProperty(b, a) : h.style.removeProperty(b);
            });if (g.onDone) g.onDone();ea && ea.length && a.off(ea.join(" "), x);var c = a.data("$$animateCss");c && (p.cancel(c[0].timer), a.removeData("$$animateCss"));
            F && F.complete(!b);
          }
        }function M(a) {
          r.blockTransition && oa(h, a);r.blockKeyframeAnimation && wa(h, !!a);
        }function I() {
          F = new e({ end: d, cancel: n });u(P);l();return { $$willAnimate: !1, start: function start() {
              return F;
            }, end: d };
        }function x(a) {
          a.stopPropagation();var b = a.originalEvent || a;a = b.$manualTimeStamp || Date.now();b = parseFloat(b.elapsedTime.toFixed(3));Math.max(a - Y, 0) >= R && b >= m && (E = !0, l());
        }function ga() {
          function b() {
            if (!w) {
              M(!1);s(t, function (a) {
                h.style[a[0]] = a[1];
              });k(a, g);f.addClass(a, da);if (r.recalculateTimingStyles) {
                ma = h.getAttribute("class") + " " + fa;ja = y(h, ma);C = H(h, ma, ja);ba = C.maxDelay;N = Math.max(ba, 0);m = C.maxDuration;if (0 === m) {
                  l();return;
                }r.hasTransitions = 0 < C.transitionDuration;r.hasAnimations = 0 < C.animationDuration;
              }r.applyAnimationDelay && (ba = "boolean" !== typeof g.delay && xa(g.delay) ? parseFloat(g.delay) : ba, N = Math.max(ba, 0), C.animationDelay = ba, ca = [pa, ba + "s"], t.push(ca), h.style[ca[0]] = ca[1]);R = 1E3 * N;U = 1E3 * m;if (g.easing) {
                var d,
                    e = g.easing;r.hasTransitions && (d = S + "TimingFunction", t.push([d, e]), h.style[d] = e);r.hasAnimations && (d = $ + "TimingFunction", t.push([d, e]), h.style[d] = e);
              }C.transitionDuration && ea.push(za);C.animationDuration && ea.push(Aa);Y = Date.now();var n = R + 1.5 * U;d = Y + n;var e = a.data("$$animateCss") || [],
                  q = !0;if (e.length) {
                var I = e[0];(q = d > I.expectedEndTime) ? p.cancel(I.timer) : e.push(l);
              }q && (n = p(c, n, !1), e[0] = { timer: n, expectedEndTime: d }, e.push(l), a.data("$$animateCss", e));if (ea.length) a.on(ea.join(" "), x);g.to && (g.cleanupStyles && Ma(L, h, Object.keys(g.to)), Ia(a, g));
            }
          }function c() {
            var b = a.data("$$animateCss");if (b) {
              for (var d = 1; d < b.length; d++) {
                b[d]();
              }a.removeData("$$animateCss");
            }
          }if (!w) if (h.parentNode) {
            var d = function d(a) {
              if (E) O && a && (O = !1, l());else if (O = !a, C.animationDuration) if (a = wa(h, O), O) t.push(a);else {
                var b = t,
                    c = b.indexOf(a);0 <= a && b.splice(c, 1);
              }
            },
                e = 0 < aa && (C.transitionDuration && 0 === V.transitionDuration || C.animationDuration && 0 === V.animationDuration) && Math.max(V.animationDelay, V.transitionDelay);e ? p(b, Math.floor(e * aa * 1E3), !1) : b();v.resume = function () {
              d(!0);
            };v.pause = function () {
              d(!1);
            };
          } else l();
        }var g = c || {};g.$$prepared || (g = na(Ca(g)));
        var L = {},
            h = Q(a);if (!h || !h.parentNode || !z.enabled()) return I();var t = [],
            K = a.attr("class"),
            D = Pa(g),
            w,
            O,
            E,
            F,
            v,
            N,
            R,
            m,
            U,
            Y,
            ea = [];if (0 === g.duration || !G.animations && !G.transitions) return I();var ia = g.event && W(g.event) ? g.event.join(" ") : g.event,
            Z = "",
            T = "";ia && g.structural ? Z = X(ia, "ng-", !0) : ia && (Z = ia);g.addClass && (T += X(g.addClass, "-add"));g.removeClass && (T.length && (T += " "), T += X(g.removeClass, "-remove"));g.applyClassesEarly && T.length && k(a, g);var fa = [Z, T].join(" ").trim(),
            ma = K + " " + fa,
            da = X(fa, "-active"),
            K = D.to && 0 < Object.keys(D.to).length;if (!(0 < (g.keyframeStyle || "").length || K || fa)) return I();var ja, V;0 < g.stagger ? (D = parseFloat(g.stagger), V = { transitionDelay: D, animationDelay: D, transitionDuration: 0, animationDuration: 0 }) : (ja = y(h, ma), V = J(h, fa, ja, Wa));g.$$skipPreparationClasses || f.addClass(a, fa);g.transitionStyle && (D = [S, g.transitionStyle], ka(h, D), t.push(D));0 <= g.duration && (D = 0 < h.style[S].length, D = Ka(g.duration, D), ka(h, D), t.push(D));g.keyframeStyle && (D = [$, g.keyframeStyle], ka(h, D), t.push(D));var aa = V ? 0 <= g.staggerIndex ? g.staggerIndex : b.count(ja) : 0;(ia = 0 === aa) && !g.skipBlocking && oa(h, 9999);var C = H(h, ma, ja),
            ba = C.maxDelay;N = Math.max(ba, 0);m = C.maxDuration;var r = {};r.hasTransitions = 0 < C.transitionDuration;r.hasAnimations = 0 < C.animationDuration;r.hasTransitionAll = r.hasTransitions && "all" === C.transitionProperty;r.applyTransitionDuration = K && (r.hasTransitions && !r.hasTransitionAll || r.hasAnimations && !r.hasTransitions);r.applyAnimationDuration = g.duration && r.hasAnimations;r.applyTransitionDelay = xa(g.delay) && (r.applyTransitionDuration || r.hasTransitions);r.applyAnimationDelay = xa(g.delay) && r.hasAnimations;r.recalculateTimingStyles = 0 < T.length;if (r.applyTransitionDuration || r.applyAnimationDuration) m = g.duration ? parseFloat(g.duration) : m, r.applyTransitionDuration && (r.hasTransitions = !0, C.transitionDuration = m, D = 0 < h.style[S + "Property"].length, t.push(Ka(m, D))), r.applyAnimationDuration && (r.hasAnimations = !0, C.animationDuration = m, t.push([Ba, m + "s"]));if (0 === m && !r.recalculateTimingStyles) return I();if (null != g.delay) {
          var ca;"boolean" !== typeof g.delay && (ca = parseFloat(g.delay), N = Math.max(ca, 0));r.applyTransitionDelay && t.push([la, ca + "s"]);r.applyAnimationDelay && t.push([pa, ca + "s"]);
        }null == g.duration && 0 < C.transitionDuration && (r.recalculateTimingStyles = r.recalculateTimingStyles || ia);R = 1E3 * N;U = 1E3 * m;g.skipBlocking || (r.blockTransition = 0 < C.transitionDuration, r.blockKeyframeAnimation = 0 < C.animationDuration && 0 < V.animationDelay && 0 === V.animationDuration);g.from && (g.cleanupStyles && Ma(L, h, Object.keys(g.from)), Ha(a, g));r.blockTransition || r.blockKeyframeAnimation ? M(m) : g.skipBlocking || oa(h, !1);return { $$willAnimate: !0, end: d, start: function start() {
            if (!w) return v = { end: d, cancel: n, resume: null, pause: null }, F = new e(v), u(ga), F;
          } };
      };
    }];
  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateCssDriver");this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, f, e, p, K) {
      function G(a) {
        return a.replace(/\bng-\S+\b/g, "");
      }function n(a, b) {
        F(a) && (a = a.split(" "));F(b) && (b = b.split(" "));
        return a.filter(function (a) {
          return -1 === b.indexOf(a);
        }).join(" ");
      }function z(c, e, f) {
        function p(a) {
          var b = {},
              c = Q(a).getBoundingClientRect();s(["width", "height", "top", "left"], function (a) {
            var d = c[a];switch (a) {case "top":
                d += u.scrollTop;break;case "left":
                d += u.scrollLeft;}b[a] = Math.floor(d) + "px";
          });return b;
        }function K() {
          var c = G(f.attr("class") || ""),
              d = n(c, l),
              c = n(l, c),
              d = a(z, { to: p(f), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 });return d.$$willAnimate ? d : null;
        }function q() {
          z.remove();e.removeClass("ng-animate-shim");
          f.removeClass("ng-animate-shim");
        }var z = E(Q(e).cloneNode(!0)),
            l = G(z.attr("class") || "");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");z.addClass("ng-anchor");H.append(z);var M;c = function () {
          var c = a(z, { addClass: "ng-anchor-out", delay: !0, from: p(e) });return c.$$willAnimate ? c : null;
        }();if (!c && (M = K(), !M)) return q();var I = c || M;return { start: function start() {
            function a() {
              c && c.end();
            }var b,
                c = I.start();c.done(function () {
              c = null;if (!M && (M = K())) return c = M.start(), c.done(function () {
                c = null;q();b.complete();
              }), c;
              q();b.complete();
            });return b = new d({ end: a, cancel: a });
          } };
      }function y(a, b, c, e) {
        var f = J(a, P),
            p = J(b, P),
            n = [];s(e, function (a) {
          (a = z(c, a.out, a["in"])) && n.push(a);
        });if (f || p || 0 !== n.length) return { start: function start() {
            function a() {
              s(b, function (a) {
                a.end();
              });
            }var b = [];f && b.push(f.start());p && b.push(p.start());s(n, function (a) {
              b.push(a.start());
            });var c = new d({ end: a, cancel: a });d.all(b, function (a) {
              c.complete(a);
            });return c;
          } };
      }function J(c) {
        var d = c.element,
            e = c.options || {};c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));e.preparationClasses && (e.event = Z(e.event, e.preparationClasses));c = a(d, e);return c.$$willAnimate ? c : null;
      }if (!e.animations && !e.transitions) return P;var u = K[0].body;c = Q(f);var H = E(c.parentNode && 11 === c.parentNode.nodeType || u.contains(c) ? c : u);return function (a) {
        return a.from && a.to ? y(a.from, a.to, a.classes, a.anchors) : J(a);
      };
    }];
  }]).provider("$$animateJs", ["$animateProvider", function (a) {
    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
      function f(c) {
        c = W(c) ? c : c.split(" ");for (var d = [], e = {}, f = 0; f < c.length; f++) {
          var s = c[f],
              y = a.$$registeredAnimations[s];y && !e[s] && (d.push(b.get(y)), e[s] = !0);
        }return d;
      }var e = Y(d);return function (a, b, d, n) {
        function z() {
          n.domOperation();e(a, n);
        }function y(a, b, d, e, f) {
          switch (d) {case "animate":
              b = [b, e.from, e.to, f];break;case "setClass":
              b = [b, k, F, f];break;case "addClass":
              b = [b, k, f];break;case "removeClass":
              b = [b, F, f];break;default:
              b = [b, f];}b.push(e);if (a = a.apply(a, b)) if (Da(a.start) && (a = a.start()), a instanceof c) a.done(f);else if (Da(a)) return a;
          return P;
        }function J(a, b, d, e, f) {
          var k = [];s(e, function (e) {
            var l = e[f];l && k.push(function () {
              var e,
                  f,
                  g = !1,
                  h = function h(a) {
                g || (g = !0, (f || P)(a), e.complete(!a));
              };e = new c({ end: function end() {
                  h();
                }, cancel: function cancel() {
                  h(!0);
                } });f = y(l, a, b, d, function (a) {
                h(!1 === a);
              });return e;
            });
          });return k;
        }function u(a, b, d, e, f) {
          var k = J(a, b, d, e, f);if (0 === k.length) {
            var h, l;"beforeSetClass" === f ? (h = J(a, "removeClass", d, e, "beforeRemoveClass"), l = J(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = J(a, "removeClass", d, e, "removeClass"), l = J(a, "addClass", d, e, "addClass"));h && (k = k.concat(h));l && (k = k.concat(l));
          }if (0 !== k.length) return function (a) {
            var b = [];k.length && s(k, function (a) {
              b.push(a());
            });b.length ? c.all(b, a) : a();return function (a) {
              s(b, function (b) {
                a ? b.cancel() : b.end();
              });
            };
          };
        }var H = !1;3 === arguments.length && aa(d) && (n = d, d = null);n = na(n);d || (d = a.attr("class") || "", n.addClass && (d += " " + n.addClass), n.removeClass && (d += " " + n.removeClass));var k = n.addClass,
            F = n.removeClass,
            L = f(d),
            A,
            B;if (L.length) {
          var q, E;"leave" === b ? (E = "leave", q = "afterLeave") : (E = "before" + b.charAt(0).toUpperCase() + b.substr(1), q = b);"enter" !== b && "move" !== b && (A = u(a, b, n, L, E));B = u(a, b, n, L, q);
        }if (A || B) {
          var l;return { $$willAnimate: !0, end: function end() {
              l ? l.end() : (H = !0, z(), ha(a, n), l = new c(), l.complete(!0));return l;
            }, start: function start() {
              function b(c) {
                H = !0;z();ha(a, n);l.complete(c);
              }if (l) return l;l = new c();var d,
                  e = [];A && e.push(function (a) {
                d = A(a);
              });e.length ? e.push(function (a) {
                z();a(!0);
              }) : z();B && e.push(function (a) {
                d = B(a);
              });l.setHost({ end: function end() {
                  H || ((d || P)(void 0), b(void 0));
                }, cancel: function cancel() {
                  H || ((d || P)(!0), b(!0));
                } });c.chain(e, b);return l;
            } };
        }
      };
    }];
  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateJsDriver");this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
      function d(c) {
        return a(c.element, c.event, c.classes, c.options);
      }return function (a) {
        if (a.from && a.to) {
          var b = d(a.from),
              p = d(a.to);if (b || p) return { start: function start() {
              function a() {
                return function () {
                  s(d, function (a) {
                    a.end();
                  });
                };
              }var d = [];b && d.push(b.start());p && d.push(p.start());c.all(d, function (a) {
                f.complete(a);
              });var f = new c({ end: a(), cancel: a() });
              return f;
            } };
        } else return d(a);
      };
    }];
  }]);
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map
'use strict';

angular.module('app').service('mainService', function ($http) {
    // *****************************
    this.test = "Controller & Service are working";
    // *****************************
    this.getSkills = function () {
        return $http({
            method: 'GET',
            url: "../JSON/skills.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
    this.getExperience = function () {
        return $http({
            method: 'GET',
            url: "../JSON/experience.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
    this.getQuotes = function () {
        return $http({
            method: 'GET',
            url: "../JSON/quotes.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
    this.getProjects = function () {
        return $http({
            method: 'GET',
            url: "../JSON/projects.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
});
'use strict';

angular.module('app').directive('navDir', function () {
    return {
        restrict: 'AE',
        templateUrl: './views/directives/navDir.html',
        link: function link(scope, elem, attrs) {

            //Smooth Scrolling
            var scrollLink = $('.nav-links, .scroll-js');
            // var scrollLink = $('.nav-links');
            scrollLink.click(function (event) {
                event.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top - 100
                }, 500);
            });

            //Sticky Nav
            var targetPos = $('.nav').offset().top;
            // console.log(targetPos);

            $(window).resize(function () {
                targetPos = $('.nav').offset().top;
            });

            $(window).scroll(function () {
                var scrollPos = $(this).scrollTop();
                // console.log(scrollPos);

                if (scrollPos > 879) {
                    // $('.nav').removeClass('is-absolute');
                    $('.nav').addClass('is-fixed');
                } else {
                    $('.nav').removeClass('is-fixed');
                    // $('.nav').addClass('is-absolute');
                }

                scrollLink.each(function () {
                    var sectionOffset = $(this.hash).offset().top - 250;

                    if (sectionOffset <= scrollPos) {
                        if ($(this).hasClass('scroll-js')) {
                            $(this).css('background', 'transparent');
                        } else {
                            $(this).addClass('is-active');
                            $(this).siblings().removeClass('is-active');
                        }
                    }
                });
            });
        }
    };
});
//# sourceMappingURL=bundle.js.map
