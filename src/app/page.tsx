import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Row,
  Tag,
  Text,
  Meta,
  Schema,
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, profile, person, social } from "@/resources";
import { ResumeDownload } from "@/components";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: profile.title,
    description: profile.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(profile.title)}`,
    path: profile.path,
  });
}

export default function ProfilePage() {
  const structure = [
    {
      title: profile.intro.title,
      display: profile.intro.display,
      items: [],
    },
    {
      title: profile.education.title,
      display: profile.education.display,
      items: profile.education.institutions.map((inst) => inst.name),
    },
    {
      title: profile.certifications.title,
      display: profile.certifications.display,
      items: profile.certifications.items.map((cert) => cert.name),
    },
    {
      title: profile.achievements.title,
      display: profile.achievements.display,
      items: profile.achievements.items.map((item) => item.name),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={profile.title}
        description={profile.description}
        path={profile.path}
        image={`/api/og/generate?title=${encodeURIComponent(profile.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${profile.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {profile.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={profile} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {profile.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={profile.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {profile.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={profile.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            {item.link.startsWith("mailto:") ? (
                              <Button
                                key={item.name}
                                prefixIcon={item.icon}
                                label={item.name}
                                href="mailto:fayyez2056@gmail.com" // Forces the correct email
                                size="s"
                                weight="default"
                                variant="secondary"
                                // Note: target="_blank" is purposefully removed here
                              />
                            ) : (
                              <Button
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                target="_blank" // Good for external links like GitHub/LinkedIn
                                size="s"
                                weight="default"
                                variant="secondary"
                              />
                            )}
                          </Row>

                          {/* Mobile View IconButton */}
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={
                                item.link.startsWith("mailto:")
                                  ? "mailto:fayyez2056@gmail.com"
                                  : item.link
                              }
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {profile.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {profile.intro.description}
            </Column>
          )}

          <Column fillWidth marginBottom="xl">
            <ResumeDownload />
          </Column>

          {profile.education.display && (
            <>
              <Heading
                as="h2"
                id={profile.education.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {profile.education.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {profile.education.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth>
                    <Row
                      fillWidth
                      horizontal="between"
                      vertical="end"
                      marginBottom="4"
                    >
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.timeframe}
                      </Text>
                    </Row>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {institution.degree}
                    </Text>
                    <Text variant="body-default-m">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {profile.certifications.display && (
            <>
              <Heading
                as="h2"
                id={profile.certifications.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {profile.certifications.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {profile.certifications.items.map((cert, index) => (
                  <Column key={`${cert.name}-${index}`} fillWidth gap="4">
                    <Row fillWidth horizontal="between" vertical="center">
                      <Text id={cert.name} variant="heading-strong-l">
                        {cert.url ? (
                          <SmartLink href={cert.url}>{cert.name}</SmartLink>
                        ) : (
                          cert.name
                        )}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {cert.year}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {cert.institution}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {profile.achievements.display && (
            <>
              <Heading
                as="h2"
                id={profile.achievements.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {profile.achievements.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {profile.achievements.items.map((item, index) => (
                  <Column key={`${item.name}-${index}`} fillWidth gap="4">
                    <Text id={item.name} variant="heading-strong-l">
                      {item.url ? (
                        <SmartLink href={item.url}>{item.name}</SmartLink>
                      ) : (
                        item.name
                      )}
                    </Text>
                    {item.description && (
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {item.description}
                      </Text>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
