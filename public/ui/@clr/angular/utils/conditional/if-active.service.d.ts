import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
export declare const IF_ACTIVE_ID: InjectionToken<number>;
export declare function tokenFactory(): number;
export declare const IF_ACTIVE_ID_PROVIDER: {
    provide: InjectionToken<number>;
    useFactory: typeof tokenFactory;
};
export declare class IfActiveService {
    /********
     * @property _currentChange
     *
     * @description
     * A RXJS Subject that updates and provides subscriptions to for the current current state of a component template
     * implemting the IfActive structural directive.
     *
     */
    private _currentChange;
    /*********
     * @property _current
     *
     * @description
     * A property holding the current value for current/closed state of an IfActive structural directive.
     */
    private _current;
    /*********
     *
     * @description
     * A getter function that provides an observable for the _current Subject.
     *
     */
    readonly currentChange: Observable<number>;
    /*********
     *
     * @description
     * A setter function that updates the current state of _current for this instance of IfActive structural directive.
     * And, broadcasts the new value to all subscribers.
     *
     * @param value
     */
    /*********
    *
    * @description
    * A getter that returns the current value of this IfActive instance.
    * @returns
    */
    current: number;
}
