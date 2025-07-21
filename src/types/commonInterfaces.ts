import { ProfileMenuItem } from "@/components/molecules/Profile/Profile.type";
import { ChipProps, CheckboxProps, ButtonProps, TextFieldProps, StandardTextFieldProps, Theme, SxProps, SelectChangeEvent, TypographyProps, OutlinedTextFieldProps } from "@mui/material";
import { JSX, ReactNode, SetStateAction, Dispatch } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

export interface AuthContentI {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  formData: OnBoardingFormI | null
}

export interface BalanceBannerI {
    className?: string,
    balance: balanceI,
    BALLANCE_PATH: string
}

export interface balanceI {
    monto_actual: number
    comercio_id: number
    comercio_id_t1paginas: string
    credito: boolean
}


export interface CustomInputProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  // Propiedades básicas
  label?: string | React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  
  // Contenido y valor
  textFieldProps?: OutlinedTextFieldProps & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  };
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  
  // Validación
  error?: boolean;
  helperText?: string | React.ReactNode;
  validation?: (value: string) => boolean | { isValid: boolean; message?: string };
  maxLength?: number;
  minLength?: number;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  
  // Comportamiento
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
  autoFocus?: boolean;
  clearable?: boolean;
  
  // Personalización visual
  tooltip?: string | React.ReactNode;
  tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
  helperTextSx?: SxProps<Theme>;
  borderRadius?: number | string;
  borderColor?: string;
  focusBorderColor?: string;
  
  // Control del diseño
  fullWidth?: boolean;
  hideLabel?: boolean;
  compact?: boolean;
  customStyles?: {
    container?: React.CSSProperties;
    label?: React.CSSProperties;
    input?: React.CSSProperties;
    helperText?: React.CSSProperties;
  };
  showCharCount?: boolean;
}

export interface OnBoardingFormI {
  storeTitle: string;
  productNames: string;
  productQuantity: string;
  physicalStore: boolean;
  storeDescription: string;
  storeStyle: StyleStore;
  logotype: FileOrString;
  favicon: FileOrString;
  authorization: string;
  language: Language;
  storeIndustry: string
  productCollections: string[] | undefined
  productSuggestions?: SuggestionI[]
  colorSuggestions: string[]
  otherCategories: string[]
  hasProducts: boolean
}

export interface SuggestionI { name: string }
export type FileOrString = File | string
export type StyleStore = 'minimalist' | 'fun' | 'classic' | 'formal'
export type Language = 'spanish' | 'english'


export interface FormControlSelectItemProps {
  value?: any;
  onClick?: (e: any) => void;
  label?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export interface CheckBoxSelectProps extends Omit<TypographyProps, 'checkbox' | 'icon' | 'onCheckboxClick'> {
  checkbox?: boolean;
  icon?: string | React.ReactNode;
  onCheckboxClick?: () => void;
  children?: React.ReactNode;
}

export interface MenuItemProps {
  onClick?: (e: any) => void;
  sx?: any;
  [key: string]: any;
}


export interface ChildProps {
  label?: string;
  onClick?: () => void;
  icon?: string;
  [key: string]: any;
}

export interface ProfileUser {
  name?: string;
  email: string;
  avatar?: string;
}

export interface ProfileAvatarMenuProps {
  /**
   * User data to display
   */
  user: ProfileUser;
  
  /**
   * Menu items to display in the dropdown
   */
  menuItems: ProfileMenuItem[];
  
  /**
   * Whether to show the user name in header (next to avatar)
   * @default true
   */
  showNameInHeader?: boolean;
  
  /**
   * Whether to show user details at top of menu
   * @default true
   */
  showUserInMenu?: boolean;
  
  /**
   * Custom avatar component
   */
  customAvatar?: ReactNode;
  
  /**
   * Size of avatar in header
   * @default 40
   */
  avatarSize?: number;
  
  /**
   * Size of avatar in menu
   * @default 50
   */
  menuAvatarSize?: number;
  
  /**
   * Primary color for avatar background
   * @default '#db3b2b'
   */
  avatarBgColor?: string;
  
  /**
   * CSS class names for styling
   */
  className?: {
    container?: string;
    name?: string;
    avatarButton?: string;
    menu?: string;
    menuUserInfo?: string;
    menuUsername?: string;
    menuEmail?: string;
    menuItem?: string;
  };
  
  /**
   * Additional styles using MUI sx prop
   */
  sx?: {
    container?: SxProps<Theme>;
    avatar?: SxProps<Theme>;
    menuAvatar?: SxProps<Theme>;
    menu?: SxProps<Theme>;
  };
}

export interface TableColumnT1<T = any> {
  id: string;
  label: string;
  numeric?: boolean;
  width?: string | number;
  sortable?: boolean;
  renderCell?: (row: T) => React.ReactNode;
  align?: 'left' | 'right' | 'center';
  cellClassName?: string;
  headerClassName?: string;
  hidden?: boolean;
}

// Extendemos la interfaz para añadir soporte para paginación en servidor
export interface TableT1Props<T extends Record<string, any>> {
  // Core data
  columns: Array<{
    id: string;
    label: string;
    numeric?: boolean;
    width?: string | number;
    align?: 'left' | 'right' | 'center';
    sortable?: boolean;
    hidden?: boolean;
    headerClassName?: string;
    cellClassName?: string;
    renderCell?: (row: T) => React.ReactNode;
  }>;
  data: T[];
  
  // Key configuration
  idKey?: string;
  
  // State options
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  
  // Features flags
  selectable?: boolean;
  sortable?: boolean;
  pageable?: boolean;
  searchable?: boolean;
  expandable?: boolean;
  
  // Callbacks
  onRowClick?: (row: T) => void;
  onRowExpand?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  
  // Server-side pagination
  serverSidePagination?: boolean;
  totalCount?: number; // Total count of records from server
  onPageChange?: (page: number, rowsPerPage: number) => void; // Callback for when page changes
  onSortChange?: (orderBy: string, order: 'asc' | 'desc') => void; // Callback for when sort changes
  
  // Pagination options
  pageSize?: number;
  pageSizeOptions?: number[];
  
  // Custom renderers
  renderRowActions?: (row: T) => React.ReactNode;
  renderExpandedRow?: (row: T) => React.ReactNode;
  renderTableHeader?: () => React.ReactNode;
  
  // Styling
  containerSx?: Record<string, any>;
  tableSx?: Record<string, any>;
  headerRowSx?: Record<string, any>;
  bodyRowSx?: Record<string, any>;
  expansionPanelSx?: Record<string, any>;
  
  // Additional options
  searchPlaceholder?: string;
  stickyHeader?: boolean;
  searchDelay?: number;
  onSearchChange?: (searchTerm: string) => void;
  defaultSortColumn?: string;
  defaultSortDirection?: 'asc' | 'desc';
}

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

export interface SidebarProps {
  testMode?: boolean; // Flag para modo de prueba
  className?: string;
  router?: any;
  logoFull: string;
  logoReduced: string;
  servicePaths?: ServiceOption[];
  menuItems: MenuItem[];
  initialReduceState?: boolean;
  breakpointWidth?: number;
  userInfo?: any;
  onServiceOptionClick?: (option: ServiceOption) => void;
  onSidebarReduceChange?: (reduced: boolean) => void;
  onClickMenuItem?: (item: MenuItem, index: number) => void;
  customStyles?: {
    sidebar?: React.CSSProperties;
    header?: React.CSSProperties;
    logo?: React.CSSProperties;
    submenu?: React.CSSProperties;
    paths?: React.CSSProperties;
    buttonReduce?: React.CSSProperties;
  };
}

export interface ServiceOption {
  name: string;
  icon: string;
  type: string;
  width?: number;
  iconReduced?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon?: string;
  subItems?: SubMenuItem[];
  hidden?: boolean;
}

export interface SubMenuItem {
  id: string;
  title: string;
  path: string;
  hidden?: boolean;
}


export interface MenuOption {
  id: number;
  label: string;
  icon: string;
  value: number;
  component: ReactNode;
}

export interface Country {
  code: string;
  name: string;
  prefix: string;
}

export interface PhoneInputT1Props {
  initialRegion?: string;
  initialPhoneNumber?: string;
  countries?: Country[];
  onChange?: (region: string, phoneNumber: string) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

export interface ProfileComponentProps {
  title: string;
  onClose: () => void;
  menuOptions: MenuOption[];
  closeIcon?: ReactNode;
  iconComponent: (props: { icon: string; width: number; height: number }) => JSX.Element;
  className?: {
    mainContainer?: string;
    headerProfile?: string;
    btnClose?: string;
    sectionProfile?: string;
    containerLeft?: string;
    paper?: string;
    listItemText?: string;
    menuItem?: string;
    menuItemSelected?: string;
  };
  styles?: {
    mainContainer?: React.CSSProperties;
    headerProfile?: React.CSSProperties;
    sectionProfile?: React.CSSProperties;
    contentContainer?: React.CSSProperties;
  };
}

export interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export interface CustomPaginationProps {
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange: (event: SelectChangeEvent<number>) => void;
  rowsPerPageOptions?: number[];
}

export interface CollapsibleCardT1Props {
  onCollapseChange?: (isCollapsed: boolean) => void;
  title?: React.ReactNode;
  headerContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  collapseContent?: React.ReactNode;
  defaultCollapsed?: boolean;
  cardSx?: any;
  headerSx?: any;
  bodySx?: any;
  footerSx?: any;
  collapseSx?: any;
  collapseButtonSx?: any;
  hideCollapseButton?: boolean;
  loading?: boolean;
}

export interface CloseButtonT1Props {
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'secondary' | 'error';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export interface ChipColorDefinition {
  backgroundColor: {
    filled: string;
    outlined: string;
  };
  color: {
    filled: string;
    outlined: string;
  };
  borderColor: {
    filled: string;
    outlined: string;
  };
}

// Extended props to include additional customization options
export interface ExtendedChipProps extends ChipProps {
  // Allow custom color definitions
  customColorDefinition?: Partial<ChipColorDefinition>;
  
  // Hover and interaction states
  hoverEffect?: boolean;
}

export interface NumericFormatProps {
    onChange: (event: { target: { name?: string; value?: number } }) => void;
    name?: string;
    currency?: string;
    min?: number;
}

export interface AmountInputI<T extends FieldValues>
    extends UseControllerProps<T> {
    textFieldProps?: StandardTextFieldProps;
    currency?: string;
    label?: string;
    onChange?: any;
    tooltip?: string;
}

export interface SelectComponentPropsI {
    onClick?: () => void;
    buttonType?: 'solid' | 'outline' | 'text';
    label?: string;
    endIcon?: React.ReactNode | null;
    startIcon?: React.ReactNode | null;
    menuProps?: menuPropsI;
    ratioOptions?: RatioOptionI;
    additionalItems?: AdditionalItemI[]; 
    showDividerBeforeAdditional?: boolean;
    children: React.ReactNode;
    childrenProps?: ChildrenProps | ChildrenProps[];
    options?: MenuOptionI[]
    className?: string;
    additionalIcon?: React.ReactNode; 
    onAdditionalIconClick?: () => void;
}

export interface SearchInputI {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void  //eslint-disable-line
  textFieldProps?: StandardTextFieldProps
  onClickButton?: (value: string) => void  //eslint-disable-line
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

export interface PBIconProps {
  icon: string;
  width?: number;
  height?: number;
  sx?: any;
  className?: string;
}

export interface CustomInputI {
  label?: string | React.ReactNode
  required?: boolean
  className?: string
  textFieldProps: TextFieldProps
  children?: React.ReactNode
  style?: React.CSSProperties
  button?: boolean
  buttonText?: string
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  startIconButton?: ReactNode
  endIconButton?: ReactNode
  tooltip?: string;
}
export interface ButtonT1PropsI {
  // Existing properties
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  additionalIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  confirmationMessage?: string;
  confirmationCancelText?: string;
  confirmationConfirmText?: string;
  confirmationTitle?: string; // Added property
  tooltipText?: string;
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
  responsive?: boolean;
  sx?: SxProps<Theme>;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disableElevation?: boolean;
  fullWidth?: boolean;
  preventDoubleClick?: boolean;
}


export interface ChildrenProps {
  checkbox?: boolean;
  icon?: string;
  label?: string;
  onCheckboxClick?: () => void;
}

export interface CheckboxOptionI {
  checked: any
}

export interface ButtonT1PropsI extends ButtonProps {
    additionalIcon?: React.ReactNode;
    loading?: boolean;
    tooltipText?: string;
    confirmationMessage?: string;
    responsive?: boolean;
}


export interface actionMenuI {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onClose?: (event: React.SyntheticEvent) => void;
}

export interface InputComponentT1I {
    size?: 'small' | 'medium',
    sx?: object,
    onclick?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
    value?: string | number,
    type?: string,
    placeholder?: string,
    disabled?: boolean,
    error?: boolean,
    helperText?: string,
    InputProps?: object
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: string,
}


export interface ExtendedCheckBoxProps extends CheckboxProps {
    renderIcon?: (props: CheckboxProps) => React.ReactNode;
    children?: React.ReactNode; // Optional children
}

export interface ExtendedChipProps {
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' ;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onDelete?: (event: React.MouseEvent<HTMLDivElement>) => void;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  label?: React.ReactNode;
  deleteIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  color?: "default" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | undefined;
  sx?: object;
  className?: string;
}


export interface AdditionalItemI {
  id: string;
  label: string;
  onClick: () => void;
  type?: 'divider' | 'action';
  className?: string;
}

export interface MenuOptionI {
  id?: string;
  label?: string;
  icon?: string;
  menuItemsProps?: MenuItemPropsI;
  onClick?: () => void;
  href?: string;
  FormControlProps?: FormControlPropsI;
  checkboxOptions?: CheckboxOptionI;
  iconSrc?: string;
}

export interface RatioOptionI {
  value: boolean | string;
}

export interface ButtonI {
  onClick?: ()=> void
  
}

export interface menuPropsI {
  onCLick?:(event: any) => void;
  onClose?: (event: any) => void;
  anchorOrigin?: {
    vertical?: "top" | "bottom" | "center";
    horizontal?: "left" | "right" | "center";
  };
  sx?: any;
}

export interface MenuItemPropsI{
    onClick?: () => void;
}

export interface FormControlPropsI {
    value?: boolean | string;
    label: string | boolean;
}
