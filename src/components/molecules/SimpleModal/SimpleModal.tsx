import React, { useEffect, useState } from 'react';
import { 
  Stack, 
  Box,
  Divider,
  styled
} from '@mui/material';
import { CloseButton } from '@/components/Atoms/CloseButton';
import { SimpleModalProps } from './SimpleModal.types';

// Estilos para la animación
const AnimatedModal = styled(Box)(({ theme }) => ({
  '&.modal-enter': {
    transform: 'translateY(100%)',
    opacity: 0,
  },
  '&.modal-enter-active': {
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
  },
  '&.modal-exit': {
    transform: 'translateY(0)',
    opacity: 1,
  },
  '&.modal-exit-active': {
    transform: 'translateY(100%)',
    opacity: 0,
    transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
  },
}));


const SimpleModalComponent: React.FC<SimpleModalProps> = ({
  title,
  onClose,
  children,
  className = {},
  styles = {}
}) => {
  const [modalClass, setModalClass] = useState('modal-enter');

   // Efecto para manejar la animación de entrada
    useEffect(() => {
      const timer = setTimeout(() => {
        setModalClass('modal-enter modal-enter-active');
      }, 10);
  
      return () => clearTimeout(timer);
    }, []);
  
     // Handler para cerrar con animación
     const handleClose = () => {
      setModalClass('modal-exit modal-exit-active');
      
      const timer = setTimeout(() => {
        onClose();
      }, 300);
  
      return () => clearTimeout(timer);
    };
  return (
    <div style={{ position: 'absolute', top:'0px', left: '0px', zIndex: 1, width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#0000006b' }}>
    <AnimatedModal
        className={`${className.mainContainer} ${modalClass}`}
        sx={{
          backgroundColor: '#FFFFFF',
          position: 'fixed',
          top: '65px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          overflow: 'auto',
          boxShadow: '0px -2px 10px rgba(0,0,0,0.1)',
          borderRadius: '20px 20px 0px 0px',
          ...styles.mainContainer
        }}
      >
    
      <Box
        component="header" 
        className={className.headerProfile}
        sx={{
          ...styles.headerProfile
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
          <h1>{title}</h1>
          <CloseButton
            className={className.btnClose} 
            aria-label="close" 
            onClick={onClose} 
            size="small" 
          />
        </Stack>
      </Box>
      <Divider />
      <Box
        className={className.contentContainer}
        sx={{ 
          p: 3, 
          backgroundColor: '#FFFFFF',
          ...styles.contentContainer 
        }}
      >
        {children}
      </Box>
    </AnimatedModal>
    </div>
  );
};

export default SimpleModalComponent;