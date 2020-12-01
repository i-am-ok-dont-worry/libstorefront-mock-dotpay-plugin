import {createLibstorefrontModule, HookType, IOCContainer, LibStorefront} from '@grupakmk/libstorefront';
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
        IOCContainer.bind(DotpayDao).to(DotpayDao);
        IOCContainer.bind(DotpayService).to(DotpayService);
        lsf.registerModule(createLibstorefrontModule('dotpay', dotpayReducer, DotpayDefaultState));
    });
}) as LibstorefrontPlugin;
