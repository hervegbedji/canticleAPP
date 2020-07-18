import React from 'react';


const LyricsBody = (props) => { // on each btn click, i call LyricsBody

    let verses = props.canticleVerses.map((verse, i) =>
        <div key={(i+2).toString().concat('rv')} className="verseBlock col-12">
            <div className="verseLines col-12">
                <p>{verse}</p><br/>
            </div>
        </div>);

    let chorusStyleExtension = props.isChorusDisplayed ? "d-block" : "d-none";
    return (
        <div className="lyricsBody text-center col-12">
            <h1 className="canticleTitle d-block col-12 display-4">{props.canticleNumber}</h1>
            <div className={`chorus col-12 ${chorusStyleExtension}`} ></div>
            {verses}

        </div>
    );
}

export {LyricsBody};