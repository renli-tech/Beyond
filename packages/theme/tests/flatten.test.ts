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
    address_personal: "abc",
    address_office_building: "random",
    address_office_street: "some street"
  };

  expect(flatten(obj)).toStrictEqual(out);
});
