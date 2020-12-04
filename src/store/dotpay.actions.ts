import { DotpayForm } from '../types';

export namespace DotpayActions {
    export const SN_DOTPAY = 'dotpay';
    export const SET_DOTPAY_FORM = SN_DOTPAY + '/SET_FORM';
    export const setDotpayForm = (form: DotpayForm) => ({
        type: SET_DOTPAY_FORM,
        payload: form
    });

    export const SET_DOTPAY_URL = SN_DOTPAY + '/SET_URL';
    export const setDotpayUrl = (url: string) => ({
        type: SET_DOTPAY_URL,
        payload: url
    });

    export const SET_DOTPAY_STATUS = SN_DOTPAY + '/SET_STATUS';
    export const setDotpayStatus = (status: any) => ({
        type: SET_DOTPAY_STATUS,
        payload: status
    });
}
