function TechnicalSkillsPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Technical Skills & Expertise
      </h1>

      {/* Intro Summary */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg leading-relaxed">
          Over the course of my academic and industrial journey, I have built a 
          strong foundation in <strong>programming, AI, robotics, automation, and IoT</strong>. 
          My experience spans from <strong>developing deep learning models</strong> to 
          <strong> deploying them on edge devices</strong>, and from <strong>working with 
          collaborative robots</strong> to <strong>building custom IoT solutions</strong>. 
          Each skill has been applied in live projects, internships, and research, 
          ensuring hands-on proficiency.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Core Technical Competencies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            🌟 Core Technical Competencies
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Programming:</strong> Proficient in Python, C, and C++ with 
              extensive use in AI/ML projects and embedded systems.
            </li>
            <li>
              <strong>Deep Learning & AI:</strong> Skilled in TensorFlow, PyTorch, 
              and ONNX for model training and edge deployment.
            </li>
            <li>
              <strong>Computer Vision:</strong> Experienced with OpenCV, YOLOv8, 
              and calibration techniques for robotics applications.
            </li>
            <li>
              <strong>Robotics Platforms:</strong> Practical expertise with Arduino, 
              ESP32, Raspberry Pi, Jetson Nano, ROS 1 & 2.
            </li>
            <li>
              <strong>Automation & Control:</strong> Knowledge of VFD drives, PLC basics, 
              PID control, and industrial IoT systems.
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Skilled in GitHub, Jupyter, RoboDK, 
              Power BI, Simulink, and SAP.
            </li>
          </ul>
        </section>

        {/* Programming & AI */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            💻 Programming & AI
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Python:</strong> Core language for robotics and AI projects 
              (fruit detection robot, sarcasm detection, weld defect classifier).
            </li>
            <li>
              <strong>C & C++:</strong> Applied in embedded programming and algorithm design.  
            </li>
            <li>
              <strong>MATLAB & Simulink:</strong> Used for simulations in control 
              systems coursework and modeling.  
            </li>
            <li>
              <strong>TensorFlow & PyTorch:</strong> Implemented 1D CNN instrument classifier 
              and YOLOv8 object detection projects.  
            </li>
            <li>
              <strong>ONNX Runtime:</strong> Deployed optimized AI models on Raspberry Pi 
              and Jetson Nano for real-time inference.  
            </li>
            <li>
              <strong>OpenCV, NumPy, Pandas, Scikit-learn:</strong> Core libraries for 
              computer vision, dataset handling, and ML pipelines.  
            </li>
          </ul>
        </section>

        {/* Robotics & Platforms */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            🤖 Robotics & Platforms
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Arduino & ESP32:</strong> Built IoT projects such as smart 
              utility monitor, Bluetooth follower rover, and gesture-controlled wheelchair.
            </li>
            <li>
              <strong>Raspberry Pi 4:</strong> Applied in AI-powered firefighting robot 
              and IoT-based image capture systems.
            </li>
            <li>
              <strong>NVIDIA Jetson Nano:</strong> Deployed YOLOv8 fruit detection 
              integrated with robot movement and Flask streaming.
            </li>
            <li>
              <strong>ROS 1 & ROS 2 (Humble):</strong> Installed and applied for JetBot, 
              UR3e manipulator path planning, and turtlesim projects.
            </li>
            <li>
              <strong>RoboDK & Roboguide:</strong> Used for Doosan hand–eye calibration 
              simulation and FANUC training.
            </li>
            <li>
              <strong>MoveIt & Gazebo:</strong> Simulated manipulator control and 
              navigation experiments.
            </li>
          </ul>
        </section>

        {/* Automation & Control */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-700">
            ⚙️ Automation & Control
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Electric VFD Drives:</strong> Commissioned and maintained ABB, Siemens, 
              and Schneider drives in 30–300 ton EOT cranes at JSW Steel.
            </li>
            <li>
              <strong>PLC Basics:</strong> Exposure during POWERGRID internships 
              and automation coursework.
            </li>
            <li>
              <strong>PID Control:</strong> Implemented for line-following robots 
              and IoT-based control simulations.
            </li>
            <li>
              <strong>SCADA & RTAMC:</strong> Experienced during POWERGRID internship 
              in Bengaluru substations.
            </li>
            <li>
              <strong>Sensor Integration:</strong> Practical use of ultrasonic sensors, 
              IMUs, flow/current sensors, and thermal cameras across projects.
            </li>
          </ul>
        </section>

        {/* Tools & Platforms */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">
            🛠 Tools & Platforms
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>SAP:</strong> Used for industrial procurement and maintenance 
              workflows at JSW Steel.
            </li>
            <li>
              <strong>Excel, Excel Online & Power BI:</strong> Data analysis and 
              visualization for IoT utility monitoring projects.
            </li>
            <li>
              <strong>Git & GitHub:</strong> Maintained version control for robotics, AI, 
              and website projects.
            </li>
            <li>
              <strong>Jupyter Notebook:</strong> Used for ML experiments, calibration, 
              and JetBot programming.
            </li>
            <li>
              <strong>Vercel & React:</strong> Built and deployed personal portfolio website 
              with integrated AI chatbot.
            </li>
          </ul>
        </section>

        {/* Concepts & Technologies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
            📚 Concepts & Technologies
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Machine Learning & Deep Learning:</strong> Applied across multiple 
              projects including sarcasm detection, weld defect detection, and 
              instrument classification.
            </li>
            <li>
              <strong>Computer Vision:</strong> Core in fruit detection, bolt–nut sorting, 
              and fire detection systems.
            </li>
            <li>
              <strong>SLAM & Navigation:</strong> Implemented for ESP32 rover and JetBot 
              obstacle avoidance.
            </li>
            <li>
              <strong>IoT Protocols (MQTT, HTTP):</strong> Used in real-time water & 
              electricity monitoring system.
            </li>
            <li>
              <strong>Generative Design:</strong> Explored for research in sustainable 
              robotics, published at ICMRACC 2025.
            </li>
            <li>
              <strong>Digital Twin:</strong> Applied using RoboDK and ROS simulations 
              for robot verification.
            </li>
          </ul>
        </section>

        {/* Certifications
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            🎓 Courses & Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Introduction to Virtual Reality – Coursera</li>
            <li>Blockchain Basics – Coursera</li>
            <li>Big Data – NPTEL</li>
            <li>Basics of AI & ML – NPTEL</li>
            <li>Environmental Engineering – NPTEL</li>
            <li>Ongoing certifications in ROS, Cloud IoT, and Computer Vision</li>
          </ul>
        </section> */}
      </div>
    </div>
  );
}

export default TechnicalSkillsPage;
