import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Scalabale",
  "Responsive",
  "User-Friendly",
  "Search Optimized",
  "Accessible",
  "Secure",
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Next",
  "Webflow",
  "WordPress",
];

export const TapeSection = () => {
  return (
    <div className="py-12 lg:py-24 overflow-x-clip">
      {/* Tape 1 */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 -rotate-0 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-6 animate-move-left [animation-duration:30s]">
            {[...new Array(3)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-8 items-center">
                    <span className="uppercase font-semibold text-md">
                      {word}
                    </span>
                    <StarIcon className="size-6 -rotate-8" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Tape 2 */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 -rotate-0 -mx-1 mt-2">
        <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex flex-none gap-4 py-6 animate-move-right [animation-duration:30s]">
            {[...new Array(3)].fill(0).map((_, idx2) => (
              <Fragment key={idx2}>
                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="inline-flex gap-8 items-center"
                  >
                    <span className="uppercase font-semibold text-md">
                      {technology}
                    </span>
                    <StarIcon className="size-6 -rotate-8" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
