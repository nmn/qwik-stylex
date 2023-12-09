import { component$ } from "@builder.io/qwik";

import stylex from "@stylexjs/stylex";

const s = stylex.create({
  h1: {
    color: "yellow",
    fontStyle: "italic",
  },
});

export default component$(() => {
  return (
    <div class={["container"]}>
      <h1 class={stylex(s.h1)}>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p class={stylex(s.h1)}>Have fun building your App with Qwik.</p>
    </div>
  );
});
