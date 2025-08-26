import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
function NotFound() {
	useEffect(() => {
		document.title = '404 | Page not found';
	}, []);
	return (
		<div className="not-found">
			<h1 className="not-found__title">404</h1>
			<p className="not-found__text">Oops! The page you are looking for doesn’t exist or has been removed.</p>
			<Link to="/" className="not-found__btn">
				Back to Home
			</Link>
		</div>
	);
}

export default NotFound;
