import { LibStorefront } from '@grupakmk/libstorefront';
import { DotpayStatus } from "./types";
/**
 * Libstorefront plugin template
 */
export declare const MockDotpayPaymentPlugin: ({ shouldFail, failStatus }: {
    shouldFail?: boolean;
    failStatus?: DotpayStatus;
}) => (libstorefront: LibStorefront) => void;
