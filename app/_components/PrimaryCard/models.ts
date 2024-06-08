export interface ProjectCardLink {
  tooltipText: string;
  iconClass: string;
  href: string;
}

export interface ProjectCardAction {
  text: string;
  onClick: () => void;
}

export interface PrimaryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags?: string[];
  actions?: ProjectCardAction[];
  links?: ProjectCardLink[];
}
