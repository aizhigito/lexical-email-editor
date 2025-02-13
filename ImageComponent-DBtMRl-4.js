import { j as a, u as T, a as K, b as G, $ as L, c as O, R as F } from "./index-BvUBnsyd.js";
import { $getSelection as A, $isNodeSelection as _, $isRangeSelection as Y, $setSelection as U, $createParagraphNode as V, SELECTION_CHANGE_COMMAND as Z, COMMAND_PRIORITY_LOW as M, CLICK_COMMAND as q, KEY_DELETE_COMMAND as J, KEY_BACKSPACE_COMMAND as Q, KEY_ENTER_COMMAND as ee, $getNodeByKey as te } from "lexical";
import { calculateZoomLevel as k, mergeRegister as se } from "@lexical/utils";
import { useRef as b, useState as X, useCallback as I, useEffect as re, Suspense as ne } from "react";
function W(g, w, c) {
  return Math.min(Math.max(g, w), c);
}
const n = {
  east: 1,
  north: 8,
  south: 2,
  west: 4
};
function ie({
  onResizeStart: g,
  onResizeEnd: w,
  imageRef: c,
  maxWidth: z,
  editor: N
}) {
  const C = b(null), E = b({
    priority: "",
    value: "default"
  }), D = b({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: !1,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  }), m = N.getRootElement(), y = z || (m !== null ? m.getBoundingClientRect().width - 20 : 100), x = m !== null ? m.getBoundingClientRect().height - 20 : 100, R = 100, P = 100, S = (e) => {
    const r = e === n.east || e === n.west, s = e === n.north || e === n.south, f = e & n.north && e & n.west || e & n.south && e & n.east, d = r ? "ew" : s ? "ns" : f ? "nwse" : "nesw";
    m !== null && m.style.setProperty(
      "cursor",
      `${d}-resize`,
      "important"
    ), document.body !== null && (document.body.style.setProperty(
      "cursor",
      `${d}-resize`,
      "important"
    ), E.current.value = document.body.style.getPropertyValue(
      "-webkit-user-select"
    ), E.current.priority = document.body.style.getPropertyPriority(
      "-webkit-user-select"
    ), document.body.style.setProperty(
      "-webkit-user-select",
      "none",
      "important"
    ));
  }, u = () => {
    m !== null && m.style.setProperty("cursor", "text"), document.body !== null && (document.body.style.setProperty("cursor", "default"), document.body.style.setProperty(
      "-webkit-user-select",
      E.current.value,
      E.current.priority
    ));
  }, h = (e, r) => {
    if (!N.isEditable())
      return;
    const s = c.current, f = C.current;
    if (s !== null && f !== null) {
      e.preventDefault();
      const { width: d, height: p } = s.getBoundingClientRect(), o = k(s), t = D.current;
      t.startWidth = d, t.startHeight = p, t.ratio = d / p, t.currentWidth = d, t.currentHeight = p, t.startX = e.clientX / o, t.startY = e.clientY / o, t.isResizing = !0, t.direction = r, S(r), g(), f.classList.add("image-control-wrapper--resizing"), s.style.height = `${p}px`, s.style.width = `${d}px`, document.addEventListener("pointermove", $), document.addEventListener("pointerup", j);
    }
  }, $ = (e) => {
    const r = c.current, s = D.current, f = s.direction & (n.east | n.west), d = s.direction & (n.south | n.north);
    if (r !== null && s.isResizing) {
      const p = k(r);
      if (f && d) {
        let o = Math.floor(s.startX - e.clientX / p);
        o = s.direction & n.east ? -o : o;
        const t = W(
          s.startWidth + o,
          R,
          y
        ), i = t / s.ratio;
        r.style.width = `${t}px`, r.style.height = `${i}px`, s.currentHeight = i, s.currentWidth = t;
      } else if (d) {
        let o = Math.floor(s.startY - e.clientY / p);
        o = s.direction & n.south ? -o : o;
        const t = W(
          s.startHeight + o,
          P,
          x
        );
        r.style.height = `${t}px`, s.currentHeight = t;
      } else {
        let o = Math.floor(s.startX - e.clientX / p);
        o = s.direction & n.east ? -o : o;
        const t = W(
          s.startWidth + o,
          R,
          y
        );
        r.style.width = `${t}px`, s.currentWidth = t;
      }
    }
  }, j = () => {
    const e = c.current, r = D.current, s = C.current;
    if (e !== null && s !== null && r.isResizing) {
      const f = r.currentWidth, d = r.currentHeight;
      r.startWidth = 0, r.startHeight = 0, r.ratio = 0, r.startX = 0, r.startY = 0, r.currentWidth = 0, r.currentHeight = 0, r.isResizing = !1, s.classList.remove("image-control-wrapper--resizing"), u(), w(f, d), document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", j);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { ref: C, children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-n",
        onPointerDown: (e) => {
          h(e, n.north);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-ne",
        onPointerDown: (e) => {
          h(e, n.north | n.east);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-e",
        onPointerDown: (e) => {
          h(e, n.east);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-se",
        onPointerDown: (e) => {
          h(e, n.south | n.east);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-s",
        onPointerDown: (e) => {
          h(e, n.south);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-sw",
        onPointerDown: (e) => {
          h(e, n.south | n.west);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-w",
        onPointerDown: (e) => {
          h(e, n.west);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "image-resizer image-resizer-nw",
        onPointerDown: (e) => {
          h(e, n.north | n.west);
        }
      }
    )
  ] });
}
const H = /* @__PURE__ */ new Set(), B = "data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22%23f0f0f0%22/><text x=%2250%25%22 y=%2250%25%22 alignment-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2216%22 fill=%22%23888%22>No Image</text></svg>";
function oe(g) {
  if (!H.has(g))
    throw new Promise((w) => {
      const c = new Image();
      c.src = g, c.onload = () => {
        H.add(g), w(null);
      }, c.onerror = () => {
        H.add(g);
      };
    });
}
function ae({
  altText: g,
  className: w,
  imageRef: c,
  src: z,
  width: N,
  height: C
}) {
  return oe(z || B), /* @__PURE__ */ a.jsx(
    "img",
    {
      className: w || void 0,
      src: z || B,
      alt: g,
      ref: c,
      style: {
        height: C,
        width: N,
        verticalAlign: "middle"
      },
      draggable: "false"
    }
  );
}
function ge({
  src: g,
  altText: w,
  nodeKey: c,
  width: z,
  height: N,
  resizable: C,
  showCaption: E,
  // caption,
  captionsEnabled: D
}) {
  const m = b(null), [y, x, R] = T(c), [P, S] = X(!1), [u] = K(), [h, $] = X(null), j = b(null), e = G(), r = I(
    (t) => {
      const i = A();
      if (y && _(i))
        t.preventDefault(), u.update(() => {
          i.getNodes().forEach((l) => {
            L(l) && l.remove();
          });
        });
      else if (Y(i) && i.isCollapsed()) {
        const l = i.anchor.getNode(), v = l.getPreviousSibling();
        if (O(v))
          return t.preventDefault(), l.remove(), v.select(), !0;
      }
      return !1;
    },
    [u, y]
  ), s = I(
    (t) => {
      const i = A();
      if (Y(i)) {
        const l = i.anchor.getNode();
        if (O(l)) {
          U(null), t.preventDefault();
          const v = V();
          return i.anchor.offset === 0 ? l.insertBefore(v) : l.insertAfter(v), v.select(), !0;
        }
      }
      return !1;
    },
    []
  ), f = I(
    (t) => {
      const i = t;
      return P ? !0 : i.target === m.current ? (i.shiftKey ? x(!y) : (R(), x(!0)), !0) : !1;
    },
    [P, y, x, R]
  );
  re(() => {
    let t = !0;
    const i = se(
      u.registerUpdateListener(({ editorState: l }) => {
        t && $(l.read(() => A()));
      }),
      u.registerCommand(
        Z,
        (l, v) => (j.current = v, !1),
        M
      ),
      u.registerCommand(
        q,
        f,
        M
      ),
      u.registerCommand(
        J,
        r,
        M
      ),
      u.registerCommand(
        Q,
        r,
        M
      ),
      u.registerCommand(ee, s, M)
    );
    return () => {
      t = !1, i();
    };
  }, [
    R,
    u,
    P,
    y,
    c,
    r,
    s,
    f,
    x
  ]);
  const d = (t, i) => {
    setTimeout(() => {
      S(!1);
    }, 200), u.update(() => {
      const l = te(c);
      L(l) && l.setWidthAndHeight(t, i);
    }), u.dispatchCommand(
      F,
      {
        width: t === "100%" ? 0 : t,
        height: i === "100%" ? 0 : i
      }
    );
  }, p = () => {
    S(!0);
  }, o = (y || P) && e;
  return /* @__PURE__ */ a.jsx(ne, { fallback: null, children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
      ae,
      {
        className: o ? `focused ${_(h) ? "draggable" : ""}` : null,
        src: g,
        altText: w,
        imageRef: m,
        width: z,
        height: N
      }
    ) }),
    C && _(h) && o && /* @__PURE__ */ a.jsx(
      ie,
      {
        showCaption: E,
        editor: u,
        imageRef: m,
        onResizeStart: p,
        onResizeEnd: d,
        captionsEnabled: D
      }
    )
  ] }) });
}
export {
  ge as default
};
