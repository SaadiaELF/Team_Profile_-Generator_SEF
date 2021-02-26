const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  
      it("getGithub returns github", () => {
        expect(new Engineer("Saadia","AD1258","saadia@gmail.com", "SaadiaELF").getGithub()).toBe("SaadiaELF");
      });
  
      it("getRole returns Engineer", () => {
        expect(new Engineer().getRole()).toBe("Engineer");
      });
  });
  