"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { Button } from "react95/dist/Button/Button";
import { Handle } from "react95/dist/Handle/Handle";
import { MenuList } from "react95/dist/MenuList/MenuList";
import { MenuListItem } from "react95/dist/MenuList/MenuListItem";
import { Separator } from "react95/dist/Separator/Separator";

export const Header = () => {
  const { user } = useAuth();
  // const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [localeOpen, setLocaleOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full">
      <MenuList
        inline
        fullWidth
        shadow
        className="!flex gap-2 !px-2 !justify-between"
      >
        <div className="!flex gap-2 items-center">
          <div className="!flex gap-2">
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
        </div>

        <div
          style={{
            position: "relative",
            display: "inline-block",
            alignSelf: "left",
          }}
        >
          <Button
            variant="thin"
            onClick={() => setLocaleOpen(!localeOpen)}
            size="sm"
            active={localeOpen}
          >
            {locale}
          </Button>
          {localeOpen && (
            <MenuList
              style={{
                position: "absolute",
                right: "0",
                top: "100%",
                zIndex: "9999",
              }}
              onClick={() => setLocaleOpen(false)}
            >
              <Link locale="ko" href={pathname}>
                <MenuListItem size="sm">ko</MenuListItem>
              </Link>
              <Separator />
              <Link locale="jp" href={pathname}>
                <MenuListItem size="sm">jp</MenuListItem>
              </Link>
              <Separator />
              <Link locale="en" href={pathname}>
                <MenuListItem size="sm">en</MenuListItem>
              </Link>
            </MenuList>
          )}
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
