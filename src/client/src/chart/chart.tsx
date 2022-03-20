import React, {FC } from 'react'
import CanvasJSReact from './vendors/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Chart: FC<ChartProps> = ({ config }) => {
  return (
    <CanvasJSChart options={config} />
  );
}

export interface ChartProps {
  config: CanvasJS.ChartOptions
}
