import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip} from "@syncfusion/ej2-react-charts";
const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
    <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    fill={color}
    border={{color: currentColor, width:2}}
    dataSource={data}
    xName={"x"}
    >

    </SparklineComponent>
  )
}

export default SparkLine