import { DotpayResponse, DotpayStatus } from '../types';
export declare namespace MockDotpayThunks {
    const getDotpayForm: () => (dispatch: any, getState: any) => Promise<DotpayResponse>;
    const getDotpayStatus: (shouldFail?: boolean, failStatus?: DotpayStatus) => (dispatch: any, getState: any) => Promise<DotpayStatus>;
    const sendDotpayForm: (shouldFail?: boolean, failStatus?: DotpayStatus) => (dispatch: any, getState: any) => Promise<void>;
    const loadLastDotpayTransaction: () => (dispatch: any, getState: any) => Promise<void>;
}
