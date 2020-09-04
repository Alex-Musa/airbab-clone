import React from 'react'
import Banner from './Banner'
import Card from './Card'

import './Home.css'


function Home() {
    return (
        <div className="home">

            <Banner />

            <div className="home__section">
                <Card 
                    src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/04/TestMediaAssets.jpg"
                    title="Online Experiences"
                    desctiption="Unique activities we can do togther, let by a world of hosts."
                />
                <Card 
                    src="https://mediad.publicbroadcasting.net/p/wunc/files/styles/x_large/public/201905/SanFrancisco_12623927_PrivateRoomApt_LivingRoom.jpg"
                    title="Enter Home"
                    desctiption="Spaces that are more than just a place to sleep"
                />
                <Card 
                    src="https://mediad.publicbroadcasting.net/p/wunc/files/styles/x_large/public/201905/SanFrancisco_12623927_PrivateRoomApt_LivingRoom.jpg"
                    title="Master Room"
                    desctiption="Spaces that are more than just a place to sleep"
                />
            </div>

            <div className="home__section">
                <Card 
                    src="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                    title="Kansas City Missouri"
                    desctiption="Enjoy the amazing sight of kc with this room"
                    price="$100/night"
                    />
                <Card 
                src="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                title="Kansas City Missouri"
                desctiption="Enjoy the amazing sight of kc with this room"
                price="$100/night"/>
                <Card 
                src="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                title="Kansas City Missouri"
                desctiption="Enjoy the amazing sight of kc with this room"
                price="$100/night"/>
            </div>
            
        </div>
    )
}

export default Home
