import { dataSet } from "../data.json";
import {
    BMICalculator,
    generatedDataSet,
    givenDataSet,
} from "../module/bmiCalculator";

describe("test suite for BMI Calculator", () => {
    const bmiCalculator: BMICalculator = new BMICalculator();
    const expectOutputForQuestionOne = [
        {
            Gender: "Male",
            HeightCm: 171,
            WeightKg: 96,
            bmi: 56.14,
            risk: "very_high_risk",
        },
        {
            Gender: "Male",
            HeightCm: 161,
            WeightKg: 85,
            bmi: 52.8,
            risk: "very_high_risk",
        },
        {
            Gender: "Male",
            HeightCm: 180,
            WeightKg: 77,
            bmi: 42.78,
            risk: "very_high_risk",
        },
        {
            Gender: "Female",
            HeightCm: 166,
            WeightKg: 62,
            bmi: 37.35,
            risk: "malnutrition_risk",
        },
        {
            Gender: "Female",
            HeightCm: 150,
            WeightKg: 70,
            bmi: 46.67,
            risk: "very_high_risk",
        },
        {
            Gender: "Female",
            HeightCm: 167,
            WeightKg: 82,
            bmi: 49.1,
            risk: "very_high_risk",
        },
    ];
    const expectOutputForquestionTwo = 5;

    it("This should pass Question One", () => {
        const questionOne: Array<generatedDataSet> =
            bmiCalculator.getBMI(dataSet);
        expect(questionOne.length).toEqual(expectOutputForQuestionOne.length);
        expectOutputForQuestionOne.map((data, index) => {
            expect(data).toEqual(expectOutputForQuestionOne[index]);
        });
    });

    it("This should pass Question Two", () => {
        const questionOne: Array<generatedDataSet> =
            bmiCalculator.getBMI(dataSet);
        const questionTwo: number = bmiCalculator.getTotalOverWeight(
            questionOne,
            "very_high_risk"
        );
        expect(questionTwo).toEqual(expectOutputForquestionTwo);
    });
		
    it("This should fail Question One  ", () => {
        const questionOne: Array<generatedDataSet> = bmiCalculator.getBMI([]);
        expect(questionOne.length).not.toEqual(
            expectOutputForQuestionOne.length
        );
    });
		
    it("This should fail Question Two", () => {
        const questionTwo: number = bmiCalculator.getTotalOverWeight(
            [],
            "very_high_risk"
        );
        expect(questionTwo).not.toEqual(expectOutputForquestionTwo);
    });
});
