import { EuiFlexItem } from "@elastic/eui";
import { ReactNode } from "react";

export type PageBodySideProps = {
  children: ReactNode;
};

export const PageBodySide = ({ children }: PageBodySideProps) => {
  return (
    <EuiFlexItem
      grow={false}
      css={{ paddingBottom: 16, paddingRight: 32, width: 230, minWidth: 230 }}
    >
      {children}
    </EuiFlexItem>
  );
};
