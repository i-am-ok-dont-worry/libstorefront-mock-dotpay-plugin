import { inject, injectable } from 'inversify';
import { MockDotpayThunks } from '../store/dotpay.thunks';
import { AbstractStore, LibstorefrontInnerState, Task } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';

@injectable()
export class MockDotpayService {

    /**
     * Returns dotpay form that should be POST send
     * as application/x-www-form-urlencoded form
     * into a checkout payment pending page
     * @param {number} orderId
     * @returns {Promise<any>} Dotpay embeddable form
     */
    public getDotpayPaymentForm (): Promise<DotpayResponse> {
        return this.store.dispatch(MockDotpayThunks.getDotpayForm());
    }

    /**
     * Returns dotpay payment status for selected order
     * @param {string} orderId
     * @returns {Promise<DotpayStatus>} Payment status
     */
    public getDotpayPaymentStatus (shouldFail?: boolean, failStatus?: DotpayStatus): Promise<DotpayStatus> {
        return this.store.dispatch(MockDotpayThunks.getDotpayStatus(shouldFail, failStatus));
    }

    /**
     * Sends parsed dotpay form
     */
    public sendDotpayForm (shouldFail?: boolean, failStatus?: DotpayStatus): Promise<Task> {
        return this.store.dispatch(MockDotpayThunks.sendDotpayForm(shouldFail, failStatus));
    }

    public loadLastTransactionFromCache (): void {
        this.store.dispatch(MockDotpayThunks.loadLastDotpayTransaction());
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
