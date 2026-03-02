"use client";

import { Button, Column, Heading, Row } from "@once-ui-system/core";
import { resumes } from "@/resources";

interface ResumeDownloadProps {
  showHeading?: boolean;
}

export const ResumeDownload = ({ showHeading = true }: ResumeDownloadProps) => {
  if (resumes.length === 0) return null;

  return (
    <Column gap="m" fillWidth>
      {showHeading && (
        <Heading as="h3" variant="heading-strong-l">
          Resumes
        </Heading>
      )}
      <Row gap="12" wrap>
        {resumes.map((resume) => (
          <Button
            key={resume.url}
            href={resume.url}
            download
            prefixIcon="document"
            variant="secondary"
            size="m"
          >
            {resume.title}
          </Button>
        ))}
      </Row>
    </Column>
  );
};
