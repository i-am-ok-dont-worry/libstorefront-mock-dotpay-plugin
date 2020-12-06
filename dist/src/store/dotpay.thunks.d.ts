import { DotpayResponse, DotpayStatus } from '../types';
export declare namespace MockDotpayThunks {
    const getDotpayForm: () => (dispatch: any, getState: any) => Promise<DotpayResponse>;
    const getDotpayStatus: (shouldFail?: boolean, failStatus?: DotpayStatus) => (dispatch: any, getState: any) => Promise<DotpayStatus>;
    const loadLastDotpayTransaction: () => (dispatch: any, getState: any) => Promise<void>;
    const getRedirectUrl: () => (dispatch: any, getState: any) => Promise<void>;
    const redirectToDotPayViaPostForm: (shouldFail?: boolean, failStatus?: DotpayStatus) => (dispatch: any, getState: any) => Promise<void>;
    const redirectToDotpayViaUrl: (shouldFail?: boolean, failStatus?: DotpayStatus) => (dispatch: any, getState: any) => Promise<void>;
}
