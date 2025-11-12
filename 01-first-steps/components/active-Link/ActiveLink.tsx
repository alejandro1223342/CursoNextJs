"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export default function ActiveLink({ path, text }: Props) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`mr-2 transition-all hover:underline hover:text-red-400 ${
        isActive ? "text-red-500" : ""
      }`}
    >
      {text}
    </Link>
  );
}


