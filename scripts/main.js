const main = {
    onload(){
    	Clicks.onload()
	Autoclickers.onload()
	window.setInterval(this.onetenthsecInterval.bind(this), 100);
        window.setInterval(this.secInterval.bind(this), 1000);
        window.setInterval(this.tensecInterval.bind(this), 10000);
    },
    
    secInterval(){
    	Clicks.setNbrOwned(Clicks.nbrOwned + (Autoclickers.Cps))
    },
    
    //For clarity in code
    update(){
	this.secInterval()
    },
    
    onetenthsecInterval(){
	Buttonconfig.show()
	Buttonconfig.disable()
	Buttonconfig.enable()
	Clicks.setNbrOwned(Clicks.nbrOwned + (Autoclickers.Cpots))
    },
    
    tensecInterval(){
      Save.getSaveData()
    }
}

window.onload = main.onload.bind(main);