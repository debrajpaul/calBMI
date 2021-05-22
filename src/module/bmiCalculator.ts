export interface givenDataSet {
    Gender: string;
    HeightCm: number;
    WeightKg: number;
}
export interface generatedDataSet {
    Gender: string;
    HeightCm: number;
    WeightKg: number;
    bmi: number;
    risk: string;
}

export class BMICalculator {
    constructor() {}

    getBMI(data: Array<givenDataSet>): Array<generatedDataSet> {
        return data && data.length > 0
            ? data.reduce((acc: Array<generatedDataSet>, cur: givenDataSet) => {
                  const calBMI: number =
                      Math.round((cur.WeightKg / (cur.HeightCm / 100)) * 100) /
                      100;
                  acc.push({
                      ...cur,
                      bmi: calBMI,
                      risk:
                          calBMI >= 40
                              ? "very_high_risk"
                              : 35 >= calBMI && calBMI < 40
                              ? "high_risk"
                              : 30 >= calBMI && calBMI < 35
                              ? "medium_risk"
                              : 25 > calBMI && calBMI < 30
                              ? "enhanced_risk"
                              : 18.5 > calBMI && calBMI < 25
                              ? "Low_risk"
                              : "malnutrition_risk",
                  } as generatedDataSet);
                  return acc;
              }, [])
            : [];
    }
    getTotalOverWeight(
        data: Array<generatedDataSet>,
        riskLevel: string
    ): number {
        return data && data.length > 0
            ? data.filter((cur: generatedDataSet) => cur.risk === riskLevel)
                  .length
            : 0;
    }
}
