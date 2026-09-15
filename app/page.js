import Link from "next/link";
import MOCBrandGuidelines from "@/components/MOCBrandGuidelines";

export default function Home() {
  return (
    <>
      <MOCBrandGuidelines />
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="/downloads"
          className="inline-block bg-black text-white no-underline font-bold text-[11px] tracking-widest uppercase px-4 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors"
        >
          Download Assets →
        </Link>
      </div>
    </>
  );
}
