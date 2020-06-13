import React from 'react'

import './Home.scss';
import { Message } from '../../components/index'

const Home = props => {
	return (
		<section className="home">
			<Message
			avatar="https://i.pinimg.com/736x/63/4a/6c/634a6c2dc8f5579b3fc1d0147da85b27.jpg"
			text="Салам, Брут ! Че как, уничтожил флот галлов ?"
			date={new Date("Sun Jun 07 2020 16:15:17")}
			attachments = {[
				{
					filename: 'image.jpg',
					url: 'https://source.unsplash.com/WLUHO9A_xik/1600x900'
				},
				{
					filename: 'image.jpg',
					url: 'https://source.unsplash.com/WLUHO9A_xik/1600x900'
				},
				{
					filename: 'image.jpg',
					url: 'https://source.unsplash.com/WLUHO9A_xik/1600x900'
				}
			]}
			/>

			<Message
			avatar="https://i.pinimg.com/736x/63/4a/6c/634a6c2dc8f5579b3fc1d0147da85b27.jpg"
			text="Салам, Брут !"
			date={new Date("Sun Jun 07 2020 16:15:17")}
			isMe={true}
			isReaded={false}
			/>

			<Message
			avatar="https://i.pinimg.com/736x/63/4a/6c/634a6c2dc8f5579b3fc1d0147da85b27.jpg"
			isTyping={true}
			/>
		</section>

	);
}

export default Home;