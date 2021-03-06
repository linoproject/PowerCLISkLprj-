export declare class YearRangeModel {
    private readonly year;
    constructor(year: number);
    yearRange: number[];
    /**
     * Gets the number in the middle of the range.
     */
    readonly middleYear: number;
    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     */
    private generateYearRange;
    /**
     * Function which generate a range of numbers from floor to ceil.
     */
    private generateRange;
    /**
     * Generates the YearRangeModel for the next decade.
     */
    nextDecade(): YearRangeModel;
    /**
     * Generates the YearRangeModel for the previous decade.
     */
    previousDecade(): YearRangeModel;
    /**
     * Generates the YearRangeModel for the current decade.
     */
    currentDecade(): YearRangeModel;
    /**
     * Checks if the value is in the YearRangeModel.
     */
    inRange(value: number): boolean;
}
