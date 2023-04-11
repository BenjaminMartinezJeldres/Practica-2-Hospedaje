import { useState as state, useEffect as efect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getEmpleados } from '../data/empleados'
import router from 'next/router'

const trabajadores = () => {

    const [empleados, setEmpleados] = state([{
        id: '',
        name:'',
        lastname: '',
        rut : '',
		correo: '',
		telefono: ''

    }])


    const contentTable = () => {
        return empleados.map(empleados => {
            return (
                <Tr key={empleados._id}>
                    <Td>{empleados.name}</Td>
                    <Td>{empleados.lastname}</Td>
                    <Td>{empleados.rut}</Td>
                    <Td>{empleados.correo}</Td>
                    <Td>{empleados.telefono}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./empleado/actualizar/${empleados._id}`)}>Editar</Button>
                        <Button colorScheme={'red'} onClick={() => router.push(`./${service._id}`)}>Eliminar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    efect(() => {
        getEmpleados().then(res => {
            setEmpleados(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Button colorScheme="red"mt="10" mb="10" onClick={() => router.push('./')}>volver</Button>
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de Empleados </Heading>
                <Stack><Button colorScheme="blue" mt="10" mb="0" onClick={() => router.push('/empleados/crear')}>Agregar Empleado</Button></Stack>

                <Stack spacing={4} mt="10">
                    <Table variant='striped' colorScheme='blue'>
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Apellido</Td>
                                <Td>Rut</Td>
                                <Td>Correo</Td>
                                <Td>Telefono</Td>
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

export default trabajadores