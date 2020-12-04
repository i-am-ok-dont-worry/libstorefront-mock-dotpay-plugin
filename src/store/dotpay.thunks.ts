import { DotpayDao } from '../dao';
import { DotpayActions } from './dotpay.actions';
import { AbstractStore, IOCContainer, LibstorefrontInnerState } from "@grupakmk/libstorefront";
import { StorageManager, StorageCollection } from '@grupakmk/libstorefront';
import {DotpayResponse, DotpayStatus} from "../types";
import { DotpayModuleState } from "./dotpay.default";

export namespace DotpayThunks {
    // @ts-ignore
    export const getDotpayForm = (orderId: string) => async (dispatch, getState) => {
        try {
            const response = await IOCContainer.get(DotpayDao).getDotpayForm(orderId);
            let dotpay: DotpayResponse;
            if (response.result instanceof Array) {
                const [data] = response.result;
                if (data && data.hasOwnProperty('url')) { dotpay = data; }
            } else {
                if (response.result && response.result.hasOwnProperty('url')) { dotpay = response.result; }
            }

            StorageManager.getInstance().get(StorageCollection.ORDERS).setItem('last_dotpay_payment', dotpay);
            dispatch(DotpayActions.setDotpayForm(dotpay.data));
            dispatch(DotpayActions.setDotpayUrl(dotpay.url));
            return dotpay;
        } catch (e) {
            return null;
        }
    }

    // @ts-ignore
    export const getDotpayStatus = (orderId: string) => async (dispatch, getState) => {
        try {
            const response = await IOCContainer.get(DotpayDao).getDotpayPaymentStatus(orderId);
            await dispatch(DotpayActions.setDotpayStatus(response.result));
            return response.result as DotpayStatus;
        } catch (e) {
            console.warn('Error while fetching status: ', e);
            return null;
        }
    }

    export const sendDotpayForm = () => async (dispatch, getState) => {
        const orderNumber = (IOCContainer.get(AbstractStore).getState() as LibstorefrontInnerState).order.last_order_confirmation.confirmation.orderNumber;
        const trackStatus = (orderNumber) => {
            const interval = setInterval(async () => {
                const status = await dispatch(getDotpayStatus(orderNumber));
                if (status === DotpayStatus.SUCCESS) { clearInterval(interval); }
            }, 5000);
        };

        try {
            const dotpay = IOCContainer.get(AbstractStore).getState().dotpay as DotpayModuleState;
            const { form, url } = dotpay;
            await IOCContainer.get(DotpayDao).sendDotpayInformationForm(url, form);
            trackStatus(orderNumber);
        } catch (e) {
            trackStatus(orderNumber);
        }
    }
}
