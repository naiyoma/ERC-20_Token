App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    init: function() {
        console.log("hey")
        return App.initWeb3();
    },
    initWeb3: function() {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            web3 = new Web3(App.web3Provider);
        }
        return App.initContracts();
    },

    initContracts: function() {
        $.getJSON("QwertyTokenSale.json", function(qwertyTokenSale) {
            App.contracts.QwertyTokenSale = TruffleContract(qwertyTokenSale);
            App.contracts.QwertyTokenSale.setProvider(App.web3Provider);
            App.contracts.QwertyTokenSale.deployed().then(function(qwertyTokenSale){
                console.log("initialize a cntract", qwertyTokenSale.address);
            });
        }).done(function(){
                $.getJSON("QwertyToken.json", function(qwertyToken) {
                    App.contracts.QwertyToken = TruffleContract(qwertyToken);
                    App.contracts.QwertyToken.setProvider(App.web3Provider);
                    App.contracts.QwertyTokenSale.deployed().then(function(qwertyToken){
                        console.log("Dapp Token Address:", qwertyToken.address);
            });
        });    
    })
},
    render: function() {
        web3.eth.getCoinbase(function(err, account){
            if(err === null) {
                App.account = account;
                $('#accountAddress').html("Your account:" + account);
            }
        })
    }
}

$(function() {
    $(window).load(function() {
      App.init();
    })
  });