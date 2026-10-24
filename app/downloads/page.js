import Link from "next/link";
import Arrow from "@/components/Arrow";

const FONT_STACK = "'Proxima Nova', 'Helvetica Neue', Arial, sans-serif";

const LOGO_ASSETS = [
  {
    id: "1A",
    label: "Linear Mark // Primary",
    note: "Black ink, transparent field. For placement on white or light surfaces.",
    base: "moc-linear-black",
  },
  {
    id: "1B",
    label: "Linear Mark // Knockout",
    note: "White ink. SVG/PNG are transparent for placement on any dark surface; the PDF is delivered on a black field so it isn't invisible on open.",
    base: "moc-linear-white",
  },
  {
    id: "1C",
    label: "Box Logo // Primary",
    note: "Black field, white cutout wordmark // the complete square lockup, per Section 01.",
    base: "moc-box-primary",
  },
  {
    id: "1D",
    label: "Box Logo // Knockout",
    note: "White field, black cutout wordmark // the complete square lockup, per Section 01.",
    base: "moc-box-knockout",
  },
];

const FORMATS = [
  { ext: "svg", label: "SVG", note: "Vector" },
  { ext: "png", label: "PNG", note: "Transparent // 2048px" },
  { ext: "pdf", label: "PDF", note: "Vector" },
];

function DownloadCell({ base, ext, label, note }) {
  // The whole cell is the download: format and arrow centered, the note under it.
  return (
    <a
      href={`/assets/logo/${base}.${ext}`}
      download
      className="h-full px-2 py-5 flex flex-col items-center justify-center gap-2 text-black no-underline hover:bg-black hover:text-white transition-colors"
    >
      <span className="flex items-center gap-[0.6em] font-bold text-xs tracking-widest uppercase">
        {label}
        <Arrow dir="down" />
      </span>
      <span className="font-normal text-[9px] tracking-widest uppercase text-center whitespace-nowrap">{note}</span>
    </a>
  );
}

export default function Downloads() {
  return (
    <div
      className="min-h-screen w-full bg-white text-black border-2 border-black"
      style={{ fontFamily: FONT_STACK }}
    >
      <header className="border-b-2 border-black px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-bold text-[10px] md:text-xs tracking-widest mb-4">
            MOC-BSM-001 // ASSET DOWNLOADS
          </p>
          <h1 className="font-black text-4xl md:text-6xl tracking-tighter leading-none uppercase">
            Downloads
          </h1>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-[0.6em] self-start md:self-auto font-bold text-[11px] tracking-widest uppercase border-2 border-black px-4 py-3 text-black no-underline hover:bg-black hover:text-white transition-colors shrink-0"
        >
          <Arrow dir="left" /> Back to Guide
        </Link>
      </header>

      {/* ---------------------------------------------------------
          LOGO ASSETS
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <div className="border-b-2 border-black px-6 md:px-12 py-5 md:py-6">
          <h2 className="font-black text-2xl md:text-3xl tracking-tighter uppercase">
            01 // Logo Assets
          </h2>
        </div>
        <div className="px-6 md:px-12 py-6 md:py-8 border-b border-black">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            The four approved lockups from Section 01 of the Brand Guidelines. The restricted
            curve device (1E) requires prior approval and is not available here // request it
            through the design team.
          </p>
        </div>

        <p className="md:hidden flex items-center gap-[0.6em] px-6 py-2.5 border-b border-black bg-black text-white font-bold text-[11px] tracking-widest uppercase">
          Scroll right for PNG // PDF <Arrow dir="right" />
        </p>
        <div className="relative">
          <div className="overflow-x-auto">
            <div className="min-w-[680px]">
              {LOGO_ASSETS.map((asset) => (
                <div key={asset.id} className="border-b border-black last:border-b-0 grid grid-cols-[1fr_repeat(3,152px)]">
                  <div className="px-6 md:px-12 py-6 border-r border-black flex flex-col justify-center">
                    <p className="font-bold text-[10px] tracking-widest">{asset.id}</p>
                    <p className="font-black text-base md:text-lg tracking-tight uppercase mt-1">
                      {asset.label}
                    </p>
                    <p className="font-normal text-[11px] tracking-wide mt-2 max-w-md">
                      {asset.note}
                    </p>
                  </div>
                  {FORMATS.map((fmt) => (
                    <div key={fmt.ext} className="border-r border-black last:border-r-0">
                      <DownloadCell base={asset.base} ext={fmt.ext} label={fmt.label} note={fmt.note} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          TYPOGRAPHY
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <div className="border-b-2 border-black px-6 md:px-12 py-5 md:py-6">
          <h2 className="font-black text-2xl md:text-3xl tracking-tighter uppercase">
            02 // Typography
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black">
          <div className="p-8 md:p-12">
            <p className="font-bold text-[10px] tracking-widest mb-3">PRIMARY // INTERNAL USE ONLY</p>
            <p className="font-black text-2xl tracking-tighter mb-3">Proxima Nova</p>
            <p className="font-normal text-sm tracking-wide max-w-sm">
              Licensed to MOC creatives only. Not distributed here // use the copy already
              installed on your licensed machine. See Section 03 of the Brand Guidelines for
              weight and usage rules.
            </p>
          </div>
          <div className="p-8 md:p-12">
            <p className="font-bold text-[10px] tracking-widest mb-3">EXTERNAL // NON-LICENSED USE</p>
            <p className="font-black text-2xl tracking-tighter mb-3">Montserrat</p>
            <p className="font-normal text-sm tracking-wide max-w-sm mb-4">
              Free, open license. The approved substitute for partners and vendors without a
              Proxima Nova license. Linked at the source rather than hosted here.
            </p>
            <a
              href="https://fonts.google.com/specimen/Montserrat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[0.6em] font-bold text-[11px] tracking-widest uppercase border-2 border-black px-4 py-3 text-black no-underline hover:bg-black hover:text-white transition-colors"
            >
              Get Montserrat on Google Fonts <Arrow dir="right" />
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-5 flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
        <p className="font-normal text-[10px] tracking-widest">
          MOC PRODUCTS // BRAND STANDARDS MANUAL // FOR INTERNAL &amp; EXTERNAL DISTRIBUTION
        </p>
        <p className="font-bold text-[10px] tracking-widest">MOC-BSM-001</p>
      </footer>
    </div>
  );
}
