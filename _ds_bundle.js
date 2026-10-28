/* @ds-bundle: {"format":4,"namespace":"RENDataDesignSystem_372f57","components":[{"name":"BigNumber","sourcePath":"components/content/BigNumber.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"PostList","sourcePath":"components/content/PostList.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"ProjectNote","sourcePath":"components/content/ProjectNote.jsx"},{"name":"RulePair","sourcePath":"components/content/RulePair.jsx"},{"name":"Swatch","sourcePath":"components/content/Swatch.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"ChipRow","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Tide","sourcePath":"components/feedback/Tide.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SectionHead","sourcePath":"components/navigation/SectionHead.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"ThemeToggle","sourcePath":"components/navigation/ThemeToggle.jsx"}],"sourceHashes":{"components/content/BigNumber.jsx":"b6f90828b258","components/content/Callout.jsx":"de18a4b73109","components/content/PostList.jsx":"16d5d74f0125","components/content/ProjectCard.jsx":"6e036055bc8c","components/content/ProjectNote.jsx":"7fa4a8a2deb7","components/content/RulePair.jsx":"d61801a804c8","components/content/Swatch.jsx":"ab25b3048088","components/core/Button.jsx":"18183dc62987","components/core/Chip.jsx":"f924f514bd19","components/core/Eyebrow.jsx":"6f89b8bcf8e9","components/core/Tag.jsx":"acb0bd981155","components/feedback/Alert.jsx":"f7afae967f70","components/feedback/EmptyState.jsx":"3a406d21d63d","components/feedback/Tide.jsx":"e0f9a7192989","components/forms/Select.jsx":"143098885246","components/navigation/SectionHead.jsx":"1d46ad380d46","components/navigation/Sidebar.jsx":"b29a05163b72","components/navigation/ThemeToggle.jsx":"63fcab5d9e14","site/components.js":"b38f3e8d8774","site/docs.js":"401ee25378d7","site/patterns.js":"714591a6ff46","site/tokens.js":"78df26ce22cd","ui_kits/style-guide/DocsNav.jsx":"8b45f73c4eba","ui_kits/style-guide/GuideHome.jsx":"52cb72d47263","ui_kits/style-guide/Palette.jsx":"c55dceeaf6af","ui_kits/style-guide/Principles.jsx":"84449b40a54d","ui_kits/style-guide/palette.js":"024fc418ce01","ui_kits/website/About.jsx":"5dbbca230cf8","ui_kits/website/Blog.jsx":"6e4ae1ea771f","ui_kits/website/Home.jsx":"5cddf4ca92f3","ui_kits/website/NotFound.jsx":"73f844f03160","ui_kits/website/Post.jsx":"3df665cb0c5c","ui_kits/website/Shell.jsx":"c1407bda887e","ui_kits/website/Track.jsx":"13008edfec42","ui_kits/website/data.js":"5aec15dcdb2e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RENDataDesignSystem_372f57 = window.RENDataDesignSystem_372f57 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BigNumber.jsx
try { (() => {
function BigNumber({
  label,
  value,
  context,
  trend,
  accent = 'brand'
}) {
  const arrow = trend === 'up' ? '▲' : trend === 'down' ? '▼' : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 208,
      padding: '16px 20px',
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderTop: '4px solid ' + (accent === 'accent' ? 'var(--accent)' : 'var(--link)'),
      borderRadius: 'var(--radius)',
      verticalAlign: 'top'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-ban)',
      fontWeight: 700,
      lineHeight: 1.1,
      color: 'var(--heading)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, value), context && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 11,
      marginRight: 4,
      color: trend === 'up' ? 'var(--cherry-6)' : 'var(--teal-6)'
    }
  }, arrow), context));
}
Object.assign(__ds_scope, { BigNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BigNumber.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
const KINDS = {
  rule: {
    label: 'Rule',
    c: 'var(--teal-6)'
  },
  avoid: {
    label: 'Avoid',
    c: 'var(--cherry-6)'
  },
  adapt: {
    label: 'Adapt',
    c: 'var(--jasmine-7)'
  },
  why: {
    label: 'Why',
    c: 'var(--baltic-6)'
  }
};
function Callout({
  kind = 'rule',
  label,
  children
}) {
  const k = KINDS[kind];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px minmax(0,1fr)',
      gap: 16,
      padding: '12px 0',
      borderTop: '1px solid var(--line-strong)',
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '12px/1.9 var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--ink)',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-mark)',
      background: k.c,
      flex: 'none'
    }
  }), label || k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/PostList.jsx
try { (() => {
function PostList({
  posts = [],
  emptyText = 'No posts yet.',
  onOpen
}) {
  if (!posts.length) return /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      margin: 0
    }
  }, emptyText);
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      maxWidth: 'var(--measure)'
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: '2px 16px',
      padding: '14px 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: p.href || '#',
    onClick: onOpen ? e => {
      e.preventDefault();
      onOpen(p, i);
    } : undefined,
    style: {
      fontWeight: 600,
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.textDecoration = 'underline',
    onMouseLeave: e => e.currentTarget.style.textDecoration = 'none'
  }, p.title), /*#__PURE__*/React.createElement("time", {
    style: {
      font: '12px/1.9 var(--font-mono)',
      color: 'var(--muted)',
      whiteSpace: 'nowrap'
    }
  }, p.date), p.description && /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / -1',
      margin: 0,
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, p.description))));
}
Object.assign(__ds_scope, { PostList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostList.jsx", error: String((e && e.message) || e) }); }

// components/content/RulePair.jsx
try { (() => {
function Col({
  title,
  items,
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '0 0 8px',
      fontWeight: 600,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-mark)',
      background: c
    }
  }), title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 14,
      lineHeight: 1.55,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, t))));
}
function RulePair({
  doItems = [],
  avoidItems = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: '20px 40px',
      padding: '18px 0',
      borderTop: '1px solid var(--line-strong)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Col, {
    title: "Do",
    items: doItems,
    c: "var(--teal-6)"
  }), /*#__PURE__*/React.createElement(Col, {
    title: "Avoid",
    items: avoidItems,
    c: "var(--cherry-6)"
  }));
}
Object.assign(__ds_scope, { RulePair });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RulePair.jsx", error: String((e && e.message) || e) }); }

// components/content/Swatch.jsx
try { (() => {
function Swatch({
  name,
  hex,
  ink,
  height = 104,
  onCopy
}) {
  const [copied, setCopied] = React.useState(false);
  if (!hex) return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius)',
      background: 'repeating-linear-gradient(135deg,#FFFFFF 0 8px,var(--cherry-2) 8px 16px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 8,
      font: '12px/1.35 var(--font-sans)',
      color: 'var(--cherry-8)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, name), "not defined");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 900);
    onCopy && onCopy(hex);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: name + ' ' + hex,
    onClick: copy,
    style: {
      position: 'relative',
      height,
      border: 0,
      borderRadius: 'var(--radius)',
      background: hex,
      boxShadow: 'var(--hairline)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      padding: 8,
      cursor: 'copy',
      font: '12px/1.35 var(--font-sans)',
      color: ink || '#191919',
      textAlign: 'left',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, hex), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      background: 'var(--ren-black)',
      color: '#fff',
      padding: '3px 6px',
      borderRadius: 'var(--radius-code)',
      font: '11px var(--font-mono)',
      opacity: copied ? 1 : 0,
      transition: 'opacity var(--dur)'
    }
  }, copied ? 'Copied' : ''));
}
Object.assign(__ds_scope, { Swatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Swatch.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  md: {
    fontSize: 15,
    padding: '12px 22px'
  },
  sm: {
    fontSize: 14,
    padding: '8px 16px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  busy = false,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    lineHeight: 1.2,
    borderRadius: 'var(--radius-button)',
    textDecoration: 'none',
    border: 0,
    cursor: disabled || busy ? 'default' : 'pointer',
    transition: 'background var(--dur-fast), box-shadow var(--dur-fast)',
    whiteSpace: 'nowrap',
    ...SIZES[size]
  };
  const v = {
    primary: {
      background: h ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--accent-ink)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--link)',
      boxShadow: h ? 'inset 0 0 0 2px var(--link)' : 'inset 0 0 0 1.5px var(--link)'
    },
    quiet: {
      background: 'transparent',
      color: 'var(--link)',
      padding: SIZES[size].padding.split(' ')[0] + ' 0',
      borderRadius: 0,
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      textDecorationThickness: h ? 2 : 1,
      textDecorationColor: h ? 'var(--accent)' : 'currentColor'
    }
  }[variant];
  const off = disabled ? {
    background: variant === 'primary' ? 'var(--ren-platinum)' : 'transparent',
    color: 'var(--muted)',
    boxShadow: variant === 'outline' ? 'inset 0 0 0 1.5px var(--line-strong)' : 'none'
  } : {};
  const style = {
    ...base,
    ...v,
    ...off
  };
  const ev = {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  };
  const content = busy ? /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '0.85em'
    }
  }, "\u2026")) : children;
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: style
  }, ev, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || busy,
    "aria-busy": busy || undefined,
    onClick: onClick,
    style: style
  }, ev, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  pressed = false,
  count,
  children,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": pressed,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6,
      background: 'none',
      border: 0,
      borderRadius: 0,
      padding: '8px 0 9px',
      font: '14px/1.3 var(--font-sans)',
      fontWeight: pressed ? 600 : 400,
      color: pressed ? 'var(--heading)' : h ? 'var(--ink)' : 'var(--muted)',
      boxShadow: pressed ? 'inset 0 -3px 0 var(--accent)' : h ? 'inset 0 -1px 0 var(--line-strong)' : 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px var(--font-mono)',
      color: 'var(--muted)',
      fontWeight: 400
    }
  }, count));
}
function ChipRow({
  children,
  label = 'Filter by tag'
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": label,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0 20px',
      borderBottom: '1px solid var(--line)'
    }
  }, children);
}
Object.assign(__ds_scope, { Chip, ChipRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  mark = false,
  as = 'p'
}) {
  const El = as;
  return /*#__PURE__*/React.createElement(El, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: '13px/1.4 var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--link)',
      margin: 0
    }
  }, mark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-mark)',
      background: 'var(--accent)',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectNote.jsx
try { (() => {
function ProjectNote({
  title,
  summary,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      maxWidth: 'var(--measure)',
      padding: '18px 22px 20px',
      background: 'var(--code-bg)',
      borderRadius: 'var(--radius)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    mark: true
  }, "Project"), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontWeight: 600,
      fontSize: 17
    }
  }, title), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, summary));
}
Object.assign(__ds_scope, { ProjectNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectNote.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'default'
}) {
  const key = {
    default: 'var(--teal-4)',
    strong: 'var(--brand)',
    plain: 'var(--ren-steel)'
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '12px/1.4 var(--font-mono)',
      color: tone === 'strong' ? 'var(--ink)' : 'var(--muted)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      background: key,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  year,
  summary,
  tags = [],
  showTags = false,
  image,
  href = '#',
  dense = false,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const ratio = dense ? '16/8' : '16/10';
  const hatch = {
    display: 'block',
    width: '100%',
    aspectRatio: ratio,
    background: 'repeating-linear-gradient(135deg,var(--stripe-a) 0 10px,var(--stripe-b) 10px 20px)'
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface)',
      border: '1px solid ' + (h ? 'var(--accent)' : 'var(--line)'),
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'var(--ink)',
      transition: 'border-color var(--dur-fast)',
      minWidth: 0
    }
  }, image && !broken ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    loading: "lazy",
    onError: () => setBroken(true),
    style: {
      width: '100%',
      aspectRatio: ratio,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: hatch
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--heading)',
      textDecoration: h ? 'underline' : 'none',
      textDecorationColor: 'var(--accent)',
      textDecorationThickness: 2,
      textUnderlineOffset: 3,
      overflowWrap: 'break-word',
      flex: '1 1 auto',
      minWidth: 0
    }
  }, title), year && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px var(--font-mono)',
      color: 'var(--muted)',
      flex: 'none'
    }
  }, year)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--muted)'
    }
  }, summary), showTags && tags.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 14px',
      marginTop: 4
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  title,
  items = [],
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      background: 'var(--danger-bg)',
      color: 'var(--danger)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-code)',
      boxShadow: 'inset 0 0 0 1px var(--danger-line)',
      fontSize: 14,
      maxWidth: '84ch'
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      fontWeight: 600
    }
  }, title), children, items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, t))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  children = 'Nothing here yet.',
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      padding: '28px 0',
      borderTop: '1px dashed var(--line-strong)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--muted)'
    }
  }, children), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tide.jsx
try { (() => {
function Tide({
  label = 'high water · this page was here',
  code = '404'
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      background: 'var(--sidebar)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ren-tide-drift{to{transform:translateX(var(--dx))}}@keyframes ren-tide-bob{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-7px) rotate(5deg)}}'), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 220",
    preserveAspectRatio: "xMidYMax slice",
    style: {
      display: 'block',
      width: '100%',
      height: 'clamp(160px,28vw,220px)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "52",
    x2: "800",
    y2: "52",
    style: {
      stroke: 'var(--line-strong)',
      strokeDasharray: '4 6'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: "400",
    y: "40",
    textAnchor: "middle",
    style: {
      font: '12px var(--font-mono)',
      fill: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("path", {
    d: "M0 118 q40 -8 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 V220 H0 Z",
    style: {
      fill: 'var(--wave-1)',
      '--dx': '-160px',
      animation: 'ren-tide-drift 11s linear infinite reverse'
    }
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(400 132) rotate(-14)"
  }, /*#__PURE__*/React.createElement("g", {
    style: {
      animation: 'ren-tide-bob 4s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "-8",
    width: "24",
    height: "16",
    rx: "4",
    style: {
      fill: 'var(--surface)',
      fillOpacity: .9,
      stroke: 'var(--link)',
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: "44",
    y: "-7",
    width: "10",
    height: "14",
    rx: "2",
    style: {
      fill: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-48",
    y: "-19",
    width: "76",
    height: "38",
    rx: "13",
    style: {
      fill: 'var(--surface)',
      fillOpacity: .9,
      stroke: 'var(--link)',
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-38",
    y: "-11",
    width: "54",
    height: "22",
    rx: "3",
    style: {
      fill: 'var(--bg)',
      stroke: 'var(--line-strong)'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: "-11",
    y: "5",
    textAnchor: "middle",
    style: {
      font: '600 13px var(--font-mono)',
      fill: 'var(--heading)'
    }
  }, code), /*#__PURE__*/React.createElement("path", {
    d: "M-34 -14 h36",
    style: {
      stroke: 'var(--line-strong)',
      strokeWidth: 2,
      strokeLinecap: 'round'
    }
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 140 q60 -12 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 V220 H0 Z",
    style: {
      fill: 'var(--wave-2)',
      opacity: .9,
      '--dx': '-240px',
      animation: 'ren-tide-drift 8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 164 q80 -10 160 0 t160 0 t160 0 t160 0 t160 0 t160 0 t160 0 V220 H0 Z",
    style: {
      fill: 'var(--wave-3)',
      '--dx': '-320px',
      animation: 'ren-tide-drift 6s linear infinite'
    }
  })));
}
Object.assign(__ds_scope, { Tide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tide.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  id
}) {
  const [h, setH] = React.useState(false);
  const sid = id || 'sel-' + (label || 'x').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      font: '12px var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    id: sid,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      font: '14px var(--font-sans)',
      padding: '6px 28px 6px 10px',
      border: '1px solid ' + (h ? 'var(--link)' : 'var(--line-strong)'),
      borderRadius: 'var(--radius-code)',
      background: 'var(--surface) url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27%3E%3Cpath d=%27M0 0l5 6 5-6z%27 fill=%27%235C6B68%27/%3E%3C/svg%3E") no-repeat right 10px center',
      color: 'var(--ink)',
      appearance: 'none',
      minWidth: 100,
      cursor: 'pointer'
    }
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionHead.jsx
try { (() => {
function SectionHead({
  title,
  moreLabel,
  moreHref = '#',
  onMore,
  level = 2
}) {
  const H = 'h' + level;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0
    }
  }, title), moreLabel && /*#__PURE__*/React.createElement("a", {
    href: moreHref,
    onClick: onMore ? e => {
      e.preventDefault();
      onMore();
    } : undefined,
    style: {
      fontSize: 14
    }
  }, moreLabel));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ThemeToggle.jsx
try { (() => {
function ThemeToggle({
  theme = 'light',
  onToggle,
  showLabel = true
}) {
  const dark = theme === 'dark';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": dark,
    "aria-label": "Toggle dark mode",
    onClick: onToggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      font: '12px var(--font-mono)',
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 36,
      height: 20,
      borderRadius: 3,
      background: dark ? 'var(--accent)' : 'var(--line)',
      border: '1px solid ' + (dark ? 'var(--accent)' : 'var(--line-strong)'),
      display: 'flex',
      alignItems: 'center',
      padding: 2,
      transition: 'background var(--dur)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 0,
      background: dark ? 'var(--accent-ink)' : '#fff',
      transform: dark ? 'translateX(16px)' : 'none',
      transition: 'transform var(--dur)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", null, dark ? 'Dark' : 'Light'));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function NavLink({
  item,
  active,
  onNavigate
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    "aria-current": active ? 'page' : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(item.id);
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 0',
      color: active || h ? 'var(--brand)' : 'var(--muted)',
      fontWeight: active ? 700 : 400,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-mark)',
      background: active ? 'var(--accent)' : 'transparent',
      flex: 'none'
    }
  }), item.label);
}
function Sidebar({
  name = 'REN Data',
  tagline,
  avatar,
  items = [],
  active,
  onNavigate,
  social = [],
  theme = 'light',
  onToggleTheme,
  compact = false
}) {
  if (compact) return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px 24px',
      padding: '16px 20px',
      background: 'var(--sidebar)',
      borderBottom: '1px solid var(--sidebar-line)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      fontWeight: 600,
      color: 'var(--brand)'
    }
  }, name)), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      gap: 16,
      marginLeft: 'auto',
      fontSize: 15,
      flexWrap: 'wrap'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(NavLink, {
    key: it.id,
    item: it,
    active: it.id === active,
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, {
    theme: theme,
    onToggle: onToggleTheme,
    showLabel: false
  }));
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--sidebar)',
      borderRight: '1px solid var(--sidebar-line)',
      padding: '40px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
      width: 'var(--sidebar-width)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textDecoration: 'none'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'repeating-linear-gradient(135deg,var(--stripe-a) 0 6px,var(--bg) 6px 12px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.15,
      color: 'var(--brand)'
    }
  }, name)), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--muted)'
    }
  }, tagline)), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      fontSize: 15
    }
  }, items.map(it => /*#__PURE__*/React.createElement(NavLink, {
    key: it.id,
    item: it,
    active: it.id === active,
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, social.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontSize: 13
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    style: {
      color: 'var(--brand)',
      textDecorationColor: 'var(--line-strong)'
    }
  }, s.label))), /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, {
    theme: theme,
    onToggle: onToggleTheme
  })));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// site/components.js
try { (() => {
window.DOC_COMPONENTS = [{
  name: 'Button',
  group: 'Core',
  file: 'core/Button',
  examples: [{
    title: 'Variants',
    code: `
<Button href="/about/">Get in touch</Button>
<Button variant="outline">All work projects</Button>
<Button variant="quiet">Copy hex codes</Button>`
  }, {
    title: 'Size and state',
    code: `
<Button busy>Checking 1,284 activities</Button>
<Button disabled>Export CSS</Button>
<Button size="sm">Copy</Button>
<Button size="sm" variant="outline">Reset</Button>`
  }]
}, {
  name: 'Tag',
  group: 'Core',
  file: 'core/Tag',
  examples: [{
    title: 'Tones',
    code: `
<Tag>Python</Tag>
<Tag>IATI</Tag>
<Tag tone="strong">Featured</Tag>
<Tag tone="plain">Draft</Tag>`
  }]
}, {
  name: 'Chip',
  extra: ['ChipRow'],
  group: 'Core',
  file: 'core/Chip',
  examples: [{
    title: 'Filter row',
    layout: 'block',
    code: `
function Example() {
  const [active, setActive] = React.useState("All");
  const counts = { All: 7, Python: 4, "Data quality": 2, IATI: 2, "Power BI": 1 };
  return (
    <ChipRow label="Filter projects">
      {Object.entries(counts).map(([tag, n]) => (
        <Chip key={tag} count={n} pressed={active === tag} onClick={() => setActive(tag)}>
          {tag}
        </Chip>
      ))}
    </ChipRow>
  );
}`
  }]
}, {
  name: 'Eyebrow',
  group: 'Core',
  file: 'core/Eyebrow',
  examples: [{
    title: 'Plain and marked',
    code: `
<Eyebrow>14 October 2026</Eyebrow>
<Eyebrow mark>404 · Page not found</Eyebrow>`
  }]
}, {
  name: 'Sidebar',
  group: 'Navigation',
  file: 'navigation/Sidebar',
  examples: [{
    title: 'rendata.nl sidebar',
    code: `
function Example() {
  const [page, setPage] = React.useState("work");
  const [theme, setTheme] = React.useState("light");
  return (
    <div style={{ width: 272, height: 560 }}>
      <Sidebar
        name="Renze Terpstra"
        tagline="I build tools that make aid data work."
        avatar="../assets/img/avatar.png"
        items={[
          { id: "home", label: "Home" },
          { id: "work", label: "Work" },
          { id: "play", label: "Play" },
          { id: "blog", label: "Blog" },
          { id: "about", label: "About" },
        ]}
        active={page}
        onNavigate={setPage}
        social={[{ label: "GitHub", href: "https://github.com/RenRMT" }]}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}`
  }, {
    title: 'Compact, under 860px',
    layout: 'block',
    code: `
<Sidebar
  compact
  name="Renze Terpstra"
  items={[{ id: "home", label: "Home" }, { id: "work", label: "Work" }, { id: "blog", label: "Blog" }]}
  active="blog"
  onNavigate={() => {}}
/>`
  }]
}, {
  name: 'ThemeToggle',
  group: 'Navigation',
  file: 'navigation/ThemeToggle',
  examples: [{
    title: 'Switches this page',
    code: `
function Example() {
  const [theme, setTheme] = React.useState(document.documentElement.dataset.theme || "light");
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("ren-docs-theme", next);
    setTheme(next);
  };
  return <ThemeToggle theme={theme} onToggle={toggle} showLabel />;
}`
  }]
}, {
  name: 'SectionHead',
  group: 'Navigation',
  file: 'navigation/SectionHead',
  examples: [{
    title: 'With and without link',
    layout: 'block',
    code: `
<SectionHead title="Work" moreLabel="All work projects" moreHref="/work/" />
<SectionHead title="Elsewhere" level={3} />`
  }]
}, {
  name: 'ProjectCard',
  group: 'Content',
  file: 'content/ProjectCard',
  examples: [{
    title: 'Grid, no image',
    layout: 'block',
    code: `
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
  <ProjectCard
    title="IATI quality checker"
    year="2025"
    summary="Runs the quality checks IATI's own validator doesn't make."
    tags={["Python", "IATI"]}
    showTags
    href="#"
  />
  <ProjectCard
    title="Chart styler for Excel"
    year="2024"
    summary="Applies the style guide to any chart in one click."
    tags={["Office JS"]}
    showTags
    href="#"
  />
</div>`
  }]
}, {
  name: 'PostList',
  group: 'Content',
  file: 'content/PostList',
  examples: [{
    title: 'Posts',
    layout: 'block',
    code: `
<PostList
  posts={[
    {
      title: "Checking IATI data before it reaches the dashboard",
      date: "14 October 2026",
      description: "The checks I run on every publisher file.",
    },
    { title: "A palette that survives colour blindness", date: "2 September 2026" },
  ]}
/>`
  }, {
    title: 'Empty',
    layout: 'block',
    code: `
<PostList posts={[]} emptyText="No posts with this tag yet." />`
  }]
}, {
  name: 'BigNumber',
  group: 'Content',
  file: 'content/BigNumber',
  examples: [{
    title: 'Key figures',
    layout: 'block',
    code: `
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
  <BigNumber
    label="Security incidents, March 2026"
    value="112"
    context="+24% on the 12-month average"
    trend="up"
  />
  <BigNumber
    label="Planned missions cancelled, Q1 2026"
    value="26%"
    context="About 1 in every 4 planned missions"
    accent="accent"
  />
</div>`
  }]
}, {
  name: 'Callout',
  group: 'Content',
  file: 'content/Callout',
  examples: [{
    title: 'Kinds',
    layout: 'block',
    code: `
<Callout kind="rule">Use one colour, plus grey. The series that carries the message is Teal; everything else is Steel.</Callout>
<Callout kind="avoid">Drop shadows, 3D effects and gradients on charts.</Callout>
<Callout kind="adapt">In Excel, set the gap width to 50% before applying colours.</Callout>
<Callout kind="why">Grey keeps context visible without competing with the message.</Callout>`
  }]
}, {
  name: 'RulePair',
  group: 'Content',
  file: 'content/RulePair',
  examples: [{
    title: 'Do and avoid',
    layout: 'block',
    code: `
<RulePair
  doItems={["Write the message as the title", "Label lines directly", "Start bar axes at zero"]}
  avoidItems={["Legends when direct labels fit", "Rotated axis labels"]}
/>`
  }]
}, {
  name: 'ProjectNote',
  group: 'Content',
  file: 'content/ProjectNote',
  examples: [{
    title: 'Under a post',
    layout: 'block',
    code: `
<ProjectNote
  title="IATI quality checker"
  summary="Runs the quality checks IATI's own validator doesn't make."
  href="#"
/>`
  }]
}, {
  name: 'Swatch',
  group: 'Content',
  file: 'content/Swatch',
  examples: [{
    title: 'Copy and missing states',
    layout: 'block',
    code: `
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
  <Swatch name="Primary Teal" hex="#1C6758" ink="#FFFFFF" />
  <Swatch name="Coral" hex="#FF9779" ink="#191919" />
  <Swatch name="Jasmine" hex="#FFDD77" ink="#191919" />
  <Swatch name="Corall" />
</div>`
  }]
}, {
  name: 'Alert',
  group: 'Feedback',
  file: 'feedback/Alert',
  examples: [{
    title: 'Config error',
    layout: 'block',
    code: `
<Alert
  title="2 problems in palette.json"
  items={[
    \`Section "Data colours": no colour called "Corall".\`,
    \`Colour "Sky": "#88CCF" is not a 6-digit hex code.\`,
  ]}
/>`
  }]
}, {
  name: 'EmptyState',
  group: 'Feedback',
  file: 'feedback/EmptyState',
  examples: [{
    title: 'No matches',
    layout: 'block',
    code: `
<EmptyState action={<Button variant="quiet" size="sm">Show all projects</Button>}>
  No projects tagged R yet.
</EmptyState>`
  }]
}, {
  name: 'Tide',
  group: 'Feedback',
  file: 'feedback/Tide',
  examples: [{
    title: '404',
    layout: 'block',
    code: `
<Tide />`
  }]
}, {
  name: 'Select',
  group: 'Forms',
  file: 'forms/Select',
  examples: [{
    title: 'Toolbar select',
    code: `
function Example() {
  const [palette, setPalette] = React.useState("Data colours");
  const [steps, setSteps] = React.useState("5");
  return (
    <>
      <Select label="Palette" options={["Brand colours", "Data colours", "Neutral shades"]} value={palette} onChange={setPalette} />
      <Select label="Steps" options={["3", "5", "7", "9"]} value={steps} onChange={setSteps} />
    </>
  );
}`
  }]
}];
(function () {
  var D = DOCS,
    main = document.getElementById('list');
  function parseProps(dts, name) {
    var i = dts.indexOf('export interface ' + name + 'Props');
    if (i < 0) return null;
    var dm = dts.slice(0, i).match(/\/\*\*([\s\S]*?)\*\/\s*$/);
    var desc = dm ? dm[1].split('\n').map(function (l) {
      return l.replace(/^\s*\*\s?/, '').trim();
    }).filter(function (l) {
      return l && l[0] !== '@';
    }).join(' ') : '';
    var s = dts.indexOf('{', i),
      d = 0,
      e = s;
    for (; e < dts.length; e++) {
      if (dts[e] === '{') d++;else if (dts[e] === '}' && ! --d) break;
    }
    var body = dts.slice(s + 1, e),
      re = /(?:\/\*\*\s*([\s\S]*?)\s*\*\/\s*)?(\w+)(\?)?:\s*([^;\n]+?)\s*(?:;|\n|$)/g,
      m,
      props = [];
    while (m = re.exec(body)) props.push({
      name: m[2],
      opt: !!m[3],
      type: m[4],
      doc: (m[1] || '').replace(/\s*\n\s*\*?\s*/g, ' ')
    });
    return {
      desc: desc,
      props: props
    };
  }
  function table(name, p) {
    var h = '<h3>' + name + ' props</h3><div class="props-wrap"><table class="props"><thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead><tbody>';
    p.props.forEach(function (r) {
      h += '<tr><td>' + r.name + (r.opt ? '' : '<span class="req">required</span>') + '</td><td class="ty">' + D.esc(r.type) + '</td><td>' + D.esc(r.doc) + '</td></tr>';
    });
    return h + '</tbody></table></div>';
  }
  DOC_COMPONENTS.forEach(function (c) {
    var sec = D.el('section', 'd-sec');
    sec.id = c.name.toLowerCase();
    sec.dataset.nav = c.name;
    sec.dataset.group = c.group;
    sec.innerHTML = '<p class="d-eyebrow">' + c.group + '</p><h2>' + c.name + '</h2><p class="d-desc" data-desc></p><p class="d-file">components/' + c.file + '.jsx</p>';
    c.examples.forEach(function (x) {
      sec.appendChild(D.example(x));
    });
    var pt = D.el('div');
    sec.appendChild(pt);
    main.appendChild(sec);
    fetch('../components/' + c.file + '.d.ts').then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (t) {
      var p = parseProps(t, c.name);
      if (!p) return;
      sec.querySelector('[data-desc]').textContent = p.desc;
      var h = table(c.name, p);
      (c.extra || []).forEach(function (n) {
        var q = parseProps(t, n);
        if (q) h += table(n, q);
      });
      pt.innerHTML = h;
    }).catch(function () {
      sec.querySelector('[data-desc]').remove();
    });
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/components.js", error: String((e && e.message) || e) }); }

// site/docs.js
try { (() => {
(function () {
  var NS = 'RENDataDesignSystem_372f57';
  var NAV = [['index.html', 'Overview'], ['tokens.html', 'Tokens'], ['components.html', 'Components'], ['patterns.html', 'Patterns'], ['pages.html', 'Pages']];
  var root = document.documentElement;
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  var RE = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->)|("(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`)|(<\/?)([A-Za-z][\w.]*)|\b(const|let|var|function|return|true|false|null|import|from|export|new)\b|([A-Za-z][\w-]*)(?==[{"])/g;
  function hl(src) {
    var out = '',
      last = 0,
      m;
    RE.lastIndex = 0;
    while (m = RE.exec(src)) {
      out += esc(src.slice(last, m.index));
      if (m[1]) out += '<span class="tk-com">' + esc(m[1]) + '</span>';else if (m[2]) out += '<span class="tk-str">' + esc(m[2]) + '</span>';else if (m[4]) out += esc(m[3]) + '<span class="tk-tag">' + esc(m[4]) + '</span>';else if (m[5]) out += '<span class="tk-key">' + m[5] + '</span>';else if (m[6]) out += '<span class="tk-attr">' + esc(m[6]) + '</span>';
      last = RE.lastIndex;
    }
    return out + esc(src.slice(last));
  }
  function copy(text, btn) {
    var done = function () {
      if (!btn) return;
      var t = btn.dataset.label || btn.textContent;
      btn.dataset.label = t;
      btn.textContent = 'Copied';
      setTimeout(function () {
        btn.textContent = t;
      }, 1200);
    };
    var fallback = function () {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (e) {}
      ta.remove();
      done();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);else fallback();
  }
  function codeBlock(code, solo) {
    var d = document.createElement('div');
    d.className = 'ex-code' + (solo ? ' solo' : '');
    var pre = document.createElement('pre');
    pre.innerHTML = '<code>' + hl(code) + '</code>';
    var b = document.createElement('button');
    b.className = 'copy';
    b.type = 'button';
    b.textContent = 'Copy';
    b.onclick = function () {
      copy(code, b);
    };
    d.append(pre, b);
    return d;
  }
  function mount(el, code) {
    try {
      var src = /function Example\s*\(/.test(code) ? code : 'const Example = () => (<>' + code + '</>);';
      var js = Babel.transform(src, {
        presets: ['react']
      }).code;
      var lib = window[NS];
      var Ex = new Function('React', 'NS', 'const {' + Object.keys(lib).join(',') + '}=NS;\n' + js + '\nreturn Example;')(React, lib);
      ReactDOM.createRoot(el).render(React.createElement(Ex));
    } catch (e) {
      el.innerHTML = '<p class="ex-err">' + esc(e.message || e) + '</p>';
    }
  }
  function example(o) {
    var code = o.code.replace(/^\n+|\s+$/g, '');
    var w = document.createElement('figure');
    w.className = 'ex';
    w.style.margin = '';
    if (o.title) {
      var c = document.createElement('figcaption');
      c.className = 'ex-title';
      c.textContent = o.title;
      w.appendChild(c);
    }
    var p = document.createElement('div');
    p.className = 'ex-prev' + (o.layout === 'block' ? ' block' : '');
    if (o.minHeight) p.style.minHeight = o.minHeight + 'px';
    w.append(p, codeBlock(code));
    mount(p, code);
    return w;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function setTheme(t) {
    root.dataset.theme = t;
    try {
      localStorage.setItem('ren-docs-theme', t);
    } catch (e) {}
    var b = document.getElementById('themeBtn');
    if (b) b.textContent = t === 'dark' ? 'Light mode' : 'Dark mode';
  }
  function init() {
    var page = document.body.dataset.page;
    var side = document.getElementById('side');
    var subs = [].slice.call(document.querySelectorAll('main [data-nav]'));
    var h = '<div><a class="d-brand" href="index.html">REN Data</a><p class="d-kicker">Design system</p></div><nav class="d-nav" aria-label="Sections">';
    NAV.forEach(function (n) {
      var on = n[0] === page;
      h += '<a href="' + n[0] + '"' + (on ? ' aria-current="page"' : '') + '>' + n[1] + '</a>';
      if (on && subs.length) {
        h += '<div class="d-sub">';
        var g = null;
        subs.forEach(function (s) {
          if (s.dataset.group && s.dataset.group !== g) {
            g = s.dataset.group;
            h += '<p class="grp">' + esc(g) + '</p>';
          }
          h += '<a href="#' + s.id + '" data-for="' + s.id + '">' + esc(s.dataset.nav) + '</a>';
        });
        h += '</div>';
      }
    });
    h += '</nav><button class="d-theme" type="button" id="themeBtn"></button>';
    side.innerHTML = h;
    document.getElementById('themeBtn').onclick = function () {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    };
    setTheme(root.dataset.theme || 'light');
    document.querySelectorAll('pre[data-code]').forEach(function (p) {
      var code = p.textContent.replace(/^\n+|\s+$/g, '');
      p.replaceWith(codeBlock(code, true));
    });
    if ('IntersectionObserver' in window && subs.length) {
      var links = {};
      side.querySelectorAll('.d-sub a').forEach(function (a) {
        links[a.dataset.for] = a;
      });
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            Object.values(links).forEach(function (a) {
              a.classList.remove('on');
            });
            if (links[e.target.id]) links[e.target.id].classList.add('on');
          }
        });
      }, {
        rootMargin: '0px 0px -70% 0px'
      });
      subs.forEach(function (s) {
        io.observe(s);
      });
    }
  }
  window.DOCS = {
    NS: NS,
    hl: hl,
    esc: esc,
    el: el,
    copy: copy,
    codeBlock: codeBlock,
    example: example,
    init: init
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/docs.js", error: String((e && e.message) || e) }); }

// site/patterns.js
try { (() => {
window.DOC_PATTERNS = [{
  id: 'section-grid',
  title: 'Section with project grid',
  desc: 'A noun as the heading, an "All …" link that names its destination, and cards only because projects are discrete objects. Card gap 20px, head to content 16px.',
  code: `
<section>
  <SectionHead title="Work" moreLabel="All work projects" moreHref="/work/" />
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
    <ProjectCard title="IATI quality checker" year="2025" summary="Runs the quality checks IATI's own validator doesn't make." href="#" />
    <ProjectCard title="HDX pipeline" year="2024" summary="Pulls humanitarian datasets into one clean, versioned table." href="#" />
    <ProjectCard title="Chart styler for Excel" year="2024" summary="Applies the style guide to any chart in one click." href="#" />
  </div>
</section>`
}, {
  id: 'filtered-list',
  title: 'Filtered list with empty state',
  desc: 'Underline tabs above a ruled list. A filter with no matches says so plainly and offers the way back.',
  code: `
function Example() {
  const posts = [
    { title: "Checking IATI data before it reaches the dashboard", date: "14 October 2026", tags: ["IATI"] },
    { title: "A palette that survives colour blindness", date: "2 September 2026", tags: ["Charts"] },
    { title: "Why every chart title is a sentence", date: "18 June 2026", tags: ["Charts"] },
  ];
  const [tag, setTag] = React.useState("All");
  const shown = tag === "All" ? posts : posts.filter((p) => p.tags.includes(tag));
  return (
    <div style={{ display: "grid", gap: "var(--gap-group)" }}>
      <ChipRow label="Filter posts">
        {["All", "Charts", "IATI", "Power BI"].map((t) => (
          <Chip key={t} pressed={tag === t} onClick={() => setTag(t)}>{t}</Chip>
        ))}
      </ChipRow>
      {shown.length ? (
        <PostList posts={shown} />
      ) : (
        <EmptyState action={<Button variant="quiet" size="sm" onClick={() => setTag("All")}>Show all posts</Button>}>
          No posts tagged {tag} yet.
        </EmptyState>
      )}
    </div>
  );
}`
}, {
  id: 'key-figures',
  title: 'Key figures',
  desc: 'One number per card, with units, period and a perspective line. Teal top rule by default; coral for the one figure that needs attention.',
  code: `
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
  <BigNumber label="Security incidents, March 2026" value="112" context="+24% on the 12-month average" trend="up" accent="accent" />
  <BigNumber label="Organisations reporting, Q1 2026" value="38" context="−3 on Q4 2025" trend="down" />
  <BigNumber label="Activities checked" value="1,284" context="About 1 in 6 with a missing end date" />
</div>`
}, {
  id: 'guide-rule',
  title: 'Style-guide rule',
  desc: 'How a principle reads in the style guide: the rule as a callout, then the do and avoid lists, then the reasoning.',
  code: `
<div style={{ display: "grid", gap: "var(--gap-group)", maxWidth: "var(--measure)" }}>
  <Callout kind="rule">Use one colour, plus grey.</Callout>
  <RulePair
    doItems={["Teal for the series that carries the message", "Steel for everything else"]}
    avoidItems={["A different colour per bar", "Colour as decoration"]}
  />
  <Callout kind="why">Grey keeps context visible without competing with the message.</Callout>
</div>`
}, {
  id: 'post-footer',
  title: 'Post footer',
  desc: 'Mono metadata and legend-style tags close a post, then the box that links it to its project.',
  code: `
<div style={{ display: "grid", gap: "var(--gap-related)", maxWidth: "var(--measure)" }}>
  <Eyebrow>Published 14 October 2026</Eyebrow>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px" }}>
    <Tag>IATI</Tag>
    <Tag>Data quality</Tag>
  </div>
  <ProjectNote title="IATI quality checker" summary="Runs the quality checks IATI's own validator doesn't make." href="#" />
</div>`
}, {
  id: 'toolbar-error',
  title: 'Toolbar with validation error',
  desc: 'Compact selects and one primary action. When the input is wrong, the alert names the exact value.',
  code: `
function Example() {
  const [palette, setPalette] = React.useState("Data colours");
  return (
    <div style={{ display: "grid", gap: "var(--gap-group)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
        <Select label="Palette" options={["Brand colours", "Data colours", "Neutral shades"]} value={palette} onChange={setPalette} />
        <Select label="Steps" options={["3", "5", "7"]} value="5" />
        <Button>Export CSS</Button>
        <Button variant="outline">Reset</Button>
      </div>
      <Alert title="Can't export this palette" items={[\`Section "Data colours": no colour called "Corall".\`]} />
    </div>
  );
}`
}];
(function () {
  var main = document.getElementById('list');
  DOC_PATTERNS.forEach(function (p) {
    var s = DOCS.el('section', 'd-sec');
    s.id = p.id;
    s.dataset.nav = p.title;
    s.innerHTML = '<h2>' + DOCS.esc(p.title) + '</h2><p class="d-desc">' + DOCS.esc(p.desc) + '</p>';
    s.appendChild(DOCS.example({
      code: p.code,
      layout: 'block'
    }));
    main.appendChild(s);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/patterns.js", error: String((e && e.message) || e) }); }

// site/tokens.js
try { (() => {
(function () {
  var esc = DOCS.esc;
  function parse(t, file, all) {
    var ruleRe = /([^{}]+)\{([^{}]*)\}/g,
      m;
    while (m = ruleRe.exec(t)) {
      var sel = m[1].replace(/\/\*[\s\S]*?\*\//g, '').trim();
      var group = '',
        re = /\/\*\s*([\s\S]*?)\s*\*\/|(--[\w-]+)\s*:\s*([^;]+);/g,
        x;
      while (x = re.exec(m[2])) {
        if (x[2] === undefined) {
          if (!/^@kind/.test(x[1])) group = x[1];
        } else all.push({
          file: file,
          sel: sel,
          group: group,
          name: x[2],
          value: x[3].trim()
        });
      }
    }
  }
  function copyName(e) {
    var n = e.target.closest('[data-tok]');
    if (n) DOCS.copy('var(' + n.dataset.tok + ')');
  }
  function swatches(list) {
    return '<div class="sw-grid">' + list.map(function (t) {
      return '<button class="sw" type="button" data-tok="' + t.name + '" title="Copy var(' + t.name + ')"><i style="background:var(' + t.name + ')"></i><b>' + t.name + '</b><span>' + esc(t.value) + '</span></button>';
    }).join('') + '</div>';
  }
  function note(g) {
    var i = g.indexOf('. ');
    return i > 0 ? '<p class="d-note">' + esc(g.slice(i + 2)) + '</p>' : '';
  }
  function head(g) {
    var s = g.split(/[,.]/)[0];
    return '<h3>' + esc(s) + '</h3>';
  }
  function table(rows, cols) {
    return '<table class="tt"><tbody>' + rows.map(function (r) {
      return '<tr><td data-tok="' + r.name + '">' + r.name + '</td><td class="v">' + esc(r.value) + '</td>' + (cols ? '<td>' + cols(r) + '</td>' : '<td></td>') + '</tr>';
    }).join('') + '</tbody></table>';
  }
  function render(all) {
    var pal = all.filter(function (t) {
      return t.file === 'colors' && t.sel === ':root';
    });
    var groups = {};
    pal.forEach(function (t) {
      (groups[t.group] = groups[t.group] || []).push(t);
    });
    var col = '';
    Object.keys(groups).forEach(function (g) {
      if (/^Ramps/.test(g)) return;
      col += head(g) + note(g) + swatches(groups[g]);
    });
    document.getElementById('t-colour').innerHTML = col;
    var ramps = {};
    Object.keys(groups).filter(function (g) {
      return /^Ramps/.test(g);
    }).forEach(function (g) {
      groups[g].forEach(function (t) {
        var m = t.name.match(/^--(\w+)-(\d+)$/);
        if (m) (ramps[m[1]] = ramps[m[1]] || []).push(t);
      });
    });
    var r = '<div class="ramps"><div class="ramp-idx"><span></span>' + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) {
      return '<span>' + n + '</span>';
    }).join('') + '</div>';
    Object.keys(ramps).forEach(function (k) {
      r += '<div class="ramp"><span>' + k + '</span>' + ramps[k].map(function (t) {
        return '<button type="button" data-tok="' + t.name + '" title="' + t.name + ' ' + t.value + '" style="background:var(' + t.name + ')"></button>';
      }).join('') + '</div>';
    });
    document.getElementById('t-ramps').innerHTML = r + '</div>';
    var light = all.filter(function (t) {
        return t.file === 'colors' && /light/.test(t.sel);
      }),
      dark = {};
    all.forEach(function (t) {
      if (t.file === 'colors' && /dark/.test(t.sel)) dark[t.name] = t.value;
    });
    var s = '<table class="props"><thead><tr><th>Token</th><th>Light</th><th>Dark</th></tr></thead><tbody>' + light.map(function (t) {
      var d = dark[t.name];
      return '<tr><td data-tok="' + t.name + '" style="cursor:pointer">' + t.name + '</td><td><span class="chip" data-theme="light"><i style="background:var(' + t.name + ')"></i>' + esc(t.value) + '</span></td><td>' + (d ? '<span class="chip" data-theme="dark"><i style="background:var(' + t.name + ')"></i>' + esc(d) + '</span>' : '<span class="d-file">same as light</span>') + '</td></tr>';
    }).join('') + '</tbody></table>';
    document.getElementById('t-semantic').innerHTML = s;
    var ty = all.filter(function (t) {
      return t.file === 'typography';
    });
    var by = function (re) {
      return ty.filter(function (t) {
        return re.test(t.name);
      });
    };
    var fam = by(/^--font-(serif|sans|mono)$/).map(function (t) {
      return '<div style="padding:14px 0;border-bottom:1px solid var(--line)"><p class="d-file" data-tok="' + t.name + '" style="margin:0 0 4px;cursor:pointer">' + t.name + '</p><p style="margin:0;font:500 28px/1.25 var(' + t.name + ')">Data work is people work.</p></div>';
    }).join('');
    var tt = '<h3>Families</h3><div style="border-top:1px solid var(--line)">' + fam + '</div>' + '<h3>Aliases</h3>' + table(by(/^--font-(display|body|meta)$/));
    tt += '<h3>Sizes</h3>' + table(by(/^--fs-/), function (t) {
      return '<div class="sample" style="font-size:var(' + t.name + ');line-height:1.2;font-family:' + (/hero|h1|h2/.test(t.name) ? 'var(--font-serif)' : /meta|micro/.test(t.name) ? 'var(--font-mono)' : 'var(--font-sans)') + '">Incidents fell by a third</div>';
    });
    tt += '<h3>Line height, tracking, weight, measure</h3>' + table(by(/^--(lh|tracking|fw|measure)/));
    document.getElementById('t-type').innerHTML = tt;
    var sp = all.filter(function (t) {
      return t.file === 'spacing';
    });
    var bar = function (t) {
      return /^\d+px$/.test(t.value) ? '<div class="bar" style="width:' + t.value + '"></div>' : '';
    };
    var sh = '<h3>Scale</h3>' + table(sp.filter(function (t) {
      return /^--space-/.test(t.name);
    }), bar) + '<h3>Gaps</h3>' + table(sp.filter(function (t) {
      return /^--gap-/.test(t.name);
    }), bar) + '<h3>Layout</h3>' + table(sp.filter(function (t) {
      return /^--(sidebar|main)/.test(t.name);
    }));
    document.getElementById('t-spacing').innerHTML = sh;
    var rad = sp.filter(function (t) {
        return /^--radius/.test(t.name);
      }),
      oth = sp.filter(function (t) {
        return /^--(hairline|focus|ease|dur)/.test(t.name);
      });
    document.getElementById('t-shape').innerHTML = '<h3>Radii</h3>' + table(rad, function (t) {
      return '<div class="rad" style="border-radius:var(' + t.name + ')"></div>';
    }) + '<h3>Effects &amp; timing</h3>' + table(oth);
    document.getElementById('main').addEventListener('click', copyName);
  }
  Promise.all(['colors', 'typography', 'spacing'].map(function (f) {
    return fetch('../tokens/' + f + '.css').then(function (r) {
      return r.text();
    }).then(function (t) {
      return [f, t];
    });
  })).then(function (res) {
    var all = [];
    res.forEach(function (x) {
      parse(x[1], x[0], all);
    });
    render(all);
  }).catch(function (e) {
    document.getElementById('t-colour').innerHTML = '<p class="ex-err">Could not read tokens/*.css: ' + esc(e.message) + '. Serve the folder over http (GitHub Pages does).</p>';
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/tokens.js", error: String((e && e.message) || e) }); }

// ui_kits/style-guide/DocsNav.jsx
try { (() => {
function DocsNav({
  page,
  go
}) {
  const items = [['home', 'Home'], ['principles', 'Principles'], ['planning', 'Planning'], ['colour', 'Colour'], ['typography', 'Typography'], ['charts', 'Charts'], ['maps', 'Maps'], ['your-own', 'Make your own'], ['background', 'Background']];
  const live = ['home', 'principles', 'colour'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 248,
      flex: 'none',
      background: 'var(--sidebar)',
      borderRight: '1px solid var(--sidebar-line)',
      padding: '28px 0',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 20px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--link)'
    }
  }, "Style guide"), items.map(([id, l]) => {
    const a = page === id;
    const ok = live.includes(id);
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        ok && go(id);
      },
      "aria-current": a ? 'page' : undefined,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 24px',
        fontSize: 14,
        textDecoration: 'none',
        color: a ? 'var(--link)' : ok ? 'var(--ink)' : 'var(--muted)',
        fontWeight: a ? 600 : 400,
        boxShadow: a ? 'inset 3px 0 0 var(--accent)' : 'none',
        cursor: ok ? 'pointer' : 'default'
      }
    }, l, !ok && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '11px var(--font-mono)',
        color: 'var(--line-strong)'
      }
    }, "not in kit"));
  }));
}
window.DocsNav = DocsNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/style-guide/DocsNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/style-guide/GuideHome.jsx
try { (() => {
function GuideHome({
  go
}) {
  const {
    Button,
    Callout
  } = window.RENDataDesignSystem_372f57;
  const short = [['One visual, one message.', ' Write the message as the title: "Incidents fell by a third after the ceasefire", not "Incidents per month".'], ['Put what, where and when in the subtitle:', ' units, categories, period and place.'], ['Pick the simplest form that shows the message.', ' Use a big number for one fact, a horizontal bar chart for comparing categories, and a line chart for a trend. Use a map only when location is the point.'], ['Bars start at zero.', ' So do areas. Lines may start elsewhere if the axis says so clearly.'], ['Label directly.', ' Put labels on the data, not in a legend, wherever they fit.'], ['Use colour on purpose.', ' Use one colour, plus grey for everything that isn\'t the story.'], ['Never use colour alone.', ''], ['Remove what doesn\'t help.', ' No borders, 3D, shadows or heavy gridlines.'], ['Always name the source.', ''], ['Check it at the size people will see it,', ' on screen and in print.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-hero)',
      lineHeight: 1.05,
      margin: '0 0 18px'
    }
  }, "Data visualisation style guide"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      fontSize: 18,
      marginBottom: 24
    }
  }, "How I make charts and maps: the rules I follow, the colours and type I use, and why. Written so you can follow it as is, or use it as a starting point for your own guide."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('principles')
  }, "Start with the principles"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('colour')
  }, "Open the colour picker")), /*#__PURE__*/React.createElement("h2", null, "Three kinds of notes recur throughout"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    kind: "rule"
  }, "A firm rule. Break it only when you can explain why."), /*#__PURE__*/React.createElement(Callout, {
    kind: "adapt"
  }, "What to change, and where to start, if you are building a guide for your own brand."), /*#__PURE__*/React.createElement(Callout, {
    kind: "why"
  }, "A short reason, with a link to the background reading.")), /*#__PURE__*/React.createElement("h2", null, "The short version"), /*#__PURE__*/React.createElement("ol", {
    style: {
      paddingLeft: 22,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 'var(--measure)'
    }
  }, short.map(([b, t], i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("strong", null, b), t))));
}
window.GuideHome = GuideHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/style-guide/GuideHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/style-guide/Palette.jsx
try { (() => {
function Palette() {
  const {
    Swatch,
    Select,
    Button,
    Alert
  } = window.RENDataDesignSystem_372f57;
  const P = window.REN_PALETTE;
  const names = Object.keys(P.ramps);
  const [sc, setSc] = React.useState('Teal');
  const [sn, setSn] = React.useState('7');
  const [l, setL] = React.useState('Cherry');
  const [r, setR] = React.useState('Teal');
  const [dn, setDn] = React.useState('9');
  const [copied, setCopied] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const pick = (ramp, n) => {
    n = Math.max(1, Math.min(ramp.length, n));
    if (n === 1) return [ramp.length - 1];
    return Array.from({
      length: n
    }, (_, k) => Math.round(k * (ramp.length - 1) / (n - 1)));
  };
  const seq = pick(P.ramps[sc], +sn).map(i => [sc + ' ' + (i + 1), P.ramps[sc][i]]);
  const per = (+dn - 1) / 2;
  const div = [...pick(P.ramps[l], per).reverse().map(i => [l + ' ' + (i + 1), P.ramps[l][i]]), ['Neutral', '#F9F9F9'], ...pick(P.ramps[r], per).map(i => [r + ' ' + (i + 1), P.ramps[r][i]])];
  const H2 = ({
    children
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      margin: '40px 0 0',
      paddingTop: 16,
      borderTop: '1px solid var(--line-strong)'
    }
  }, children);
  const Row = ({
    list,
    cols
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + (cols || list.length) + ',minmax(0,1fr))',
      gap: 8,
      marginTop: 12
    }
  }, list.map(([n, h]) => /*#__PURE__*/React.createElement(Swatch, {
    key: n + h,
    name: n,
    hex: h,
    ink: window.inkFor(h),
    height: 92
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0
    }
  }, "REN colours"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Palette",
    options: ['REN', 'ROOS', 'Rijk'],
    value: "REN"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  }, copied ? 'CSS variables copied' : 'Copy as CSS variables'))), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      fontSize: 15,
      marginTop: 8
    }
  }, "Brand colours for text and page elements; data colours for bars, lines, areas and map fills. Click a swatch to copy its hex."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setBroken(!broken);
    }
  }, broken ? 'Hide' : 'Show', " the config-error state")), broken && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    title: "ren.json has problems:",
    items: ['Section "Data colours" › "Contrasting order": no colour called "Corall".']
  })), /*#__PURE__*/React.createElement(H2, null, "Brand colours"), /*#__PURE__*/React.createElement(Row, {
    list: P.brand,
    cols: 6
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      margin: '24px 0 0'
    }
  }, "Neutral shades"), /*#__PURE__*/React.createElement(Row, {
    list: broken ? [...P.neutral, ['Corall', null]] : P.neutral,
    cols: 6
  }), /*#__PURE__*/React.createElement(H2, null, "Data colours \xB7 contrasting order"), /*#__PURE__*/React.createElement(Row, {
    list: P.contrasting
  }), /*#__PURE__*/React.createElement(H2, null, "Sequential"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Colour",
    options: names,
    value: sc,
    onChange: setSc
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Steps",
    options: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
    value: sn,
    onChange: setSn
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '600 14px var(--font-sans)',
      margin: '16px 0 0'
    }
  }, sc, " \xB7 ", sn, " steps"), /*#__PURE__*/React.createElement(Row, {
    list: seq
  }), /*#__PURE__*/React.createElement(H2, null, "Diverging"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Colour 1",
    options: names,
    value: l,
    onChange: setL
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Colour 2",
    options: names,
    value: r,
    onChange: setR
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Steps",
    options: ['3', '5', '7', '9', '11'],
    value: dn,
    onChange: setDn
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '600 14px var(--font-sans)',
      margin: '16px 0 0'
    }
  }, l, " \u2013 ", r, " \xB7 ", dn, " steps"), /*#__PURE__*/React.createElement(Row, {
    list: div
  }));
}
window.Palette = Palette;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/style-guide/Palette.jsx", error: String((e && e.message) || e) }); }

// ui_kits/style-guide/Principles.jsx
try { (() => {
function Principles() {
  const {
    Callout,
    RulePair,
    BigNumber
  } = window.RENDataDesignSystem_372f57;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Principles"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginBottom: 32
    }
  }, "Match the effort a visual asks of the reader to how much its message is worth."), /*#__PURE__*/React.createElement("h2", null, "Purpose"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)'
    }
  }, "A visual must make a point that matters to the reader and that isn't obvious without it. It should help the reader reason, interpret or decide."), /*#__PURE__*/React.createElement(Callout, {
    kind: "rule"
  }, "State the main message in the title. Every other element supports that message."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(RulePair, {
    doItems: ['Write titles as a takeaway: "Access improved in all districts but one".', 'Highlight the key trend or contrast with an annotation.', 'Connect the visual to the surrounding text, so it answers the question the text raises.', 'Map only when the spatial pattern is the message.'],
    avoidItems: ['Showing every metric "for completeness" and leaving no message.', 'Adding a chart for decoration when one sentence would do.', 'Mapping every region without saying why the regions matter.', 'Legends with more categories than there are data points.']
  })), /*#__PURE__*/React.createElement("h2", null, "Structure"), /*#__PURE__*/React.createElement(Callout, {
    kind: "rule"
  }, "Bars and areas start at zero. Keep units consistent, and base every trend line and error bar on real calculations."), /*#__PURE__*/React.createElement(Callout, {
    kind: "why"
  }, "Whether a line chart's y-axis must start at zero is a real debate. See ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Axes and baselines"), "."), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 40
    }
  }, "Big numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(BigNumber, {
    label: "Security incidents, March 2026",
    value: "112",
    trend: "up",
    context: "+24% on the 12-month average"
  }), /*#__PURE__*/React.createElement(BigNumber, {
    label: "Missions denied or delayed",
    value: "27%",
    context: "About 1 in every 4 planned missions"
  }), /*#__PURE__*/React.createElement(BigNumber, {
    label: "Days without recorded clashes",
    value: "23",
    context: "Longest lull in two years"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '12px var(--font-mono)',
      color: 'var(--muted)',
      marginTop: 40
    }
  }, "Adapted from Wilke (2019), Fundamentals of Data Visualization."));
}
window.Principles = Principles;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/style-guide/Principles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/style-guide/palette.js
try { (() => {
window.REN_PALETTE = {
  brand: [['Primary Teal', '#1C6758'], ['Dark Teal', '#335252'], ['Black', '#191919'], ['Light Grey', '#F3F3F3']],
  neutral: [['Platinum', '#ECECEC'], ['Steel', '#B8B8B8']],
  contrasting: [['Teal', '#338877'], ['Jasmine', '#FFDD77'], ['Baltic', '#2B5B9B'], ['Coral', '#FF9779'], ['Sky', '#88CCFF'], ['Cherry', '#BC3C4C'], ['Blush', '#FFBBDD'], ['Violet', '#8833AA']],
  ramps: {
    Teal: ["#EBF3F1", "#D6E7E4", "#ADCFC9", "#85B8AD", "#5CA092", "#338877", "#296D5F", "#1F5247", "#143630", "#0A1B18"],
    Jasmine: ["#FFFCF1", "#FFF8E4", "#FFF1C9", "#FFEBAD", "#FFE492", "#FFDD77", "#CCB15F", "#998547", "#665830", "#332C18"],
    Baltic: ["#EAEFF5", "#D5DEEB", "#AABDD7", "#809DC3", "#557CAF", "#2B5B9B", "#22497C", "#1A375D", "#11243E", "#09121F"],
    Coral: ["#FFF5F2", "#FFEAE4", "#FFD5C9", "#FFC1AF", "#FFAC94", "#FF9779", "#CC7961", "#995B49", "#663C30", "#331E18"],
    Sky: ["#F3FAFF", "#E7F5FF", "#CFEBFF", "#B8E0FF", "#A0D6FF", "#88CCFF", "#6DA3CC", "#527A99", "#365266", "#1B2933"],
    Cherry: ["#F8ECED", "#F2D8DB", "#E4B1B7", "#D78A94", "#C96370", "#BC3C4C", "#96303D", "#71242E", "#4B181E", "#260C0F"],
    Blush: ["#FFF8FC", "#FFF1F8", "#FFE4F1", "#FFD6EB", "#FFC9E4", "#FFBBDD", "#CC96B1", "#997085", "#664B58", "#33252C"],
    Violet: ["#F3EBF7", "#E7D6EE", "#CFADDD", "#B885CC", "#A05CBB", "#8833AA", "#6D2988", "#521F66", "#361444", "#1B0A22"]
  }
};
window.inkFor = function (h) {
  const c = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255).map(s => s <= .03928 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4));
  const L = .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
  return 1.05 / (L + .05) > (L + .05) / (0.0098 + .05) ? '#FFFFFF' : '#191919';
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/style-guide/palette.js", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function About() {
  const {
    Button
  } = window.RENDataDesignSystem_372f57;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 200px',
      gap: '32px 56px',
      alignItems: 'start'
    },
    className: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("h1", null, "About"), /*#__PURE__*/React.createElement("p", null, "I build data pipelines and quality checks for humanitarian and aid data, chart styling tools, and the occasional fun side project."), /*#__PURE__*/React.createElement("p", null, "I believe data-driven work should be data supported work. I help people transform messy or unclear data into actionable insights to support deliberate decision making."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    href: "mailto:data@renzeterpstra.com"
  }, "Let's talk")), /*#__PURE__*/React.createElement("h2", null, "Elsewhere"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/RenRMT"
  }, "GitHub")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/renzeterpstra/"
  }, "LinkedIn")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "RSS feed")))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '8px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/avatar.png",
    alt: "Illustrated portrait of Renze",
    style: {
      width: 120,
      height: 120,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'italic 18px var(--font-serif)',
      color: 'var(--muted)'
    }
  }, "\u2014 Renze Terpstra")));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
function Blog({
  openPost
}) {
  const {
    Chip,
    ChipRow,
    PostList
  } = window.RENDataDesignSystem_372f57;
  const D = window.REN_DATA;
  const tags = [...new Set(D.posts.flatMap(p => p.tags || []))];
  const [f, setF] = React.useState('');
  const shown = D.posts.filter(p => !f || (p.tags || []).includes(f));
  const years = [...new Set(shown.map(p => p.year))];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Blog"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Write-ups of projects, tools and things learned along the way.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(ChipRow, null, /*#__PURE__*/React.createElement(Chip, {
    pressed: !f,
    onClick: () => setF('')
  }, "All"), tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    pressed: f === t,
    onClick: () => setF(t)
  }, t)))), years.map(y => /*#__PURE__*/React.createElement("section", {
    key: y,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 14px var(--font-mono)',
      letterSpacing: '.04em',
      color: 'var(--muted)',
      margin: '0 0 4px'
    }
  }, y), /*#__PURE__*/React.createElement(PostList, {
    posts: shown.filter(p => p.year === y),
    onOpen: p => openPost(p, D.posts.indexOf(p))
  }))), !shown.length && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)'
    }
  }, "No posts with this tag."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '12px var(--font-mono)',
      color: 'var(--muted)',
      marginTop: 48
    }
  }, D.sampleNote));
}
window.Blog = Blog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go,
  openPost
}) {
  const {
    Eyebrow,
    Button,
    SectionHead,
    ProjectCard,
    PostList
  } = window.RENDataDesignSystem_372f57;
  const D = window.REN_DATA;
  const feat = t => D.projects.filter(p => p.track === t && p.featured).sort((a, b) => b.started.localeCompare(a.started)).slice(0, 3);
  const now = D.projects.find(p => p.slug === 'iati-scout');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,640px) minmax(180px,220px)',
      gap: '32px 56px',
      alignItems: 'end',
      marginBottom: 72
    },
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Hello"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-hero)',
      lineHeight: 1.05,
      margin: 0
    }
  }, "I build tools that make aid data work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      margin: 0,
      maxWidth: '52ch'
    }
  }, "Data pipelines and quality checks for humanitarian and aid data, chart styling tools, and a few side projects."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('work')
  }, "Work"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('play')
  }, "Play"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderTop: '1px solid var(--line-strong)',
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    mark: true
  }, "Now"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55
    }
  }, "Writing the duplicate-transaction check for ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('work');
    }
  }, now.title), "."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px var(--font-mono)',
      color: 'var(--muted)'
    }
  }, "since Sep 2026"))), ['work', 'play'].map(t => /*#__PURE__*/React.createElement("section", {
    key: t,
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: t[0].toUpperCase() + t.slice(1),
    moreLabel: 'All ' + t + ' projects',
    onMore: () => go(t)
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, feat(t).map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    title: p.title,
    year: p.started.slice(0, 4),
    summary: p.summary,
    href: "#",
    onClick: e => e.preventDefault()
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Latest writing",
    moreLabel: "All posts",
    onMore: () => go('blog')
  }), /*#__PURE__*/React.createElement(PostList, {
    posts: D.posts.slice(0, 3),
    onOpen: openPost
  })));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NotFound.jsx
try { (() => {
function NotFound({
  go
}) {
  const {
    Tide,
    Eyebrow,
    Button
  } = window.RENDataDesignSystem_372f57;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Tide, null)), /*#__PURE__*/React.createElement(Eyebrow, null, "404 \xB7 Page not found"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 10
    }
  }, "This page drifted out with the tide."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginBottom: 32
    }
  }, "The link may be old, or the page has moved. It might wash up somewhere below."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('home')
  }, "Back home"), ['work', 'play', 'blog', 'about'].map(p => /*#__PURE__*/React.createElement(Button, {
    key: p,
    variant: "outline",
    onClick: () => go(p)
  }, p[0].toUpperCase() + p.slice(1)))));
}
window.NotFound = NotFound;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NotFound.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Post.jsx
try { (() => {
function Post({
  post,
  go
}) {
  const {
    Eyebrow,
    Tag,
    ProjectNote
  } = window.RENDataDesignSystem_372f57;
  const D = window.REN_DATA;
  const proj = D.projects.find(p => p.slug === post.project);
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, post.date), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 10,
      maxWidth: '22ch'
    }
  }, post.title), post.description && /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, post.description), post.tags && /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 14px',
      margin: '16px 0 0'
    }
  }, post.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("p", null, "IATI's validator tells you whether a file is well-formed. It doesn't tell you whether the numbers make sense. Last month a publisher's file passed every schema check, and ", /*#__PURE__*/React.createElement("mark", null, "412 of its 1,284 transactions were duplicates"), " from an export someone ran twice in 2023."), /*#__PURE__*/React.createElement("p", null, "So IATI Scout runs its own checks after the validator is done. These are the three that catch the most."), /*#__PURE__*/React.createElement("h2", null, "Duplicate transactions"), /*#__PURE__*/React.createElement("p", null, "Same activity, same date, same value, same provider. Sometimes that's real (two identical instalments), so the check flags rather than drops."), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, /*#__PURE__*/React.createElement("span", {
    className: "tk"
  }, "def"), " duplicates(df):", "\n", "    keys = [", /*#__PURE__*/React.createElement("span", {
    className: "ts"
  }, "\"iati_id\""), ", ", /*#__PURE__*/React.createElement("span", {
    className: "ts"
  }, "\"date\""), ", ", /*#__PURE__*/React.createElement("span", {
    className: "ts"
  }, "\"value\""), ", ", /*#__PURE__*/React.createElement("span", {
    className: "ts"
  }, "\"provider\""), "]", "\n", "    ", /*#__PURE__*/React.createElement("span", {
    className: "tc"
  }, "# keep=\"first\" so the original stays unflagged"), "\n", "    ", /*#__PURE__*/React.createElement("span", {
    className: "tk"
  }, "return"), " df[df.duplicated(keys, keep=", /*#__PURE__*/React.createElement("span", {
    className: "ts"
  }, "\"first\""), ")]")), /*#__PURE__*/React.createElement("h2", null, "Budgets that end before they start"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Check"), /*#__PURE__*/React.createElement("th", {
    className: "n"
  }, "Files"), /*#__PURE__*/React.createElement("th", {
    className: "n"
  }, "Flagged"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Duplicate transactions"), /*#__PURE__*/React.createElement("td", {
    className: "n"
  }, "37"), /*#__PURE__*/React.createElement("td", {
    className: "n"
  }, "9")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "period-end before period-start"), /*#__PURE__*/React.createElement("td", {
    className: "n"
  }, "37"), /*#__PURE__*/React.createElement("td", {
    className: "n"
  }, "4")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Unknown p-code in location"), /*#__PURE__*/React.createElement("td", {
    className: "n"
  }, "37"), /*#__PURE__*/React.createElement("td", {
    className: "n"
  }, "13")))), /*#__PURE__*/React.createElement("blockquote", null, /*#__PURE__*/React.createElement("p", null, "The file was valid. It was also wrong, and only the person who made it could tell me why.")), /*#__PURE__*/React.createElement("p", null, "That last point is the one I keep coming back to. Every flag ends with an email to a person, not a fix in a script.")), proj && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(ProjectNote, {
    title: proj.title,
    summary: proj.summary,
    href: "#"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 48,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('blog');
    }
  }, "\u2190 All posts")));
}
window.Post = Post;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Post.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Shell({
  page,
  go,
  theme,
  setTheme,
  children
}) {
  const {
    Sidebar
  } = window.RENDataDesignSystem_372f57;
  const [narrow, setNarrow] = React.useState(window.innerWidth < 860);
  React.useEffect(() => {
    const f = () => setNarrow(window.innerWidth < 860);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const items = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'work',
    label: 'Work'
  }, {
    id: 'play',
    label: 'Play'
  }, {
    id: 'blog',
    label: 'Blog'
  }, {
    id: 'about',
    label: 'About'
  }];
  const active = page === 'post' ? 'blog' : page;
  const props = {
    name: 'REN Data',
    tagline: 'Carrying aid data from messy source to actionable insight.',
    avatar: '../../assets/img/avatar.png',
    items,
    active,
    onNavigate: go,
    social: [{
      label: 'GitHub',
      href: 'https://github.com/RenRMT'
    }, {
      label: 'RSS',
      href: '#'
    }, {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/renzeterpstra/'
    }],
    theme,
    onToggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark')
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: narrow ? 'block' : 'flex',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, _extends({}, props, {
    compact: narrow
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: narrow ? '40px 20px 72px' : 'var(--main-pad)',
      maxWidth: 'var(--main-max)',
      flex: 1,
      minWidth: 0
    }
  }, children));
}
window.Shell = Shell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Track.jsx
try { (() => {
function Track({
  track
}) {
  const {
    Chip,
    ChipRow,
    ProjectCard,
    EmptyState,
    Button
  } = window.RENDataDesignSystem_372f57;
  const D = window.REN_DATA;
  const items = D.projects.filter(p => p.track === track).sort((a, b) => b.started.localeCompare(a.started));
  const tags = [...new Set(items.flatMap(p => p.tags))];
  const [f, setF] = React.useState('');
  React.useEffect(() => setF(''), [track]);
  const shown = items.filter(p => !f || p.tags.includes(f));
  const title = track === 'work' ? 'Work' : 'Play';
  const desc = track === 'work' ? 'Professional projects — data quality, pipelines and charting tools. Newest first.' : 'Personal projects — games, maps and photos. Newest first.';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, desc)), tags.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(ChipRow, null, /*#__PURE__*/React.createElement(Chip, {
    pressed: !f,
    onClick: () => setF('')
  }, "All"), tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    pressed: f === t,
    onClick: () => setF(t)
  }, t)))), shown.length ? /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    dense: true,
    showTags: true,
    title: p.title,
    year: p.started.slice(0, 4),
    summary: p.summary,
    tags: p.tags,
    href: "#",
    onClick: e => e.preventDefault()
  }))) : /*#__PURE__*/React.createElement(EmptyState, {
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      onClick: () => setF('')
    }, "Show all")
  }, "No projects here yet."));
}
window.Track = Track;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Track.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.REN_DATA = {
  projects: [{
    slug: 'iati-scout',
    title: 'IATI Scout',
    track: 'work',
    summary: "Retrieves IATI aid data for one organisation and runs the quality checks IATI's own validator doesn't make.",
    started: '2026-09',
    tags: ['Python', 'Data quality', 'IATI'],
    featured: true
  }, {
    slug: 'colour-palettes',
    title: 'Colour palettes',
    track: 'work',
    summary: 'Brand colours, data colours and ramps for several house styles, with one JSON file per palette.',
    started: '2026-10',
    tags: ['Colour', 'Data visualisation']
  }, {
    slug: 'hdx-location-data',
    title: 'HDX location data',
    track: 'work',
    summary: 'An auto-refreshing location reference — admin units, p-codes and coordinates — from HDX into Databricks and Power BI.',
    started: '2026-10',
    tags: ['Python', 'Databricks', 'Power BI']
  }, {
    slug: 'excelstarch',
    title: 'ExcelStarch',
    track: 'work',
    summary: 'A configurable Excel add-in that gives charts more sensible default styling. Started in VBA, now being ported to Office JS.',
    started: '2026-03',
    tags: ['Excel', 'VBA', 'Office JS', 'Charts'],
    featured: true
  }, {
    slug: 'style-guide',
    title: 'Data visualisation style guide',
    track: 'work',
    summary: 'A style guide for consistent, readable charts, built with Jekyll.',
    started: '2026-03',
    tags: ['Data visualisation', 'Jekyll'],
    featured: true
  }, {
    slug: 'claude-code-vba-skills',
    title: 'Claude Code VBA skills',
    track: 'work',
    summary: 'Claude Code configurations for VBA development.',
    started: '2026-03',
    tags: ['Claude Code', 'VBA']
  }, {
    slug: 'acaps',
    title: 'acaps',
    track: 'work',
    summary: 'An R wrapper for the ACAPS API.',
    started: '2023-06',
    tags: ['R', 'API']
  }, {
    slug: 'pics',
    title: 'pics',
    track: 'play',
    summary: 'A photo gallery.',
    started: '2026-10',
    tags: ['Photos', 'JavaScript'],
    featured: true
  }, {
    slug: 'openmw-lua',
    title: 'OpenMW Lua mods',
    track: 'play',
    summary: 'A collection of small Lua mods for the OpenMW engine.',
    started: '2026-08',
    tags: ['Lua', 'Morrowind', 'Games'],
    featured: true
  }, {
    slug: 'ptr-interactive-map',
    title: 'PTR interactive map',
    track: 'play',
    summary: 'A zoomable, interactive version of the Project Tamriel Rebuilt grid map.',
    started: '2026-08',
    tags: ['Maps', 'Morrowind'],
    featured: true
  }],
  posts: [{
    title: "Checks that IATI's validator doesn't make",
    date: '14 Oct 2026',
    year: '2026',
    description: 'Eleven rules I run on a publisher file before I trust it, and the three that catch the most.',
    tags: ['IATI', 'Data quality', 'Python'],
    project: 'iati-scout'
  }, {
    title: 'P-codes drift: keeping a location reference honest',
    date: '3 Oct 2026',
    year: '2026',
    description: 'Admin boundaries change more often than dashboards notice.',
    tags: ['Power BI', 'Databricks'],
    project: 'hdx-location-data'
  }, {
    title: 'Porting a VBA add-in to Office JS, six weeks in',
    date: '19 Aug 2026',
    year: '2026',
    tags: ['Office JS', 'VBA'],
    project: 'excelstarch'
  }, {
    title: 'Why my charts use one colour and a lot of grey',
    date: '27 Nov 2025',
    year: '2025',
    description: 'The highlight pattern, and the meeting that convinced me.',
    tags: ['Data visualisation']
  }],
  sampleNote: 'Posts are sample content: rendata.nl has no published posts yet.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BigNumber = __ds_scope.BigNumber;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.PostList = __ds_scope.PostList;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ProjectNote = __ds_scope.ProjectNote;

__ds_ns.RulePair = __ds_scope.RulePair;

__ds_ns.Swatch = __ds_scope.Swatch;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ChipRow = __ds_scope.ChipRow;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Tide = __ds_scope.Tide;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();
