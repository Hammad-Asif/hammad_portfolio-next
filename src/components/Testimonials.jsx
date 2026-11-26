import { FaStar } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

const testimonials = [
  {
    name: "Jake H.",
    location: "Panama",
    gig: "Python & Data Scraping",
    repeat: true,
    quote: "I would like to express my utmost appreciation for Muhammad's exceptional skills as a Python developer. His deep understanding, dedication and professionalism has resulted in remarkable outcomes. I wholeheartedly recommend him to anyone seeking a skilled professional who can consistently deliver exceptional results."
  },
  {
    name: "Genesis P.",
    location: "United States",
    gig: "Data Scraping",
    repeat: true,
    quote: "Outstanding developer. This guy is awesome to work with. Once he understands what you need, your job will be done. I will always work with him and his team."
  },
  {
    name: "Evade C.",
    location: "United States",
    gig: "Custom Web Development",
    repeat: true,
    quote: "Always great communication when an obstacle arises. He provides great feedback and insights to all my questions. Overall, I'm happy with my choice to work with him on my project."
  },
  {
    name: "Muhammad M.",
    location: "Pakistan",
    gig: "Full Stack Web Application",
    repeat: false,
    quote: "It was my pleasure working with Hammad. He promptly understood the requirements and completed implementation ahead of time. He incorporated extra changes not previously mentioned and delivered the best possible results."
  },
  {
    name: "Amber S.",
    location: "United States",
    gig: "Data Scraping",
    repeat: true,
    quote: "It was a great experience once again. He was very knowledgeable with the code and knew exactly what he was doing. I will use him again — definitely recommend."
  },
  {
    name: "Aaron N.",
    location: "United States",
    gig: "Data Scraping",
    repeat: false,
    quote: "I am extremely impressed with the level of service and the quality of the work I received. The expertise, professionalism, and attention to detail were outstanding. Highly recommended."
  }
];

const Stars = () => (
  <span className="stars" role="img" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => <FaStar key={i} aria-hidden="true" />)}
  </span>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Client feedback</p>
          <h2 className="section-title">What clients say</h2>
          <p className="section-description">
            International clients across the US, Panama, and South Asia — several returning for multiple projects.
          </p>

          <dl className="testimonial-stats">
            <div>
              <dt>Avg rating</dt>
              <dd>5.0 <Stars /></dd>
            </div>
            <div>
              <dt>Projects delivered</dt>
              <dd>25+</dd>
            </div>
            <div>
              <dt>Repeat clients</dt>
              <dd>8+</dd>
            </div>
          </dl>
        </div>

        <div className="card-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="card testimonial-card">
              <div className="testimonial-top">
                <Stars />
                {t.repeat && (
                  <span className="pill pill-accent">
                    <FiRepeat aria-hidden="true" /> Repeat client
                  </span>
                )}
              </div>

              <blockquote className="testimonial-quote">
                <p>{t.quote}</p>
              </blockquote>

              <figcaption className="testimonial-author">
                <span className="avatar-initial" aria-hidden="true">{t.name.charAt(0)}</span>
                <span>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-meta">{t.location} · {t.gig}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
