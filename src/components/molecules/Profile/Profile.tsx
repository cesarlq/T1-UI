import React, { useState } from 'react';
import Image from 'next/image';
import { IconButton, ListItemText, Menu, MenuItem as MuiMenuItem, Divider, Tooltip } from '@mui/material';
import T1Icon from '../T1Icon';
import stylesProfile from '../../styles/common/Profile.module.scss';
import styles from '../../styles/common/Navbar.module.scss';
import { MenuProfileI, ProfileMenuItem, ProfileProps } from '@/interfaces/Profile.interface';

export function getInitials(name: string): string {
    if (!name || name.trim() === '') return '';
    
    const nameParts = name.trim().split(/\s+/).filter(part => part.length > 0);
    
    if (nameParts.length === 0) return '';
    
    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase();
    }
    
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  }

export function Profile({
  name,
  email,
  className = '',
  fontClassName = '',
  color,
  iconProfile
}: ProfileProps) {
  return (
    <main className={`${stylesProfile.container} ${fontClassName} ${className}`}>
      {iconProfile ?
      <article className={stylesProfile.letter}>
        <Image 
            src={iconProfile}
            className={styles.profileIcon}
            alt=''
            width={56}
            height={56}
          />
      </article>
      :
      <article style={{backgroundColor: color ? color : '#db3b2b'}} className={stylesProfile.letter}>
        {getInitials(name)}
      </article>
      }
      
      <article className={stylesProfile['name-and-email']}>
        <Tooltip title={name} arrow>
          <span className={stylesProfile.name}>{name}</span>
        </Tooltip>
        <Tooltip title={email} arrow>
          <span className={stylesProfile.email}>{email}</span>
        </Tooltip>
      </article>
    </main>
  );
}

// Versión que permite inyectar fuente personalizada
export function ProfileWithFont({
  name,
  email,
  className = '',
  fontFamily = 'Manrope, sans-serif'
}: ProfileProps & { fontFamily?: string }) {

  return (
    <main 
      className={`${stylesProfile.container} ${className}`}
      style={{ fontFamily }}
    >
      <article className={stylesProfile.letter}>
        {getInitials(name)}
      </article>
      <article className={stylesProfile['name-and-email']}>
        <Tooltip title={name} arrow>
          <span className={stylesProfile.name}>{name}</span>
        </Tooltip>
        <Tooltip title={email} arrow>
          <span className={stylesProfile.email}>{email}</span>
        </Tooltip>
      </article>
    </main>
  );
}

export function MenuProfile({
  onLogout,
  user,
  profileMenuItems,
  textLogOut,
  onNavigate,
  iconProfile,
  colorProfile
}: MenuProfileI) {
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(profileAnchor);

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleMenuItemClick = (item: ProfileMenuItem) => {
    // Cerrar el menú
    handleProfileClose();
    
    // Si tiene href, navegar
    if (item.href) {
      if (item.target === '_blank') {
        window.open(item.href, '_blank');
      } else {
        onNavigate(item.href);
      }
    }
    
    // Ejecutar onClick si existe
    if (item.onClick) {
      item.onClick(user || undefined);
    }
  };

    const renderProfileMenuItem = (item: ProfileMenuItem, index: number) => {
    return (
      <React.Fragment key={item.id}>
        <MuiMenuItem
          onClick={() => handleMenuItemClick(item)}
          id={item.id}
          disabled={item.disabled}
          className={item.className}
          sx={{ paddingLeft: '24px' }}
        >
          {item.icon && (
            <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
              {typeof item.icon === 'string' ? (
                <T1Icon icon={item.icon} width={16} height={16} />
              ) : (
                item.icon
              )}
            </span>
          )}
          <ListItemText sx={{
            '& .MuiTypography-root': {
              fontSize: '12px',
              fontWeight: '500',
              // Otros estilos que necesites
            }

          }} style={{}} primary={item.label} />
        </MuiMenuItem>
        {item.divider && <Divider />}
      </React.Fragment>
    );
  };

  return (<>

    {iconProfile ? 
        <IconButton
          id="profile-button"
          aria-controls={profileOpen ? 'profile-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={profileOpen ? 'true' : undefined}
          onClick={handleProfileClick}
          style={{backgroundColor: colorProfile ? colorProfile : '#db3b2b'}}
          className={styles['first-letter']}
        >
          <Image 
            src={iconProfile}
            className={styles.iconProfile}
            alt=''
            width={56}
            height={56}
          />
        </IconButton>
        :
        <IconButton
          id="profile-button"
          aria-controls={profileOpen ? 'profile-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={profileOpen ? 'true' : undefined}
          onClick={handleProfileClick}
          style={{backgroundColor: colorProfile ? colorProfile : '#db3b2b'}}
          className={styles['first-letter']}
        >
          {getInitials(user.name)}
        </IconButton>
    }
    
    <Menu
      id="profile-menu"
      anchorEl={profileAnchor}
      open={profileOpen}
      onClose={handleProfileClose}
      sx={{
        '& .MuiMenu-paper': {
          fontSize: '12px',
          fontWeight: '500',
        },

      }}
      MenuListProps={{
        'aria-labelledby': 'profile-button',
      }}
    >
      <Profile
        email={user.email}
        name={user.name}
        color={colorProfile ? colorProfile : '#db3b2b'}
        iconProfile={iconProfile}
      />
      
      {/* Renderizar items configurables */}
      {profileMenuItems && profileMenuItems.map((item, index) => renderProfileMenuItem(item, index))}
      
      {/* Separador antes del logout si hay items personalizados */}
      {/* {profileMenuItems.length > 0 && <Divider />} */}
      
      {/* Item de logout (siempre presente y estático) */}
      <MuiMenuItem 
        onClick={onLogout} 
        id='logout' 
        sx={{ 
          paddingLeft: '24px',
          '& .MuiTypography-root': {
            fontSize: '12px',
            fontWeight: '500',
            // Otros estilos que necesites
          }
        }}
      >
        <ListItemText primary={textLogOut} />
      </MuiMenuItem>
    </Menu>
  </>);
}