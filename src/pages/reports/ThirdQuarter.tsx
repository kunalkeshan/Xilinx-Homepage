/**
 * Third Quarter Page
 */

// Dependencies
import ReportPage from '../../components/layouts/Report';
import { REPORTS } from '../../data/reports';

const ThirdQuarter = () => {
	const data = REPORTS[2];
	return <ReportPage data={data} />;
};

export default ThirdQuarter;
