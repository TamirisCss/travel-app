import { handleSubmit, getCountdown, getDuration } from "../src/client/js/formHandler";

describe("handle search functionality", () => {
  test("It should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe("get countdown in days until a date", () => {
    test("It should be 7 days", () => {
      const date = new Date()
      date.setDate(date.getDate()+7);
      expect(getCountdown(date)).toBe(7);
    });
  });

describe("get duration in days between two dates", () => {
    test("It should be 7 days", () => {
      const startDate = new Date()
      const endDate = new Date()
      endDate.setDate(endDate.getDate()+7);
      expect(getDuration(startDate, endDate)).toBe(7);
    });
  });