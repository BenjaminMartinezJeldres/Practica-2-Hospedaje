import { useState as state } from 'react'
import { getHuesped, updateHuesped } from '../../../data/huespedes'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import router from 'next/router'
import Swal from 'sweetalert2'
import axios from 'axios'


export const getServerSideProps = async (context) => {
    const response = await getHuesped(context.query.clientes)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [huesped, setHuesped] = state(data)

    const { clientes } = router.query

    const handleChange = (e) => {
        setHuesped({
            ...huesped,
            [e.target.name]: e.target.value
        })

    }

    const submitHuesped = async (e) => {
        e.preventDefault()
        const response = await updateHuesped(clientes, huesped)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Huesped actualizado',
                showConfirmButton: true,
                text: 'El Huesped se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar el Huesped'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Servicio: {huesped.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del servicio" type="text" value={huesped.name} />
                <HStack>
                    <InputForm label="apellido" handleChange={handleChange} name="lastname" placeholder="Precio del servicio" type="number" value={huesped.lastname} />
                </HStack>
                <TextareaInput label="rut" handleChange={handleChange} name="rut" placeholder="Descripción del servicio" value={huesped.rut} />
            </Stack>
             <Stack>
                <TextareaInput label="habitacion" handleChange={handleChange} name="habitacion" placeholder="Descripción del servicio" value={huesped.habitacion} />
            </Stack>
            <Stack>
                <TextareaInput label="company" handleChange={handleChange} name="compañia" placeholder="Descripción del servicio" value={huesped.company} />
            </Stack>

           

            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitHuesped}>Editar servicio</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar