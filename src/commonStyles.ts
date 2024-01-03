import * as stylex from "@stylexjs/stylex";
import { colors } from "./vars.stylex";

const DESKTOP = "@media screen and (min-width: 768px)";

export const container = stylex.create({
  base: {
    margin: "0 auto",
    paddingBlock: { default: 30, [DESKTOP]: 50 },
    paddingInline: { default: 40, [DESKTOP]: 80 },
  },
  purple: {
    backgroundColor: colors.lightPurple,
  },
  dark: {
    backgroundColor: colors.darkBackground,
    color: colors.darkText,
  },
  center: {
    textAlign: "center",
  },
  flex: {
    display: { default: "block", [DESKTOP]: "flex" },
    justifyContent: "center",
    gap: 60,
  },
  xlSpacing: {
    paddingBlock: { default: 50, [DESKTOP]: 100 },
    paddingInline: { default: 40, [DESKTOP]: 60 },
  },
});

export const button = stylex.create({
  base: {
    background: colors.lightBlue,
    border: "none",
    borderRadius: 8,
    color: "white",
    cursor: "pointer",
    fontSize: { default: "0.8rem", [DESKTOP]: "1rem" },
    paddingBlock: { default: 15, [DESKTOP]: 23 },
    paddingInline: { default: 20, [DESKTOP]: 35 },
    textAlign: "center",
    textDecoration: "none",
  },
  dark: {
    background: colors.dirtyBlack,
  },
  small: {
    paddingBlock: 15,
    paddingInline: 25,
  },
  xl: {
    fontSize: 20,
    paddingBlock: 23,
    paddingInline: 35,
  },
});

export const ellipsis = stylex.create({
  base: {
    position: "absolute",
    top: { default: 100, [DESKTOP]: -100 },
    left: { default: -100, [DESKTOP]: 350 },
    width: { default: 400, [DESKTOP]: 1400 },
    height: { default: 400, [DESKTOP]: 800 },
    backgroundImage:
      "radial-gradient(" +
      [
        "57.58% 57.58% at 48.79% 42.42%",
        "rgba(24, 180, 244, 0.5) 0%",
        "rgba(46, 55, 114, 0) 63.22%",
      ].join(", ") +
      ")",
    transform: "rotate(5deg)",
    opacity: 0.5,
    zIndex: -1,
  },
  purple: {
    top: { default: 1350, [DESKTOP]: 1300 },
    left: { default: -100, [DESKTOP]: -200 },
    backgroundImage:
      "radial-gradient(" +
      [
        "50% 50% at 50% 50%",
        "rgba(172, 127, 244, 0.5) 0%",
        "rgba(21, 25, 52, 0) 100%",
      ].join(", ") +
      ")",
    transform: "rotate(-5deg)",
  },
});

export const heading = stylex.create({
  hightlight: {
    color: "red", //colors.lightBlue,
  },
  bold: {
    fontWeight: "bold",
  },
});

export const icon = stylex.create({
  base: {
    "::before": {
      width: 18,
      height: 18,
      content: "",
      display: "inline-block",
      marginRight: 20,
      position: "relative",
      top: 2,
    },
  },
  cli: {
    "::before": {
      backgroundImage: `url("data:image/svg+xml,%3Csvg fill='%23ffffff' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M122.499 124.87646a4.00053 4.00053 0 0 1 0 6.24708l-40 32a4.0002 4.0002 0 0 1-4.998-6.24708L113.59668 128 77.501 99.12354a4.0002 4.0002 0 0 1 4.998-6.24708ZM175.99414 156h-40a4 4 0 0 0 0 8h40a4 4 0 1 0 0-8ZM228 56.48535v143.0293A12.49909 12.49909 0 0 1 215.51465 212H40.48535A12.49909 12.49909 0 0 1 28 199.51465V56.48535A12.49909 12.49909 0 0 1 40.48535 44h175.0293A12.49909 12.49909 0 0 1 228 56.48535Zm-8 0A4.49023 4.49023 0 0 0 215.51465 52H40.48535A4.49023 4.49023 0 0 0 36 56.48535v143.0293A4.49023 4.49023 0 0 0 40.48535 204h175.0293A4.49023 4.49023 0 0 0 220 199.51465Z'/%3E%3C/svg%3E")`,
    },
  },
  apps: {
    "::before": {
      backgroundImage: `url("data:image/svg+xml,%3Csvg fill='%23ffffff' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M216 44.00586H40a12.01375 12.01375 0 0 0-12 12v144a12.01375 12.01375 0 0 0 12 12H216a12.01375 12.01375 0 0 0 12-12v-144A12.01375 12.01375 0 0 0 216 44.00586Zm4 156a4.00458 4.00458 0 0 1-4 4H40a4.00458 4.00458 0 0 1-4-4v-144a4.00458 4.00458 0 0 1 4-4H216a4.00458 4.00458 0 0 1 4 4Zm-144-116a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 76 84.00586Zm40 0a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 116 84.00586Z'/%3E%3C/svg%3E")`,
    },
  },
  community: {
    "::before": {
      backgroundImage: `url("data:image/svg+xml,%3Csvg fill='%23ffffff' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M246.40381 143.19434a4.00061 4.00061 0 0 1-5.60108-.7959A55.57857 55.57857 0 0 0 196 120a4 4 0 0 1 0-8 28 28 0 1 0-27.50732-33.26074 4.00013 4.00013 0 0 1-7.85987-1.49219 36.00191 36.00191 0 1 1 54.06494 37.50513 63.58068 63.58068 0 0 1 32.50147 22.84155A3.99993 3.99993 0 0 1 246.40381 143.19434Zm-57.24268 71.05273a3.9998 3.9998 0 1 1-7.1914 3.50391 60.02582 60.02582 0 0 0-107.93946 0 3.9998 3.9998 0 1 1-7.1914-3.50391 67.56008 67.56008 0 0 1 40.90625-35.20581 44 44 0 1 1 40.50976 0A67.56139 67.56139 0 0 1 189.16113 214.24707ZM128 176a36 36 0 1 0-36-36A36.04061 36.04061 0 0 0 128 176ZM60 112A28 28 0 1 1 87.50732 78.73828a3.99989 3.99989 0 1 0 7.85938-1.49219A36.00177 36.00177 0 1 0 41.30225 114.7522 63.5829 63.5829 0 0 0 8.79883 137.5957a4 4 0 1 0 6.39648 4.80469A55.58072 55.58072 0 0 1 60 120a4 4 0 0 0 0-8Z'/%3E%3C/svg%3E")`,
    },
  },
});

const sm = "@media (min-width: 640px) and (max-width: 767.9px)";
const md = "@media (min-width: 768px) and (max-width: 1023.9px)";
const lg = "@media (min-width: 1024px) and (max-width: 1279.9px)";
const xl = "@media (min-width: 1280px) and (max-width: 1535.9px)";
const xxl = "@media (min-width: 1536px)";

export const hyroglyphs = stylex.create({
  "💪": { diplay: "flex", alignItems: "center", justifyContent: "center" },
  "↔️": { diplay: "flex", alignItems: "center" },
  "↕️": { diplay: "flex", flexDirection: "column", justifyContent: "center" },
  "🙏": { justifyContent: "center" },
  "🍆": { flexGrow: 1 },
  "✋": { gap: 4 },
  "🖐️": { gap: 8 },
  "🖖": { gap: 12 },
  "🎯": { alignItems: "center" },
  "⬜️": { backgroundColor: "rgb(249, 250, 251)" },
  "⬛️": { backgroundColor: "rgb(17, 24, 39)" },
  "⭕️": { borderRadius: "50%" },
  "🙈": { display: "none" },
  "❶": { padding: 2 },
  "❷": { padding: 4 },
  "❸": { padding: 8 },
  "␣": { justifyContent: "space-between" },
  "🔳": { color: "rgb(17, 24, 39)" },
  "⑴": { fontSize: "0.875rem", lineHeight: "1.25rem" },
  "⑵": { fontSize: "1.125rem", lineHeight: "1.75rem" },
  "⑶": { fontSize: "1.25rem", lineHeight: "1.75rem" },
  "⑷": { fontSize: "1.5rem", lineHeight: "2rem" },
  "🫙": {
    maxWidth: {
      default: "100%",
      [sm]: 640,
      [md]: 768,
      [lg]: 1024,
      [xl]: 1280,
      [xxl]: 1536,
    },
  },
  "▢": { borderRadius: "0.25rem" },
  "🥉": {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  "👈": { alignSelf: "start", justifySelf: "start" },
  "👉": { alignSelf: "end", justifySelf: "end" },
  "👆": { alignSelf: "start", justifySelf: "start" },
  "👇": { alignSelf: "end", justifySelf: "end" },
  "🍑": { width: "100%" },
  "◻️": { color: "rgb(249, 250, 251)" },
});
