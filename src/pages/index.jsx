import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import Skills from "@/components/Skills"

import { seo, data } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "350px",
              height: "350px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
          <NextImage
            src="/las.avif"
            width="500"
            height="350"
            alt="avatar bigheads"
            placeholder="blur"
            blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
            priority
          />
        </div>

        
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
            Hi, I'm Jeremya Dharmawan{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>
          </Heading>
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
            <Text as="span" color={color}>
              Computer Science
            </Text>{" "}
            Student
          </Heading>
          <Text py="4">
            I am{" "}
            <Text as="span" fontWeight="800">
              a third-year computer science student  Bandung Institute of Technology
            </Text>{" "}
            at{" "}
            <Text as="span" fontWeight="800">
             Bandung Institute of Technology
            </Text>{" "}
            and I'm excited about diving into{" "}
            <Text as="span" fontWeight="600">
             software engineering, computer vision, and robotics.
            </Text>{" "}
            
          </Text>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
          >
            Get in touch
          </Button>
        </Box>
      </Box>
      <Skills/>
    </>
  );
};

export default Home;
