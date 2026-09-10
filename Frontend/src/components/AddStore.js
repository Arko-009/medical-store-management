import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import UploadImage from "./UploadImage";
import AuthContext from "../AuthContext";
import { API_URL } from "../config";

export default function AddStore({ onStoreAdded }) {
  const authContext = useContext(AuthContext);

  const [form, setForm] = useState({
    userId: authContext.user?._id || authContext.user,
    name: "",
    category: "Electronics",
    address: "",
    city: "",
    image: "",
  });

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addStore = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/store/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Store add failed");
      }

      alert("STORE ADDED SUCCESSFULLY");

      setOpen(false);
      if (onStoreAdded) onStoreAdded(); // 🔥 refresh store list
    } catch (err) {
      console.log(err);
      alert("Failed to add store");
    } finally {
      setLoading(false);
    }
  };

  // Upload image to Cloudinary
  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "inventoryapp");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ddhayhptm/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const imgData = await res.json();
      setForm((prev) => ({ ...prev, image: imgData.url }));
      alert("Image uploaded");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <PlusIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <Dialog.Title className="text-lg font-semibold">
                    Add Store
                  </Dialog.Title>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Store name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="border p-2 rounded col-span-2"
                  />

                  <input
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  />

                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="border p-2 rounded"
                  >
                    <option>Electronics</option>
                    <option>Groceries</option>
                    <option>Wholesale</option>
                    <option>SuperMart</option>
                    <option>Phones</option>
                  </select>

                  <textarea
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleInputChange}
                    className="border p-2 rounded col-span-2"
                  />

                  <UploadImage uploadImage={uploadImage} />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={addStore}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                  >
                    {loading ? "Adding..." : "Add Store"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
