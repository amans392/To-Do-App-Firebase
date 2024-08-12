import DataResults from "./DataResults";

const DataResultsList = ({data, loadUserData}) => {

    console.log("DataResults are...", data)

    return ( 
        <div className="data-result-list">
            {
                data.map((d, key) => {
                    return <DataResults data={d}></DataResults>
                }
            
            )

            }
        </div>
    )

}
 
export default DataResultsList;