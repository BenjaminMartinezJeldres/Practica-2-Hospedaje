import { useState as state} from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createHuesped } from '../../data/huespedes'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import router from 'next/router'
import { Formik } from 'formik'
import huespedValidation from '../../validations/huespedValidation'
import axios from 'axios'

const clientes = () => {

    const [huesped, setHuesped] = state({
        name: '',
        lastname: '',
        rut: '',
        habitacion:'',
        company:''
    })


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Huesped</Heading>
            <Formik
                initialValues={huesped}
                validationSchema={huespedValidation}
                onSubmit={(values) => {
                    createHuesped(values).then(res => {
                        router.push("/clientes")
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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del huesped" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}

                            <HStack>
                                <InputForm label="Apellido" handleChange={handleChange} name="lastname" placeholder="Apellido del huesped" type="text" value={values.lastname} handleBlur={handleBlur} />
                            {touched.lastname && errors.lastname && (
                                <Text color={"red"}>{errors.lastname}</Text>
                            )}
                            </HStack>


                            <HStack>
                                <InputForm label="rut" handleChange={handleChange} name="rut" placeholder="Raza de la huesped" type="number" value={values.rut} handleBlur={handleBlur} />
                                {touched.species && errors.species && (
                                <Text color={"red"}>{errors.rut}</Text>
                            )}
                            </HStack>

                            <HStack>
                                <InputForm label="Empresa" handleChange={handleChange} name="company" placeholder="Peso de la huesped" type="text" value={values.company} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.company && errors.company && (
                                    <Text color={"red"}>{errors.company}</Text>
                                )}
                            </HStack>
                            <HStack>
                                <InputForm label="Habitacion" handleChange={handleChange} name="habitacion" placeholder="Peso de la huesped" type="number" value={values.habitacion} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.habitacion && errors.habitacion && (
                                    <Text color={"red"}>{errors.habitacion}</Text>
                                )}
                            </HStack>
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/clientes')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default clientes