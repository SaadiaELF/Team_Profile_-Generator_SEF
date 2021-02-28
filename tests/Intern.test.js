const Intern = require("../lib/Intern");

describe("Intern class", () => {

  it("should set 'school' when created", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const school = "University of Birmingham"
    const obj = new Intern(name, id, email, school);
    expect(obj.school).toBe(school);
  });

  it("getSchool returns school", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const school = "University of Birmingham"
    expect(new Intern(name, id, email, school).getSchool()).toBe(school);
  });

  it("getRole returns Intern", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const school = "University of Birmingham"
    expect(new Intern(name, id, email, school).getRole()).toBe("Intern");
  });
});
