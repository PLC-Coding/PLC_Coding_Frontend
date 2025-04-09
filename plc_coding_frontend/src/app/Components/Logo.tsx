import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <Image
            src="/TSTCLogo-Primary2C (5).png"
            alt="TSTC Logo"
            width={120}
            height={50}
            priority // optional, helps LCP
        />
    );
};

export default Logo;