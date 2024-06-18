import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type LineChartProps = {
  data: {
    [key: string]: number | string;
  }[];
};

function SimpleLineChart({ data }: LineChartProps) {
  const customTolltip = ({
    payload,
  }: {
    payload: { [key: string]: any }[];
  }) => {
    return (
      <div className="w-[250px] h-auto border border-gray-2 rounded-lg bg-white ">
        <p className="h-10 flex flex-col justify-center  border-b-2  border-gray-1">
          {payload[0]?.payload.name}년
        </p>

        <p className="p-10">{payload[0]?.payload?.description}</p>
      </div>
    );
  };
  return (
    <ResponsiveContainer aspect={2.5}>
      <LineChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{
            value: "(년도)",
            offset: -4,
            angle: 0,
            position: "insideBottomRight",
            style: {
              fontSize: "14px",
            },
          }}
        />
        <YAxis
          domain={[0, 100]}
          label={{
            value: "(%)",
            position: "top",
            offset: -10,
            style: { transform: "translateX(-20px)" }, // X축으로 이동
          }}
        />
        <Tooltip content={customTolltip} />
        <Legend />
        <Line
          type="monotone"
          dataKey="성장률"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
