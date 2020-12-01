export declare namespace DotpayThunks {
    const getDotpayForm: (orderId: number) => (dispatch: any, getState: any) => Promise<import("@grupakmk/libstorefront").Task>;
    const getDotpayStatus: (orderId: number) => (dispatch: any, getState: any) => Promise<any>;
}
