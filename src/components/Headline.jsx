import React from 'react'

const Headline = () => {
	return (
		<div className="headline">
			<h1 className="title">Todo List</h1>
			<div className="new-task">
				<ul className="description">
					<li className="description__item">
						<span>작업 내용</span>
					</li>
					<li className="description__item">
						<span>마감일</span>
					</li>
					<li> </li>
				</ul>
			</div>
		</div>
	)
}

export default Headline
