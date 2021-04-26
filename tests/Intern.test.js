const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "BSU";
  const e = new Intern("Kaila", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Tera", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "TU";
  const e = new Intern("Tiff", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});