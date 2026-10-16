import React from "react";
import CatList from "./category_list";

const Categories = () => {
	const titles = ['Recommended for you', 'Award Winning', 'Get it delivered'];
	return titles.map((title, idx) => <CatList title={title} key={idx}/>);
}

export default Categories;
