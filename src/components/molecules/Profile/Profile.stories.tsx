import type { Meta, StoryObj } from '@storybook/react';
import Profile from './Profile';

// Use image from public folder - accessible in Storybook
const profileImage = '/images/profile.jpg';

const meta: Meta<typeof Profile> = {
  title: 'molecules/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Profile component displays user information with avatar (initials or image), name, and email with tooltips for long text.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'User full name'
    },
    email: {
      control: 'text',
      description: 'User email address'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the container'
    },
    fontClassName: {
      control: 'text',
      description: 'CSS classes for font customization'
    },
    color: {
      control: 'color',
      description: 'Background color for the avatar when no image is provided'
    },
    iconProfile: {
      control: 'text',
      description: 'URL or path to the profile image'
    }
  }
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<Meta<typeof Profile>>;

// Default story with initials
export const Default: Story = {
  args: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    color: '#db3b2b',
    iconProfile: undefined
  }
};

// Story with profile image
export const WithProfileImage: Story = {
  args: {
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    color: '#db3b2b',
    iconProfile: profileImage
  }
};

// Story with custom color
export const CustomColor: Story = {
  args: {
    name: 'Alice Johnson',
    email: 'alice.johnson@startup.io',
    color: '#2563eb',
    iconProfile: undefined
  }
};

// Story with long name and email (to test tooltips)
export const LongNameAndEmail: Story = {
  args: {
    name: 'Christopher Alexander Montgomery',
    email: 'christopher.alexander.montgomery@verylongdomainname.com',
    color: '#059669',
    iconProfile: undefined
  }
};

// Story with single name (tests initials logic)
export const SingleName: Story = {
  args: {
    name: 'Madonna',
    email: 'madonna@music.com',
    color: '#dc2626',
    iconProfile: undefined
  }
};

// Story with custom styling
export const CustomStyling: Story = {
  args: {
    name: 'Robert Wilson',
    email: 'robert.wilson@design.com',
    color: '#7c3aed',
    iconProfile: undefined,
    className: 'custom-profile-container',
    fontClassName: 'custom-font-style'
  }
};

// Story with different color variations
export const ColorVariations: Story = {
  render: () => {
    const profiles = [
      { name: 'Alex Red', email: 'alex@red.com', color: '#dc2626' },
      { name: 'Beth Blue', email: 'beth@blue.com', color: '#2563eb' },
      { name: 'Carl Green', email: 'carl@green.com', color: '#059669' },
      { name: 'Diana Purple', email: 'diana@purple.com', color: '#7c3aed' },
      { name: 'Eva Orange', email: 'eva@orange.com', color: '#ea580c' }
    ];

    return (
      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        {profiles.map((profile, index) => (
          <Profile
            key={index}
            name={profile.name}
            email={profile.email}
            color={profile.color}
            iconProfile={undefined}
          />
        ))}
      </div>
    );
  }
};

// Story showing both image and initials versions
export const ImageVsInitials: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '32px', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>With Initials</h4>
        <Profile
          name="Sarah Connor"
          email="sarah.connor@resistance.com"
          color="#db3b2b"
          iconProfile={undefined}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>With Profile Image</h4>
        <Profile
          name="Sarah Connor"
          email="sarah.connor@resistance.com"
          color="#db3b2b"
          iconProfile={profileImage}
        />
      </div>
    </div>
  )
};

// Story with empty/edge cases
export const EdgeCases: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <div style={{ marginBottom: '8px' }}>
        <h4 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Short Name</h4>
        <Profile
          name="Jo"
          email="jo@short.com"
          color="#db3b2b"
          iconProfile={undefined}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <h4 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Three Names</h4>
        <Profile
          name="Mary Jane Watson"
          email="mj.watson@dailybugle.com"
          color="#db3b2b"
          iconProfile={undefined}
        />
      </div>
      <div>
        <h4 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Special Characters</h4>
        <Profile
          name="José María García-López"
          email="jose.garcia@empresa.es"
          color="#db3b2b"
          iconProfile={undefined}
        />
      </div>
    </div>
  )
};
