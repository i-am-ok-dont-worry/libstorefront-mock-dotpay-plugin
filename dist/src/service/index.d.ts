import { AbstractStore, LibstorefrontInnerState, Task } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';
export declare class MockDotpayService {
    private store;
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
    getDotpayPaymentStatus(shouldFail?: boolean, failStatus?: DotpayStatus): Promise<DotpayStatus>;
    /**
     * Sends parsed dotpay form
     */
    sendDotpayForm(shouldFail?: boolean, failStatus?: DotpayStatus): Promise<Task>;
    loadLastTransactionFromCache(): void;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
