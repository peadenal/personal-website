export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  date: string; // ISO date
  body: string[]; // one entry per paragraph
}

export const posts: Post[] = [
  {
    slug: "from-relay-to-loop",
    title: "From Relay to Loop",
    subtitle: "What Happens When Product, Design, and Engineering Stop Taking Turns",
    date: "2026-11-18",
    body: [
      "Every request to build something starts with the same questions. Who takes the request in? Is intake a separate team, or a role inside one? Who talks to the customer and works out what they need?",
      "Whoever that is can’t only listen. They have to know how solutions get built: whether this belongs in a Microsoft tool, a Google tool, or some other application, how it should be architected, what it should look like. And they have to do that while keeping the customer in the conversation.",
      "For a long time, the answer was a relay. One person understood the need and wrote it down. That document went to someone who designed the solution, and their document went to someone who built it. Every handoff was a chance for communication to drift, expectations to split, and scope to grow.",
      "It’s easy to dismiss that model now, but it made sense. The skills were different, and few people had more than one of them. Design took a long time. Development took longer. Even understanding what a customer needed was slow, because before transcription a conversation survived only as someone’s notes. Signal was lost at every step and noise was added. Extensive documentation was how you fought that. When building is expensive, you write things down carefully so you don’t build the wrong thing.",
      "What broke the relay is advancements in tooling. A customer conversation can now be transcribed and, with skill files or agents, turned into documentation almost immediately. That documentation can be combined with design specs. From there, a working prototype is a short step, in whatever tool you prefer. Artifacts that used to take weeks, and that each justified a separate role, now come out of a single conversation.",
      "So taking turns stops making sense. A document no longer has to pass from product to design to engineering, because everyone can react to the same working thing at the same time. The customer sees something real early, when changing direction is cheap. Misalignment that used to surface at the end surfaces in the first week. That’s the loop: build, show, react, repeat, with everyone in it together.",
      "None of this depends on company size. A three-person team has the same handoffs as a three-hundred-person one. They’re just shorter.",
      "What’s less clear is what happens to the people. The relay told everyone what their job was: you owned your leg. In a loop, those lines blur. Does the product designer also become a developer? Does the person who talks to the customer now build the first version? If one person can carry a request from conversation to prototype, what does everyone else do, and who is accountable for the result?",
      "I don’t have clean answers yet. What I see is roles being renegotiated in real time, team by team. The handoff used to be how work got coordinated. If it’s going away, something has to take its place.",
    ],
  },
];

export const getPost = (slug: string | undefined) => posts.find((p) => p.slug === slug);

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
