export declare class DatepickerEnabledService {
    private _document;
    constructor(_document: any);
    private _isUserAgentMobile;
    private _innerWidth;
    /**
     * Returns if the calendar should be active or not.
     * If the user agent is mobile and the screen width is less than DATEPICKER_ACTIVE_BREAKPOINT
     * then the calendar is inactive.
     */
    readonly isEnabled: boolean;
}
