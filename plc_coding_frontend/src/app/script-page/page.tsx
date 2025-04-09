// src/pages/ScriptPage.tsx
"use client";

import React, { useState } from 'react';
import TopBar from '../Components/TopBar';         // Adjust path as needed
import Footer from '../Components/Footer';         // Adjust path as needed
import ScriptModal from '../Components/ScriptModal'; // Adjust path as needed
import ScriptUploadModal from '../Components/ScriptUploadModal'; // Ensure this is exported correctly (default/named)
import ScriptDetail from '../Components/ScriptDetail'; 
import Button from '../Components/Button';         // Your custom Button component
import { COLORS } from '../Components/brandColors';  // TSTC brand colors

const ScriptPage: React.FC = () => {
  // State for the Script Detail Modal (shows details for a selected script)
  const [selectedScript, setSelectedScript] = useState<string | null>(null);
  // State for the Script Upload Modal (for uploading new scripts)
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);

  // Opens the modal with the selected script's name.
  const openModal = (scriptName: string) => {
    setSelectedScript(scriptName);
  };

  // Closes the modal.
  const closeModal = () => {
    setSelectedScript(null);
  };

  
  // Opens the upload modal
  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  // Closes the upload modal
  const closeUploadModal = () => {
    setUploadModalOpen(false);
  };

  // Example data for three scripts.
  const scripts = [
    {
      name: 'Script 1',
      blurb: 'Automates X, Y, and Z...',
      image: '/images/script1.png',
    },
    {
      name: 'Script 2',
      blurb: 'Helps with data analysis for ABC courses...',
      image: '/images/script2.png',
    },
    {
      name: 'Script 3',
      blurb: 'Tracks user progress and performance...',
      image: '/images/script3.png',
    },
  ];

  return (
    <div style={{ fontFamily: 'MyriadPro, sans-serif', backgroundColor: '#fff' }}>
      <TopBar />

      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1rem',
          color: COLORS.texasBlue,
        }}
      >
        <h1
          style={{
            marginBottom: '2rem',
            fontSize: '3rem', // Increased font size for prominence
            fontWeight: 'bold', // Bold text
            textAlign: 'center',
            fontFamily: 'Bebas Neue, sans-serif', // Using brand font
            color: COLORS.texasBlue,
          }}
        >
          Script Page
        </h1>

           {/* "Upload Script" button that opens the new Script Upload modal */}
           <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={openUploadModal}>
            Upload Script
          </Button>
        </div>

        {/* Vertical, left-aligned list of ScriptDetail components */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2rem',
          }}
        >
          {scripts.map((script) => (
            <ScriptDetail
              key={script.name}
              scriptName={script.name}
              scriptBlurb={script.blurb}
              imageSrc={script.image}
              onDetailClick={() => openModal(script.name)}
            />
          ))}
        </div>
      </main>

      {/* Script Modal Popup */}
      <ScriptModal
        isOpen={selectedScript !== null}
        title={selectedScript || ''}
        onClose={closeModal}
      >
        <p>
          Details and code for <strong>{selectedScript}</strong> go here.
        </p>
      </ScriptModal>

        {/* Script Upload Modal Popup */}
        <ScriptUploadModal isOpen={uploadModalOpen} onClose={closeUploadModal} />

      <Footer />
    </div>
  );
};

export default ScriptPage;