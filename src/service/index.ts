import { inject, injectable } from 'inversify';
import { DotpayThunks } from '../store/dotpay.thunks';
import { AbstractStore, LibstorefrontInnerState, Task } from '@grupakmk/libstorefront';
import { DotpayResponse } from '../types';

@injectable()
export class DotpayService {

    @inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>;

    /**
     * Returns dotpay form that should be injected as HTML form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    public getDotpayPaymentForm (orderId: string): Promise<DotpayResponse> {
        return this.store.dispatch(DotpayThunks.getDotpayForm(orderId));
    }

    /**
     * Returns dotpay payment status for selected order
     * @param {number }orderId
     * @returns {Promise<any>} Payment status
     */
    public getDotpayPaymentStatus (orderId: string): Promise<any> {
        return this.store.dispatch(DotpayThunks.getDotpayStatus(orderId));
    }

    /**
     * Sends parsed dotpay form
     */
    public sendDotpayForm (): Promise<Task> {
        return this.store.dispatch(DotpayThunks.sendDotpayForm());
    }
}
