
import { login } from '../../services/login';
import { Button } from '../Button/Input';
import { Card } from '../Card/Card'
import { Input } from '../Input/Input';
import './LoginForm.css'
import { 
  ChakraProvider,
  Box,
  Center,
} from '@chakra-ui/react'

export const LoginForm  = () => {

  const style = {
    flexDirection:"column"
  };

  return(
    <ChakraProvider>
      <Box minHeight='80vh' backgroundColor='#329da8' padding='25px'>
          <Card style={style}>
            <Center>
              <Input label="E-mail:" placeholder='email'/>
            </Center>
            <Center>
              <Input placeholder="password" label="Password:" type="password"/>
            </Center>
          </Card>
          <Button text='Login' handler={login}/>
      </Box>
    </ChakraProvider>
  )
}
