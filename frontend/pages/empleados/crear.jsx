import { useState as state} from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createEmpleado } from '../../data/empleados'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import router from 'next/router'
import { Formik } from 'formik'
import empleadoValidation from '../../validations/empleadoValidation'
import axios from 'axios'

const trabajadores = () => {

    const [empleado, setEmpleado] = state({
        name: '',
        lastname:'',
        rut:'',
        correo:'',
        telefono: 0


    })



    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Registrar Empleado</Heading>

            <Formik
                initialValues={empleado}
                validationSchema={empleadoValidation}
                onSubmit={(values) => {
                        createEmpleado(values).then(res => {
                        router.push("/trabajadores")
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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del Empleado" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}

                            <HStack>
                                <InputForm label="Apellido" handleChange={handleChange} name="lastname" placeholder="Apellido del Empleado" type="text" value={values.lastname} handleBlur={handleBlur} />
                            {touched.lastname && errors.lastname && (
                                <Text color={"red"}>{errors.lastname}</Text>
                            )}
                            </HStack>


                            <HStack>
                                <InputForm label="Rut" handleChange={handleChange} name="rut" placeholder="Rut del Empleado" type="text" value={values.rut} handleBlur={handleBlur} />
                                {touched.rut && errors.rut && (
                                <Text color={"red"}>{errors.rut}</Text>
                            )}
                            </HStack>

                            <HStack>
                                <InputForm label="Correo" handleChange={handleChange} name="correo" placeholder="Correo del Empleado" type="text" value={values.correo} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.correo && errors.correo && (
                                    <Text color={"red"}>{errors.correo}</Text>
                                )}
                            </HStack>

                            <HStack>
                                    <InputForm label="Telefono" handleChange={handleChange}name="telefono" placeholder="Telefono del Empleado" type="number" value={values.telefono} handleBlur={handleBlur} />
                                {touched.telefono && errors.telefono && (
                                <Text color={"red"}>{errors.telefono}</Text>
                                )}
                            </HStack>

                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/trabajadores')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default trabajadores