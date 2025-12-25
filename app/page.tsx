import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import ProjectSection from './components/ProjectSection';
import ScrollRevealText from './components/ScrollRevealText';
import Process from './components/Process';
import Services from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function Home() {
  // Temporary placeholder projects - replace with real data
  // const projects = [
  //   {
  //     title: 'project one',
  //     meta: {
  //       client: 'client name',
  //       year: '2024',
  //       services: ['web development', 'ui/ux design'],
  //     },
  //     imageUrl: 'https://picsum.photos/seed/project1/1920/1080',
  //   },
  //   {
  //     title: 'project two',
  //     meta: {
  //       client: 'another client',
  //       year: '2024',
  //       services: ['full-stack development'],
  //     },
  //     imageUrl: 'https://picsum.photos/seed/project2/1920/1080',
  //   },
  //   {
  //     title: 'project three',
  //     meta: {
  //       client: 'third client',
  //       year: '2023',
  //       services: ['web app', 'api development'],
  //     },
  //     imageUrl: 'https://picsum.photos/seed/project3/1920/1080',
  //   },
  // ];

  return (
    <div className="min-h-screen bg-black">
      <div className="relative flex min-h-screen flex-col bg-black text-white">
        <Header />
        <main>
          <Hero />

          {/* Work - Project sections */}
          {/* <div id="work">
            {projects.map((project, index) => (
              <ProjectSection
                key={index}
                title={project.title}
                meta={project.meta}
                imageUrl={project.imageUrl}
              />
            ))}
          </div> */}

          {/* About - includes ScrollRevealText intro */}
          <section id="about">
            <div className="py-32 md:py-40">
              <div className="container mx-auto max-w-7xl px-4">
                <ScrollRevealText
                  className="font-sans text-3xl leading-tight tracking-tight md:text-5xl"
                  text="We build web applications with TypeScript and React, paired with whatever backend architecture the project calls for—headless CMS, custom API, or integration with existing infrastructure. Our work spans e-commerce, fintech, and emerging platforms, but the approach stays consistent: thoughtful engineering, clean implementation, and software that works the way it should."
                />
              </div>
            </div>
          </section>

          {/* Services - combines Services and Process */}
          <div id="services">
            <Services />
            <Process />
          </div>

          {/* FAQ */}
          <FAQ />

          {/* CTA */}
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}
