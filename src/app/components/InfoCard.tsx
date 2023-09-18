"use client";
import Slider from "react-slick";

const data = [
	{
		title: "Jan de Vries",
		id: 1,
		desc: "DT Digital has revolutionized our payroll management. Their platform has made our payroll process incredibly efficient. No more manual records or Excel spreadsheets. It's a game-changer!",
	},
	{
		title: "Lotte Jansen",
		id: 2,
		desc: "I can't say enough about DT Digital. Their payroll management solution is top-notch. It's user-friendly, and their support team is exceptional. I highly recommend them!",
	},
	{
		title: "Pieter de Boer",
		id: 3,
		desc: "DT Digital has simplified our payroll history management. Having all our data in one place has saved us time and headaches. Downloading payroll history is a breeze. Thank you, DT Digital!",
	},
];

export function InfoCard() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section
			data-aos="zoom-in-up"
			className="content-center mx-auto max-w-screen-xl md:px-5"
		>
			<div className="max-w-2xl mx-auto p-3 my-7">
				<Slider
					{...settings}
					autoplay
					// fade
					vertical={false}
					arrows={false}
					verticalSwiping
					dots
				>
					{data.map((item) => (
						<div
							key={item.id}
							className="w-[512px] h-[320px] card bg-primary p-10 lg:p-20 text-white"
						>
							<h4>{item.title}</h4>
							<p className="lg:text-lg leading-loose mt-5">{item.desc}</p>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
