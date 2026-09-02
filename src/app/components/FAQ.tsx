"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What services does Trailmaker Consultancy provide?",
    a: (
      <>
        Trailmaker helps students navigate the study-abroad journey, including
        one-on-one counseling, university and application guidance, test
        preparation, visa guidance, scholarship guidance, and pre-departure
        support. Each stage is supported so nothing slips between the
        counseling and departure.
      </>
    ),
  },
  {
    q: "Which countries can I apply to through Trailmaker?",
    a: (
      <>
        Trailmaker currently features destinations including Australia, the
        United Kingdom, Canada, the United States, Japan, and South Korea.
        Destinations are reviewed and updated based on current opportunities,
        and your counselor can discuss options beyond the featured list.
      </>
    ),
  },
  {
    q: "Do I need IELTS or another English language test?",
    a: (
      <>
        Requirements vary depending on the institution, program, and country.
        Trailmaker can guide you regarding applicable test requirements and
        preparation options for tests such as IELTS, PTE, and TOEFL. No
        guarantee is made that a specific test will or will not be required.
      </>
    ),
  },
  {
    q: "Can Trailmaker help me find scholarships?",
    a: (
      <>
        Trailmaker can provide guidance on identifying scholarship
        opportunities and preparing applications where applicable. Outcomes
        depend on each student s profile and the institutions involved.
      </>
    ),
  },
  {
    q: "Do you help with visa applications?",
    a: (
      <>
        Trailmaker provides visa guidance, document checking, and interview
        preparation as part of the application support. Visa outcomes depend on
        each student s circumstances and the requirements of the relevant
        authorities.
      </>
    ),
  },
  {
    q: "What happens after I receive my visa?",
    a: (
      <>
        Trailmaker offers pre-departure support including accommodation
        guidance, banking information, insurance guidance, documentation
        checklists, and departure preparation to help you settle in.
      </>
    ),
  },
  {
    q: "How do I start my study-abroad journey?",
    a: (
      <>
        The first step is a free consultation. Fill in the consultation form
        on this page, and a Trailmaker counselor will get in touch with you to
        map out your trail.
      </>
    ),
  },
  {
    q: "How can I contact Trailmaker Consultancy?",
    a: (
      <>
        <strong>Banepa, Chandanichowk, Kavre, Nepal</strong>
        <br />
        Phone: 011-664371 / 011-665623
        <br />
        Email:{" "}
        <a href="mailto:banepatrailmaker@gmail.com">
          banepatrailmaker@gmail.com
        </a>
        {" "}
        <a href="mailto:info@trailmakerchadanichowk.com.np">
          info@trailmakerchadanichowk.com.np
        </a>

      </>
    ),
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIdx((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered before you ask.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div className="faq-item" key={i}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={isOpen ? "faq-answer open" : "faq-answer"}
                  aria-hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
