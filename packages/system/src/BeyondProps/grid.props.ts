/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  gridAutoColumns,
  GridAutoColumns,
  gridAutoRows,
  GridAutoRows,
  gridColumn,
  GridColumn,
  gridColumnEnd,
  GridColumnEnd,
  gridColumnStart,
  GridColumnStart,
  gridRow,
  GridRow,
  gridRowEnd,
  GridRowEnd,
  gridRowStart,
  GridRowStart,
  gridTemplateColumns,
  GridTemplateColumns,
  gridTemplateRows,
  GridTemplateRows,
  SpacingName
} from "@beyond-ui/theme";
import { Property } from "csstype";
import { resolveSpace } from "./spacing.props";
import { Token } from "./types";

export const gridPropsResolver = {
  gap: resolveSpace("gap"),
  gridColumnGap: resolveSpace("columGap"),
  gridRowGap: resolveSpace("rowGap"),
  gridAutoColumns: (prop: GridAutoColumns) => ({
    gridAutoColumns: gridAutoColumns[prop]
  }),
  gridAutoRows: (prop: GridAutoRows) => ({
    gridAutoRows: gridAutoRows[prop]
  }),
  gridColumn: (prop: GridColumn) => ({
    gridColumn: gridColumn[prop]
  }),
  gridColumnEnd: (prop: GridColumnEnd) => ({
    gridColumnEnd: gridColumnEnd[prop]
  }),
  gridColumnStart: (prop: GridColumnStart) => ({
    gridColumnStart: gridColumnStart[prop]
  }),
  gridRow: (prop: GridRow) => ({
    gridRow: gridRow[prop]
  }),
  gridRowEnd: (prop: GridRowEnd) => ({
    gridRowEnd: gridRowEnd[prop]
  }),
  gridRowStart: (prop: GridRowStart) => ({
    gridRowStart: gridRowStart[prop]
  }),
  gridTemplateColumns: (prop: GridTemplateColumns) => ({
    gridTemplateColumns: gridTemplateColumns[prop]
  }),
  gridTemplateRows: (prop: GridTemplateRows) => ({
    gridTemplateRows: gridTemplateRows[prop]
  })
};

export interface GridProps {
  gap?: Token<SpacingName | Property.Gap>;
  gridColumnGap?: Token<SpacingName | Property.Gap>;
  gridRowGap?: Token<SpacingName | Property.Gap>;
  gridAutoColumns?: Token<GridAutoColumns>;
  gridAutoRows?: Token<GridAutoRows>;
  gridColumn?: Token<GridColumn>;
  gridColumnEnd?: Token<GridColumnEnd>;
  gridColumnStart?: Token<GridColumnStart>;
  gridRow?: Token<GridRow>;
  gridRowStart?: Token<GridRowStart>;
  gridRowEnd?: Token<GridRowEnd>;
  gridTemplateColumns?: Token<GridTemplateColumns>;
  gridTemplateRows?: Token<GridTemplateRows>;
}
