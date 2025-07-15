import React from 'react';
import { createTheme } from '@mui/material/styles';
import { statusColors } from '../utils/staticData'
import type { } from '@mui/lab/themeAugmentation';
import CheckboxIcon from '../assets/icons/CheckboxIcon';
import UnCheckboxIcon from '../assets/icons/UnCheckboxIcon';
import IndeterminateCheckboxIcon from '../assets/icons/IndeterminateCheckboxIcon';
import UnCheckRadioIcon from '../assets/icons/UnCheckRadio';
import CheckRadio from '../assets/icons/CheckRadio';
import ChevronDown from '../assets/svg-icons/chevron-down-icon.svg';


const theme = createTheme({
  palette: {
    primary: {
      main: '#db3b2b',
    },
    secondary: {
      main: '#fadede'
    },
    error: {
      main: '#FF0000'
    }
  },
  typography: {
    fontSize: 13
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          '&.Mui-focused': {
            borderColor: '#E7E7E7 !important',
            borderWidth: '1px !important',
          }
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E7E7E7 !important',
            borderWidth: '1px !important',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E7E7E7 !important',
            borderWidth: '1px !important',
          }
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: '10px',
            fontWeight: '700',
            fontSize:'12px',
            lineHeight:'100%',
            letterSpacing:'0%',
            boxShadow: 'none',
            color: '#FFF',
            textAlign: 'center',
            fontStyle: 'normal',
            '&:hover': {
              borderRadius: '10px',
              boxShadow: 'none',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #CC0000',
            },
            ':disabled': {
              color: '#FFFFFF',
              borderRadius: '10px',
              background: 'linear-gradient(0deg, #F1B0A9 0%,  #F1B0A9 100%), #FFF'
            },
            '&:active': {
              borderRadius: '10px',
              background: '#DB3B2B',
              /* button_press */
              boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.10) inset'
            }

          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: '10px',
            border: '1px solid #E7E7E7',
            fontWeight: '500',
            fontSize:'12px',
            boxShadow: 'none',
            '&:hover': {
              border: 'solid 1px #E7E7E7',
              boxShadow: 'none',
              backgroundColor: '#E7E7E7'
            }
          }
        },
        {
          props: { variant: 'text' },
          style: {
            color: '#4c4c4c',
            fontWeight: '600',
            '&:hover': {
              border: 'none',
              backgroundColor: 'transparent'
            }
          }
        }
      ],
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          textTransform: 'none', 
          height:'2.5rem',
          display: 'flex',
          padding: '9px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '9px',
          borderRadius: '10px',
          color: '#FFFFFF',
          textAlign: 'center',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal'
        },
        colorInherit: {
          backgroundColor: 'white'
        }
      }
    },
    MuiLoadingButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: 'none',
            boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.14)',
            fontWeight: 'normal'
          }
        },
        {
          props: { variant: 'text' },
          style: {
            fontWeight: '600'
          }
        },
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: '10px',
            background: '#DB3B2B',
            ':disabled': {
              background: '#DB3B2B',
              color: '#fff'
            },
          }
        }
      ],
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          display: 'flex',
          mniWidth: '236px',
          padding: '9px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '9px',
        },
        loadingIndicator: {
          color: '#fff',
        },


      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // Se opta por la configuración detallada del segundo theme
          borderRadius: '10px!important',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E7E7E7'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E7E7E7'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E7E7E7'
          },
          '&:focus-within fieldset, &:focus-visible fieldset': {
            border: '1px solid #E7E7E7 !important'
          },
          '&:hover fieldset': {
            border: '1px solid #E7E7E7 !important',
          },
        },
        input: {
          fontWeight: 300,
          fontSize: 12,
          color: '#4c4c4c',
          height: 18
        }
      },
      defaultProps: {
        onWheel: (event: any) => event.target.blur()
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      },
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        InputLabelProps: {
          sx: {
            '&.MuiInputLabel-shrink ': {
              color: '#898989'
            }
          }
        },
        InputProps: {
          sx: {
            '&.Mui-focused fieldset': {
              border: '1px solid #E7E7E7!important'
            },
            borderRadius: 12,
            '&:hover fieldset': {
              border: '1px solid #E7E7E7 !important'
            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
              border: '1px solid #E7E7E7 !important'
            }
          }
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 6,
          '&.MuiLinearProgress-colorPrimary': {
            backgroundColor: '#ededed'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        },
        colorSuccess: {
          ...statusColors['success']
        },
        colorError: {
          ...statusColors['error']
        },
        colorInfo: {
          ...statusColors['info']
        },
        colorWarning: {
          ...statusColors['warning']
        },
        colorPrimary: {
          ...statusColors['primary']
        },
        colorSecondary: {
          ...statusColors['secondary']
        }
      },
      variants: [
        {
          props: {
            color: 'default',
            variant: 'filled'
          },
          style: {
            ...statusColors['default']
          }
        }
      ]
    },
    MuiSkeleton: {
      defaultProps: {
        variant: 'rounded',
        animation: 'wave'
      },
      styleOverrides: {
        root: {
          bgcolor: 'grey.100',
          borderRadius: '7px'
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        filledSuccess: {
          borderRadius: '7px'
        },
        filledError: {
          borderRadius: '7px'
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          '& .MuiInputLabel-root': {
            color: 'gray'
          }
        }
      },
      defaultProps: {
        popupIcon: React.createElement(ChevronDown, { width: 16, height: 16 })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '7px'
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          textTransform: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '5px 13px',
          fontWeight: 500,
          borderRadius: 7,
          color: '#db3b2b',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.14)',
          width: 'max-content',
          borderRadius: 7
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiPagination: {
      defaultProps: {
        shape: 'rounded'
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 35,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 1,
                border: 0,
                backgroundColor: '#51AF70'
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5
              }
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '6px solid #fff'
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: 'white'
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.3
            }
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 16,
            height: 16
          },
          '& .MuiSwitch-track': {
            borderRadius: 13,
            backgroundColor: '#E9E9EA',
            opacity: 1
          }
        }
      }
    },
    MuiCheckbox: {
            defaultProps: {
                checkedIcon: React.createElement(CheckboxIcon),
                icon: React.createElement(UnCheckboxIcon),
                indeterminateIcon: React.createElement(IndeterminateCheckboxIcon),
            },
            styleOverrides: {
                root: {
                    height: 18,
                    padding: 0,
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                    '&.Mui-disabled': {
                        '& svg': {
                            borderRadius: 3,
                            '& g': {
                                '& path': {
                                    fill: '#f3f3f3',
                                    color: '#C3C3C3',
                                    backgroundColor: '#f3f3f3',
                                    stroke: '#d3d3d3',
                                },
                                '& rect': {
                                    fill: '#f3f3f3',
                                },
                            },
                        },
                    },
                    // Your custom hover effect with fill
                    '&:hover:not(.Mui-checked):not(.Mui-disabled)': {
                        backgroundColor: 'transparent', // Ensure no background change
                        '& svg': {
                            '& path': {
                                fill: '#f8f8f8',
                            },
                        },
                    },
                },
            },
        },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: '12px',
          color: '#4c4c4c',
          height: 19,
          display: 'flex',
          alignItems: 'center',
          fontsize: 12
        },
        root: {
          fontsize: 12,
          border: '0.5px solid #EBEBEB',
          borderRadius: '12px',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '0.5px solid #EBEBEB',
            borderRadius: '12px'
          },
          '&:hover': {
            border: '0.5px solid #EBEBEB',
            borderRadius: '12px'
          },
        }
      },
      defaultProps: {
        IconComponent: (props) => React.createElement("span", props, React.createElement(ChevronDown, { width: 16, height: 16 }))
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          background:'transparent',
          color: 'var(--color-text-button-divided_default, #4C4C4C)',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',

          '&.Mui-focused': {
            color: '#4c4c4c',
          },
          '&.Mui-disabled': {
            color: '#4c4c4c',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 13
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '12px'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#f5f5f5'
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '13px',
          fontWeight: 400,
          color: '#4c4c4c'
        }
      }
    },
    MuiRadio: {
      defaultProps: {
        icon: React.createElement(UnCheckRadioIcon),
        checkedIcon: React.createElement(CheckRadio)
      },
      styleOverrides: {
        root: {
          height: 18,
          padding: 0,
          "&.Mui-disabled": {
            "& svg": {
              "& g": {
                "& path": {
                  fill: "#f3f3f3",
                },
                "& rect": {
                  fill: "#f3f3f3"
                }
              }
            }
          }
        }
      }
    }
  }
});

export default theme;
