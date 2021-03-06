import { EuiFlexItem } from "@elastic/eui";
import { ReactNode } from "react";

export type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <EuiFlexItem style={{ height: "100%" }}>{children}</EuiFlexItem>;
};
