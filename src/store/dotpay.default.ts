import { DotpayForm } from "../types";

export const DotpayDefaultState: DotpayModuleState = {
    form: null,
    url: null,
    status: null
}

export interface DotpayModuleState {
    form: DotpayForm,
    url: string,
    status: any
}
