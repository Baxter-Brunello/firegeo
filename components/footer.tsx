import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-zinc-600 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div>
          <Image
            src="/Revscale-Logo-2025-R-Mark-Dark.png"
            alt="Firecrawl"
            width={120}
            height={25}
          />
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="text-sm hover:text-zinc-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-zinc-900 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}