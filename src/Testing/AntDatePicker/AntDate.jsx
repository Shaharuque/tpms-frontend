import { Button, DatePicker, Upload } from "antd";
import React from "react";
import { useState } from "react";
function onChange(date, dateString) {
  console.log(date, dateString);
}

const AntDate = () => {
  const [filesList, setFilesList] = useState();
  const [upload, setUpload] = useState();

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div className="flex flex-col">
      <DatePicker onChange={onChange} />
      <div className="inline-block">
        <Upload.Dragger
          listType="picture"
          accept=".jpg"
          multiple={false}
          crossOrigin="anonymous"
          customRequest={(file) => {
            setUpload(file);
            console.log(file);
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });
          }}
          onChange={(info) => {
            setFilesList(info.fileList);
          }}
          fileList={filesList}
        >
          Drag Files Here OR
          <br />
          <Button>Upload File</Button>
        </Upload.Dragger>
      </div>
    </div>
  );
};

export default AntDate;
