import { Center, ChakraProvider } from "@chakra-ui/react"

export const Footer  = () => {
  return(
    <ChakraProvider>
      <Center minHeight={"100%"} textAlign={"center"} fontFamily={"Bebas Neue"} marginTop={5}>
        Desafio 2 - DIO Formação Typescript
      </Center>
    </ChakraProvider>
  )
}
