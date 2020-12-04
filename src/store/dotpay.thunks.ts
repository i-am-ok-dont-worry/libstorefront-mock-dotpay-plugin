import { DotpayDao } from '../dao';
import { DotpayActions } from './dotpay.actions';
import { IOCContainer } from "@grupakmk/libstorefront";

export namespace DotpayThunks {
    // @ts-ignore
    export const getDotpayForm = (orderId: number) => async (dispatch, getState) => {
        try {
            const response = await IOCContainer.get(DotpayDao).getDotpayForm(orderId);
            let form;
            if (response.result instanceof Array) {
                const [data] = response.result;
                if (data && data.hasOwnProperty('url')) { form = data; }
            } else {
                if (response.result && response.result.hasOwnProperty('url')) { form = response.result; }
            }

            dispatch(DotpayActions.setDotpayForm(form));
            return response;
        } catch (e) {
            return null;
        }
    }

    // @ts-ignore
    export const getDotpayStatus = (orderId: number) => async (dispatch, getState) => {
        try {
            const response = await IOCContainer.get(DotpayDao).getDotpayPaymentStatus(orderId);
            dispatch(DotpayActions.setDotpayStatus(response.result));
        } catch (e) {
            return null;
        }
    }
}
