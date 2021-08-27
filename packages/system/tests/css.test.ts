import { css } from "../src";

it("returns resolved styles", () => {
  const styles = css({
    bgcolor: "red"
  })({});

  expect(styles).toStrictEqual({
    backgroundColor: "#ef4444"
  });
});

it("returns resolved styles with themed values", () => {
  const styles = css({
    bgcolor: theme => `${theme?.colors?.myCustomColor}`
  })({
    colors: {
      myCustomColor: "green"
    }
  });

  expect(styles).toStrictEqual({
    backgroundColor: "#22c55e"
  });
});

it("returns resolved styles with pseudos", () => {
  const styles = css({
    bgcolor: theme => `${theme?.colors?.myCustomColor}`,
    hover: theme => ({
      alignItems: "center",
      bgcolor: `${theme?.colors?.myCustomColor}`
    })
  })({
    colors: {
      myCustomColor: "green"
    }
  });

  expect(styles).toStrictEqual({
    backgroundColor: "#22c55e",
    ":hover": {
      alignItems: "center",
      backgroundColor: "#22c55e"
    }
  });
});

it("resolves ring feature", () => {
  const styles = css({
    bgcolor: "hello",
    ring: "20",
    ringColor: "red",
    sm: {
      bg: "red"
    }
  })();

  expect(styles).toStrictEqual({
    backgroundColor: "hello",
    boxShadow: " 0px 0px 0px 20px red",
    ringColor: "red",
    "@media (min-width: 640px)": {
      backgroundColor: "#ef4444"
    }
  });
});
