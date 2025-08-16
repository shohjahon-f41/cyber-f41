import React, {useContext, useRef} from 'react';
import {Link} from 'react-router-dom';
import {CloseIcon, HeartIcon, KorzinaIcon, LogoIcon, MenuIcon} from '../assets/icons';
import {LanguageContext} from '../contexts/LanguageContext';
import useTranslate from '../hooks/useTranslate';

function Header() {
	let MenuBtnRef = useRef(document.querySelector('.header-menu'));
	const {t} = useTranslate();
	const {setLanguage} = useContext(LanguageContext);

	function MenuBtn() {
		MenuBtnRef.current.classList.add('active');
		document.querySelector('#root').classList.add('active');
	}

	function CloseBtn() {
		MenuBtnRef.current.classList.remove('active');
		document.querySelector('#root').classList.remove('active');
	}

	const handleChange = (e) => {
		setLanguage(e.target.value);
		localStorage.setItem('lang', e.target.value);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header-wrap">
					<div className="header-logo">
						<Link to="/">
							<LogoIcon />
						</Link>
					</div>
					<div className="header-search">
						<input type="text" placeholder="Search" />
					</div>
					<nav className="header-nav">
						<Link to="/" className="header-nav-title">
							{t('home')}
						</Link>
						<Link to="#" className="header-nav-title">
							{t('about')}
						</Link>
						<Link to="#" className="header-nav-title">
							{t('contact_us')}
						</Link>
						<Link to="#" className="header-nav-title">
							{t('blog')}
						</Link>
					</nav>
					<div className="header-right">
						<Link>
							<HeartIcon />
						</Link>
						<Link to="/cart">
							<KorzinaIcon />
						</Link>
					</div>
					<select
						onChange={(e) => {
							handleChange(e);
						}}
						defaultValue={localStorage.getItem('lang')}
					>
						<option value="uz">Uz</option>
						<option value="eng">Eng</option>
					</select>
					<div className="header-menu-icon">
						<button onClick={MenuBtn} className="MenuBtn">
							<MenuIcon />
						</button>
					</div>

					<div className="header-menu" ref={MenuBtnRef}>
						<div className="header-close-btn">
							<button onClick={CloseBtn}>
								<CloseIcon />
							</button>
						</div>
						<nav className="header-nav-menu">
							<Link to="#" className="">
								Home
							</Link>
							<Link to="#" className="">
								About
							</Link>
							<Link to="#" className="">
								Contact Us
							</Link>
							<Link to="#" className="">
								Blog
							</Link>
						</nav>
						<div className="header-nav-menu-liked">
							<Link className="header-nav-menu-liked-title">
								<HeartIcon />
								Favourites
							</Link>
							<Link to="/cart" className="header-nav-menu-liked-title">
								<KorzinaIcon />
								Korzina
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
