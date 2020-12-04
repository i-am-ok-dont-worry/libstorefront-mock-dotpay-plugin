import { DotpayForm } from '../types';
export declare namespace DotpayActions {
    const SN_DOTPAY = "dotpay";
    const SET_DOTPAY_FORM: string;
    const setDotpayForm: (form: DotpayForm) => {
        type: string;
        payload: DotpayForm;
    };
    const SET_DOTPAY_URL: string;
    const setDotpayUrl: (url: string) => {
        type: string;
        payload: string;
    };
    const SET_DOTPAY_STATUS: string;
    const setDotpayStatus: (status: any) => {
        type: string;
        payload: any;
    };
}
