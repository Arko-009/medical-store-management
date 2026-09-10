import React, { useState, useEffect } from "react";
import AddSale from "../components/AddSale";
import { API_URL } from "../config";

function Sales() {
  const [sales, setSales] = useState([]);
  const [showSaleModal, setShowSaleModal] = useState(false);

  const fetchSalesData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?._id) return;

      const res = await fetch(
        `${API_URL}/api/sales/user/${user._id}`
      );
      const data = await res.json();
      setSales(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12">
        {showSaleModal && (
          <AddSale
            closeModal={() => setShowSaleModal(false)}
            refreshSales={fetchSalesData}
          />
        )}

        <div className="bg-white border rounded">
          <div className="flex justify-between p-4">
            <span className="font-bold">Sales</span>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => setShowSaleModal(true)}
            >
              Add Sales
            </button>
          </div>

          <table className="w-full border-t text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Store</th>
                <th className="px-4 py-2">Stock Sold</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {sales.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No sales found
                  </td>
                </tr>
              ) : (
                sales.map((sale) => (
                  <tr key={sale._id} className="border-t">
                    <td className="px-4 py-2">
                      {sale.ProductID}
                    </td>
                    <td className="px-4 py-2">
                      {sale.StoreID}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {sale.StockSold}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {sale.SaleDate}
                    </td>
                    <td className="px-4 py-2 text-center">
                      ₹{sale.TotalSaleAmount}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sales;
