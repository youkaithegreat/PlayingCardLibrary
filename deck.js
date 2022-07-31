const suite = ["Spades", "Hearts", "Diamonds", "Clubs"]
const cardValue = ["Ace", "2", "3", "4", "5", "6","7","8","9","10","Jack","Queen","King"]


const player = {
    hand: [{}],
    chips: [{}],
    fold: false, 
    currentBet: 0, 
    alive: false
}

const dealer =  {
    hand: [{}],
    hold: false, 
    alive: false
}

const createDeck = () => {
    const deck = []
    
    for(let i = 0; i < suite.length;i++){
        for(let j = 0; j<cardValue.length; j++){

            let firstPrefix, secondPrefix
            let valueCard = 0

            if(cardValue[j].charAt(0) ==1){
                firstPrefix="T"
            }else{
                firstPrefix=cardValue[j].charAt(0)
            }

            if(cardValue[j]=='Ace'){
                valueCard=1
            }else if(cardValue[j]=="King" || cardValue[j]=="Queen" || cardValue[j]=="Jack"){
                valueCard = 10
            } else{
                valueCard = j+1
            }

            secondPrefix = suite[i].charAt(0)

            deck.push({
                name: "" + cardValue[j] + " of " + suite[i],
                suite: suite[i],
                value: valueCard,
                raw: cardValue[j].charAt(0) + suite[i].charAt(0), 
                imgSrc: "https://d2otgtimwt9f4y.cloudfront.net/poker-qr/" + firstPrefix+ secondPrefix + ".svg"
            })
        }
    }
    return deck;
}

const shuffle = (deckObject) => {
    let temp = {}
    let roll = 0

    for(let i = 0; i<deckObject.length; i++){
        roll = Math.floor(Math.random()*deckObject.length)
        temp = deckObject[i]
        deckObject[i] = deckObject[roll]
        deckObject[roll] = temp
    }
    return deckObject
}

    
