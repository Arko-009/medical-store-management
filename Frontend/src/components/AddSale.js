import { useState } from "react";
import { API_URL } from "../config";

export default function AddSale({ closeModal, refreshSales }) {
  const user = JSON.parse(localStorage.getItem("user")) || {};

const [sale, setSale] = useState({
  userID: user._id || "",
  ProductID: "",
  StoreID: "",
  StockSold: "",
  SaleDate: "",
  TotalSaleAmount: "",
});

  const handleChange = (key, value) => {
    setSale({ ...sale, [key]: value });
  };

  const addSale = async () => {
    await fetch(`${API_URL}/api/sales/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sale),
    });

    refreshSales();
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h3 className="font-bold mb-4">Add Sale</h3>

        <input
          placeholder="Product ID"
          className="border p-2 w-full mb-2"
          onChange={(e) => handleChange("ProductID", e.target.value)}
        />
        <input
          placeholder="Store ID"
          className="border p-2 w-full mb-2"
          onChange={(e) => handleChange("StoreID", e.target.value)}
        />
        <input
          placeholder="Stock Sold"
          className="border p-2 w-full mb-2"
          onChange={(e) => handleChange("StockSold", e.target.value)}
        />
        <input
          type="date"
          className="border p-2 w-full mb-2"
          onChange={(e) => handleChange("SaleDate", e.target.value)}
        />
        <input
          placeholder="Total Amount"
          className="border p-2 w-full mb-4"
          onChange={(e) => handleChange("TotalSaleAmount", e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={closeModal}>Cancel</button>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={addSale}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
