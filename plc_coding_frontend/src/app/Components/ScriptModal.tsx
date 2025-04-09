// src/components/ScriptModal.tsx
import React, { ReactNode } from 'react';

interface ScriptModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  onRunScript: () => void;
}

const ScriptModal: React.FC<ScriptModalProps> = ({ isOpen, title, children, onClose, onRunScript }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={modalHeaderStyle}>
          <h2 style={modalTitleStyle}>{title}</h2>
          <button style={closeButtonStyle} onClick={onClose}>
            &times;
          </button>
        </div>
        <div style={modalContentStyle}>{children}</div>
        <div style={modalFooterStyle}>
          <button style={runButtonStyle} onClick={onRunScript}>
            Run Script
          </button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '90%',
  padding: '1.5rem',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  boxSizing: 'border-box',
};

const modalHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
};

const modalTitleStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: 'Bebas Neue, sans-serif',
  color: '#1d2757', // Texas Blue
};

const closeButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#1d2757', // Texas Blue for the close button
};

const modalContentStyle: React.CSSProperties = {
  fontFamily: 'MyriadPro, sans-serif',
  fontSize: '1rem',
  color: '#333',
};

const modalFooterStyle: React.CSSProperties = {
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'flex-end',
};

const runButtonStyle: React.CSSProperties = {
  backgroundColor: '#d13138', // Lone Star Red
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default ScriptModal;