var Observable = require("FuseJS/Observable");
var Bundle = require("FuseJS/Bundle");
var DeviceLocale = require("DeviceLocale");
loc = Observable();

var Locales = {	"default": "en-US.json",
				"en-US": "en-US.json",
				"en-GB": "en-GB.json",
				"nb-NO": "nb-NO.json"
				};

function setLocale(locale){
	if(locale in Locales) f = Locales[locale];
	else f = Locales["default"];
	loc.value = JSON.parse(Bundle.readSync("text/"+f));
}

setLocale(DeviceLocale.locale);

module.exports = {loc, setLocale};
