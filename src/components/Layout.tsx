import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Box backgroundColor={"#131047"} minHeight={'100vh'}>
        <Header />
        { children }
        <Footer />
      </Box>
    </>
  )
}
