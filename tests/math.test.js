const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  add,
} = require("../src/math.js");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert faranhite to celsius", () => {
  const celsius = fahrenheitToCelsius(32);
  expect(celsius).toBe(0);
});

test("Shold convert celsius to faranhite", () => {
  const faranhite = celsiusToFahrenheit(0);
  expect(faranhite).toBe(32);
});

test("Async test demo", (done) => {
  setTimeout(() => {
    expect(2).toBe(2);
    done();
  }, 2000);
});

test("Should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers async/await", async () => {
  const sum = await add(10, 2);
  expect(sum).toBe(12);
});
