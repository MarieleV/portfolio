import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import StarBackground from "./components/StarBackground";


export default function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <Header />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
    </>
  );
}
