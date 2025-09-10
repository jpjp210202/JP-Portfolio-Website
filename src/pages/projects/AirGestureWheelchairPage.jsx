function AirGestureWheelchairPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Air Gesture Controlled Wheelchair | Arduino | MATLAB Grids
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project presents an <strong>Air Gesture Controlled Wheelchair</strong> 
          that enables physically challenged users to control wheelchair movement 
          without physical contact, using hand gestures as the primary input. The 
          system integrates Arduino-based hardware with MATLAB’s real-time image 
          processing to interpret finger positions on a virtual control grid. Each 
          grid cell corresponds to a unique wheelchair motion command.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Core Concept</h2>
        <p>
          A webcam captures the user’s hand movements, which are processed in MATLAB 
          to identify the finger’s hover position over a 3×3 virtual grid. The grid 
          is mapped to wheelchair navigation commands such as <em>Forward</em>, 
          <em>Backward</em>, <em>Left</em>, <em>Right</em>, and <em>Stop</em>. These 
          commands are transmitted to an Arduino microcontroller, which in turn 
          controls the wheelchair motors accordingly.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Key Features</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Non-contact gesture control</strong> using hand tracking and 
            MATLAB-based image processing.
          </li>
          <li>
            <strong>Grid-based interface:</strong> each grid cell represents a unique 
            wheelchair motion command.
          </li>
          <li>
            <strong>Arduino integration:</strong> receives control signals from MATLAB 
            and drives the wheelchair motors via motor driver circuits.
          </li>
          <li>
            <strong>Customizable commands:</strong> grid mapping can be modified to 
            suit user-specific needs.
          </li>
          <li>
            <strong>Implemented prototype:</strong> successfully demonstrated real-time 
            wheelchair control with low-latency response.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Applications</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Assistive technology for differently-abled individuals, providing 
            hands-free mobility.
          </li>
          <li>
            Human-computer interaction research in gesture-controlled interfaces.
          </li>
          <li>
            Potential integration with AI-based hand recognition for increased 
            robustness in real-world environments.
          </li>
        </ul>

       
      </div>
    </div>
  );
}

export default AirGestureWheelchairPage;
