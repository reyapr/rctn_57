import React from "react";
import HomeTemplate from "../Components/Templates/Home.jsx";

class Home extends React.Component {
    render() {
        let data = [
            {
                alt: '1',
                title: 'title',
                desc: 'desc',
                image: 'https://pbs.twimg.com/profile_images/1303645505465974785/BAedfmOT_400x400.jpg'
            },
            {
                alt: '2',
                title: 'title',
                desc: 'desc',
                image: 'https://ekrutassets.s3.ap-southeast-1.amazonaws.com/blogs/images/000/002/554/original/Hacktiv8-raih-pendanaan-pra-seri-A-EKRUT.jpg'
            },
            {
                alt: '3',
                title: 'title',
                desc: 'desc',
                image: 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20211104152816_618399a02ea30.jpg'
            }
        ]
        return (
            <HomeTemplate data={data}/>
        )
    }
}

export default Home