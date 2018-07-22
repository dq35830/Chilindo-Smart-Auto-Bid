(function() {
    'use strict';
    var maxPrice = 10;
    var myId = 'playthza03';

    // PRODUCT TABLE
    var productTable = [
        'บัตตาเลี่ยน 2 ระบบ',
        'กระบอกน้ำสแตนเลสเก็บอุณหภูมิ',
        'กระเป๋าเป้สำหรับเด็ก'
    ];
    // TABLE OF PRICE
    var priceTable = {
        'บัตตาเลี่ยน 2 ระบบ': 51,
        'กระบอกน้ำสแตนเลสเก็บอุณหภูมิ': 101,
        'กระเป๋าเป้สำหรับเด็ก': 101
    };

    function getText(el) {
        return el.textContent || el.innerText;
    }
    function ClickButtonBid(){
        document.getElementById("ContentPlaceHolder1_btnBid").click();
    }
    function isInArray(value, array) {
        return array.indexOf(value) > -1;
    }
    function startAutoBid(){
        var productElement = document.getElementById('ContentPlaceHolder1_lbTitle');
        var productName = getText(productElement);
        console.log('Product:', productName);

        var productTableLength = productTable.length;
        for (var i = 0; i < productTableLength; i++) {
            if (productName.toLowerCase().indexOf(productTable[i]) !== -1)
            {
                maxPrice = priceTable[productTable[i]];
                console.log('Using rule of:', productTable[i]);
            }
        }
        console.log('MaxPrice:', maxPrice);

        setInterval(function(){
            var timeelement = document.getElementById('spanCountDown');
            var time = getText(timeelement);
            var currentWinnerElement =  document.getElementsByClassName('current_winner')[0]; 
            var currentWinner = getText(currentWinnerElement).split(" ");
            var priceElement = document.getElementById('ContentPlaceHolder1_txtBidNew');
            var price_value = priceElement.value;
            var price = parseInt(price_value.substring(0,price_value.length - 1));
            console.log('myId', myId);
            console.log('currentWinner', currentWinner);
            if(!isInArray(myId, currentWinner)){
                    if(price <= maxPrice && Number.isInteger(price)){
                        console.log("Bid For "+price);
                        document.getElementById('ContentPlaceHolder1_txtBidNew').value = price_value;
                        ClickButtonBid();
                    }
                //}
            }
        }, 3000);
    }
    startAutoBid();
})();
