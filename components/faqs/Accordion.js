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
    <section className="max-w-[1368px] mx-auto p-4 md:p-10 bg-white rounded-2xl space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer border border-[#DBDFD0] rounded-lg pt-2 px-4 space-y-2 md:pt-6 md:px-10 md:space-y-4 overflow-hidden transition-all duration-300 ease-in-out"
          onClick={() => handleClick(index)}
        >
          <div className="flex justify-between items-center ">
            <h3 className="font-bold text-xl">{item.title}</h3>
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
            <div
              className="text-[#4f4f4f] pb-2 md:pb-6"
              ref={(el) => (contentRefs.current[index] = el)}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Accordion;
