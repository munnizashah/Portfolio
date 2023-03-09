import React from 'react'
import Image from 'next/image'
import propertyImg from '../../public/assets/projects/property.jpeg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
import ProjectPage from '../../components/ProjectPage';

const property = () => {
	return (
		<ProjectPage
		projectImg={propertyImg}
		projectTitle='Property Finder'
		techTitle='React / Tailwind'
		pTag='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		technology1='React'
		technology2='Tailwind'
		/>
	)
}

export default property;

