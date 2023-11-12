import { TablerIconsProps } from "@tabler/icons-react";
export interface LinkMenuProps {
  index: number;
  key: number;
  icon: React.FC<TablerIconsProps>;
  label: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  rightSection?: React.JSX.Element;
  subMenus?: { label: string; link: string }[];
  initiallyOpened?: boolean;
  link?: string;
}
