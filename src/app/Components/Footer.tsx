import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1b2a47] text-white text-center py-6 mt-10">
            <div className="flex flex-col items-center gap-2">
                {/* Logo and Branding */}
                <div className="flex items-center gap-2">
                    <Image
                        src="images/PLC_CodingLogo.jpg" // Replace with correct logo path
                        alt="PLC Coding Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                    <span className="text-sm font-semibold tracking-wide text-white">PLC CODING</span>
                </div>

                {/* Contact Info */}
                <p className="text-xs text-gray-300">
                    Questions? Contact Travis via email at{" "}
                    <a
                        href="mailto:travis@example.com"
                        className="text-blue-400 underline hover:text-blue-300"
                    >
                        travis@example.com
                    </a>
                </p>
            </div>
        </footer>
    );
}
