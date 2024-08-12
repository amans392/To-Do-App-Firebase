const DataResults = (data) => {
    
    console.log("DataResults are...", data)
    return ( 

        <div className="data-result">
            {/* {data}         */}
            <li key={data}>PlaceHolder</li>
        </div>
     );
}
 
export default DataResults;