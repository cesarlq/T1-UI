import React from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  TextField, 
  useTheme,
  useMediaQuery,
  InputAdornment,
  Divider
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CustomPaginationProps } from './CustomPagination.types';

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [5, 10, 25]
}) => {
  rowsPerPage = rowsPerPage ?? rowsPerPageOptions[0];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const totalPages = Math.ceil(count / rowsPerPage);
  const [goToPage, setGoToPage] = React.useState<string>((page + 1).toString());

  const navigateToPage = (pageNumber: number) => {
    if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(null, pageNumber - 1);
      setGoToPage(pageNumber.toString());
    }
  };

  const handlePreviousPage = () => {
    const newPage = Math.max(0, page - 1);
    onPageChange(null, newPage);
    setGoToPage((newPage + 1).toString());
  };

  const handleNextPage = () => {
    const newPage = Math.min(totalPages - 1, page + 1);
    onPageChange(null, newPage);
    setGoToPage((newPage + 1).toString());
  };

  const handleGoToPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Solo permitir números
    const value = event.target.value.replace(/[^0-9]/g, '');
    setGoToPage(value);
  };

  const handleGoToPageKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const pageNumber = parseInt(goToPage, 10);
      navigateToPage(pageNumber);
    }
  };

  const handleGoToPageButtonClick = () => {
    const pageNumber = parseInt(goToPage, 10);
    navigateToPage(pageNumber);
  };

  // Función para generar los botones de página
  const renderPageNumbers = () => {
    const pageButtons = [];
    
    // Mostrar solo un número limitado de páginas
    let startPage = Math.max(1, page + 2 - 1);  // page es 0-indexed
    let endPage = Math.min(totalPages, page + 2 + 3);
    
    // Si estamos en las primeras páginas, mostrar más páginas adelante
    if (page < 1) {  // Cambiar de page < 2
      endPage = Math.min(5, totalPages);
    }
    
    // Si estamos en las últimas páginas, mostrar más páginas atrás
    if (page > totalPages - 4) {  // Ajustar el cálculo
      startPage = Math.max(1, totalPages - 4);
    }
    
    // Botones para cada página visible
    for (let i = startPage; i <= endPage; i++) {
      const pageIndex = i - 1;
      pageButtons.push(
        <Box
          key={i}
          onClick={() => onPageChange(null, pageIndex)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
            justifyContent: 'center',
            border:'0.8px',
            minWidth: '30px',
            height: '30px',
            cursor: 'pointer',
            ...(page === pageIndex ? {
              backgroundColor: '#DB3B2B',
              color: 'white',
            } : {
              backgroundColor: 'transparent',
              color: 'inherit',
            }),
            fontWeight: 'medium',
            mx: 0.5
          }}
        >
          {i}
        </Box>
      );
    }
    
    // Añadir puntos suspensivos si hay más páginas al principio
    if (startPage > 1) {
      pageButtons.unshift(
        <Box key="startEllipsis" sx={{ mx: 1 }}>...</Box>
      );
      
      // Añadir también el botón de la primera página
      pageButtons.unshift(
        <Box
          key="firstPage"
          onClick={() => onPageChange(null, 0)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '40px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: page === 0 ? '#d9534f' : 'transparent',
            color: page === 0 ? 'white' : 'inherit',
            fontWeight: 'medium',
            mx: 0.5
          }}
        >
          1
        </Box>
      );
    }
    
    // Añadir puntos suspensivos si hay más páginas al final
    if (endPage < totalPages) {
      pageButtons.push(
        <Box key="endEllipsis" sx={{ mx: 1 }}>...</Box>
      );
      
      // Añadir también el botón de la última página
      pageButtons.push(
        <Box
          key="lastPage"
          onClick={() => onPageChange(null, totalPages - 1)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '40px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: page === totalPages - 1 ? '#d9534f' : 'transparent',
            color: page === totalPages - 1 ? 'white' : 'inherit',
            fontWeight: 'medium',
            mx: 0.5
          }}
        >
          {totalPages}
        </Box>
      );
    }

    return pageButtons;
  };

  return (
    <Box 
      sx={{ 
        color:'#4b4b4b',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        p: {
          xs: 1, // Padding más pequeño en pantallas extra pequeñas
          sm: 2  // Padding estándar en pantallas pequeñas y superiores
        },
        flexDirection: {
          xs: 'column', // Columna en pantallas muy pequeñas
          sm: 'row'     // Fila en pantallas pequeñas y superiores
        },
        gap: {
          xs: 1, // Espacio entre elementos en columna
          sm: 2  // Espacio entre elementos en fila
        }
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          mb: { 
            xs: 1, 
            sm: 0 
          },
          textAlign: {
            xs: 'center',
            sm: 'left'
          }
        }}
      >
        En total {count} registro(s)
      </Typography>
      
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: {
            xs: 1,
            sm: 2
          }
        }}
      >
        {/* Flechas y números de página */}
        <IconButton 
          onClick={handlePreviousPage} 
          disabled={page === 0}
          size={isSmallScreen ? 'small' : 'medium'}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        
        <Box 
          sx={{ 
            display: { 
              xs: 'none', // Oculto en pantallas muy pequeñas
              sm: 'flex'  // Visible desde pantallas pequeñas
            }, 
            alignItems: 'center' 
          }}
        >
          {renderPageNumbers()}
        </Box>
        
        <IconButton 
          onClick={handleNextPage} 
          disabled={page >= totalPages - 1}
          size={isSmallScreen ? 'small' : 'medium'}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
        
        
        {/* Campo para ir a una página específica */}
        <Box 
          sx={{ 
            padding: '0px!important',
            display: 'flex', 
            alignItems: 'center',
            width: {
              xs: '100%',    // Ancho completo en pantallas muy pequeñas
              sm: 'auto'     // Ancho automático en pantallas pequeñas y superiores
            },
            justifyContent: 'center'
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              mr: 1, 
              padding: 0,
              display: {
                xs: 'none', // Oculto en pantallas muy pequeñas
                sm: 'block' // Visible desde pantallas pequeñas
              }
            }}
          >
            Saltar a página
          </Typography>
          <TextField
            value={goToPage}
            onChange={handleGoToPageChange}
            onKeyPress={handleGoToPageKeyPress}
            size={isSmallScreen ? 'small' : 'medium'}
            inputProps={{
              min: 1,
              max: totalPages,
              type: 'number'
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{ marginLeft: '0px' }} position="end">
                  <Divider orientation="vertical" flexItem />
                  <IconButton
                    onClick={handleGoToPageButtonClick}
                    size="small"
                    sx={{
                      padding: '2px',
                      '& .MuiSvgIcon-root': {
                        fontSize: {
                          xs: '16px',
                          sm: '18px'
                        }
                      }
                    }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{ 
              borderRadius: '8px',
              padding: 0,
              width: {
                xs: '55px', // Ancho más grande para acomodar el botón
                sm: '55px'  // Ancho estándar ajustado
              },
              '& .MuiInputBase-root': {
                height: {
                  xs: '35px', // Altura más pequeña en pantallas muy pequeñas
                  sm: '40px'  // Altura estándar en pantallas pequeñas y superiores
                },
                paddingRight: 0,
                borderRadius: '8px',

              },
              '& .MuiInputBase-input': {
                py: 1,
                px: 1.5,
                padding: 0,
                textAlign: 'center',
                appearance: 'textfield',
                MozAppearance: 'textfield',
                WebkitAppearance: 'textfield',
                fontSize: {
                  xs: '0.75rem', // Fuente más pequeña en pantallas muy pequeñas
                  sm: '0.875rem' // Tamaño de fuente estándar en pantallas pequeñas y superiores
                }
              },
              '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                display: 'none',
              },
              '& input[type=number]': {
                MozAppearance: 'textfield',
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomPagination;
