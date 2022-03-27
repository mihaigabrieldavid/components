import {
  CriteriaWithPagination,
  EuiBasicTable,
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
import { useEffect, useRef } from "react";
import { DeleteButton } from "./DeleteButton";

export type RecordsTableProps<T> = {
  items: T[];
  selectedItems: T[];
  columns: EuiTableFieldDataColumnType<T>[];
  pageIndex: number;
  totalItemCount: number;
  itemText: string;
  itemsText: string;
  canDelete: boolean;
  filters: SearchFilterConfig[];
  schema: boolean | SchemaType | undefined;
  searchQuery: QueryType;
  isDeleting: boolean;
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
  itemText,
  itemsText,
  searchQuery,
  selectedItems,
  canDelete,
  isDeleting,
  filters,
  schema,
  onDelete,
  onPageIndexChange,
  onSelectedItemsChange,
  onSearchChange,
}: RecordsTableProps<T>) => {
  const del = useEuiI18n("recordsTable.delete", "Șterge");
  const search = useEuiI18n("recordsTable.search", "Caută");
  const tableRef = useRef<any>();
  const pagination: Pagination = {
    pageIndex,
    totalItemCount,
    pageSize: 15,
    showPerPageOptions: false,
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
        <>
          <DeleteButton
            initialIsModalVisible={false}
            isLoading={isDeleting}
            hasPermission={canDelete}
            onClick={onDelete}
          >
            {del} {selectedItems.length}{" "}
            {selectedItems.length === 1 ? itemText : itemsText}
          </DeleteButton>

          <EuiSpacer size="m" />
        </>
      )}

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
