import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { ReactNode } from "react";

export type PageBodyProps = {
  background: "#FFFFFF" | "#F4F6FA";
  children: ReactNode;
};

export const PageBody = ({ children, background }: PageBodyProps) => {
  return (
    <EuiFlexItem
      style={{ background, alignItems: "center", flex: 1 }}
      grow={true}
    >
      <EuiFlexGroup
        gutterSize="none"
        style={{
          width: "100%",
          maxWidth: 1280,
          display: "flex",
          padding: "32px 16px 64px 16px",
          justifyContent: "center",
          flexGrow: 0,
        }}
      >
        {children}
      </EuiFlexGroup>
    </EuiFlexItem>
  );
};
