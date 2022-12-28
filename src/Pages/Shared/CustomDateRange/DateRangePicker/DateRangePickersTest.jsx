import React, { useEffect } from "react";

const DateRangePickersTest = () => {
  useEffect(() => {
    /* eslint-disable */
    $.noConflict();
    $(function () {
      var start = moment().subtract(29, "days");
      var end = moment();
      function cb(start, end, label) {
        $('input[name="datetimes"]').html(
          start.format("YYYY/MM/DD") + " - " + end.format("YYYY/MM/DD")
          //   console.log('cehck,', )
        );

        console.log(
          "New date range selected: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD") +
            " (predefined range: " +
            label +
            ")"
        );
      }
      /* eslint-disable */
      $('input[name="datetimes"]').daterangepicker(
        {
          startDate: start,
          endDate: end,

          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days"),
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment().subtract(1, "month").startOf("month"),
              moment().subtract(1, "month").endOf("month"),
            ],

            "This Year": [moment().startOf("year"), moment().endOf("year")],
            "Last Year": [
              moment().subtract(1, "year").startOf("year"),
              moment().subtract(1, "year").endOf("year"),
            ],
          },
        },
        cb
      );

      cb(start, end);
    });
  }, []);

  return (
    <div>
      <h2>REact js Jquery testing </h2>
      <div id="reportrange">
        <i class="fa fa-calendar"></i>&nbsp;
        <input type="text" name="datetimes" /> <i class="fa fa-caret-down"></i>
      </div>
    </div>
  );
};

export default DateRangePickersTest;
