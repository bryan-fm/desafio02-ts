import { 
  Box,
  Center,
  ChakraProvider,
  Text,
  Button
} from '@chakra-ui/react'
import './Header.css'
import { AiFillBank } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


export const Header = () => {

  const  { user, clearUser, loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    clearUser();
  }

  useEffect(() => {
      if (!user || user.id == '0') {
        navigate('/');
    }
  }, [user]);

  return(
    <ChakraProvider>
      <Box flexDirection={"row"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box flexDirection={"row"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <div className='header'>
              <Center>
                <AiFillBank size={50} />
              </Center>
              <Center>
                Dio Bank
              </Center>
            </div>
        </Box>
        {loggedIn && <Box display={"flex"} position={"absolute"} flexDirection={"column"} right={3} color={'white'}>
          <Center mr={3}>
            Sair
          </Center>
          <Button variant="ghost" onClick={() => logout()}>
            <Center>
              <GrLogout size={30}/>
            </Center>
          </Button>
        </Box>}
      </Box>
    </ChakraProvider>
  )
}
