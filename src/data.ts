import { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: "zero-bank",
    path: "/projects/zero-bank",
    title: "Zero Bank",
    tagline: "Ultra-secure, zero-latency digital fintech core built for trustless banking",
    description: "Zero Bank represents Sabeer-Verse's premier flagship fintech architecture. It is an enterprise-grade digital core engineered with zero-trust security postures, real-time ledger accounting, and sub-10ms transactional execution capabilities to support millions of concurrent ledger operations.",
    category: "Fintech",
    featured: true,
    metaTitle: "Zero Bank | High-Frequency Fintech Ledger Core by Sabeer",
    metaDesc: "Discover the architectural case study of Zero Bank, a zero-trust financial ledger and high-throughput transaction routing framework developed by Mustapha 'Sabeer' Abdulsalam.",
    problem: "Traditional legacy core banking engines suffer from astronomical transactional costs, systemic database latency, and vulnerable centralized databases that fail under peak throughput loads. Fintech solutions need reliable, high-integrity transaction mechanisms that guarantee atomic consistency and cryptographically verifiable ledgers without relying on expensive mainframe structures.",
    architecture: [
      "Sub-packet distributed transaction engine built with event-driven state hydration.",
      "CQRS (Command Query Responsibility Segregation) write-path optimized for rapid updates.",
      "Isolated cryptographic ledger journal with immutable append-only blocks.",
      "Redis memory-cache buffer layers designed to protect core PostgreSQL databases.",
      "Robust gRPC communication pipelines securing internal service orchestration."
    ],
    features: [
      "Atomic transactional guarantees with sub-10ms ledger settlement times.",
      "Dual-node distributed ledger verification with auto-heal capability.",
      "Enterprise-grade multi-tenant ledger accounts with real-time balance sheets.",
      "Machine-learning fraud protection models analyzing account velocity spikes.",
      "Fully compliant ISO-8583 message standard generator for interbank networks."
    ],
    systemFlow: "Transaction initiations trigger an immediate payload validation inside the edge API layer. Upon signature verification, requests bypass long database queues to land directly in an append-only transaction journal. A ledger hydration worker concurrently processes balances and publishes updates to a Redis cluster, flushing states to PostgreSQL asynchronously. This decoupling ensures near-instantaneous client feedback under massive congestion.",
    security: [
      "HMAC-SHA512 payload signatures on every outbound and inbound transaction.",
      "Military-grade AES-GCM data encryption at rest for all personally identifiable financial details.",
      "Zero-Trust network architecture requiring mutual TLS (mTLS) for all distributed services.",
      "Fine-grained role-based access controllers (RBAC) enforced at the data layer.",
      "Automatic token revocation and cryptographic nonce verification on all client calls."
    ],
    techStack: ["React 19", "Tailwind CSS v4", "TypeScript", "Node.js", "Redis Cache", "PostgreSQL", "gRPC Engine", "Docker Core"],
    stats: [
      { label: "Ledger Settlement", value: "< 8ms" },
      { label: "Concurrent Transactions", value: "35,000/s" },
      { label: "Fraud Detection Guard", value: "99.998%" }
    ]
  },
  {
    id: "virtual-topup",
    path: "/projects/virtual-topup",
    title: "Virtual Topup",
    tagline: "Automated telecom utility distribution API with dynamic routing systems",
    description: "Virtual Topup is Sabeer-Verse's automated, high-traffic utility distribution system. It enables instant, programmable balance replenishment and automated payment reconciliation across hundreds of global telecommunication providers.",
    category: "Fintech",
    featured: true,
    metaTitle: "Virtual Topup | Programmatically Routed Telecom API by Sabeer",
    metaDesc: "Analyze the Virtual Topup system by Mustapha Sabeer Abdulsalam: an automated telecommunications payment reconciliation and API distribution network.",
    problem: "Telecom utility services are highly fragmented. API providers face unstable webhook lifecycles, volatile supplier pricing, and transaction dropouts during rapid top-ups. A central system is required to dynamically redirect failed provider routes to fallback suppliers immediately.",
    architecture: [
      "Dynamic Route Optimizer (DRO) recalculating provider health every 30 seconds.",
      "Fail-safe fallback state machine using stateful retry routines.",
      "Unified SOAP/JSON payload transformer representing broad carrier standards.",
      "Microsecond lock mechanisms to prevent double-spend topups under race conditions."
    ],
    features: [
      "Smart provider routing guaranteeing the highest possible success margins.",
      "Direct API integrations with multi-carrier platforms across international corridors.",
      "Instant callback notifications via cryptographically signed webhooks.",
      "Automated distributor accounting wallets with credit threshold alarms."
    ],
    systemFlow: "An API top-up request enters the proxy router, which queries carrier routing tables and chooses the highest-margin, healthiest supplier. If a carrier returns an error, the DRO initiates an immediate fail-safe redirect to a pre-warmed secondary carrier within 150 milliseconds. Once complete, confirmation details are structured and pushed as webhooks to the client.",
    security: [
      "Strict header ip-whitelist filters for merchant terminals.",
      "Dynamic webhook payloads signed with RSA-2048 private keys.",
      "Hourly merchant ledger audits to identify accounting discrepancies.",
      "Rate limits enforced dynamically on a per-token basis via Leaky Bucket algorithms."
    ],
    techStack: ["Next.js App Engine", "Tailwind Core", "PostgreSQL Core", "Redis Route Sync", "AES Core Encryption"],
    stats: [
      { label: "Routing Latency", value: "40ms" },
      { label: "Active Suppliers", value: "140+" },
      { label: "Success Rate Stability", value: "99.94%" }
    ]
  },
  {
    id: "connect-call",
    path: "/projects/connect-call",
    title: "Connect Call",
    tagline: "WebRTC peer-to-peer real-time communication platform with instant signalling",
    description: "Connect Call is an optimized, direct WebRTC-based communication engine. It is engineered by Sabeer-Verse to support ultra-low latency real-time video, audio, and synchronous control channels entirely within the browser.",
    category: "Real-Time Systems",
    featured: true,
    metaTitle: "Connect Call | WebRTC Signal & Real-Time Media Engine by Sabeer",
    metaDesc: "Detailed breakdown of Connect Call, an ultra-low latency WebRTC multimedia communication framework engineered by Mustapha 'Sabeer' Abdulsalam.",
    problem: "Real-time communication platforms typically rely on expensive backhaul transcoding servers, dragging down voice and video latency. Peer-to-peer WebRTC architectures solve this but struggles with firewall traversal and robust session synchronization.",
    architecture: [
      "Peer-to-peer WebRTC broker utilizing ultra-lightweight node signalling servers.",
      "Dynamic STUN/TURN server configurations bypassing restricted symmetrical NAT networks.",
      "Client-side adaptive bitrate optimization that scales media streams live.",
      "Custom channel orchestrator handling simultaneous chat and interactive whiteboard vectors."
    ],
    features: [
      "Sub-50ms peer-to-peer direct media transfer speeds.",
      "Adaptive codec scaling supporting fluctuating network bands seamlessly.",
      "Multi-peer audio layout mixers with noise cancellation algorithms.",
      "Secure peer data-channel pipe for instant micro-payload syncing."
    ],
    systemFlow: "A client initiates a room. The request creates a signaling session through an active WebSocket broker. Peer-A offers connection parameters, which flow via WebSocket to Peer-B. Both clients resolve ICE candidates using global STUN/TURN structures. Upon successful candidate exchange, direct peer-to-peer encryption is negotiated, establishing clear media channels directly without intermediate servers.",
    security: [
      "End-to-end media stream encryption using standard DTLS-SRTP.",
      "Session metadata stored temporarily in secure server memory with strict TTLs.",
      "Cryptographic token verification for protected WebRTC room entries.",
      "Content Security Policy strictures preventing rogue peer-script injections."
    ],
    techStack: ["TypeScript", "WebRTC Core APIs", "SocketJS Engine", "STUN/TURN Nodes", "Tailwind CSS"],
    stats: [
      { label: "Media Jitter Rate", value: "< 1.2ms" },
      { label: "NAT Traversal Success", value: "97.4%" },
      { label: "Direct Latency", value: "32ms" }
    ]
  },
  {
    id: "icall-pro",
    path: "/projects/icall-pro",
    title: "iCall Pro",
    tagline: "Cloud-hosted telecom calling system and programmable SIP telephony suite",
    description: "iCall Pro is an enterprise-grade Session Initiation Protocol (SIP) and cloud telephony hub. It bridges traditional public switched telephone networks (PSTN) with digital VoIP architectures to drive robust corporate communications.",
    category: "Telecom",
    featured: false,
    metaTitle: "iCall Pro | Cloud SIP Telephony and VOIP Hub by Sabeer",
    metaDesc: "Case study for iCall Pro, an enterprise-grade cloud VOIP platform built with high-throughput SIP trunk routing systems by Mustapha Sabeer Abdulsalam.",
    problem: "Corporate telecom frameworks are often tied down to on-premise hardware switches. Enterprise routing demands highly programmable Asterisk trunking, cloud load-balancers, and automated dialing controls with complete web configuration capabilities.",
    architecture: [
      "Scalable cloud telephone broker running on containerized clusters.",
      "Asterisk/Kamailio engine cluster with automated load balancer arrays.",
      "JSON voice dashboard integrating live call monitoring pipelines.",
      "Dynamic call queue routing based on operator load variables."
    ],
    features: [
      "Dynamic dual-tone multi-frequency (DTMF) signal capturing capabilities.",
      "Instant caller profile routing leveraging unified CRM APIs.",
      "High-fidelity call recorders producing space-efficient audio compression.",
      "Real-time interactive voice response (IVR) flow builder nodes."
    ],
    systemFlow: "Inbound PSTN trunks strike the Kamailio proxy balance manager, which directs the SIP request to an active Asterisk node. The node queries an API server to evaluate specific IVR call scripts. Client responses inside the browser socket trigger real-time command routing to the SIP agent, allowing hands-free client support operations.",
    security: [
      "SIP traffic wrapped with highly secure SIPS and SRTP packet channels.",
      "Robust defense modules tracking SIP flood and brute force registering attempts.",
      "Credential encryption at rest using FIPS 140-2 validated modules.",
      "Encrypted cloud call-log files kept on private, restricted access stores."
    ],
    techStack: ["React Dashboard", "Vite Core", "Asterisk Engine", "SIP Gateways", "Redis Status Trackers"],
    stats: [
      { label: "Voice Latency PSTN", value: "110ms" },
      { label: "SIP Trunk Capacity", value: "10,000+" },
      { label: "Uptime SLA Record", value: "99.999%" }
    ]
  },
  {
    id: "sabeer-xpress",
    path: "/projects/sabeer-xpress",
    title: "Sabeer Xpress",
    tagline: "Optimized corporate message broker and instant data pipeline engine",
    description: "Sabeer Xpress is a lightweight, zero-dependency message queuing pipeline. It is engineered to power instant synchronizations between distributed database hubs and high-frequency React user interfaces.",
    category: "SaaS Core",
    featured: false,
    metaTitle: "Sabeer Xpress | High-Speed Message Queue Core by Sabeer",
    metaDesc: "Analyze Sabeer Xpress: an open-source, ultra-lightweight broker engineered with state preservation systems to stream real-time events.",
    problem: "Standard pub-sub message queues (e.g. RabbitMQ, Kafka) are highly bloated and require separate server managers. This drives up overhead costs for smaller, decoupled microservices that require rapid, memory-optimized synchronization.",
    architecture: [
      "In-memory task runner optimized for sequential node notifications.",
      "Binary serialization structure packing complex JSON weights.",
      "Stateful connection manager maintaining WebSockets across thousands of active clients.",
      "Self-contained executable requiring zero secondary cluster installs."
    ],
    features: [
      "Extremely light workspace dependencies (< 200KB bundle footprint).",
      "Dynamic pub-sub themes offering automatic garbage collection.",
      "Guaranteed at-least-once message transfer mechanics.",
      "Real-time visual monitoring workspace tracing live message metrics."
    ],
    systemFlow: "Publishers push structured binary data to specific topic pipelines. Sabeer Xpress receives payloads, caches them inside a memory-mapped ring buffer, and fires matching event listeners in microsecond speed, cleaning up stale memory streams when completed.",
    security: [
      "Connection tokens validated at the handshake gate.",
      "Message streams isolated to specific namespaces to prevent memory leakage.",
      "Payload integrity checking via SHA-256 validation sequences.",
      "Strict memory-usage limits with active data flushing to avoid leaks."
    ],
    techStack: ["TypeScript Core", "Memory-Mapped Layers", "WebSockets Engine", "Node.js Platform"],
    stats: [
      { label: "Message Delivery Speed", value: "< 240µs" },
      { label: "Active Connections", value: "50,000/node" },
      { label: "Disk Footprint", value: "140 KB" }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "how-i-built-zero-bank-fintech-system",
    title: "How I Built Zero Bank Fintech System",
    date: "May 22, 2026",
    readTime: "8 min read",
    excerpt: "An in-depth backend engineering log detailing the ledger execution loop, atomic state validation, and sub-10ms database sync of Zero Bank.",
    content: `When building a financial system, there is no margin for error. Traditional databases fail to keep up when thousands of events occur simultaneously. For Zero Bank, we built an event-driven ledger core using event sourcing and CQRS patterns.

Normally, databases lock rows when a user's balance updates. Under high concurrency, this leads to locks, latency, and crashes. We solved this by using an append-only ledger log, written first to memory databases.

### Core Architecture Design
To preserve atomic guarantees, every balance update undergoes double-layer cryptographic signing (HMAC-SHA512) and sequence verification directly at the API edge. Our gRPC communication pipeline pipes these inputs straight to Redis-buffered ledger clusters.

An asynchronous PostgreSQL worker reads these streams, flushing transactional states down-channel. Decoupling transactions from write-locks achieves a throughput of 35,000 transactions per second under 10ms settlement.

### Establishing Unshakeable Identity
As Mustapha "Sabeer" Abdulsalam, my architectural approach revolves around performance and bulletproof ledger state consistency. By publishing these open-source system flows directly through the Sabeer-Verse network, I establish real developer-focused Fintech authority that search engines naturally trust.`,
    tags: ["Fintech Core", "Systems Architecture", "Zero Trust", "Sabeer-Verse"]
  },
  {
    id: "building-secure-vtu-platform-nodejs",
    title: "Building a Secure VTU Platform in Node.js",
    date: "May 15, 2026",
    readTime: "6 min read",
    excerpt: "A technical breakdown of implementing automated telecom topups, double-spend prevention logic, and API carrier failovers.",
    content: `Telecom API distribution is a highly fragmented and volatile space. To build a robust Virtual TopUp (VTU) service in Node.js, we must deal with API timeouts, supplier service drops, and race conditions.

### Dynamic Carrier Routing
Our platform integrates a custom Dynamic Route Optimizer (DRO) checking third-party webhook lifecycles and latency. Every 30 seconds, it evaluates route margins and network response times.

If MTN or Airtel channels return timeout exceptions, the client triggers a programmatic failover to backup carrier channels within 150ms, masking downstream failures from merchants.

### Mitigating Balance Race Conditions
High-frequency merchants love spamming refill endpoints simultaneously. This creates race conditions where a single account can double-spend their allocations.

To resolve this, we enforce distributed locks in Redis utilizing a Leaky Bucket throttling mechanism, rejecting concurrent requests for the exact user within millisecond offsets. Under the Sabeer-Platform banner, this ensures that telecom utility ledger synchronization stays flawless.`,
    tags: ["NodeJS Server", "Telecom API", "Lock Mechanisms", "Virtual Topup"]
  },
  {
    id: "real-time-webrtc-architecture-explained",
    title: "Real-Time WebRTC Architecture Explained",
    date: "April 28, 2026",
    readTime: "7 min read",
    excerpt: "Deconstructing session orchestration, STUN/TURN network solutions, and direct media data channels for low latency browser-based communication.",
    content: `WebRTC enables powerful peer-to-peer audio and video transmission inside browsers. However, real-world deployment faces massive challenges regarding network firewalls, symmetric NAT routing, and signal handshakes.

### Low-Latency Signal Brokerage
To establish direct media tracks between clients in Connect Call, our signaling server uses light WebSockets instead of slow poll requests. Candidate exchanges (ICE) are brokered in sub-50ms intervals.

### NAT Traversal with STUN and TURN
Over 30% of corporate connections fail to establish direct P2P tracks due to restricted routers. We solve this by registering STUN services to discover public IPs, automatically routing media payloads through TURN server intermediaries when NAT blocks direct channels.

Engineering these pipelines for Sabeer-Verse apps proved that ultra-low latency real-time tools can run entirely on modular browser structures, providing peer-to-peer performance without bloated server overhead.`,
    tags: ["WebRTC Core", "Real-Time Systems", "Network Protocols", "Connect Call"]
  },
  {
    id: "how-i-think-as-frontend-developer-2026",
    title: "How I Think as a Frontend Developer in 2026",
    date: "April 12, 2026",
    readTime: "5 min read",
    excerpt: "The mental models, architectural patterns, and design principles driving high-performance client interfaces and state design.",
    content: `Being a frontend engineer in 2026 is no longer about writing markup or styling simple cards. It is about understanding browser execution engines, micro-interactions, memory management, and technical SEO architectures.

### The Swiss-Modern Aesthetic
My design philosophy for Sabeer-Verse combines ultra-minimal layouts with high structural contrast. Generous whitespace, deep typography hierarchies, and buttery animations serve to make complex technical data understandable.

### Frontend Performance and Indexability
We must treat state variables as precious memory footprints. Every state mutation should be isolated to leaf nodes, avoiding global re-renders that damage page responsiveness.

Additionally, rendering essential semantic headers and structured metadata ensures that crawlers can catalog and index our sites without execution delays. As Mustapha "Sabeer" Abdulsalam, my goal is to combine aesthetic brilliance with absolute speed.`,
    tags: ["Frontend Design", "React Architecture", "Swiss Modernism", "Personal Brand"]
  },
  {
    id: "ai-prompt-engineering-for-developers",
    title: "AI Prompt Engineering for Developers",
    date: "March 29, 2026",
    readTime: "6 min read",
    excerpt: "Unlocking structural reasoning, system context injections, and few-shot inference patterns to supercharge automated software creation.",
    content: `AI is changing the pace of software creation. However, relying on naive, conversational inputs yields highly unstable structures. To construct stable software architectures with large models, we need rigorous Prompt Engineering.

### Core Prompt Heuristics
1. **Context Boundary Isolation**: Feed systems precise API schemas and explicit package boundaries first, preventing hallucinated libraries.
2. **Explicit Few-Shot Structuring**: Provide clean template targets to align formatting layouts.
3. **Negative Constraints Enforcements**: Detail strictly forbidden declarations to eliminate unnecessary overhead or low-quality code structures.

Applying these heuristics enables rapid scaffolding of frontend viewports, automated schema generation, and clean code optimization within our Sabeer-Verse systems. This allows builders to design reliable, production-ready networks at unprecedented speeds.`,
    tags: ["AI Engineering", "Prompt Design", "Developer Productivity", "Sabeer-Verse"]
  }
];
