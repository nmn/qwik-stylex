import { Slot, component$ } from "@builder.io/qwik";
import { create, props } from "@stylexjs/stylex";
import spread from "~/utils/spread";

export default component$(() => {
  return (
    <div {...spread(props(styles.box))}>
      <h3 {...spread(props(styles.h3))}>
        <Slot name="title" />
      </h3>
      <Slot />
    </div>
  );
});

const LARGE = "@media screen and (min-width: 600px)";

const styles = create({
  box: {
    color: "white",
    fontSize: "1rem",
    lineHeight: 2,
    margin: 0,
    marginBottom: { default: 40, [LARGE]: 0 },
  },
  h3: {
    fontSize: "1.4rem",
    fontWeight: 400,
    margin: 0,
    marginBottom: 15,
    padding: 0,
  },
});
