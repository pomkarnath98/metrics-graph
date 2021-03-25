import { useSelector } from "react-redux";
import styles from "./data.module.css";
import tapeMeasure from "../Utils/measure.png";
import country from "../Utils/country.png";
import product from "../Utils/package.png";
import device from "../Utils/device.png";
import system from "../Utils/system.png";

const Dimensions = () => {
    const { data } = useSelector(state => state);
    const dimensions = data?.current[0].dimensions
    const measure = data?.current[0].measure
    const obj = { measure }
    // eslint-disable-next-line
    dimensions?.map(e => {
        obj[e.name] = e.value
    })
    return (
        <div className={styles.dimensions}>

            <div>
                <div>
                    <div>Measure</div>
                    <h2>{obj.measure}</h2>
                </div>
                <div>
                    <img src={tapeMeasure} alt="measure" />
                </div>
            </div>

            <div>
                <div>
                    <div>Country</div>
                    <h2>{obj.country}</h2>
                </div>
                <div>
                    <img src={country} alt="country" />
                </div>
            </div>

            <div>
                <div>
                    <div>Product Family</div>
                    <h2>{obj.productfamily}</h2>
                </div>
                <div>
                    <img src={product} alt="package" />
                </div>
            </div>

            <div>
                <div>
                    <div>Device Type</div>
                    <h2>{obj.devicetype}</h2>
                </div>
                <div>
                    <img src={device} alt="device" />
                </div>
            </div>

            <div>
                <div>
                    <div>Operating System</div>
                    <h2>{obj.os}</h2>
                </div>
                <div>
                    <img src={system} alt="system" />
                </div>
            </div>

        </div>
    )
}

export default Dimensions