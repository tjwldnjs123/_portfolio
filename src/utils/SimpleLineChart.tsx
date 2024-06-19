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
import { BiWalk } from "react-icons/bi";

type LineChartProps = {
  data: {
    [key: string]: number | string;
  }[];
};

function SimpleLineChart({ data }: LineChartProps) {
  const customTolltip: any = ({
    payload,
  }: {
    payload: { [key: string]: any }[];
  }) => {
    return (
      <div className="w-[250px] h-auto border border-gray-2 rounded-lg bg-white ">
        <p className="h-16 flex flex-col justify-center  border-b-2  border-gray-1 text-2xl text-center">
          {payload[0]?.payload.name}
          {payload[0]?.payload.name !== "future!!" && "년"}
        </p>

        <p className="p-5">{payload[0]?.payload?.description}</p>
      </div>
    );
  };

  const CustomDot: any = (props: any) => {
    const { cx, cy, isActive } = props;
    if (cx === undefined || cy === undefined) return null;

    const iconSize = isActive ? 30 : 20;

    return (
      <foreignObject
        x={cx - iconSize / 2}
        y={cy - iconSize / 2}
        width={iconSize}
        height={iconSize}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiWalk size={iconSize} />
        </div>
      </foreignObject>
    );
  };

  return (
    <ResponsiveContainer aspect={1.7}>
      <LineChart
        width={300}
        height={500}
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
          dot={<CustomDot isActive={false} />}
          activeDot={<CustomDot isActive={true} />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
