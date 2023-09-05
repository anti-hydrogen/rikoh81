import { Container, Heading, Flex, Image } from '@chakra-ui/react'

const Skills = () => { 
  const WIDTH_IMG = 120
  const HEIGHT_IMG = 35

  return (
    <Container maxW={1480} display="flex" justifyContent="space-evenly" h="250" p={8} marginBottom={100}>
      <Flex direction="column" align="center">
        <Heading>
          Techs
        </Heading>
        <Heading as='h4' size='md' color="gray.200" mt="2">
          What technologies i used for work or study
        </Heading>
        <Flex flexWrap="wrap" justifyContent="space-evenly" mt="8" h="200" maxW="900"  >
          <Image src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"  alt='C'  mb = {3}/>
          <Image src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"  alt='C++'  mb = {3}/>
          <Image src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"  alt='Python'  mb = {3}/>
          <Image src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"  alt='Java'  mb = {3}/>
          <Image src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white"  alt='Go'  mb = {3}/>
          <Image src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"  alt='Javascript' mb = {3} />
          <Image src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"  alt='Typescript'  mb = {3}/>
          <Image src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"  alt='PHP'  mb = {3}/>
          <Image src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"  alt='MySQL'  mb = {3}/>
          <Image src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"  alt='NumPy'  mb = {3}/>
          <Image src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"  alt='TensorFlow'  mb = {3}/>
          <Image src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"  alt='Torch'  mb = {3}/>
          <Image src="https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white"  alt='OpenCV'  mb = {3}/>
          <Image src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt='React'  mb = {3}/>
          <Image src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"  alt='NextJS' mb = {3}/>
          <Image src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt='Ubuntu' mb = {3} />          
          <Image src="https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"  alt='Arduino'  mb = {3}/>
          <Image src="https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi"  alt='RasPi'  mb = {3}/>   
        </Flex>
      </Flex>
      
    </Container>
  ) 
}

export default Skills