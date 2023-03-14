import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import SessionWise from "../SessionWise";
import AntDTable from "./AntDTable";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black ",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});
const PdfDownload = () => {
  const data = [
    ["Name", "Age", "Gender"],
    ["John Doe", "30", "Male"],
    ["Jane Doe", "25", "Female"],
    ["Bob Smith", "40", "Male"],
  ];
  return (
    <PDFViewer>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              <AntDTable></AntDTable>
            </Text>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfDownload;
