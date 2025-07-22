import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Button from '@mui/material/Button';

// Definición de meta para Storybook
const meta: Meta<typeof Card> = {
  title: 'atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card multifunction',
      },
    },
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

// Historia básica
export const Default: Story = {
  args: {
    children: <>
     <div className=' block relative w-full '>
        <div className='grid gap-2'>
            <h2 style={{fontWeight:'700', fontSize:'14px', lineHeight: '100%', letterSpacing: '0px', paddingBottom:''}}>Sucursal principal</h2>
            <p style={{fontWeight:'400', fontSize: '12px', lineHeight: '100%', letterSpacing: '0%'}}>Esta sucursal es utilizada por T1 para descontar el  inventario de tus ventas de ecommerce</p>
        </div>
    </div>
    <Card>
        <div className='block relative w-full '>
            <div className='grid gap-4'>
                <h2 style={{fontWeight:'700', fontSize:'14px', lineHeight: '100%', letterSpacing: '0px', paddingBottom:''}}>Almacén</h2>
                <div className='flex relative justify-between'>
                    <p style={{fontWeight:'400', fontSize: '12px', lineHeight: '100%', letterSpacing: '0%', width: '32px' }}>Lago Zurich 25, Ampliación granada, Miguel Hidalgo, 55110, CDMX, México.</p>
                    <Button
                        className=' font-[700] text-[14px]'
                        variant='text'
                    >
                        Botón
                    </Button>
                </div>
            </div>
        </div>
    </Card>
    </>
  },
};
