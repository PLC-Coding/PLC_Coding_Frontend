// src/pages/ScriptPage.tsx
"use client";

import React, { useState } from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';
import ScriptModal from '../Components/ScriptModal';
import ScriptUploadModal from '../Components/ScriptUploadModal';
import ScriptDetail from '../Components/ScriptDetail';
import Button from '../Components/Button';
import { COLORS } from '../Components/brandColors';

const ScriptPage: React.FC = () => {
    const [selectedScript, setSelectedScript] = useState<string | null>(null);
    const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);

    const openModal = (scriptName: string) => {
        setSelectedScript(scriptName);
    };

    const closeModal = () => {
        setSelectedScript(null);
    };

    const openUploadModal = () => {
        setUploadModalOpen(true);
    };

    const closeUploadModal = () => {
        setUploadModalOpen(false);
    };

    // Dummy runScript function (you can replace this later)
    const runScript = (scriptName: string) => {
        alert(`Running script: ${scriptName}`);
    };

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
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontFamily: 'Bebas Neue, sans-serif',
                        color: COLORS.texasBlue,
                    }}
                >
                    Script Page
                </h1>

                {/* Upload Script Button */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Button variant="primary" onClick={openUploadModal}>
                        Upload Script
                    </Button>
                </div>

                {/* Script Details List */}
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
                onRunScript={() => {
                    if (selectedScript) {
                        runScript(selectedScript);
                    }
                }}
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
