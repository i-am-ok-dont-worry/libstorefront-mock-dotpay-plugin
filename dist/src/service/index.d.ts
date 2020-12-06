import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
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
    getDotpayPaymentForm(): Promise<DotpayResponse>;
    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    getDotpayPaymentStatus(): Promise<DotpayStatus>;
    loadLastTransactionFromCache(): void;
    /**
     * Redirects to dotpay secure payment site via GET redirect
     */
    redirectToDotpayViaUrl(): Promise<void>;
    /**
     * Redirects to dotpay secure payment site via injected html POST form
     */
    redirectToDotpayViaPostForm(): Promise<void>;
    setConfig({ shouldFail, failStatus }: {
        shouldFail: any;
        failStatus: any;
    }): void;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
