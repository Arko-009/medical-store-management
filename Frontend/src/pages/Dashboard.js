import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import AuthContext from "../AuthContext";
import { Doughnut } from "react-chartjs-2";
import { API_URL } from "../config";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [saleAmount, setSaleAmount] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);

  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
        fontFamily: "inherit",
      },
      colors: ["#2563eb"],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "42%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#f1f5f9",
        strokeDashArray: 4,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: "#64748b",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#64748b",
            fontSize: "12px",
          },
          formatter: (val) => `$${val}`,
        },
      },
    },
    series: [
      {
        name: "Monthly Sales Amount",
        data: [10, 20, 40, 50, 60, 20, 10, 35, 45, 70, 25, 70],
      },
    ],
  });

  // Update Chart Data
  const updateChartData = (salesData) => {
    setChart((prevChart) => ({
      ...prevChart,
      series: [
        {
          name: "Monthly Sales Amount",
          data: [...salesData],
        },
      ],
    }));
  };

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchTotalSaleAmount();
    fetchTotalPurchaseAmount();
    fetchStoresData();
    fetchProductsData();
    fetchMonthlySalesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetching total sales amount (FIXED)
  const fetchTotalSaleAmount = () => {
    fetch(`${API_URL}/api/sales/user/${authContext.user}`)
      .then((response) => response.json())
      .then((datas) => {
        const total = datas.reduce(
          (sum, sale) => sum + Number(sale.TotalSaleAmount || 0),
          0
        );
        setSaleAmount(total);
      })
      .catch((err) => console.log(err));
  };

  // Fetching total purchase amount
  const fetchTotalPurchaseAmount = () => {
    fetch(
      `${API_URL}/api/purchase/get/${authContext.user}/totalpurchaseamount`
    )
      .then((response) => response.json())
      .then((datas) => setPurchaseAmount(datas.totalPurchaseAmount))
      .catch((err) => console.log(err));
  };

  // Fetching all stores data
  const fetchStoresData = () => {
    fetch(`${API_URL}/api/store/user/${authContext.user}`)
      .then((response) => response.json())
      .then((datas) => setStores(datas))
      .catch((err) => console.log(err));
  };

  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch(`${API_URL}/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((datas) => setProducts(datas))
      .catch((err) => console.log(err));
  };

  // Fetching Monthly Sales
  const fetchMonthlySalesData = () => {
    fetch(`${API_URL}/api/sales/getmonthly`)
      .then((response) => response.json())
      .then((datas) => updateChartData(datas.salesAmount))
      .catch((err) => console.log(err));
  };

  // Dynamic distribution from existing products data
  const manufacturerCounts = {};
  products.forEach((p) => {
    const key = p.manufacturer?.trim() || "General Medicine";
    manufacturerCounts[key] =
      (manufacturerCounts[key] || 0) + (Number(p.stock) || 1);
  });

  const manufacturerKeys = Object.keys(manufacturerCounts);
  const donutLabels =
    manufacturerKeys.length > 0
      ? manufacturerKeys.slice(0, 6)
      : ["Tablets", "Syrups", "Injections", "Capsules", "Topical", "Other"];
  const donutDataValues =
    manufacturerKeys.length > 0
      ? donutLabels.map((k) => manufacturerCounts[k])
      : [35, 25, 15, 12, 8, 5];

  const donutChartData = {
    labels: donutLabels,
    datasets: [
      {
        label: "Units in Stock",
        data: donutDataValues,
        backgroundColor: [
          "#2563eb",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
          "#ec4899",
          "#06b6d4",
        ],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          padding: 14,
          font: {
            size: 11,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.label}: ${context.raw} units`,
        },
      },
    },
    cutout: "68%",
  };

  return (
    <div className="col-span-12 lg:col-span-10 min-h-screen bg-gray-50/60 p-5 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Live performance metrics and inventory status for your pharmacy.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-600 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Sync Active
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Sales */}
          <article className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-xs hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Total Sales
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/10">
                Revenue
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                ${saleAmount || 0}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Total recorded customer transactions
              </p>
            </div>
          </article>

          {/* Card 2: Purchases */}
          <article className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-xs hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Purchases
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10">
                Procurement
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                ${purchaseAmount || 0}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Total expenditure on medicine stock
              </p>
            </div>
          </article>

          {/* Card 3: Total Medicines */}
          <article className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-xs hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Total Medicines
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10">
                Catalog
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {products.length}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Active medicine products registered
              </p>
            </div>
          </article>

          {/* Card 4: Total Stores */}
          <article className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-xs hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Total Stores
              </span>
              <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-amber-700/10">
                Retail Outlets
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {stores.length}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Operating pharmacy branches
              </p>
            </div>
          </article>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bar Chart: Monthly Sales */}
          <div className="lg:col-span-7 rounded-xl border border-gray-200/80 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Monthly Sales Revenue
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Monthly sales distribution over the calendar year
                </p>
              </div>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                Current Year
              </span>
            </div>
            <div className="w-full">
              <Chart
                options={chart.options}
                series={chart.series}
                type="bar"
                width="100%"
                height={300}
              />
            </div>
          </div>

          {/* Donut Chart: Inventory by Manufacturer */}
          <div className="lg:col-span-5 rounded-xl border border-gray-200/80 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div className="border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-base font-semibold text-gray-900">
                Inventory Breakdown
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Distribution of medicine stock by manufacturer
              </p>
            </div>
            <div className="h-[280px] sm:h-[300px] w-full flex items-center justify-center">
              <Doughnut data={donutChartData} options={donutOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
