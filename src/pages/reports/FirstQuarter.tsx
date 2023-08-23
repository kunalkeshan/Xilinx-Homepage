/**
 * First Quarter Page
 */

// Dependencies
import ReportPage from '../../components/layouts/Report';
import { REPORTS } from '../../data/reports';

const FirstQuarter = () => {
	const data = REPORTS[0];
	return <ReportPage data={data} />;
};

export default FirstQuarter;
