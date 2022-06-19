import { EuiFlexGroup, EuiFlexItem, EuiShowFor } from "@elastic/eui";
import { ReactNode } from "react";

export type PageBodySideProps = {
  children: ReactNode;
};

export const PageBodySide = ({ children }: PageBodySideProps) => {
  return (
    <>
      <EuiShowFor sizes={["m", "l", "xl"]}>
        <EuiFlexItem
          grow={false}
          style={{
            paddingBottom: 16,
            paddingRight: 32,
            width: 230,
            minWidth: 230,
          }}
        >
          {children}
        </EuiFlexItem>
      </EuiShowFor>
      <EuiShowFor sizes={["xs", "s"]}>
        <EuiFlexGroup
          direction="row"
          responsive={false}
          alignItems="center"
          justifyContent="spaceBetween"
          gutterSize="none"
          style={{
            paddingBottom: 32,
          }}
        >
          {children}
        </EuiFlexGroup>
      </EuiShowFor>
    </>
  );
};
