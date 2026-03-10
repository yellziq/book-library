import type { ReactNode } from "react";

interface CommonWrapperProps {
  title: string;
  children: ReactNode;
}

export default function CommonWrapper({
  title,
  children,
}: CommonWrapperProps) {
  return (
    <section className="page-card">
      <h1 className="page-title">{title}</h1>
      {children}
    </section>
  );
}