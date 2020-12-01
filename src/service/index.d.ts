import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
export declare class DotpayService {
    store: AbstractStore<LibstorefrontInnerState>;
    /**
     * Returns dotpay form that should be injected as HTML form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    getDotpayPaymentForm(orderId: number): Promise<any>;
    /**
     * Returns dotpay payment status for selected order
     * @param {number }orderId
     * @returns {Promise<any>} Payment status
     */
    getDotpayPaymentStatus(orderId: number): Promise<any>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
