import { Label, SingleDataSet } from 'ng2-charts';
import { TotalLabels } from './../constants/total.constant';
class ChartMapper {
    getPieChartData = (total): SingleDataSet => {
        return [
            total.active,
            total.recovered,
            total.deaths
        ];
    }

    getPieChartLabel = (): Label[] => {
        return TotalLabels;
    }
}

export const chartMapper = new ChartMapper();
