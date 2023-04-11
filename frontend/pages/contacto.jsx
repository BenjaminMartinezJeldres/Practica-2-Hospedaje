import axios from 'axios'
import reac,{fragment} from 'react'
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbSeparator,
Hide,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody, FormControl, FormLabel } from '@chakra-ui/react'
import router from 'next/router'

const contacto = () => {

return(
	<>
<Container maxW='container.xl' >

<Button colorScheme="red" mt="10" mb="10" onClick={() => router.push('./')}>  volver</Button>
    <Stack>
        <Heading fontSize='5xl'>Contacto</Heading>
        <text>  </text>
    </Stack>
    <Stack spacing={3}>
        <Text fontSize='3xl'>Hospedaje Joaben con más de 10 años en servicio a la comunidad de  Cuncumen Salamanca ofreciendo servicios de Hospedaje para quien lo requiera, cuenta con servicios de Hoteleria, almuerzo y colaciones, arriendo de vehiculos para labores de mineria y andamios. </Text>
        <Text fontSize='2xl'>Correo: jrmartinez.hernandez@gmail.com</Text>
        <Text fontSize='2xl'>Telefono: +56 9 39167951</Text>
        <Text fontSize='2xl'>Ubicación: Avenida Algarrobo 85, Pasaje las Dalias N°74-D Cuncumen Salamanca</Text>
        <text></text>

    </Stack>
    <iframe
    image src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16112.53598006153!2d-70.63523733648707!3d-31.899982504104564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9688bd4d4df16c31%3A0xf6d962ad3bd984d8!2sCuncumen%2C%20Salamanca%2C%20Coquimbo!5e0!3m2!1ses-419!2scl!4v1657659547365!5m2!1ses-419!2scl" width="800" height="500" 

></iframe>

</Container>
	</>
	)
}


export default contacto