import React from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Comparative Evaluation of Text Similarity Metrics for Enhanced Abstractive Summarization on CNN/DailyMail Corpus",
      journal: "Journal of Computational Biology and Informatics (JCBI)",
      year: "2023",
      type: "Research Paper",
      description: "Investigated and analyzed various text similarity metrics to improve the quality of abstractive summarization on the CNN/DailyMail dataset. The research focused on enhancing the coherence and relevance of generated summaries through advanced similarity measurement techniques.",
      keywords: [
        "Text Similarity Metrics",
        "Abstractive Summarization",
        "Natural Language Processing",
        "CNN/DailyMail Dataset",
        "Deep Learning",
        "Evaluation Metrics"
      ],
      abstract: "This research presents a comprehensive comparative analysis of various text similarity metrics and their impact on abstractive summarization quality. Using the CNN/DailyMail corpus, we evaluated multiple similarity measures including semantic, syntactic, and hybrid approaches to determine their effectiveness in improving summary generation. Our findings demonstrate significant improvements in summary coherence and factual accuracy when incorporating optimized similarity metrics into the summarization pipeline.",
      contributions: [
        "Comprehensive evaluation of text similarity metrics for summarization",
        "Novel approach to integrating similarity measures in abstractive models",
        "Empirical analysis on large-scale CNN/DailyMail dataset",
        "Performance improvements in summary quality and coherence"
      ]
    }
  ];

  return (
    <section id="publications" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Research</p>
          <h2 className="section-title"><span className="gradient-text">Publications</span></h2>
          <p className="section-description">
            Research contributions to the field of Natural Language Processing and Machine Learning.
          </p>
        </div>

        <div className="publications-list">
          {publications.map((publication) => (
            <article key={publication.title} className="card publication-card">
              <div className="card-head">
                <div className="icon-box" aria-hidden="true">
                  <BookOpen size={22} />
                </div>
                <span className="pill pill-accent">{publication.type}</span>
                <span className="meta-item">
                  <Calendar size={14} aria-hidden="true" />
                  {publication.year}
                </span>
              </div>

              <h3 className="publication-title">{publication.title}</h3>
              <p className="publication-journal">
                <span className="card-kicker">Published in</span> {publication.journal}
              </p>

              <p className="card-desc">{publication.description}</p>

              <div className="publication-block">
                <h4 className="block-title">Abstract</h4>
                <p className="card-desc">{publication.abstract}</p>
              </div>

              <div className="publication-block">
                <h4 className="block-title">Key Contributions</h4>
                <ul className="check-list">
                  {publication.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>

              <ul className="chip-list chip-list-sm">
                {publication.keywords.map((keyword) => (
                  <li key={keyword} className="chip">{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
