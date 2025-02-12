import { 
  Center,
  ChakraProvider,
} from '@chakra-ui/react'
import './Header.css'
import { AiFillBank } from "react-icons/ai";

export const Header  = () => {
  return(
    <ChakraProvider>
      <Center>
        <div className='header'>
          <Center>
            <AiFillBank size={50} />
          </Center>
          <Center>
            Dio Bank
          </Center>
        </div>
      </Center>
    </ChakraProvider>
  )
}
