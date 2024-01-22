import React, { useEffect, useState } from 'react'
import about from '../store/about'

export default function About() {
	const { intro, name, email, blog } = about
	return (
		<div className="about-container about">
			<div className="about-wrapper">
				<img
					src="/about.png"
					alt="toss bank"
				/>
				<p className="intro">{intro}</p>
				<div className="developer">
					<span className="developer_intro">개발자</span>
					<img
						className="profile"
						src="/profile.jpg"
						alt="profile picture"
					/>
					<p className="name">{name}</p>
					<p>
						<a
							href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
							target="_blank">
							{email}
						</a>
					</p>
					<p>
						<a
							href={blog}
							target="_blank">
							Blog
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
