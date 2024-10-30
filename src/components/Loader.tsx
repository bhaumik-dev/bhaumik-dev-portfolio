// components/Loader.tsx
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.to(
      {},
      {
        duration: 3,
        onUpdate: function () {
          setProgress(Math.floor(this.progress() * 100));
        },
        onComplete: () => {
          document.getElementById("loader")?.classList.add(styles.hide);
        },
      }
    );
  }, []);

  // Array for repeated text
  const marqueeText = Array(20).fill("Frontend Development");
  const marqueeText2 = Array(20).fill("No-Code Development");

  return (
    <div id="loader" className={styles.loaderContainer}>
      <div className={styles.marquee}>
        <div className={styles.marqueeText}>
          {marqueeText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <div className={styles.loaderText}>{progress}%</div>
      <div className={styles.marquee2}>
        <div className={styles.marqueeText2}>
          {marqueeText2.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
