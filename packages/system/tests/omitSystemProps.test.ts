import { Dict } from "@beyond-ui/utils";
import { omitSystemProps, SystemProps } from "../src";

it("omit props that exist in SystemProps", () => {
  const props: Dict<{}> & SystemProps = {
    label: "hello",
    bg: "red-100"
  };

  const propsResolved = omitSystemProps(props);

  expect(propsResolved).toStrictEqual({
    label: "hello"
  });
});
