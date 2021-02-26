const Employee = require("../lib/Employee");

describe("Employee class", () => {
  
    it("getName returns name", () => {
      expect(new Employee("Saadia").getName()).toBe("Saadia");
    });
  
    it("getId returns ID", () => {
        expect(new Employee("Saadia","AD1258").getId()).toBe("AD1258");
      });

      it("getEmail returns email", () => {
        expect(new Employee("Saadia","AD1258","saadia@gmail.com").getEmail()).toBe("saadia@gmail.com");
      });
  
      it("getRole returns Employee", () => {
        expect(new Employee().getRole()).toBe("Employee");
      });
  });
  