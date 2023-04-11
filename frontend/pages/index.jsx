import { useState as state, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody, FormControl, FormLabel } from '@chakra-ui/react'
import { getServices } from '../data/services'
import router from 'next/router'
import axios from 'axios'
import reac,{fragment} from 'react'
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { login } from '../data/user'




const index = () => {

return(
	<>


	<Container maxW="container.md">
		
			<Stack direction='row'>
				<Image src='logo.png' boxSize='150px'/>
				<Heading pt="10" fontSize='50px' as="h1" size="2xl" > Hospedaje Joaben </Heading>
			</Stack>

			<Stack spacing={3}>
				<Text fontSize='3xl'>Bienvenido a la Página Oficial del Hospedaje Joaben</Text>
			</Stack>

		<Breadcrumb>
			<Breadcrumb
				fontWeight='medium' fontSize='sm'>
			</Breadcrumb>
			<BreadcrumbItem>
				<Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('/')}>Inicio</Button>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./servicios')}>Servicios</Button>
			</BreadcrumbItem>
			<BreadcrumbItem>
    			<Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./trabajadores')}>Empleados</Button>
			</BreadcrumbItem>
			
			<BreadcrumbItem>
    			<Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./clientes')}>Huésped</Button>
			</BreadcrumbItem>
			<BreadcrumbItem>
    			<Button colorScheme="green" textAlign="center" mt="10" mb="10" onClick={() => router.push('./contacto')}>Contacto</Button>
			</BreadcrumbItem>
		</Breadcrumb>
		<Stack direction={'row'}>  <Image src='Hospedaje_re1.png'  boxSize='xl' height={680} /></Stack>
	</Container>


	<footer>
                    Benjamín Martinez Jeldres WEB &copy; 2023
    </footer>

	</>
	)
}


export default index