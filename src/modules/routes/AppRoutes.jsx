import Header from "../Home/Components/header";
import About from "../about/About";
import Trayectoria from "../trayectoria/trayectoria";
import Habilidades from "../Skill/habilidades";
import Projects from "../projects/projects";
import Contact from "../shared/contact";
import Footer from "../Home/Components/footer";
function AppRoutes() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Trayectoria />
        <Habilidades />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default AppRoutes;
