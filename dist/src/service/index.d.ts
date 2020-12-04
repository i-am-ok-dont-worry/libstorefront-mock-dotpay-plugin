import { Task } from '@grupakmk/libstorefront';
import { DotpayResponse } from '../types';
export declare class DotpayService {
    private store;
    /**
     * Returns dotpay form that should be injected as HTML form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    getDotpayPaymentForm(orderId: string): Promise<DotpayResponse>;
    /**
     * Returns dotpay payment status for selected order
     * @param {number }orderId
     * @returns {Promise<any>} Payment status
     */
    getDotpayPaymentStatus(orderId: string): Promise<any>;
    /**
     * Sends parsed dotpay form
     */
    sendDotpayForm(): Promise<Task>;
}
