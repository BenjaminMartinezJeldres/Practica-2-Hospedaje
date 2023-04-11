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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const fotoservice = () => {

return(
	<>


	<Container maxW="container.xl">

			<Stack direction='row'>
                <Button colorScheme="red" mt="10" mb="10" onClick={() => router.push('./servicios')}>  volver</Button>
            </Stack>
            <Stack>
                <Heading whiteSpace={3} pt="0" fontSize='50px' as="h1" size="2xl" > Imágenes Servicios  </Heading>
            </Stack>
            
<Tabs variant='soft-rounded' colorScheme='green' pt="10">
  <TabList>
    <Tab>Hospedaje</Tab>
    <Tab>Vehiculos</Tab>
    <Tab>Almuerzos y Colaciones</Tab>
    <Tab>Andamios</Tab>
  </TabList>
______________________________________________________________________________________________________________________________________________________________________________
  <TabPanels>
    <TabPanel>
        <Stack direction='row'>
    <Image
        boxSize='lx'
        objectFit='cover'
        src='Hospedaje_re1.png'
    />
    <Image
        boxSize='lx'
        objectFit='cover'
        src='Hospedaje2_re.png'
    />
        </Stack>
    </TabPanel>
______________________________________________________________________________________________________________________________________________________________________________
    <TabPanel>
        <Stack direction='row'>
    <Image
        boxSize='md'
        objectFit='cover'
        src='camioneta4.jpeg'
    />
    <Image
        boxSize='md'
        objectFit='cover'
        src='camioneta3.jpeg'
    />
    <Image
        boxSize='md'
        objectFit='cover'
        src='camioneta2.jpeg'
    />
</Stack>
    </TabPanel>
______________________________________________________________________________________________________________________________________________________________________________
  <TabPanel>
        <Stack direction='row'>
    <Image
        boxSize='lx'
        objectFit='cover'
        src='colaciones1.jpg'
    />
    <Image
        boxSize='lx'
        objectFit='cover'
        src='colaciones2.jpg'
    />
</Stack>
    </TabPanel>
______________________________________________________________________________________________________________________________________________________________________________
      <TabPanel>
        <Stack direction='row'>
    <Image
        boxSize='md'
        objectFit='cover'
        src='andamios1.jpeg'
    />

</Stack>
    </TabPanel>
  </TabPanels>
  
</Tabs>
______________________________________________________________________________________________________________________________________________________________________________
	</Container>

	</>
	)
}


export default fotoservice