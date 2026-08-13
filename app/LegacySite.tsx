"use client";

import { useEffect } from "react";

export default function LegacySite() {
  useEffect(() => {
    void import("../src/main.js");
  }, []);

  return <div id="app" />;
}
