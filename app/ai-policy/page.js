import Link from "next/link";
import MOCAIContentPolicy from "@/components/MOCAIContentPolicy";
import Arrow from "@/components/Arrow";

export default function AIPolicy() {
  return (
    <>
      <MOCAIContentPolicy />
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-[0.6em] bg-black text-white no-underline font-bold text-[11px] tracking-widest uppercase px-4 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors"
        >
          <Arrow dir="left" /> Back to Guide
        </Link>
      </div>
    </>
  );
}
