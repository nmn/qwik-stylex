import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { create, props } from "@stylexjs/stylex";
import spread from "~/utils/spread";
import { container } from "~/commonStyles";
// import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div {...spread(props(container.base))}>
        <a
          {...spread(props(styles.link))}
          href="https://www.builder.io/"
          target="_blank"
        >
          <span {...spread(props(styles.span))}>Made with ♡ by Builder.io</span>
          <span {...spread(props(styles.spacer))}>|</span>
          <span {...spread(props(styles.span))}>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});

const DESKTOP = "@media screen and (min-width: 768px)";

const styles = create({
  link: {
    color: "white",
    display: "block",
    fontSize: "0.8rem",
    textAlign: "center",
    textDecoration: "none",
    lineHeight: 1.5,
  },
  span: {
    display: { default: "block", [DESKTOP]: "inline" },
  },
  spacer: {
    display: { default: "none", [DESKTOP]: "inline" },
    marginInline: 15,
  },
});
