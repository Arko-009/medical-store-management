import React, { useEffect, useState } from "react";
import AddStore from "../components/AddStore";

function Store() {
  const [stores, setStores] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // ✅ DIRECT, CLEAN FETCH (NO CONTEXT)
  const fetchStores = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?._id) {
        console.error("User not found in localStorage");
        return;
      }

      const res = await fetch(
        `http://localhost:4000/api/store/user/${user._id}`
      );
      const data = await res.json();
      console.log("STORES FROM API:", data);
      setStores(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12 border-2 p-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">Manage Store</span>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Add Store
          </button>
        </div>

        {showModal && (
          <AddStore
            onStoreAdded={() => {
              setShowModal(false);
              fetchStores();
            }}
          />
        )}

        {stores.length === 0 ? (
          <p>No stores found</p>
        ) : (
          stores.map((store) => (
            <div key={store._id} className="border p-4">
              <p className="font-bold">{store.name}</p>
              <p>
                {store.address}, {store.city}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Store;
