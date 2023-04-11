import { useState as state, useEffect as efect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getServices } from '../data/services'
import router from 'next/router'


const servicios = () => {

    const [services, setServices] = state([{
        id: '',
        name: '',
        price: '',
        description: ''
    }])


    const contentTable = (colorScheme="blue") => {
        return services.map(service => {
            return (
                <Tr key={service._id}>
                    <Td>{service.name}</Td>
                    <Td>{service.description}</Td>
                    <Td>{service.price}</Td>
                    <Td>
                        <HStack>
                        <Button colorScheme={"teal"} onClick={() => router.push(`./services/actualizar/${service._id}`)}>Editar</Button>
                        <Button colorScheme={'red'} onClick={() => router.push(`./${service._id}`)}>Eliminar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    efect(() => {
        getServices().then(res => {
            setServices(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">


                <Button colorScheme="red" mt="10" mb="10" onClick={() => router.push('./')}>  volver</Button>


                <Heading  as="h1" size="2xl" textAlign="center" mt="10"> Listado de Servicios </Heading>
                <Stack>
                    <Button colorScheme="blue" mt="10" mb="0" onClick={() => router.push('/services/crear')}>Agregar Servicio</Button>
                    <Button colorScheme={"orange"} onClick={() => router.push(`./fotoservice`)}>Ver Fotos</Button>

                </Stack>
                <Stack spacing={10} mt="10">
                    <Table  variant='striped' colorScheme='blue'>
                        <Thead>

                        <Tr>

                                <Td>Nombre</Td>
                                <Td>Descripción</Td>
                                <Td>Precio</Td>
                                <Td>Acciones</Td>
                            </Tr>
                        </Thead>

                        
                        <Tbody>
                            {contentTable()}
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
        </>

    )
}

export default servicios