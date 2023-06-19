import { useState } from "react";
import "./App.css";

function App() {
    const [file, setFile] = useState(null);
    const [select, setSelect] = useState("1");

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
        } else {
            setFile(null); // Clear the file state if an invalid file is selected
        }
    };

    const validate = (e) => {
        e.preventDefault();
        console.log("validate");
        // alert("validate");
        fetch("backend api url", {
            method: "POST",
            body: JSON.stringify({
                file: file,
                select: select,
            }),
        });
    };

    return (
        <>
            <form>
                <div>
                    <select value={select} onChange={handleSelectChange}>
                        <option value="ABC">ABC</option>
                        <option value="XYZ">XYZ</option>
                    </select>
                </div>
                <div>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                    />
                    {/* Only accept PDF files */}
                    <button onClick={validate} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default App;
