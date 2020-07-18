import React from 'react';
import { FaAngleLeft, FaAngleRight, FaSistrix } from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';

// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px

class SearchButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleCloseSearch = this.handleCloseSearch.bind(this);
    }
    handleCloseSearch(){
        this.props.toggle();
    }
    render(){
        return (
            <div className="menu-bar col-12">
                <div id="closeSearch" className="refBtn closeSearch col-3 text-center">
                    <a href="#" role="button" onClick={this.handleCloseSearch}><IoMdClose/></a>
                </div>
            </div>

        );
    }
}

class LyricsButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenSearchPage = this.handleOpenSearchPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handleChorusDisplay = this.handleChorusDisplay.bind(this);
    }
    handleOpenSearchPage(){
        this.props.toggle();
    }

    handlePrevPage(){
        this.props.prev();
    }

    handleNextPage(){
        this.props.next();
    }

    handleChorusDisplay(){
        this.props.chorusDisplay();
    }

    render(){
        let chorusBtnLabel = this.props.isChorusDisplayed ? <IoMdClose/> : "REF";
        return (
            <div className="menu-bar col-12">
                <div className="previous text-center col-2" role="button" onClick={this.handlePrevPage}>
                    <a >
                        <FaAngleLeft size={32}/>
                    </a>
                </div>
                <div className="searchBtn text-center col-3" role="button" onClick={this.handleOpenSearchPage}>
                    <a>
                        <span className="d-block"><FaSistrix /></span>
                        <span className="d-block">{this.props.canticleNbr}</span>
                    </a>
                </div>
                <div className="refBtn col-3 text-center" role="button" onClick={this.handleChorusDisplay}>
                    <a>{chorusBtnLabel}</a>
                </div>
                <div className="next text-center col-2" role="button" onClick={this.handleNextPage}>
                    <a>
                        <FaAngleRight size={32}/>
                    </a>
                </div>
            </div>

        );
    }
}



const Buttons = (props) => {

    if(!props.isAppInLyricsMode){
        return <SearchButtons toggle={props.onToggleAppMode}/>
    }
    return <LyricsButtons
        canticleNbr={props.canticleNbr}
        toggle={props.onToggleAppMode}
        prev={props.onPrevPage}
        next={props.onNextPage}
        chorusDisplay={props.chorDis}
        isChorusDisplayed={props.chorusDisplayState}
    />;
}

export { Buttons };