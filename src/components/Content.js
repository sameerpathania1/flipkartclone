import React from 'react';
import Firstslick from "../container/FirstSlick"
import SlickContainer from "../container/common/SlickContainer"
import ImgCard from '../container/common/imgcard';
import Dropdown from "../container/common/Dropdown"
const Content = () => {
    return (
        <div style={{ overflow: "hidden", marginTop: '55px', textAlign: "center" }}>
            <Dropdown />
            <Firstslick />
            <SlickContainer />
            <ImgCard />
            <SlickContainer />
            <SlickContainer />
            <ImgCard />
            <SlickContainer />
            <ImgCard />
            <SlickContainer />
            <ImgCard />
            <SlickContainer />
            <ImgCard />
            <SlickContainer />
        </div>
    );
}

export default Content;