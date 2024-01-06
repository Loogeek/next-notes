"use client";

import {
  useState,
  useRef,
  useEffect,
  useTransition,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import cx from "classnames";

interface SidebarNoteItemContentProps {
  children: React.ReactNode;
  id: string;
  title: string;
  expandedChildren: React.ReactNode;
}

export default function SidebarNoteItemContent({
  children,
  id,
  title,
  expandedChildren,
}: SidebarNoteItemContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const prevTitleRef = useRef(title);
  const [isPending] = useTransition();
  const isActive = id === usePathname()?.split("/")[1] || null;
  const router = useRouter();

  useEffect(() => {
    if (title !== prevTitleRef.current) {
      prevTitleRef.current = title;
      itemRef.current?.classList.add("flash");
    }
  }, [title]);

  return (
    <div
      ref={itemRef}
      className={cx("sidebar-note-list-item", { "note-expanded": isExpanded })}
    >
      {children}
      <button
        className="sidebar-note-open"
        style={{
          backgroundColor: isPending
            ? "var(--gray-80)"
            : isActive
            ? "var(--tertiary-blue)"
            : "",
          border: isActive
            ? "1px solid var(--primary-border)"
            : "1px solid transparent",
        }}
        onClick={() => {
          router.push(`/note/${id}`);
        }}
      >
        Open note for preview
      </button>
      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <img
            src="/chevron-down.svg"
            width="10px"
            height="10px"
            alt="Collapse"
          />
        ) : (
          <img src="/chevron-up.svg" width="10px" height="10px" alt="Expand" />
        )}
      </button>
      {isExpanded && expandedChildren}
    </div>
  );
}
