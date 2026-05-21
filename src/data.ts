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
    id: "mastering-google-entity-search-ranking",
    title: "How to Build Unshakeable Google Search Entity Ranking",
    date: "May 18, 2026",
    readTime: "7 min read",
    excerpt: "Learn how search engines use knowledge graphs, semantic triplets, and JSON-LD schema to form strong identity matching for personal names and engineering brands.",
    content: "Modern SEO is no longer about spamming keywords or acquiring shady backlink portfolios. Google's core Ranking Brain is entirely entity-driven. When someone searches for 'Mustapha Abdulsalam' or 'Sabeer frontend developer', Google is not just looking for text matches; it is querying its internal Knowledge Graph to identify Sabeer as a real, distinct 'Person' entity associated with 'Software Engineering', 'Zero Bank', and 'Fintech'. By constructing a unified semantic graph using official `sameAs` links pointing to authoritative social entities (LinkedIn, GitHub, Twitter) and embedding highly structured JSON-LD Person schema natively in your HTML, you essentially hand the Google indexer a pre-resolved knowledge node. Combine this with specialized CreativeWork schemas representing flagship projects like Zero Bank, and you establish a dominant semantic footprint that ranks #1.",
    tags: ["SEO Architecture", "Google Knowledge Graph", "Structured Schema", "Entity Relevance"]
  },
  {
    id: "securing-high-throughput-fintech-backends",
    title: "Designing Zero-Trust Real-time Fintech Systems",
    date: "April 24, 2026",
    readTime: "9 min read",
    excerpt: "An architectural guide exploring microsecond transaction locks, immutable appending ledgers, and protection mechanisms for modern core banking engines.",
    content: "When engineering digital banking cores like Zero Bank, latency and security are not trade-offs; they are dual requirements. Traditional systems rely on standard ACID rows that lock accounts during heavy transaction surges, producing severe lock wait timeouts. By decoupling the transaction write-path using event-driven Event Sourcing, write requests land instantly on an append-only cryptographic journal. Concurrently, lightweight hydration workers update in-memory caches to evaluate balances. Security is maintained through dual-layer validations: checking payload cryptographic signatures (HMAC-SHA512) and validating transaction IDs against sequence nonces. Only after checks clear are states asynchronously synced to persistent core databases. This strategy preserves performance under immense concurrency while maintaining banking grade compliance.",
    tags: ["Fintech Core", "Systems Architecture", "Zero Trust Security", "Real-Time Databases"]
  },
  {
    id: "webrtc-peer-to-peer-direct-signalling",
    title: "Cracking WebRTC NAT Traversal and Signaling Latency",
    date: "March 11, 2026",
    readTime: "6 min read",
    excerpt: "A technical dive into configuring low-latency STUN/TURN hubs and real-time signalling servers using lightweight WebSocket pipelines.",
    content: "Peer-to-peer communication relies on WebRTC's ability to stream direct audio/video vectors between browsers. However, real-world networks are protected by symmetric firewalls and NAT configurations. Without careful traversal protocols, NAT failure rates can exceed 30%. Implementing Connect Call required engineering a lightweight WebSocket signaling pipeline designed to broker connection handshakes in microsecond speeds. System configurations dynamically poll public STUN servers for direct IP routes, falling back to dedicated cloud-hosted TURN media servers for symmetrically locked networks. By prioritizing DTLS-SRTP encryption at the direct-data layer, media streams are secured against eavesdropping while preserving direct browser-to-browser speeds.",
    tags: ["WebRTC", "Telecom Telephony", "Real-time Broadcast", "Network Protocols"]
  }
];
