import Image from "next/image";
import Login from "../../components/Login";

import logoSvg from "../../../public/logo.svg";

import { Container, Header } from "./styles";

interface HomeProps {
 
}

function HomePage({}: HomeProps) {

  return (
    <Container>
      <Header>
        <Image src={logoSvg} alt="Miles Wallet" width={80} height={80} />
        <span>MILES WALLET</span>
      </Header>
      <Login/>
    </Container>
  );
};

export default HomePage;