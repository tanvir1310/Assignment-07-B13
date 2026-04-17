import React, { useContext, useMemo } from "react";
import {
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { InstallAppsContext } from "../../context/InstallAppsContext";

const Dashboard = () => {
  const context = useContext(InstallAppsContext) || {};
  const { timeline = [] } = context;

  const chartData = useMemo(() => {
    const callCount = timeline.filter((item) => item.action === "Call").length;
    const textCount = timeline.filter((item) => item.action === "Text").length;
    const videoCount = timeline.filter(
      (item) => item.action === "Video",
    ).length;

    const totalCount = callCount + textCount + videoCount;

    if (totalCount === 0) {
      return [{ name: "No Data", value: 1, fill: "#E2E8F0" }];
    }

    return [
      { name: "Call", value: callCount, fill: "#EF4444" },
      { name: "Text", value: textCount, fill: "#10B981" },
      { name: "Video", value: videoCount, fill: "#F59E0B" },
    ];
  }, [timeline]);

  const totalActions =
    chartData[0].name === "No Data"
      ? 0
      : chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="px-4 py-6 md:py-10 lg:py-12 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white shadow-sm border border-gray-100 rounded-[24px] p-6 md:p-10 lg:p-12">
          {/* হেডিং - মোবাইলে ছোট এবং ট্যাবে বড় হবে */}
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-center text-gray-800 tracking-tight">
            Check-In Statistics
          </h2>

          {/* চার্ট কন্টেইনার - ল্যান্ডস্কেপ এবং বড় স্ক্রিনে হাইট অ্যাডজাস্ট করা হয়েছে */}
          <div className="flex justify-center items-center h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius="65%"
                  outerRadius="90%"
                  cornerRadius={12}
                  paddingAngle={8}
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.fill}
                      stroke="none"
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={40}
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "20px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* নিচের ডাটা সেকশন - রেসপনসিভ গ্রিড */}
          <div className="mt-10 md:mt-14 border-t border-gray-50 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Total Actions
                </p>
                <p className="text-2xl font-black text-gray-800">
                  {totalActions}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Top Method
                </p>
                <p className="text-2xl font-black text-gray-800">
                  {totalActions > 0
                    ? chartData.sort((a, b) => b.value - a.value)[0].name
                    : "N/A"}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Status
                </p>
                <p className="text-2xl font-black text-green-500">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
