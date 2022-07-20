import React from 'react'
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    DateTime,
    Legend,
    Tooltip,
    LineSeries
} from "@syncfusion/ej2-react-charts";

import {lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from "../../data/dummy";
import {useStateContent} from "../../contexts/ContextProvider";

const LineChart = () => {
    const {currentMode}=useStateContent();
    return (
        <ChartComponent>
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
            <SeriesCollectionDirective
                id="line-chart"
                height="420px"
                primaryXAxis={LinePrimaryXAxis}
                primaryYAxis={LinePrimaryYAxis}
                chartArea={{border: {width: 0}}}
                tooLtip={{enable: true}}
                background={currentMode==='Dark'?'#33373E':'#fff'}

            >
                {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default LineChart