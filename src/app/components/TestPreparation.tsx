export function TestPreparation() {
  return (
    <section id="test-preparation">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Test preparation</span>
          <h2>Ace your English and admission tests.</h2>
          <p>
            Small-batch classes and one-to-one coaching with mock tests, taught by
            trainers who track your score weekly and focus on your weaker areas.
          </p>
        </div>
        <div className="tgrid reveal">
          <div className="tcard">
            <div className="stars">★★★★★</div>
            <h3>IELTS</h3>
            <p>
              Comprehensive training for all four modules — Listening, Reading,
              Writing, and Speaking. Weekly mock tests with detailed feedback.
            </p>
          </div>
          <div className="tcard">
            <div className="stars">★★★★★</div>
            <h3>PTE</h3>
            <p>
              Personalized preparation for the computer-based academic English
              test with scored practice and targeted skill building.
            </p>
          </div>
          <div className="tcard">
            <div className="stars">★★★★★</div>
            <h3>TOEFL</h3>
            <p>
              Strategies and practice for reading, listening, speaking, and writing
              sections with score improvement techniques.
            </p>
          </div>
        </div>
        <div className="reveal">
          <div className="psteps" style={{ gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
            <div className="pstep">
              <div className="num">1</div>
              <h4>Assessment</h4>
              <p>
                Understand your current level with a diagnostic test.
              </p>
            </div>
            <div className="pstep">
              <div className="num">2</div>
              <h4>Target Setting</h4>
              <p>
                Identify the score you need for your target universities.
              </p>
            </div>
            <div className="pstep">
              <div className="num">3</div>
              <h4>Personalized Prep</h4>
              <p>
                Focus on your weaker areas with customized study plans.
              </p>
            </div>
            <div className="pstep">
              <div className="num">4</div>
              <h4>Practice Tests</h4>
              <p>
                Simulate the real exam experience with timed mock tests.
              </p>
            </div>
          </div>
        </div>
        <div className="reveal">
          <a href="#contact" className="btn btn-gold">
            Explore Test Preparation
          </a>
        </div>
      </div>
    </section>
  );
}