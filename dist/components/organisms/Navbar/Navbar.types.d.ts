import { balanceI } from '../../molecules/BalanceBanner/BalanceBanner.type';
import { ProfileMenuItem, User } from '../../molecules/Profile/Profile.type';
import { Store } from '../../molecules/StoreSelector/StoreSelector.type';
import { T1SelectorProps } from '../../molecules/T1Selector/T1Selector.types';

export interface NavbarPropsI {
    className?: string;
    showInfoBand?: boolean;
    showSearchInput?: boolean;
    showBalance?: boolean;
    user?: User | null;
    stores?: Store[];
    currentStore?: Store;
    shippingBannerTitle?: string;
    profileMenuItems?: ProfileMenuItem[];
    onLogout?: () => void;
    onSearch?: (data: {
        search: string;
    }) => void;
    onManageAccount?: (user: User) => void;
    onStoreChange?: (storeId: number) => void;
    onNavigate?: () => void;
    onReducerHandle: () => void;
    sidebarReduce: boolean;
    isMobile?: boolean;
    BalanceBannerComponent?: React.ComponentType<{
        className?: string;
    }>;
    balanceBannerConfig?: {
        balance: balanceI;
        BALLANCE_PATH: string;
    };
    T1Selector?: React.ComponentType<any>;
    SearchComponent?: React.ComponentType<any>;
    t1SelectorConfig?: T1SelectorProps | null | undefined;
    itemsOrder?: ('store' | 'shipping' | 'payment')[];
    searchPlaceholder?: string;
    trackingUrl?: string;
    accountUrl?: string;
    texts?: {
        logout?: string;
        searchPlaceholder?: string;
    };
    iconProfile?: string | undefined;
    colorProfile?: string;
}
//# sourceMappingURL=Navbar.types.d.ts.map