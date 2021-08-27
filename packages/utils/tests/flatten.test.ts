/* eslint-disable @typescript-eslint/camelcase */
import { flatten } from "../src";

test("should flatten obj", () => {
  const obj = {
    name: "test",
    address: {
      personal: "abc",
      office: {
        building: "random",
        street: "some street"
      }
    }
  };

  const out = {
    name: "test",
    "address-personal": "abc",
    "address-office-building": "random",
    "address-office-street": "some street"
  };

  expect(flatten(obj)).toStrictEqual(out);
});
