import Container from "../components/Containers/Container";
import Title from "../components/Title";
import DatePickerButton from "../components/Buttons/DatePickerButton";
import DropDownSelect from "../components/Buttons/DropDownSelect";
import Button from "../components/Buttons/Button";

//import { generateCsv, generatePdf, /**ExportExcel**/ } from "../components/Reports/FinancialReport";
import { useState } from "react";
import { getIncomeData, getVisitationData } from "../Queries";

const reportTypes = ["Income", "Visitors"];
const fileFormats = ["CSV", "Excel", "PDF"];

const Reports = () => {
  const [reportType, setReportType] = useState(reportTypes[0]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fileType, setFileType] = useState(fileFormats[0]);
  const [reportData, setReportData] = useState([]);

  const setValue = (type, value) => {
    console.log(type, value);
    if (type == "reportType") {
      setReportType(value);
    } else if (type == "startDate") {
      setStartDate(value);
    } else if (type == "endDate") {
      setEndDate(value);
    } else if (type == "fileType") {
      setFileType(value);
    }
  };

  const generateReport = async () => {
    await getReportData();
    formatReport();
  };

  const getReportData = async () => {
    let result = [];
    try {
      if (reportType == "Income") {
        result = await getIncomeData(startDate, endDate);
      } else if (reportType == "Visitors") {
        result = await getVisitationData(startDate, endDate);
      }
      setReportData(result);
    } catch (exception) {
      console.error(exception);
    }
  };

  const formatReport = () => {
    if (fileType == "CSV") {
      generateCsv(reportData);
    } /**else if (fileType == "Excel") {
      ExportExcel(reportData);
    }**/ else if (fileType == "PDF") {
      generatePdf(reportData);
    }
  };

  return (
    <>
      <Container>
        <Title name="Reports" />
        <div className="grid grid-cols-5 gap-4 my-5 sm:grid-cols-2">
          <div>
            <DropDownSelect
              text="Report type"
              typeChange="reportType"
              options={reportTypes}
              onChangeFunction={setValue}
            />
          </div>
          <div>
            <DropDownSelect
              text="File type"
              typeChange="fileType"
              options={fileFormats}
              onChangeFunction={setValue}
            />
          </div>
          <div>
            <DatePickerButton
              text="Start date"
              type="startDate"
              onChangeFunction={setValue}
            />
          </div>
          <div>
            <DatePickerButton
              text="End date"
              type="endDate"
              onChangeFunction={setValue}
            />
          </div>
          <div className="mt-8">
            <Button
              text="Generate"
              type="add"
              onclickFunction={generateReport}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Reports;
