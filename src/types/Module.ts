// Types Imports
import Device from "./Device";
import Metric from "./Metric";

export default interface Module {
  id: string;
  label: string;
  currentMetric: Metric;
  devices: Device[];
}