import { LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { DotpayDao } from './dao';
import { DotpayService } from './service';

/**
 * Libstorefront plugin template
 */
export default ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind(DotpayDao).to(DotpayDao);
    libstorefront.getIOCContainer().bind(DotpayService).to(DotpayService);
}) as LibstorefrontPlugin;
