import {createLibstorefrontModule, HookType, LibStorefront} from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { DotpayDao } from './dao';
import { DotpayService } from './service';
import { dotpayReducer } from './store/dotpay.reducer';
import { DotpayDefaultState } from './store/dotpay.default';

/**
 * Libstorefront plugin template
 */
export default ((libstorefront: LibStorefront) => {
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
        lsf.getIOCContainer().bind(DotpayDao).to(DotpayDao);
        lsf.getIOCContainer().bind(DotpayService).to(DotpayService);
        lsf.registerModule(createLibstorefrontModule('dotpay', dotpayReducer, DotpayDefaultState));
    });
}) as LibstorefrontPlugin;
