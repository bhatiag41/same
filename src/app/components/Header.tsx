import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="w-full bg-[#f3f1e7] flex items-center justify-start px-14 py-12">
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="https://ext.same-assets.com/3467442324/144095289.png"
        alt="Jennifer Hahm Ph.D. Psychological Services PLLC"
        width={300}
        height={100}
        priority
      />
    </Link>
  </header>
);

export default Header;
