import React from 'react';
import canticleList from './ConsumableDataFromDB.js';
import { Screen } from './AppScreen.js';
import { Buttons } from './AppButtons.js';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';


const canticleInfo = (canticleNbr) => {
    let canticleIndex = canticleNbr -1;
    return canticleList[canticleIndex].verses;
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleAppMode = this.toggleAppMode.bind(this);
        this.getCanticleVerses = this.getCanticleVerses.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.openFromSearch = this.openFromSearch.bind(this);
        this._canticleList = canticleList;
        this.state = {
            lyricsMode: false,
            canticleNumber: 1
        }
    }

    toggleAppMode(){
        let currentMode = this.state.lyricsMode;
        this.setState({
            lyricsMode: !currentMode
        });
    }

    previousPage(){
        let currentPage = this.state.canticleNumber;
        if(currentPage > 1){
            currentPage -= 1;
            this.setState({canticleNumber: currentPage});
        } else {
            currentPage = 1;
            this.setState({canticleNumber: currentPage});
        }
    }

    nextPage() {
        let currentPage = this.state.canticleNumber;
        if((currentPage + 1) <= this._canticleList.length){
            currentPage += 1;
            this.setState({canticleNumber: currentPage});
        }
    }

    componentDidMount() {
        this.getCanticleVerses();
    }
    getCanticleVerses(){
        try{
            return canticleInfo(this.state.canticleNumber);
        } catch (error) {
            console.log("the verse array is out of bound.")
        }

    }
    openFromSearch (a) {
        let selectedCanticleFromSearch = parseInt(a, 10);
        //console.log(`a is ${a}`);
        this.setState({
            lyricsMode: true,
            canticleNumber: selectedCanticleFromSearch
        });
        //console.log("function works!!");
    }

    render(){
        return (
            <div>
                <Screen
                    cantNbr={this.state.canticleNumber}
                    cantVerses={this.getCanticleVerses()}
                    cantList={this._canticleList}
                    selectFromSearch={this.openFromSearch}
                    isAppInLyricsMode={this.state.lyricsMode} />
                <Buttons
                    canticleNbr ={this.state.canticleNumber}
                    onPrevPage = {this.previousPage}
                    onNextPage = {this.nextPage}
                    onToggleAppMode={this.toggleAppMode}
                    isAppInLyricsMode={this.state.lyricsMode} />
            </div>
        );
    }
}


export default App;