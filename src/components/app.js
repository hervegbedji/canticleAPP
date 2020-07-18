import React from 'react';
import canticleList from './ConsumableDataFromDB.js';
import { Screen } from './AppScreen.js';
import { Buttons } from './AppButtons.js';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleAppMode = this.toggleAppMode.bind(this);
        this.getCanticleVerses = this.getCanticleVerses.bind(this);
        this.getTheNumberOfTheCanticle = this.getTheNumberOfTheCanticle.bind(this);
        this.getCanticleId = this.getCanticleId.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.openFromSearch = this.openFromSearch.bind(this);
        this.displayChorus = this.displayChorus.bind(this);
        this._canticleList = canticleList;
        this.state = {
            lyricsMode: true,
            canticleNumber: this._canticleList[0].number,
            displayChorus: false
        }
    }

    componentDidMount() {
        this.getCanticleVerses();
    }

    toggleAppMode(){
        let currentMode = this.state.lyricsMode;
        this.setState({
            lyricsMode: !currentMode
        });
    }

    previousPage(){
        let currentlyDisplayedCanticleNumber = this.state.canticleNumber;
        let originalIdOfCanticle = this.getCanticleId(currentlyDisplayedCanticleNumber);
        let prevIdToBeDisplayed = originalIdOfCanticle - 1;

        if(prevIdToBeDisplayed >= 0){
            this.setState({canticleNumber: this.getTheNumberOfTheCanticle(prevIdToBeDisplayed)});
        }
    }

    nextPage() { //we need to cover the case where canticleNumber # canticleId
        let currentlyDisplayedCanticleNumber = this.state.canticleNumber;
        let originalIdOfCanticle = this.getCanticleId(currentlyDisplayedCanticleNumber);
        let nextIdToBeDisplayed = originalIdOfCanticle + 1;
        console.log(originalIdOfCanticle);

        if((nextIdToBeDisplayed) < this._canticleList.length){
            this.setState({
                canticleNumber: this.getTheNumberOfTheCanticle(nextIdToBeDisplayed)
            });
            console.log('next canticle id '+(originalIdOfCanticle+1));
        }
    }

    getTheNumberOfTheCanticle(id) {
        let numberOfCanticle = this._canticleList[id].number;
        return numberOfCanticle;
    }

    getCanticleId(canticleNumber){
        let recordOfAllCurrentIdsOfCanticles = this._canticleList.map((item, idx) => {
            return {"original_id":idx, "canticle_number": item.number};
        });
        let matchingIdArray = recordOfAllCurrentIdsOfCanticles.filter(item => item.canticle_number==canticleNumber);
        let canticleId = null;
        return canticleId = matchingIdArray[0].original_id;
    }

    getCanticleVerses(){

        let canticleId = this.getCanticleId(this.state.canticleNumber);

        try{
            return this._canticleList[canticleId].verses;;
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
    }

    displayChorus(){
        let currentChorusDisplayStatus = this.state.displayChorus;
        this.setState({
            displayChorus: !currentChorusDisplayStatus
        });
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
                    chorDis={this.displayChorus}
                    onPrevPage = {this.previousPage}
                    onNextPage = {this.nextPage}
                    onToggleAppMode={this.toggleAppMode}
                    isAppInLyricsMode={this.state.lyricsMode} />
            </div>
        );
    }
}


export default App;