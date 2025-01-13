import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";

function Home() {
  return (
    <div>
      {/* ----- HERO SECTION ----- */}
      <section className="-mt-[64px]">
        <Hero />
      </section>
      {/* ----- PROJECT SECTION ----- */}
      <section className="flex flex-col h-44 items-center justify-center || bg-[#f9fafb] dark:bg-blue-900">
        <div className="border-b w-8 border-gray-500"></div>
        <div className="text-xl md:text-2xl text-stone-800 font-medium mb-2">
          Projects
        </div>
      </section>
      <section>
        <ProjectSection />
      </section>
    </div>
  );
}

export default Home;
