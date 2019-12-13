import Page1 from './pages/page/index.jsx';
import Page2 from './pages/page2/index.jsx';

export default [
	{
		path: "/",
		component: Page1,
		exact: true,
	},
	{
		path: "/page2",
		component: Page2,
		exact: true,
	}
];
