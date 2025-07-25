import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SimpleModalComponent from './SimpleModal';

// Fondo de ejemplo para mostrar el efecto modal
const BackgroundDecorator = (Story: React.FC) => (
  <div style={{ 
    position: 'relative', 
    height: '100vh', 
    backgroundImage: 'url(https://via.placeholder.com/1600x900?text=Background+Content)',
    backgroundSize: 'cover'
  }}>
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      height: '60px', 
      backgroundColor: '#E84142', 
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: '#E84142', fontWeight: 'bold' }}>CO</span>
        </div>
        <span style={{ fontWeight: 'bold' }}>Chicos Olé</span>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>monadic_chicos@claroshop.com</span>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: '#A52A2A', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          M
        </div>
      </div>
    </div>
    <Story />
  </div>
);

// Componente de ejemplo para el contenido
const ExampleContent = () => (
  <div>
    <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 500 }}>Términos y Condiciones</h2>
    <p style={{ marginBottom: '16px', color: '#666' }}>
      Por favor, lee detenidamente los siguientes términos y condiciones antes de continuar utilizando nuestros servicios.
    </p>
    
    <div style={{ maxHeight: '300px', overflow: 'auto', border: '1px solid #eee', borderRadius: '4px', padding: '16px', marginBottom: '24px' }}>
      <h3 style={{ fontSize: '16px', marginBottom: '12px', fontWeight: 500 }}>1. Introducción</h3>
      <p style={{ marginBottom: '12px' }}>
        Estos Términos y Condiciones rigen el uso de nuestros servicios, aplicaciones móviles y sitio web. Al acceder o usar nuestros servicios, aceptas estar sujeto a estos términos. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder a nuestros servicios.
      </p>
      
      <h3 style={{ fontSize: '16px', marginBottom: '12px', marginTop: '24px', fontWeight: 500 }}>2. Definiciones</h3>
      <p style={{ marginBottom: '12px' }}>
        "Servicios" se refiere a todas las funcionalidades, herramientas, contenido, aplicaciones y servicios ofrecidos por nuestra plataforma.
      </p>
      <p style={{ marginBottom: '12px' }}>
        "Usuario" se refiere a cualquier persona que acceda o utilice nuestros servicios, ya sea como visitante o como usuario registrado.
      </p>
      
      <h3 style={{ fontSize: '16px', marginBottom: '12px', marginTop: '24px', fontWeight: 500 }}>3. Registro y Cuentas</h3>
      <p style={{ marginBottom: '12px' }}>
        Para utilizar ciertas funcionalidades de nuestros Servicios, deberás crear una cuenta. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta.
      </p>
      
      <h3 style={{ fontSize: '16px', marginBottom: '12px', marginTop: '24px', fontWeight: 500 }}>4. Privacidad</h3>
      <p style={{ marginBottom: '12px' }}>
        Tu privacidad es importante para nosotros. Consulta nuestra Política de Privacidad para entender cómo recopilamos, usamos y protegemos tu información personal.
      </p>
      
      <h3 style={{ fontSize: '16px', marginBottom: '12px', marginTop: '24px', fontWeight: 500 }}>5. Contenido del Usuario</h3>
      <p style={{ marginBottom: '12px' }}>
        Al enviar cualquier contenido a nuestros Servicios, nos otorgas una licencia mundial, no exclusiva, libre de regalías y transferible para usar, reproducir, distribuir, preparar trabajos derivados, mostrar y ejecutar dicho contenido.
      </p>
    </div>
    
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
      <button style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}>
        Rechazar
      </button>
      <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#E84142', color: 'white' }}>
        Aceptar
      </button>
    </div>
  </div>
);

// Componente de formulario de ejemplo
const FormExample = () => (
  <div>
    <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 500 }}>Formulario de Contacto</h2>
    <p style={{ marginBottom: '24px', color: '#666' }}>
      Por favor completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
    </p>
    
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Nombre completo*</label>
      <input type="text" placeholder="Ingresa tu nombre completo" style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
    </div>
    
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Correo electrónico*</label>
      <input type="email" placeholder="Ingresa tu correo electrónico" style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
    </div>
    
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Asunto*</label>
      <select style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }}>
        <option value="">Selecciona una opción</option>
        <option value="informacion">Solicitud de información</option>
        <option value="soporte">Soporte técnico</option>
        <option value="ventas">Ventas</option>
        <option value="otro">Otro</option>
      </select>
    </div>
    
    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Mensaje*</label>
      <textarea 
        placeholder="¿En qué podemos ayudarte?" 
        rows={5} 
        style={{ 
          padding: '10px', 
          width: '100%', 
          borderRadius: '4px', 
          border: '1px solid #ddd',
          resize: 'vertical' 
        }} 
      />
    </div>
    
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
      <button style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: 'white' }}>
        Cancelar
      </button>
      <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#E84142', color: 'white' }}>
        Enviar
      </button>
    </div>
  </div>
);

// Definición de meta para Storybook
const meta: Meta<typeof SimpleModalComponent> = {
  title: 'molecules/SimpleModalComponent',
  component: SimpleModalComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [BackgroundDecorator],
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onClose: { action: 'closed' },
    className: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleModalComponent>;

// Story con términos y condiciones
export const TermsAndConditions: Story = {
  args: {
    title: 'Términos y Condiciones',
    children: <ExampleContent />,
    className: {
      mainContainer: 'modal-container',
      headerProfile: 'modal-header',
      btnClose: 'btn-close',
      contentContainer: 'modal-content'
    },
    styles: {
      mainContainer: { 
        position: 'fixed',
        top: '65px'
      }
    }
  },
};

// Story con formulario
export const ContactForm: Story = {
  args: {
    title: 'Contacto',
    children: <FormExample />,
    className: {
      mainContainer: 'modal-container',
      headerProfile: 'modal-header',
      btnClose: 'btn-close',
      contentContainer: 'modal-content'
    },
    styles: {
      mainContainer: { 
        position: 'fixed',
        top: '65px'
      }
    }
  },
};

// Story con vista móvil
export const MobileView: Story = {
  args: {
    ...TermsAndConditions.args,
    title: 'Términos y Condiciones (Móvil)',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};