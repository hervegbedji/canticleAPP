import parseToHtml from 'html-react-parser';

class Canticle {
    constructor(themeStr, numberInt, chorusStr, verseBlockStr){
        this._theme = themeStr;
        this._number = numberInt;
        this._chorus = chorusStr;
        this._verses_block_from_db = verseBlockStr;
    }

    createArrayOfIndividualVerses(combinedVersesString){
        let individualVersesArr = combinedVersesString.split("#");
        let htmlParsedArray = individualVersesArr.map((rawText) => parseToHtml(rawText));

        return htmlParsedArray;
    }
    //TODO - remove this func is not used in next patch.
    removeLineBreaksFromRawVerses(arr){ //TODO was planning to use this but i may delete it later
        let str = '';
        for(let i=0; i<arr.length; i++){
            str = str.concat(arr[i]);
        }
        let versesWithoutLineBreaks = str.replace(new RegExp('<br/>', 'gi'), ' ');
        let newVerseArray = [];
        newVerseArray.push(versesWithoutLineBreaks);
        console.log(newVerseArray);
        return newVerseArray;
    }

    get theme(){
        return this._theme;
    }

    get number(){
        return this._number;
    }

    get chorus(){
        return this._chorus;
    }

    get verses(){ // formatted verses are used for presentation of canticles.
        return this.createArrayOfIndividualVerses(this._verses_block_from_db);
    }

    get nonReactParsedVerses(){ // raw verses are used for keyword search.
        return this._verses_block_from_db;
    }
}

export default Canticle;