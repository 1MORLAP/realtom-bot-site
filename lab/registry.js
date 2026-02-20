// Product Lab registry (static)
//
// This is intentionally a minimal data source (hardcoded array) so it can later
// be migrated to JSON or pulled from a CMS without changing the rendering logic.
//
// Fields:
// - name: string
// - benefit: string
// - status: "Live" | "In build" | "Launching soon"
// - link: string (absolute https://… or relative /…)
// - lastShipped: "YYYY-MM-DD" (optional but recommended)
// - limitations: string (one line)

export const registryEntries = [
  {
    name: "any.markets",
    benefit: "A simple, real-time market surface for seeing what the world thinks — fast.",
    status: "Live",
    link: "https://any.markets",
    lastShipped: "2026-02-20",
    limitations: "Web-only for now; coverage expands over time.",
  },
  {
    name: "$TOMBOT Token",
    benefit: "The economic layer of the Tombot experiment: fixed supply, fair launch, no presale.",
    status: "Launching soon",
    link: "/#rtb",
    lastShipped: "2026-02-20",
    limitations: "Not launched yet — do not trust unofficial listings.",
  },
  {
    name: "Mobile apps",
    benefit: "iPhone + Android apps connecting AI and Web3 to everyday benefit.",
    status: "In build",
    link: "/#build",
    lastShipped: "2026-02-20",
    limitations: "Private build; no public download link yet.",
  },
  {
    name: "AI services",
    benefit: "Small, sharp tools that help people learn, earn, and navigate the new internet.",
    status: "In build",
    link: "/#build",
    lastShipped: "2026-02-20",
    limitations: "APIs and pricing are not final.",
  },
];
