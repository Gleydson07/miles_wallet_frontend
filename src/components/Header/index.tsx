import Image from "next/image";
import logo from "../../../public/logo.png";

interface HeaderProps {
 
}

function Header({}: HeaderProps) {

  return (
    <header className="max-w-screen-xl mx-auto flex column justify-between">
      <section className=" flex justify-between items-center">
        <Image src={logo} height={40} width={240}/>
      </section>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="">Criar conta</a>
          </li>
          <li>
            <a href="">Entrar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;