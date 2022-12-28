import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import React from "react";

const Test = () => {
  const { RangePicker } = DatePicker;

  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    } else {
      console.log("Clear");
    }
  };
  const rangePresets = [
    {
      label: "Today",
      value: [dayjs().add(0, "d"), dayjs()],
    },
    {
      label: "Yesterday",
      value: [dayjs().add(-1, "d"), dayjs()],
    },
    {
      label: "Last 7 Days",
      value: [dayjs().add(-7, "d"), dayjs()],
    },
    {
      label: "Next 7 Days",
      value: [dayjs().add(-14, "d"), dayjs()],
    },
    {
      label: "Last 30 Days",
      value: [dayjs().add(-1, "month"), dayjs()],
    },
    {
      label: "last Year",
      value: [dayjs().add(-1, "year"), dayjs()],
    },
    {
      label: "This Year",
      value: [dayjs().add(0, "year"), dayjs()],
    },
  ];
  return (
    <div className="mt-24 ml-24">
      <Space direction="vertical" size={5}>
        <RangePicker
          format="DD MMM,YY"
          presets={rangePresets}
          onChange={onRangeChange}
        />
      </Space>
    </div>
  );
};

export default Test;
