import { describe, expect, it } from "vitest";
import bifExample from './example.bif?arraybuffer'

describe("binary file", () => {
  it("check length of the binary file", () => {
    const uint8Array = new Uint8Array(bifExample)
    expect(uint8Array.length).toBe(258829);
  })
});
