import { StateTableHeaders } from '../constants/tableHeader.constant';
import { DistrictTableHeaders } from './../constants/tableHeader.constant';

class TableHelper {
    getTableHeaders = (stateTable?): Array<string> => {
        return stateTable ? StateTableHeaders : DistrictTableHeaders;
    }
};

export const tableHelper = new TableHelper();