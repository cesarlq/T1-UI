import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import LockIcon from '@/assets/svg-icons/Lock.svg?react';
import ReplyIcon from '@/assets/svg-icons/reply.svg?react';
import Button from '@/components/Atoms/Button/Button';
import { RestrictedAccessProps } from './RestrictedAccess.types';


const RestrictedAccess: React.FC<RestrictedAccessProps> = ({
  title = "Acceso restringido",
  description = "Tu rol actual no permite acceder a este módulo.",
  instructionsText = "Solicita al propietario de la tienda que te otorgue permisos en",
  permissionsPath = "Perfil > Gestionar cuenta > Roles y permisos",
  buttonText = "Volver al inicio",
  onReturnHome,
  sx,
  className
}) => {
  const handleReturnHome = () => {
    if (onReturnHome) {
      onReturnHome();
    } else {
      // Default behavior - could navigate to home or reload
      console.log('Return to home clicked');
    }
  };

  return (
    <Container
      maxWidth="sm"
      className={className}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: 4,
        ...sx
      }}
    >
      {/* Lock Icon */}
      <Box
        sx={{
          marginBottom: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <LockIcon width={28.24} height={43}  />
        <Typography
            variant="h4"
            component="h1"
            sx={{
            fontWeight: 700,
            color: '#4C4C4C',
            marginBottom: 0,
            fontSize: '24px'
            }}
        >
            {title}
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: '#4C4C4C',
          marginBottom: 2,
          fontSize: '16px',
          fontWeight:'400',
          lineHeight: 1.6
        }}
      >
        {description}
      </Typography>

      {/* Instructions */}
      <Typography
        variant="body2"
        sx={{
          color: '#4C4C4C',
          fontWeight: 400,
          marginBottom: 1,
          fontSize: '14px',
          lineHeight: '24px'
        }}
      >
        {instructionsText}
      </Typography>

      {/* Permissions Path */}
      <Typography
        variant="body2"
        sx={{
          color: '#4C4C4C',
          fontWeight: 700,
          marginBottom: 4,
          fontSize: '0.875rem'
        }}
      >
        {permissionsPath}
      </Typography>

      {/* Return Button */}
      <Button
        variant='text'
        onClick={handleReturnHome}
        startIcon={<ReplyIcon width={18} height={18} />}
        sx={{
          textTransform: 'none',
          padding: '10px 24px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#4C4C4C'
        }}
      >
        {buttonText}
      </Button>
    </Container>
  );
};

export default RestrictedAccess;
