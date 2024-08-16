"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-8 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex flex-row lg:gap-x-10 gap-x-2 font-thin text-xs sm:text-lg">
          <div className="lg:pr-10 pr-4 border-r border-slate-600">
            <Link href={"/"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              ></MenuItem>
            </Link>
          </div>
          <div className="lg:pr-10 pr-4 border-r border-slate-600">
            <MenuItem setActive={setActive} active={active} item="Our Courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href={"/courses"}>All Courses</HoveredLink>
                <HoveredLink href={"/courses"}>Basic Music Theory</HoveredLink>
                <HoveredLink href={"/courses"}>
                  Advanced Composition
                </HoveredLink>
                <HoveredLink href={"/courses"}>Song Writting</HoveredLink>
                <HoveredLink href={"/courses"}>Music Production</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
