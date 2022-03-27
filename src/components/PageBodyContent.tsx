import { EuiFlexItem } from "@elastic/eui";
import { ReactNode } from "react";

export type PageBodyContentProps = {
  children: ReactNode;
};

export const PageBodyContent = ({ children }: PageBodyContentProps) => {
  return (
    <EuiFlexItem grow={false} css={{ paddingBottom: 16, width: "100%" }}>
      {children}
    </EuiFlexItem>
  );
};
