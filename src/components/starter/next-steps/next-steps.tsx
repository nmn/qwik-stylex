import { component$, $, useOnWindow, useSignal } from "@builder.io/qwik";
import { attrs, create } from "@stylexjs/stylex";
import { button, container, heading } from "~/commonStyles";
import { colors } from "../../../vars.stylex";

export const GETTING_STARTED_STEPS = [
  {
    message:
      "Press and hold the <b>ALT</b> key to activate 'Click-to-Source' mode",
  },
  {
    message:
      "Select the title of this page while keeping the <b>ALT</b> key pressed",
    hint: 'Edit the title and save the changes. If your editor does not open, have a look at <a href="https://github.com/yyx990803/launch-editor#supported-editors" target="_blank">this page</a> to set the correct <code>LAUNCH_EDITOR</code> value.',
  },
  {
    message:
      "<b>Update</b> now the <code>routeLoader$</code> defined in the <code>src/routes/layout.tsx</code> file",
    hint: "Instead of returning the current date, you could return any possible string.<br />The output is displayed in the footer.",
  },
  {
    message: "Create a <b>new Route</b> called <code>/me</code>",
    hint: 'Create a new directory called <code>me</code> in <code>src/routes</code>. Within this directory create a <code>index.tsx</code> file or copy the <code>src/routes/index.tsx</code> file. Your new route is now accessible <a href="/me" target="_blank">here</a> ✨',
  },
  {
    message: "Time to have a look at <b>Forms</b>",
    hint: 'Open <a href="/demo/todolist" target="_blank">the TODO list App</a> and add some items to the list. Try the same with disabled JavaScript 🐰',
  },
  {
    message: "<b>Congratulations!</b> You are now familiar with the basics! 🎉",
    hint: "If you need further info on how to use qwik, have a look at <a href='https://qwik.builder.io' target='_blank'>qwik.builder.io</a> or join the <a href='https://qwik.builder.io/chat' target='_blank'>Discord channel</a>.",
  },
];

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Alt") {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div
      {...attrs(
        container.base,
        container.purple,
        container.center,
        styles.container
      )}
    >
      <h2>
        Time for a
        <br />
        <span {...attrs(heading.bold)}>qwik intro</span>?
      </h2>
      <div {...attrs(styles.gettingstarted)}>
        <div
          {...attrs(styles.intro)}
          dangerouslySetInnerHTML={
            GETTING_STARTED_STEPS[gettingStartedStep.value].message
          }
        />
        <span
          {...attrs(styles.hint)}
          dangerouslySetInnerHTML={
            GETTING_STARTED_STEPS[gettingStartedStep.value].hint
          }
        />
      </div>
      {gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (
        <button
          {...attrs(button.base, button.dark)}
          onClick$={() => gettingStartedStep.value++}
        >
          Continue with Step {gettingStartedStep.value + 2} of{" "}
          {GETTING_STARTED_STEPS.length}
        </button>
      ) : (
        <button
          {...attrs(button.base, button.dark)}
          onClick$={() => (gettingStartedStep.value = 0)}
        >
          Re-Start
        </button>
      )}
    </div>
  );
});

const DESKTOP = "@media screen and (min-width: 768px)";

const styles = create({
  container: {
    backgroundColor: colors.lightPurple,
  },
  gettingstarted: {
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: { default: 380, [DESKTOP]: 280 },
    gap: 10,
    maxWidth: 600,
    marginInline: "auto",
  },
  intro: {
    fontSize: { default: "1rem", [DESKTOP]: "1.2rem" },
    width: "100%",
    wordBreak: "break-word",
  },
  hint: {
    fontSize: { default: "0.8rem", [DESKTOP]: "1rem" },
  },
  hintLink: {
    color: colors.darkPurple,
  },
});
