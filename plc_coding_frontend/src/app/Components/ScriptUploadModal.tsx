"use client";

import React, { useState } from 'react';

interface ScriptUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScriptUploadModal: React.FC<ScriptUploadModalProps> = ({ isOpen, onClose }) => {
  const [scriptTitle, setScriptTitle] = useState('');
  const [scriptType, setScriptType] = useState('');
  const [scriptURL, setScriptURL] = useState('');
  const [scriptVariables, setScriptVariables] = useState('');
  const [scriptDescription, setScriptDescription] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [notify, setNotify] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data here (e.g., send to API)
    alert('Form submitted!');
    onClose();
  };

  return (
    <>
      {/* Style block to override placeholder styling */}
      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #000 !important;
        }
      `}</style>

      <div style={overlayStyle}>
        <div style={modalStyle}>
          {/* Header */}
          <div style={modalHeaderStyle}>
            <h2 style={headerTitleStyle}>Script Upload</h2>
            <button style={closeButtonStyle} onClick={onClose}>
              &times;
            </button>
          </div>

          {/* Intro Text */}
          <p style={{ ...introTextStyle, fontWeight: 'bold' }}>
            The PLC_Coding Team invites all members of the Instructional Design and Support department 
            to contribute to the Script Directory by submitting their scripts. Whether you’re looking to 
            streamline your workflow, automate tasks, or enrich your course data, these scripts offer 
            practical solutions to enhance your Canvas experience.
          </p>
          <p style={{ ...introTextStyle, fontSize: '0.875rem' }}>
            <strong>Note:</strong> Submissions are not automatically added to the Script Directory. Each 
            upload will undergo a review process. If you would like to receive updates on your submission, 
            please provide your email when filling out the form.
          </p>

          {/* Subheading */}
          <h3 style={subHeadingStyle}>Script Upload Form</h3>

          {/* Form */}
          <form onSubmit={handleSubmit} style={formStyle}>
            {/* LEFT COLUMN */}
            <div style={columnStyle}>
              <label style={labelStyle}>Script Title</label>
              <input
                style={{ ...inputStyle, color: '#000' }}
                type="text"
                placeholder="Enter Title"
                value={scriptTitle}
                onChange={(e) => setScriptTitle(e.target.value)}
                required
              />

              <label style={labelStyle}>Script Type</label>
              <input
                style={{ ...inputStyle, color: '#000' }}
                type="text"
                placeholder="Enter Type"
                value={scriptType}
                onChange={(e) => setScriptType(e.target.value)}
                required
              />

              <label style={labelStyle}>Script URL</label>
              <input
                style={{ ...inputStyle, color: '#000' }}
                type="url"
                placeholder="Enter URL"
                value={scriptURL}
                onChange={(e) => setScriptURL(e.target.value)}
              />

              <label style={labelStyle}>Script Variables</label>
              <input
                style={{ ...inputStyle, color: '#000' }}
                type="text"
                placeholder="Enter Variables"
                value={scriptVariables}
                onChange={(e) => setScriptVariables(e.target.value)}
              />
            </div>

            {/* RIGHT COLUMN */}
            <div style={columnStyle}>
              <label style={labelStyle}>Description of Script</label>
              <textarea
                style={{ ...textareaStyle, color: '#000' }}
                placeholder="Description"
                value={scriptDescription}
                onChange={(e) => setScriptDescription(e.target.value)}
                required
              />

              <label style={labelStyle}>Full Name</label>
              <input
                style={{ ...inputStyle, color: '#000' }}
                type="text"
                placeholder="Enter Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <label style={labelStyle}>Email Address</label>
              <input
                style={{ ...inputStyle, color: '#000' }}
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div style={checkboxContainerStyle}>
                <input
                  type="checkbox"
                  checked={notify}
                  onChange={(e) => setNotify(e.target.checked)}
                />
                <span style={{ marginLeft: '0.5rem' }}>
                  I want to be notified of the review status of my script.
                </span>
              </div>
            </div>

            {/* Buttons Row */}
            <div style={buttonRowStyle}>
              <button type="submit" style={submitButtonStyle}>
                Submit
              </button>
              <button type="button" style={closeButtonStyle2} onClick={onClose}>
                Close
              </button>
            </div>
          </form>

          {/* Footer text or contact info */}
          <p style={footerTextStyle}>
            Questions? Contact [Name] via [chat/email] at [email address].
          </p>
        </div>
      </div>
    </>
  );
};

export default ScriptUploadModal;

/* STYLES */

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  width: '90%',
  maxWidth: '700px',
  maxHeight: '90vh',
  overflowY: 'auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '2rem',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  boxSizing: 'border-box',
  fontFamily: 'MyriadPro, sans-serif',
};

const modalHeaderStyle: React.CSSProperties = {
  position: 'relative',
  textAlign: 'center',
  marginBottom: '1rem',
};

const headerTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '2rem',
  fontFamily: 'Bebas Neue, sans-serif',
  color: '#1d2757',
  width: '100%',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  right: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#1d2757',
};

const introTextStyle: React.CSSProperties = {
  marginBottom: '1rem',
  lineHeight: 1.5,
  color: '#333',
};

const subHeadingStyle: React.CSSProperties = {
  margin: '1rem 0',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  fontFamily: 'Bebas Neue, sans-serif',
  color: '#1d2757',
};

const formStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '1rem',
  rowGap: '1rem',
  marginBottom: '1.5rem',
};

const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const labelStyle: React.CSSProperties = {
  fontWeight: 'bold',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  color: '#000',
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: '80px',
};

const checkboxContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.5rem',
};

const buttonRowStyle: React.CSSProperties = {
  gridColumn: '1 / -1',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-end',
};

const submitButtonStyle: React.CSSProperties = {
  backgroundColor: '#d13138',
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const closeButtonStyle2: React.CSSProperties = {
  backgroundColor: '#ccc',
  color: '#333',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const footerTextStyle: React.CSSProperties = {
  marginTop: '1rem',
  fontSize: '0.875rem',
  color: '#666',
  textAlign: 'center',
};