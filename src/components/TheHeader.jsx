import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TheHeader = () => {
	const [menus] = useState([
		{
			name: 'Home',
			to: '/'
		},
		{
			name: 'About',
			to: '/about'
		}
	])

	return (
		<header className="header">
			<div className="header-wrapper">
				<Link to="/">
					<img
						className="bank-logo"
						src="/TossBank_Logo_Primary_Reverse.png"
						alt="Toss Bank logo"
					/>
				</Link>
				<div className="menu">
					{menus.map((menu, index) => (
						<Link
							key={index}
							to={menu.to}>
							{menu.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}

export default TheHeader
