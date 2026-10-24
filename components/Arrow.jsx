/**
 * Arrow for buttons and links. Drawn, not typed: the font's arrow characters
 * are small and sit below the middle of capital letters. Square caps and
 * mitred joins, sized to the capital height. Same drawing as the MOC
 * Training Library, so the sites share one arrow.
 */
const PATHS = {
  right: "M2 8 H13 M9 4 L13 8 L9 12",
  left: "M14 8 H3 M7 4 L3 8 L7 12",
  down: "M8 2 V13 M4 9 L8 13 L12 9",
  up: "M8 14 V3 M4 7 L8 3 L12 7",
};

export default function Arrow({ dir, className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={`inline-block w-[0.95em] h-[0.95em] shrink-0 align-middle ${className}`}
    >
      <path d={PATHS[dir]} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
