// CanvasAPIsPage.tsx – updated to include Email fields in each form
"use client";

import React, { useState } from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';
import { COLORS } from '../Components/brandColors';

const CanvasAPIsPage: React.FC = () => {
  /* ---------------- PDF FILES form state ---------------- */
  const [pdfToken, setPdfToken] = useState('');
  const [pdfCourse, setPdfCourse] = useState('');
  const [pdfEmail, setPdfEmail] = useState('');

  /* --------------- CURRENT INSTRUCTORS form state --------------- */
  const [instToken, setInstToken] = useState('');
  const [instCourse, setInstCourse] = useState('');
  const [instEmail, setInstEmail] = useState('');

  /* --------------------- Handlers --------------------- */
  const handlePdfSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`PDF Files – Token: ${pdfToken}\nCourse ID: ${pdfCourse}\nEmail: ${pdfEmail}`);
  };

  const handleInstSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Current Instructors – Token: ${instToken}\nCourse ID: ${instCourse}\nEmail: ${instEmail}`);
  };

  return (
    <div style={{ fontFamily: 'MyriadPro, sans-serif', backgroundColor: '#fff' }}>
      <TopBar />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* ---------- PAGE TITLE ---------- */}
        <h1
          style={{
            textAlign: 'center',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2.5rem',
            color: COLORS.texasBlue,
            marginBottom: '0.75rem',
          }}
        >
          Canvas APIs
        </h1>

        {/* ---------- INTRO PARAGRAPH ---------- */}
        <p style={{ textAlign: 'center', lineHeight: 1.4, maxWidth: '650px', margin: '0 auto 2.5rem', color: '#000' }}>
          To utilize the APIs below, you will need to generate an Access Token. Refer to the Get Access Token video on the Home Page if you need assistance generating a token.
        </p>

        {/* ========================= PDF FILES SECTION ========================= */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>PDF Files</h2>
          <p style={sectionSubTextStyle}>
            Returns a list of PDF files from a course. Complete the fields below then click&nbsp;‘Run’.
          </p>

          <form onSubmit={handlePdfSubmit} style={formRowStyle}>
            {/* Token & Course ID */}
            <div style={inputBlockStyle}>
              <label style={labelStyle}>Access Token</label>
              <input
                type="text"
                placeholder="Enter Access Token"
                value={pdfToken}
                onChange={(e) => setPdfToken(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputBlockStyle}>
              <label style={labelStyle}>Course ID Number</label>
              <input
                type="text"
                placeholder="Enter Course ID"
                value={pdfCourse}
                onChange={(e) => setPdfCourse(e.target.value)}
                style={inputStyle}
              />
            </div>
            {/* Email */}
            <div style={{ ...inputBlockStyle, gridColumn: '1 / -1', alignItems: 'center' }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={pdfEmail}
                onChange={(e) => setPdfEmail(e.target.value)}
                style={{ ...inputStyle, maxWidth: '260px' }}
              />
            </div>
            {/* Run Button */}
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '1rem' }}>
              <button type="submit" style={runButtonStyle}>Run</button>
            </div>
          </form>
        </section>

        {/* ---------- DIVIDER ---------- */}
        <hr style={{ border: 'none', borderTop: `2px solid ${COLORS.texasBlue}`, margin: '3rem 0' }} />

        {/* ===================== CURRENT INSTRUCTORS SECTION ===================== */}
        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>Current Instructors</h2>
          <p style={sectionSubTextStyle}>
            Returns a list of the current users in a course. Complete the fields below then click&nbsp;‘Run’.
          </p>

          <form onSubmit={handleInstSubmit} style={formRowStyle}>
            {/* Token & Course ID */}
            <div style={inputBlockStyle}>
              <label style={labelStyle}>Access Token</label>
              <input
                type="text"
                placeholder="Enter Access Token"
                value={instToken}
                onChange={(e) => setInstToken(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputBlockStyle}>
              <label style={labelStyle}>Course ID Number</label>
              <input
                type="text"
                placeholder="Enter Course ID"
                value={instCourse}
                onChange={(e) => setInstCourse(e.target.value)}
                style={inputStyle}
              />
            </div>
            {/* Email */}
            <div style={{ ...inputBlockStyle, gridColumn: '1 / -1', alignItems: 'center' }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={instEmail}
                onChange={(e) => setInstEmail(e.target.value)}
                style={{ ...inputStyle, maxWidth: '260px' }}
              />
            </div>
            {/* Run Button */}
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '1rem' }}>
              <button type="submit" style={runButtonStyle}>Run</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default CanvasAPIsPage;

/* ===================== SHARED STYLES ===================== */
const sectionStyle: React.CSSProperties = {
  marginBottom: '2rem',
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: 'Bebas Neue, sans-serif',
  fontSize: '1.25rem',
  color: COLORS.texasBlue,
  marginBottom: '0.25rem',
};

const sectionSubTextStyle: React.CSSProperties = {
  marginBottom: '1.5rem',
  color: '#000',
  fontSize: '0.875rem',
  lineHeight: 1.4,
};

const formRowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '1rem',
  maxWidth: '600px',
  margin: '0 auto',
};

const inputBlockStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle: React.CSSProperties = {
  textAlign: 'center',
  fontWeight: 600,
  marginBottom: '0.25rem',
  color: '#000',
  fontSize: '0.8125rem',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  border: '1px solid #000',
  borderRadius: '4px',
  fontSize: '0.95rem',
};

const runButtonStyle: React.CSSProperties = {
  backgroundColor: '#d13138',
  color: '#fff',
  border: 'none',
  padding: '0.65rem 2.5rem',
  borderRadius: '25px',
  fontSize: '1rem',
  fontWeight: 700,
  cursor: 'pointer',
};
