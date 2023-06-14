import calculator from "../files/calculator";

describe("calculadora", () => {
    it("Add 1 to 2 should return 3", () => {
        //arrange
        const a = 1
        const b = 2
        //act
        const result = calculator.add(a, b)
        //asert
        expect(result).toBe(3)
    });

    it("Subtract 2 from 10 should return 8", () => {
        //arrange
        const a = 10
        const b = 2
        //act
        const result = calculator.subtract(a, b)
        //asert
        expect(result).toBe(8)

    });

    it("Multiply  2 with 8 should return 16", () => {
        //arrange
        const a = 8
        const b = 2
        //act
        const result = calculator.multiply(a, b)
        //asert
        expect(result).toBe(16)
    });

    it("Multiply should be idempotent", () => {
        //arrange
        const a = 1
        const b = 0
        //act
        const result = calculator.multiply(a, b)
        //asert
        expect(result).toBe(0)
    });

    it("Divide 8 with 2 should return 4", () => {
        //arrange
        const a = 8
        const b = 2
        //act
        const result = calculator.divide(a, b)
        //asert
        expect(result).toBe(4)
    });
});