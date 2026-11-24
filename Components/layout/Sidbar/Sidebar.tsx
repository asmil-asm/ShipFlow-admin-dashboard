"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxCaretDown } from "react-icons/rx";
import { HiOutlineHome, HiOutlineXMark } from "react-icons/hi2";
import { LuPackageCheck } from "react-icons/lu";
import nav from "@/lib/nav";
import "./Sidebar.css";

interface SidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({ isOpenMobile = false, onCloseMobile }: SidebarProps) {
  const [indexOpen, setIndexOpen] = useState<number | null>(0);
  const pathname = usePathname();

  const formatLabel = (text: string) =>
    text
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <>
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`sidebar ${
          isOpenMobile ? "max-md:translate-x-0" : "max-md:-translate-x-full rtl:max-md:translate-x-full"
        }`}
      >
        <div className="brand">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/15 rounded-lg">
              <LuPackageCheck className="text-2xl text-white" />
            </div>
            <div>
              <h3>Super Admin</h3>
              <span className="text-xs text-white/60 block">Logistics Platform</span>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="md:hidden p-1.5 rounded-lg hover:bg-white/15 text-white"
            aria-label="Close Sidebar"
          >
            <HiOutlineXMark className="text-xl" />
          </button>
        </div>

        <Link
          href="/dashboard"
          onClick={onCloseMobile}
          className={`home ${pathname === "/dashboard" ? "active" : ""}`}
        >
          <HiOutlineHome className="text-xl" />
          <span>Dashboard</span>
        </Link>

        <nav className="nav">
          {nav.map((section, index) => {
            const Icon = section.icon;
            const isOpen = indexOpen === index;

            return (
              <div key={index} className="section-group">
                <div
                  className="info"
                  onClick={() => setIndexOpen(isOpen ? null : index)}
                >
                  <Icon className="icon" />
                  <span>{formatLabel(section.title)}</span>
                  <RxCaretDown
                    className={`caret ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {isOpen && section.items && (
                  <div className="data">
                    <ul>
                      {section.items.map((item, i) => {
                        const SubIcon = item.icon;
                        const fullPath = item.path.startsWith("/")
                          ? item.path
                          : `/${item.path}`;
                        const isActive = pathname === fullPath;

                        return (
                          <li key={i} className={isActive ? "active" : ""}>
                            <Link
                              href={fullPath}
                              onClick={onCloseMobile}
                              className="flex items-center gap-2.5 w-full"
                            >
                              <SubIcon className="icons" />
                              <span>{formatLabel(item.name)}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}