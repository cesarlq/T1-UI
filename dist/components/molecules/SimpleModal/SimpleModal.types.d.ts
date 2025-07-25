import { ReactNode } from 'react';
export interface SimpleModalProps {
    title: string;
    onClose: () => void;
    children: ReactNode;
    closeIcon?: ReactNode;
    className?: {
        mainContainer?: string;
        headerProfile?: string;
        btnClose?: string;
        contentContainer?: string;
    };
    styles?: {
        mainContainer?: React.CSSProperties;
        headerProfile?: React.CSSProperties;
        contentContainer?: React.CSSProperties;
    };
}
//# sourceMappingURL=SimpleModal.types.d.ts.map