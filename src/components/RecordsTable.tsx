import {
  CriteriaWithPagination,
  EuiBasicTable,
  EuiButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiPopover,
  EuiSearchBar,
  EuiSearchBarOnChangeArgs,
  EuiSpacer,
  EuiTableFieldDataColumnType,
  Pagination,
  QueryType,
  SearchFilterConfig,
  useEuiI18n,
} from "@elastic/eui";
import { SchemaType } from "@elastic/eui/src/components/search_bar/search_box";
import { useEffect, useRef, useState } from "react";
import { DeleteButton } from "./DeleteButton";

export type RecordsTableAction = {
  id: string;
  name: string;
  isLoading: boolean;
  onClick: () => void;
};

export type RecordsTableProps<T> = {
  items: T[];
  selectedItems: T[];
  columns: EuiTableFieldDataColumnType<T>[];
  pageIndex: number;
  totalItemCount: number;
  canDelete: boolean;
  filters: SearchFilterConfig[];
  schema: boolean | SchemaType | undefined;
  searchQuery: QueryType;
  isDeleting: boolean;
  actions: RecordsTableAction[];
  initialIsPopoverOpen: boolean;
  onPageIndexChange: (pageIndex: number) => void;
  onSelectedItemsChange: (selectedItems: T[]) => void;
  onDelete: () => void;
  onSearchChange: (args: EuiSearchBarOnChangeArgs) => void;
};

export const RecordsTable = <T extends {}>({
  items,
  columns,
  pageIndex,
  totalItemCount,
  searchQuery,
  selectedItems,
  canDelete,
  isDeleting,
  filters,
  schema,
  actions,
  initialIsPopoverOpen,
  onDelete,
  onPageIndexChange,
  onSelectedItemsChange,
  onSearchChange,
}: RecordsTableProps<T>) => {
  const search = useEuiI18n("recordsTable.search", "Caută");
  const deleteText = useEuiI18n("recordsTable.delete", "Șterge");
  const actionsText = useEuiI18n("recordsTable.actions", "Acțiuni");
  const tableRef = useRef<any>();
  const pagination: Pagination = {
    pageIndex,
    totalItemCount,
    pageSize: 15,
    showPerPageOptions: false,
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState(initialIsPopoverOpen);

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

  useEffect(() => {
    if (tableRef && tableRef.current) {
      tableRef.current.setSelection(selectedItems);
    }
  }, [tableRef, selectedItems]);

  const handleSelectionChange = (newSelectedItems: T[]) => {
    if (newSelectedItems.length !== selectedItems.length) {
      onSelectedItemsChange(newSelectedItems);
    }
  };

  const handleCriteriaChange = (criteria: CriteriaWithPagination<T>) => {
    if (criteria.page.index !== pageIndex) {
      onPageIndexChange(criteria.page.index);
    }
  };

  return (
    <>
      <EuiSearchBar
        query={searchQuery}
        box={{
          placeholder: search,
          incremental: false,
          schema,
        }}
        filters={filters.length === 0 ? undefined : filters}
        onChange={onSearchChange}
      />

      <EuiSpacer size="m" />

      {selectedItems.length > 0 && items.length > 0 && (
        <EuiFlexGroup gutterSize="none" responsive={false} style={{}}>
          {actions.length > 1 && (
            <EuiPopover
              ownFocus={false}
              button={
                <EuiButton
                  fill={true}
                  iconType="arrowDown"
                  iconSide="right"
                  style={{ marginRight: 12 }}
                  onClick={handlePopoverToggle}
                >
                  {actionsText}
                </EuiButton>
              }
              isOpen={isPopoverOpen}
              closePopover={handlePopoverClose}
              panelPaddingSize="none"
              anchorPosition="downCenter"
            >
              <EuiContextMenuPanel
                size="s"
                items={actions.map(({ id, name, onClick }) => (
                  <EuiContextMenuItem
                    key={id}
                    onClick={() => {
                      onClick();
                    }}
                  >
                    {name}
                  </EuiContextMenuItem>
                ))}
              />
            </EuiPopover>
          )}
          {actions.length === 1 &&
            actions.map(({ id, name, isLoading, onClick }) => (
              <div key={id}>
                <EuiButton
                  fill={true}
                  style={{ marginRight: 12 }}
                  isLoading={isLoading}
                  onClick={() => {
                    onClick();
                  }}
                >
                  {name}
                </EuiButton>
              </div>
            ))}
          <DeleteButton
            initialIsModalVisible={false}
            isLoading={isDeleting}
            hasPermission={canDelete}
            onClick={onDelete}
          >
            {deleteText}
          </DeleteButton>
        </EuiFlexGroup>
      )}

      {selectedItems.length > 0 && items.length > 0 && <EuiSpacer size="m" />}

      <EuiBasicTable
        ref={tableRef}
        items={items}
        itemId="uuid"
        columns={columns}
        pagination={pagination}
        selection={{
          selectable: () => (isDeleting ? false : true),
          onSelectionChange: handleSelectionChange,
        }}
        isSelectable={true}
        responsive={true}
        onChange={handleCriteriaChange}
      />
    </>
  );
};
