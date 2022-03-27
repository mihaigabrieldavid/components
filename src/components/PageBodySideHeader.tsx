import {
  EuiAvatar,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiTitle,
} from "@elastic/eui";
import { useEffect, useState } from "react";

export type PageBodySideHeaderItem = {
  id: string;
  name: string;
};

export type PageBodySideHeaderProps = {
  initialIsPopoverOpen: boolean;
  item: PageBodySideHeaderItem;
  items: PageBodySideHeaderItem[];
  noItemsMessage: string;
  onClick: (item: PageBodySideHeaderItem) => void;
};

export const PageBodySideHeader = ({
  initialIsPopoverOpen,
  item,
  items,
  noItemsMessage,
  onClick,
}: PageBodySideHeaderProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(initialIsPopoverOpen);
  const [filteredItems, setFilteredItems] = useState<PageBodySideHeaderItem[]>(
    []
  );

  useEffect(() => {
    setFilteredItems(items.filter(({ id }) => id !== item.id));
  }, [items]);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const handlePopoverToggle = () => {
    if (isPopoverOpen) {
      handlePopoverClose();
    } else {
      handlePopoverOpen();
    }
  };

  return (
    <EuiFlexItem grow={false} css={{ marginBottom: 32 }}>
      <EuiPopover
        button={
          <EuiFlexGroup
            gutterSize="none"
            responsive={false}
            css={{ cursor: "pointer" }}
            onClick={handlePopoverToggle}
          >
            <EuiAvatar
              size="s"
              type="space"
              name={item.name.substring(0, 1)}
              css={{ userSelect: "none" }}
            />
            <EuiTitle size="xxs">
              <div
                style={{
                  marginLeft: 8,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  maxWidth: 168,
                  textTransform: "uppercase",
                  userSelect: "none",
                  textOverflow: "ellipsis",
                }}
              >
                {item.name}
              </div>
            </EuiTitle>
          </EuiFlexGroup>
        }
        isOpen={isPopoverOpen}
        closePopover={handlePopoverClose}
        panelPaddingSize="none"
        anchorPosition="downLeft"
      >
        {filteredItems.length === 0 && (
          <div style={{ maxWidth: 198, padding: 8, lineHeight: 1.5 }}>
            {noItemsMessage}
          </div>
        )}
        {filteredItems.length > 0 && (
          <EuiContextMenuPanel
            size="s"
            items={filteredItems.map((item) => (
              <EuiContextMenuItem
                key={item.id}
                onClick={() => {
                  onClick(item);
                  handlePopoverClose();
                }}
              >
                {item.name}
              </EuiContextMenuItem>
            ))}
          />
        )}
      </EuiPopover>
    </EuiFlexItem>
  );
};
