"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import Link from "next/link";
import { Button, Handle, MenuList, MenuListItem } from "react95";

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex justify-between items-center w-full">
      <MenuList
        inline
        fullWidth
        shadow
        className="flex gap-2 !px-2 !justify-space-between"
      >
        <div className="flex gap-2">
          <Link href="/" className="flex items-center justify-center">
            <Button style={{ fontWeight: "bold" }}>
              <h1 className="font-medium text-gray-600">LikeGecko</h1>
            </Button>
          </Link>
          <Handle size={38} />
        </div>

        <div className="flex items-center gap-4 px-2">
          <MenuListItem>
            <Link href="/about">
              <span className="text-xs">About</span>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href="/archives">
              <span className="text-xs">Archive</span>
            </Link>
          </MenuListItem>
        </div>
      </MenuList>

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
