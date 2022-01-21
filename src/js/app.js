App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    loading: false,
    tokenPrice: 10000000000000,
    tokenSold: 0,
    tokensAvailable: 77000,
    init: function() {
        console.log("hey")
        console.log(App.tokenPrice)
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
            return App.render();
        });    
    })
},
    render: function() {
        if(window.ethereum){
            ethereum.enable().then(function(acc){
                App.account = acc[0];
                $("#accountAddress").html("Your Account: " + App.account);
                console.log(acc);
            });
        }
        
        App.contracts.QwertyTokenSale.deployed().then(function(instance) {
            qwertyTokenSaleInstance = instance;
            return qwertyTokenSaleInstance.tokenPrice();
        }).then(function(tokenPrice){
            $('.token-price').html(
                web3.utils.fromWei(
                    web3.utils.toBN(App.tokenPrice), // converts Number to BN, which is accepted by `toWei()`
                    'ether'
                )
                
                );
                return qwertyTokenSaleInstance.tokenSold();
        }).then(function(tokenSold){
            App.tokenSold = tokenSold.toNumber();
            $('.token-sold').html(App.tokenSold);
            $('.tokens-available').html(App.tokensAvailable);
        });
    }
}

$(function() {
    $(window).load(function() {
      App.init();
    })
  });