import React from "react";

/* Example education data */
const educationData = [
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "National University",
    duration: "2016 - 2020",
    details:
      "Focused on advanced mathematical concepts, problem-solving, and analytical reasoning, with coursework in Algebra, Calculus, Statistics, and Applied Mathematics.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "PC College, Bagerhat",
    duration: "2013 - 2015",
    details:
      "Completed HSC with Science major, focusing on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bhurulia Nagbati High School",
    duration: "2014 - 2016",
    details: "Completed SSC with Science major.",
  },
];

const EducationalQualification = () => {
  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="md:py-16 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Educational Qualification
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2 mb-10 max-w-2xl mx-auto">
          Overview of my academic journey and qualifications above HSC.
        </p>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData
            .filter(
              (edu) => edu.degree !== "Secondary School Certificate (SSC)"
            ) // Skip below HSC
            .map((edu, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1 font-medium">
                  {edu.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-1 italic">
                  {edu.duration}
                </p>
                {edu.details && (
                  <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalQualification;
