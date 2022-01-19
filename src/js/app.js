const { default: Web3 } = require("web3");


App = {
    web3Provider: null,
    init: function() {
        console.log("hey")
    },
    initWeb3: function() {
        if (typeof web3 != 'undefined') {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            web3 = new Web3(App.web3Provider);
        }
    }
},
$(function() {
    $(window).load(function() {
        App.init();
    })
});