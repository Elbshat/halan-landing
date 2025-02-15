import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useScroll() {
  const [targetId, setTargetId] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    if (pathname !== "/") {
      setTargetId(id);
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
    if (targetId) {
      scrollTo(targetId);
      setTargetId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return { scrollToSection };
}
