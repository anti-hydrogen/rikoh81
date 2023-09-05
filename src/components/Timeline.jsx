import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';
import NextLink from "next/link";

const milestones = [
  {
    id: 1,
    date: 'March 2023',
    title: 'Firmware Engineer - SAFMC',
    description:
      'I develop firmware using the Arduino programming language to create a remote control system for a mechanical hand on a UAV.',
    link : ""
  },
  {
    id: 2,
    date: 'November 2022',
    title: 'Gemastik IoT Finalist',
    description: `I develop software for Arduino and Raspberry Pi using computer vision and other sensors to recognize drowsiness`,
    link : 'https://drive.google.com/file/d/1OWazXv-TMEfL3hpLucxNcCJ5HRzvfydr/view?usp=sharing'
  },
  {
    id: 3,
    date: 'August 2022 - December 2022',
    title: 'Assistant Lecturer for Introduction to Computation',
    description:
      'As a assistant lecturer for Introduction to Computation, i handle 60+ students and teach about basic programming',
    link: 'https://drive.google.com/file/d/1NaGNI4nVadbMtIihuUn3g3dybkmQjcOR/view?usp=sharing'
  },
  {
    id: 4,
    date: 'June 2022',
    title: 'Junior Firmware Engineer - Aksantara ITB',
    description: `I design firmrware for STM32 microcontrollers in the Arduino language, ensuring precise control and stability in flight controller systems for Unmanned Aerial Vehicle(UAV). My role involves algorithm development, sensor integration, and real-time data processing to manage flight dynamics effectively.`,
    link : ""
  },
  {
    id: 5,
    date: '2021-2023',
    title: 'Freelancer Tutor for Math, Physics, and Computing',
    description:
      'I freelance as a private tutor to teach children in the fields of mathematics, physics, and computing.',
    link : ""
  },
  

];

const Timeline = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Past Experiences
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};


const Card = ({ id, title, description, date, link}) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
          {link ? 
          (
          <Link href={link}>
            <Text fontSize="md">{title} </Text>
          </Link>
          ) 
          : <Text fontSize="md">{title} </Text>}
            
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
         
          
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Timeline;
