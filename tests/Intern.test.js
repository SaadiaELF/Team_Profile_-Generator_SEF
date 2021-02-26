const Intern = require("../lib/Intern");

describe( "Intern class", () => {
  
      it("getSchool returns school", () => {
        expect(new Intern("Saadia","AD1258","saadia@gmail.com", "Uni of Birmingham").getSchool()).toBe("Uni of Birmingham");
      });
  
      it("getRole returns Intern", () => {
        expect(new Intern().getRole()).toBe("Intern");
      });
  });
  