import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserAvatar from "./UserAvatar";

function SideMenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  const localStorageData = JSON.parse(localStorage.getItem("user")) || {};
  const fullName =
    ((localStorageData.firstName || "") +
      " " +
      (localStorageData.lastName || "")).trim() || "User";

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: require("../assets/dashboard-icon.png"),
      exact: true,
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: require("../assets/inventory-icon.png"),
    },
    {
      name: "Purchased Medicines",
      path: "/purchase-details",
      icon: require("../assets/supplier-icon.png"),
    },
    {
      name: "Sales",
      path: "/sales",
      icon: require("../assets/supplier-icon.png"),
    },
    {
      name: "Manage Stores",
      path: "/manage-store",
      icon: require("../assets/order-icon.png"),
    },
  ];

  return (
    <div className="h-full flex-col justify-between bg-white border-r border-gray-200 hidden lg:flex select-none">
      <div className="px-4 py-5">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
          Menu
        </p>
        <nav aria-label="Main Navigation" className="space-y-1">
          {navItems.map((item) => {
            const isActive = item.exact
              ? currentPath === item.path
              : currentPath.startsWith(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-semibold shadow-xs"
                    : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
                }`}
              >
                <img
                  alt={`${item.name} icon`}
                  src={item.icon}
                  className={`h-5 w-5 object-contain transition-transform duration-150 group-hover:scale-105 ${
                    isActive ? "opacity-100" : "opacity-75"
                  }`}
                />
                <span>{item.name}</span>
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-200/80 bg-white p-3.5">
        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-50 transition-colors">
          <UserAvatar user={localStorageData} size="md" />

          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-gray-900 truncate">
              {fullName}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {localStorageData.email || ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
