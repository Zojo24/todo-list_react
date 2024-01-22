import React, { useState } from 'react'

const TheHeader = () => {
	const [menus] = useState([
		{
			name: 'Home',
			href: '#/'
		},
		{
			name: 'About',
			href: '#/about'
		}
	])
	return (
		<header className="header">
			<div className="header-wrapper">
				<a href="#/">
					<img
						className="bank-logo"
						src="/TossBank_Logo_Primary_Reverse.png"
						alt="Toss Bank logo"
					/>
				</a>
				<div className="menu">
					{menus.map((menu, index) => (
						<a
							key={index}
							href={menu.href}>
							{menu.name}
						</a>
					))}
				</div>
			</div>
		</header>
	)
}
export default TheHeader
