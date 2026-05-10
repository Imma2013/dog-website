const drops = [
  {
    title: 'CITY STRUT',
    note: 'Powder-blue rain capes, reflective collars, impossible swagger.',
    color: 'bg-sky-300',
  },
  {
    title: 'SOFA ROYALTY',
    note: 'Nap blankets, brushed cotton wraps, and a throne-level attitude.',
    color: 'bg-pink-300',
  },
  {
    title: 'PARK CHAOS',
    note: 'Hard-wearing harnesses for dogs who treat grass like a runway.',
    color: 'bg-yellow-300',
  },
];

const manifesto = [
  'Dogs are not accessories.',
  'Dogs are not content props.',
  'Dogs are tiny celebrities with dirt on their paws and poetry in their side-eye.',
];

const stories = [
  {
    title: 'The Walk Is The Runway',
    body: 'Every curb becomes a stage. Every leash becomes styling. We design for side-eye, head turns, and dramatic pauses beneath apartment window light.',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mud, Velvet, Flashbulbs',
    body: 'A good dog life should hold contradictions: luxury and mess, polish and chaos, discipline and little acts of theft from the kitchen table.',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f0e8] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f0e8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <a href="#" className="editorial-title text-xl font-bold tracking-tight">
            DOG//WORLD
          </a>
          <nav className="hidden gap-6 text-sm font-semibold uppercase md:flex">
            <a href="#attitude" className="transition-all duration-300 hover:-translate-y-0.5 hover:text-pink-600">Attitude</a>
            <a href="#drops" className="transition-all duration-300 hover:-translate-y-0.5 hover:text-sky-600">Drops</a>
            <a href="#stories" className="transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-600">Stories</a>
            <a href="#join" className="transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-500">Join</a>
          </nav>
          <a
            href="#join"
            className="rounded-full border border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-105 hover:bg-pink-500 hover:text-black"
          >
            Bark Back
          </a>
        </div>
      </header>

      <main>
        <section className="border-b-4 border-black">
          <div className="grid min-h-[92vh] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative flex flex-col justify-between bg-yellow-300 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
              <div className="mb-10 flex items-center justify-between text-xs font-bold uppercase tracking-[0.28em]">
                <span>Issue 01 / Dogs with taste</span>
                <span className="rounded-full border border-black px-3 py-1">Worldwide</span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="max-w-md text-sm font-medium uppercase tracking-[0.22em] text-black/70">
                  For dramatic hounds, velvet-eared icons, and apartment wolves who understand camera angles.
                </p>
                <h1 className="editorial-title text-shadow-poster max-w-5xl text-[4rem] leading-[0.88] font-bold sm:text-[5.8rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[10.5rem]">
                  GOOD
                  <br />
                  DOGS
                  <span className="serif-punch ml-2 inline-block lowercase align-top text-[0.38em] font-semibold normal-case">
                    deserve
                  </span>
                  <br />
                  BADLY
                  <br />
                  STYLED
                  <br />
                  PERFECTION
                </h1>

                <div className="grid max-w-2xl gap-4 pt-4 sm:grid-cols-[1fr_auto]">
                  <p className="max-w-lg text-base leading-7 text-black/75 sm:text-lg">
                    An editorial dog universe built like a poster wall: loud colors, hard crops, premium gear, and enough attitude to make the cat nervous.
                  </p>
                  <div className="flex items-end">
                    <a
                      href="#drops"
                      className="inline-flex items-center justify-center rounded-full border-2 border-black bg-pink-300 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:rotate-1 hover:bg-white"
                    >
                      See the Drop ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  ['04', 'new capsule drops'],
                  ['27K', 'cult dog followers'],
                  ['100%', 'walk-tested glamour'],
                ].map(([value, label]) => (
                  <div key={label} className="border-2 border-black bg-[#f5f0e8] p-4 rough-panel">
                    <div className="editorial-title text-4xl font-bold">{value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/70">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] border-l-0 border-t-4 border-black bg-black lg:border-l-4 lg:border-t-0">
              <img
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80"
                alt="Editorial portrait of a dog"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              <div className="absolute left-4 top-4 max-w-[180px] rotate-[-2deg] border-2 border-black bg-sky-300 p-3 text-sm font-bold uppercase tracking-[0.16em] sm:left-6 sm:top-6">
                street-cast canine with main-character energy
              </div>
              <div className="absolute bottom-4 right-4 max-w-xs rotate-[2deg] border-2 border-black bg-[#f5f0e8] p-4 sm:bottom-6 sm:right-6">
                <p className="serif-punch text-3xl leading-none font-semibold">
                  “Too elegant for obedience school.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-b-4 border-black bg-black py-4 text-[#f5f0e8]">
          <div className="marquee-track flex min-w-max gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex gap-8">
                {[
                  'LEASHES WITH EGO',
                  'WALKS AS PERFORMANCE ART',
                  'TAILS / TEXTURE / THEATRICS',
                  'NO BORING DOG BRANDS',
                  'SIT. STAY. SERVE LOOKS.',
                ].map((item) => (
                  <span key={item} className="editorial-title text-3xl font-bold sm:text-5xl">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="attitude" className="border-b-4 border-black bg-[#f5f0e8]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b-4 border-black bg-sky-300 px-4 py-10 sm:px-6 lg:border-b-0 lg:border-r-4 lg:px-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em]">Manifesto / not pet-shop behavior</p>
              <h2 className="editorial-title text-[3rem] leading-[0.9] font-bold sm:text-[4.5rem] lg:text-[5.5rem]">
                WE LIKE
                <br />
                OUR DOGS
                <br />
                <span className="serif-punch normal-case text-[0.7em] font-semibold">slightly iconic.</span>
              </h2>
            </div>

            <div className="bg-[#f5f0e8] px-4 py-10 sm:px-6 lg:px-10">
              <div className="space-y-5">
                {manifesto.map((line, index) => (
                  <div
                    key={line}
                    className={`rough-panel border-2 border-black p-5 transition-all duration-300 hover:-translate-y-1 ${
                      index === 0 ? 'bg-pink-300' : index === 1 ? 'bg-[#f5f0e8]' : 'bg-yellow-300'
                    }`}
                  >
                    <p className="text-lg font-semibold leading-8 sm:text-2xl">{line}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="border-2 border-black bg-black p-6 text-[#f5f0e8]">
                  <div className="mb-3 text-2xl">✦</div>
                  <h3 className="editorial-title text-2xl font-bold">Cast like fashion</h3>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    We choose imagery with stare, posture, and personality. Less “good boy at brunch,” more “mysterious creature in a campaign.”
                  </p>
                </div>
                <div className="border-2 border-black bg-white p-6">
                  <div className="mb-3 text-2xl">⚡</div>
                  <h3 className="editorial-title text-2xl font-bold">Built for strut</h3>
                  <p className="mt-3 text-sm leading-7 text-black/75">
                    Durable fabrics, theatrical silhouettes, and accessories that survive wet sidewalks, coffee runs, and ego-driven park entrances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="drops" className="border-b-4 border-black bg-pink-300 px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em]">Current drop / walkwear for scene-stealers</p>
                <h2 className="editorial-title text-[3.2rem] leading-[0.9] font-bold sm:text-[5rem] lg:text-[6.2rem]">
                  DRESS THE
                  <br />
                  DOG
                  <span className="serif-punch ml-3 inline-block normal-case text-[0.5em] font-semibold">
                    like a headline
                  </span>
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {drops.map((drop) => (
                  <article
                    key={drop.title}
                    className={`${drop.color} rough-panel flex min-h-[260px] flex-col justify-between border-2 border-black p-5 transition-all duration-300 hover:-translate-y-2 hover:rotate-1`}
                  >
                    <div className="text-right text-xs font-bold uppercase tracking-[0.25em]">Capsule</div>
                    <div>
                      <h3 className="editorial-title text-4xl leading-none font-bold">{drop.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-black/75">{drop.note}</p>
                    </div>
                    <button className="mt-6 w-fit rounded-full border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                      Enter Lookbook
                    </button>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[420px] overflow-hidden border-4 border-black bg-black">
                <img
                  src="https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1400&q=80"
                  alt="Dog lying on a stylish couch"
                  className="image-cutout h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 max-w-md border-2 border-black bg-[#f5f0e8] p-4 sm:bottom-6 sm:left-6">
                  <p className="serif-punch text-3xl leading-none font-semibold">
                    Soft furnishings for creatures who fully believe the apartment belongs to them.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between border-4 border-black bg-[#f5f0e8] p-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em]">What sells out first</p>
                  <ul className="mt-6 space-y-5">
                    {[
                      'Butter-yellow walking coats with oversized toggles',
                      'Powder-blue harnesses engineered for dramatic tugging',
                      'Monogram treat pouches for shameless bribery',
                      'Blankets thick enough for post-park collapse',
                    ].map((item) => (
                      <li key={item} className="border-b-2 border-black pb-4 text-lg font-medium leading-8">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#join"
                  className="mt-8 inline-flex w-fit items-center rounded-full border-2 border-black bg-yellow-300 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300"
                >
                  Reserve the next drop
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className="border-b-4 border-black bg-[#f5f0e8] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em]">Editorial stories / culture, coats, chaos</p>
                <h2 className="editorial-title text-[3rem] leading-[0.9] font-bold sm:text-[5rem]">
                  DOG LIFE,
                  <br />
                  <span className="serif-punch normal-case text-[0.72em] font-semibold">written like gossip.</span>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-black/70">
                A chaptered journal for people who discuss leash hardware at dinner and believe a dog’s stare can alter the energy of an entire room.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {stories.map((story, index) => (
                <article
                  key={story.title}
                  className={`grid overflow-hidden border-4 border-black ${index === 0 ? 'bg-black text-white' : 'bg-sky-300 text-black'} rough-panel`}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-72 w-full object-cover sm:h-96"
                  />
                  <div className="p-6 sm:p-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] opacity-75">Feature story</p>
                    <h3 className="editorial-title text-4xl leading-none font-bold sm:text-5xl">
                      {story.title}
                    </h3>
                    <p className={`mt-5 text-base leading-8 ${index === 0 ? 'text-white/80' : 'text-black/75'}`}>
                      {story.body}
                    </p>
                    <button
                      className={`mt-6 rounded-full border-2 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 ${
                        index === 0
                          ? 'border-white bg-white text-black hover:bg-pink-300'
                          : 'border-black bg-yellow-300 text-black hover:bg-white'
                      }`}
                    >
                      Read Chapter
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="border-b-4 border-black bg-yellow-300 px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em]">Join the pack / but make it chic</p>
              <h2 className="editorial-title text-[3.4rem] leading-[0.9] font-bold sm:text-[5.6rem] lg:text-[7rem]">
                LET YOUR
                <br />
                DOG BE
                <br />
                <span className="serif-punch normal-case text-[0.58em] font-semibold">ridiculously unforgettable.</span>
              </h2>
            </div>

            <div className="border-4 border-black bg-[#f5f0e8] p-6 sm:p-8 rough-panel">
              <p className="text-lg leading-8 text-black/75">
                Monthly drops, casting calls, walk-club invites, and style notes for dogs with a sense of occasion.
              </p>

              <form className="mt-8 space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em]">Human email</label>
                  <input
                    type="email"
                    placeholder="you@dogworld.club"
                    className="w-full border-2 border-black bg-white px-4 py-4 text-sm outline-none transition-all duration-300 focus:-translate-y-0.5 focus:bg-yellow-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em]">Dog stage name</label>
                  <input
                    type="text"
                    placeholder="Princess Meatball"
                    className="w-full border-2 border-black bg-white px-4 py-4 text-sm outline-none transition-all duration-300 focus:-translate-y-0.5 focus:bg-pink-100"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full border-2 border-black bg-black px-6 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:text-black"
                >
                  Join the pack ↗
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black px-4 py-8 text-[#f5f0e8] sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="editorial-title text-4xl font-bold sm:text-5xl">DOG//WORLD</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
              A loud little universe for stylish dogs, obsessive owners, and walks that feel suspiciously like public appearances.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.2em]">
            {['Instagram', 'Lookbook', 'Journal', 'Stockists'].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full border border-white/25 px-4 py-2 transition-all duration-300 hover:border-pink-300 hover:bg-pink-300 hover:text-black"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
