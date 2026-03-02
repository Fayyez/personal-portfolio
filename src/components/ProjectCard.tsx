"use client";

import {
  Column,
  Flex,
  Heading,
  Media,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

function isVideo(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src);
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
}) => {
  const thumbnail = images.length > 0 ? images[0] : null;
  const hasVideo = thumbnail ? isVideo(thumbnail) : false;

  return (
    <Column
      fillWidth
      border="neutral-alpha-weak"
      radius="l"
      overflow="hidden"
      background="surface"
    >
      {thumbnail && (
        <Flex
          fillWidth
          style={{ maxHeight: "240px", overflow: "hidden" }}
        >
          {hasVideo ? (
            <video
              src={thumbnail}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <Media
              sizes="(max-width: 768px) 100vw, 640px"
              alt={title}
              src={thumbnail}
              aspectRatio="16/9"
              radius="none"
            />
          )}
        </Flex>
      )}
      <Column fillWidth padding="m" gap="12">
        <Heading as="h3" variant="heading-strong-l">
          {title}
        </Heading>
        {description?.trim() && (
          <Text variant="body-default-m" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        <Row gap="20" paddingTop="4">
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-s">Read more</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          )}
        </Row>
      </Column>
    </Column>
  );
};
