import React from "react";
import { CiLink } from "react-icons/ci";
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

function AboutMe() {
  const data = [
    {
      name: "2021",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2022",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2023",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2024",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div id="aboutme" className="h-screen">
      <div>
        <div className="flex justify-center items-center mb-10">
          <CiLink size={50} />
          <p className="text-5xl ">ABOUT ME</p>
        </div>
        <div className="text-center mb-10">
          <p>안녕하세요, 가파른 성장곡선을 그리는 개발자</p>
          <div>
            <span>서지원</span>입니다
          </div>
        </div>
        <div>
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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
