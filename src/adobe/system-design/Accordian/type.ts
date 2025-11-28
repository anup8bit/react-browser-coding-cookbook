import { ReactNode } from "react";

export interface AccordianProps {
  title: ReactNode;
  content: ReactNode;
  key?: string;
  id?: string;
}

export interface HeaderProps {
  title: ReactNode;
  open: boolean;
  toggle: () => void;
  ariaControl?: string | undefined;
}

export interface AccordianBodyProps {
  content: ReactNode;
}

