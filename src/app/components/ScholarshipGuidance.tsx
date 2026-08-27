export function ScholarshipGuidance() {
  return (
    <section id="scholarships">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Scholarship guidance</h2>
          <p>
            We help you identify and apply for merit-based scholarships and tuition
            discounts from universities worldwide.
          </p>
        </div>
        <div className="reveal">
          <div className="psteps" style={{ gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
            <div className="pstep">
              <div className="num">1</div>
              <h4>Assessment</h4>
              <p>
                Identify scholarships you qualify for based on your profile.
              </p>
            </div>
            <div className="pstep">
              <div className="num">2</div>
              <h4>Application</h4>
              <p>
                Guidance on scholarship essays and required documents.
              </p>
            </div>
            <div className="pstep">
              <div className="num">3</div>
              <h4>Submission</h4>
              <p>
                Support with application and follow-up with university offices.
              </p>
            </div>
          </div>
        </div>
        <div className="reveal">
          <a href="#contact" className="btn btn-gold">
            Explore Scholarship Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}