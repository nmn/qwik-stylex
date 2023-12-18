// Rename `className` to `class` for Qwik.
export default function spread({
  className,
  style,
}: Readonly<{
  className?: string;
  style?: { [key: string]: string | number };
}>): { class?: string; style?: { [key: string]: string | number } } {
  const result: { class?: string; style?: { [key: string]: string | number } } =
    {};
  if (className) {
    result.class = className;
  }
  if (style) {
    result.style = style;
  }
  return result;
}
