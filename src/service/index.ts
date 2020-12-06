import { inject, injectable } from 'inversify';
import { MockDotpayThunks } from '../store/dotpay.thunks';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { DotpayResponse, DotpayStatus } from '../types';

@injectable()
export class MockDotpayService {

    private shouldFail: boolean;
    private failStatus: DotpayStatus;

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
    public getDotpayPaymentStatus (): Promise<DotpayStatus> {
        return this.store.dispatch(MockDotpayThunks.getDotpayStatus(this.shouldFail, this.failStatus));
    }

    public loadLastTransactionFromCache (): void {
        this.store.dispatch(MockDotpayThunks.loadLastDotpayTransaction());
    }

    /**
     * Redirects to dotpay secure payment site via GET redirect
     */
    public redirectToDotpayViaUrl (): Promise<void> {
        return this.store.dispatch(MockDotpayThunks.redirectToDotpayViaUrl(this.shouldFail, this.failStatus));
    }

    /**
     * Redirects to dotpay secure payment site via injected html POST form
     */
    public redirectToDotpayViaPostForm (): Promise<void> {
        return this.store.dispatch(MockDotpayThunks.redirectToDotPayViaPostForm(this.shouldFail, this.failStatus));
    }

    public setConfig({ shouldFail, failStatus }): void {
        this.shouldFail = shouldFail;
        this.failStatus = failStatus;
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
