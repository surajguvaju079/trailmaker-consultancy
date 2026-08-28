"use client";

import { useState, useEffect, useRef } from "react";

export function Hero() {
  const [counted, setCounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const counters = [
    { id: "cnt-students", val: 2400, suf: "+" },
    { id: "cnt-countries", val: 8, suf: "" },
    { id: "cnt-rate", val: 96, suf: "%" },
    { id: "s1", val: 11, suf: "+" },
    { id: "s2", val: 60, suf: "+" },
    { id: "s3", val: 850, suf: "+" },
    { id: "s4", val: 14, suf: "" },
  ];

  useEffect(() => {
    if (!heroRef.current) return;

    const heroIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !counted) {
            setCounted(true);
            counters.forEach((c) => {
              const el = document.getElementById(c.id);
              if (el) {
                const start = performance.now();
                function tick(now) {
                  const p = Math.min((now - start) / 1600, 1);
                  const eased = 1 - Math.pow(1 - p, 3);
                  el.textContent = Math.round(eased * c.val) + c.suf;
                  if (p < 1) requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
              }
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    heroIO.observe(heroRef.current);
    return () => heroIO.disconnect();
  }, [counted]);

  useEffect(() => {
    if (counted) return;
    const statsIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            counters.slice(3).forEach((c) => {
              const el = document.getElementById(c.id);
              if (el) {
                const start = performance.now();
                function tick(now) {
                  const p = Math.min((now - start) / 1600, 1);
                  const eased = 1 - Math.pow(1 - p, 3);
                  el.textContent = Math.round(eased * c.val) + c.suf;
                  if (p < 1) requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
              }
            });
            statsIO.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    const statsBar = document.querySelector(".stats-bar");
    if (statsBar) statsIO.observe(statsBar);
    return () => statsIO.disconnect();
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow on-dark">Study Abroad · Since 2014</span>
          <h1>We map the trail<br />to your <em>global</em> future.</h1>
          <p className="lead">
            Trailmaker Consultancy turns which country, which university into
            a clear, walkable path — from counseling and test prep to visa and
            departure, guided every step by advisors who made this trip
            before.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">Book a free consultation</a>
            <a href="#process" className="btn btn-outline">See how it works</a>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <b id="cnt-students">0</b><span>Students placed</span>
            </div>
            <div className="hstat">
              <b id="cnt-countries">0</b><span>Partner countries</span>
            </div>
            <div className="hstat">
              <b id="cnt-rate">0%</b><span>Visa success rate</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <svg
            className="trail-svg"
            viewBox="0 0 420 460"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="trailGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d6274f" />
                <stop offset="35%" stopColor="#f2b807" />
                <stop offset="65%" stopColor="#33a95c" />
                <stop offset="100%" stopColor="#1d9fd8" />
              </linearGradient>
            </defs>
            <path
              className="trail-path"
              d="M40 420 C 100 400, 60 320, 130 300 C 210 278, 190 200, 260 175 C 320 154, 300 90, 370 55"
            />
            <g className="trail-node">
              <circle cx="40" cy="420" r="17" fill="#d6274f" />
              <circle className="ring" cx="40" cy="420" r="24" />
              <text x="40" y="424" textAnchor="middle">NP</text>
              <text className="trail-label" x="66" y="424">
                Home & counseling
              </text>
            </g>
            <g className="trail-node">
              <circle cx="130" cy="300" r="17" fill="#f2b807" />
              <circle className="ring" cx="130" cy="300" r="24" />
              <text x="130" y="304" textAnchor="middle">TP</text>
              <text className="trail-label" x="156" y="304">Test prep</text>
            </g>
            <g className="trail-node">
              <circle cx="260" cy="175" r="17" fill="#33a95c" />
              <circle className="ring" cx="260" cy="175" r="24" />
              <text x="260" y="179" textAnchor="middle">AP</text>
              <text className="trail-label" x="286" y="179">Application</text>
            </g>
            <g className="trail-node">
              <circle cx="370" cy="55" r="19" fill="#1d9fd8" />
              <circle className="ring" cx="370" cy="55" r="27" />
              <text x="370" y="60" textAnchor="middle" style={{ fontSize: "12px" }}>
                ✈
              </text>
            </g>
            <text className="trail-label" x="300" y="30" style={{ fontWeight: 700 }}>
              Destination
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}