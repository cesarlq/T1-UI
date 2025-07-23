import React from 'react';
import PropTypes from 'prop-types';

import * as Icons from '@/assets/iconsT1/icons';
import * as Logos from '@/assets/iconsT1/logos';
import * as MenuIcon from '@/assets/iconsT1/menuIcons';
import * as MenuIconActive from '@/assets/iconsT1/menuIcons/active';
import * as MenuIconInactive from '@/assets/iconsT1/menuIcons/inactive';

const T1IconStory = ({ type, icon, width = 24, height = 24, sx, className }) => {
  // Function to get the correct icon component
  const getIconComponent = () => {
    let iconSet;
    
    switch (type) {
      case 'icon':
        iconSet = Icons;
        break;
      case 'logo':
        iconSet = Logos;
        break;
      case 'menuIcon':
        iconSet = MenuIcon;
        break;
      case 'menuIconActive':
        iconSet = MenuIconActive;
        break;
      case 'menuIconInactive':
        iconSet = MenuIconInactive;
        break;
      default:
        return null;
    }

    // Get the specific icon component from the icon set
    const IconComponent = iconSet[icon];
    
    if (!IconComponent) {
      console.warn(`Icon "${icon}" not found in "${type}" set`);
      return null;
    }

    // Render the icon component with props
    return React.createElement(IconComponent, {
      width,
      height,
      style: sx,
      className
    });
  };

  return (
    <div className={`t1-icon-story ${className || ''}`} style={sx}>
      {getIconComponent()}
    </div>
  );
};

// PropTypes definition
T1IconStory.propTypes = {
  type: PropTypes.oneOf(['icon', 'logo', 'menuIcon', 'menuIconActive', 'menuIconInactive']).isRequired,
  icon: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.object,
  className: PropTypes.string,
};

export default T1IconStory;
