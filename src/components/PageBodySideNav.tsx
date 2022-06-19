import {
  EuiButtonEmpty,
  EuiCollapsibleNav,
  EuiFlexItem,
  EuiIcon,
  EuiShowFor,
  EuiSideNav,
} from "@elastic/eui";
import { useEffect, useState } from "react";

export type PageBodySideNavItem = {
  id: string;
  name: string;
  items: PageBodySideNavItem[];
  isSelected?: boolean;
  onClick?: () => void;
};

export type PageBodySideNavProps = {
  initialIsFlyoutOpen: boolean;
  title: string;
  items: PageBodySideNavItem[];
  selectedItemId: string;
};

export const PageBodySideNav = ({
  initialIsFlyoutOpen,
  items,
  title,
  selectedItemId,
}: PageBodySideNavProps) => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(initialIsFlyoutOpen);
  const [sideNavItems, setSideNavItems] = useState<PageBodySideNavItem[]>([]);
  const [sideNavSelectedItemId, setSideNavSelectedItemId] = useState("");

  useEffect(() => {
    setSideNavSelectedItemId(selectedItemId);
  }, [selectedItemId]);

  useEffect(() => {
    setSideNavItems(getItems(items));
  }, [items, sideNavSelectedItemId]);

  const getItems = (items: PageBodySideNavItem[]) =>
    items.map((item) => {
      if (item.onClick) {
        const onClick = item.onClick.bind({});
        item.onClick = () => {
          onClick();
          setSideNavSelectedItemId(item.id);
          if (item.items.length === 0) {
            handleFlyoutClose();
          }
        };
      }
      item.isSelected = !!item.onClick && item.id === sideNavSelectedItemId;
      item.items = getItems(item.items);
      return item;
    });

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
              {title && (
                <EuiButtonEmpty
                  flush="left"
                  iconType="apps"
                  size="s"
                  onClick={handleFlyoutOpen}
                >
                  {title}
                </EuiButtonEmpty>
              )}
              {!title && (
                <EuiButtonEmpty flush="right" onClick={handleFlyoutOpen}>
                  <EuiIcon height={16} color="primary" type="apps" />
                </EuiButtonEmpty>
              )}
            </div>
          }
          onClose={handleFlyoutClose}
        >
          <EuiFlexItem className="eui-yScroll" style={{ padding: 16 }}>
            <EuiSideNav mobileBreakpoints={[]} items={sideNavItems} />
          </EuiFlexItem>
        </EuiCollapsibleNav>
      </EuiShowFor>
    </EuiFlexItem>
  );
};
