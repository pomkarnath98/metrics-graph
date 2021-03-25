import { useSelector } from "react-redux";
import { Line } from 'react-chartjs-2';
import styles from "./data.module.css";

const Graph = ({ page, setPage }) => {
    const { data } = useSelector(state => state);
    const reqData = data?.current[0].details
    console.log(reqData)
    const time = [], original = [], redOriginal = [], forecasted = [], linestatus = [], maxband = [], minband = []
    const next = data?.next
    const prev = data?.prev
    // eslint-disable-next-line
    reqData?.map(e => {
        if (e.line_status === 1 || e.line_status === 2) {
            redOriginal.push(e.original_value)
            original.push(null)
        }
        else {
            redOriginal.push(null)
            original.push(e.original_value)
        }
        time.push(e.timestamp)
        forecasted.push(e.forecasted_value)
        linestatus.push(e.line_status)
        maxband.push(e.max_band)
        minband.push(e.min_band)
    })

    return (
        <div className={styles.graph}>
            <div>
                <h1>Graphical Representation</h1>
                {prev && <button onClick={() => setPage(page - 1)}>Back</button>}
                {next && <button onClick={() => setPage(page + 1)}>Next</button>}
            </div>
            {reqData && <Line
                data={{
                    labels: time,
                    datasets: [
                        {
                            label: 'Original Value',
                            data: original,
                            backgroundColor: 'transparent',
                            borderColor: 'green',
                            pointRadius: 0
                        },
                        {
                            label: 'Anomaly',
                            data: redOriginal,
                            backgroundColor: 'transparent',
                            borderColor: 'red',
                            pointRadius: 0
                        },
                        {
                            label: 'Forecasted Value',
                            data: forecasted,
                            backgroundColor: 'transparent',
                            borderColor: 'blue',
                            pointRadius: 0,
                            borderDash: [10, 5]
                        },
                        {
                            label: 'Max Band',
                            data: maxband,
                            backgroundColor: 'transparent',
                            borderColor: 'orange',
                            pointRadius: 0
                        },
                        {
                            label: 'Min Band',
                            data: minband,
                            backgroundColor: 'transparent',
                            borderColor: 'violet',
                            pointRadius: 0
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Value'
                                },
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                }
                            },
                        ],
                        xAxes: [
                            {
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Time'
                                },
                                ticks: {
                                    display: false
                                },
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                }
                            },
                        ],
                    },
                }}
            />}
            {!reqData && <h3>Data Not Available</h3>}
        </div>
    )
}
export default Graph