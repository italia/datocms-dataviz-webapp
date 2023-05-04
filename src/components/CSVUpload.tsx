import Papa from "papaparse";

function UploadCSV({ setData }) {
  function uploadFile(event) {
    let file = event.target.files[0];

    Papa.parse(file, {
      header: false,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }

  return (
    <div className="w-full px-10">
      <div className="m-10 border-2">
        <p>Upload a csv</p>
        <input
          className="input"
          type="file"
          name="file"
          accept=".csv"
          onChange={(e) => uploadFile(e)}
        />
      </div>
    </div>
  );
}

export default UploadCSV;
