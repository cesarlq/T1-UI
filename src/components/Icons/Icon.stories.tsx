import IconDisplay from "./IconDisplay";
import T1IconStory from './T1IconStory';

export default {
  title: "iconsT1/icons",
  parameters: {},
};

export const ExternalLogos = () => {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <IconDisplay type={'logo'} name="T1PaginasLogos">
        <T1IconStory icon="T1PaginasLogos" width={140} height={140} sx={undefined} className={undefined} type={'logo'} />
      </IconDisplay>
      <IconDisplay type={'logo'} name="T1PagosLogos">
        <T1IconStory icon="T1PagosLogos" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="NewT1PagosLogoWhite">
        <T1IconStory icon="NewT1PagosLogoWhite" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="T1EnviosLogo">
        <T1IconStory icon="T1EnviosLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="T1ComerciosLogo">
        <T1IconStory icon="T1ComerciosLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="AmericanExpressLogo">
        <T1IconStory icon="AmericanExpressLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="CarnetLogo">
        <T1IconStory icon="CarnetLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="MastercardLogo">
        <T1IconStory icon="MastercardLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="VisaLogo">
        <T1IconStory icon="VisaLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="CreditoClaroShopLogo">
        <T1IconStory icon="CreditoClaroShopLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="OxxoLogo">
        <T1IconStory icon="OxxoLogo" width={140} height={140} sx={undefined} className={undefined}type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="FedexExpressLogo">
        <T1IconStory icon="FedexExpressLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="EstafetaLogo">
        <T1IconStory icon="EstafetaLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="DhlLogo">
        <T1IconStory icon="DhlLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="ExpressLogo">
        <T1IconStory icon="ExpressLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="ClaroScoreLogo">
        <T1IconStory icon="ClaroScoreLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="BanorteLogo">
        <T1IconStory icon="BanorteLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="BBVALogo">
        <T1IconStory icon="BBVALogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="CitibanamexLogo">
        <T1IconStory icon="CitibanamexLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="HSBCLogo">
        <T1IconStory icon="HSBCLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="InbursaLogo">
        <T1IconStory icon="InbursaLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="InvexLogo">
        <T1IconStory icon="InvexLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="PayPalLogo">
        <T1IconStory icon="PayPalLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="SantanderLogo">
        <T1IconStory icon="SantanderLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="ScotiabankLogo">
        <T1IconStory icon="ScotiabankLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="StripeLogo">
        <T1IconStory icon="StripeLogo" width={140} height={140} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
    </div>
  );
};

ExternalLogos.storyName = "External Logos";
ExternalLogos.args = {
  width: 140,
  height: 140,
  title: "Icon Title Here",
  classes: [""],
  ariaHidden: false,
  // fill: "#000",
};
ExternalLogos.argTypes = {
  fill: {
    control: {
      type: "color",
    },
  },
};

export const EcommerceIcons = () => {
  return (
    <div  
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <IconDisplay type={'logo'} name="T1Paginas">
        <T1IconStory icon="T1Paginas" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="SearsLogo">
        <T1IconStory icon="SearsLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="SanbornsLogo">
        <T1IconStory icon="SanbornsLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="MercadoLibreIconLogo">
        <T1IconStory icon="MercadoLibreIconLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
      <IconDisplay type={'logo'} name="AmazonIconLogo">
        <T1IconStory icon="AmazonIconLogo" width={24} height={24} sx={undefined} className={undefined} type={'logo'}  />
      </IconDisplay>
    </div>
  );
};
EcommerceIcons.storyName = "Ecommerce Icons";
EcommerceIcons.args = {
  width: 140,
  height: 140,
  title: "Icon Title Here",
  classes: [""],
  // ariaHidden: false,
  // fill: "#000",
};
EcommerceIcons.argTypes = {
  color: {
    control: {
      type: "color",
    },
  },
};

export const AllLegacyIcons = () => {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <div>
        <IconDisplay type={'icon'} name="AbacusIcon">
          <T1IconStory icon="AbacusIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="AddressesAlternativeIcon">
          <T1IconStory icon="AddressesAlternativeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="AddressesIcon">
          <T1IconStory icon="AddressesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="AlertIcon">
          <T1IconStory icon="AlertIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="AnalysisIcon">
          <T1IconStory icon="AnalysisIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="AntifraudIcon">
          <T1IconStory icon="AntifraudIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="AverageWeightIcon">
          <T1IconStory icon="AverageWeightIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="BagMoneyIcon">
          <T1IconStory icon="BagMoneyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="BalanceIcon">
          <T1IconStory icon="BalanceIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="BillsIcon">
          <T1IconStory icon="BillsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="BusinessAndFinanceIcon">
          <T1IconStory icon="BusinessAndFinanceIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="CalendarIcon">
          <T1IconStory icon="CalendarIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="CatalogsIcon">
          <T1IconStory icon="CatalogsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="CloseIcon">
          <T1IconStory icon="CloseIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="CoinsIcon">
          <T1IconStory icon="CoinsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="CompanyIcon">
          <T1IconStory icon="CompanyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="DashboardIcon">
          <T1IconStory icon="DashboardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="DealIcon">
          <T1IconStory icon="DealIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="DeleteIcon">
          <T1IconStory icon="DeleteIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="DevelopmentIcon">
          <T1IconStory icon="DevelopmentIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="DownloadIcon">
          <T1IconStory icon="DownloadIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="EditIcon">
          <T1IconStory icon="EditIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="EmailIcon">
          <T1IconStory icon="EmailIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="ExitIcon">
          <T1IconStory icon="ExitIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="FilterIcon">
          <T1IconStory icon="FilterIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="FlowIcon">
          <T1IconStory icon="FlowIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="GenerateCollectionsIcon">
          <T1IconStory icon="GenerateCollectionsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="GenerateGuidesIcon">
          <T1IconStory icon="GenerateGuidesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="GuideHistoryIcon">
          <T1IconStory icon="GuideHistoryIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="GuideTrackingIcon">
          <T1IconStory icon="GuideTrackingIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="HelpIcon">
          <T1IconStory icon="HelpIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="HomeIcon">
          <T1IconStory icon="HomeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="InventoryIcon">
          <T1IconStory icon="InventoryIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="ListIcon">
          <T1IconStory icon="ListIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="LocationIcon">
          <T1IconStory icon="LocationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="MoneyIcon">
          <T1IconStory icon="MoneyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="MyOrdersIcon">
          <T1IconStory icon="MyOrdersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="MyProductsIcon">
          <T1IconStory icon="MyProductsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NotificationIcon">
          <T1IconStory icon="NotificationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="PaymentLinkIcon">
          <T1IconStory icon="PaymentLinkIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="RatesIcon">
          <T1IconStory icon="RatesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="ReportIcon">
          <T1IconStory icon="ReportIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="ReportsIcon">
          <T1IconStory icon="ReportsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="ReputationIcon">
          <T1IconStory icon="ReputationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="RulesIcon">
          <T1IconStory icon="RulesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="SalesChannelIcon">
          <T1IconStory icon="SalesChannelIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="SalesChannelsIcon">
          <T1IconStory icon="SalesChannelsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="SalesIcon">
          <T1IconStory icon="SalesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="SearchIcon">
          <T1IconStory icon="SearchIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="TicketIcon">
          <T1IconStory icon="TicketIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="TrackOrdersIcon">
          <T1IconStory icon="TrackOrdersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="TransactionsIcon">
          <T1IconStory icon="TransactionsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="UserIcon">
          <T1IconStory icon="UserIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="UsersIcon">
          <T1IconStory icon="UsersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="VideoIcon">
          <T1IconStory icon="VideoIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="WhatsAppIcon">
          <T1IconStory icon="WhatsAppIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NavigationArrowIcon">
          <T1IconStory icon="NavigationArrowIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="ChargebackIcon">
          <T1IconStory icon="ChargebackIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="DevelopersIcon">
          <T1IconStory icon="DevelopersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="LinkIcon">
          <T1IconStory icon="LinkIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="GraphicReportsListIcon">
          <T1IconStory icon="GraphicReportsListIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="FinancialCardIcon">
          <T1IconStory icon="FinancialCardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="CheckIcon">
          <T1IconStory icon="CheckIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="AddIcon">
          <T1IconStory icon="AddIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="PaginationNextIcon">
          <T1IconStory icon="PaginationNextIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="PaginationNextIcon">
          <T1IconStory 
            icon="PaginationNextIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="PaginationSkipIcon">
          <T1IconStory 
            icon="PaginationSkipIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="PaginationSkipIcon">
          <T1IconStory icon="PaginationSkipIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NextOutlinedIcon">
          <T1IconStory 
            icon="NextOutlinedIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NextOutlinedIcon">
          <T1IconStory icon="NextOutlinedIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="SkipOutlinedIcon">
          <T1IconStory 
            icon="SkipOutlinedIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="SkipOutlinedIcon">
          <T1IconStory icon="SkipOutlinedIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="MenuArrowIcon">
          <T1IconStory icon="MenuArrowIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="MenuArrowIcon">
          <T1IconStory 
            icon="MenuArrowIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }} className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
    </div>
  );
};

AllLegacyIcons.storyName = "All Legacy Icons";
AllLegacyIcons.args = {
  width: 140,
  height: 140,
};
AllLegacyIcons.argTypes = {
  color: {
    control: {
      type: "color",
    },
  },
};


export const AllNewIcons = () => {
  return (
    <div  
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center'
      }}>
      <div>
        <IconDisplay type={'icon'} name="NewChangeNameIcon">
          <T1IconStory icon="NewChangeNameIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewChargebacksIcon">
          <T1IconStory icon="NewChargebacksIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCompanyRegistrationIcon">
          <T1IconStory icon="NewCompanyRegistrationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewDeactivateIcon">
          <T1IconStory icon="NewDeactivateIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewDecisionManagerIcon">
          <T1IconStory icon="NewDecisionManagerIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewDevelopersIcon">
          <T1IconStory icon="NewDevelopersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewDragAndMoveIcon">
          <T1IconStory icon="NewDragAndMoveIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewFinanceIcon">
          <T1IconStory icon="NewFinanceIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewFlowAdminIcon">
          <T1IconStory icon="NewFlowAdminIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewHomeIcon">
          <T1IconStory icon="NewHomeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewMyStoreIcon">
          <T1IconStory icon="NewMyStoreIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewPaymentLinkIcon">
          <T1IconStory icon="NewPaymentLinkIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewProfilesIcon">
          <T1IconStory icon="NewProfilesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewReportsIcon">
          <T1IconStory icon="NewReportsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewRolesAndUsersIcon">
          <T1IconStory icon="NewRolesAndUsersIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewSupplierAdminIcon">
          <T1IconStory icon="NewSupplierAdminIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewTransactionsIcon">
          <T1IconStory icon="NewTransactionsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewHubFlowsIcon">
          <T1IconStory icon="NewHubFlowsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewSettingsIcon">
          <T1IconStory icon="NewSettingsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewExpandMenuIcon">
          <T1IconStory icon="NewExpandMenuIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewExpandMenuIcon">
          <T1IconStory 
            icon="NewExpandMenuIcon"
            width={24}
            height={24}
            sx={{ transform: "rotate(180deg)" }}
            className={undefined} type={'icon'}           />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewRulesetIcon">
          <T1IconStory icon="NewRulesetIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCustomFieldsIcon">
          <T1IconStory icon="NewCustomFieldsIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewAntiFraudIcon">
          <T1IconStory icon="NewAntiFraudIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewBalancesIcon">
          <T1IconStory icon="NewBalancesIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewAmexIcon">
          <T1IconStory icon="NewAmexIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewApprovedIcon">
          <T1IconStory icon="NewApprovedIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCalendarIcon">
          <T1IconStory icon="NewCalendarIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCarnetIcon">
          <T1IconStory icon="NewCarnetIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewEditIcon">
          <T1IconStory icon="NewEditIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewExcelIcon">
          <T1IconStory icon="NewExcelIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewFilterIcon">
          <T1IconStory icon="NewFilterIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewInfoIcon">
          <T1IconStory icon="NewInfoIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewMailIcon">
          <T1IconStory icon="NewMailIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewMastercardIcon">
          <T1IconStory icon="NewMastercardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewSpeiIcon">
          <T1IconStory icon="NewSpeiIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewVisaIcon">
          <T1IconStory icon="NewVisaIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCopyIcon">
          <T1IconStory icon="NewCopyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewEyeIcon">
          <T1IconStory icon="NewEyeIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewIntegrationIcon">
          <T1IconStory icon="NewIntegrationIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewFileTextIcon">
          <T1IconStory icon="NewFileTextIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewLockIcon">
          <T1IconStory icon="NewLockIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewMobileIcon">
          <T1IconStory icon="NewMobileIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewPCIcon">
          <T1IconStory icon="NewPCIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCameraIcon">
          <T1IconStory icon="NewCameraIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCreditCardIcon">
          <T1IconStory icon="NewCreditCardIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewBoxIcon">
          <T1IconStory icon="NewBoxIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewCurrencyIcon">
          <T1IconStory icon="NewCurrencyIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewFacebookIcon">
          <T1IconStory icon="NewFacebookIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
      <div>
        <IconDisplay type={'icon'} name="NewWhatsappIcon">
          <T1IconStory icon="NewWhatsappIcon" width={24} height={24} sx={undefined} className={undefined} type={'icon'}  />
        </IconDisplay>
      </div>
    </div>
  );
};


export const MenuIcons = () => {
  return (<>
    <div style={{display:'grid', gap:'1rem', gridArea:'head', textAlign:'center' }}>
      <h1 style={{fontSize:'2rem'}}>
        Menu Icons
      </h1>
      <hr style={{height:'2px', width:'90%', color:'gray'}} />
    </div>
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center',
        paddingTop:'2rem'
      }}>

      <IconDisplay type={'menuIcon'} name="crownIcon">
        <T1IconStory icon="crownIcon" width={40} height={40} sx={undefined} className={undefined} type={'menuIcon'} />
      </IconDisplay>
    
      <IconDisplay type={'menuIcon'} name="gridIcon">
        <T1IconStory icon="gridIcon" width={40} height={40} sx={undefined} className={undefined} type={'menuIcon'} />
      </IconDisplay>

      <IconDisplay type={'menuIcon'} name="shareIcon">
        <T1IconStory icon="shareIcon" width={40} height={40} sx={undefined} className={undefined} type={'menuIcon'} />
      </IconDisplay>


    </div>

    <div style={{display:'grid', gap:'1rem', gridArea:'head', textAlign:'center', paddingTop:'4rem' }}>
      <h1 style={{fontSize:'1rem'}}>
        Menu Icons Inactive
      </h1>
      <hr style={{height:'2px', width:'90%', color:'gray'}} />
    </div>

    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center',
        paddingTop:'2rem'
    }}>

      <IconDisplay type={'menuIconInactive'} name="ChannelsSvg">
        <T1IconStory icon="ChannelsSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>
    
      <IconDisplay type={'menuIconInactive'} name="ClipSvg">
        <T1IconStory icon="ClipSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="GraphicSvg">
        <T1IconStory icon="GraphicSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="Home">
        <T1IconStory icon="Home" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="HubspotSvg">
        <T1IconStory icon="HubspotSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="ImageSvg">
        <T1IconStory icon="ImageSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="MegaphonSvg">
        <T1IconStory icon="MegaphonSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="PaymentSvg">
        <T1IconStory icon="PaymentSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="ProfileSvg">
        <T1IconStory icon="ProfileSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="ProductsSvg">
        <T1IconStory icon="ProductsSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="ReportsSvg">
        <T1IconStory icon="ReportsSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="ShopSvg">
        <T1IconStory icon="ShopSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="TagSvg">
        <T1IconStory icon="TagSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="TicketSvg">
        <T1IconStory icon="TicketSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="TrukSvg">
        <T1IconStory icon="TrukSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="UrlSvg">
        <T1IconStory icon="UrlSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconInactive'} name="paymenthSvg">
        <T1IconStory icon="paymenthSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconInactive'} />
      </IconDisplay>

    </div>

        <div style={{display:'grid', gap:'1rem', gridArea:'head', textAlign:'center', paddingTop:'4rem' }}>
      <h1 style={{fontSize:'1rem'}}>
        Menu Icons Active
      </h1>
      <hr style={{height:'2px', width:'90%', color:'gray'}} />
    </div>

    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '3rem',
        justifySelf:'center',
        paddingTop:'2rem'
    }}>

      <IconDisplay type={'menuIconActive'} name="BillSvg">
        <T1IconStory icon="BillSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="ChannelsSvg">
        <T1IconStory icon="ChannelsSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>
    
      <IconDisplay type={'menuIconActive'} name="ClipSvg">
        <T1IconStory icon="ClipSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="DocSvg">
        <T1IconStory icon="DocSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="GpsMarkerSvg">
        <T1IconStory icon="GpsMarkerSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="GraphicSvg">
        <T1IconStory icon="GraphicSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="Home">
        <T1IconStory icon="Home" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="HubspotSvg">
        <T1IconStory icon="HubspotSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="IdiomaSvg">
        <T1IconStory icon="IdiomaSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="ImageSvg">
        <T1IconStory icon="ImageSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="LockSvg">
        <T1IconStory icon="LockSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="MegaphonSvg">
        <T1IconStory icon="MegaphonSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="PaymentSvg">
        <T1IconStory icon="PaymentSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="PersonalinfoSvg">
        <T1IconStory icon="PersonalinfoSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="PlanpagoSvg">
        <T1IconStory icon="PlanpagoSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="ProductsSvg">
        <T1IconStory icon="ProductsSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="ProfileSvg">
        <T1IconStory icon="ProfileSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="ReportsSvg">
        <T1IconStory icon="ReportsSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="ShopSvg">
        <T1IconStory icon="ShopSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="TagSvg">
        <T1IconStory icon="TagSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="TicketSvg">
        <T1IconStory icon="TicketSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="TrukSvg">
        <T1IconStory icon="TrukSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>

      <IconDisplay type={'menuIconActive'} name="UrlSvg">
        <T1IconStory icon="UrlSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>


      <IconDisplay type={'menuIconActive'} name="paymenthSvg">
        <T1IconStory icon="paymenthSvg" width={40} height={40} sx={undefined} className={undefined} type={'menuIconActive'} />
      </IconDisplay>


    </div>
  </>);
};

export const Iconography = () => {
  return (
    <div>
      <h1>Iconography</h1>
      <p>Our icon system includes several categories of icons for different purposes.</p>
      <ul>
        <li>External Logos - Brand logos for partners and services</li>
        <li>Ecommerce Icons - Icons specific to ecommerce functionality</li>
        <li>Legacy Icons - Our older icon set</li>
        <li>New Icons - Our refreshed icon library</li>
      </ul>
      <p>Select a category from the sidebar to view the specific icons.</p>
    </div>
  );
};
Iconography.storyName = "Iconography";

AllNewIcons.storyName = "All New Icons";
AllNewIcons.args = {
  width: 140,
  height: 140,
};
AllNewIcons.argTypes = {
  color: {
    control: {
      type: "color",
    },
  },
};
