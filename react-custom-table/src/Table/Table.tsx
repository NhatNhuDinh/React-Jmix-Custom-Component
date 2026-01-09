/* eslint-disable @typescript-eslint/no-explicit-any */
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { deleteRow, setPage } from "./TableSlice";

export default function CustomTable() {
  const dispatch = useDispatch();

  const {
    columns,
    dataTable,
    page,
    pageSize,
    loaded,
  } = useSelector((state: RootState) => state.table);


  if (!loaded) {
    return (
      <div className="ct-container ct-empty">
        <div className="ct-empty-title">Table not loaded</div>
        <div className="ct-empty-desc">
          Waiting for <code>TABLE_LOAD</code> event…
        </div>
      </div>
    );
  }


  const start = page * pageSize;
  const pageData = dataTable.slice(start, start + pageSize);
  const totalPages = Math.ceil(dataTable.length / pageSize);
  return (
    <div className="ct-container">
      <table className="ct-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key}>{c.header}</th>
            ))}
            <th className="ct-action-col"></th>
          </tr>
        </thead>

        <tbody>
          {pageData.map((row, i) => (
            <tr key={start + i} className="ct-row">
              {columns.map((c) => (
                <td key={c.key}>{String(row[c.key] ?? "")}</td>
              ))}

              <td className="ct-action">
                <button
                  className="ct-delete"
                  onClick={() => {
                    const rowId = row.id;
                    dispatch(deleteRow(start + i));

                    const host = document.querySelector("custom-table");

                    host?.dispatchEvent(
                      new CustomEvent("row-delete", {
                        detail: { rowId: rowId },
                        bubbles: true,
                        composed: true,
                      })
                    );

                  }}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="ct-pagination">
        <button
          disabled={page === 0}
          onClick={() => dispatch(setPage(page - 1))}
        >
          ◀
        </button>

        <span>
          Page {page + 1} / {totalPages}
        </span>

        <button
          disabled={page >= totalPages - 1}
          onClick={() => dispatch(setPage(page + 1))}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
