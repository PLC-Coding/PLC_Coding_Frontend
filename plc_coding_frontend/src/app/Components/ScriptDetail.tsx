// src/Components/ScriptDetail.tsx
import React from 'react';
import Button from './Button'; // Your custom Button component
import { COLORS } from './brandColors'; // Your TSTC brand colors

interface ScriptDetailProps {
  scriptName: string;
  scriptBlurb: string;
  imageSrc: string;
  /** Called when the user clicks "Script Detail" to open the modal */
  onDetailClick?: () => void;
}

const ScriptDetail: React.FC<ScriptDetailProps> = ({
  scriptName,
  scriptBlurb,
  imageSrc,
  onDetailClick,
}) => {
  return (
    <div style={containerStyle}>
      {/* Left Section */}
      <div style={leftSectionStyle}>
        <h2 style={scriptNameStyle}>{scriptName}</h2>
        <p style={scriptBlurbStyle}>{scriptBlurb}</p>
        <Button variant="primary" onClick={onDetailClick}>
          Script Detail
        </Button>
      </div>
      {/* Right Section (Image) */}
      <div style={rightSectionStyle}>
        <img src={imageSrc} alt="Script Visual" style={imageStyle} />
      </div>
    </div>
  );
};

/* Inline Styles for uniform blocks */
const containerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '200px', // Fixed height for uniform block size
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '1rem',
  boxSizing: 'border-box',
};

const leftSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '50%',
  gap: '0.5rem',
};

const scriptNameStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '1.5rem',
  fontFamily: 'Bebas Neue, sans-serif',
  color: COLORS.texasBlue,
};

const scriptBlurbStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '1rem',
  fontFamily: 'MyriadPro, sans-serif',
  color: '#333',
};

const rightSectionStyle: React.CSSProperties = {
  width: '45%',
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  borderRadius: '4px',
};

export default ScriptDetail;