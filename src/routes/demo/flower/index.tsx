import {
  component$,
  useVisibleTask$,
  useStore,
  useSignal,
} from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";
import { attrs, create } from "@stylexjs/stylex";
import { container, ellipsis } from "~/commonStyles";
import { colors } from "../../../vars.stylex";

export default component$(() => {
  const isPride = useSignal(
    useLocation().url.searchParams.get("pride") === "true"
  );

  const state = useStore({
    count: 0,
    number: 20,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div {...attrs(container.base, container.center)}>
      <div {...attrs(ellipsis.base)} role="presentation"></div>
      <h1 {...attrs(styles.h1)}>
        <span {...attrs(styles.highlight)}>Generate</span> Flowers
      </h1>

      <label {...attrs(styles.label)}>
        <input
          {...attrs(styles.checkbox)}
          type="checkbox"
          checked={isPride.value}
          onChange$={(e) => {
            isPride.value =
              (e.target as undefined | HTMLInputElement)?.checked ?? false;
          }}
        />
        Rainbow
      </label>

      <input
        {...attrs(styles.input)}
        type="range"
        value={state.number}
        max={50}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />
      <div {...attrs(styles.host)}>
        {Array.from({ length: state.number }, (_, i) => (
          <div
            key={i}
            {...attrs(
              styles.square(i, state.count),
              isPride.value && styles.pride(i)
            )}
          />
        )).reverse()}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};

const ROTATION = "225deg";
const SIZE_STEP = "10px";
const ODD_COLOR_STEP = 5;
const CENTER = 12;

const styles = create({
  input: {
    width: "60%",
  },
  h1: {
    marginBottom: 60,
  },
  highlight: {
    color: colors.lightBlue,
  },
  label: {
    display: "flex",
    justifyContent: "center",
    // marginTop: -32,
    marginBottom: 32,
    fontSize: "1.5rem",
    gap: ".25em",
    cursor: "pointer",
  },
  checkbox: {
    width: "2em",
    height: "2em",
  },

  host: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
    height: 500,
    contain: "strict",
  },

  square: (index: number, state: number) => ({
    display: "block",
    width: `calc(40px + ${index + 1} * ${SIZE_STEP})`,
    height: `calc(40px + ${index + 1} * ${SIZE_STEP})`,
    transform: `rotateZ(calc(${ROTATION} * ${state * 0.1} * (${CENTER} - ${
      index + 1
    })))`,
    transitionProperty: "transform, border-color",
    transitionDuration: "5s",
    transitionTimingFunction: "ease-in-out",
    gridArea: "1 / 1",
    backgroundColor: {
      default: "white",
      ":nth-last-child(2n + 1)": `rgb(
        calc(172 * (1 - ${(index + 1) * ODD_COLOR_STEP} / 256)),
        calc(127 * (1 - ${(index + 1) * ODD_COLOR_STEP} / 256)),
        calc(244 * (1 - ${(index + 1) * ODD_COLOR_STEP} / 256))
      )`,
    },
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    boxSizing: "border-box",
    willChange: "transform, border-color",
    contain: "strict",
  }),

  pride: (index: number) => ({
    backgroundColor: {
      default: "white",
      ":nth-last-child(12n + 1)": `rgb(
        calc(172 * (1 - ${(index + 1) * ODD_COLOR_STEP} / 256)),
        calc(127 * (1 - ${(index + 1) * ODD_COLOR_STEP} / 256)),
        calc(244 * (1 - ${(index + 1) * ODD_COLOR_STEP} / 256))
      )`,
      ":nth-child(12n + 1)": "#e70000",
      ":nth-child(12n + 3)": "#ff8c00",
      ":nth-child(12n + 5)": "#ffef00",
      ":nth-child(12n + 7)": "#00811f",
      ":nth-child(12n + 9)": "#0044ff",
      ":nth-child(12n + 11)": "#760089",
    },
  }),
});
