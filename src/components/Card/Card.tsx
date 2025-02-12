import { 
    Center
  } from '@chakra-ui/react'

  interface IProps {
    children: React.ReactNode;
    style?: any;
  }
  
  export const Card = (props: IProps) => {
    return(
      <Center style={props.style}>
          {props.children}
      </Center>
    )
  }
  