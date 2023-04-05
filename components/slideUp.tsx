import React, { useEffect, useRef, ReactNode } from "react";
interface Props {
  offset?: string;
  children?: ReactNode;
  // any props that come into the component
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Store the current ref in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, offset]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}