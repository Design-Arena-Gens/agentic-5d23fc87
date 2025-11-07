const updates = [
  {
    version: "Flutter 3.22",
    date: "May 2024",
    highlights: [
      "Stable WebAssembly (Wasm) compilation with service worker caching gives web builds a ~2x start-up boost over JavaScript.",
      "Impeller renderer graduates on Android with Vulkan + OpenGL support, bringing more consistent frame pacing and fewer shader compilation hitches.",
      "Material 3 adaptive scaffolds ship as defaults for `NavigationBar`, `SegmentedButton`, and color harmonization APIs."
    ]
  },
  {
    version: "Flutter 3.19",
    date: "March 2024",
    highlights: [
      "Dart 3.3 introduces records/destructuring performance wins and a brand-new `sealed class` pattern matching analyzer.",
      "DevTools adds a frame analysis dashboard and shader warm-up profiling to trace jank in production builds.",
      "Preview of package ecosystem scoring in `pub.dev` surfaces plugin health signals directly inside `flutter pub add`."
    ]
  },
  {
    version: "Flutter 3.16",
    date: "November 2023",
    highlights: [
      "Game Toolkit bundles Firestore sync, in-app purchases, and background audio for casual game templates.",
      "Impeller becomes the default renderer on iOS and preview on Android, enabling 120hz ProMotion with lower shader compilation stalls.",
      "Widget Inspector refresh delivers layout explorer diffs and story-style previews, improving UI iteration."
    ]
  },
  {
    version: "Flutter 3.13",
    date: "August 2023",
    highlights: [
      "MacOS and iPadOS get first-party menu bar and keyboard shortcut APIs, enabling richer desktop experiences.",
      "New `flutter_localization` tooling streamlines ARB generation and integrates with VS Code snippets.",
      "Impeller preview on Android, plus raster cache insights in DevTools performance panel."
    ]
  }
];

const resources = [
  {
    label: "Release blog",
    href: "https://medium.com/flutter",
    description: "Official deep dives into each stable release with code samples and migration tips."
  },
  {
    label: "Flutter Forward",
    href: "https://flutter.dev/events/flutter-forward",
    description: "Catch up on roadmap keynotes and demos for upcoming platform capabilities."
  },
  {
    label: "DevTools",
    href: "https://docs.flutter.dev/development/tools/devtools/overview",
    description: "Learn the latest profiler workflows, memory snapshots, and shader diagnostics."
  },
  {
    label: "Package ecosystem",
    href: "https://pub.dev/flutter/favorites",
    description: "Curated plugin updates with strong Null Safety support and platform fidelity."
  },
  {
    label: "Migration guides",
    href: "https://docs.flutter.dev/release/whats-new",
    description: "Targeted upgrade notes for breaking changes and new stable APIs."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero surface">
        <div className="chip" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12L9 16L19 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Fresh for Flutter devs
        </div>
        <h1>What&apos;s new in Flutter for developers</h1>
        <p>
          Stay current with the latest stable releases, tooling enhancements, and productivity boosters from
          the Flutter team. Ship faster across mobile, web, and desktop with the highlights below.
        </p>
        <div className="hero-cta">
          <a href="https://docs.flutter.dev/release/whats-new" target="_blank" rel="noreferrer">
            Explore full changelog →
          </a>
          <a href="https://www.youtube.com/@FlutterDev" target="_blank" rel="noreferrer">
            Watch release recaps
          </a>
        </div>
      </section>

      <section className="surface" style={{ padding: "2.5rem 2rem" }}>
        <div className="section-title">
          <h2>Latest stable releases</h2>
          <span>Key developer-facing improvements shipped over the past year.</span>
        </div>
        <div className="timeline" style={{ marginTop: "1.8rem" }}>
          {updates.map((entry) => (
            <article key={entry.version} className="timeline-card">
              <time>{entry.date}</time>
              <h3>{entry.version}</h3>
              <ul>
                {entry.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="surface" style={{ padding: "2.4rem 2rem" }}>
        <div className="section-title">
          <h2>Tooling & productivity</h2>
          <span>Resources to help you adopt the newest features quickly.</span>
        </div>
        <div className="resource-grid" style={{ marginTop: "1.5rem" }}>
          {resources.map((resource) => (
            <a
              key={resource.href}
              className="resource-card"
              href={resource.href}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{resource.label}</strong>
              <p>{resource.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer>Built with Next.js · Updated for Flutter stable 3.22 · May 2024</footer>
    </main>
  );
}
