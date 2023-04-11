import { useState as state } from 'react'
import { getHabitacion, updateHabitacion } from '../../../data/habitaciones'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import react from 'next/router'
import Swal from 'sweetalert2'
import axios from 'axios'


export const getServerSideProps = async (context) => {
    const response = await getHabitacion(context.query.pieza)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [habitacion, setHabitacion] = state(data)
    const { pieza } = router.query

    const handleChange = (e) => {
        setHabitacion({
            ...habitacion,
            [e.target.name]: e.target.value
        })

    }

    const submitHabitacion = async (e) => {
        e.preventDefault()
        const response = await updateHabitacion(pieza, habitacion)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'habitacion actualizada',
                showConfirmButton: true,
                text: 'La habitacion se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la habitacion'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Habitacion: {habitacion.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la habitacion" type="text" value={habitacion.name} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitHabitacion}>Editar habitacion</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/piezas')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar