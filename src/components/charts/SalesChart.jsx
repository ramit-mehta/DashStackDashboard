import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function SalesChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="blueShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F7CFF" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#4F7CFF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="name"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          ticks={[20, 40, 60, 80, 100]}
          tickFormatter={(v) => `${v}%`}
          tick={{ fontSize: 12, fill: "#9CA3AF" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            border: "none",
            fontSize: "12px",
          }}
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#4F7CFF"
          strokeWidth={2}
          fill="url(#blueShadow)"
          dot={{ r: 3, fill: "#4F7CFF" }}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SalesChart;
