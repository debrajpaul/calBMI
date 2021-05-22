import { dataSet } from "./data.json";
import {
    BMICalculator,
    generatedDataSet,
    givenDataSet,
} from "./module/bmiCalculator";

// main function to be excuted
const main = () => {
    const bmiCalculator: BMICalculator = new BMICalculator();
    const questionOne: Array<generatedDataSet> = bmiCalculator.getBMI(dataSet);
    console.log("questionOne--> ", questionOne);
    const questionTwo: number =  bmiCalculator.getTotalOverWeight(
        questionOne,
        "very_high_risk"
    )
    console.log("questionTwo--> ",questionTwo);
};

// run the main function
main()