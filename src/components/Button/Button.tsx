import { 
  Center,
    Button as CButton
  } from '@chakra-ui/react'

  interface ButtonProps {
    text: string;
    handler: Function;
  }
  
  export const Button = (props: ButtonProps) => {
    return(
      <Center marginTop={10}>
        <CButton onClick={() => props.handler()} backgroundColor={'darkorange'} color="white" fontSize={20} width='8rem' marginTop='5px'>
          {props.text}
        </CButton>
      </Center>
    )
  }
  