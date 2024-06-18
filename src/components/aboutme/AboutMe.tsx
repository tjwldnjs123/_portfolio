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
import SimpleLineChart from "../../utils/SimpleLineChart";

function AboutMe() {
  const chartData = [
    {
      name: "2021",
      성장률: 10,
    },
    {
      name: "2022",
      성장률: 30,
    },
    {
      name: "2023",
      성장률: 60,
    },
    {
      name: "2024",
      성장률: 80,
    },
  ];

  return (
    <div id="aboutme" className="h-screen">
      <div>
        <div className="flex justify-center items-center mb-10">
          <CiLink size={50} color="gray" />
          <p className="text-5xl ">ABOUT ME</p>
        </div>
        <div className="text-center mb-10">
          <p>안녕하세요, 가파른 성장곡선을 그리는 개발자</p>
          <div>
            <span>서지원</span>입니다
          </div>
        </div>
        <div className="w-[80%] mx-auto">
          <SimpleLineChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
