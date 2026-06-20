const blocks = [
  {
    num: "01",
    title: "Handcrafted Coffee",
    body: "Every cup is prepared by hand by experienced baristas. Precision, patience and passion in every pour.",
  },
  {
    num: "02",
    title: "Locally Roasted Beans",
    body: "Freshly roasted beans sourced from ethical farms, bringing out rich aroma and exceptional flavor.",
  },
  {
    num: "03",
    title: "Fresh Bakery Daily",
    body: "Every pastry is baked fresh each morning to perfectly complement your favorite coffee.",
  },
  {
    num: "04",
    title: "Luxury Interiors",
    body: "Minimal design, warm lighting and handcrafted furniture create an unforgettable atmosphere.",
  },
  {
    num: "05",
    title: "Community Events",
    body: "Coffee tastings, live music evenings and creative workshops that bring people together.",
  },
  {
    num: "06",
    title: "Slow Living Philosophy",
    body: "We believe great coffee deserves time. Sit down, disconnect and enjoy every sip.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <p className="section-eyebrow reveal">Why Choose Velvet Brew</p>

          <h2 className="section-headline reveal reveal-delay-1">
            More than coffee.
            <br />
            <em>An experience.</em>
          </h2>

          <p
            className="story-body reveal reveal-delay-2"
            style={{
              maxWidth: "650px",
              margin: "30px auto 0",
            }}
          >
            Every detail has been designed to create moments worth slowing down
            for—from the beans we roast to the atmosphere you remember long
            after your last sip.
          </p>
        </div>

        <div className="experience-grid">
          {blocks.map((b) => (
            <div className="experience-block reveal" key={b.num}>
              <span className="exp-bg-number">{b.num}</span>

              <div className="exp-line"></div>

              <h3 className="exp-title">{b.title}</h3>

              <p className="exp-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}