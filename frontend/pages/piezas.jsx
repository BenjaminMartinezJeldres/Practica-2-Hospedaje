import { useState as state, useEffect as efect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getHabitaciones } from '../data/habitaciones'
import router from 'next/router'

const piezas = () => {

    const [habitaciones, setHabitaciones] = state([{
        id: '',
        name: ''

    }])


    const contentTable = () => {
        return habitaciones.map(habitaciones => {
            return (
                <Tr key={habitaciones._id}>
                    <Td>{habitaciones.name}</Td>
                    <Td>{habitaciones._id}</Td>
                    <Td>
                        <HStack>

                            <Button colorScheme={"teal"} onClick={() => router.push(`./habitaciones/actualizar/${habitaciones._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    efect(() => {
        getHabitaciones().then(res => {
            setHabitaciones(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Button colorScheme="red"mt="10" mb="10" onClick={() => router.push('./')}>volver</Button>


                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de habitaciones </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/habitaciones/crear')}>Agregar Habitacion</Button>

                <Stack spacing={4} mt="10">
                    <Table variant='striped' colorScheme='blue'>
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>

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

export default piezas