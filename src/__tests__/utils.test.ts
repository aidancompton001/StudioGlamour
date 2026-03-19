import { describe, it, expect } from "vitest";
import { img } from "@/lib/utils";

describe("img() helper", () => {
  // In test env, NODE_ENV = "test", so basePath = ""
  it("returns path unchanged in non-production", () => {
    expect(img("/images/hero.jpg")).toBe("/images/hero.jpg");
  });

  it("handles path without leading slash", () => {
    expect(img("images/hero.jpg")).toBe("/images/hero.jpg");
  });

  it("does not produce double slashes", () => {
    const result = img("/images/test.jpg");
    expect(result).not.toContain("//");
  });

  it("handles empty path", () => {
    const result = img("");
    expect(result).toBe("/");
  });
});
