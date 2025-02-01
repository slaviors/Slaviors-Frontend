import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-brn to-softBrn relative h-screen lg:h-auto">
      {/* Background Effect Top */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#100c07] to-[#cac9cd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl font-bold text-crm sm:text-6xl lg:text-7xl">
                Create Future, with &nbsp;
                <span className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-softBrn"></span>
                  <span className="relative text-4xl font-bold text-whiteCream sm:text-6xl lg:text-7xl">
                    Slaviors.
                  </span>
                </span>
              </h1>

              <p className="mt-8 text-base text-whiteCream sm:text-xl">
                Slaviors is a passionate team of developers dedicated to
                building cutting-edge digital solutions. What started as a group
                of competitive programming enthusiasts has evolved into a
                company focused on web development, chatbot development, and
                UI/UX design.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-brn transition-all duration-200 bg-crm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crm rounded-lg"
                  role="button"
                >
                  Start exploring
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Effect Bottom */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#000000] to-[#cac9cd] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
