import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { useContext, useEffect, useState } from "react";
import { DataInterface, getAccountDetails } from "../services/api/api";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Conta = () => {
    const [userData, setUserData] = useState<null | DataInterface>();
    const {id} = useParams();

    useEffect(() => {
        const getData = async() => {
            if (!userData && id) {
                const data = await getAccountDetails(id);
                setUserData(data);
            }
        }
        getData();
    }, []);

    return (
        <Box maxHeight='80vh' height={'80vh'} overflow={"auto"} backgroundColor={"white"}>
            {!userData ? (
                <Center top={'50%'} position={'relative'} flexDirection={"column"}>
                    <Text>Carregando</Text>
                    <Spinner/>
                </Center>
            ) :
            (
            <Center>
                <SimpleGrid columns={2} spacing={'30vh'} marginTop={'10vh'}>
                    <InfoCard title={`Bem vindo ${userData?.name}`}>
                        <Text>{`Último Acesso: ${userData.loginTime}`}</Text>
                    </InfoCard>
                    <InfoCard title="Informações da Conta">
                        <Text>{`Saldo: R$${userData.balance.toFixed(2)}`}</Text>
                    </InfoCard>
                </SimpleGrid>
            </Center>
            )}
        </Box>
    )
}

export default Conta;