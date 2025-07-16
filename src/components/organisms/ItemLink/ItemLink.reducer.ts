import type { MenuItemState, MenuItemAction } from './ItemLink.types';

export const menuItemReducer = (state: MenuItemState, action: MenuItemAction): MenuItemState => {
  switch (action.type) {
    case 'SET_NAVIGATING':
      return { ...state, isNavigating: action.payload };
    case 'SET_HOVERED':
      return { ...state, isHovered: action.payload };
    case 'SET_FOCUSED':
      return { ...state, isFocused: action.payload };
    case 'ADD_RIPPLE':
      return { 
        ...state, 
        ripples: [...state.ripples, { 
          id: Date.now(), 
          x: action.payload.x, 
          y: action.payload.y 
        }] 
      };
    case 'REMOVE_RIPPLE':
      return { 
        ...state, 
        ripples: state.ripples.filter(r => r.id !== action.payload) 
      };
    case 'SET_PROGRESS':
      return { ...state, navigationProgress: action.payload };
    case 'SET_MOUSE_POSITION':
      return { ...state, mouseX: action.payload.x, mouseY: action.payload.y };
    case 'RESET_MOUSE_POSITION':
      return { ...state, mouseX: 0, mouseY: 0 };
    default:
      return state;
  }
};