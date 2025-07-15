export const truncateToTwoDecimals = (number: number) => {
    return Math.trunc(number * 100) / 100;
};

export const formatWithCommas = (number: number) => {
    return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const numberFormatWithoutRound = (number: number) => {
    return formatWithCommas(truncateToTwoDecimals(number));
};
