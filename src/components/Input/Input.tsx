import { 
  Center,
    Input as CInput,
    Text
  } from '@chakra-ui/react'

  interface CardProps {
    placeholder: string;
    label: string;
    type?: string;
  }
  
  export const Input = (props: CardProps) => {
    return(
      <div style={{flexDirection:"column", fontFamily:"Bebas Neue", color:"white"}}>
        <Center>
          <p>{props.label}</p>
        </Center>
        <Center>
          <CInput placeholder={props.placeholder} width={"30rem"} type={props.type ?? "text"}></CInput>
        </Center>
      </div>
    )
  }
  