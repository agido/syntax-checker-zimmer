import fs from "fs";
import { solveTask1, solveTask2 } from "./index";

function readInput(): string[] {
  const file = fs.readFileSync("src/input.txt", { encoding: "utf8" });
  return file.split("\n");
}

describe("Test Suite", () => {
  const lines = readInput();

  it("solution task 1 is correct", () => {
    expect(solveTask1(lines)).toBe(358737);
  });

  it("solution task 2 is correct", () => {
    expect(solveTask2(lines)).toBe(4329504793);
  });
});