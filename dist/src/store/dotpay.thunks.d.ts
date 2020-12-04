import { DotpayResponse } from "../types";
export declare namespace DotpayThunks {
    const getDotpayForm: (orderId: string) => (dispatch: any, getState: any) => Promise<DotpayResponse>;
    const getDotpayStatus: (orderId: string) => (dispatch: any, getState: any) => Promise<import("@grupakmk/libstorefront").Task>;
    const sendDotpayForm: () => (dispatch: any, getState: any) => Promise<void>;
}
