function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-grey-900 to-white text-grey-900 flex flex-col justify-center items-center px-4">
      <img 
        src="/JP Image 1.png" 
        alt="JP Jaipuneeth" 
        className="w-[300px] h-[450px] rounded-xl shadow-xl -mt-0 mb-6 border-[0px] border-white object-cover justify-left"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-wide text-center">
        J P JAIPUNEETH        (WEBSITE IN PROGRESS)
      </h1>
      <p className="text-xl text-black mb-3 text-center">
        MTech in Robotics & AI at MSRIT
      </p>
      <p className="text-md text-black text-center max-w-2xl">
        AI • Embedded Systems • Robotics • Machine Vision • Innovation • Generative Design
      </p>

      <div className="mt-10 animate-bounce text-7xl text-black opacity-100">
        ↓
      </div>
    </section>
  );
}

export default HeroSection;
