import { css } from "../src";

it("returns resolved styles", () => {
  const styles = css({
    backgroundColor: "red-500",
    color: "red-500"
  })({});

  expect(styles).toStrictEqual({
    backgroundColor: "rgba(239,68,68,1)",
    color: "rgba(239,68,68,1)"
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
    backgroundColor: "green"
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
    backgroundColor: "green",
    ":hover": {
      alignItems: "center",
      backgroundColor: "green"
    }
  });
});

it("resolves ring feature", () => {
  const styles = css({
    bgcolor: "hello",
    ring: "20",
    ringColor: "red-500",
    sm: {
      bg: "red"
    }
  })();

  expect(styles).toStrictEqual({
    backgroundColor: "hello",
    boxShadow: " 0px 0px 0px 20px rgba(239,68,68,1)",
    ringColor: "red-500",
    "@media (min-width: 640px)": {
      backgroundColor: "red"
    }
  });
});
