import React, { useEffect, useState } from 'react'
import Store from '../store/about'

const About = () => {
	const [aboutData, setAboutData] = useState(Store.state)

	useEffect(() => {
		setAboutData(Store.state)
	}, [])

	return (
		<div className="about-container about">
			<div className="about-wrapper">
				<img
					src="/about.png"
					alt="toss bank"
				/>
				<p className="intro">{aboutData.intro}</p>
				<div className="developer">
					<span className="developer_intro">개발자</span>
					<img
						className="profile"
						src="/profile.jpg"
						alt="profile picture"
					/>
					<p className="name">{aboutData.name}</p>
					<p>
						<a
							href={`https://mail.google.com/mail/?view=cm&fs=1&to=${aboutData.email}`}
							target="_blank">
							{aboutData.email}
						</a>
					</p>
					<p>
						<a
							href={aboutData.blog}
							target="_blank">
							Blog
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
