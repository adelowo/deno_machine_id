import {
  assert,
  assertNotEquals,
} from "https://deno.land/std@v1.0.0-rc1/testing/asserts.ts";
import { getMachineId } from "./mod.ts";

const { test } = Deno;

function isValidId(machindId: string): boolean {
  return /^[a-z-\d]+$/i.test(machindId);
}

test({
  name: "GetMachineId",
  fn: async () => {
    const id = await getMachineId();

    console.log("machine ID: ", id);

    assertNotEquals(id, "");
    assert(isValidId(id));
  },
});
