import { useEffect, useRef } from "react";
import { AccordianPanelProps } from "./type";

const AccordianPanel = ({ content, open }: AccordianPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);

  const animateHeight = (from: number, to: number, duration = 300) => {
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = from + (to - from) * progress;

      if (panelRef.current) {
        panelRef.current.style.height = `${current}px`;
      }

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        // when open, cleanup the height so content can adjust freely
        if (panelRef.current && open) {
          panelRef.current.style.height = "auto";
        }
      }
    };

    animRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    // stop ongoing animations
    if (animRef.current) cancelAnimationFrame(animRef.current);

    if (open) {
      // Start from current height (0px or closing height)
      const from = el.getBoundingClientRect().height;

      // Temporarily set height:auto to measure full expanded height
      el.style.height = "auto";
      const to = el.scrollHeight;

      // Reset to previous height before animating
      el.style.height = `${from}px`;

      // Animate to full height
      animateHeight(from, to);
    } else {
      const from = el.getBoundingClientRect().height;
      const to = 0;
      animateHeight(from, to);
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      role="region"
      style={{
        overflow: "hidden",
        height: "0px",
      }}
      className="accordian-content">
      {content}
    </div>
  )
}

export default AccordianPanel;
