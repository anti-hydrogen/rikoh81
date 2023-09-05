import { Box, Heading, Text, useColorModeValue, Image} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import dayjs from "dayjs";

import { tagColor } from "./UI/tagColor";
import TagComponent from "./UI/tag";

const BlogPost = ({ posts }) => {
  const router = useRouter();

  const summaryColor = useColorModeValue("gray.600", "gray.300");
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const yearColor = useColorModeValue("telegram.500", "telegram.400");

  let year = 0;

  return (
    <>
      {posts.map((post) => {
        const { slug, title, summary, tags, publishedAt, image } = post;

        const thisYear = publishedAt.substring(0, 4);

        const YearComponent = thisYear !== year && (
          <Heading color={yearColor} mt="2" pb="3">
            {thisYear}
          </Heading>
        );

        year = thisYear;

        return (
          <Box my="3" py="2" px="4" rounded="md" key={slug}>
            {YearComponent}

            <Heading as="h3" fontSize="2xl" fontWeight="700">
              <NextLink href={`/blog/${slug}`}>

                <a>{title}</a>
              </NextLink>
            </Heading>
            <Image src={image} padding={10}/>
            <Text fontSize="17px" fontWeight="400" color={summaryColor} py="1">
              {summary}
            </Text>

            {tags.map((tag) => {
              const color = tagColor[tag];

              return (
                <TagComponent
                  color={color}
                  key={tag}
                >
                  {tag}
                </TagComponent>
              );
            })}

            <Text fontSize="16px" fontWeight="500" color={dateColor} py="1">
              {dayjs(publishedAt).format("MMMM DD, YYYY")}
            </Text>
          </Box>
        );
      })}
    </>
  );
};

export default BlogPost;
