export declare class Controller {
    /**
     * Fires an event on this Controller.
     *
     * @protected
     *
     * @param {String} event The event type name
     * @param {Object} value The event parameters
     * @param {Boolean} [forget=false] When true, does not retain for subsequent subscribers
     */
    fire(event: string, value: object, forget: boolean);

    /**
     * Subscribes to an event on this Controller.
     *
     * The callback is be called with this component as scope.
     *
     * @param {String} event The event
     * @param {Function} callback Called fired on the event
     * @param {Object} [scope=this] Scope for the callback
     * @return {String} Handle to the subscription, which may be used to unsubscribe with {@link #off}.
     */
    on(event: string, callback: Function, scope: object): string;

    /**
     * Cancels an event subscription that was previously made with {@link Controller#on} or {@link Controller#once}.
     *
     * @param {String} subId Subscription ID
     */
    off(subId: string);

    /**
     * Subscribes to the next occurrence of the given event, then un-subscribes as soon as the event is handled.
     *
     * This is equivalent to calling {@link Controller#on}, and then calling {@link Controller#off} inside the callback function.
     *
     * @param {String} event Data event to listen to
     * @param {Function} callback Called when fresh data is available at the event
     * @param {Object} [scope=this] Scope for the callback
     */
    once(event: string, callback: Function, scope: object);

    /**
     * Logs a console debugging message for this Controller.
     *
     * The console message will have this format: *````[LOG] [<component type> <component id>: <message>````*
     *
     * @protected
     *
     * @param {String} message The message to log
     */
    log(message: string);

    /**
     * Logs a warning for this Controller to the JavaScript console.
     *
     * The console message will have this format: *````[WARN] [<component type> =<component id>: <message>````*
     *
     * @protected
     *
     * @param {String} message The message to log
     */
    warn(message: string);

    /**
     * Logs an error for this Controller to the JavaScript console.
     *
     * The console message will have this format: *````[ERROR] [<component type> =<component id>: <message>````*
     *
     * @protected
     *
     * @param {String} message The message to log
     */
    error(message: string);


    _mutexActivation(controllers);

    /**
     * Enables or disables this Controller.
     *
     * Fires an "enabled" event on update.
     *
     * @protected
     * @param {boolean} enabled Whether or not to enable.
     */
    setEnabled(enabled: boolean);

    /**
     * Gets whether or not this Controller is enabled.
     *
     * @protected
     *
     * @returns {boolean}
     */
    getEnabled(): boolean;

    /**
     * Activates or deactivates this Controller.
     *
     * Fires an "active" event on update.
     *
     * @protected
     *
     * @param {boolean} active Whether or not to activate.
     */
    setActive(active: boolean);

    /**
     * Gets whether or not this Controller is active.
     *
     * @protected
     *
     * @returns {boolean}
     */
    getActive(): boolean;

    /**
     * Destroys this Controller.
     *
     * @protected
     *
     */
    destroy();
}