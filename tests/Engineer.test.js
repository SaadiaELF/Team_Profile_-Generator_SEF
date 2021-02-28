const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

  it("should set 'github' when created", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const github = "SaadiaELF";
    const obj = new Engineer(name, id, email, github);
    expect(obj.github).toBe(github);
  });

  it("getGithub returns github", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const github = "SaadiaELF"
    expect(new Engineer(name, id, email, github).getGithub()).toBe(github);
  });

  it("getRole returns Engineer", () => {
    const name = "Saadia";
    const id = "AD1258";
    const email = "saadia@gmail.com";
    const github = "SaadiaELF"
    expect(new Engineer(name, id, email, github).getRole()).toBe("Engineer");
  });
});
