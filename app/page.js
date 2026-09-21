import Link from "next/link";
import MOCBrandGuidelines from "@/components/MOCBrandGuidelines";

export default function Home() {
  return (
    <>
      <MOCBrandGuidelines />
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-stretch gap-2">
        <Link
          href="/ai-policy"
          className="w-full bg-white text-black no-underline font-bold text-[11px] tracking-widest uppercase px-4 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors text-center"
        >
          AI Content Policy →
        </Link>
        <Link
          href="/downloads"
          className="w-full bg-black text-white no-underline font-bold text-[11px] tracking-widest uppercase px-4 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors text-center"
        >
          Download Assets →
        </Link>
      </div>
    </>
  );
}
