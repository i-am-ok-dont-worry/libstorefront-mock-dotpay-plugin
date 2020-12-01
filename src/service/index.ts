import { inject, injectable } from 'inversify';
import { DotpayThunks } from '../store/dotpay.thunks';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';

@injectable()
export class DotpayService {

    @inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>;

    /**
     * Returns dotpay form that should be injected as HTML form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    public getDotpayPaymentForm (orderId: number): Promise<any> {
        return this.store.dispatch(DotpayThunks.getDotpayForm(orderId));
    }

    /**
     * Returns dotpay payment status for selected order
     * @param {number }orderId
     * @returns {Promise<any>} Payment status
     */
    public getDotpayPaymentStatus (orderId: number): Promise<any> {
        return this.store.dispatch(DotpayThunks.getDotpayStatus(orderId));
    }
}
