let coin = {
    state: 0,
    flip: function() {
        return this.state = Math.round(Math.random() * 1)
     },
    toString: function() {
        return this.state === 0 ? "Heads" : "Tails"
    },
    toHTML: function() {
        let image = document.createElement('img');
       
        image.src = this.state === 0 ?
        "https://wompampsupport.azureedge.net/fetchimage?siteId=7699&width=300&url=https%3A%2F%2Fzfodsq-0497s6r6rnkm.cloudmaestro.com%2FaWecRuKVA%2Fwp-content%2Fuploads%2F2015%2F09%2Fx1859-indian-head-e1443550468777.jpg.pagespeed.ic.BfZibAFIXD.jpg" :"https://image.shutterstock.com/image-photo/reverse-1859-indian-cent-260nw-41868691.jpg"
        image.style.width = "175px"
        image.style.height = "175px"
        return image
    }
};
function display20flip () {
    for (let i=0; i<20; i++) {
        let textBox = document.createElement('span')
        textBox.style.margin = "7px"
        coin.flip() 
        textBox.append(coin.toString())
        document.body.append(textBox)
    }
    return console.log("flipping again")
}

function display20images () {
    for (let i=0; i<20; i++) {
        coin.flip()
        document.body.append(coin.toHTML ())
    }
    
    return console.log ("flip and done")
}

display20flip()
display20images()