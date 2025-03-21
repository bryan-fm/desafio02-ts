
import { useContext, useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { 
  ChakraProvider,
  Box,
  Center,
  Input,
  useToast,
  Text,
  Spinner,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Login } from '../../services/login/login';
import { LoginStatusEnum } from '../../Enums/LoginStatusEnum';
import { Button } from '../Button/Button';
export const LoginForm  = () => {

  const style = {
    flexDirection:"column"
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<LoginStatusEnum | undefined>(LoginStatusEnum.SUCCESS);
  const [loading, setLoading] = useState(false);

  const {setUserState, user, loggedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn) {
      navigate(`/conta/${user.id}`);
    }
  },[user])

  const toast = useToast();

  useEffect(() => {
    if (showToast == true) {
      setShowToast(false);
        toast({
          title: "",
          description: toastMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: 'top'
        });
    }
  }, [showToast]);


  const handleLogin = async (email: string, password: string) => {
    if  (email === '' || password === '') {
      setShowToast(true);
      setToastMessage(LoginStatusEnum.REQUIRED_FIELDS);
      return;
    }
    setLoading(true);
    const data = await Login(email, password);
    if  (data?.user) {
      setUserState(data.user);
    }
    if  (data?.status != LoginStatusEnum.SUCCESS) {
      setShowToast(true);
      setToastMessage(data?.status);
    }
    setLoading(false);
  }
  
  return(
    <ChakraProvider>
      <Box minHeight='80vh' backgroundColor='white' padding='25px' fontFamily="Bebas Neue" color="black">
      {loading && (
      <Center top={'50%'} minHeight='80vh' position={'absolute'} inset={0} flexDirection={"column"} zIndex={1} opacity={0.5} backgroundColor={"lightgray"}>
          <Spinner/>
      </Center>
      )}
        <Card style={style}>
        <div style={{flexDirection:"column"}}>
          <Center>
            <p>{'E-mail:'}</p>
          </Center>
          <Center>
            <Input placeholder={'email'} width={"30rem"} value={email} onChange={(e) => {setEmail(e.target.value)}}></Input>
          </Center>
        </div>
        <div style={{flexDirection:"column"}}>
          <Center>
            <p>{'Senha:'}</p>
          </Center>
          <Center>
            <Input placeholder={'senha'} width={"30rem"} value={password} onChange={(e) => {setPassword(e.target.value)}} type='password'></Input>
          </Center>
        </div>
        </Card>
        <Button text='Login' handler={() => handleLogin(email, password)}/>
      </Box>
    </ChakraProvider>
  )
}
