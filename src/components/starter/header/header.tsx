import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import { create, props } from "@stylexjs/stylex";
import { colors } from "../../../vars.stylex";
import spread from "~/utils/spread";
import { container } from "~/commonStyles";

export default component$(() => {
  return (
    <header>
      <div {...spread(props(container.base, styles.wrapper))}>
        <div {...spread(props(styles.logo))}>
          <a {...spread(props(styles.logoLink))} href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul {...spread(props(styles.ul))}>
          <li {...spread(props(styles.li))}>
            <a
              {...spread(props(styles.listLink))}
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Qwik Docs
            </a>
          </li>
          <li {...spread(props(styles.li))}>
            <a
              {...spread(props(styles.listLink))}
              href="https://stylexjs.com/docs/"
              target="_blank"
            >
              StyleX Docs
            </a>
          </li>
          <li {...spread(props(styles.li))}>
            <a {...spread(props(styles.listLink))} href="/demo/flower/">
              Flower Demo
            </a>
          </li>
          <li {...spread(props(styles.li))}>
            <a {...spread(props(styles.listLink))} href="/demo/flower/">
              Todo List Demo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});

const BIG = "@media (min-width: 450px)";

const styles = create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "inline-block",
  },
  logoLink: {
    display: "block",
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    gap: 30,
  },
  li: { display: { default: "none", [BIG]: "inline-block" } },
  listLink: {
    color: {
      default: "white",
      ":hover": colors.lightBlue,
    },
    display: "inline-block",
    padding: 0,
    textDecoration: "none",
  },
});
