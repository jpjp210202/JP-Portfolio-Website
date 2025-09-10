import MediaGallery from "../../components/MediaGallery";

// Images
import aco1 from "../../assets/projects/aco/aco1.png";
import aco2 from "../../assets/projects/aco/aco2.png";
import aco3 from "../../assets/projects/aco/aco3.jpg";
import aco4 from "../../assets/projects/aco/aco4.png";
import aco5 from "../../assets/projects/aco/aco5.png";
import aco6 from "../../assets/projects/aco/aco6.png";

// Report
import reportPDF from "../../assets/projects/aco/ACO_Report.pdf";

function ACOPage() {
  const media = [
    { type: "image", src: aco1, label: "ACO Pathfinding – Path Length 35" },
    { type: "image", src: aco2, label: "ACO Pathfinding – Path Length 27" },
    { type: "image", src: aco3, label: "Pheromone Directions on Grid" },
    { type: "image", src: aco4, label: "Optimized Path – Path Length 26" },
    { type: "image", src: aco5, label: "ACO Shortest Path Example" },
    { type: "image", src: aco6, label: "Comparative Path Performance" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Ant Colony Optimization (ACO) Path Planning
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project focuses on applying the{" "}
          <strong>Ant Colony Optimization (ACO)</strong> algorithm to the
          problem of pathfinding in a 20x20 obstacle grid. Inspired by the way
          real ants find the shortest route to food using pheromone trails, ACO
          uses swarm intelligence to converge on an optimal path while avoiding
          obstacles.
        </p>
        <p>
          The study involved implementing a{" "}
          <strong>traditional ACO model</strong> and optimizing it through
          parameter tuning, including pheromone importance (α), heuristic weight
          (β), pheromone evaporation rate (ρ), and number of iterations. To
          ensure consistent performance evaluation, a{" "}
          <strong>fixed obstacle grid</strong> was used instead of random
          generation.
        </p>
        <ul className="list-disc ml-6">
          <li>
            Implemented probabilistic path selection based on pheromone strength
            and heuristic guidance.
          </li>
          <li>
            Introduced <strong>dynamic stopping conditions</strong> to reduce
            unnecessary iterations once convergence was achieved.
          </li>
          <li>
            Evaluated performance using metrics such as{" "}
            <strong>Path Reduction (PR%)</strong> and{" "}
            <strong>Loop Reduction (LR%)</strong>.
          </li>
          <li>
            Optimized configurations achieved{" "}
            <strong>path lengths below 30</strong> with smoother trajectories
            and fewer inflection points.
          </li>
        </ul>
        <p>
          The optimized ACO algorithm proved effective for{" "}
          <strong>robotic navigation, autonomous systems, and AI-driven
          optimization</strong>, showing promising results in balancing
          exploration and exploitation for efficient pathfinding.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="https://github.com/jpjp210202/" // replace with actual ACO repo link
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
        >
          🔗 GitHub Repo
        </a>
        <a
          href={reportPDF}
          download="ACO_Report.pdf"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
        >
          📄 Download Full ACO Report
        </a>
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          📷 Visualizations & Results
        </h2>
        <MediaGallery media={media} />
      </div>
    </div>
  );
}

export default ACOPage;
