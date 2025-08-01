var t, e;
!(function () {
  var n,
    o = [],
    a = !1;
  function r() {
    (a = !0), document.removeEventListener("DOMContentLoaded", r), o.forEach((t) => t.call(document)), (o = []);
  }
  const s = (t = 2) => `https://events.vercount.one/api/v${t}/log`;
  (t = {
    fetch: async function (t) {
      const o = s(2),
        a = s(1);
      try {
        e.hideAll();
        const r = (() => {
            const t = `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`,
              e = Intl.DateTimeFormat().resolvedOptions().timeZone || "",
              n = navigator.languages ? navigator.languages.join(",") : navigator.language || "",
              o = document.createElement("canvas").getContext("webgl"),
              a = o ? o.getParameter(o.RENDERER) : "",
              r = [t, e, n, navigator.userAgent, a, new Date().getTimezoneOffset()].join("|");
            let s = 0;
            for (let t = 0; t < r.length; t++) (s = (s << 5) - s + r.charCodeAt(t)), (s &= s);
            return Math.abs(s).toString(36);
          })(),
          s = window.location.href;
        let i = s;
        s.startsWith("http") ||
          (console.warn("Invalid URL protocol detected. Only HTTP and HTTPS are supported."), (i = "https://local.file/invalid-protocol"));
        try {
          const a = await fetch(o, {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Browser-Token": r },
            body: JSON.stringify({ url: i, token: r }),
          });
          if (!a.ok) throw new Error(`API responded with status: ${a.status}`);
          const s = ((t) => {
            if (t && t.status) {
              if ("success" === t.status && t.data) return t.data;
              if ("error" === t.status && t.data) return console.warn(`API error: ${t.message}`, t), t.data;
              if ("error" === t.status) return console.warn(`API error: ${t.message}`, t), { site_uv: 0, site_pv: 0, page_pv: 0 };
            }
            return t || { site_uv: 0, site_pv: 0, page_pv: 0 };
          })(await a.json());
          n(() => {
            t(s), localStorage.setItem("visitorCountData", JSON.stringify(s)), e.showAll();
          });
        } catch (o) {
          console.warn("Error with v2 API, falling back to v1:", o);
          try {
            const o = await fetch(a, {
                method: "POST",
                headers: { "Content-Type": "application/json", "X-Browser-Token": r },
                body: JSON.stringify({ url: i, token: r }),
              }),
              s = await o.json();
            n(() => {
              t(s), localStorage.setItem("visitorCountData", JSON.stringify(s)), e.showAll();
            });
          } catch (o) {
            console.warn("CORS error with token header, retrying without custom header:", o);
            const s = await fetch(a, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: i, token: r }) }),
              c = await s.json();
            n(() => {
              t(c), localStorage.setItem("visitorCountData", JSON.stringify(c)), e.showAll();
            });
          }
        }
      } catch (o) {
        console.error("Error fetching visitor count:", o);
        const a = localStorage.getItem("visitorCountData");
        if (a)
          try {
            const o = JSON.parse(a);
            n(() => {
              t(o), e.showAll();
            }),
              console.log("Using cached visitor count data");
          } catch (t) {
            console.error("Error parsing cached data:", t), e.hideAll();
          }
        else e.hideAll();
      }
    },
  }),
    (e = {
      counterIds: ["site_pv", "page_pv", "site_uv"],
      updateText: function (t) {
        this.counterIds.forEach((e) => {
          const n = document.getElementById("busuanzi_value_" + e);
          n && (n.textContent = t[e] || "0");
          const o = document.getElementById("vercount_value_" + e);
          o && (o.textContent = t[e] || "0");
        });
      },
      hideAll: function () {
        this.counterIds.forEach((t) => {
          const e = document.getElementById("busuanzi_container_" + t);
          e && (e.style.display = "none");
          const n = document.getElementById("vercount_container_" + t);
          n && (n.style.display = "none");
        });
      },
      showAll: function () {
        this.counterIds.forEach((t) => {
          const e = document.getElementById("busuanzi_container_" + t);
          e && (e.style.display = "inline");
          const n = document.getElementById("vercount_container_" + t);
          n && (n.style.display = "inline");
        });
      },
    }),
    (n = function (t) {
      a || "interactive" === document.readyState || "complete" === document.readyState
        ? t.call(document)
        : (o.push(t), document.addEventListener("DOMContentLoaded", r));
    })(() => {
      t.fetch(e.updateText.bind(e));
    });
})();
