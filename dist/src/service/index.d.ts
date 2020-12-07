import { AbstractStore, LibstorefrontInnerState, PaymentMethod } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';
export declare class MockDotpayService {
    private store;
    private shouldFail;
    private failStatus;
    /**
     * Returns dotpay form that should be POST send
     * as application/x-www-form-urlencoded form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    preparePayment(): Promise<DotpayResponse>;
    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    getPaymentStatus(): Promise<DotpayStatus>;
    loadLastTransactionFromCache(): void;
    /**
     * Redirects to dotpay secure payment site via GET redirect
     */
    redirectToPaymentViaUrl(): Promise<void>;
    /**
     * Redirects to dotpay secure payment site via injected html POST form
     */
    redirectToPaymentViaPostForm(): Promise<void>;
    /**
     * Returns true if payment method can be handled by this plugin
     * @param {PaymentMethod} paymentMethod
     * @returns {boolean}
     */
    canHandleMethod(paymentMethod: PaymentMethod): boolean;
    setConfig({ shouldFail, failStatus }: {
        shouldFail: any;
        failStatus: any;
    }): void;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
