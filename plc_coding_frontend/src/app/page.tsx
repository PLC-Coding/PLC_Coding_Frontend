// src/pages/HomePage.tsx
import React from 'react';
import Link from 'next/link';
import TopBar from './Components/TopBar';    // Adjust path as needed
import Button from './Components/Button';    // Adjust path as needed
import Footer from './Components/Footer';    // Adjust path as needed
import { COLORS } from './Components/brandColors'; // If you have a brandColors file

const HomePage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'MyriadPro, sans-serif', backgroundColor: '#fff' }}>
      {/* Top Bar with TSTC logo and menu */}
      <TopBar />

      {/* Main content area */}
      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1rem',
        }}
      >
        {/* Page Title */}
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '1rem',
            color: COLORS.texasBlue,
            fontFamily: 'Bebas Neue, sans-serif',
          }}
        >
          Canvas Script Repository
        </h1>

        {/* Intro Paragraph */}
        <p
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            lineHeight: 1.5,
            color: COLORS.texasBlue,
          }}
        >
          Welcome to the Canvas Script Repository! Here, you’ll find a collection 
          of customizable scripts to embed or run within your Canvas courses. 
          Whether you’re looking to streamline your workflow, automate tasks, 
          or enrich your course data, these scripts offer practical solutions 
          to enhance your Canvas experience.
        </p>
      </main>

      {/* Gray Section Bar with CTA Buttons */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#e0e0e0', // light gray background
          padding: '1rem 0',
          margin: '2rem 0',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '10rem',
          }}
        >
          {/* CTA Buttons */}
          <Link href="/script-page" passHref>
            <Button variant="primary">Script Directory</Button>
            </Link>
          <Link href="/meet-the-team" passHref>
          <Button variant="primary">Meet the Team</Button>
          </Link>
        </div>
      </section>

      {/* Additional Main Content (Video Section with 3D inset border) */}
      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1rem',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#ccc',
            // Brand-appropriate 3D inset border
            border: `4px solid ${COLORS.texasBlue}`,
            boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.3), inset -2px -2px 5px rgba(255,255,255,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            color: '#666',
          }}
        >
          Video 1280px
        </div>
      </main>

      {/* Footer with TSTC branding, links, etc. */}
      <Footer />
    </div>
  );
};

export default HomePage;