"use client"; // If you're using Next.js App Router and need client-side features

import React from 'react';
// Import your existing components as needed:
import TopBar from '../Components/TopBar';  // Adjust path
import Footer from '../Components/Footer';  // Adjust path
import { COLORS } from '../Components/brandColors'; // Adjust path

const TeamPage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'MyriadPro, sans-serif', backgroundColor: '#fff' }}>
      {/* Top navigation bar */}
      <TopBar />

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Page Title */}
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '2rem',
            color: COLORS?.texasBlue || '#1d2757',
            fontFamily: 'Bebas Neue, sans-serif',
          }}
        >
          Meet the PLC_Coding Team
        </h1>

        {/* Team Lead Section */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
            <img
                src="/images/Travis.jpg" // or use an external image URL
                alt="Haley Marek"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  marginBottom: '0.5rem',
                }}
              />
          />
          <h2 style={{ fontSize: '1.25rem', margin: 0, color: COLORS.texasBlue }}>Travis Ashcraft</h2>
          <p style={{ margin: '0.25rem 0', fontStyle: 'italic', color: COLORS.texasBlue }}>PLC Team Lead</p>
          <p style={{ maxWidth: '400px', textAlign: 'center', color: COLORS.texasBlue }}>
            Blurb about Travis—his role, background, and fun facts!
          </p>
        </section>

        {/* Additional Team Members */}
        <section>
          <h3
            style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              color: COLORS.texasBlue,
              fontFamily: 'Bebas Neue, sans-serif',
            }}
          >
            Additional Team Members
          </h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {/* Member Card 1 */}
            <div style={memberCardStyle}>
              <img
                src="/images/kagan.png" // or use an external image URL
                alt="Kagan Love"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                  marginBottom: '0.5rem',
                }}
              />
              <h4 style={{ margin: '0.5rem 0 0 0', color: COLORS.texasBlue }}>Kagan Love</h4>
              <p style={{ margin: '0.25rem 0', fontStyle: 'italic', color: COLORS.texasBlue }}>Front End Creator</p>
              <p style={{ textAlign: 'center', color: COLORS.texasBlue }}>Kagan LOVES Christmas, but he has also learned to love coding!</p>
            </div>

            {/* Member Card 2 */}
            <div style={memberCardStyle}>
              <img
                src="/images/jacquelyn.png" // or use an external image URL
                alt="Jacquelyn Rodriguez"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                  marginBottom: '0.5rem',
                }}
              />
              <h4 style={{ margin: '0.5rem 0 0 0', color: COLORS.texasBlue }}>Jacquelyn Rodriguez</h4>
              <p style={{ margin: '0.25rem 0', fontStyle: 'italic', color: COLORS.texasBlue }}>Front End Creator</p>
              <p style={{ textAlign: 'center', color: COLORS.texasBlue }}>Hi! I jumped into coding with absolutely zero experience—and haven’t looked back since. I’ve been working as an Instructional Designer at TSTC for the past 1.5 years, and I’m currently supporting the PRO program’s transition to PBE.</p>
            </div>

            {/* Member Card 3 */}
            <div style={memberCardStyle}>
              <img
                src="/images/sarah.png" // or use an external image URL
                alt="Sarah Hintze"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                  marginBottom: '0.5rem',
                }}
              />
              <h4 style={{ margin: '0.5rem 0 0 0', color: COLORS.texasBlue }}>Sarah Hintze</h4>
              <p style={{ margin: '0.25rem 0', fontStyle: 'italic', color: COLORS.texasBlue }}>Back End Creator</p>
              <p style={{ textAlign: 'center', color: COLORS.texasBlue }}>I’ve been an Instructional Designer at TSTC for four years, collaborating closely with the Building Construction Technology (BCT) and Cybersecurity (CYS) programs. My work focuses on designing engaging, outcomes-driven course content that supports hands-on and online learning and aligns with industry standards.</p>
            </div>

            {/* Member Card 4 */}
            <div style={memberCardStyle}>
            <img
                src="/images/Haley.jpg" // or use an external image URL
                alt="Haley Marek"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  marginBottom: '0.5rem',
                }}
              />
              <h4 style={{ margin: '0.5rem 0 0 0', color: COLORS.texasBlue }}>Haley Marek</h4>
              <p style={{ margin: '0.25rem 0', fontStyle: 'italic', color: COLORS.texasBlue }}>Back End Creator</p>
              <p style={{ textAlign: 'center', color: COLORS.texasBlue }}>I’m an Instructional Designer working with AMA/AMP. I’ve been at TSTC for 1.5 years. I have 10 years of experience in Higher Ed, including Help Desk and Instructional Technology roles.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;

/* Inline styles for repeated elements */
const memberCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '180px',
};

const photoPlaceholderStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  backgroundColor: '#ccc',
  borderRadius: '50%',
  marginBottom: '0.5rem',
};