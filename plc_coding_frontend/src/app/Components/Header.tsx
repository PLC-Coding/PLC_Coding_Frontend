// src/components/HeaderSection.tsx
import React from 'react';
import Button from './Button';
import { COLORS } from './brandColors';

const HeaderSection: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: '#f8f8f8',
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '50%',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Bebas Neue, sans-serif', // or MyriadPro if you prefer
    fontSize: '3rem',
    color: COLORS.texasBlue,
    marginBottom: '1rem',
  };

  const subtitleStyle: React.CSSProperties = {
    fontFamily: 'MyriadPro, sans-serif',
    fontSize: '1.125rem',
    color: '#333',
    marginBottom: '1.5rem',
    lineHeight: 1.5,
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
  };

  const imagePlaceholderStyle: React.CSSProperties = {
    width: '300px',
    height: '200px',
    backgroundColor: '#ccc',
    border: '2px dashed #999',
    borderRadius: '4px',
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>I'm a Header</h1>
        <p style={subtitleStyle}>
          Fresh ingredients newly baked into our super delicious food. Available
          in a range of delicious flavors, delivered to your door.
        </p>
        <div style={buttonContainerStyle}>
          <Button variant="primary">Home</Button>
          <Button variant="primary">Script Directory</Button>
          <Button variant="primary">Meet the Team</Button>
        </div>
      </div>
      <div style={imagePlaceholderStyle} />
    </sectio
