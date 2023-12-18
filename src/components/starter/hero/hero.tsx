import { component$ } from "@builder.io/qwik";
import ImgThunder from "~/media/thunder.png?jsx";

import { create, props } from "@stylexjs/stylex";
import { button, container, heading } from "~/commonStyles";
import spread from "~/utils/spread";

export default component$(() => {
  return (
    <div {...spread(props(container.base, s.hero))}>
      <ImgThunder {...spread(props(s.img))} />
      <h1>
        So <span {...spread(props(heading.hightlight))}>fantastic</span>
        <br />
        to have <span {...spread(props(heading.hightlight))}>StyleX</span> here
      </h1>
      <p {...spread(props(s.p))}>Have fun building your App with Qwik.</p>
      <div {...spread(props(s.buttonGroup))}>
        <button
          {...spread(props(button.base))}
          onClick$={async () => {
            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
              origin: {
                x: 0.5,
                y: 0.35,
              },
            };

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function shoot() {
              confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
              });

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);
          }}
        >
          Time to celebrate
        </button>
        <a
          {...spread(props(button.base, button.dark))}
          href="https://qwik.builder.io/docs"
          target="_blank"
        >
          Explore the docs
        </a>
      </div>
    </div>
  );
});

const DESKTOP = "@media screen and (min-width: 768px)";

const s = create({
  hero: {
    display: "flex",
    verticalAlign: "middle",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    height: { default: "450px", [DESKTOP]: "500px" },
    justifyContent: "center",
    gap: { default: 40, [DESKTOP]: 60 },
  },
  img: {
    width: "100%",
    position: "absolute",
    height: "auto",
    objectFit: "cover",
    zIndex: "-1",
    opacity: "0.2",
    pointerEvents: "none",
  },
  p: {
    color: "white",
    fontSize: { default: "1rem", [DESKTOP]: "1.3rem" },
    margin: 0,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
});
