export const DotpayDefaultState: DotpayModuleState = {
    form: null,
    status: null
}

export interface DotpayModuleState {
    form: string|null,
    status: any
}
