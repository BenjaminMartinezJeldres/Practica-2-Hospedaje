import { useState as state, useEffect as efect} from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getHuespedes } from '../data/huespedes'
import router from 'next/router'
import axios from 'axios'
import { Image } from '@chakra-ui/react'


const clientes = () => {

    const [huespedes, setHuespedes] = state([{
        id: '',
        name: '',
        lastname: '',
        rut:'',
        habitacion:'',
        company:''

    }])


    const contentTable = () => {
        return huespedes.map(huespedes => {
            return (
                <Tr key={huespedes._id}>
                    <Td>{huespedes.name}</Td>
                    <Td>{huespedes.lastname}</Td>
                    <Td>{huespedes.rut}</Td>
                    <Td>{huespedes.habitacion}</Td>
                    <Td>{huespedes.company}</Td>
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
        getHuespedes().then(res => {
            setHuespedes(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Button colorScheme="red"mt="10" mb="10" onClick={() => router.push('./')}>volver</Button>
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de huespedes </Heading>
                <Stack><Button colorScheme="blue" mt="10" mb="0" onClick={() => router.push('/huespedes/crear')}>Agregar Huesped</Button></Stack>

             
                <Stack spacing={4} mt="10">
                <Table variant='striped' colorScheme='blue'>
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Apellido</Td>
                                <Td>Rut</Td>
                                <Td>Habitacion</Td>
                                <Td>Compañia</Td>
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

export default clientes