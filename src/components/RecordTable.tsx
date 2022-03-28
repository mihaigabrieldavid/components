import {
  EuiBasicTable,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTableFieldDataColumnType,
  EuiTitle,
  Pagination,
  useEuiI18n,
} from "@elastic/eui";
import { useEffect, useRef } from "react";
import { capitalizeFirstLetter } from "../utils";

export type RecordTableProps<T> = {
  items: T[];
  selectedItems: T[];
  columns: EuiTableFieldDataColumnType<T>[];
  itemText: string;
  itemsText: string;
  noItemsText: string;
  addButtonText: string;
  onSelectedItemsChange: (selectedItems: T[]) => void;
  onDelete: () => void;
  onAdd: () => void;
};

export const RecordTable = <T extends {}>({
  items,
  columns,
  noItemsText,
  itemText,
  itemsText,
  selectedItems,
  addButtonText,
  onDelete,
  onAdd,
  onSelectedItemsChange,
}: RecordTableProps<T>) => {
  const del = useEuiI18n("recordTable.delete", "Șterge");
  const tableRef = useRef<any>();
  const title = capitalizeFirstLetter(itemsText);
  const pagination: Pagination = {
    totalItemCount: 0,
    pageIndex: 0,
    pageSize: 0,
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

  return (
    <>
      <EuiFlexGroup responsive={true} alignItems="center">
        <EuiFlexItem grow={true}>
          <EuiTitle size="s">
            <h2>{title}</h2>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <div>
            <EuiButton size="s" color="primary" onClick={onAdd}>
              {addButtonText}
            </EuiButton>
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="m" />

      {selectedItems.length > 0 && items.length > 0 && (
        <>
          <EuiButton size="s" color="danger" onClick={onDelete}>
            {del} {selectedItems.length}{" "}
            {selectedItems.length === 1 ? itemText : itemsText}
          </EuiButton>
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
          onSelectionChange: handleSelectionChange,
        }}
        isSelectable={true}
        responsive={true}
        noItemsMessage={noItemsText}
      />
    </>
  );
};
