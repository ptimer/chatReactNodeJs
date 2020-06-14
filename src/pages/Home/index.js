import React from 'react'

import './Home.scss';
import { Message, DialogItem } from '../../components'

const Home = props => {
	return (
		<section className="home">
			{/*<Dialogs items={[
							{
								user: {
									fullname: 'Фёдор Достоевский',
									avatar: null
								},
								message: {
									text: "dfggggggdfgdfg dfgdfgdfgdfg лала лалала",
									isReaded: false,
									created_at: new Date() 
								}
							}
						]} /> */}
			<DialogItem user={
				{
					fullname: 'Фёдор Достоевский',
					avatar: null,
					isOnline: true,
				}
			} unreaded={1}/>

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

			<Message
			avatar="https://i.pinimg.com/736x/63/4a/6c/634a6c2dc8f5579b3fc1d0147da85b27.jpg"
			attachments = {[
				{
					filename: 'image.jpg',
					url: 'https://source.unsplash.com/WLUHO9A_xik/1600x900'
				}
			]}
			/>
		</section>

	);
}

export default Home;