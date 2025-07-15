import { addDays, endOfDay, endOfMonth, startOfDay, startOfMonth, subDays } from 'date-fns';

export const breakpointMd = 750;

export const statusColors: Record<string, { backgroundColor: string; color: string }> = {
    success: {
        backgroundColor: '#eaf6ed',
        color: '#28A745',
    },
    error: {
        backgroundColor: '#ffeeef',
        color: '#f55062',
    },
    info: {
        backgroundColor: '#eaf3ff',
        color: '#5089fd',
    },
    warning: {
        backgroundColor: '#fcf8ee',
        color: '#ecbe47',
    },
    primary: {
        backgroundColor: '#e6f7ef',
        color: '#00b365',
    },
    secondary: {
        backgroundColor: '#6C757D',
        color: '#ad7cff',
    },
    default: {
        backgroundColor: '#f1f2f2',
        color: '#6c757d',
    },
};

export const dateRanges = [
    {
        label: 'Today',
        value: [startOfDay(new Date()), endOfDay(new Date())],
    },
    {
        label: 'Yesterday',
        value: [startOfDay(addDays(new Date(), -1)), endOfDay(addDays(new Date(), -1))],
    },
    {
        label: 'Last 7 days',
        value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
    },
    {
        label: 'Last 15 days',
        value: [startOfDay(subDays(new Date(), 15)), endOfDay(new Date())],
    },
    {
        label: 'Last 30 days',
        value: [startOfDay(subDays(new Date(), 30)), endOfDay(new Date())],
    },
    {
        label: 'Current month',
        value: [startOfMonth(new Date()), endOfMonth(new Date())],
    },
    {
        label: 'Last 2 months',
        value: [startOfDay(subDays(new Date(), 60)), endOfDay(new Date())],
    },
    {
        label: 'Last 3 months',
        value: [startOfDay(subDays(new Date(), 90)), endOfDay(new Date())],
    },
    {
        label: 'Last 6 months',
        value: [startOfDay(subDays(new Date(), 180)), endOfDay(new Date())],
    },
];

export const integrationsChannels = ['SH', 'ML', 'TP'];
export const channelsOrder = ['T1', 'SR', 'SN', 'SH', 'ML', 'TP', 'WC', 'SP', 'WM', 'AE', 'TK', 'PG', 'CS'];
export const regularChannels = ['SR', 'SN', 'CS', 'T1'];
export const oldRegularChannels = ['SR', 'SN', 'CS'];
export const manualGuideStatuses = ['Otro', 'Otra', 'Manual'];
export const pagesChannels = ['PG'];

export const salesChannelsNameByShortName: Record<string, string> = {
    CS: 'Claroshop',
    SR: 'Sears',
    SN: 'Sanborns',
    SP: 'Shopify',
    SH: 'Shein',
    ML: 'Mercado Libre',
    PG: 'T1 Páginas',
    TP: 'Total Play',
    WC: 'Woocommerce',
    AE: 'Aliexpress',
    TK: 'Tiktok',
    WM: 'Walmart',
    T1: 'Tienda en línea',
};
export const salesChannelsNameByLongName: Record<string, string> = {
    Claroshop: 'CS',
    Sears: 'SR',
    Sanborns: 'SN',
    Shopify: 'SP',
    Shein: 'SH',
    Mercadolibre: 'ML',
    'T1 Páginas': 'PG',
    'Total Play': 'TP',
    Woocommerce: 'WC',
    Aliexpress: 'AE',
    Tiktok: 'TK',
    Walmart: 'WM',
};
export const salesChannelsColorByShortName: Record<string, string> = {
    CS: '#B34545',
    SR: '#FF67E7',
    SN: '#940000',
    SP: '#97c530',
    SH: '#000000',
    ML: '#FFE500',
    PG: '#ff6666',
    TP: '#7b42a5',
    WC: '#9a5c8e',
    AE: '#E42E03',
    T1: '#D93A26',
    WM: '#1C71DC',
    TK: '#E71D4F',
};
export const salesChannelsColorByShortNamePie: Record<string, string> = {
    CS: '#B34545',
    SR: '#F12F51',
    SN: '#940000',
    SP: '#97c530',
    SH: '#000000',
    ML: '#FFE500',
    PG: '#ff6666',
    TP: '#7b42a5',
    WC: '#9a5c8e',
    AE: '#E42E03',
    T1: '#D93A26',
    WM: '#1C71DC',
    TK: '#E71D4F',
};

export const salesChannelsBGColorByShortName: Record<string, string> = {
    ML: '#FFFEF3',
    SP: '#FAFFF1',
    SH: '#FAFAFA',
    WM: '#F4FAFF',
    AE: '#FFF6F3',
    TK: '#F0FEFF',
    WC: '#FCF9FF',
    TP: '#F6FAFF',
};

export const indicatorsName: Record<string, string> = {
    gross_sales: 'Mis ventas',
    units_sold: 'Unidades vendidas',
    average_price: 'Ticket Promedio',
};

// export const states: Record<string, string> = {
//     'MX-DIF': 'Ciudad de México',
//     'MX-AGU': 'Aguascalientes',
//     'MX-BCN': 'Baja California',
//     'MX-BCS': 'Baja California Sur',
//     'MX-CAM': 'Campeche',
//     'MX-COA': 'Coahuila de Zaragoza',
//     'MX-COL': 'Colima',
//     'MX-CHP': 'Chiapas',
//     'MX-CHH': 'Chihuahua',
//     'MX-DUR': 'Durango',
//     'MX-GUA': 'Guanajuato',
//     'MX-GRO': 'Guerrero',
//     'MX-HID': 'Hidalgo',
//     'MX-JAL': 'Jalisco',
//     'MX-MEX': 'México',
//     'MX-MIC': 'Michoacán de Ocampo',
//     'MX-MOR': 'Morelos',
//     'MX-NAY': 'Nayarit',
//     'MX-NLE': 'Nuevo León',
//     'MX-OAX': 'Oaxaca',
//     'MX-PUE': 'Puebla',
//     'MX-QUE': 'Querétaro',
//     'MX-ROO': 'Quintana Roo',
//     'MX-SLP': 'San Luis Potosí',
//     'MX-SIN': 'Sinaloa',
//     'MX-SON': 'Sonora',
//     'MX-TAB': 'Tabasco',
//     'MX-TAM': 'Tamaulipas',
//     'MX-TLA': 'Tlaxcala',
//     'MX-VER': 'Veracruz de Ignacio de la Llave',
//     'MX-YUC': 'Yucatán',
//     'MX-ZAC': 'Zacatecas'
// };

export const channelsBullets = {
    SR: ['¡20 millones de visitas al mes!', 'Crecimiento asegurado: ¡potencia tu negocio!', 'Entra al Retail en tiendas Sears.', 'Acceso a millones de compradores.'],
    SN: ['¡Potencia tu presencia en línea!', 'Aceptamos tarjetas departamentales.', 'Expande tus ventas con nuestro respaldo.', 'Atención especializada comercial.'],
    CS: [
        'Millones de clientes y visitas nuevas al mes.',
        'De los Market Places más importantes en México.',
        'Amplia tu catálogo a nuestras plataformas afiliadas llegando a más clientes.',
    ],
    SH: ['Conecta tu tienda con Shein.', 'Sincroniza pedidos fácilmente.', 'Acceso a compradores globales en minutos.', 'Próximamente: Sincronización de productos.'],
    TP: ['Integra Total Play con tu tienda.', 'Maneja pedidos en un solo lugar.', 'Conexión directa con millones de usuarios.', 'Próximamente: Sincronización de productos.'],
    ML: ['Vincula tu tienda con Mercado Libre.', 'Gestiona tus pedidos desde una plataforma.', 'Amplía tu alcance con facilidad.', 'Próximamente: Integración de productos.'],
    WC: ['Integra tu tienda WooCommerce.', 'Gestión centralizada de pedidos.', 'Simplifica la operación de tu tienda en línea.', 'Próximamente: Sincronización de productos.'],
    SP: ['Conecta tu tienda Shopify.', 'Sincroniza pedidos automáticamente.', 'Controla todo desde un único dashboard.', 'Próximamente: Integración de productos.'],
    LV: [
        'Millones de clientes y visitas nuevas al mes.',
        'De los Market Places más importantes en el mundo.',
        'Amplia tu catálogo a nuestras plataformas afiliadas llegando a más clientes.',
    ],
    AE: ['Conecta tu tienda con AliExpress', 'Sincroniza pedidos facilmente', 'Genera tus guias de envio con T1 envios', 'Proximamente Sincronización de productos'],
    WM: [
        'Millones de clientes y visitas nuevas al mes.',
        'De los Market Places más importantes en México.',
        'Amplia tu catálogo a nuestras plataformas afiliadas llegando a más clientes.',
    ],
};
export const REQUIRED_ERROR_MESSAGE = 'Required field';

export const states = [
    { code: 'AGU', stateName: 'Aguascalientes' },
    { code: 'BCN', stateName: 'Baja California' },
    { code: 'BCS', stateName: 'Baja California Sur' },
    { code: 'CAM', stateName: 'Campeche' },
    { code: 'CHH', stateName: 'Chihuahua' },
    { code: 'CHP', stateName: 'Chiapas' },
    { code: 'CMX', stateName: 'Ciudad de México' },
    { code: 'COA', stateName: 'Coahuila de Zaragoza' },
    { code: 'COL', stateName: 'Colima' },
    { code: 'DUR', stateName: 'Durango' },
    { code: 'GRO', stateName: 'Guerrero' },
    { code: 'GUA', stateName: 'Guanajuato' },
    { code: 'HID', stateName: 'Hidalgo' },
    { code: 'JAL', stateName: 'Jalisco' },
    { code: 'MEX', stateName: 'México' },
    { code: 'MIC', stateName: 'Michoacán de Ocampo' },
    { code: 'MOR', stateName: 'Morelos' },
    { code: 'NAY', stateName: 'Nayarit' },
    { code: 'NLE', stateName: 'Nuevo León' },
    { code: 'OAX', stateName: 'Oaxaca' },
    { code: 'PUE', stateName: 'Puebla' },
    { code: 'QUE', stateName: 'Querétaro' },
    { code: 'ROO', stateName: 'Quintana Roo' },
    { code: 'SIN', stateName: 'Sinaloa' },
    { code: 'SLP', stateName: 'San Luis Potosí' },
    { code: 'SON', stateName: 'Sonora' },
    { code: 'TAB', stateName: 'Tabasco' },
    { code: 'TAM', stateName: 'Tamaulipas' },
    { code: 'TLA', stateName: 'Tlaxcala' },
    { code: 'VER', stateName: 'Veracruz de Ignacio de la Llave' },
    { code: 'YUC', stateName: 'Yucatán' },
    { code: 'ZAC', stateName: 'Zacatecas' },
];

export const sortBy = [
    { value: 'a-z', label: 'Name A-Z' },
    { value: 'z-a', label: 'Name Z-A' },
];

export const rateType = [
    { value: 'personalizada', label: 'Personalized fixed rate', default: true },
    { value: 't1envios', label: 'Use T1 Envíos', default: false },
];

export const bankCatalog = [
    { code: '002', name: 'BANAMEX', socialReason: 'Banco Nacional de México, S.A., Institución de Banca Múltiple, Grupo Financiero Banamex' },
    { code: '006', name: 'BANCOMEXT', socialReason: 'Banco Nacional de Comercio Exterior, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo' },
    { code: '009', name: 'BANOBRAS', socialReason: 'Banco Nacional de Obras y Servicios Públicos, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo' },
    { code: '012', name: 'BBVA', socialReason: 'BBVA Bancomer, S.A., Institución de Banca Múltiple, Grupo Financiero BBVA Bancomer' },
    { code: '014', name: 'SANTANDER', socialReason: 'Banco Santander (México), S.A., Institución de Banca Múltiple, Grupo Financiero Santander' },
    { code: '019', name: 'BANJERCITO', socialReason: 'Banco Nacional del Ejército, Fuerza Aérea y Armada, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo' },
    { code: '021', name: 'HSBC', socialReason: 'HSBC México, S.A., institución De Banca Múltiple, Grupo Financiero HSBC' },
    { code: '030', name: 'BAJIO', socialReason: 'Banco del Bajío, S.A., Institución de Banca Múltiple' },
    { code: '032', name: 'IXE', socialReason: 'IXE Banco, S.A., Institución de Banca Múltiple, IXE Grupo Financiero' },
    { code: '036', name: 'INBURSA', socialReason: 'Banco Inbursa, S.A., Institución de Banca Múltiple, Grupo Financiero Inbursa' },
    { code: '037', name: 'INTERACCIONES', socialReason: 'Banco Interacciones, S.A., Institución de Banca Múltiple' },
    { code: '042', name: 'MIFEL', socialReason: 'Banca Mifel, S.A., Institución de Banca Múltiple, Grupo Financiero Mifel' },
    { code: '044', name: 'SCOTIABANK', socialReason: 'Scotiabank Inverlat, S.A.' },
    { code: '058', name: 'BANREGIO', socialReason: 'Banco Regional de Monterrey, S.A., Institución de Banca Múltiple, Banregio Grupo Financiero' },
    { code: '059', name: 'INVEX', socialReason: 'Banco Invex, S.A., Institución de Banca Múltiple, Invex Grupo Financiero' },
    { code: '060', name: 'BANSI', socialReason: 'Bansi, S.A., Institución de Banca Múltiple' },
    { code: '062', name: 'AFIRME', socialReason: 'Banca Afirme, S.A., Institución de Banca Múltiple' },
    { code: '072', name: 'BANORTE', socialReason: 'Banco Mercantil del Norte, S.A., Institución de Banca Múltiple, Grupo Financiero Banorte' },
    { code: '102', name: 'THE ROYAL BANK', socialReason: 'The Royal Bank of Scotland México, S.A., Institución de Banca Múltiple' },
    { code: '103', name: 'AMERICAN EXPRESS', socialReason: 'American Express Bank (México), S.A., Institución de Banca Múltiple' },
    { code: '106', name: 'BAMSA', socialReason: 'Bank of America México, S.A., Institución de Banca Múltiple, Grupo Financiero Bank of America' },
    { code: '108', name: 'TOKYO', socialReason: 'Bank of Tokyo-Mitsubishi UFJ (México), S.A.' },
    { code: '110', name: 'JP MORGAN', socialReason: 'Banco J.P. Morgan, S.A., Institución de Banca Múltiple, J.P. Morgan Grupo Financiero' },
    { code: '112', name: 'BMONEX', socialReason: 'Banco Monex, S.A., Institución de Banca Múltiple' },
    { code: '113', name: 'VE POR MAS', socialReason: 'Banco Ve Por Mas, S.A. Institución de Banca Múltiple' },
    { code: '116', name: 'ING', socialReason: 'ING Bank (México), S.A., Institución de Banca Múltiple, ING Grupo Financiero' },
    { code: '124', name: 'DEUTSCHE', socialReason: 'Deutsche Bank México, S.A., Institución de Banca Múltiple' },
    { code: '126', name: 'CREDIT SUISSE', socialReason: 'Banco Credit Suisse (México), S.A. Institución de Banca Múltiple, Grupo Financiero Credit Suisse (México)' },
    { code: '127', name: 'AZTECA', socialReason: 'Banco Azteca, S.A. Institución de Banca Múltiple.' },
    { code: '128', name: 'AUTOFIN', socialReason: 'Banco Autofin México, S.A. Institución de Banca Múltiple' },
    { code: '129', name: 'BARCLAYS', socialReason: 'Barclays Bank México, S.A., Institución de Banca Múltiple, Grupo Financiero Barclays México' },
    { code: '130', name: 'COMPARTAMOS', socialReason: 'Banco Compartamos, S.A., Institución de Banca Múltiple' },
    { code: '131', name: 'BANCO FAMSA', socialReason: 'Banco Ahorro Famsa, S.A., Institución de Banca Múltiple' },
    { code: '132', name: 'BMULTIVA', socialReason: 'Banco Multiva, S.A., Institución de Banca Múltiple, Multivalores Grupo Financiero' },
    { code: '133', name: 'ACTINVER', socialReason: 'Banco Actinver, S.A. Institución de Banca Múltiple, Grupo Financiero Actinver' },
    { code: '134', name: 'WAL-MART', socialReason: 'Banco Wal-Mart de México Adelante, S.A., Institución de Banca Múltiple' },
    { code: '135', name: 'NAFIN', socialReason: 'Nacional Financiera, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo' },
    { code: '136', name: 'INTERBANCO', socialReason: 'Inter Banco, S.A. Institución de Banca Múltiple' },
    { code: '137', name: 'BANCOPPEL', socialReason: 'BanCoppel, S.A., Institución de Banca Múltiple' },
    { code: '138', name: 'ABC CAPITAL', socialReason: 'ABC Capital, S.A., Institución de Banca Múltiple' },
    { code: '139', name: 'UBS BANK', socialReason: 'UBS Bank México, S.A., Institución de Banca Múltiple, UBS Grupo Financiero' },
    { code: '140', name: 'CONSUBANCO', socialReason: 'Consubanco, S.A. Institución de Banca Múltiple' },
    { code: '141', name: 'VOLKSWAGEN', socialReason: 'Volkswagen Bank, S.A., Institución de Banca Múltiple' },
    { code: '143', name: 'CIBANCO', socialReason: 'CIBanco, S.A.' },
    { code: '145', name: 'BBASE', socialReason: 'Banco Base, S.A., Institución de Banca Múltiple' },
    { code: '166', name: 'BANSEFI', socialReason: 'Banco del Ahorro Nacional y Servicios Financieros, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo' },
    { code: '168', name: 'HIPOTECARIA FEDERAL', socialReason: 'Sociedad Hipotecaria Federal, Sociedad Nacional de Crédito, Institución de Banca de Desarrollo' },
    { code: '600', name: 'MONEXCB', socialReason: 'Monex Casa de Bolsa, S.A. de C.V. Monex Grupo Financiero' },
    { code: '601', name: 'GBM', socialReason: 'GBM Grupo Bursátil Mexicano, S.A. de C.V. Casa de Bolsa' },
    { code: '602', name: 'MASARI', socialReason: 'Masari Casa de Bolsa, S.A.' },
    { code: '605', name: 'VALUE', socialReason: 'Value, S.A. de C.V. Casa de Bolsa' },
    { code: '606', name: 'ESTRUCTURADORES', socialReason: 'Estructuradores del Mercado de Valores Casa de Bolsa, S.A. de C.V.' },
    { code: '607', name: 'TIBER', socialReason: 'Casa de Cambio Tiber, S.A. de C.V.' },
    { code: '608', name: 'VECTOR', socialReason: 'Vector Casa de Bolsa, S.A. de C.V.' },
    { code: '610', name: 'B&B', socialReason: 'B y B, Casa de Cambio, S.A. de C.V.' },
    { code: '614', name: 'ACCIVAL', socialReason: 'Acciones y Valores Banamex, S.A. de C.V., Casa de Bolsa' },
    { code: '615', name: 'MERRILL LYNCH', socialReason: 'Merrill Lynch México, S.A. de C.V. Casa de Bolsa' },
    { code: '616', name: 'FINAMEX', socialReason: 'Casa de Bolsa Finamex, S.A. de C.V.' },
    { code: '617', name: 'VALMEX', socialReason: 'Valores Mexicanos Casa de Bolsa, S.A. de C.V.' },
    { code: '618', name: 'UNICA', socialReason: 'Unica Casa de Cambio, S.A. de C.V.' },
    { code: '619', name: 'MAPFRE', socialReason: 'MAPFRE Tepeyac, S.A.' },
    { code: '620', name: 'PROFUTURO', socialReason: 'Profuturo G.N.P., S.A. de C.V., Afore' },
    { code: '621', name: 'CB ACTINVER', socialReason: 'Actinver Casa de Bolsa, S.A. de C.V.' },
    { code: '622', name: 'OACTIN', socialReason: 'OPERADORA ACTINVER, S.A. DE C.V.' },
    { code: '623', name: 'SKANDIA', socialReason: 'Skandia Vida, S.A. de C.V.' },
    { code: '626', name: 'CBDEUTSCHE', socialReason: 'Deutsche Securities, S.A. de C.V. CASA DE BOLSA' },
    { code: '627', name: 'ZURICH', socialReason: 'Zurich Compañía de Seguros, S.A.' },
    { code: '628', name: 'ZURICHVI', socialReason: 'Zurich Vida, Compañía de Seguros, S.A.' },
    { code: '629', name: 'SU CASITA', socialReason: 'Hipotecaria Su Casita, S.A. de C.V. SOFOM ENR' },
    { code: '630', name: 'CB INTERCAM', socialReason: 'Intercam Casa de Bolsa, S.A. de C.V.' },
    { code: '631', name: 'CI BOLSA', socialReason: 'CI Casa de Bolsa, S.A. de C.V.' },
    { code: '632', name: 'BULLTICK CB', socialReason: 'Bulltick Casa de Bolsa, S.A., de C.V.' },
    { code: '633', name: 'STERLING', socialReason: 'Sterling Casa de Cambio, S.A. de C.V.' },
    { code: '634', name: 'FINCOMUN', socialReason: 'Fincomún, Servicios Financieros Comunitarios, S.A. de C.V.' },
    { code: '636', name: 'HDI SEGUROS', socialReason: 'HDI Seguros, S.A. de C.V.' },
    { code: '637', name: 'ORDER', socialReason: 'Order Express Casa de Cambio, S.A. de C.V' },
    { code: '638', name: 'AKALA', socialReason: 'Akala, S.A. de C.V., Sociedad Financiera Popular' },
    { code: '640', name: 'CB JPMORGAN', socialReason: 'J.P. Morgan Casa de Bolsa, S.A. de C.V. J.P. Morgan Grupo Financiero' },
    { code: '642', name: 'REFORMA', socialReason: 'Operadora de Recursos Reforma, S.A. de C.V., S.F.P.' },
    { code: '646', name: 'STP', socialReason: 'Sistema de Transferencias y Pagos STP, S.A. de C.V.SOFOM ENR' },
    { code: '647', name: 'TELECOMM', socialReason: 'Telecomunicaciones de México' },
    { code: '648', name: 'EVERCORE', socialReason: 'Evercore Casa de Bolsa, S.A. de C.V.' },
    { code: '649', name: 'SKANDIA', socialReason: 'Skandia Operadora de Fondos, S.A. de C.V.' },
    { code: '651', name: 'SEGMTY', socialReason: 'Seguros Monterrey New York Life, S.A de C.V' },
    { code: '652', name: 'ASEA', socialReason: 'Solución Asea, S.A. de C.V., Sociedad Financiera Popular' },
    { code: '653', name: 'KUSPIT', socialReason: 'Kuspit Casa de Bolsa, S.A. de C.V.' },
    { code: '655', name: 'SOFIEXPRESS', socialReason: 'J.P. SOFIEXPRESS, S.A. de C.V., S.F.P.' },
    { code: '656', name: 'UNAGRA', socialReason: 'UNAGRA, S.A. de C.V., S.F.P.' },
    { code: '659', name: 'OPCIONES EMPRESARIALES DEL NOROESTE', socialReason: 'OPCIONES EMPRESARIALES DEL NORESTE, S.A. DE C.V., S.F.P.' },
    { code: '901', name: 'CLS', socialReason: 'Cls Bank International' },
    { code: '902', name: 'INDEVAL', socialReason: 'SD. Indeval, S.A. de C.V.' },
    { code: '670', name: 'LIBERTAD', socialReason: 'Libertad Servicios Financieros, S.A. De C.V.' },
    { code: '999', name: 'N/A', socialReason: '' },
];

export const colorMap: { [colorName: string]: string } = {
    Amarillo: '#F2C94C', // Amarillo
    Azul: '#2F80ED', // Azul
    'Azul marino': '#000080', // Azul marino
    Beige: '#F5F5DC', // Beige
    Blanco: '#FFFFFF', // Blanco
    Bronce: '#CD7F32', // Bronce
    Clara: '#F0E68C', // Clara (tono claro, ajustar si se requiere otro)
    Dorado: '#FFD700', // Dorado
    Gris: '#808080', // Gris
    Marrón: '#8B4513', // Marrón
    Multicolor: '#999999', // Valor genérico para multicolor (puedes elegir otro)
    Naranja: '#FFA500', // Naranja
    Negro: '#000000', // Negro
    'Oro rosa': '#B76E79', // Oro rosa
    Plateado: '#C0C0C0', // Plateado
    Púrpura: '#800080', // Púrpura
    Rojo: '#EB5757', // Rojo
    Rosa: '#FFC0CB', // Rosa
    Verde: '#008000', // Verde
};
export const validCreateProductChannels = ['SR', 'SN', 'SH', 'TK'];

export const searsCarriers = {
    1: { id: '1', name: 'DHL' },
    14: { id: '14', name: 'Fedex' },
    33: { id: '33', name: 'Correcaminos' },
    38: { id: '38', name: 'tbigsmart' },
    53: { id: '53', name: 'Ups' },
    51: { id: '51', name: 'express' },
    49: { id: '49', name: '99min' },
    34: { id: '34', name: 'ivoy' },
    55: { id: '55', name: 'T1 Envios ClicOH ND' },
    56: { id: '56', name: 'T1 Envios ClicOH SM' }
};
export const sanbornsCarriers = {
    1: { id: '1', name: 'DHL' },
    2: { id: '2', name: 'estafeta' },
    14: { id: '14', name: 'Fedex' },
    34: { id: '34', name: 'ivoy' },
    38: { id: '38', name: 'tbigsmart' },
    49: { id: '49', name: '99min' },
    51: { id: '51', name: 'express' },
    52: { id: '52', name: 'AMPM' },
    53: { id: '53', name: 'Ups' },
    54: { id: '54', name: 'T1 Envios ClicOH ND' },
    55: { id: '55', name: 'T1 Envios ClicOH SM' }
};