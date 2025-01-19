import LoadingData from "../LoadingData/LoadingData";
import classes from "./DisplayContainer.module.scss";

const DisplayContainer = ({searchData}) => {

  return (
    <main>
    <LoadingData searchData={searchData}/>
    </main>
  )
}

export default DisplayContainer;
