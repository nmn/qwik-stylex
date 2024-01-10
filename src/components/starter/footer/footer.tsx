import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { attrs, create } from "@stylexjs/stylex";
import { container } from "~/commonStyles";
// import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div {...attrs(container.base, container.flex)}>
        <a
          {...attrs(styles.link)}
          href="https://www.builder.io/"
          target="_blank"
        >
          <span {...attrs(styles.span)}>Made with ♡ by Builder.io</span>
          <span {...attrs(styles.spacer)}>|</span>
          <span {...attrs(styles.span)}>{serverTime.value.date}</span>
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
