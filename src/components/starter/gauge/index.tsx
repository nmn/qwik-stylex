import { component$ } from "@builder.io/qwik";
import { create, props } from "@stylexjs/stylex";
import spread from "~/utils/spread";

export default component$(({ value = 50 }: { value?: number }) => {
  const safeValue = value < 0 || value > 100 ? 50 : value;

  return (
    <div {...spread(props(s.wrapper))}>
      <svg viewBox="0 0 120 120" {...spread(props(s.gauge))}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#18B6F6" />
            <stop offset="1000%" stop-color="#AC7FF4" />
          </linearGradient>
        </defs>

        <circle
          r="56"
          cx="60"
          cy="60"
          stroke-width="8"
          style="fill: #000; stroke: #0000"
        ></circle>

        <circle
          r="56"
          cx="60"
          cy="60"
          stroke-width="8"
          style={`transform: rotate(-87.9537deg); stroke-dasharray: ${
            safeValue * 3.51
          }, 351.858; fill:none; transform-origin:50% 50%; stroke-linecap:round; stroke:url(#gradient)`}
        ></circle>
      </svg>
      <span {...spread(props(s.value))}>{safeValue}</span>
    </div>
  );
});

const DESKTOP = "@media screen and (min-width: 768px)";

const s = create({
  wrapper: {
    position: "relative",
  },
  gauge: {
    width: { default: 160, [DESKTOP]: 400 },
  },
  value: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: { default: "3rem", [DESKTOP]: "7rem" },
    width: 200,
    textAlign: "center",
  },
});
