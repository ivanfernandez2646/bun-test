import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { closeServer, initServer } from "./server";

describe("api", () => {
  beforeAll(async () => {
    await initServer();
  });

  afterAll(async () => {
    await closeServer();
  });

  describe("GET", () => {
    it("should return Hello World! when call GET /", async () => {
      const res = await fetch("http://localhost:8080"),
        text = await res.text(),
        expectedText = "Hello World!";

      expect(text).toBe(expectedText);
    });
  });
});
