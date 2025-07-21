export interface User {
    name: string;
    email: string;
    storeId?: string;
}
export interface ProfileProps {
    name: string;
    email: string;
    className?: string;
    fontClassName?: string;
    color: string | undefined;
    iconProfile: string | undefined;
}
export interface ProfileMenuItem {
    id: string;
    label: string;
    icon?: React.ReactNode | string;
    href?: string;
    onClick?: (user?: User) => void;
    target?: '_blank' | '_self';
    disabled?: boolean;
    divider?: boolean;
    className?: string;
    color: string | undefined;
}
export interface MenuProfileI {
    onLogout: () => void;
    profileOpen: boolean;
    user: User;
    profileMenuItems?: ProfileMenuItem[];
    textLogOut: string | undefined;
    onNavigate: (path: string) => void;
    iconProfile: string | undefined;
    colorProfile: string | undefined;
}
//# sourceMappingURL=Profile.type.d.ts.map