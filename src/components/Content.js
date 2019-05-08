import React from 'react';
import Firstslick from "../container/FirstSlick"
import SlickContainer from "../container/common/SlickContainer"
import ImgCard from '../container/common/imgcard';
import Dropdown from "../container/common/Dropdown"
import SmallSlick from "../container/common/SmallSlick"
import Singleimg from '../container/common/Singleimg';

const Content = () => {
    return (
        <div style={{ overflow: "hidden", marginTop: '55px', textAlign: "center" }}>
            <Dropdown />
            <Firstslick />
            <div style={{ display: "flex" }} ><SmallSlick /> <Singleimg /></div>
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