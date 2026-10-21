// browser_js.js – wird nur im HTML5-Build geladen (über browser.lua).
// Liefert die echte Ausrichtung des Browserfensters: Im Browser meldet
// Solar2D hochkant weiterhin ein Querformat (nur verkleinert).
browser_js = {
    hochkant: function() {
        var hoch = window.innerHeight > window.innerWidth;
        if (window.matchMedia) {
            hoch = window.matchMedia("(orientation: portrait)").matches;
        }
        return hoch ? 1 : 0;
    }
};
