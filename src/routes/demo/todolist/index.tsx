import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  zod$,
  z,
  Form,
} from "@builder.io/qwik-city";
import * as stylex from "@stylexjs/stylex";
import { button, container, ellipsis } from "~/commonStyles";
import { colors } from "../../../vars.stylex";

interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string().trim().min(1),
  })
);

export default component$(() => {
  const list = useListLoader();
  const action = useAddToListAction();

  return (
    <>
      <div {...stylex.attrs(container.base, container.center)}>
        <h1>
          <span class="highlight">TODO</span> List
        </h1>
      </div>

      <div {...stylex.attrs(ellipsis.base)} role="presentation"></div>

      <div {...stylex.attrs(container.base, container.center)}>
        {list.value.length === 0 ? (
          <span {...stylex.attrs(styles.empty)}>No items found</span>
        ) : (
          <ul {...stylex.attrs(styles.list)}>
            {list.value.map((item, index) => (
              <li {...stylex.attrs(styles.li)} key={`items-${index}`}>
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div {...stylex.attrs(container.base, container.center)}>
        <Form action={action} spaReset>
          <input
            {...stylex.attrs(styles.input)}
            type="text"
            name="text"
            required
          />{" "}
          <button {...stylex.attrs(button.base, button.dark)} type="submit">
            Add item
          </button>
        </Form>

        <p {...stylex.attrs(styles.hint)}>
          PS: This little app works even when JavaScript is disabled.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Todo List",
};

const DESKTOP = "@media screen and (min-width: 768px)";

const styles = stylex.create({
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    color: "white",
  },
  li: {
    listStyle: "none",
  },
  empty: {
    minHeight: 250,
  },
  input: {
    backgroundColor: "white",
    color: colors.lightBlue,
    border: "none",
    borderRadius: 8,
    padding: { default: "15px 20px", [DESKTOP]: "23px 35px" },
    marginRight: { default: 10, [DESKTOP]: 20 },
    fontSize: { default: "0.8rem", [DESKTOP]: "1rem" },
  },
  hint: {
    fontSize: "0.8rem",
    color: "white",
    marginTop: 30,
  },
});
