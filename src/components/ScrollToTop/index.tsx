"use client";

import { useEffect, useState } from "react";
import ArrowUp from "../svgs/arrow-up";
import WhatsAppIcon from "../svgs/whatsapp";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      {/* ✅ Scroll To Top Button */}
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "25px", // 👈 moved left
            zIndex: 9999,
            background: "#F59E0B",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          <ArrowUp width={20} height={20} />
        </button>
      )}
    </>
  );
}