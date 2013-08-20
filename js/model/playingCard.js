(function(card){
	'use strict';

	function PlayingCard(){
		this.superClass = card.Card;
		this.superClass.call(this);
		this.contructor = PlayingCard;
	}

	PlayingCard.prototype = Object.creat(card.Card.prototype);

	var playingCardMethods = {
		suit : function(v){
			if (v === undefined) {
				return this._suit ? this._suit : "?";
			} else {
				if (({ "":1, })[v]) {
					this._suit = v;
				}
				return this._suit;	
			}
		}
	};

	Object.keys(playingCardMethods).forEach(function(name){
		this[name] = playingCardMethods[name];
	},PlayingCard.prototype);

	function exports(){
		return new PlayingCard();
	}

	exports.PlayingCard = PlayingCard;

	window.playingCard = exports;

})(window.card);