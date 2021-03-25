import { useEffect, useState } from "react";
import { fetchData } from '../Redux/actions';
import { useDispatch, useSelector } from "react-redux";
import Dimensions from "./Dimensions";
import Graph from "./Graph";

const Data = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchData(page))
        // eslint-disable-next-line
    }, [page])

    return (
        <>
            {
                !isLoading && !error &&
                <>
                    <Dimensions />
                    <Graph {...{ page, setPage }} />
                </>
            }
            {
                isLoading &&
                <h2>Loading...</h2>
            }
            {
                error &&
                <h2>Something Went Wrong!</h2>
            }
        </>
    )
}

export default Data