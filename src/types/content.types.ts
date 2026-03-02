import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

/**
 * IANA time zone string (e.g., 'Asia/Calcutta', 'Europe/Vienna').
 * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type IANATimeZone = Extract<keyof typeof zones, string>;

export type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  location: IANATimeZone;
  languages?: string[];
};

export type Newsletter = {
  display: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
};

export type Social = Array<{
  name: string;
  icon: IconName;
  link: string;
  essential?: boolean;
}>;

export type Resume = {
  title: string;
  url: string;
};

export interface BasePageConfig {
  path: `/${string}` | string;
  label: string;
  title: string;
  description: string;
  image?: `/images/${string}` | string;
}

export interface Profile extends BasePageConfig {
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  education: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      degree: string;
      timeframe: string;
      description: React.ReactNode;
    }>;
  };
  certifications: {
    display: boolean;
    title: string;
    items: Array<{
      name: string;
      institution: string;
      year: string;
      url?: string;
    }>;
  };
  achievements: {
    display: boolean;
    title: string;
    items: Array<{
      name: string;
      description?: React.ReactNode;
      url?: string;
    }>;
  };
}

export interface Experience extends BasePageConfig {
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      timeframe: string;
      role: string;
      achievements: React.ReactNode[];
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      title: string;
      description?: React.ReactNode;
      tags?: Array<{
        name: string;
        icon?: string;
      }>;
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

export interface Blog extends BasePageConfig {}

export interface Projects extends BasePageConfig {}

export interface Gallery extends BasePageConfig {
  images: Array<{
    src: string;
    alt: string;
    orientation: string;
  }>;
}
