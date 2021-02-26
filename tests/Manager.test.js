const Manager = require("../lib/Manager");

describe( "Manager class", () => {
  
      it("getRole returns Manager", () => {
        expect(new Manager().getRole()).toBe("Manager");
      });
  });
  