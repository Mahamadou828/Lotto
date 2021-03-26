import * as React from "react";
import Button from "@material-ui/core/Button";
import {
  DataGrid,
  GridColDef,
  GridApi,
  GridCellParams,
  GridRowsProp,
  GridCellValue,
} from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const actionButton: GridColDef = {
  field: "",
  sortable: false,
  width: 100,
  disableClickEventBubbling: true,
};

interface Props {
  rows: GridRowsProp;
  columns: GridColDef[];
  handleEdit: (item: GridCellValue) => void;
  handleDelete: (item: GridCellValue) => void;
  width?: string;
  height?: string;
}

export function AppTable(props: Props) {
  const { width, height } = props;
  const { handleDelete, handleEdit } = props;
  const { rows, columns } = props;

  const renderEditActionButton = (params: GridCellParams) => {
    const onClick = () => {
      const api: GridApi = params.api;
      const fields = api
        .getAllColumns()
        .map((c) => c.field)
        .filter((c) => c !== "__check__" && !!c);

      fields.forEach((f) => {
        const row: GridCellValue = params.getValue(f); /**@toDebug */
        if (row) {
          handleEdit(row);
        }
      });
    };
    return (
      <IconButton onClick={onClick}>
        <EditIcon />
      </IconButton>
    );
  };

  const renderDeleteActionButton = (params: GridCellParams) => {
    const onClick = () => {
      const api: GridApi = params.api;
      const fields = api
        .getAllColumns()
        .map((c) => c.field)
        .filter((c) => c !== "__check__" && !!c);

      fields.forEach((f) => {
        const row: GridCellValue = params.getValue(f); /**@toDebug */
        if (row) {
          handleDelete(row);
        }
      });
    };

    return (
      <IconButton onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    );
  };

  const inJectedColumn: GridColDef[] = [
    ...columns,
    {
      ...actionButton,
      headerName: "Delete",
      renderCell: renderEditActionButton,
    },
    {
      ...actionButton,
      headerName: "Delete",
      renderCell: renderDeleteActionButton,
    },
  ];
  return (
    <div style={{ height, width }}>
      <DataGrid
        rows={rows}
        columns={inJectedColumn}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
