// === FILE: src/pages/AboutPage.jsx ===
function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-8 space-y-6">
      {/* Name */}
      <h1
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 tracking-wide text-gray-800"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        - J P Jaipuneeth -
      </h1>

      {/* Basic Info */}
      <p className="text-center text-lg text-gray-700">
        Male | 25 Years | Bangalore, India
      </p>
      <p className="text-center text-lg text-gray-700 mb-2">
        (+91) 9448311130 | jaipuneeth.official@gmail.com
      </p>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a
          href="https://www.linkedin.com/in/jpjaipuneeth"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/jpjp210202"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://www.youtube.com/@jpexclusive7916"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
        >
          ▶ YouTube
        </a>
        <a
          href="https://wa.me/919448311130"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
        >
          💬 WhatsApp
        </a>
        <a
          href="mailto:jaipuneeth.official@gmail.com"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
        >
          📧 Email
        </a>
      </div>

      {/* Narrative */}
      <div className="max-w-5xl mx-auto text-lg leading-relaxed space-y-10">
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold mb-3">👤 Professional Summary</h2>
          <p>
            I am a postgraduate student pursuing <b>Robotics and Artificial
            Intelligence</b> at Ramaiah Institute of Technology, Bangalore.
            Curiosity for intelligent systems and automation drives me to blend{" "}
            <b>AI with hardware</b> to create real-world solutions. I am deeply
            motivated, eager to learn, and committed to lifelong growth in
            technology and innovation.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🎓 Education</h2>
          <p>
            My academic journey began with a <b>B.E. in Electrical and
            Electronics Engineering</b> at BMS Institute of Technology and
            Management, Bangalore, where I graduated with a CGPA of <b>8.33</b>.
            During this time, I worked on projects like a line-following
            firefighting robot and a gesture-based wheelchair, which sparked my
            passion for robotics.
          </p>
          <p>
            Currently, I am pursuing my <b>M.Tech in Robotics and AI</b> at
            Ramaiah Institute of Technology, where I secured a CGPA of{" "}
            <b>9.59</b> in my first semester. This program continues to refine
            my expertise in machine learning, embedded systems, and intelligent
            automation.
          </p>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-3">💼 Work Experience</h2>
          <p>
            From 2022 to 2025, I worked at <b>JSW Steel, Vijayanagar</b>. My
            role gave me hands-on exposure to industrial automation, drives, and
            leadership. I led a team of fourteen engineers to assemble and
            commission a 35-ton grab-type EOT crane, ensuring a zero-delay
            startup.
          </p>
          <p>
            By automating workflows with <b>SAP, Excel, and Power BI</b>, I cut
            manual effort by 60% and built dashboards for real-time monitoring.
            My contributions reduced crane downtime from five hours a week to
            less than half an hour. For these achievements, I was honored with
            an <b>Exemplary Award</b> and earned{" "}
            <b>fast-track probation clearance</b>.
          </p>
          <p>
            My time at JSW also included representing the company at the{" "}
            <b>G20 Summit in Hampi</b> and during Silver Jubilee celebrations,
            where I took on leadership roles beyond technical contributions.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🚀 Projects</h2>
          <p>
            My projects reflect a balance between AI and hardware innovation.
            Some highlights include:
          </p>
          <p>
            An AI-powered firefighting robot with Raspberry Pi for real-time
            fire detection and adaptive extinguishing, a fruit detection robot
            using Jetson Nano and YOLOv8, an ESP32-based rover that follows a
            smartphone via BLE tracking, and weld defect detection systems
            running on Jetson Nano. I have also worked on smart utility
            monitoring with ESP32 and SIM800C, pathfinding simulators using ACO,
            and renewable energy solutions like flexible DSSC solar cells.
          </p>
        </section>

        {/* Research */}
        <section>
          <h2 className="text-2xl font-bold mb-3">📑 Publications & Research</h2>
          <p>
            My academic journey has been enriched by research and
            publications. I have presented and published papers on topics such
            as <i>Generative Design in Robotics</i>,{" "}
            <i>Sarcasm Detection in Conversational Contexts</i>, and{" "}
            <i>IoT-based Utility Monitoring</i>. Ongoing work includes{" "}
            <i>Weld Defect Detection using YOLOv8</i>. These experiences have
            allowed me to connect academic learning with practical innovation.
          </p>
        </section>

        {/* Internships */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🎯 Internships</h2>
          <p>
            My internships at <b>POWERGRID Corporation of India</b> gave me
            exposure to large-scale electrical systems, from GIS and AIS
            substations in Bangalore to 765kV substations in Bhuj. Alongside,
            I participated in MyCaptain programs that sharpened my leadership
            and communication skills.
          </p>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🌟 Leadership & Volunteering</h2>
          <p>
            I have always valued leadership and service. From being a class
            representative in both undergraduate and postgraduate studies to
            serving as a student head in Civil Defence, I have actively sought
            roles that bring people together. I also volunteered during the
            COVID curfew and national elections, hosted technical fests, and led
            cultural events. Football captaincy, composing my school anthem, and
            organizing events have shaped my collaborative spirit.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🛠 Skills</h2>
          <p>
            My technical skills span across multiple domains: programming in C,
            C++, Python, and MATLAB; robotics with Arduino, Raspberry Pi, Jetson
            Nano, ESP32, and ROS; automation using embedded systems, VFD drives,
            and PID control; and tools such as SAP, Excel, Power BI, and
            Simulink. I continue to strengthen my expertise in machine learning,
            computer vision, and IoT.
          </p>
        </section>

        {/* Hobbies */}
        <section>
          <h2 className="text-2xl font-bold mb-3">🎨 Hobbies & Interests</h2>
          <p>
            Outside academics and work, I am passionate about travelling and
            solo biking. Football remains my favorite sport, and sketching,
            playing the keyboard, and cooking give me creative outlets. I enjoy
            vlogging, exploring nature, reading novels, and playing chess for
            its strategy. These interests balance my professional life with
            creativity and exploration.
          </p>
        </section>

        {/* Closing */}
        <p className="font-semibold text-center text-xl mt-10">
          In short, I am an engineer, researcher, and leader who is passionate
          about bringing <b>AI-driven intelligence</b> into{" "}
          <b>real-world systems</b>, while staying grounded in creativity,
          teamwork, and lifelong learning.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
