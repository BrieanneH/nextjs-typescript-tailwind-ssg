import { Fragment } from 'react';
import { CLIENT_NAME } from 'lib/constants';

const Index = () => {
	return (
		<Fragment>
			<div className=' text-custom text-black block mx-auto'>
				Welcome to {CLIENT_NAME}&apos;s portfolio
			</div>
		</Fragment>
	);
};

export default Index;
