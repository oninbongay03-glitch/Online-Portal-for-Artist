"use client";

import { createPortal } from "react-dom"; //  used to render a component's children into a different location in the DOM
import { useEffect, useState } from "react";

export default function ModalPortal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}
