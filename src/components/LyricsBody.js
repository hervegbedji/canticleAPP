import React from 'react';


const LyricsBody = (props) => { // on each btn click, i call LyricsBody
    let verses = props.canticleVerses.map((verse, i) =>
        //code here
        <div key={(i+2).toString().concat('rv')} className="verseBlock col-12">
            <div className="verseLines col-12">
                <p>{verse}</p><br/>
            </div>
        </div>);

    return (
        <div className="lyricsBody text-center col-12">
            <h1 className="display-4">{props.canticleNumber}</h1>
            {verses}
        </div>
    );
}

export {LyricsBody};