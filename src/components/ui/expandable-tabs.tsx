import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TabItem {
  title: string;
  icon: LucideIcon;
}

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-[#6E8F6A]",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef as React.RefObject<HTMLElement>, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "inline-flex items-center gap-1 rounded-full p-1",
        className
      )}
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <motion.button
            key={tab.title}
            onClick={() => handleSelect(index)}
            className={cn(
              "relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors",
              isSelected
                ? activeColor
                : "text-[#777] dark:text-[#999] hover:text-[#1C1C1C] dark:hover:text-[#E8E4DA]"
            )}
            layout
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
            }}
          >
            {isSelected && (
              <motion.div
                className="absolute inset-0 rounded-full bg-[#6E8F6A]/10 dark:bg-[#6E8F6A]/15"
                layoutId="expandable-tab-bg"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
              />
            )}
            <Icon className="relative z-10 h-4 w-4" />
            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.span
                  className="relative z-10 overflow-hidden whitespace-nowrap"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
