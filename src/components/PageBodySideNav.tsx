import {
  EuiButton,
  EuiCollapsibleNav,
  EuiFlexItem,
  EuiShowFor,
  EuiSideNav,
} from "@elastic/eui";
import { useEffect, useState } from "react";

export type PageBodySideNavItem = {
  id: string;
  name: string;
  items?: PageBodySideNavItem[];
  onClick?: () => void;
};

export type PageBodySideNavProps = {
  initialIsFlyoutOpen: boolean;
  title: string;
  items: PageBodySideNavItem[];
};

export const PageBodySideNav = ({
  initialIsFlyoutOpen,
  items,
  title,
}: PageBodySideNavProps) => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(initialIsFlyoutOpen);
  const [sideNavItems, setSideNavItems] = useState<PageBodySideNavItem[]>([]);

  useEffect(() => {
    setSideNavItems(
      items.map((parent) => {
        if (parent.items) {
          parent.items = parent.items.map((child) => {
            if (child.onClick) {
              const onClick = child.onClick.bind({});
              child.onClick = () => {
                onClick();
                handleFlyoutClose();
              };
            }
            return child;
          });
        }
        return parent;
      })
    );
  }, [items]);

  const handleFlyoutClose = () => {
    setIsFlyoutOpen(false);
  };

  const handleFlyoutOpen = () => {
    setIsFlyoutOpen(true);
  };

  return (
    <EuiFlexItem grow={false}>
      <EuiShowFor sizes={["m", "l", "xl"]}>
        <EuiSideNav mobileBreakpoints={[]} items={items} />
      </EuiShowFor>
      <EuiShowFor sizes={["xs", "s"]}>
        <EuiCollapsibleNav
          isOpen={isFlyoutOpen}
          button={
            <div>
              <EuiButton
                color="accent"
                onClick={handleFlyoutOpen}
                iconType="apps"
              >
                {title}
              </EuiButton>
            </div>
          }
          onClose={handleFlyoutClose}
        >
          <EuiFlexItem className="eui-yScroll" css={{ padding: 16 }}>
            <EuiSideNav mobileBreakpoints={[]} items={sideNavItems} />
          </EuiFlexItem>
        </EuiCollapsibleNav>
      </EuiShowFor>
    </EuiFlexItem>
  );
};
