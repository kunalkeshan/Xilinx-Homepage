/**
 * Second Quarter Page
 */

// Dependencies
import ReportPage from '../../components/layouts/Report';
import { REPORTS } from '../../data/reports';

const SecondQuarter = () => {
	const data = REPORTS[1];
	return <ReportPage data={data} />;
};

export default SecondQuarter;
