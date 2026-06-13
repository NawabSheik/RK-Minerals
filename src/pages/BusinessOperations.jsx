import React from "react";
import Brand from "../components/Brand";
import "../styles/BusinessOperations.css";
import Cta from "../components/cta";
import Mining from "../assets/mining.webp";
import Processing from "../assets/processing.webp";
import Quality from "../assets/quality.webp";

const operations = [
  {
    title: "Mining",
    image: Mining,
    points: [
      "Own mining areas in Rajasthan’s pegmatite-rich mineral belt.",
      "Mines selected through geological research for long-term raw material consistency.",
      "Mechanised mining systems for better ore segregation and recovery.",
      "Focus on mineral conservation and maximum usable recovery."
    ],
  },
  {
    title: "Processing",
    image: Processing,
    points: [
      "Advanced mineral processing techniques for consistent product quality.",
      "Silex-lined machines to reduce iron contamination.",
      "High-capacity magnetic separation for white mineral grinding.",
      "Flexible sizing from 0 mesh to 325 mesh powder and 0 mm to 15 mm grains."
    ],
  },
  {
    title: "Quality Control",
    image: Quality,
    points: [
      "Stringent quality checks to meet customer specifications.",
      "R&D support from experienced chemists and technical experts.",
      "Continuous testing for product consistency and performance.",
      "Innovation-focused approach for global quality standards."
    ],
  },
];

const BusinessOperations = () => {
  return (
    <div>
      <Brand />

      <main className="business-operations">
        <section className="business-hero">
          

          <h1 className="business-head">Business Operations</h1>

          <p className="business-one-liner">
            Integrated mining, processing and quality control for reliable mineral supply.
          </p>

          <p className="business-para">
            At RK Minerals, every stage — from mineral extraction to final delivery —
            is handled with precision, responsibility and technical expertise. Our
            operations are designed to ensure consistent quality, dependable supply
            and long-term value for industrial customers.
          </p>
        </section>

        <section className="operations-grid">
          {operations.map((operation, index) => (
            <div className="operation-card" key={index}>
              <div className="operation-image">
                <img src={operation.image} alt={`${operation.title} operations`} />
              </div>

              <div className="operation-content">
                <h2>{operation.title}</h2>

                <ul>
                  {operation.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        

        <Cta />
      </main>
    </div>
  );
};

export default BusinessOperations;