import { component$, useSignal, $ } from "@builder.io/qwik";
import Gauge from "../gauge";
import { create, props } from "@stylexjs/stylex";
import spread from "~/utils/spread";
import { button } from "~/commonStyles";

export default component$(() => {
  const count = useSignal(70);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div {...spread(props(s.wrapper))}>
      <button
        {...spread(props(button.base, button.dark))}
        onClick$={() => setCount(count.value - 1)}
      >
        -
      </button>
      <Gauge value={count.value} />
      <button
        {...spread(props(button.base, button.dark))}
        onClick$={() => setCount(count.value + 1)}
      >
        +
      </button>
    </div>
  );
});

const DESKTOP = "@media screen and (min-width: 768px)";

const s = create({
  wrapper: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: { default: 10, [DESKTOP]: 30 },
  },
});
