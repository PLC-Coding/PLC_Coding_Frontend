import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center text-center px-4 py-6 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-2">
                <Image
                    src="/plc-logo.png" // Update to your actual logo file
                    alt="PLC Coding Logo"
                    width={32}
                    height={32}
                />
                <span className="text-lg font-semibold text-[#1d2757]">PLC CODING</span>
            </div>

            {/* Contact Line */}
            <p className="text-[#1d2757] text-sm">
                <strong>Questions?</strong><br />
                Contact <span className="font-medium">Travis</span> via email at{" "}
                <a
                    href="mailto:travis@example.com"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    travis@example.com
                </a>
                .
            </p>
        </footer>
    );
}
