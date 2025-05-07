// src/pages/HomePage.tsx
import React from 'react';
import Link from 'next/link';
import TopBar from './Components/TopBar';    // Adjust path if needed
import Button from './Components/Button';    // Adjust path if needed
import { COLORS } from './Components/brandColors'; // Adjust path if needed

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
                    Canvas API Repository
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
                    Welcome to the Canvas API Repository! Here, you’ll find a collection
                    of customizable API scripts to embed or run within your Canvas courses.
                    Whether you’re looking to streamline your workflow, automate tasks,
                    or enrich your course data, these scripts offer practical solutions
                    to enhance your Canvas experience.
                </p>

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
                        {/* Wrap Buttons inside <a> tags inside Link */}
                        <Link href="/script-page" passHref legacyBehavior>
                            <a style={{textDecoration: 'none'}}>
                                <Button variant="primary">API Directory</Button>
                            </a>
                        </Link>
                        <Link href="/meet-the-team" passHref legacyBehavior>
                            <a style={{textDecoration: 'none'}}>
                                <Button variant="primary">Meet the Team</Button>
                            </a>
                        </Link>
                    </div>
                </section>

                {/* Additional Content (Video Section with 3D inset border) */}
                <section
                    style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        padding: '2rem 1rem',
                    }}
                >
                    <div
                        style={{
                            border: `4px solid ${COLORS.texasBlue}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="/images/Create-an-Access-Token.gif" // replace with your actual path
                            alt="Demo video"
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </section>

            </main>
            
        </div>
    );
};

export default HomePage;
