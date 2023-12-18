import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { create, props } from "@stylexjs/stylex";
import { container, ellipsis, heading, icon } from "~/commonStyles";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";
import spread from "~/utils/spread";
import { colors } from "../vars.stylex";

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />

      <div {...spread(props(ellipsis.base))} role="presentation" />
      <div
        {...spread(props(ellipsis.base, ellipsis.purple))}
        role="presentation"
      />

      <div
        {...spread(
          props(container.base, container.center, container.xlSpacing)
        )}
      >
        <h3>
          You can <span {...spread(props(heading.hightlight))}>count</span>
          <br /> on me
        </h3>
        <Counter />
      </div>

      <div {...spread(props(container.base, container.flex))}>
        <Infobox>
          <div {...spread(props(icon.base, icon.cli))} q:slot="title">
            CLI Commands
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br />
              Starts the development server and watches for changes
            </p>
            <p>
              <code>npm run preview</code>
              <br />
              Creates production build and starts a server to preview it
            </p>
            <p>
              <code>npm run build</code>
              <br />
              Creates production build
            </p>
            <p>
              <code>npm run qwik add</code>
              <br />
              Runs the qwik CLI to add integrations
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div {...spread(props(icon.base, icon.apps))} q:slot="title">
              Example Apps
            </div>
            <p>
              Have a look at the{" "}
              <a {...spread(props(styles.link))} href="/demo/flower">
                Flower App
              </a>{" "}
              or the{" "}
              <a {...spread(props(styles.link))} href="/demo/todolist">
                Todo App
              </a>
              .
            </p>
          </Infobox>

          <Infobox>
            <div {...spread(props(icon.base, icon.community))} q:slot="title">
              Community
            </div>
            <ul>
              <li {...spread(props(styles.li))}>
                <span>Questions or just want to say hi? </span>
                <a
                  {...spread(props(styles.link))}
                  href="https://qwik.builder.io/chat"
                  target="_blank"
                >
                  Chat on discord!
                </a>
              </li>
              <li {...spread(props(styles.li))}>
                <span>Follow </span>
                <a
                  {...spread(props(styles.link))}
                  href="https://twitter.com/QwikDev"
                  target="_blank"
                >
                  @QwikDev
                </a>
                <span> on Twitter</span>
              </li>
              <li {...spread(props(styles.li))}>
                <span>Open issues and contribute on </span>
                <a
                  {...spread(props(styles.link))}
                  href="https://github.com/BuilderIO/qwik"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li {...spread(props(styles.li))}>
                <span>Watch </span>
                <a
                  {...spread(props(styles.link))}
                  href="https://qwik.builder.io/media/"
                  target="_blank"
                >
                  Presentations, Podcasts, Videos, etc.
                </a>
              </li>
            </ul>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

const styles = create({
  link: {
    textDecoration: { default: "none", ":hover": "underline" },
    color: colors.lightBlue,
  },
  li: {
    lineHeight: 2.5,
  },
});
