import { useState as state } from 'react'
import { getEmpleado, updateEmpleado } from '../../../data/empleados'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import router from 'next/router'
import Swal from 'sweetalert2'
import axios from 'axios'


export const getServerSideProps = async (context) => {
    const response = await getEmpleado(context.query.trabajador)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [empleado, setEmpleado] = state(data)
    const { trabajador } = router.query

    const handleChange = (e) => {
        setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value
        })

    }

    const submitEmpleado = async (e) => {
        e.preventDefault()
        const response = await updateEmpleado(trabajador, empleado)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Empleado actualizado',
                showConfirmButton: true,
                text: 'El Empleado se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar al Empleado'
            })
        }
    }
    //---------------------------------------------------------------------------------------------
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Empleado: {empleado.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="nombre" handleChange={handleChange} name="name" placeholder="Nombre del Empleado" type="text" value={empleado.name} />
                <HStack>
                    <InputForm label="Apellido" handleChange={handleChange} name="lastname" placeholder="Apellido del Empleado" type="text" value={empleado.lastname} />
                </HStack>
                    <TextareaInput label="Rut" handleChange={handleChange} name="rut" placeholder="rut del empleado" type="text" value={empleado.rut} />
                <HStack>
                    <InputForm label="correo" handleChange={handleChange} name="correo" placeholder="correo del empleado" type="text" value={empleado.correo} />
                </HStack>
                <HStack>
                    <InputForm label="telefono" handleChange={handleChange} name="telefono" placeholder="Telefono del empleado" type="number" value={empleado.telefono} />
                </HStack>
            </Stack>


            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitEmpleado}>Editar Empleado</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar