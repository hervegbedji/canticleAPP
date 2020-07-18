import React from 'react';
import parseToHtml from 'html-react-parser';
import $ from 'jquery/dist/jquery.js';
import {LyricsHeader} from './LyricsHeader.js';
import {LyricsBody} from './LyricsBody.js';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


let testArr = [300, 200, 100, 400];

// TODO: create openFromSearch function.

class CanticleBtn extends React.Component {

    constructor(props) {
        super(props);
        this.displaySelectedCanticle = this.displaySelectedCanticle.bind(this);
    }

    displaySelectedCanticle(e){
        this.props.remotePropOpenCanticle(e.target.value);
    }
// TODO create openFromSearch function.
    render(){
        return (
                <div>
                    <input type="button" key={this.props.nbr} value={this.props.nbr} onClick={this.displaySelectedCanticle} />
                </div>

        );
    }

}

const CanticleNumberBtns = (props) => {
    const numbers = props.listOfAllCanticlesInfos.map((canticle) => canticle.number);
    const buttonList = numbers.map((number, i) =>
        <li key={(i+1).toString()}>
            <CanticleBtn remotePropOpenCanticle={props.lessRemotePropOpenCanticle} nbr={number}/>
        </li>
    );
    return(
        <ul>{buttonList}</ul>
    );
}

const GroupByTheme = (props) => {
    const filteredByTheme = props.listOfAllCanticlesInfos.filter(i=> i.theme.toLowerCase()==props.byTheme.toLowerCase());
    const canticleNumbers = filteredByTheme.map((canticle) => canticle.number);
    const buttonList = canticleNumbers.map((number, i) =>
        <li key={(i+1).toString()}>
            <CanticleBtn remotePropOpenCanticle={props.lessRemotePropOpenCanticle} nbr={number}/>
        </li>
    );
    return(
        <div>
            <p>Theme:{props.byTheme}</p>
            <ul>{buttonList}</ul>
        </div>

    );
}

const CanticleNumberBtnsWithVerses = (props) => {

    const originalCanticleArray = props.listOfAllCanticlesInfos.map((canticle) => (
        {"number":canticle.number, "verse": canticle.nonReactParsedVerses}
    ));

    let filteredCanticles = originalCanticleArray.filter(item => {
        return(item.verse.toLowerCase().includes(props.theQuery.toLowerCase()));
    });

    let formatedFilteredCanticles = filteredCanticles.map(function(item){
        var newObj = {};
        newObj.number = item.number;
        newObj.verse = parseToHtml(item.verse.replace(new RegExp(props.theQuery, 'gi'), props.theQuery.bold()));
        return newObj;
    });


    let buttonList = null;

    if(filteredCanticles.length>0){
        buttonList = formatedFilteredCanticles.map((numberVerseCouple, i) =>
            <li className="col-12 d-inline-block" key={i+1}>
                <CanticleBtn remotePropOpenCanticle={props.lessRemotePropOpenCanticle} nbr={numberVerseCouple.number}/>
                <br/><a className="col-12 d-inline-block"> {numberVerseCouple.verse} </a>
            </li>
        );
    } else {
        buttonList = <li> We have no result to return at this time </li>
    }

    return(
        <ul>{buttonList}</ul>
    );
}

class TextualSearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
        this.state = {
            searchQuery: "",
            visibility:"d-none"
        };
    }

    handleUpdateSearchQuery (e){
        this.setState({
            searchQuery: "" + e.target.value,
            visibility: (e.target.value=="") ? "d-none" : "d-block"
        });
    }

    render(){
        return(
            <div>
                <div>
                    <input type="textarea"
                           placeholder="Veuillez saisir un extrait du cantique"
                           onChange={this.handleUpdateSearchQuery}
                    />
                </div>
                <div className={this.state.visibility}>
                    <CanticleNumberBtnsWithVerses
                        lessRemotePropOpenCanticle={this.props.xCanticleProp}
                        listOfAllCanticlesInfos={this.props.xCanticleList}
                        theQuery={this.state.searchQuery}
                    />
                </div>

            </div>
        );
    }
}

const Search = (props) => {
    return (
        <div>
            <div className="tabs">
                <Tabs defaultActiveKey="byNumber" id="uncontrolled-tab-example">
                    <Tab eventKey="byNumber" title="Par Numero">
                        <CanticleNumberBtns lessRemotePropOpenCanticle={props.openCanticleProp} listOfAllCanticlesInfos={props.canticleList}/>
                    </Tab>
                    <Tab eventKey="byTheme" title="Par Theme">
                        <GroupByTheme byTheme="adoration generale"
                                      lessRemotePropOpenCanticle={props.openCanticleProp}
                                      listOfAllCanticlesInfos={props.canticleList}
                        />
                        <GroupByTheme byTheme="adoration"
                                      lessRemotePropOpenCanticle={props.openCanticleProp}
                                      listOfAllCanticlesInfos={props.canticleList}
                        />
                        <GroupByTheme byTheme="repas du Seigneur"
                                      lessRemotePropOpenCanticle={props.openCanticleProp}
                                      listOfAllCanticlesInfos={props.canticleList}
                        />
                    </Tab>
                    <Tab eventKey="byText" title="Par Texte">
                        <TextualSearchResults xCanticleProp={props.openCanticleProp} xCanticleList={props.canticleList}  />
                    </Tab>
                </Tabs>
            </div>

        </div>);
}

const Screen = (props) => {
    if(!props.isAppInLyricsMode){
        return (
            <div>
              <Search openCanticleProp={props.selectFromSearch} canticleList={props.cantList}/>
            </div>
        );
    }
    return (
        <div>
            <LyricsHeader />
            <LyricsBody
                canticleNumber={props.cantNbr}
                canticleVerses={props.cantVerses}
            />
        </div>

    );
}

export { Screen } ;