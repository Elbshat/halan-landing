"use client";
import { useEffect, useRef, useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]); // Ref to store content heights

  useEffect(() => {
    // Measure content heights after render
    contentRefs.current = contentRefs.current.slice(0, items.length); // Ensure correct length
  }, [items]); // Re-measure if the items change

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-[1368px] space-y-4 rounded-2xl bg-white p-4 md:p-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer space-y-2 overflow-hidden rounded-lg border border-[#DBDFD0] px-4 pt-2 transition-all duration-300 ease-in-out md:space-y-4 md:px-10 md:pt-6"
          onClick={() => handleClick(index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <span className="text-2xl">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            style={{
              // Inline style for dynamic height
              height:
                activeIndex === index
                  ? contentRefs.current[index]?.offsetHeight || "auto"
                  : 0, // Use measured height or auto
              transition: "height 0.3s ease-in-out", // Transition only height
              overflow: "hidden", // Important for smooth transitions
            }}
          >
            <p
              className="pb-2 text-[#4f4f4f] md:pb-6"
              ref={(el) => (contentRefs.current[index] = el)}
            >
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Accordion;
