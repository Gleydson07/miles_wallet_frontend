import { useState } from "react";
import Button from "../Button";
import { Modal } from "../Modal";
import { Container } from "./styles";
import FormLogin from "../Forms/Login";

interface LoginProps {
 
}

function Login({}: LoginProps) {  
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [formType, setFormType] = useState<undefined | 'signin' | 'signup'>();

  const handleOpenSignInModal = () => {
    setFormType('signin');
    setOpenLoginModal(true);
  };

  const handleOpenSignUpModal = () => {
    setFormType('signup');
    setOpenLoginModal(true);
  };

  return (
    <>
      <Container>
        <Button 
          title="Login" 
          variant="default"
          width="192px"
          onClick={handleOpenSignInModal}
        />
        <span>
          Não possui conta? 
          <Button 
            title="Cadastre-se" 
            variant="text"
            onClick={handleOpenSignUpModal}
          />
        </span>
      </Container>

      <Modal
        content={formType === 'signin' ? <FormLogin/> : 'Sign Up'}
        isOpen={openLoginModal}
        onOpenChange={setOpenLoginModal}
      />
    </>
  );
};

export default Login;