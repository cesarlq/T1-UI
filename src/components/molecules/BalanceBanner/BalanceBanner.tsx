import { styled } from '@mui/material/styles';
import WalletIcon from '@/assets/svg-icons/wallet-icon.svg?react';
import ArrowMenu from '@/assets/svg-icons/arrow-menu.svg?react';
import { BalanceBannerI } from './BalanceBanner.type';
import { numberFormatWithoutRound } from '@/utils/dataFormat';

const StyledBalanceContainer = styled('a')(({ theme }) => ({
  display: 'flex',
  gap: '9px',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid #E7E7E7',
  height: '30px',
  fontSize: '14px',
  fontWeight: 700,
  flexShrink: 0,
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  
  // .wallet-icon (primer SVG hijo)
  '& > svg:first-of-type': {
    marginLeft: '10px',
  },
  
  // .arrow (último SVG hijo)
  '& > svg:last-of-type': {
    transform: 'rotate(90deg)',
    marginRight: '10px',
  },
  
  // .icon
  '& .icon': {
    marginRight: 0,
  },
  
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
  },
}));

const BalanceText = styled('span')({});

export default function BalanceBanner({ 
  className, 
  balance, 
  BALLANCE_PATH 
}: BalanceBannerI) {
  
  const linkProps = {
    href: BALLANCE_PATH,
    className: className,
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  };
  
  return (
    <StyledBalanceContainer {...linkProps}>
      <WalletIcon />
      <BalanceText>
        $ {numberFormatWithoutRound((balance && balance.monto_actual) || 0)}
      </BalanceText>
      <ArrowMenu />
    </StyledBalanceContainer>
  );
}