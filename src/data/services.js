// Service pages. Every claim here must be backed by the CV / case studies.
// Keyword targets come from seo-data/keyword-map.csv.

export const services = [
  {
    slug: "document-ai",
    updated: "2026-11-26",
    navLabel: "Document AI & PDF Extraction",
    metaTitle: "AI Document & PDF Data Extraction Services",
    metaDescription:
      "Freelance AI engineer for PDF data extraction, OCR and document classification. Production pipelines at 95% accuracy with Google Document AI, Azure and Python.",
    ogKicker: "Service",
    ogTitle: "AI Document & PDF Data Extraction",
    ogTags: "OCR · Document classification · Google Document AI · FastAPI",
    eyebrow: "Document AI Services",
    h1: "AI Document & PDF Data Extraction",
    h1Accent: "that holds up in production",
    lead:
      "I build pipelines that read your PDFs and scanned forms, classify what matters and return clean, structured data to your system. My tender-classification pipeline reached about 95% end-to-end accuracy on unseen layouts and is still running in the client's production system.",
    stats: [
      { value: "95%", label: "End-to-end accuracy on unseen tender layouts" },
      { value: "~1,000", label: "German construction tender PDFs processed" },
      { value: "5.0", label: "Client rating on Clutch for this work" },
    ],
    offerings: [
      {
        icon: "fileSearch",
        title: "PDF & scanned-document data extraction",
        text: "Pull fields, line items, units and prices out of long, inconsistent PDFs and scans, using OCR where the text layer is missing.",
      },
      {
        icon: "layers",
        title: "Document & text classification",
        text: "Separate the content you need from boilerplate with machine-learning classifiers, including semi-supervised training when only a few documents are labeled.",
      },
      {
        icon: "formInput",
        title: "Form & key-value extraction",
        text: "Extract structured data from tax forms, contracts and other business documents with Google Document AI, Azure OCR and Azure Form Recognizer.",
      },
      {
        icon: "workflow",
        title: "Extraction APIs & system integration",
        text: "Ship the pipeline as a FastAPI service your existing system can call, deployed on AWS or GCP and scaled with Ray when volume grows.",
      },
    ],
    caseStudies: [
      {
        href: "/case-studies/tenderml-ai-document-classification",
        tag: "Document classification",
        title: "TenderML: classifying German construction tender PDFs",
        text: "Semi-supervised SVM and CRF models plus a tree-based DFS extractor that handled layouts regex could not. About 95% accuracy on unseen formats; still in production.",
      },
      {
        href: "/case-studies/gcp-insightdocs",
        tag: "Google Document AI",
        title: "GCP InsightDocs: automated form extraction",
        text: "A platform on GCP that extracts data from CRA tax forms and contracts for a Canadian accountancy firm, using Google Document AI and a side-by-side document viewer.",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "SVM + CRF",
      "Semi-supervised learning",
      "OCR",
      "Google Document AI",
      "Azure OCR",
      "Azure Form Recognizer",
      "Ray",
      "AWS EC2",
      "GCP",
      "React",
    ],
    process: [
      {
        title: "Share samples and target fields",
        text: "You send a representative set of documents and the fields you need. I check formats, scan quality and edge cases before quoting.",
      },
      {
        title: "Agree how accuracy is measured",
        text: "We fix a review set, ideally documents the model never sees in training, so accuracy is measured on your own samples, not on a demo.",
      },
      {
        title: "Build the pipeline",
        text: "OCR, classification and extraction tuned to your layouts, with rules or ML where each works best, and filters for false positives.",
      },
      {
        title: "Deploy and integrate",
        text: "Delivered as an API wired into your existing system, on your cloud or mine, with documentation and a handover.",
      },
    ],
    faqs: [
      {
        q: "What kinds of documents can you extract data from?",
        a: "Text PDFs, scanned PDFs and images, and structured forms. I have built pipelines for long construction tender documents with tables, units and prices, and for CRA tax forms and contracts. If your documents vary in layout, that is the case these pipelines are designed for.",
      },
      {
        q: "How accurate is AI document extraction?",
        a: "It depends on scan quality, layout variety and how many labeled examples exist. On TenderML, the pipeline reached about 95% end-to-end accuracy, measured on a manual review of about 20 tenders in formats it had not seen in training. We agree a measurement like that up front, on your documents.",
      },
      {
        q: "We only have a few labeled documents. Is that enough?",
        a: "Often, yes. TenderML started with only a few labeled PDFs, so I trained the classifier with semi-supervised learning and paired it with a tree-based extractor that did not depend on fixed layouts.",
      },
      {
        q: "Can it plug into our existing software?",
        a: "Yes. The usual delivery is a FastAPI service your system calls, returning structured JSON. TenderML was deployed this way on AWS EC2 and integrated into the client's existing platform.",
      },
      {
        q: "Do you work under an NDA?",
        a: "Yes. I am happy to sign an NDA before you share any documents, and client data is never reused or shared.",
      },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
