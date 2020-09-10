import React from 'react';

<div>
    <img
        src={`${KharacterData[this.state.kharacter].fullImg}`}
        alt={KharacterData[this.state.kharacter].link}
    />
    <div className={'button-handle'}>
        <button className={'button button__one'}>
            <span>BASIC</span>
        </button>
        <button className={'button button__one'}>
            <span>SPECIAL</span>
            <span><video src="/img/video.mp4" width="107" height="55" autoPlay loop></video></span>
        </button>
        <button className={'button button__one'}>
            <span>KOMBO</span>
            <span><video src="/img/video.mp4" width="107" height="55" autoPlay loop></video></span>
        </button>
        <button className={'button button__one'}>
            <span>FINISHER</span>
            <span><video src="/img/video.mp4" width="107" height="55" autoPlay loop></video></span>
        </button>
    </div>
</div>
    