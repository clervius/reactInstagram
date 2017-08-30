import React from 'react'

export const SearchBar = (props) => {
 return (
 	<nav className="topNav">
 		<div className="navContainer">
 			<ul>
 				<li className="lev1">
 					<a className="logoLink spriteBg">Instagram</a>
 				</li>
 				<li className="lev1">
 					<input type="search" className="topSearchInput" placeholder="Search" />
 				</li>
 				<li className="lev1">
 					<ul>
 						<li className="lev2">
 							<a className="spriteBg2"></a>
 						</li>
 						<li className="lev2">
 							<a className="spriteBg2"></a>
 						</li>
 						<li className="lev2">
 							<a className="spriteBg"></a>
 						</li>
 					</ul>
 				</li>
 			</ul>
 		</div>
 	</nav>
 	)
}