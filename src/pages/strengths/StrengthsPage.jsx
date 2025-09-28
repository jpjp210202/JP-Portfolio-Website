function StrengthsPage() {
  const highlights = [
    "Leadership",
    "Effective Communication",
    "Team Building",
    "Event Management",
    "Punctuality & Discipline",
    "Stress Tolerance",
    "Adaptability",
    "Problem-Solving",
    "Creativity",
    "Collaboration",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
        My Strengths
      </h1>
{/* Strength Highlights */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          🌟 Core Strengths at a Glance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {highlights.map((strength, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 text-center font-medium text-gray-900"
            >
              {strength}
            </div>
          ))}
        </div>
      </div>
      
      {/* Intro Paragraphs */}
      <div className="max-w-4xl mx-auto text-lg leading-relaxed text-justify space-y-6 mb-10">
        <p>
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-lg leading-relaxed text-justify space-y-6 mb-16">
        <p>
          
          I am a <strong>strategic and inspiring leader</strong> with strong{" "}
          <strong>team-building instincts</strong> and exceptional{" "}
          <strong>communication skills</strong>, both written and verbal. Experienced in{" "}
          <strong>organizing events</strong>, <strong>managing teams</strong>, and{" "}
          <strong>speaking confidently in public settings</strong>, I bring the ability to
          guide, motivate, and connect with people across diverse backgrounds.
        </p>

        <p>
          Known for my <strong>punctuality</strong>, <strong>discipline</strong>, and{" "}
          <strong>detail-driven approach</strong>, I thrive in{" "}
          <strong>fast-paced, high-pressure environments</strong> where precision matters.
          I am <strong>self-motivated</strong> with a <strong>growth mindset</strong>,
          consistently learning and adapting to new technologies and challenges. My strengths
          include <strong>stress tolerance</strong>, <strong>time management</strong>, and
          the ability to <strong>multitask effectively</strong> while maintaining quality
          outcomes.
        </p>

        <p>
          I am highly <strong>adaptive</strong> and <strong>proactive</strong>, fostering a{" "}
          <strong>positive, collaborative work culture</strong> that encourages creativity
          and innovation. Beyond these, I am recognized for being{" "}
          <strong>resilient under setbacks</strong>, a <strong>fast learner</strong> with
          strong <strong>technical curiosity</strong>, and someone who blends{" "}
          <strong>analytical problem-solving</strong> with <strong>creative thinking</strong>{" "}
          to deliver real-world solutions.
        </p>

        <p>
          In every setting - academic, industrial, or community - I aim to contribute with{" "}
          <strong>energy</strong>, <strong>vision</strong>, and a{" "}
          <strong>relentless drive for excellence</strong>.
        </p>
      </div>

      
    </div>
  );
}

export default StrengthsPage;
