// src/components/TopBar.tsx
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';


const TopBar: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
  };

  return (
    <header style={containerStyle}>
      {/* Logo on the left */}
      <Logo  />

      {/* Navigation Menu with buttons */}
      <nav style={navStyle}>
        <Link href="/" passHref>
          <Button variant="secondary">Home</Button>
        </Link>
        <Link href="/script-page" passHref>
          <Button variant="secondary">API Directory</Button>
        </Link>
        <Link href="/meet-the-team" passHref>
          <Button variant="secondary">Meet the Team</Button>
        </Link>
      </nav>
    </header>
  );
};

export default TopBar;