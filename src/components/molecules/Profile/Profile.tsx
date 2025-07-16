import { Tooltip } from '@mui/material';
import stylesProfile from '@/styles/common/Profile.module.scss';
import styles from '@/styles/common/Navbar.module.scss';
import { ProfileProps } from './Profile.type';
import { getInitials } from '@/utils/Porfile/getInitials';

export default function Profile({
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
        <img 
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



