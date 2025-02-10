"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import Link from "next/link";
import { Activity } from "lucide-react";

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex justify-between items-center h-[30px]">
      <Link href="/">
        <button className="cursor-pointer flex items-center gap-1">
          <Activity className="text-green-800 rotate-10" />
          <h1 className="font-medium text-gray-600">Like Gecko</h1>
        </button>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/about">
          <span className="text-xs text-green-600">ABOUT</span>
        </Link>
        <Link href="/archives">
          <span className="text-xs text-green-600">ARCHIVES</span>
        </Link>
      </div>

      {!user && (
        <div className="absolute right-0 top-0 flex">
          <Link
            href="/login"
            className="h-[10px] w-[10px] bg-transparent hover:bg-green-200"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
