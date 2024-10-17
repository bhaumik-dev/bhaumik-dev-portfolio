import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-12 pt-10 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-purple-700 py-14 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-12">
            <div>
              <h2 className="font-serif font-semibold text-2xl text-white md:text-2xl">
                Leave Your Website Worries to Me - I'll Take Care of Everything!
              </h2>
              <p className="text-sm mt-3 text-white max-w-3xl mx-auto md:text-base md:w-full">
                I specialize in building conversion-driven websites that are
                fast, responsive, and scale with your business. Relax and focus
                on what you do best while I expertly handle all your website
                needs.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-6 w-max">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
