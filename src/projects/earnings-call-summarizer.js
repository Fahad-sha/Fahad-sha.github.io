import EarningsCallSummarizerCover from "../images/EarningsCallSummarizerCover.jsx";

export const earningsCallSummarizer = {
  slug: "earnings-call-summarizer",
  title: "Earnings Call Summarizer (YouTube → RAG Q&A)",
  subtitle:
    "AI tool that downloads earnings call audio from YouTube, transcribes, embeds, indexes with FAISS, and answers questions via GPT",
  category: "Applied AI & Development",

  repoUrl: "https://github.com/<your-username>/earnings-call-summarizer",
  liveUrl: "",

  archImage: "/images/earnings-call-summarizer-arch.jpg",

  tags: ["Streamlit", "AssemblyAI", "FAISS", "SentenceTransformers", "OpenAI", "yt-dlp"],
  Cover: EarningsCallSummarizerCover,

  report: {
    context:
      "Earnings calls are dense and time-sensitive. This app turns a YouTube link into a searchable, question-answerable transcript, allowing analysts to quickly extract guidance, risks, and supporting quotes through a simple web UI.",

    implementation: [
      "Audio download: yt-dlp fetches the YouTube audio; ffmpeg converts to MP3 for consistent transcription input.",
      "Transcription: AssemblyAI converts speech to text and stores transcript artifacts for downstream processing.",
      "Chunking: transcript is split into semantically sized sections to balance context quality and retrieval precision.",
      "Embeddings: SentenceTransformers embeds each chunk into a vector representation.",
      "Indexing: FAISS stores embeddings for fast similarity search over transcript chunks.",
      "Q&A generation: top retrieved chunks are sent to GPT (e.g., gpt-3.5-turbo) to produce grounded answers.",
      "UI: Streamlit interface for URL input, progress updates, and interactive Q&A."
    ],

    methodology: [
      "Two-stage pipeline: (1) indexing (download → transcribe → embed → index) and (2) query (retrieve → generate).",
      "Grounding strategy: constrain generation to retrieved transcript sections and encourage quote-backed outputs.",
      "User experience: show progress states (downloading, transcribing, indexing) and preserve artifacts for reuse.",
      "Pragmatic defaults: chunk sizing, top-k retrieval, and simple reranking heuristics for relevance."
    ],

    challenges: [
      "Transcript quality variance (speaker overlap, accents, audio artifacts) affecting retrieval relevance.",
      "Chunk sizing trade-offs: too small loses context; too large hurts retrieval precision and costs more tokens.",
      "Latency: transcription and embedding can be slow; caching intermediate results is essential for iteration.",
      "Key management: securing API keys and avoiding accidental commits."
    ],

    outcome: [
      "End-to-end working prototype: paste a YouTube URL → ask questions → get detailed answers grounded in transcript chunks.",
      "Reusable RAG template for other long-form video content (webinars, lectures, interviews).",
      "Clear upgrade path: citations, improved reranking, and structured outputs (KPIs, guidance deltas)."
    ]
  }
};
