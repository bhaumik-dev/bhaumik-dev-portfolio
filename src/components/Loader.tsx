// components/Loader.tsx
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // GSAP Tween for a simple counter from 0 to 100
    gsap.to(
      {},
      {
        duration: 3, // Duration of the loading animation
        onUpdate: function () {
          setProgress(Math.floor(this.progress() * 100)); // Update progress
        },
        onComplete: () => {
          // Optional: Add code to hide loader and show content after loading completes
          document.getElementById("loader")?.classList.add(styles.hide);
        },
      }
    );
  }, []);

  return (
    <div id="loader" className={styles.loaderContainer}>
      <div className={styles.loaderText}>{progress}%</div>
    </div>
  );
};

export default Loader;
