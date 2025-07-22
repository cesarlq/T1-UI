import React, { useState } from 'react';
import MagnifierIcon from "@/assets/svg-icons/lupa-icon.svg?react";
import { styled } from '@mui/material/styles';
import { SearchInputI } from './SearchInput.types';

const CustomSearchField = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	height: '40px',
	width: '100%',
	borderRadius: '10px',
	border: '1px solid #E7E7E7',
	padding: '0 14px',
	backgroundColor: 'white',

	'& .search-icon': {
		marginRight: '8px',
	},

	'& input': {
		border: 'none',
		outline: 'none',
		height: '100%',
		width: '100%',
		fontSize: '12px',
		color: '#4c4c4c',
		fontFamily: theme.typography.fontFamily,
		backgroundColor: 'transparent',
	}
}));

const SearchInput: React.FC<SearchInputI> = ({ textFieldProps, defaultValue, onChange,className }) => {
	const [valueInput, setValueInput] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueInput(event.target.value);
		if (onChange) {
			onChange(event);
		}
	};

	return (
		<CustomSearchField className={className} style={{ ...(textFieldProps?.sx as React.StyleHTMLAttributes<HTMLDivElement>) }}>
			<span className="search-icon">
				<MagnifierIcon
					width={20}
					height={20}
				/>
			</span>
			<input
				type="text"
				placeholder="Search by code, name, SKU..."
				value={valueInput || defaultValue}
				onChange={handleChange}
			/>
		</CustomSearchField>
	);
};

export default SearchInput;