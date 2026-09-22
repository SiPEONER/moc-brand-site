import React from "react";

/* ==================================================================
   MOC PRODUCTS — AI CONTENT POLICY
   Single-file, production-ready React + Tailwind component.

   Sibling document to MOCBrandGuidelines.jsx (MOC-BSM-001). Same
   binary black/white, grid-driven, schematic visual system, so the
   two read as one family of documents — but this one is a process /
   governance policy, not a visual specification, and is versioned,
   updated, and distributed separately from the brand guide for that
   reason (see the two docs' own cross-references to each other).

   This covers the ORGANIZATIONAL side of AI-assisted content: what
   needs no sign-off, what's prohibited on client-facing work, the
   fast-track review process, and the pre-publish checklist. The
   VISUAL-IDENTITY-specific AI rules (never let AI regenerate the
   logo, never bake AI text into a final asset, stay inside the
   binary palette) live in the brand guide itself, Section 06 —
   this document points back to them rather than repeating them.

   SYSTEM CONSTRAINTS (shared with MOCBrandGuidelines.jsx — do not
   violate when editing):
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
   ICON PRIMITIVES (shared visual language with the brand guide —
   Check = approved / no bottleneck, X = prohibited)
   ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------
   SHARED SCHEMATIC PRIMITIVES (same pattern as the brand guide)
   ------------------------------------------------------------------ */

function SectionLabel({ index, title }) {
  return (
    <div className="border-b-2 border-black px-6 md:px-12 py-5 md:py-6 flex items-baseline justify-between">
      <h2 className="font-black text-2xl md:text-3xl tracking-tighter uppercase">
        {index} // {title}
      </h2>
      <span className="font-bold text-[10px] md:text-xs tracking-widest">
        MOC-AIP-001
      </span>
    </div>
  );
}

function SubLabel({ text }) {
  return (
    <div className="border-b border-white px-6 md:px-12 py-3 bg-black">
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

/* ------------------------------------------------------------------
   POLICY-SPECIFIC PRIMITIVES
   ------------------------------------------------------------------ */

function WorkflowCard({ id, title, note }) {
  return (
    <div className="p-8 md:p-12">
      <div className="flex items-center gap-3 mb-4">
        <Check className="w-4 h-4 text-black shrink-0" />
        <p className="font-bold text-[10px] tracking-widest">{id} // NO APPROVAL NEEDED</p>
      </div>
      <p className="font-black text-xl md:text-2xl tracking-tighter uppercase">{title}</p>
      <p className="font-normal text-sm tracking-wide mt-3 max-w-sm">{note}</p>
    </div>
  );
}

function OffenseRow({ offense, harm, alternative }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black last:border-b-0">
      <div className="md:col-span-3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-black flex items-start gap-3">
        <XGlyph className="w-4 h-4 text-black shrink-0 mt-1" />
        <p className="font-black text-base md:text-lg tracking-tight uppercase">{offense}</p>
      </div>
      <div className="md:col-span-5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-black">
        <p className="font-normal text-sm tracking-wide">{harm}</p>
      </div>
      <div className="md:col-span-4 p-6 md:p-8">
        <p className="font-bold text-sm tracking-wide">{alternative}</p>
      </div>
    </div>
  );
}

function ProcessStep({ num, title, note }) {
  return (
    <div className="p-8 md:p-12">
      <p className="font-black text-4xl md:text-5xl tracking-tighter mb-6">{num}</p>
      <p className="font-black text-lg md:text-xl tracking-tight uppercase">{title}</p>
      <p className="font-normal text-sm tracking-wide mt-3">{note}</p>
    </div>
  );
}

function ChecklistItem({ num, title, note }) {
  return (
    <div className="flex gap-6 md:gap-10 px-6 md:px-12 py-8 border-b border-black last:border-b-0">
      <div className="shrink-0 w-10 h-10 border-2 border-black flex items-center justify-center">
        <span className="font-black text-lg">{num}</span>
      </div>
      <div>
        <p className="font-black text-base md:text-lg tracking-tight uppercase">{title}</p>
        <p className="font-normal text-sm tracking-wide mt-2 max-w-2xl">{note}</p>
      </div>
    </div>
  );
}

/* ==================================================================
   ROOT COMPONENT
   ================================================================== */

export default function MOCAIContentPolicy() {
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
            DOC NO. MOC-AIP-001 // REV 2 // ISSUED 2026
          </p>
          <h1 className="font-black text-6xl md:text-9xl tracking-tighter leading-none">
            MOC Products
          </h1>
          <div className="inline-block bg-black px-4 py-2 md:px-6 md:py-3 mt-2 md:mt-3">
            <p className="font-bold text-white text-base md:text-2xl tracking-tight uppercase">
              AI Content Policy
            </p>
          </div>
        </div>
        <div className="border-t-2 border-black grid grid-cols-2 md:grid-cols-5 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black">
          <IndexItem index="01" label="Purpose" />
          <IndexItem index="02" label="Approved Use" />
          <IndexItem index="03" label="Prohibited Use" />
          <IndexItem index="04" label="Fast-Track" />
          <IndexItem index="05" label="Checklist" />
        </div>
      </header>

      {/* ---------------------------------------------------------
          01 — PURPOSE
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="01" title="Purpose" />
        <div className="px-6 md:px-12 py-10 md:py-16">
          <p className="font-normal text-sm md:text-base tracking-wide max-w-3xl">
            The rollout of our new unified brand identity is a major milestone, and the team's
            eagerness to use Claude and other AI tools to create content is exactly the kind of
            initiative we want to see. To protect the professional equity we're building across
            every region, we need guardrails that keep AI-assisted work from becoming low-quality
            "AI slop" // without forcing every piece of AI-assisted content through a centralized
            design bottleneck.
          </p>
          <div className="mt-10 border-2 border-black p-6 md:p-8 max-w-3xl">
            <p className="font-black text-xl md:text-2xl tracking-tighter uppercase">
              AI is a starting point, not the final product.
            </p>
            <p className="font-normal text-sm md:text-base tracking-wide mt-4">
              Use Claude and other AI tools to brainstorm, draft, outline, and generate raw
              components. Do not rely on AI to generate finished, ready-to-publish branded
              collateral without human refinement.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          02 — APPROVED AI WORKFLOWS
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="02" title="Approved AI Workflows" />
        <div className="px-6 md:px-12 py-6 border-b border-black">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            You do not need design team approval to publish or distribute content that stays
            within these parameters:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black border-b border-black">
          <WorkflowCard
            id="2A"
            title="Internal Communications"
            note="Presentations, internal memos, and team-building flyers where the audience is strictly employees."
          />
          <WorkflowCard
            id="2B"
            title="Copywriting &amp; Ideation"
            note="Using Claude to write email drafts, social media captions, or event descriptions."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black">
          <WorkflowCard
            id="2C"
            title="Abstract Backgrounds &amp; Textures"
            note="Simple, non-representational backgrounds that align with our brand color palette // always the hex values in the Brand Guidelines, Section 04, never an approximation."
          />
          <WorkflowCard
            id="2D"
            title="Layout Prototyping"
            note="A wireframe or concept layout to show a staff designer what you want before they build the final version."
          />
        </div>
      </section>

      {/* ---------------------------------------------------------
          03 — THE AI SLOP FILTER
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="03" title="The AI Slop Filter" />
        <div className="px-6 md:px-12 py-6 border-b border-black">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            Strictly prohibited on any external or client-facing materials // regardless of
            whether our branding is present:
          </p>
        </div>
        <div className="hidden md:grid grid-cols-12 border-b-2 border-black bg-black text-white">
          <div className="col-span-3 px-8 py-3 font-bold text-[10px] tracking-widest">THE OFFENSE</div>
          <div className="col-span-5 px-8 py-3 font-bold text-[10px] tracking-widest border-l border-white">WHY IT HARMS THE BRAND</div>
          <div className="col-span-4 px-8 py-3 font-bold text-[10px] tracking-widest border-l border-white">THE ALTERNATIVE</div>
        </div>
        <OffenseRow
          offense="Mangled Text"
          harm="AI often hallucinates misspelled words or nonsensical symbols in images, and uses non-cohesive typography."
          alternative="Generate the image without text, then add brand-approved typography manually."
        />
        <OffenseRow
          offense={'"Uncanny Valley" Humans'}
          harm="Extra fingers, unnatural lighting, or distorted faces make us look unprofessional and inauthentic."
          alternative="Use approved high-quality stock imagery."
        />
        <OffenseRow
          offense="Brand Bastardization"
          harm={'Allowing AI to "reimagine" or generate our logo in 3D, neon, or alternate colors.'}
          alternative="Only use the official logo files exactly as provided in the Brand Identity & Logo Usage Guide."
        />
        <OffenseRow
          offense="Cliché Aesthetic"
          harm={'Overly glossy, hyper-saturated, "obvious AI" art styles that dilute our distinct visual identity.'}
          alternative="Stick to our defined photographic style: authentic, high-contrast, and grounded."
        />
      </section>

      {/* ---------------------------------------------------------
          04 — FAST-TRACK REVIEW
      --------------------------------------------------------- */}
      <section className="border-b-2 border-black">
        <SectionLabel index="04" title="Fast-Track Review" />
        <div className="px-6 md:px-12 py-6 border-b border-black">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            If your project falls into a gray area // a heavily AI-assisted flyer for a client
            request, for example // use the AI-Assisted Design Fast-Track review rather than
            guessing:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-black">
          <ProcessStep
            num="01"
            title="Submit the Draft"
            note={
              <>
                Drop the file into the "AI-Assisted Design Approval" Formstack form:{" "}
                <a
                  href="https://mocproductscom.formstack.com/forms/ai_design_approvals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline decoration-1 underline-offset-2 hover:no-underline"
                >
                  Submit here →
                </a>
              </>
            }
          />
          <ProcessStep
            num="02"
            title="The 72-Hour Rule"
            note="If a staff designer does not flag an issue within 72 hours, you have implicit approval to publish."
          />
          <ProcessStep
            num="03"
            title="Constructive Corrections"
            note={'If flagged, the design team will not just say "no" // they will provide the specific assets or quick tweaks needed to bring it up to standard.'}
          />
        </div>
      </section>

      {/* ---------------------------------------------------------
          05 — PRE-PUBLISH CHECKLIST
      --------------------------------------------------------- */}
      <section>
        <SectionLabel index="05" title="Pre-Publish Checklist" />
        <div className="px-6 md:px-12 py-6 border-b border-black">
          <p className="font-normal text-sm tracking-wide max-w-2xl">
            Run every piece of AI-assisted content through this before it goes live.
          </p>
        </div>
        <div>
          <ChecklistItem
            num="1"
            title="The Authentic Logo Test"
            note={'Never let AI generate, alter, or "reimagine" the company logo. Verify that the asset used is the official, unaltered SVG, PNG, or PDF file downloaded directly from the brand portal, not regenerated.'}
          />
          <ChecklistItem
            num="2"
            title="Aesthetic &amp; Color Verification"
            note="AI defaults to glossy, hyper-saturated designs // strip this out. The output must rely exclusively on our core monochromatic palette. See the Brand Guidelines, Section 04."
          />
          <ChecklistItem
            num="3"
            title="Typographic Check"
            note="AI image generators frequently hallucinate letters, blend fonts, or create nonsensical symbols. Confirm every word is spelled correctly and that all text has been manually set in our official brand typography, never baked into the raw AI image. See the Brand Guidelines, Section 03."
          />
          <ChecklistItem
            num="4"
            title={'The "Uncanny Valley" Audit'}
            note="Scrutinize any AI-generated people or hands // fingers, lighting, facial symmetry. If a human subject looks distorted, plastic, or inauthentic, discard the image entirely and replace it with approved stock photography."
          />
          <ChecklistItem
            num="5"
            title="Audience Recognition"
            note="Determine the final destination. Internal-only content is clear to publish. Client-facing or public content that relies heavily on AI generation routes through the 72-hour Fast-Track review for final sign-off."
          />
        </div>
      </section>

      {/* ---------------------------------------------------------
          FOOTER
      --------------------------------------------------------- */}
      <footer className="border-t-2 border-black px-6 md:px-12 py-5 flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
        <p className="font-normal text-[10px] tracking-widest max-w-2xl">
          THIS POLICY GOVERNS PROCESS &amp; QUALITY CONTROL FOR AI-ASSISTED CONTENT. FOR VISUAL
          SPECIFICATIONS // LOGO FILES, CLEARSPACE, COLOR, TYPOGRAPHY // SEE THE MOC PRODUCTS BRAND
          IDENTITY &amp; LOGO USAGE GUIDE (MOC-BSM-001).
        </p>
        <p className="font-bold text-[10px] tracking-widest shrink-0">PAGE 01 // 01</p>
      </footer>
    </div>
  );
}
