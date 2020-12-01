import {createLibstorefrontModule, LibStorefront} from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { DotpayDao } from './dao';
import { DotpayService } from './service';
import { dotpayReducer } from './store/dotpay.reducer';
import { DotpayDefaultState } from './store/dotpay.default';

/**
 * Libstorefront plugin template
 */
export default ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind(DotpayDao).to(DotpayDao);
    libstorefront.getIOCContainer().bind(DotpayService).to(DotpayService);
    debugger;
    libstorefront.registerModule(createLibstorefrontModule('dotpay', dotpayReducer, DotpayDefaultState));
}) as LibstorefrontPlugin;
