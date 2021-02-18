// Types Imports
import { Device } from "./Device";
import { Metric } from "./Metric";

export type Module = {
  id: string;
  label: string;
  currentMetric: Metric;
  devices: Device[];
};
