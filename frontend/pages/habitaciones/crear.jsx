import { useState as state } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createHabitacion } from '../../data/habitaciones'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import router from 'next/router'
import { Formik } from 'formik'
import habitacionValidation from '../../validations/habitacionValidation'
import axios from 'axios'

const piezas = () => {

    const [habitacion, setHabitacion] = state({
        name: ''
    })



    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear habitacion</Heading>
            <Formik
                initialValues={habitacion}
                validationSchema={habitacionValidation}
                onSubmit={(values) => {
                    createHabitacion(values).then(res => {
                        router.push("/piezas")
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Stack spacing={4} mt={10}>
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la habitacion" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                        </Stack>

                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/piezas')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default piezas
