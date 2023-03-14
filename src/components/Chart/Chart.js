import "./ChartStyle.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function Chart() {
  const data = [
    {
      name: "Jan",
      "Active Users": 4000,
    },
    {
      name: "Feb",
      "Active Users": 3000,
    },
    {
      name: "Mar",
      "Active Users": 2000,
    },
    {
      name: "Apr",
      "Active Users": 2780,
    },
    {
      name: "May",
      "Active Users": 1890,
    },
    {
      name: "June",
      "Active Users": 2390,
    },
    {
      name: "July",
      "Active Users": 3490,
    },
    {
      name: "July",
      "Active Users": 5000,
    },
    {
      name: "Aug",
      "Active Users": 4500,
    },
    {
      name: "Sep",
      "Active Users": 4300,
    },
    {
      name: "Oct",
      "Active Users": 4800,
    },
    {
      name: "Nov",
      "Active Users": 4900,
    },
    {
      name: "Dec",
      "Active Users": 5200,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#252525" />
          <Line type="monotone" dataKey="Active Users" stroke="#252525" />
          <Tooltip />
          <CartesianGrid stroke="grey"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
