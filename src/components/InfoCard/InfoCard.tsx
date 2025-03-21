import { 
  Box, Center,
  Text
  } from '@chakra-ui/react'
import { m } from 'framer-motion';

  interface IProps {
    title: string;
    children: React.ReactNode;
    style?: any;
  }

  const defaultStyle = {
    backgroundColor:'#ebe8e8',
    minHeight:'25vh',
    minWidth:'50vh',
    borderRadius:10,
    textAlign:"center",
    padding:'4vh',
  }
  
  export const InfoCard = (props: IProps) => {
    return(
      <Box style={props.style ?? defaultStyle} >
        <Text fontSize={'xl'} fontWeight={'bold'}>{props.title}</Text>
          <Box textAlign={"start"} mt={3}>
            {props.children}
          </Box>
      </Box>
    )
  }
  