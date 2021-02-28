const Employee = require("../lib/Employee");

// test the instantiation of the class
describe("Employee class", () => {
  it("should return an object when called with the 'new' keyword", () => {
    const obj = new Employee();
    expect(typeof (obj)).toBe("object");
  });
  // test the constructor's arguments
  it("should set 'name' when created", () => {
    const name = "Saadia";
    const obj = new Employee(name);
    expect(obj.name).toBe(name);
  });

  it("should set 'id' when created", () => {
    const id = "AD1258";
    const obj = new Employee("Saadia", id);
    expect(obj.id).toBe(id);
  });

  it("should set 'email' when created", () => {
    const email = "saadia@gmail.com";
    const obj = new Employee("Saadia", "AD1258", email);
    expect(obj.email).toBe(email);
  });

  // test the output of the function getName
  it("getName returns name", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    expect(new Employee(name, id, email).getName()).toBe(name);
  });

  // test the output of the function getId
  it("getId returns ID", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    expect(new Employee(name, id, email).getId()).toBe(id);
  });

  // test the output of the function getEmail
  it("getEmail returns email", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    expect(new Employee(name, id, email).getEmail()).toBe(email);
  });

  // test the output of the function getRole
  it("getRole returns Employee", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    expect(new Employee(name, id, email).getRole()).toBe("Employee");
  });
});
