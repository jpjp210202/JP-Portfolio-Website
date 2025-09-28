function ProfessionalSkillsPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Professional Skills & Achievements
      </h1>

      {/* Intro Summary */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg leading-relaxed">
          My journey reflects a balance of <strong>technical depth</strong> with 
          <strong> leadership, communication, and service</strong>. 
          From being elected as a <strong>Class Representative</strong> multiple times, 
          to serving as a <strong>Special Police Officer</strong> during critical 
          events, and leading <strong>volunteering efforts at national and institute levels</strong>, 
          I have developed strong professional values. Alongside, achievements in 
          <strong> sports, cultural roles, and community clubs</strong> highlight my 
          adaptability, creativity, and teamwork.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Core Competencies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            🌟 Core Professional Competencies
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Communication:</strong> Delivered technical presentations and authored 
              IEEE research papers; hosted events such as UTSAHA Tech Fest.
            </li>
            <li>
              <strong>Teamwork:</strong> Collaborated with peers, faculty, and industry mentors 
              (CMTI, JSW, POWERGRID) in interdisciplinary robotics and AI projects.
            </li>
            <li>
              <strong>Leadership:</strong> Class Representative (M.Tech, RIT) and Board of Governors 
              Student Rep (BMSIT EEE), representing students at institutional level.
            </li>
            <li>
              <strong>Problem-Solving:</strong> Hands-on troubleshooting of robotic systems, 
              calibration errors, and embedded hardware issues.
            </li>
            <li>
              <strong>Adaptability:</strong> Quickly adopted ROS 2, YOLOv8, Flask, ONNX, and 
              cloud deployment tools, applying them directly in live projects.
            </li>
            <li>
              <strong>Project Management:</strong> Balanced coursework, research publications, 
              and project deadlines with successful outcomes.
            </li>
            <li>
              <strong>Interpersonal Skills:</strong> Built networks across academic, industrial, 
              and government platforms through volunteering and ambassador roles.
            </li>
          </ul>
        </section>

        {/* Leadership Roles */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">🔧 Leadership Roles</h2>
          <div className="space-y-3">
            <p>
              • <strong>Class Representative:</strong> Represented M.Tech Robotics & AI (current) 
              and BMSIT EEE for 4 consecutive years (2018–22), ensuring smooth academic 
              coordination and student–faculty engagement.
            </p>
            <p>
              • <strong>Board of Governors Student Representative:</strong> Advocated for 
              student interests at the institutional governance level (2019–22).
            </p>
            <p>
              • <strong>Civil Defence College Student Head:</strong> Led the North East Bangalore 
              Division, promoting safety, awareness, and discipline initiatives.
            </p>
            <p>
              • <strong>Special Police Officer:</strong> Served during the COVID-19 Curfew (2021) 
              and Lok Sabha Elections (2019, Yelahanka Constituency), entrusted with 
              public safety responsibilities.
            </p>
          </div>
        </section>

        {/* Volunteering */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">🤝 Volunteering & Ambassadorship</h2>
          <div className="space-y-3">
            <p>
              • <strong>Lead Volunteer:</strong> Contributed to the <strong>G20 Summit at Hampi</strong> 
              and <strong>Silver Jubilee Celebrations at JSW Steel</strong> in 2023, supporting 
              large-scale event management and coordination.
            </p>
            <p>
              • <strong>Student Ambassador:</strong> Represented BMSIT CONNECT and MyCaptain (2021), 
              promoting academic outreach and peer engagement programs.
            </p>
            <p>
              • <strong>NSS Volunteer:</strong> Actively participated in social initiatives, campus 
              drives, and community engagement activities.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-700">🏆 Achievements & Recognition</h2>
          <div className="space-y-3">
            <p>
              • <strong>Winner:</strong> NatShot Videography Competition (2022), 
              showcasing creativity and storytelling ability.
            </p>
            <p>
              • <strong>Composer:</strong> Created the <strong>Official School Anthem</strong> (2016–17), 
              blending musical skills with leadership.
            </p>
            <p>
              • <strong>School Captain:</strong> Held the highest leadership role (2014–15), 
              managing school activities and cultural events.
            </p>
          </div>
        </section>

        {/* Clubs & Community */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">🌍 Clubs & Community Engagement</h2>
          <div className="space-y-3">
            <p>
              • <strong>Eco Club Lead</strong> and <strong>Swachh Bharat Drive Representative</strong>, 
              BMSIT – led initiatives promoting sustainability and cleanliness.
            </p>
            <p>
              • Member of <strong>IEEE Student Branch</strong> and <strong>TERI Club</strong>, 
              Yelahanka – contributed to technical and environmental initiatives.
            </p>
          </div>
        </section>

        {/* Sports & Extracurriculars */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">⚽ Sports & Extracurriculars</h2>
          <div className="space-y-3">
            <p>
              • <strong>Football Team Captain:</strong> Striker & Captain, Bangalore Football Club 
              (BFC Youth, 2016), developing teamwork and leadership under pressure.
            </p>
            <p>
              • <strong>Host & Emcee:</strong> Led cultural events including UTSAHA Tech Fest 
              (BMSIT, 2018–19), gaining confidence in stage management.
            </p>
            <p>
              • Represented in multiple <strong>sports, cultural, and creative events</strong> 
              across school and college, enhancing versatility.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfessionalSkillsPage;
