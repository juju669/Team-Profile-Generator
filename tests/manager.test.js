// using Manager constructor
const Manager = require("../lib/manager");

// creating manager object
test("creates an Manager object", () => {
  const manager = new Manager("Vibha", 90, "vibhaneelgund@yahoo.com", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Vibha", 90, "vibhaneelgund@yahoo.con");

  expect(manager.getRole()).toEqual("Manager");
});