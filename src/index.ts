import { createLibstorefrontModule, HookType, LibStorefront } from '@grupakmk/libstorefront';
import { MockDotpayService } from './service';
import { dotpayReducer } from './store/dotpay.reducer';
import { DotpayDefaultState } from './store/dotpay.default';
import { DotpayStatus } from "./types";

/**
 * Libstorefront plugin template
 */
export const MockDotpayPaymentPlugin = ({ shouldFail = false, failStatus = DotpayStatus.SUCCESS }) => (libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<MockDotpayService>(MockDotpayService).to(MockDotpayService);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
        lsf.registerModule(createLibstorefrontModule('dotpay', dotpayReducer, DotpayDefaultState));
        lsf.getIOCContainer().get(MockDotpayService).setConfig({ shouldFail, failStatus });
    });
    libstorefront.listenTo(HookType.AfterInit, () => libstorefront.getIOCContainer().get(MockDotpayService).loadLastTransactionFromCache());
};
