import React from "react";

/* ==================================================================
   MOC PRODUCTS — BRAND IDENTITY & LOGO USAGE GUIDE
   Single-file, production-ready React + Tailwind component.

   DESIGN LANGUAGE
   A merge of references, kept inside a hard binary palette. Chosen
   specifically for their black/white, grid-driven, schematic style:
   - NASA 1975 Graphics Standards Manual — doc-number kickers,
     numbered sections, blueprint precision.
   - Otl Aicher's Lufthansa &amp; Munich 1972 Olympics manuals — rigid
     modular grid, restrained rule-based system thinking.
   - Massimo Vignelli / Bob Noorda's NYC Subway Graphics Standards
     Manual — plain-spoken rule statements, Helvetica-driven hierarchy.
   - Uber's brand-guideline system — generous whitespace, a top-level
     section index, paired "Correct / Incorrect" comparisons.
   - Off-White's industrial/blueprint visual language — diagonal
     caution striping used here (in black/white only) to flag
     restricted-use assets.
   (assets.uber.com/document/468 blocks automated fetch via
   robots.txt, so this draws on Uber's documented guideline
   conventions rather than that exact page.)

   Logo geometry is extracted verbatim from the client-supplied
   vector artwork (MOC_BRAND_SVG.zip — no_background / with_background,
   black / white ink). Path data is reproduced byte-for-byte; only the
   fill (currentColor) is parameterized so ink color is driven by the
   wrapping container instead of duplicating artwork per color.

   POLICY NOTES (per Creative Director direction):
   - The wordmark is NOT an approved standalone asset — never shown
     isolated in this guide.
   - The curve device MAY be used in isolation, but only for icon /
     favicon / background-texture applications, and only with prior
     approval — flagged with a caution-striped panel.
   - The "box" lockup (square canvas, full-bleed wave background +
     wordmark) is a PRIMARY asset, presented at the same tier as the
     linear mark — not a secondary/"extended" variant. Its clearspace
     is measured from the edge of the box itself, not the letterforms.
   - Minimum size values below are recommended starting points, not
     the result of print proofing — confirm before production use.
   - The mark may only sit on a solid black or solid white field —
     never a brand/third-party color, gradient, photo, or texture.
     Shown in Section 05 with a checkerboard stand-in (binary-safe)
     rather than an actual photo, plus text rules for the color case,
     which can't be depicted without breaking the binary system.
   - Section 05's Correct reference now shows both primary assets
     (linear mark + box logo) together, and carries box-logo-specific
     "don'ts" (cropping/aspect ratio, extracting internal elements)
     alongside the general rules that already apply to both.
   - New Section 06 covers AI-generated content, scoped to visual-
     identity rules only (the mark itself, the palette, and type may
     never be AI-generated or altered). It cross-references the
     separate MOC AI Content Policy (MOC-AIP-001), which owns the
     full review process / governance content — kept out of this
     guide so the guide stays a visual-identity reference.
   - Final visual QA pass: IncorrectPanel's strike-through was
     spanning the full panel and cutting through the caption text on
     every "incorrect usage" example (illegible on close inspection,
     e.g. "DO NOT STRETCH OR DISTORT..."). It's now scoped to the
     graphic only, so every caption in Section 05 is fully legible.
     The header index strip's breakpoints were also tuned (2 → 3 → 6
     columns) so "Logo System" and "AI Content" no longer wrap
     awkwardly at tablet widths.
   - Proxima Nova is licensed to MOC creatives only, not cleared for
     public redistribution. Section 03 now splits this out: the
     existing Helvetica Neue / Arial fallback is for a licensed
     machine that lacks the font installed, and a new "External //
     Non-Licensed Use" rule names Montserrat (free, Google Fonts) as
     the sole approved substitute for partners/vendors without a
     license — never a free-form typeface choice.

   SYSTEM CONSTRAINTS (do not violate when editing):
   - Binary color only: #000000 / #FFFFFF. No grays, gradients,
     rounded corners, drop shadows, or opacity modifiers.
   - Font stack: 'Proxima Nova', 'Helvetica Neue', Arial, sans-serif.
   - Hierarchy: font-black (900) headers / font-bold labels /
     font-normal micro-copy. tracking-tighter on major headers.
   - Structure runs on solid black borders — 2px for major section
     divisions, 1px hairlines for internal grid lines.
   ================================================================== */

const FONT_STACK = "'Proxima Nova', 'Helvetica Neue', Arial, sans-serif";

/* ------------------------------------------------------------------
   REAL LOGO GEOMETRY (from client-supplied SVGs)
   ------------------------------------------------------------------ */

const MARK_VIEWBOX = "0 0 292.61 258.74";
const WORDMARK_D = "M232.96,39.29c.22-.68,1.21-3.54,3.79-6.4,4.35-4.82,9.93-5.97,11.85-6.34.97-.19,3.2-.55,6.06-.34,3.66.27,6.51,1.35,8.27,2.17-.06-8.73-.11-17.46-.17-26.19l-.99-.28c-3.32-.93-6.73-1.48-10.13-1.62h-.22c-1.1-.05-2.21-.06-3.51,0h-.15c-11.61.5-21.99,5.37-29.61,12.98-5.57,5.57-9.66,12.6-11.65,20.48-6.85-14.45-21.27-24.62-38.34-25.34h-.22c-1.1-.05-2.21-.06-3.51,0h-.15c-16.88.73-31.17,10.68-38.11,24.89V0h-37.87s-10.26,29.29-10.26,29.29L67.83,0H30.24v81.03h25.99v-35.53l12.44,35.53h18.83l12.72-36.32v36.32h25.99v-8.76c6.81,13.91,20.67,23.86,37.04,24.95h.17c.4.04.81.06,1.21.07h.24c.45.02.91.03,1.4.03.46,0,.91,0,1.37-.02h.24c.41-.02.81-.04,1.21-.07h.17c19.56-1.32,35.56-15.27,40.19-33.53,6.72,14.15,20.72,24.3,37.26,25.41h.17c.4.04.81.06,1.21.07h.24c.45.02.91.03,1.4.03.46,0,.91,0,1.37-.02h.24c.41-.02.81-.04,1.22-.07h.17c3.03-.21,6.08-.74,9.06-1.58l.99-.28v-.27c.06-8.73.11-17.46.17-26.19-.05.02-.11.05-.17.07-1.77.81-4.55,1.83-8.11,2.09-2.86.21-5.09-.15-6.06-.34-.81-.16-2.28-.46-4.03-1.11-2.39-.89-5.31-2.45-7.82-5.23-2.58-2.86-3.57-5.72-3.79-6.4-.16-.5-.4-1.3-.58-2.32h-.05c-.15-.93-.23-1.88-.23-2.84,0-1.18.12-2.23.28-3.11.18-1.02.42-1.82.58-2.32ZM177.58,66.29h-.03s-.56.43-.56.43c-2.47,1.92-5.4,3.15-8.48,3.55h-.07c-.21.04-.42.06-.62.08l-.27.02c-.17.01-.33.02-.5.03-.21,0-.42.01-.64.02h-.1s-.23,0-.23,0c-.21,0-.42,0-.63-.02-.17,0-.33-.02-.55-.04l-.22-.02c-.21-.02-.42-.04-.62-.07h-.07c-3.07-.41-6-1.64-8.48-3.56l-.48-.34c-4.07-3.36-6.4-8.27-6.4-13.54,0-4.19,1.49-8.21,4.21-11.39l.45-.44c3.34-3.65,8.06-5.74,12.96-5.75,4.9,0,9.63,2.1,12.96,5.75l.39.37c2.76,3.19,4.27,7.25,4.27,11.47,0,5.23-2.28,10.09-6.29,13.45Z";
const CURVE_TOP_D = "M46.99,127.19c-15.94-4.27-31.7-9.67-46.99-16.08v27.7c13.21,5.12,26.7,9.54,40.32,13.2,36.32,9.74,71.76,13.64,105.26,13.64,56.2,0,106.9-11,147.03-23.89v-27.05c-60.87,20.67-150.26,38.06-245.62,12.49Z";
const CURVE_BOTTOM_D = "M92.35,179.43c-30.23-3.9-61.21-2.29-92.35,4.74v26.4c30.12-7.5,60.02-9.41,89.06-5.67,16.2,2.09,53.79,12.91,93.58,24.38,39.26,11.31,79.52,22.9,109.97,29.46v-26.32c-29.34-6.65-67.78-17.72-102.84-27.82-42.53-12.25-79.26-22.83-97.41-25.17Z";

const BOX_VIEWBOX = "0 0 292.54 298.86";
const BOX_PATHS = [
  "M145.55,196.59c-33.49,0-68.92-3.9-105.23-13.64-13.61-3.65-27.1-8.07-40.31-13.19v45.36c31.14-7.04,62.11-8.64,92.33-4.74,18.15,2.34,54.87,12.92,97.39,25.16,35.05,10.1,73.49,21.17,102.82,27.82v-90.65c-40.12,12.89-90.81,23.89-146.99,23.89Z",
  "M292.54,145.66V0H0v142.06c15.29,6.41,31.04,11.81,46.98,16.08,95.34,25.56,184.71,8.17,245.56-12.49ZM30.23,30.99h37.58s10.25,29.28,10.25,29.28l10.25-29.29h37.86v33.28c6.94-14.2,21.22-24.16,38.1-24.88h.15c1.3-.06,2.41-.05,3.51,0h.22c17.06.74,31.48,10.9,38.33,25.35,1.99-7.88,6.08-14.91,11.65-20.48,7.61-7.61,17.99-12.48,29.6-12.97h.15c1.3-.06,2.41-.05,3.51,0h.22c3.41.15,6.81.7,10.13,1.63l.99.28c.06,8.73.11,17.46.17,26.19-1.76-.82-4.61-1.9-8.27-2.17-2.86-.21-5.09.15-6.06.34-1.92.37-7.5,1.52-11.85,6.34-2.58,2.86-3.57,5.72-3.79,6.4-.16.5-.4,1.3-.58,2.32-.16.88-.28,1.93-.28,3.11,0,.96.08,1.91.23,2.84h.05c.18,1.02.42,1.82.58,2.32.22.68,1.21,3.54,3.79,6.4,2.51,2.78,5.43,4.34,7.82,5.23,1.75.65,3.22.95,4.03,1.11.97.19,3.2.55,6.06.34,3.55-.26,6.34-1.28,8.11-2.09.05-.02.11-.05.17-.07-.06,8.73-.11,17.46-.17,26.19v.27l-.99.28c-2.98.84-6.02,1.36-9.06,1.57h-.17c-.41.04-.81.06-1.22.07h-.24c-.45.02-.91.03-1.37.03-.49,0-.95,0-1.4-.02h-.24c-.4-.02-.81-.04-1.21-.07h-.17c-16.54-1.11-30.53-11.27-37.25-25.41-4.63,18.25-20.62,32.21-40.18,33.51h-.17c-.4.04-.81.06-1.21.07h-.24c-.45.02-.91.03-1.37.03-.49,0-.95,0-1.4-.02h-.24c-.4-.02-.81-.04-1.21-.07h-.17c-16.36-1.1-30.22-11.05-37.03-24.96v8.76h-25.97v-1.01s-.01-35.3-.01-35.3l-12.71,36.31h-18.83l-12.44-35.52v35.52h-25.98V30.99Z",
  "M89.04,235.84c-29.03-3.74-58.93-1.83-89.04,5.67v57.35h292.54v-9.19c-30.44-6.55-70.69-18.15-109.94-29.45-39.78-11.46-77.36-22.28-93.56-24.37Z",
  "M155,97.35l.48.34c2.47,1.92,5.4,3.15,8.47,3.55h.07c.21.04.42.06.62.08l.22.02c.22.02.38.03.55.04.21,0,.42.01.63.02h.23s.1,0,.1,0c.22,0,.43,0,.64-.02.17,0,.33-.02.5-.03l.27-.02c.21-.02.41-.04.62-.07h.07c3.07-.41,6-1.64,8.47-3.56l.56-.44h.03c4.01-3.35,6.29-8.21,6.29-13.44,0-4.22-1.51-8.27-4.27-11.46l-.39-.37c-3.34-3.65-8.06-5.74-12.96-5.75-4.9,0-9.62,2.1-12.96,5.75l-.45.44c-2.72,3.18-4.21,7.2-4.21,11.39,0,5.27,2.32,10.18,6.4,13.54Z"
];

/* ------------------------------------------------------------------
   LOGO PRIMITIVES
   ------------------------------------------------------------------ */

function Curves({ className = "" }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={className} aria-label="MOC curve device">
      <path d={CURVE_TOP_D} fill="currentColor" />
      <path d={CURVE_BOTTOM_D} fill="currentColor" />
    </svg>
  );
}

function LogoFull({ className = "", color = "text-black" }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={`${color} ${className}`} aria-label="MOC logo">
      <path d={WORDMARK_D} fill="currentColor" />
      <path d={CURVE_TOP_D} fill="currentColor" />
      <path d={CURVE_BOTTOM_D} fill="currentColor" />
    </svg>
  );
}

function BoxLogo({ className = "", color = "text-black" }) {
  return (
    <svg viewBox={BOX_VIEWBOX} className={`${color} ${className}`} aria-label="MOC box logo">
      {BOX_PATHS.map((d, i) => (
        <path key={i} d={d} fill="currentColor" />
      ))}
    </svg>
  );
}

function Check({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4 13 L10 19 L20 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function XGlyph({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4 4 L20 20 M20 4 L4 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
}

// A stand-in for "photography / texture / pattern" built from solid black
// and white squares only — no photo, no gradient, no gray. Used to show why
// the mark can't sit on a busy background without breaking the binary rule
// to depict one.
function CheckerPattern({ className = "" }) {
  const cols = 8;
  const rows = 6;
  const cells = Array.from({ length: cols * rows });
  return (
    <div className={`grid ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {cells.map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const isBlack = (row + col) % 2 === 0;
        return <div key={i} className={isBlack ? "bg-black" : "bg-white"} style={{ aspectRatio: "1" }} />;
      })}
    </div>
  );
}

/* ------------------------------------------------------------------
   SHARED SCHEMATIC PRIMITIVES
   ------------------------------------------------------------------ */

function SectionLabel({ index, title }) {
  return (
    <div className="border-b-2 border-black px-6 md:px-12 py-5 md:py-6 flex items-baseline justify-between">
      <h2 className="font-black text-2xl md:text-3xl tracking-tighter uppercase">
        {index} // {title}
      </h2>
      <span className="font-bold text-[10px] md:text-xs tracking-widest">
        MOC-BSM-001
      </span>
    </div>
  );
}

function SubLabel({ text }) {
  return (
    <div className="border-b border-black px-6 md:px-12 py-3 bg-black">
      <p className="font-bold text-white text-[10px] tracking-widest">{text}</p>
    </div>
  );
}

function IndexItem({ index, label }) {
  return (
    <div className="px-6 md:px-8 py-5 md:py-7">
      <p className="font-bold text-[10px] tracking-widest">{index}</p>
      <p className="font-black text-sm md:text-base tracking-tight uppercase mt-1">
        {label}
      </p>
    </div>
  );
}

// Solid black bars, skewed — a caution/restricted-use marker built
// from discrete shapes (no gradients) to stay inside the binary rule.
function CautionStripe() {
  const bars = Array.from({ length: 28 });
  return (
    <div className="relative w-full h-4 md:h-5 overflow-hidden border-y-2 border-black bg-white">
      <div className="absolute inset-0 flex -ml-6">
        {bars.map((_, i) => (
          <div
            key={i}
            className="w-6 md:w-8 h-[200%] -translate-y-1/4 bg-black -skew-x-[30deg] ml-3 md:ml-4"
          />
        ))}
      </div>
    </div>
  );
}

function LogoPanel({ id, label, note, bg, fg, part = "full" }) {
  return (
    <div
      className={`${bg} ${fg} p-10 md:p-16 flex flex-col items-center justify-center min-h-[280px]`}
    >
      <div className="w-full flex justify-between font-bold text-[10px] md:text-xs tracking-widest mb-10">
        <span>{id}</span>
        <span>{label.toUpperCase()}</span>
      </div>
      {part === "full" && <LogoFull className="w-40 h-auto" color={fg} />}
      {part === "box" && <BoxLogo className="w-full h-auto" color={fg} />}
      <p className="font-normal text-[11px] tracking-wide mt-10 text-center">{note}</p>
    </div>
  );
}

function RestrictedPanel({ id, label, note }) {
  return (
    <div className="bg-white text-black">
      <CautionStripe />
      <div className="p-10 md:p-16 flex flex-col items-center justify-center min-h-[280px]">
        <div className="w-full flex justify-between font-bold text-[10px] md:text-xs tracking-widest mb-10">
          <span>{id}</span>
          <span>{label.toUpperCase()}</span>
        </div>
        <Curves className="w-40 h-auto" />
        <span className="font-black text-[10px] tracking-widest border-2 border-black px-3 py-1 mt-10">
          REQUIRES APPROVAL
        </span>
        <p className="font-normal text-[11px] tracking-wide mt-4 text-center max-w-xs">
          {note}
        </p>
      </div>
      <CautionStripe />
    </div>
  );
}

function TypeRow({ weightClass, label, code }) {
  return (
    <div className="border-b border-black last:border-b-0 p-8 md:p-14">
      <div className="flex justify-between items-baseline mb-6">
        <p className={`${weightClass} text-2xl md:text-3xl tracking-tighter uppercase`}>
          {label}
        </p>
        <p className="font-bold text-[10px] md:text-xs tracking-widest">
          PROXIMA NOVA // {code}
        </p>
      </div>
      <p className={`${weightClass} text-lg md:text-2xl tracking-tight break-all`}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </p>
      <p className={`${weightClass} text-lg md:text-2xl tracking-tight break-all mt-2`}>
        abcdefghijklmnopqrstuvwxyz
      </p>
      <p className={`${weightClass} text-lg md:text-2xl tracking-tight mt-2`}>
        0123456789
      </p>
    </div>
  );
}

function ColorSwatch({ label, hex, note, bg, fg }) {
  return (
    <div className={`${bg} ${fg} p-10 md:p-16 flex flex-col justify-between min-h-[240px]`}>
      <p className="font-bold text-[10px] md:text-xs tracking-widest">{label}</p>
      <div>
        <p className="font-black text-4xl md:text-5xl tracking-tighter">{hex}</p>
        <p className="font-normal text-[11px] tracking-wide mt-2">{note}</p>
      </div>
    </div>
  );
}

function CorrectPanel({ children }) {
  return (
    <div className="border-b-2 border-black bg-white p-10 md:p-20 flex flex-col items-center">
      <div className="flex items-center gap-3 mb-10">
        <Check className="w-4 h-4 text-black" />
        <p className="font-bold text-[10px] tracking-widest">
          CORRECT // PROPER LOCKUP, CLEARSPACE RESPECTED
        </p>
      </div>
      {children}
    </div>
  );
}

function IncorrectPanel({ label, children }) {
  return (
    <div className="relative bg-white p-10 md:p-12 min-h-[260px] flex flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <XGlyph className="w-4 h-4 text-black" />
        <p className="font-bold text-[10px] tracking-widest">INCORRECT</p>
      </div>
      {/* The strike-through is scoped to this wrapper only (sized to the
          graphic itself), never to the caption below it, so the violation
          mark never cuts through and degrades the instructional text. */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center">{children}</div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[150%] h-[3px] bg-black -translate-x-1/2 -translate-y-1/2 rotate-45 origin-center" />
          <div className="absolute top-1/2 left-1/2 w-[150%] h-[3px] bg-black -translate-x-1/2 -translate-y-1/2 -rotate-45 origin-center" />
        </div>
      </div>
      <p className="font-normal text-[11px] tracking-wide mt-8 text-center max-w-[220px]">
        {label}
      </p>
    </div>
  );
}

function RuleRow({ num, rule }) {
  return (
    <div className="border-b border-black last:border-b-0 px-6 md:px-12 py-6 flex gap-6 md:gap-10 items-baseline">
      <span className="font-black text-sm md:text-base tracking-widest shrink-0">{num}</span>
      <p className="font-bold text-sm md:text-base tracking-tight uppercase">{rule}</p>
    </div>
  );
}

function MinSizeCard({ label, size, note }) {
  return (
    <div className="p-10 md:p-16">
      <p className="font-bold text-[10px] tracking-widest mb-4">{label}</p>
      <p className="font-black text-3xl md:text-4xl tracking-tighter">{size}</p>
      <p className="font-normal text-[11px] tracking-wide mt-4 max-w-xs">{note}</p>
    </div>
  );
}

/* ==================================================================
   ROOT COMPONENT
   ================================================================== */

export default function MOCBrandGuidelines() {
  return (
    <div
      className="min-h-screen w-full bg-white text-black font-sans border-2 border-black"
      style={{ fontFamily: FONT_STACK }}
    >
      {/* ---------------------------------------------------------
          DOCUMENT HEADER
      --------------------------------------------------------- */}
      <header className="border-b-2 border-black">
        <div className="px-6 md:px-12 py-12 md:py-20">
          <p className="font-bold text-[10px] md:text-xs tracking-widest mb-8">
            DOC NO. MOC-BSM-001 // REV I // ISSUED 2026
          </p>
          <h1 className="font-black text-6xl md:text-9xl tracking-tighter leading-none">
            MOC Products
          </h1>
          {/* Subtitle as a solid stamp — left edge flush with the "M" above,
              since both sit at the same container inset with no extra offset. */}
          <div className="inline-block bg-black px-4 py-2 md:px-6 md:py-3 mt-2 md:mt-3">
            <p className="font-bold text-white text-base md:text-2xl tracking-tight uppercase">
              Brand Identity &amp; Logo Usage Guide
            </p>
          </div>
        </div>
        {/* 3 columns from md up avoids label wrapping ("Logo System",
            "AI Content") at tablet widths; the single-row 6-across layout
            only kicks in at lg, where there's room for it. */}
        <div className="border-t-2 border-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x-0 md:divide-x divide-y lg:divide-y-0 divide-black">
          <IndexItem index="01" label="Logo System" />
          <IndexItem index="02" label="Clearspace" />
          <IndexItem index="03" label="Typography" />
          <IndexItem index="04" label="Color" />
          <IndexItem index="05" label="Usage" />
          <IndexItem index="06" label="AI Content" />
        </div>
      </header>

      {/* ---------------------------------------------------------
          01 — LOGO SYSTEM
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="01" title="Logo System" />

        <SubLabel text="PRIMARY MARKS // LINEAR &amp; BOX LOCKUP" />
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black border-b border-black">
          <LogoPanel id="1A" label="Primary" note="LINEAR MARK // BLACK INK // WHITE FIELD" bg="bg-white" fg="text-black" />
          <LogoPanel id="1B" label="Knockout" note="LINEAR MARK // WHITE INK // BLACK FIELD" bg="bg-black" fg="text-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black border-b-2 border-black">
          <LogoPanel id="1C" label="Box Logo // Primary" note="BOX LOCKUP // BLACK INK // WHITE FIELD" bg="bg-white" fg="text-black" part="box" />
          <LogoPanel id="1D" label="Box Logo // Knockout" note="BOX LOCKUP // WHITE INK // BLACK FIELD" bg="bg-black" fg="text-white" part="box" />
        </div>

        <SubLabel text="1E // RESTRICTED, REQUIRES APPROVAL" />
        <RestrictedPanel
          id="1E"
          label="Curve Device // Isolated"
          note="Approved only for icon, favicon, or background // textural use // never as a standalone brand mark, and never without approval. The wordmark is not an approved standalone asset and is not shown isolated in this guide."
        />
      </section>

      {/* ---------------------------------------------------------
          02 — CLEARSPACE &amp; MINIMUM SIZE
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="02" title="Clearspace &amp; Minimum Size" />

        <SubLabel text="STANDARD MARK // 2X THE STROKE WIDTH OF THE LETTERFORMS" />
        <div className="p-10 md:p-20 flex flex-col items-center border-b border-black">
          <div className="relative border border-dashed border-black px-16 py-14 md:px-28 md:py-24">
            <span className="absolute top-1 left-1/2 -translate-x-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <span className="absolute left-1 top-1/2 -translate-y-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <span className="absolute right-1 top-1/2 -translate-y-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <LogoFull className="w-44 h-auto" color="text-black" />
          </div>
          <p className="font-normal text-sm tracking-wide text-center max-w-xl mt-12">
            Clearspace must be maintained at 2X the stroke width of the primary letterforms.
            No graphic element, text, or edge of frame may intrude within this boundary.
          </p>
        </div>

        <SubLabel text="BOX LOGO // CLEARSPACE BEGINS AT THE EDGE OF THE BOX" />
        <div className="p-10 md:p-20 flex flex-col items-center border-b-2 border-black">
          <div className="relative border border-dashed border-black p-10 md:p-16">
            <span className="absolute top-1 left-1/2 -translate-x-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <span className="absolute left-1 top-1/2 -translate-y-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <span className="absolute right-1 top-1/2 -translate-y-1/2 font-bold text-[10px] tracking-widest">2X</span>
            <div className="border-2 border-black p-6 md:p-8 bg-white">
              <BoxLogo className="w-40 h-auto" color="text-black" />
            </div>
          </div>
          <p className="font-normal text-sm tracking-wide text-center max-w-xl mt-12">
            The box is the boundary of the mark, not a background to crop or trim. Clearspace
            begins at the edge of the box and must extend a minimum of 2X the mark's stroke
            width outward on all sides // the box artwork itself is never extended, cloned, or
            cropped to manufacture additional space.
          </p>
        </div>

        <SubLabel text="MINIMUM SIZE // RECOMMENDED STARTING POINT, CONFIRM AGAINST PRINT PROOFING" />
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black">
          <MinSizeCard
            label="LINEAR MARK"
            size="24PX // 0.5IN"
            note="Minimum width for digital and print reproduction. Below this size the curve device loses definition."
          />
          <MinSizeCard
            label="BOX LOGO"
            size="32PX // 0.75IN"
            note="Minimum width for digital and print reproduction. The box lockup carries more detail than the linear mark and needs more room to stay legible."
          />
        </div>
      </section>

      {/* ---------------------------------------------------------
          03 — TYPOGRAPHY SYSTEM
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="03" title="Typography System" />
        <div>
          <TypeRow weightClass="font-black" label="Black // 900" code="WEIGHT 900" />
          <TypeRow weightClass="font-bold" label="Bold // 700" code="WEIGHT 700" />
          <TypeRow weightClass="font-normal" label="Regular // 400" code="WEIGHT 400" />
        </div>
        <SubLabel text="RESTRICTIONS" />
        <div className="px-6 md:px-12 py-8 md:py-10 border-b border-black">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            Use Black, Bold, and Regular only. Do not substitute condensed, expanded, italic,
            outline, or otherwise stylized versions of Proxima Nova in brand-facing typography.
            Proxima Nova is licensed for use by MOC creatives only // on a machine without that
            license, fall back to Helvetica Neue, then Arial, never a substitute typeface from a
            different family.
          </p>
        </div>

        <SubLabel text="EXTERNAL // NON-LICENSED USE" />
        <div className="px-6 md:px-12 py-8 md:py-10">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            For partners, vendors, or any external party without a Proxima Nova license, the
            approved substitute is Montserrat (Google Fonts, free and open license, Black through
            Regular weights available). Use Montserrat only where Proxima Nova genuinely cannot be
            licensed or embedded + it is never a stylistic option for MOC's own internal or
            creative-team work, and no typeface outside this system (Proxima Nova, its system
            fallbacks, or Montserrat for external use) is approved without design team sign-off.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------
          04 — COLOR SYSTEM
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="04" title="Color System" />
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black">
          <ColorSwatch
            label="PRIMARY // BLACK"
            hex="#000000"
            note="100% K // HEX #000000 // CMYK 0, 0, 0, 100 // RGB 0, 0, 0"
            bg="bg-black"
            fg="text-white"
          />
          <ColorSwatch
            label="PRIMARY // WHITE"
            hex="#FFFFFF"
            note="0% K // HEX #FFFFFF // CMYK 0, 0, 0, 0 // RGB 255, 255, 255"
            bg="bg-white"
            fg="text-black"
          />
        </div>
      </section>

      {/* ---------------------------------------------------------
          05 — CORRECT & INCORRECT USAGE
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="05" title="Usage" />
        <CorrectPanel>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex flex-col items-center gap-4">
              <LogoFull className="w-40 h-auto" color="text-black" />
              <p className="font-bold text-[10px] tracking-widest">LINEAR MARK</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <BoxLogo className="w-32 h-auto" color="text-black" />
              <p className="font-bold text-[10px] tracking-widest">BOX LOGO</p>
            </div>
          </div>
        </CorrectPanel>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black border-b border-black">
          <IncorrectPanel label="DO NOT STRETCH OR DISTORT PROPORTIONS">
            <LogoFull className="w-32 h-auto transform scale-x-150 origin-center" color="text-black" />
          </IncorrectPanel>
          <IncorrectPanel label="DO NOT ROTATE OR TILT THE MARK">
            <LogoFull className="w-32 h-auto transform rotate-12 origin-center" color="text-black" />
          </IncorrectPanel>
          <IncorrectPanel label="DO NOT PLACE ON INSUFFICIENT CONTRAST">
            <div className="bg-black p-4">
              <LogoFull className="w-32 h-auto" color="text-black" />
            </div>
          </IncorrectPanel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black border-b-2 border-black">
          <IncorrectPanel label="DO NOT ADD COPY TO THE LOGO">
            <div className="flex flex-col items-center">
              <LogoFull className="w-32 h-auto" color="text-black" />
              <p className="font-black text-[10px] tracking-widest mt-1">EST. 2026</p>
            </div>
          </IncorrectPanel>
          <IncorrectPanel label="DO NOT PLACE ELEMENTS IN THE CLEARSPACE">
            <div className="relative border border-dashed border-black px-10 py-8">
              <LogoFull className="w-28 h-auto" color="text-black" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-black" />
            </div>
          </IncorrectPanel>
          <IncorrectPanel label="DO NOT PLACE ON PHOTOGRAPHY, TEXTURE, OR PATTERNED BACKGROUNDS">
            <div className="relative w-32 h-32">
              <CheckerPattern className="absolute inset-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoFull className="w-20 h-auto" color="text-black" />
              </div>
            </div>
          </IncorrectPanel>
        </div>

        <SubLabel text="BOX LOGO // ADDITIONAL RESTRICTIONS" />
        <div className="border-b-2 border-black">
          <IncorrectPanel label="DO NOT CROP, TRIM, OR ALTER THE BOX'S ASPECT RATIO">
            <div className="w-28 h-20 overflow-hidden flex items-center justify-center">
              <BoxLogo className="w-40 h-auto shrink-0" color="text-black" />
            </div>
          </IncorrectPanel>
        </div>

        <SubLabel text="PROHIBITED MODIFICATIONS" />
        <div>
          <RuleRow num="+" rule="Do not recolor the mark or apply multiple colors. Reproduce in solid black or solid white only." />
          <RuleRow num="+" rule="Do not place the mark on any background color other than solid black or solid white + no brand colors, tints, or third-party colors as a backing field." />
          <RuleRow num="+" rule="Do not place the mark over photography, imagery, or textured // patterned surfaces + the field behind the mark must stay solid." />
          <RuleRow num="+" rule="Do not apply stylized filters + no drop shadows, glows, strokes, outlines, or other effects." />
          <RuleRow num="+" rule="Do not add copy to the logo itself + no taglines, descriptors, or characters appended to the mark." />
          <RuleRow num="+" rule="Do not place text or visual elements within the clearspace boundary, for either the mark or the box logo." />
          <RuleRow num="+" rule="Do not crop, trim, extend, or alter the aspect ratio of the box logo + it is always reproduced as a complete, unaltered square." />
          <RuleRow num="+" rule="Do not extract or isolate elements from within the box logo (e.g. the wave field) for use as a separate icon or background asset + see the curve-device restriction in Section 01." />
        </div>
      </section>

      {/* ---------------------------------------------------------
          06 — AI-GENERATED CONTENT
      --------------------------------------------------------- */}
      <section>
        <SectionLabel index="06" title="AI-Generated Content" />
        <div className="px-6 md:px-12 py-8 md:py-10 border-b-2 border-black">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            AI tools may assist internal workflows, but they do not touch the identity system
            itself. The rules below are the visual-identity requirements only + for the full
            review process and governance, see the companion MOC AI Content Policy (MOC-AIP-001).
          </p>
        </div>
        <SubLabel text="VISUAL-IDENTITY REQUIREMENTS" />
        <div>
          <RuleRow num="+" rule="Never let AI generate, regenerate, redraw, or otherwise reimagine the logo. Use only the official files defined in Section 01." />
          <RuleRow num="+" rule="AI-generated imagery, backgrounds, or textures used alongside the mark must stay within the binary palette defined in Section 04 + no exceptions for AI output." />
          <RuleRow num="+" rule="Never bake AI-generated or hallucinated text into a final asset. Set all type manually, per Section 03." />
          <RuleRow num="+" rule="AI-assisted layouts and applications follow the same clearspace, minimum-size, and incorrect-usage rules as any other application + see Sections 02 and 05." />
        </div>
      </section>

      {/* ---------------------------------------------------------
          FOOTER
      --------------------------------------------------------- */}
      <footer className="border-t-2 border-black px-6 md:px-12 py-5 flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
        <p className="font-normal text-[10px] tracking-widest">
          MOC PRODUCTS // BRAND STANDARDS MANUAL // FOR INTERNAL &amp; EXTERNAL DISTRIBUTION
        </p>
        <p className="font-bold text-[10px] tracking-widest">PAGE 01 // 01</p>
      </footer>
    </div>
  );
}
