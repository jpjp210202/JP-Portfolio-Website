function WorkshopsCertificationsPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Workshops & Certifications
      </h1>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Workshops */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">🛠 Hands-on Workshops</h2>
          <p className="mb-6 text-lg leading-relaxed">
            I actively participated in a variety of technical workshops that provided 
            <strong> practical, hands-on learning experiences</strong>. These covered 
            IoT, automation, robotics, and AI across leading institutes like RIT, NIT, and IIT.  
            Each workshop contributed to building a strong foundation in <strong>industrial applications</strong> 
            and <strong>cutting-edge technologies</strong>.
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Industrial IoT and Automation Workshop</strong> – 
              Ramaiah Institute of Technology, organized by Epson India (2 days).  
              <br />Explored industrial IoT systems, sensor networks, and automation workflows 
              used in modern manufacturing.
            </li>
            <li>
              <strong>Symphony Arduino Workshop & Hackathon</strong> – 
              BMSIT, Yelahanka.  
              <br />Hands-on experience in Arduino prototyping, rapid problem-solving, 
              and hackathon-style implementation.
            </li>
            <li>
              <strong>Women Empowerment Cell & Internal Complaint Committee</strong> – 
              BMSIT, Yelahanka.  
              <br />Engaged in discussions on professional ethics, workplace safety, 
              and creating inclusive academic environments.
            </li>
            <li>
              <strong>Industry 4.0 Online Workshop</strong> – 
              Organized by Rexroth Bosch (Oct 2018).  
              <br />Learned about cyber-physical systems, smart factories, 
              and the integration of IoT, robotics, and AI in industry.
            </li>
            <li>
              <strong>Robotics & Quadcopter Development Workshop</strong> – 
              National Institute of Technology, Tiruchirappalli (4 days).  
              <br />Designed and tested robotic systems and quadcopters, gaining exposure 
              to mechanical design, electronics, and embedded programming.
            </li>
            <li>
              <strong>Artificial Intelligence with Machine Learning Workshop</strong> – 
              Indian Institute of Technology, Madras (4 days).  
              <br />Covered supervised/unsupervised learning, deep learning fundamentals, 
              and practical model-building in AI.
            </li>
            <li>
              <strong>Robotics with AI Online Workshop</strong> – 
              BMSIT&M (1 week, June 2021).  
              <br />Implemented robotics projects with AI algorithms, enhancing 
              decision-making and autonomous navigation.
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">🎓 Online Courses & Certifications</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Alongside workshops, I pursued <strong>structured online certifications</strong> 
            to strengthen my programming, analytical, and technical foundation.  
            These courses span <strong>programming languages, AI, data science, IoT, 
            and professional tools</strong>.
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>C & C++ Programming:</strong> Built strong fundamentals in programming, 
              algorithms, and data structures.
            </li>
            <li>
              <strong>Python and Machine Learning:</strong> Applied in real projects 
              including sarcasm detection, fruit detection, and weld defect classification.
            </li>
            <li>
              <strong>MATLAB:</strong> Used for modeling, simulation, and robotics control experiments.
            </li>
            <li>
              <strong>SAP:</strong> Exposure to industrial resource management workflows 
              during coursework and at JSW Steel.
            </li>
            <li>
              <strong>Excel & Power BI:</strong> Data analysis, visualization, and 
              dashboarding for IoT monitoring projects.
            </li>
            <li>
              <strong>ROS 1 & ROS 2 (ongoing):</strong> Installed and applied for 
              JetBot, UR3e manipulator, and simulation projects.
            </li>
            <li>
              <strong>Introduction to Virtual Reality – Coursera:</strong> Basics of VR systems, 
              hardware, and immersive applications.
            </li>
            <li>
              <strong>Blockchain Basics – Coursera:</strong> Understood distributed ledgers, 
              cryptography, and decentralized networks.
            </li>
            <li>
              <strong>Introduction to Big Data:</strong> Covered frameworks, 
              analytics, and data-driven decision making.
            </li>
            <li>
              <strong>Basics of Artificial Intelligence:</strong> Fundamentals 
              of search algorithms, AI agents, and logic programming.
            </li>
            <li>
              <strong>Environmental Engineering:</strong> Awareness of sustainability, 
              pollution control, and eco-friendly practices.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default WorkshopsCertificationsPage;
