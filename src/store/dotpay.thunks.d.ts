export declare namespace DotpayThunks {
    const getDotpayForm: (orderId: number) => (dispatch: any, getState: any) => Promise<import("@grupakmk/libstorefront").Task | null>;
    const getDotpayStatus: (orderId: number) => (dispatch: any, getState: any) => Promise<null | undefined>;
}
