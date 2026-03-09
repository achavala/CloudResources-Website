import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Cloud Resources — Build the Future of Enterprise AI",
  description:
    "Join Cloud Resources and work on cutting-edge AI platforms, ML systems, and autonomous automation. Open positions in AI/ML, data engineering, and cloud.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
