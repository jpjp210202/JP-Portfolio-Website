function HobbiesPage() {
  const highlights = [
    "🏍️ Travelling & Solo Biking",
    "⚽ Football (Captain & Team Player)",
    "♟️ Chess & Strategy Games",
    "🎮 PC & Online Gaming",
    "💡 Exploring Projects & Tech",
    "🎨 Portrait & Concept Sketching",
    "🎹 Playing Keyboard & Music",
    "🍳 Cooking & Global Flavours",
    "📚 Reading Novels & Comics",
    "🎥 Movies, Short Films & Vlogging",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
        My Hobbies & Interests
      </h1>

      {/* Core Hobbies Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          🌟 Core Hobbies at a Glance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {highlights.map((hobby, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-6 text-center font-medium text-gray-900 text-lg"
            >
              {hobby}
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Descriptions */}
      <div className="max-w-4xl mx-auto text-lg leading-relaxed text-justify space-y-6">
        <p>
          I am a <strong>passionate traveller and solo biker</strong>, driven by 
          curiosity and adventure. Exploring new cultures and landscapes fuels 
          my <strong>spirit of discovery</strong> and helps me find inspiration 
          beyond books and screens.
        </p>

        <p>
          Sports have been a big part of my life — from being a{" "}
          <strong>Football Captain and Striker</strong> with 
          <strong> teamwork and discipline</strong>, to enjoying{" "}
          <strong>chess</strong> for its <strong>strategic depth</strong>. 
          Alongside, I am an enthusiastic <strong>PC and online gamer</strong>, 
          where I enjoy competitive as well as story-driven experiences, which 
          enhance my reflexes, focus, and problem-solving mindset.
        </p>

        <p>
          I am deeply curious about <strong>projects and new technologies</strong>. 
          Browsing the latest innovations, experimenting with ideas, and building 
          mini-projects is more than a hobby — it’s my way of{" "}
          <strong>staying innovative and future-ready</strong>.
        </p>

        <p>
          On the creative side, I enjoy <strong>portrait and concept sketching</strong>, 
          expressing emotions and imagination through art. I balance this with{" "}
          <strong>music</strong>, where <strong>playing the keyboard</strong> allows me 
          to explore rhythm, harmony, and improvisation.
        </p>

        <p>
          Outside of work and academics, I’m an <strong>enthusiastic cook</strong>, 
          always experimenting with <strong>global cuisines</strong> and flavours. 
          I’m also passionate about <strong>storytelling</strong> through 
          <strong> movies, short films, and vlogging</strong>, where I capture 
          real-life experiences and creative perspectives.
        </p>

        <p>
          Finally, I enjoy <strong>reading novels and graphic comics</strong>, 
          ranging from sci-fi sagas to deep philosophy, and find peace in 
          <strong> nature watching and outdoor exploration</strong>, which 
          balance my adventurous and reflective sides.
        </p>
      </div>
    </div>
  );
}

export default HobbiesPage;
