import { Slot, component$ } from "@builder.io/qwik";
import { attrs, create } from "@stylexjs/stylex";

export default component$(() => {
  return (
    <div {...attrs(styles.box)}>
      <h3 {...attrs(styles.h3)}>
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
