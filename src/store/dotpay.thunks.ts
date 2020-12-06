import {DotpayActions} from './dotpay.actions';
import {StorageCollection, StorageManager} from '@grupakmk/libstorefront';
import {DotpayResponse, DotpayStatus} from '../types';
import {DotpayModuleState} from './dotpay.default';

const timeoutPromise = (time = 2000) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));
export namespace MockDotpayThunks {
    // @ts-ignore
    export const getDotpayForm = () => async (dispatch, getState) => {
        try {
            const mockData = {
                amount: 424.25,
                api_version: "dev",
                bylaw: 1,
                ch_lock: 0,
                channel: null,
                chk: "e84b61f89df0254fd55dbdfe4761fdf2e918cc37e684fa7af21d00cc2b913f6f",
                city: "Twojego Starego",
                control: 37,
                country: "PL",
                currency: "PLN",
                customer: "eyJwYXllciI6eyJmaXJzdF9uYW1lIjoiTWF0ZXVzeiIsImxhc3RfbmFtZSI6IlBpZXRyb3dpYWsiLCJlbWFpbCI6ImplYmFjLXBpc0BncnVwYWttay5wbCIsInBob25lIjoiNTE1IDMzMyAxMzIxIn0sIm9yZGVyIjp7ImRlbGl2ZXJ5X2FkZHJlc3MiOnsiY2l0eSI6IlR3b2plZ28gU3RhcmVnbyIsInN0cmVldCI6IkxlY2hhIiwiYnVpbGRpbmdfbnVtYmVyIjoiS2FjennFhHNraWVnbyAzIiwicG9zdGNvZGUiOiIzMy0xMDAiLCJjb3VudHJ5IjoiUEwifX19",
                description: "Nr zamówienia: 6000000038/37",
                email: "jebac-pis@grupakmk.pl",
                firstname: "Mateusz",
                id: 768175,
                ignore_last_payment_channel: 1,
                lang: "pl",
                lastname: "Pietrowiak",
                personal_data: 1,
                phone: "515 333 1321",
                postcode: "33-100",
                street: "Lecha",
                street_n1: "Kaczyńskiego 3",
                type: 0,
                url: "https://ktm.staging.grupakmk.pl/checkout/dotpay/status",
                urlc: "https://mage.ktm.staging.grupakmk.pl/dotpay/payment/confirm"
            };

            let mockDotpayResponse: DotpayResponse = {
                data: mockData,
                url: 'https://ssl.dotpay.pl/test_payment/'
            };

            await dispatch(DotpayActions.setDotpayStatus(DotpayStatus.PENDING));
            await dispatch(DotpayActions.setDotpayForm(mockDotpayResponse.data));
            await dispatch(DotpayActions.setDotpayUrl(mockDotpayResponse.url));
            StorageManager.getInstance().get(StorageCollection.ORDERS).setItem('last_dotpay_payment', getState().dotpay);
            return mockDotpayResponse;
        } catch (e) {
            return null;
        }
    }

    // @ts-ignore
    export const getDotpayStatus = (shouldFail?: boolean, failStatus?: DotpayStatus) => async (dispatch, getState) => {
        try {
            const status = shouldFail ? (failStatus || DotpayStatus.ERROR) : DotpayStatus.SUCCESS;
            await timeoutPromise(15000);
            await dispatch(DotpayActions.setDotpayStatus(status));
            return status;
        } catch (e) {
            console.warn('Error while fetching status: ', e);
            return null;
        }
    };

    export const loadLastDotpayTransaction = () => async (dispatch, getState) => {
        try {
            const lastDotpayPayment: DotpayModuleState = await StorageManager.getInstance().get(StorageCollection.ORDERS).getItem('last_dotpay_payment');
            if (!lastDotpayPayment) { return; }
            dispatch(DotpayActions.setDotpayUrl(lastDotpayPayment.url));
            dispatch(DotpayActions.setDotpayForm(lastDotpayPayment.form));
            dispatch(DotpayActions.setDotpayStatus(lastDotpayPayment.status));
        } catch (e) {}
    };

    export const getRedirectUrl = () => async (dispatch, getState) => {
        try {
            await dispatch(DotpayActions.setDotpayStatus(DotpayStatus.PENDING));
        } catch (e) {

        }
    };

    export const redirectToDotPayViaPostForm = (shouldFail?: boolean, failStatus?: DotpayStatus) => async (dispatch, getState) => {
        await dispatch(DotpayActions.setDotpayStatus(DotpayStatus.PENDING));
        await timeoutPromise(4000);
        if (shouldFail) {
            await dispatch(DotpayActions.setDotpayStatus(failStatus || DotpayStatus.ERROR));
        } else {
            await dispatch(DotpayActions.setDotpayStatus(DotpayStatus.SUCCESS));
        }

        StorageManager.getInstance().get(StorageCollection.ORDERS).setItem('last_dotpay_payment', getState().dotpay);
    };

    export const redirectToDotpayViaUrl = (shouldFail?: boolean, failStatus?: DotpayStatus) => async (dispatch, getState) => {
        await dispatch(DotpayActions.setDotpayStatus(DotpayStatus.PENDING));
        await timeoutPromise(4000);
        if (shouldFail) {
            await dispatch(DotpayActions.setDotpayStatus(failStatus || DotpayStatus.ERROR));
        } else {
            await dispatch(DotpayActions.setDotpayStatus(DotpayStatus.SUCCESS));
        }

        StorageManager.getInstance().get(StorageCollection.ORDERS).setItem('last_dotpay_payment', getState().dotpay);
    };
}
