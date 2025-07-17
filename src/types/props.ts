import { Control, FieldErrors, FieldPath, FieldValues, UseControllerProps, UseFieldArrayUpdate, UseFormClearErrors, UseFormRegister, UseFormReset, UseFormSetError, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { AddressForGuideOrderI, DimensionsForGuideOrderI, GeneratedGuideI, GuideI, GuideOrderI, IndividualGuideInfoI, OauthParcelApiFormI, ParcelInfoI, ParcelSelectedI, ShippingHistoryI } from './guide';
import { AutocompleteRenderInputParams, ButtonProps, StandardTextFieldProps, TextFieldProps } from '@mui/material';
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';
import { AddBalanceFormI } from './user';
import { StaticImageData } from 'next/image';
import { PurchaseDataI } from './orders';
import { GeneralResponseI } from './response';
import { ZoneDataForFormI, ZoneI } from './zone';
import { UserProductTemplateI } from './templates';
import { PaginationOptionsI } from './layout';
import { RuleI } from './rules';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { ElkNode as ElkNodeType } from "./rules";
import { type Edge } from '@xyflow/react';
import { SurveyFormI, SurveyTemplateI } from './survey';
import { Dayjs } from 'dayjs';
import { IncidenceAddressI, IncidenceFormI, IncidenceItemI, SelectedInfoFromMapDataI, ShippingDataItemI, TimelineEventI } from './incidence';

export interface LayoutI {
    children: ReactNode
}

export interface NavbarI {
    className: string
}

export interface SidebarI {
    className: string
}

export interface BottomNavigationI {
    className: string
}

export interface TitlePageI {
    titlePage: string
    renderX?: boolean
    onlyTitle?: boolean
    extraActionForBackButton?: () => void
    renderBackInDesk?: boolean
    className?: string
    titleClassname?: string
}
export interface QuoteListI {
    data: ParcelInfoI[] | null;
    className: string
}
export interface ShipmentDataI {
    showAddressee: boolean
    showSender: boolean
}
export interface ShipmentResumeI {
    concealable: boolean
}

export interface ShipmentsI {
    guideNumber: number,
    date: string,
    status: string
}
export interface CreateGuideStepI {
    register: UseFormRegister<GuideI>
    watch: UseFormWatch<GuideI>
    errors: FieldErrors<GuideI>
    reset: UseFormReset<GuideI>
    control?: Control<GuideI>
    setValue?: UseFormSetValue<GuideI>
}
export interface ParcelI {
    setInfoCompleted: React.Dispatch<React.SetStateAction<{
        parcel: string;
        service: string;
        deadLine: string;
        numberPackages: number;
    }>>
    infoCompleted: {
        parcel: string;
        service: string;
        deadLine: string;
        numberPackages: number;
    }
    setParcelSelected: Dispatch<SetStateAction<ParcelSelectedI | null>>,
    selectedOrder: PurchaseDataI
}
export interface CustomPropsI {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}
export interface DatePickerI {
    storeId: number
    onDateRangeChange: (value: Date[]) => void
    getComparativePeriods?: (periods: string[]) => void
    titleDatePicker?: string
    defaultRangeSelected?: number
}
export interface ProfileI {
    name: string
    email: string
}
export interface ItemLinkSidebarI {
    sidebarReduce: boolean
    openSubMenu: boolean
    onClickPath: (index: number) => void
    index: number
    activePath: string
    setActivePath: Function
    activeSubPath: string
    setActiveSubPath: Function
    mobile: boolean
    className?: string
}
export interface CustomInputI {
    label?: string
    className?: string
    flexDirectionRow?: boolean
    textFieldProps: TextFieldProps
    children?: React.ReactNode
    style?: React.CSSProperties
    errorMessage?: string
}

export interface GuidesHistoryDesktopI {
    tableInfo: {
        total_filtrados: number,
        total_registros: number,
        data: ShippingHistoryI[]
    } | null,
    handlePage: (pageNumber: number) => void,
    handleSearch: (search: string) => void
    isLoading: boolean
    setPageSize: React.Dispatch<React.SetStateAction<number>>
    pageSize: number
}
export interface DataFilterI {
    label: string,
}
export interface FilterWithSearchInputI {
    onChangeCurrentDataSelected: (filter: Record<string, boolean> | null) => void
    currentDataSelected: Record<string, boolean>
    data: DataFilterI[]
}
export interface ModalI {
    open: boolean
    message?: string
    setOpen?: Dispatch<SetStateAction<boolean>>
    handleOk?: () => void
    loading?: boolean
    children?: ReactNode
    textOkButton?: string
    textCancelButton?: string
    centerButtons?: boolean
    preventCloseOnClickOutside?: boolean
    expansionModalInMobile?: boolean
    buttonsSize?: 'large' | 'medium'
    hideCloseButton?: boolean
    toBottom?: boolean
    zIndexModal?: number
    headerAbsolute?: boolean
}
export interface ErrorBoundaryI {
    children?: ReactNode
}
export interface NumericFormatPropsI {
    onChange: (event: { target: { name: string; value?: number } }) => void;
    name: string;
}
export interface EmptyStateProps {
    icon?: any,
    title: string,
    message: string,
    href: string,
    hrefButton: string,
}
export interface AmountInputI<T extends FieldValues>
    extends UseControllerProps<T> {
    textFieldProps?: StandardTextFieldProps;
    currency?: string;
    label?: string
}

export interface FileInputI<T extends FieldValues>
    extends UseControllerProps<T> {
    textFieldProps?: TextFieldProps;
    label?: string;
    name: FieldPath<T>;
}

export interface ItemParcelI {
    nameParcel: string
    onChangeCheck: (parcelChecked: { parcel: string, checked: boolean }) => void
    classNameImage?: string
    valueCheck: boolean
    title?: string
    disableSwitch?: boolean
    existApi?: boolean
}

export interface SelectPeriodsI {
    onChange: (range: string[]) => void
    value: number
    onChangeInput: (value: number) => void
}

export interface SectionPaymentI {
    register: UseFormRegister<AddBalanceFormI>
    watch: UseFormWatch<AddBalanceFormI>
    errors: FieldErrors<AddBalanceFormI>
    control?: Control<AddBalanceFormI>
    setValue?: UseFormSetValue<AddBalanceFormI>
    reset: UseFormReset<AddBalanceFormI>
    setMode: Dispatch<SetStateAction<'idle' | 'paymentCard' | 'spei'>>
    setErrorCarNumberByIssuer?: Dispatch<SetStateAction<string>>
    addNewPaymentCard: boolean
    setAddNewPaymentCard: Dispatch<SetStateAction<boolean>>
    errorCarNumberByIssuer?: string
}

export interface OptionModeI {
    onClick?: () => void
    selected: boolean
    image: StaticImageData
    title: string
    description: string
    showOptionMenu?: boolean
    onClickEdit?: () => void
    oneItemMode?: boolean
}

export interface CustomAmountInputI<T extends FieldValues>
    extends UseControllerProps<T> {
    currency?: string;
    format?: 'currency' | 'phone' | 'normal' | 'zip' | 'interbankKey' | 'CVV' | 'creditMaster' | 'creditAmex' | 'expireDate' | 'CVVAmex' | 'currencyWithoutPrefix'
    customInputProps: CustomInputI
    startAdornmentCustom?: boolean
}

export interface CustomNumericFormatPropsI {
    onChange: (event: { target: { name: string; value?: number | string } }) => void;
    name: string;
}

export interface RowOrderI {
    dataRow: PurchaseDataI,
    setCurrentOrder: Dispatch<SetStateAction<PurchaseDataI | undefined>>
    setOpenConfirmDialog: Dispatch<SetStateAction<boolean>>
    ordersSelectedSet: Set<string>
    setOrderSelectedSet: Dispatch<SetStateAction<Set<string>>>
    ordersSelectedArray: PurchaseDataI[]
    setOrderSelectedArray: Dispatch<SetStateAction<PurchaseDataI[]>>
}

export interface AddressesFormI {
    onClose: () => void
    onSubmit: (data: AddressForGuideOrderI) => void
    defaultValues?: AddressForGuideOrderI
    mode?: 'destination' | 'origin'
}

export interface RowOrderForGenerateMassiveGuideI {
    order: GuideOrderI
    index: number
    watch: UseFormWatch<{ data: GuideOrderI[] }>
    errors: FieldErrors<{ data: GuideOrderI[] }>
    control: Control<{ data: GuideOrderI[] }>
    clearErrors: UseFormClearErrors<{ data: GuideOrderI[] }>
    submitCount: number
    setCurrentDimensionsType: Dispatch<SetStateAction<Record<string, string>>>
    currentCustomDimensionsSelected: Record<string, DimensionsForGuideOrderI>
    currentDimensionsType: Record<string, string>
    setCurrentIndexForEditDestinationAddress: Dispatch<SetStateAction<number | null>>
    setCurrentIndexForEditOriginAddress: Dispatch<SetStateAction<number | null>>
    setCurrentIndexForEditDimensions: Dispatch<SetStateAction<number | null>>
    setTempDataOrder: Dispatch<SetStateAction<GuideOrderI | null>>
    onRemove: () => void
    update: UseFieldArrayUpdate<{
        data: GuideOrderI[];
    }, "data">
}

export interface DimensionsFormI {
    onClose: () => void
    onSubmit: (data: DimensionsForGuideOrderI) => void
    defaultValues?: DimensionsForGuideOrderI
    mode?: 'edit' | 'create'
}

export interface ResponseAlertI {
    title: string
    description: string
    textButton: string
    onClickButton: () => void
    iconAlert: StaticImageData
}

export interface TextFieldAndButtonI {
    className?: string
    textFieldClassName?: string
    buttonClassName?: string
    onSubmit: (data: { search: string }) => void
    textFieldProps?: TextFieldProps
}

export interface RowGeneratedGuideI {
    guide: GeneralResponseI<GeneratedGuideI>
    guidesSelectedSet: Set<string>
    setGuideSelectedSet: Dispatch<SetStateAction<Set<string>>>
}

export interface CancelShippingFormI {
    item: PurchaseDataI
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface CustomPaginationI {
    onChangePagination: (event: ChangeEvent<unknown> | undefined, page: number) => void
    countPagination: number
    currentPagePagination?: number
    pageSizeSelect: number
    onChangePageSizeSelect: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    totalCount: number
    defaultPagesSizes?: PaginationOptionsI[]
}

export interface PageInputWithButtonI {
    inputValue: number
    onClickButton: (page: number) => void
}

export interface NeighborhoodAutoCompleteI<I extends FieldValues> extends UseControllerProps<I> {
    neighborhoods?: string[]
    renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode
}

export interface ParcelApiFormI {
    parcel: string
    data: OauthParcelApiFormI
}

export interface ModalWithDownloadGuidesI {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    guideItem: ShippingHistoryI
}

export interface PriorityParcelsWatchI {
    setPreviewMode: Dispatch<SetStateAction<'watch' | 'choose'>>
}

export interface CustomChipI {
    label: string
    onClose?: () => void
}

export interface ZoneFormI {
    defaultValues?: ZoneDataForFormI
    id?: string
    mode: 'edit' | 'add'
}

export interface ExcelFileChooserI {
    onChange: (file: File) => void
    hasSelectedFile: (selected?: boolean) => void
    onSubmit: (file: File) => void
    reset?: boolean
}

export interface LateralPopupI {
    open: boolean
    onClose: () => void
    title: string
    children: ReactNode
    renderBackButton?: boolean
    onClickBackButton?: () => void
}

export interface RuleParcelsFormI {
    rowsMode: 'dragAndDrop' | 'chooseParcels'
    onSubmitServices: (data: RuleI['couriers_services']) => void
    onSubmitCouriers: (data: RuleI['couriers']) => void
    defaultValuesCouriersServices?: RuleI['couriers_services']
    defaultValuesCouriers?: RuleI['couriers']
    hasChange: (changed: boolean) => void
}
export interface ToggleButtonI {
    mode: string
    modeLeft: string
    modeRight: string
    logoLeft: StaticImageData
    logoRight: StaticImageData
    onChange: (value: string) => void
    className?: string
}

export interface TemplateItemI {
    data: UserProductTemplateI
    mode: 'grid' | 'column'
    setTemplateToEdit: Dispatch<SetStateAction<null | UserProductTemplateI>>
}

export interface AlertTextI {
    text: string
}

export interface IntegrationItemI {
    channelId: string
    href?: string,
    showLink?: boolean
    active: boolean
}

export interface InActiveIntegrationI {
    marketplace: string
    channelId: string
    href: string
}

export interface NextIntegrationI {
    image: StaticImageData
    name: string
}

export interface RowZoneI {
    setZoneSelectedSet: Dispatch<SetStateAction<Set<string>>>
    zonesSelectedSet: Set<string>
}

export interface RuleFormI {
    defaultValuesProp?: RuleI
    onSubmit: (data: RuleI) => void
    hasChange: (changed: boolean) => void
    mode: 'edit' | 'add'
}

export interface PriorityParcelsWatchRowI {
    index: number
    data: RuleI
    draggableProvided: DraggableProvided
    snapshot: DraggableStateSnapshot
    dragDisabled: boolean
}

export interface DiagramI {
    data: { nodes: ElkNodeType[], edges: Edge[] }
    idToFocus?: string
}
export interface SearchPopupI {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export interface InitialBannerI {
    onClickButton: () => void
}

export interface SelectableButtonI {
    selected: boolean
    onClick: () => void
    content: string | number
    align?: 'end' | 'start' | 'center'
    extraText?: string
    endAdornment?: StaticImageData,
    loading?: boolean
}

export interface SelectableContentI {
    onChange: (value: string | number | (string | number)[]) => void
    content: SurveyTemplateI,
    gap?: number
    value: string | number | (string | number)[]
    register: UseFormRegister<SurveyFormI>
    index: number
    setValue: UseFormSetValue<SurveyFormI>
    watch: UseFormWatch<SurveyFormI>
    errors: FieldErrors<SurveyFormI>
    clearErrors: UseFormClearErrors<SurveyFormI>
    endAdornment?: StaticImageData
    loading?: boolean
}

export interface ConfettiI {
    play: boolean
}

export interface OptionsButtonI {
    options: (MenuItemI | undefined)[]
    closeWhenSelect?: boolean
    className?: string
}

export interface MenuItemI {
    onClick: () => void
    label: string,
    loading?: boolean
    disabled?: boolean
    disableCloseWhenSelect?: boolean
    icon?: StaticImageData
}

export interface DynamicSelectorI {
    typeAdornment: 'checkbox' | 'radio'
    defaultLabel: string
    options: DynamicSelectorItemI[]
    onChange: (value: string | number | string[] | number[]) => void
    value?: string | number | string[] | number[]
    onClear: () => void
    multiple?: boolean
    className?: string
    large?: boolean
    disabled?: boolean
    classNameButton?: string
}

export interface DynamicSelectorItemI {
    extraData?: ReactNode
    label: string
    value: string | number
}

export interface SearchAndSelectableItemsI {
    placeholderInput: string
    items: string[]
    onChange: (items: string[]) => void
    counterText: string
    defaultValues?: string[]
    renderDefaultCounter?: boolean
}

export interface WatchMoreModalI {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    onDelete: (values: string[]) => void
    items: string[]
}

export interface ZonesMenuI {
    anchor: HTMLElement | null
    open: boolean
    defaultZonesSelected: string[]
    handleClose: () => void
    zones: ZoneI[]
    onSubmitZones: (zonesId: string[]) => void
}

export interface TimePickerWithSelectI {
    textFieldProps: TextFieldProps
    onChange: (time: Dayjs) => void
    value: Dayjs | null
}

export interface DynamicDatePickerWithSelectI {
    format: 'MM' | 'YYYY' | 'DD/MM/YYYY',
    onChange: (time: string | number) => void
    textFieldProps: TextFieldProps
    value: string | number
}

export interface CustomDateTimePickerI {
    onChange: (time: Dayjs) => void
    textFieldProps: TextFieldProps
    value: Dayjs | null
    rowReverseInAdornment?: boolean
}

export interface CustomRuleFieldsI {
    control?: Control<RuleI>
    setValue: UseFormSetValue<RuleI>
    register: UseFormRegister<RuleI>
    watch: UseFormWatch<RuleI>,
}

export interface ButtonWithMenuI {
    buttonProps: ButtonProps
    menuItems: (MenuItemI | undefined)[]
    children: ReactNode
    clickInBoth?: boolean
    className?: string
    extraItem?: ReactNode
}

export interface HistoryGuidesI {
    renderInModal?: boolean
}

export interface ShippingDetailsI {
    courier?: string
    status?: string
    dynamicData: ShippingDataItemI[]
    title?: string
    expand?: boolean
    hideHeader?: boolean
}

export interface IncidenceProgressI {
    timeline: TimelineEventI[]
    expand?: boolean
}

export interface IncidentAddressInputsI {
    externalDefaultValues?: IncidenceAddressI
    mode: 'onChange' | 'onSubmit' | 'registered'
    onChange?: (data: IncidenceAddressI) => void
    hideReason?: boolean,
    hideResume?: boolean
    renderWithDefaultValues?: boolean
    title?: string
    onSubmit?: (data: IncidenceAddressI) => void
    hideTitle?: boolean
    onHasErrors?: (hasErrors: boolean) => void
    hideResumeButton?: boolean
    externalRegister?: UseFormRegister<IncidenceFormI>
    externalErrors?: FieldErrors<IncidenceFormI>
    incidenceType?: string
    externalControl?: Control<IncidenceFormI>
    externalWatch?: UseFormWatch<IncidenceFormI>
    externalReset?: UseFormReset<IncidenceFormI>
    externalSetValue?: UseFormSetValue<IncidenceFormI>
}

export interface CopyBannerI {
    text: string,
    title?: string
    button?: ReactNode
    centerItemsButtonAndText?: boolean
}

export interface DynamicIncidenceInputsI {
    incidenceType: string,
    register: UseFormRegister<IncidenceFormI>
    setValue: UseFormSetValue<IncidenceFormI>
    control: Control<IncidenceFormI>
    reset: UseFormReset<IncidenceFormI>
    watch: UseFormWatch<IncidenceFormI>
    errors: FieldErrors<IncidenceFormI>
    clearErrors?: UseFormClearErrors<IncidenceFormI>
    setError: UseFormSetError<IncidenceFormI>
    submitCount: number
}

export interface FileChooserImageAndPDFI {
    accepts: string
    label: string,
    maxFiles: number,
    multiple: boolean
    placeHolder: string,
    errorMessage?: string
    onChange: (files: File[] | File | undefined) => void
}

export interface IncidenceModalsI {
    openModals: Record<string, boolean>
    setOpenModals: Dispatch<SetStateAction<Record<string, boolean>>>
    incidenceInfoSelected: IncidenceItemI | null
}

export interface CouriersAddressAndMapI {
    onSelectAddress: (address: IncidenceAddressI) => void
    columnOrder?: boolean
    title?: string
    renderValidateNewZip: boolean
    setRenderValidateNewZip: Dispatch<SetStateAction<boolean>>
    onClickChangeAddress?: () => void
    onClickReturnToOrigin?: () => void
    onSelectOptions?: (options: SelectedInfoFromMapDataI) => void
}

export interface AddressDetailsI {
    title: string
    name: string
    phone: string
    email: string
    address: string
    company?: string
}

export interface CopyButtonI {
    copyText: string
    tooltipText?: string
    className?: string
    directionOfTooltip?: 'left' | 'right'
}
export interface DimensionsMultiInputsI {
    register: UseFormRegister<IncidenceFormI>
    preStringName?: string
    errors?: FieldErrors<IncidenceFormI>
    title: string
    watch: UseFormWatch<IncidenceFormI>
    onHasError?: (error: boolean) => void
}

export interface AddressSelectorI {
    onChange: (address: IncidenceAddressI) => void
    onHasError?: (error: boolean) => void
    incidenceInputAddressProps: IncidentAddressInputsI
}
export interface TableBalancesI {
    loading: boolean
}

export interface WelcomeBannerI {
    onClickButton: () => void
}

export interface OrderButtonI {
    className?: string
    onChange: (value: 'asc' | 'desc') => void
    disabled?: boolean
    sort: 'asc' | 'desc'
}

export interface ErrorMessageI {
    text?: string
    className?: string
}

export interface IncidenceFormPropsI {
    defaultIncidenceType?: string
    onSubmit?: (values: IncidenceFormI) => void
    mode?: 'default' | 'inModal'
    submitButtonText?: string
}