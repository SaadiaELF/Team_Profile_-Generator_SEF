const Manager = require("../lib/Manager");

describe("Manager class", () => {

  // test the constructor's arguments
  it("should set 'officeNumber' when created", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const officeNumber = "123456"
    const obj = new Manager(name, id, email, officeNumber);
    expect(obj.officeNumber).toBe(officeNumber);
  });

  // test the output of the function getRole
  it("getRole returns Manager", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const officeNumber = "123456"
    expect(new Manager(name, id, email, officeNumber).getRole()).toBe("Manager");
  });
});
