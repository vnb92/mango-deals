import React, {FC } from 'react'
import CanvasJSReact from './vendors/canvasjs.react'
import { ChartConfiguration } from './types/chart-config'
import { ChartRefHandler } from './types/ref-handler';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Chart: FC<ChartProps> = ({ config, onRef }) => {
  return (
    <CanvasJSChart options={config} onRef={onRef} />
  );
}

export interface ChartProps {
  config: ChartConfiguration,
  onRef?: ChartRefHandler
}
