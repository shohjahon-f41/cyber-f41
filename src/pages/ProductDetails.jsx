import React, {useContext, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import InfoProductDel from '../assets/icons/InfoProductDel.jsx';
import {ProductsSmallImg} from '../data/data.jsx';
import ScreenSizeSvg from '../assets/icons/ScreenSizeSvg.jsx';
import CpuSvg from '../assets/icons/CpuSvg.jsx';
import CoreSvg from '../assets/icons/CoreSvg.jsx';
import MainCameraSvg from '../assets/icons/MainCamera.jsx';
import FrontCameraSvg from '../assets/icons/FrontCameraSvg.jsx';
import {BattarySvg} from '../assets/icons/BattarySvg.jsx';
import {StockSvg} from '../assets/icons/StockSvg.jsx';
import {GuarantSvg} from '../assets/icons/GuarantSvg.jsx';
import {ViewMoreSvg} from '../assets/icons/ViewMoreSvg.jsx';
// import { StarsSvg } from "../components/ProductDetails/StarsSvg.jsx";
import RelatedIphone14 from '/images/related-iphone14.png';
import {useLocation, useNavigate} from 'react-router-dom';
import {CartContext} from '../contexts/CartContext.jsx';

const icons = {
	'Screen size': <ScreenSizeSvg />,
	CPU: <CpuSvg />,
	'Number of Cores': <CoreSvg />,
	'Main camera': <MainCameraSvg />,
	'Front-camera': <FrontCameraSvg />,
	'Battery capacity': <BattarySvg />,
};

export default function App() {
	const {addCart} = useContext(CartContext);

	const [product, setProduct] = useState({});
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [selectedColor, setSelectedColor] = useState('black');
	const colors = ['#000000', '#781dbc', '#e10000', '#e1b000', '#e8e8e8'];
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const navigate = useNavigate();

	// function getProduct() {
	// 	fetch(`https://302d37aacffa4da5.mokky.dev/products/${path}`)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			console.log(json);
	// 			setProduct(json);
	// 		});
	// }

	function getProduct() {
		fetch(`https://302d37aacffa4da5.mokky.dev/products/${path}`)
			.then(async (res) => {
				if (!res.ok) {
					navigate('/404', {replace: true});
					return;
				}
				const data = await res.json();
				setProduct(data);
			})
			.catch(() => {
				navigate('/404', {replace: true});
			});
	}

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			<section className="products-details">
				<div className="container">
					<div className="products-info">
						<div className="products-info__details swiper-layout">
							{/* Миниатюры слева */}
							<Swiper
								onSwiper={setThumbsSwiper}
								loop={true}
								direction={'vertical'}
								spaceBetween={10}
								slidesPerView={4}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper"
							>
								{ProductsSmallImg.map((item) => (
									<SwiperSlide>
										<div className="products-info__small-img img1">
											<img src={product.img} alt={`alt${product.id}`} />
										</div>
									</SwiperSlide>
								))}
							</Swiper>

							{/* Основное изображение */}
							<Swiper
								style={{
									'--swiper-navigation-color': '#fff',
									'--swiper-pagination-color': '#fff',
								}}
								loop={true}
								spaceBetween={10}
								slidesPerView={1}
								navigation={true}
								thumbs={{swiper: thumbsSwiper}}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper2"
							>
								{ProductsSmallImg.map((item) => (
									<SwiperSlide>
										<img src={product.img} alt={`alt${product.id}`} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="products-info__right">
							<h1 className="right__title">{product.name}</h1>

							<div className="right__price">
								<p className="right-price__text">{product.price}$</p>
								<span className="discount">{product.old_price}$</span>
							</div>
							<div className="right__select-color">
								<p className="right__color-text">Select color :</p>
								{colors.map((color) => (
									<button
										key={color}
										onClick={() => setSelectedColor(color)}
										style={{
											backgroundColor: color,
											width: '32px',
											height: '32px',
											borderRadius: '50%',
											border: 'none',
											transform: selectedColor === color ? 'scale(1.1)' : 'scale(1) ',
											transition: 'all 0.2s ease',
											cursor: 'pointer',
										}}
									></button>
								))}
							</div>
							{/* <div className="right-spec">
								<div className="spec-item">
									<ScreenSizeSvg />
									<div className="spec-item-wrap">
										<p className="spec-item__subtitle">Screen size</p>
										<p className="spec-item-subtitle title">{product.specs}</p>
									</div>
								</div>
								<div className="spec-item">
									<CpuSvg />
									<div className="spec-item-wrap">
										<p className="spec-item__subtitle">CPU</p>
										<p className="spec-item-subtitle title">Apple A16 Bionic</p>
									</div>
								</div>
								<div className="spec-item">
									<CoreSvg />
									<div className="spec-item-wrap">
										<p className="spec-item__subtitle">Number of Cores</p>
										<p className="spec-item-subtitle title">6</p>
									</div>
								</div>
								<div className="spec-item">
									<MainCameraSvg />
									<div className="spec-item-wrap">
										<p className="spec-item__subtitle">Main camera</p>
										<p className="spec-item-subtitle title">48-12 -12 MP</p>
									</div>
								</div>
								<div className="spec-item">
									<FrontCameraSvg />
									<div className="spec-item-wrap">
										<p className="spec-item__subtitle">Front-camera</p>
										<p className="spec-item-subtitle title">12 MP</p>
									</div>
								</div>
								<div className="spec-item">
									<BattarySvg />
									<div className="spec-item-wrap">
										<p className="spec-item__subtitle">Battery capacity</p>
										<p className="spec-item-subtitle title">4323 mAh</p>
									</div>
								</div>
							</div> */}
							<div className="right-spec">
								{Object.entries(product.specs || {}).map(([key, value]) => (
									<div className="spec-item" key={key}>
										{/* <div className="spec-item__icon">{icons[key]}</div> */}
										<div className="spec-item-wrap">
											<p className="spec-item__subtitle">{key}</p>
											<p className="spec-item-subtitle title">{value}</p>
										</div>
									</div>
								))}
							</div>

							<p className="right__desc">{product.desc}</p>
							<div className="right-buttons">
								<button className="right-button">Add to Wishlist</button>
								<button onClick={() => addCart(product)} className="right-button card">
									Add to Card
								</button>
							</div>
							<div className="right-info-product">
								<div className="info-product-item">
									<div className="info-product-icon">
										<InfoProductDel />
									</div>
									<div className="info-products-text">
										<p className="info-product-item-text gray">Free Delivery</p>
										<p className="info-product-item-text">1-2 day</p>
									</div>
								</div>
								<div className="info-product-item">
									<div className="info-product-icon">
										<StockSvg />
									</div>

									<div className="info-products-text">
										<p className="info-product-item-text gray">In Stock</p>
										<p className="info-product-item-text">Today</p>
									</div>
								</div>
								<div className="info-product-item">
									<div className="info-product-icon">
										<GuarantSvg />
									</div>
									<div className="info-products-text">
										<p className="info-product-item-text gray">Guaranteed</p>
										<p className="info-product-item-text">1 year</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="details">
				<div className="container">
					<div className="details__wrap">
						<div className="details__main-text">
							<p className="details__title">Details</p>
							<p className="details__subtitle">
								Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow
								you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple
								everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's
								6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
							</p>
						</div>
						<div className="details__product-main">
							<div className="details__product-wrap">
								<p className="details__product-title">Screen</p>
								<div className="details__product-item">
									<p className="details__product-spec">Screen diagonal</p>
									<p className="details__product-spec">6.7"</p>
								</div>
								<div className="details__product-item">
									<p className="details__product-spec">The screen resolution</p>
									<p className="details__product-spec">2796x1290</p>
								</div>
								<div className="details__product-item">
									<p className="details__product-spec">The screen refresh rate</p>
									<p className="details__product-spec">120Hz</p>
								</div>
								<div className="details__product-item">
									<p className="details__product-spec">The pixel density</p>
									<p className="details__product-spec">460 ppi</p>
								</div>
								<div className="details__product-item">
									<p className="details__product-spec">Screen type</p>
									<p className="details__product-spec">OLED</p>
								</div>
								<div className="details__product-item">
									<p className="details__product-spec">Additionally</p>
									<div className="details__product-spec">
										<div className="details__product-spec-wrap">
											<div className="details__product-spec-item">
												<p className="details__product-spec-text">Dynamic Island</p>
												<p className="details__product-spec-text">Always-On display</p>
												<p className="details__product-spec-text">HDR display</p>
												<p className="details__product-spec-text">True Tone</p>
												<p className="details__product-spec-text">Wide color (P3)</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="details__product-wrap">
								<p className="details__product-title">CPU</p>
								<div className="details__product-item">
									<p className="details__product-spec">CPU</p>
									<p className="details__product-spec">A16 Bionic</p>
								</div>
								<div className="details__product-item">
									<p className="details__product-spec">Number of cores</p>
									<p className="details__product-spec">6</p>
								</div>
							</div>
						</div>
						<div className="details__product-buttons">
							<button className="details__product-more">
								View More
								<ViewMoreSvg className="viewmoresvg" />
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="reviews">
				<div className="container">
					<div className="reviews-wrapper">
						<p className="reviews__title">Reviews</p>
						<div className="reviews__stars-wrap">
							<div className="reviews__stars">
								<p className="reviews__stars-rate">4.8</p>
								<p className="reviews__stars-rate-p">of 125 reviews</p>
							</div>
							<div className="reviews__stars-info">
								<div className="reviews__level">
									<div className="reviews__level-item">
										<p className="reviews-level-text">Excellent</p>
										<div className="reviews__progress">
											<div className="reviews__progress-fill"></div>
										</div>

										<p className="reviews-level-number">100</p>
									</div>
									<div className="reviews__level-item">
										<p className="reviews-level-text">Excellent</p>
										<div className="reviews__progress">
											<div className="reviews__progress-fill"></div>
										</div>
										<p className="reviews-level-number">100</p>
									</div>
									<div className="reviews__level-item">
										<p className="reviews-level-text">Excellent</p>
										<div className="reviews__progress">
											<div className="reviews__progress-fill"></div>
										</div>
										<p className="reviews-level-number">100</p>
									</div>
									<div className="reviews__level-item">
										<p className="reviews-level-text">Excellent</p>
										<div className="reviews__progress">
											<div className="reviews__progress-fill"></div>
										</div>
										<p className="reviews-level-number">100</p>
									</div>
									<div className="reviews__level-item">
										<p className="reviews-level-text">Excellent</p>
										<div className="reviews__progress">
											<div className="reviews__progress-fill"></div>
										</div>
										<p className="reviews-level-number">100</p>
									</div>
								</div>
							</div>
						</div>
						<input placeholder="Leave Comment" id="leavecomment" type="text" className="reviews__comment" />
					</div>
				</div>
			</section>
			<section className="related">
				<div className="container">
					<p className="related__title">Related Products</p>
					<div className="related__products">
						<div className="related__products-item">
							<img src={RelatedIphone14} alt="a" />
							<div className="related__products-content">
								<div className="related__products-texts">
									<p className="related__products-title">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
									<p className="related__products-price">$1437</p>
								</div>
								<button className="related__products-buy">Buy Now</button>
							</div>
						</div>
						<div className="related__products-item">
							<img src={RelatedIphone14} alt="a" />

							<div className="related__products-content">
								<div className="related__products-texts">
									<p className="related__products-title">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
									<p className="related__products-price">$1437</p>
								</div>
								<button className="related__products-buy">Buy Now</button>
							</div>
						</div>
						<div className="related__products-item">
							{/* <img src="" alt="" /> */}
							<img src={RelatedIphone14} alt="a" />

							<div className="related__products-content">
								<div className="related__products-texts">
									<p className="related__products-title">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
									<p className="related__products-price">$1437</p>
								</div>
								<button className="related__products-buy">Buy Now</button>
							</div>
						</div>
						<div className="related__products-item">
							<img src={RelatedIphone14} alt="a" />

							<div className="related__products-content">
								<div className="related__products-texts">
									<p className="related__products-title">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
									<p className="related__products-price">$1437</p>
								</div>
								<button className="related__products-buy">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
