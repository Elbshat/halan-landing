import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function useScroll() {
  const router = useRouter();
  const pathname = usePathname();

  let targetIdRef = useRef(null);

  const scrollToSection = (id) => {
    if (pathname !== "/") {
      targetIdRef.current = id;
      router.push("/");
    } else {
      scrollTo(id);
    }
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
  };

  useEffect(() => {
    if (targetIdRef.current) {
      scrollTo(targetIdRef.current);
      targetIdRef.current = null;
    }
  }, [pathname]);
  return { scrollToSection };
}
