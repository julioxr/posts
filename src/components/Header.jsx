"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
    const ruta = usePathname();
    return (
        <header className="absolute right-0 flex">
            <div className="bg-neutral-100 rounded-full border-2 border-neutral-200 hover:bg-neutral-200 transition-all">
                {ruta !== "/" && (
                    <Link href="/">
                        <AiOutlineHome className="w-14 h-14 p-3" />
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
