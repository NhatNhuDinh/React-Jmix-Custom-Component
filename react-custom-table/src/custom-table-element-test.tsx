// /* eslint-disable @typescript-eslint/no-explicit-any */
// import ReactDOM from "react-dom/client";
// import CustomTable from "./Table/Table";
// import { store } from "./app/store";
// import "./index.css";
// import { setDataTable } from "./Table/TableSlice";

// class CustomTableElement extends HTMLElement {
//     private root: any;
//     private columns: any[] = [];
//     private data: any[] = [];
//     private pageSize = 5;
//     private page = 0;

//     connectedCallback() {
//         this.style.display = "block";
//         this.root = ReactDOM.createRoot(this);
//         this.render();
//     }

//     set columnsValue(value: any[]) {
//         this.columns = value;
//         store.dispatch(setDataTable(this.data));
//         this.render();
//     }

//     set dataValue(value: any[]) {
//         this.data = value;
//         this.render();
//     }

//     set pageSizeValue(v: number) {
//         this.pageSize = v;
//         this.render();
//     }

//     render() {
//         if (!this.root) return;

//         this.root.render(
//             <CustomTable
//                 columns={this.columns}
//                 data={this.data}
//                 pageSize={this.pageSize}
//                 page={this.page}
//                 onPageChange={(p: number) => {
//                     this.page = p;
//                     this.render();
//                 }}
//                 onDelete={(index: number, row: any) => {
//                     this.dispatchEvent(
//                         new CustomEvent("row-delete", {
//                             detail: { index, row },
//                             bubbles: true,
//                             composed: true,
//                         })
//                     );
//                 }}
//             />
//         );
//     }

//     disconnectedCallback() {
//         this.root?.unmount();
//     }
// }

// customElements.define("custom-table", CustomTableElement);
