import {
  Column,
  Heading,
  Media,
  Row,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, experience, person, profile } from "@/resources";
import { ResumeDownload } from "@/components";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: experience.title,
    description: experience.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(experience.title)}`,
    path: experience.path,
  });
}

export default function ExperiencePage() {
  const structure = [
    {
      title: experience.work.title,
      display: experience.work.display,
      items: experience.work.experiences.map((exp) => exp.company),
    },
    {
      title: experience.technical.title,
      display: experience.technical.display,
      items: experience.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={experience.title}
        description={experience.description}
        path={experience.path}
        image={`/api/og/generate?title=${encodeURIComponent(experience.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${profile.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {experience.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={experience} />
        </Column>
      )}
      <Column fillWidth paddingX="l">
        <Heading variant="display-strong-xl" marginBottom="l" className={styles.textAlign}>
          {experience.title}
        </Heading>

        <Column fillWidth marginBottom="xl">
          <ResumeDownload />
        </Column>

        {experience.work.display && (
          <>
            <Heading
              as="h2"
              id={experience.work.title}
              variant="display-strong-s"
              marginBottom="m"
            >
              {experience.work.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {experience.work.experiences.map((exp, index) => (
                <Column key={`${exp.company}-${exp.role}-${index}`} fillWidth>
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                    <Text id={exp.company} variant="heading-strong-l">
                      {exp.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {exp.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {exp.role}
                  </Text>
                  <Column as="ul" gap="16">
                    {exp.achievements.map(
                      (achievement: React.ReactNode, achIndex: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${exp.company}-${achIndex}`}
                        >
                          {achievement}
                        </Text>
                      ),
                    )}
                  </Column>
                  {exp.images && exp.images.length > 0 && (
                    <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                      {exp.images.map((image, imgIndex) => (
                        <Row
                          key={imgIndex}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}

        {experience.technical.display && (
          <>
            <Heading
              as="h2"
              id={experience.technical.title}
              variant="display-strong-s"
              marginBottom="40"
            >
              {experience.technical.title}
            </Heading>
            <Column fillWidth gap="l">
              {experience.technical.skills.map((skill, index) => (
                <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                  <Text id={skill.title} variant="heading-strong-l">
                    {skill.title}
                  </Text>
                  {skill.description && (
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  )}
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                  {skill.images && skill.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map((image, imgIndex) => (
                        <Row
                          key={imgIndex}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}
      </Column>
    </Column>
  );
}
