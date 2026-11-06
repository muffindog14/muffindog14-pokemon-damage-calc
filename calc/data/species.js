"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {
    Abra: {
        types: ['Psychic'],
        bs: { hp: 25, at: 20, df: 15, sp: 90, sl: 105 },
        weightkg: 19.5,
        nfe: true,
        expYield: 75
    }
};
var GSC_PATCH = {
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var EK_PATCH = {};
var EK = (0, util_1.extend)(true, {}, ADV, EK_PATCH);
var DPP_PATCH = {};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
var XY_PATCH = {};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
var SM_PATCH = {
    Bulbasaur: {
        bs: { hp: 55, at: 19, df: 54, sa: 65, sd: 70, sp: 75 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Fire']
    },
    Ivysaur: {
        bs: { hp: 65, at: 22, df: 83, sa: 80, sd: 90, sp: 90 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Fire', 'Fairy']
    },
    Venusaur: {
        bs: { hp: 85, at: 32, df: 115, sa: 100, sd: 118, sp: 100 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Fire', 'Fairy']
    },
    Charmander: {
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        abilities: { 0: 'Triage' },
        types: ['Grass']
    },
    Charmeleon: {
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
        abilities: { 0: 'Triage' },
        types: ['Grass']
    },
    Charizard: {
        bs: { hp: 93, at: 44, df: 78, sa: 140, sd: 85, sp: 110 },
        abilities: { 0: 'Triage' },
        types: ['Grass', 'Dragon']
    },
    Squirtle: {
        bs: { hp: 54, at: 18, df: 65, sa: 80, sd: 74, sp: 43 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Ground']
    },
    Wartortle: {
        bs: { hp: 76, at: 23, df: 80, sa: 95, sd: 93, sp: 58 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Ground', 'Normal']
    },
    Blastoise: {
        bs: { hp: 119, at: 35, df: 100, sa: 133, sd: 110, sp: 53 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Ground', 'Normal']
    },
    Caterpie: {
        bs: { hp: 50, at: 100, df: 50, sa: 100, sd: 50, sp: 50 },
        abilities: { 0: 'Air Lock' },
        types: ['Bug']
    },
    Metapod: {
        bs: { hp: 100, at: 100, df: 125, sa: 100, sd: 125, sp: 50 },
        abilities: { 0: 'Stamina' },
        types: ['Bug', 'Dragon']
    },
    Butterfree: {
        bs: { hp: 85, at: 35, df: 50, sa: 90, sd: 110, sp: 140 },
        abilities: { 0: 'Prankster' },
        types: ['Bug', 'Flying']
    },
    Weedle: {
        bs: { hp: 40, at: 35, df: 30, sa: 20, sd: 20, sp: 50 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug', 'Poison']
    },
    Kakuna: {
        bs: { hp: 45, at: 25, df: 50, sa: 25, sd: 25, sp: 35 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug', 'Poison']
    },
    Beedrill: {
        bs: { hp: 65, at: 140, df: 40, sa: 25, sd: 80, sp: 135 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug', 'Poison']
    },
    Pidgey: {
        bs: { hp: 40, at: 45, df: 40, sa: 35, sd: 35, sp: 66 },
        abilities: { 0: 'Big Pecks' },
        types: ['Normal', 'Flying']
    },
    Pidgeotto: {
        bs: { hp: 63, at: 65, df: 55, sa: 45, sd: 50, sp: 76 },
        abilities: { 0: 'Big Pecks' },
        types: ['Normal', 'Flying']
    },
    Pidgeot: {
        bs: { hp: 83, at: 100, df: 75, sa: 60, sd: 70, sp: 151 },
        abilities: { 0: 'Big Pecks' },
        types: ['Normal', 'Flying']
    },
    Rattata: {
        bs: { hp: 30, at: 56, df: 35, sa: 25, sd: 35, sp: 72 },
        abilities: { 0: 'Guts' },
        types: ['Normal']
    },
    Raticate: {
        bs: { hp: 55, at: 131, df: 60, sa: 40, sd: 70, sp: 137 },
        abilities: { 0: 'Guts' },
        types: ['Normal']
    },
    Spearow: {
        bs: { hp: 40, at: 70, df: 30, sa: 31, sd: 31, sp: 75 },
        abilities: { 0: 'Sniper' },
        types: ['Normal', 'Flying']
    },
    Fearow: {
        bs: { hp: 95, at: 120, df: 125, sa: 31, sd: 61, sp: 100 },
        abilities: { 0: 'Sniper' },
        types: ['Normal', 'Flying']
    },
    Ekans: {
        bs: { hp: 35, at: 60, df: 44, sa: 40, sd: 54, sp: 55 },
        abilities: { 0: 'Intimidate' },
        types: ['Poison']
    },
    Arbok: {
        bs: { hp: 80, at: 95, df: 109, sa: 45, sd: 119, sp: 80 },
        abilities: { 0: 'Intimidate' },
        types: ['Poison']
    },
    Pikachu: {
        bs: { hp: 35, at: 105, df: 40, sa: 30, sd: 50, sp: 130 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric']
    },
    Raichu: {
        bs: { hp: 60, at: 120, df: 55, sa: 50, sd: 80, sp: 160 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric']
    },
    Sandshrew: {
        bs: { hp: 50, at: 85, df: 95, sa: 20, sd: 30, sp: 65 },
        abilities: { 0: 'Dry Skin' },
        types: ['Ground']
    },
    Sandslash: {
        bs: { hp: 95, at: 140, df: 110, sa: 35, sd: 55, sp: 110 },
        abilities: { 0: 'Dry Skin' },
        types: ['Ground']
    },
    Nidoran: {
        bs: { hp: 55, at: 47, df: 57, sa: 40, sd: 45, sp: 41 },
        abilities: { 0: 'Queenly Majesty' },
        types: ['Poison']
    },
    Nidorina: {
        bs: { hp: 70, at: 62, df: 77, sa: 55, sd: 65, sp: 56 },
        abilities: { 0: 'Queenly Majesty' },
        types: ['Poison']
    },
    Nidoqueen: {
        bs: { hp: 110, at: 92, df: 127, sa: 75, sd: 85, sp: 76 },
        abilities: { 0: 'Queenly Majesty' },
        types: ['Poison', 'Ground']
    },
    Nidoran: {
        bs: { hp: 46, at: 67, df: 40, sa: 40, sd: 40, sp: 50 },
        abilities: { 0: 'Intimidate' },
        types: ['Poison']
    },
    Nidorino: {
        bs: { hp: 61, at: 87, df: 57, sa: 55, sd: 55, sp: 65 },
        abilities: { 0: 'Intimidate' },
        types: ['Poison']
    },
    Nidoking: {
        bs: { hp: 81, at: 142, df: 87, sa: 85, sd: 75, sp: 95 },
        abilities: { 0: 'Intimidate' },
        types: ['Poison', 'Ground']
    },
    Clefairy: {
        bs: { hp: 90, at: 45, df: 48, sa: 60, sd: 75, sp: 35 },
        abilities: { 0: 'Unaware' },
        types: ['Fairy']
    },
    Clefable: {
        bs: { hp: 125, at: 70, df: 73, sa: 95, sd: 100, sp: 60 },
        abilities: { 0: 'Unaware' },
        types: ['Fairy']
    },
    Vulpix: {
        bs: { hp: 38, at: 41, df: 50, sa: 50, sd: 75, sp: 65 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Ninetales: {
        bs: { hp: 88, at: 56, df: 95, sa: 96, sd: 110, sp: 100 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Jigglypuff: {
        bs: { hp: 135, at: 45, df: 20, sa: 45, sd: 25, sp: 20 },
        abilities: { 0: 'Competitive' },
        types: ['Normal', 'Fairy']
    },
    Wigglytuff: {
        bs: { hp: 170, at: 70, df: 55, sa: 85, sd: 60, sp: 45 },
        abilities: { 0: 'Competitive' },
        types: ['Normal', 'Fairy']
    },
    Zubat: {
        bs: { hp: 40, at: 35, df: 35, sa: 50, sd: 40, sp: 65 },
        abilities: { 0: 'Fur Coat' },
        types: ['Psychic', 'Flying']
    },
    Golbat: {
        bs: { hp: 90, at: 45, df: 115, sa: 60, sd: 105, sp: 70 },
        abilities: { 0: 'Fur Coat' },
        types: ['Psychic', 'Flying']
    },
    Oddish: {
        bs: { hp: 45, at: 30, df: 55, sa: 75, sd: 65, sp: 50 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Poison']
    },
    Gloom: {
        bs: { hp: 70, at: 40, df: 70, sa: 95, sd: 95, sp: 50 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Poison']
    },
    Vileplume: {
        bs: { hp: 95, at: 50, df: 85, sa: 120, sd: 110, sp: 75 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Poison']
    },
    Paras: {
        bs: { hp: 55, at: 85, df: 65, sa: 25, sd: 65, sp: 25 },
        abilities: { 0: 'Damp' },
        types: ['Bug', 'Grass']
    },
    Parasect: {
        bs: { hp: 80, at: 135, df: 90, sa: 40, sd: 90, sp: 25 },
        abilities: { 0: 'Damp' },
        types: ['Bug', 'Grass']
    },
    Venonat: {
        bs: { hp: 60, at: 55, df: 60, sa: 60, sd: 65, sp: 45 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug', 'Poison']
    },
    Venomoth: {
        bs: { hp: 70, at: 65, df: 90, sa: 110, sd: 105, sp: 90 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug', 'Poison']
    },
    Diglett: {
        bs: { hp: 10, at: 75, df: 65, sa: 35, sd: 45, sp: 115 },
        abilities: { 0: 'Adaptability' },
        types: ['Ground']
    },
    Dugtrio: {
        bs: { hp: 35, at: 130, df: 90, sa: 50, sd: 70, sp: 150 },
        abilities: { 0: 'Adaptability' },
        types: ['Ground']
    },
    Meowth: {
        bs: { hp: 40, at: 15, df: 35, sa: 70, sd: 40, sp: 110 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Fire']
    },
    Persian: {
        bs: { hp: 75, at: 30, df: 66, sa: 124, sd: 60, sp: 145 },
        abilities: { 0: 'Prankster' },
        types: ['Fire']
    },
    Psyduck: {
        bs: { hp: 50, at: 52, df: 48, sa: 65, sd: 50, sp: 55 },
        abilities: { 0: 'Protean' },
        types: ['Water']
    },
    Golduck: {
        bs: { hp: 90, at: 105, df: 78, sa: 105, sd: 90, sp: 95 },
        abilities: { 0: 'Protean' },
        types: ['Water']
    },
    Mankey: {
        bs: { hp: 60, at: 80, df: 35, sa: 35, sd: 45, sp: 70 },
        abilities: { 0: 'Defiant' },
        types: ['Fighting']
    },
    Primeape: {
        bs: { hp: 110, at: 115, df: 80, sa: 50, sd: 90, sp: 95 },
        abilities: { 0: 'Defiant' },
        types: ['Fighting']
    },
    Growlithe: {
        bs: { hp: 55, at: 50, df: 45, sa: 90, sd: 50, sp: 60 },
        abilities: { 0: 'Galvanize' },
        types: ['Fire', 'Electric']
    },
    Arcanine: {
        bs: { hp: 70, at: 60, df: 60, sa: 135, sd: 85, sp: 145 },
        abilities: { 0: 'Galvanize' },
        types: ['Fire', 'Electric']
    },
    Poliwag: {
        bs: { hp: 40, at: 60, df: 40, sa: 10, sd: 40, sp: 120 },
        abilities: { 0: 'Water Bubble' },
        types: ['Water']
    },
    Poliwhirl: {
        bs: { hp: 65, at: 95, df: 75, sa: 20, sd: 70, sp: 90 },
        abilities: { 0: 'Water Bubble' },
        types: ['Water']
    },
    Poliwrath: {
        bs: { hp: 110, at: 135, df: 135, sa: 30, sd: 90, sp: 70 },
        abilities: { 0: 'Water Bubble' },
        types: ['Water', 'Fighting']
    },
    Abra: {
        bs: { hp: 25, at: 20, df: 15, sa: 105, sd: 55, sp: 90 },
        abilities: { 0: 'Magic Guard' },
        types: ['Psychic']
    },
    Kadabra: {
        bs: { hp: 40, at: 35, df: 30, sa: 120, sd: 70, sp: 105 },
        abilities: { 0: 'Magic Guard' },
        types: ['Psychic']
    },
    Alakazam: {
        bs: { hp: 55, at: 50, df: 45, sa: 135, sd: 95, sp: 155 },
        abilities: { 0: 'Magic Guard' },
        types: ['Psychic']
    },
    Machop: {
        bs: { hp: 70, at: 100, df: 50, sa: 15, sd: 35, sp: 35 },
        abilities: { 0: 'Guts' },
        types: ['Fighting']
    },
    Machoke: {
        bs: { hp: 80, at: 130, df: 70, sa: 20, sd: 60, sp: 45 },
        abilities: { 0: 'Guts' },
        types: ['Fighting']
    },
    Machamp: {
        bs: { hp: 110, at: 180, df: 100, sa: 25, sd: 85, sp: 55 },
        abilities: { 0: 'Guts' },
        types: ['Fighting']
    },
    Bellsprout: {
        bs: { hp: 50, at: 75, df: 45, sa: 70, sd: 40, sp: 40 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Poison']
    },
    Weepinbell: {
        bs: { hp: 65, at: 90, df: 70, sa: 85, sd: 65, sp: 55 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Poison']
    },
    Victreebel: {
        bs: { hp: 115, at: 115, df: 95, sa: 65, sd: 90, sp: 70 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Poison']
    },
    Tentacool: {
        bs: { hp: 40, at: 20, df: 35, sa: 70, sd: 120, sp: 70 },
        abilities: { 0: 'Clear Body' },
        types: ['Water', 'Poison']
    },
    Tentacruel: {
        bs: { hp: 80, at: 40, df: 65, sa: 100, sd: 140, sp: 100 },
        abilities: { 0: 'Clear Body' },
        types: ['Water', 'Poison']
    },
    Geodude: {
        bs: { hp: 40, at: 80, df: 100, sa: 15, sd: 60, sp: 20 },
        abilities: { 0: 'Sturdy' },
        types: ['Rock', 'Ground']
    },
    Graveler: {
        bs: { hp: 55, at: 95, df: 115, sa: 25, sd: 85, sp: 45 },
        abilities: { 0: 'Sturdy' },
        types: ['Rock', 'Ground']
    },
    Golem: {
        bs: { hp: 80, at: 120, df: 130, sa: 35, sd: 105, sp: 75 },
        abilities: { 0: 'Sturdy' },
        types: ['Rock', 'Ground']
    },
    Ponyta: {
        bs: { hp: 50, at: 85, df: 55, sa: 65, sd: 65, sp: 90 },
        abilities: { 0: 'Hustle' },
        types: ['Fire']
    },
    Rapidash: {
        bs: { hp: 65, at: 110, df: 70, sa: 80, sd: 80, sp: 135 },
        abilities: { 0: 'Parental Bond' },
        types: ['Fire']
    },
    Slowpoke: {
        bs: { hp: 90, at: 65, df: 65, sa: 40, sd: 50, sp: 15 },
        abilities: { 0: 'Unaware' },
        types: ['Water', 'Psychic']
    },
    Slowbro: {
        bs: { hp: 105, at: 75, df: 110, sa: 100, sd: 90, sp: 30 },
        abilities: { 0: 'Unaware' },
        types: ['Water', 'Psychic']
    },
    Magnemite: {
        bs: { hp: 25, at: 35, df: 70, sa: 95, sd: 55, sp: 45 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Steel']
    },
    Magneton: {
        bs: { hp: 50, at: 60, df: 95, sa: 120, sd: 70, sp: 70 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Steel']
    },
    Farfetchd: {
        bs: { hp: 62, at: 135, df: 95, sa: 68, sd: 82, sp: 95 },
        abilities: { 0: 'Defiant' },
        types: ['Normal', 'Flying']
    },
    Doduo: {
        bs: { hp: 35, at: 85, df: 45, sa: 35, sd: 35, sp: 105 },
        abilities: { 0: 'Parental Bond' },
        types: ['Normal', 'Flying']
    },
    Dodrio: {
        bs: { hp: 70, at: 115, df: 110, sa: 60, sd: 60, sp: 140 },
        abilities: { 0: 'Parental Bond' },
        types: ['Normal', 'Flying']
    },
    Seel: {
        bs: { hp: 65, at: 45, df: 55, sa: 45, sd: 70, sp: 45 },
        abilities: { 0: 'Fur Coat' },
        types: ['Water']
    },
    Dewgong: {
        bs: { hp: 90, at: 30, df: 130, sa: 70, sd: 145, sp: 70 },
        abilities: { 0: 'Fur Coat' },
        types: ['Water', 'Ice']
    },
    Grimer: {
        bs: { hp: 80, at: 80, df: 75, sa: 40, sd: 75, sp: 25 },
        abilities: { 0: 'Stamina' },
        types: ['Poison']
    },
    Muk: {
        bs: { hp: 125, at: 105, df: 105, sa: 35, sd: 110, sp: 50 },
        abilities: { 0: 'Stamina' },
        types: ['Poison']
    },
    Shellder: {
        bs: { hp: 30, at: 65, df: 100, sa: 45, sd: 25, sp: 40 },
        abilities: { 0: 'Skill Link' },
        types: ['Water']
    },
    Cloyster: {
        bs: { hp: 50, at: 115, df: 180, sa: 65, sd: 45, sp: 95 },
        abilities: { 0: 'Skill Link' },
        types: ['Water', 'Ice']
    },
    Gastly: {
        bs: { hp: 30, at: 35, df: 30, sa: 100, sd: 35, sp: 90 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost', 'Poison']
    },
    Haunter: {
        bs: { hp: 45, at: 50, df: 45, sa: 115, sd: 55, sp: 105 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost', 'Poison']
    },
    Gengar: {
        bs: { hp: 60, at: 65, df: 60, sa: 130, sd: 75, sp: 140 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost', 'Poison']
    },
    Onix: {
        bs: { hp: 85, at: 95, df: 80, sa: 15, sd: 180, sp: 65 },
        abilities: { 0: 'Dry Skin' },
        types: ['Fire', 'Rock']
    },
    Drowzee: {
        bs: { hp: 95, at: 13, df: 120, sa: 103, sd: 130, sp: 12 },
        abilities: { 0: 'Poison Heal' },
        types: ['Ice']
    },
    Hypno: {
        bs: { hp: 95, at: 33, df: 60, sa: 140, sd: 70, sp: 140 },
        abilities: { 0: 'Serene Grace' },
        types: ['Ice']
    },
    Krabby: {
        bs: { hp: 30, at: 105, df: 90, sa: 25, sd: 85, sp: 20 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water']
    },
    Kingler: {
        bs: { hp: 65, at: 150, df: 130, sa: 50, sd: 100, sp: 45 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water']
    },
    Voltorb: {
        bs: { hp: 40, at: 30, df: 50, sa: 85, sd: 55, sp: 100 },
        abilities: { 0: 'Galvanize' },
        types: ['Electric']
    },
    Electrode: {
        bs: { hp: 60, at: 50, df: 70, sa: 110, sd: 80, sp: 150 },
        abilities: { 0: 'Galvanize' },
        types: ['Electric']
    },
    Exeggcute: {
        bs: { hp: 60, at: 40, df: 80, sa: 60, sd: 45, sp: 40 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Psychic']
    },
    Exeggutor: {
        bs: { hp: 115, at: 55, df: 95, sa: 145, sd: 90, sp: 45 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Psychic']
    },
    Cubone: {
        bs: { hp: 60, at: 70, df: 95, sa: 40, sd: 50, sp: 35 },
        abilities: { 0: 'Rock Head' },
        types: ['Ground']
    },
    Marowak: {
        bs: { hp: 90, at: 110, df: 130, sa: 50, sd: 80, sp: 45 },
        abilities: { 0: 'Rock Head' },
        types: ['Ground']
    },
    Hitmonlee: {
        bs: { hp: 50, at: 140, df: 53, sa: 65, sd: 110, sp: 137 },
        abilities: { 0: 'Unburden' },
        types: ['Fighting']
    },
    Hitmonchan: {
        bs: { hp: 50, at: 115, df: 99, sa: 35, sd: 120, sp: 136 },
        abilities: { 0: 'Unburden' },
        types: ['Fighting']
    },
    Lickitung: {
        bs: { hp: 90, at: 85, df: 75, sa: 85, sd: 75, sp: 30 },
        abilities: { 0: 'Unaware' },
        types: ['Normal']
    },
    Koffing: {
        bs: { hp: 40, at: 75, df: 95, sa: 40, sd: 65, sp: 35 },
        abilities: { 0: 'Levitate' },
        types: ['Poison']
    },
    Weezing: {
        bs: { hp: 65, at: 100, df: 140, sa: 65, sd: 90, sp: 60 },
        abilities: { 0: 'Levitate' },
        types: ['Poison']
    },
    Rhyhorn: {
        bs: { hp: 80, at: 85, df: 95, sa: 30, sd: 55, sp: 25 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Ground', 'Rock']
    },
    Rhydon: {
        bs: { hp: 105, at: 130, df: 120, sa: 45, sd: 85, sp: 40 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Ground', 'Rock']
    },
    Chansey: {
        bs: { hp: 250, at: 5, df: 5, sa: 65, sd: 105, sp: 50 },
        abilities: { 0: 'Regenerator' },
        types: ['Normal']
    },
    Tangela: {
        bs: { hp: 65, at: 55, df: 115, sa: 100, sd: 40, sp: 60 },
        abilities: { 0: 'Regenerator' },
        types: ['Grass']
    },
    Kangaskhan: {
        bs: { hp: 125, at: 115, df: 80, sa: 40, sd: 80, sp: 100 },
        abilities: { 0: 'Parental Bond' },
        types: ['Normal']
    },
    Horsea: {
        bs: { hp: 60, at: 10, df: 70, sa: 70, sd: 85, sp: 60 },
        abilities: { 0: 'Surge Surfer' },
        types: ['Poison', 'Electric']
    },
    Seadra: {
        bs: { hp: 90, at: 25, df: 80, sa: 85, sd: 100, sp: 75 },
        abilities: { 0: 'Surge Surfer' },
        types: ['Poison', 'Electric']
    },
    Goldeen: {
        bs: { hp: 65, at: 67, df: 60, sa: 35, sd: 90, sp: 63 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water']
    },
    Seaking: {
        bs: { hp: 80, at: 92, df: 85, sa: 55, sd: 140, sp: 68 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water']
    },
    Staryu: {
        bs: { hp: 20, at: 45, df: 55, sa: 110, sd: 55, sp: 100 },
        abilities: { 0: 'Download' },
        types: ['Fire']
    },
    Starmie: {
        bs: { hp: 40, at: 55, df: 85, sa: 140, sd: 85, sp: 145 },
        abilities: { 0: 'Download' },
        types: ['Fire', 'Psychic']
    },
    MrMime: {
        bs: { hp: 80, at: 45, df: 65, sa: 110, sd: 150, sp: 90 },
        abilities: { 0: 'Filter' },
        types: ['Psychic', 'Fairy']
    },
    ViridBlade: {
        bs: { hp: 85, at: 150, df: 85, sa: 25, sd: 85, sp: 140 },
        abilities: { 0: 'Beast Boost' },
        types: ['Bug', 'Dragon']
    },
    Jynx: {
        bs: { hp: 65, at: 50, df: 35, sa: 165, sd: 95, sp: 115 },
        abilities: { 0: 'Flash Fire' },
        types: ['Ice', 'Psychic']
    },
    Electabuzz: {
        bs: { hp: 65, at: 83, df: 57, sa: 95, sd: 85, sp: 105 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric']
    },
    Magmar: {
        bs: { hp: 65, at: 95, df: 57, sa: 100, sd: 85, sp: 93 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Pinsir: {
        bs: { hp: 65, at: 145, df: 110, sa: 15, sd: 80, sp: 85 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Bug']
    },
    Tauros: {
        bs: { hp: 75, at: 130, df: 115, sa: 20, sd: 30, sp: 140 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Normal']
    },
    Magikarp: {
        bs: { hp: 20, at: 10, df: 55, sa: 15, sd: 20, sp: 80 },
        abilities: { 0: 'Klutz' },
        types: ['Ground']
    },
    Gyarados: {
        bs: { hp: 95, at: 125, df: 139, sa: 60, sd: 70, sp: 81 },
        abilities: { 0: 'Intimidate' },
        types: ['Ground', 'Flying']
    },
    Lapras: {
        bs: { hp: 130, at: 25, df: 80, sa: 105, sd: 145, sp: 60 },
        abilities: { 0: 'Arena Trap' },
        types: ['Water', 'Ice']
    },
    Ditto: {
        bs: { hp: 178, at: 48, df: 48, sa: 48, sd: 48, sp: 48 },
        abilities: { 0: 'Imposter' },
        types: ['Normal']
    },
    Veefee: {
        bs: { hp: 55, at: 55, df: 65, sa: 45, sd: 50, sp: 55 },
        abilities: { 0: 'Protean' },
        types: ['Ground']
    },
    Eondraco: {
        bs: { hp: 160, at: 20, df: 80, sa: 130, sd: 115, sp: 50 },
        abilities: { 0: 'Marvel Scale' },
        types: ['Dragon']
    },
    Eoncrag: {
        bs: { hp: 80, at: 160, df: 115, sa: 20, sd: 50, sp: 130 },
        abilities: { 0: 'Moxie' },
        types: ['Rock']
    },
    Eonghoul: {
        bs: { hp: 160, at: 115, df: 130, sa: 50, sd: 20, sp: 80 },
        abilities: { 0: 'Innards Out' },
        types: ['Ghost']
    },
    Porygon: {
        bs: { hp: 65, at: 60, df: 70, sa: 85, sd: 75, sp: 40 },
        abilities: { 0: 'Filter' },
        types: ['Normal']
    },
    Omanyte: {
        bs: { hp: 35, at: 40, df: 100, sa: 90, sd: 55, sp: 35 },
        abilities: { 0: 'Swift Swim' },
        types: ['Rock', 'Water']
    },
    Omastar: {
        bs: { hp: 100, at: 60, df: 145, sa: 115, sd: 70, sp: 55 },
        abilities: { 0: 'Swift Swim' },
        types: ['Rock', 'Water']
    },
    Kabuto: {
        bs: { hp: 19, at: 108, df: 19, sa: 55, sd: 19, sp: 130 },
        abilities: { 0: 'Water Bubble' },
        types: ['Fire', 'Water']
    },
    Kabutops: {
        bs: { hp: 39, at: 148, df: 39, sa: 15, sd: 39, sp: 160 },
        abilities: { 0: 'Water Bubble' },
        types: ['Fire', 'Water']
    },
    Aerodactyl: {
        bs: { hp: 80, at: 125, df: 65, sa: 60, sd: 75, sp: 140 },
        abilities: { 0: 'Intimidate' },
        types: ['Rock', 'Flying']
    },
    Snorlax: {
        bs: { hp: 160, at: 110, df: 85, sa: 65, sd: 120, sp: 30 },
        abilities: { 0: 'Thick Fat' },
        types: ['Normal']
    },
    Articuno: {
        bs: { hp: 90, at: 85, df: 100, sa: 95, sd: 125, sp: 85 },
        abilities: { 0: 'Snow Warning' },
        types: ['Ice', 'Flying']
    },
    Zapdos: {
        bs: { hp: 90, at: 90, df: 85, sa: 125, sd: 90, sp: 100 },
        abilities: { 0: 'Drizzle' },
        types: ['Electric', 'Flying']
    },
    Moltres: {
        bs: { hp: 90, at: 100, df: 90, sa: 125, sd: 85, sp: 90 },
        abilities: { 0: 'Drought' },
        types: ['Fire', 'Flying']
    },
    Dratini: {
        bs: { hp: 41, at: 64, df: 45, sa: 50, sd: 50, sp: 50 },
        abilities: { 0: 'Marvel Scale' },
        types: ['Dragon']
    },
    Dragonair: {
        bs: { hp: 61, at: 84, df: 65, sa: 70, sd: 70, sp: 70 },
        abilities: { 0: 'Marvel Scale' },
        types: ['Dragon']
    },
    Dragonite: {
        bs: { hp: 101, at: 134, df: 105, sa: 50, sd: 110, sp: 100 },
        abilities: { 0: 'Multiscale' },
        types: ['Dragon', 'Flying']
    },
    Mewtwo: {
        bs: { hp: 86, at: 164, df: 80, sa: 110, sd: 80, sp: 150 },
        abilities: { 0: 'Pixilate' },
        types: ['Ground', 'Fairy']
    },
    Mew: {
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        abilities: { 0: 'Trace' },
        types: ['Psychic']
    },
    Chikorita: {
        bs: { hp: 45, at: 7, df: 85, sa: 49, sd: 85, sp: 45 },
        abilities: { 0: 'Triage' },
        types: ['Grass']
    },
    Bayleef: {
        bs: { hp: 60, at: 10, df: 115, sa: 63, sd: 120, sp: 60 },
        abilities: { 0: 'Triage' },
        types: ['Grass']
    },
    Meganium: {
        bs: { hp: 80, at: 12, df: 145, sa: 83, sd: 150, sp: 80 },
        abilities: { 0: 'Triage' },
        types: ['Grass']
    },
    Cyndaquil: {
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        abilities: { 0: 'Guts' },
        types: ['Fire']
    },
    Quilava: {
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 100 },
        abilities: { 0: 'Guts' },
        types: ['Fire']
    },
    Typhlosion: {
        bs: { hp: 93, at: 44, df: 78, sa: 110, sd: 85, sp: 140 },
        abilities: { 0: 'Guts' },
        types: ['Fire']
    },
    Totodile: {
        bs: { hp: 50, at: 65, df: 64, sa: 44, sd: 48, sp: 43 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water']
    },
    Croconaw: {
        bs: { hp: 65, at: 120, df: 80, sa: 39, sd: 63, sp: 58 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water']
    },
    Feraligatr: {
        bs: { hp: 95, at: 165, df: 100, sa: 29, sd: 83, sp: 78 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water']
    },
    Sentret: {
        bs: { hp: 55, at: 46, df: 44, sa: 35, sd: 55, sp: 20 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Furret: {
        bs: { hp: 115, at: 76, df: 94, sa: 45, sd: 85, sp: 110 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Hoothoot: {
        bs: { hp: 50, at: 5, df: 10, sa: 67, sd: 100, sp: 80 },
        abilities: { 0: 'Tinted Lens' },
        types: ['Ice', 'Psychic']
    },
    Noctowl: {
        bs: { hp: 70, at: 10, df: 30, sa: 117, sd: 170, sp: 120 },
        abilities: { 0: 'Tinted Lens' },
        types: ['Ice', 'Psychic']
    },
    Ledyba: {
        bs: { hp: 78, at: 82, df: 48, sa: 26, sd: 34, sp: 82 },
        abilities: { 0: 'Beast Boost' },
        types: ['Ground', 'Fighting']
    },
    Ledian: {
        bs: { hp: 118, at: 132, df: 88, sa: 36, sd: 64, sp: 132 },
        abilities: { 0: 'Beast Boost' },
        types: ['Ground', 'Fighting']
    },
    Spinarak: {
        bs: { hp: 40, at: 60, df: 40, sa: 40, sd: 40, sp: 30 },
        abilities: { 0: 'Sniper' },
        types: ['Bug', 'Poison']
    },
    Ariados: {
        bs: { hp: 90, at: 120, df: 90, sa: 60, sd: 90, sp: 40 },
        abilities: { 0: 'Sniper' },
        types: ['Bug', 'Poison']
    },
    Crobat: {
        bs: { hp: 100, at: 45, df: 75, sa: 120, sd: 65, sp: 140 },
        abilities: { 0: 'Adaptability' },
        types: ['Psychic', 'Flying']
    },
    Chinchou: {
        bs: { hp: 75, at: 18, df: 58, sa: 56, sd: 76, sp: 67 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water', 'Electric']
    },
    Lanturn: {
        bs: { hp: 125, at: 38, df: 98, sa: 86, sd: 110, sp: 67 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water', 'Electric']
    },
    Pichu: {
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric']
    },
    Cleffa: {
        bs: { hp: 50, at: 25, df: 28, sa: 45, sd: 55, sp: 15 },
        abilities: { 0: 'Unaware' },
        types: ['Fairy']
    },
    Igglybuff: {
        bs: { hp: 90, at: 30, df: 15, sa: 40, sd: 20, sp: 15 },
        abilities: { 0: 'Serene Grace' },
        types: ['Normal', 'Fairy']
    },
    Togepi: {
        bs: { hp: 35, at: 20, df: 65, sa: 40, sd: 65, sp: 20 },
        abilities: { 0: 'Serene Grace' },
        types: ['Fairy']
    },
    Togetic: {
        bs: { hp: 55, at: 40, df: 85, sa: 100, sd: 105, sp: 40 },
        abilities: { 0: 'Serene Grace' },
        types: ['Fairy', 'Flying']
    },
    Natu: {
        bs: { hp: 40, at: 20, df: 80, sa: 100, sd: 80, sp: 45 },
        abilities: { 0: 'Magic Bounce' },
        types: ['Psychic', 'Flying']
    },
    Xatu: {
        bs: { hp: 65, at: 45, df: 110, sa: 145, sd: 110, sp: 75 },
        abilities: { 0: 'Magic Bounce' },
        types: ['Psychic', 'Flying']
    },
    Mareep: {
        bs: { hp: 55, at: 70, df: 40, sa: 70, sd: 45, sp: 35 },
        abilities: { 0: 'Battery' },
        types: ['Electric']
    },
    Flaaffy: {
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 60, sp: 45 },
        abilities: { 0: 'Battery' },
        types: ['Electric']
    },
    Ampharos: {
        bs: { hp: 90, at: 120, df: 85, sa: 120, sd: 90, sp: 75 },
        abilities: { 0: 'Battery' },
        types: ['Electric']
    },
    Bellossom: {
        bs: { hp: 75, at: 80, df: 95, sa: 110, sd: 130, sp: 50 },
        abilities: { 0: 'Drought' },
        types: ['Grass']
    },
    Marill: {
        bs: { hp: 70, at: 60, df: 50, sa: 20, sd: 50, sp: 55 },
        abilities: { 0: 'Misty Surge' },
        types: ['Water', 'Fairy']
    },
    Azumarill: {
        bs: { hp: 100, at: 100, df: 80, sa: 60, sd: 80, sp: 85 },
        abilities: { 0: 'Misty Surge' },
        types: ['Water', 'Fairy']
    },
    Sudowoodo: {
        bs: { hp: 70, at: 120, df: 115, sa: 30, sd: 65, sp: 130 },
        abilities: { 0: 'Sturdy' },
        types: ['Rock']
    },
    Politoed: {
        bs: { hp: 90, at: 75, df: 75, sa: 110, sd: 120, sp: 85 },
        abilities: { 0: 'Drizzle' },
        types: ['Water']
    },
    Hoppip: {
        bs: { hp: 35, at: 25, df: 55, sa: 75, sd: 55, sp: 70 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Flying']
    },
    Skiploom: {
        bs: { hp: 55, at: 35, df: 65, sa: 105, sd: 65, sp: 100 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Flying']
    },
    Jumpluff: {
        bs: { hp: 75, at: 45, df: 95, sa: 135, sd: 95, sp: 120 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Flying']
    },
    Aipom: {
        bs: { hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Sunkern: {
        bs: { hp: 40, at: 30, df: 50, sa: 85, sd: 70, sp: 30 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass']
    },
    Sunflora: {
        bs: { hp: 95, at: 45, df: 75, sa: 125, sd: 105, sp: 52 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass']
    },
    Yanma: {
        bs: { hp: 65, at: 35, df: 45, sa: 105, sd: 45, sp: 95 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug', 'Flying']
    },
    Wooper: {
        bs: { hp: 85, at: 45, df: 65, sa: 25, sd: 45, sp: 15 },
        abilities: { 0: 'Unaware' },
        types: ['Water', 'Ground']
    },
    Quagsire: {
        bs: { hp: 135, at: 95, df: 115, sa: 35, sd: 95, sp: 35 },
        abilities: { 0: 'Unaware' },
        types: ['Water', 'Ground']
    },
    Eonskye: {
        bs: { hp: 50, at: 20, df: 115, sa: 130, sd: 80, sp: 160 },
        abilities: { 0: 'Gale Wings' },
        types: ['Flying']
    },
    Eonsect: {
        bs: { hp: 115, at: 50, df: 160, sa: 130, sd: 80, sp: 20 },
        abilities: { 0: 'Tinted Lens' },
        types: ['Bug']
    },
    Murkrow: {
        bs: { hp: 90, at: 95, df: 42, sa: 45, sd: 42, sp: 91 },
        abilities: { 0: 'Prankster' },
        types: ['Dark', 'Flying']
    },
    Slowking: {
        bs: { hp: 95, at: 75, df: 80, sa: 100, sd: 110, sp: 30 },
        abilities: { 0: 'Unaware' },
        types: ['Water', 'Psychic']
    },
    Misdreavus: {
        bs: { hp: 60, at: 60, df: 60, sa: 85, sd: 85, sp: 85 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost']
    },
    Unown: {
        bs: { hp: 80, at: 120, df: 80, sa: 120, sd: 80, sp: 80 },
        abilities: { 0: 'Psychic Surge' },
        types: ['Psychic']
    },
    Wobbuffet: {
        bs: { hp: 33, at: 190, df: 5, sa: 5, sd: 5, sp: 190 },
        abilities: { 0: 'Rock Head' },
        types: ['Rock', 'Ice']
    },
    Girafarig: {
        bs: { hp: 70, at: 30, df: 115, sa: 130, sd: 115, sp: 85 },
        abilities: { 0: 'Dazzling' },
        types: ['Normal', 'Psychic']
    },
    Pineco: {
        bs: { hp: 50, at: 65, df: 130, sa: 15, sd: 90, sp: 15 },
        abilities: { 0: 'Heatproof' },
        types: ['Bug']
    },
    Forretress: {
        bs: { hp: 75, at: 90, df: 180, sa: 30, sd: 120, sp: 40 },
        abilities: { 0: 'Flash Fire' },
        types: ['Bug', 'Steel']
    },
    Dunsparce: {
        bs: { hp: 130, at: 90, df: 90, sa: 65, sd: 85, sp: 45 },
        abilities: { 0: 'Serene Grace' },
        types: ['Normal']
    },
    Gligar: {
        bs: { hp: 85, at: 75, df: 105, sa: 15, sd: 65, sp: 85 },
        abilities: { 0: 'Poison Heal' },
        types: ['Ground', 'Flying']
    },
    Steelix: {
        bs: { hp: 85, at: 115, df: 110, sa: 15, sd: 220, sp: 15 },
        abilities: { 0: 'Drought' },
        types: ['Fire', 'Steel']
    },
    Snubbull: {
        bs: { hp: 60, at: 100, df: 85, sa: 40, sd: 60, sp: 30 },
        abilities: { 0: 'Guts' },
        types: ['Fairy']
    },
    Granbull: {
        bs: { hp: 90, at: 140, df: 115, sa: 60, sd: 100, sp: 45 },
        abilities: { 0: 'Guts' },
        types: ['Fairy']
    },
    Qwilfish: {
        bs: { hp: 65, at: 125, df: 105, sa: 55, sd: 95, sp: 105 },
        abilities: { 0: 'Intimidate' },
        types: ['Dark', 'Poison']
    },
    Scizor: {
        bs: { hp: 70, at: 130, df: 110, sa: 55, sd: 100, sp: 95 },
        abilities: { 0: 'Technician' },
        types: ['Bug', 'Steel']
    },
    Shuckle: {
        bs: { hp: 40, at: 10, df: 252, sa: 10, sd: 252, sp: 5 },
        abilities: { 0: 'Stamina' },
        types: ['Bug', 'Rock']
    },
    Heracross: {
        bs: { hp: 80, at: 145, df: 75, sa: 40, sd: 95, sp: 96 },
        abilities: { 0: 'Moxie' },
        types: ['Bug', 'Fighting']
    },
    Sneasel: {
        bs: { hp: 40, at: 90, df: 15, sa: 25, sd: 25, sp: 135 },
        abilities: { 0: 'Protean' },
        types: ['Normal', 'Ghost']
    },
    Teddiursa: {
        bs: { hp: 60, at: 90, df: 60, sa: 50, sd: 60, sp: 60 },
        abilities: { 0: 'Guts' },
        types: ['Normal']
    },
    Ursaring: {
        bs: { hp: 90, at: 145, df: 85, sa: 75, sd: 85, sp: 85 },
        abilities: { 0: 'Guts' },
        types: ['Normal']
    },
    Slugma: {
        bs: { hp: 40, at: 40, df: 110, sa: 70, sd: 60, sp: 20 },
        abilities: { 0: 'Water Absorb' },
        types: ['Fire']
    },
    Magcargo: {
        bs: { hp: 60, at: 50, df: 170, sa: 110, sd: 120, sp: 30 },
        abilities: { 0: 'Water Absorb' },
        types: ['Fire', 'Rock']
    },
    Swinub: {
        bs: { hp: 50, at: 50, df: 40, sa: 30, sd: 30, sp: 50 },
        abilities: { 0: 'Thick Fat' },
        types: ['Ice', 'Ground']
    },
    Piloswine: {
        bs: { hp: 100, at: 100, df: 80, sa: 60, sd: 60, sp: 50 },
        abilities: { 0: 'Thick Fat' },
        types: ['Ice', 'Ground']
    },
    Corsola: {
        bs: { hp: 70, at: 55, df: 140, sa: 65, sd: 140, sp: 30 },
        abilities: { 0: 'Rattled' },
        types: ['Ghost']
    },
    Remoraid: {
        bs: { hp: 35, at: 65, df: 35, sa: 65, sd: 35, sp: 65 },
        abilities: { 0: 'Sniper' },
        types: ['Water']
    },
    Octillery: {
        bs: { hp: 75, at: 45, df: 75, sa: 160, sd: 75, sp: 55 },
        abilities: { 0: 'Sniper' },
        types: ['Water']
    },
    Delibird: {
        bs: { hp: 56, at: 80, df: 114, sa: 124, sd: 60, sp: 136 },
        abilities: { 0: 'Slush Rush' },
        types: ['Ice', 'Flying']
    },
    Mantine: {
        bs: { hp: 115, at: 40, df: 90, sa: 80, sd: 160, sp: 70 },
        abilities: { 0: 'Rain Dish' },
        types: ['Water', 'Flying']
    },
    Skarmory: {
        bs: { hp: 85, at: 100, df: 140, sa: 40, sd: 90, sp: 80 },
        abilities: { 0: 'Filter' },
        types: ['Steel', 'Flying']
    },
    Houndour: {
        bs: { hp: 55, at: 40, df: 40, sa: 90, sd: 60, sp: 85 },
        abilities: { 0: 'Competitive' },
        types: ['Dark', 'Fire']
    },
    Houndoom: {
        bs: { hp: 85, at: 60, df: 60, sa: 130, sd: 90, sp: 115 },
        abilities: { 0: 'Competitive' },
        types: ['Dark', 'Fire']
    },
    Kingdra: {
        bs: { hp: 130, at: 35, df: 100, sa: 95, sd: 120, sp: 85 },
        abilities: { 0: 'Surge Surfer' },
        types: ['Poison', 'Electric']
    },
    Phanpy: {
        bs: { hp: 90, at: 100, df: 101, sa: 40, sd: 40, sp: 67 },
        abilities: { 0: 'Thick Fat' },
        types: ['Ground']
    },
    Donphan: {
        bs: { hp: 115, at: 131, df: 131, sa: 60, sd: 60, sp: 87 },
        abilities: { 0: 'Thick Fat' },
        types: ['Ground']
    },
    Porygon2: {
        bs: { hp: 95, at: 50, df: 100, sa: 115, sd: 105, sp: 70 },
        abilities: { 0: 'Filter' },
        types: ['Normal']
    },
    Stantler: {
        bs: { hp: 103, at: 45, df: 82, sa: 125, sd: 85, sp: 105 },
        abilities: { 0: 'Intimidate' },
        types: ['Normal']
    },
    Smeargle: {
        bs: { hp: 55, at: 20, df: 35, sa: 20, sd: 45, sp: 75 },
        abilities: { 0: 'Sturdy' },
        types: ['Normal']
    },
    Tyrogue: {
        bs: { hp: 65, at: 65, df: 65, sa: 65, sd: 65, sp: 65 },
        abilities: { 0: 'Unburden' },
        types: ['Fighting']
    },
    Hitmontop: {
        bs: { hp: 50, at: 140, df: 140, sa: 35, sd: 100, sp: 90 },
        abilities: { 0: 'Technician' },
        types: ['Fighting']
    },
    Smoochum: {
        bs: { hp: 45, at: 30, df: 15, sa: 85, sd: 65, sp: 65 },
        abilities: { 0: 'Flash Fire' },
        types: ['Ice', 'Psychic']
    },
    Elekid: {
        bs: { hp: 45, at: 63, df: 37, sa: 65, sd: 55, sp: 95 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric']
    },
    Magby: {
        bs: { hp: 45, at: 75, df: 37, sa: 70, sd: 55, sp: 83 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Miltank: {
        bs: { hp: 95, at: 100, df: 135, sa: 20, sd: 120, sp: 100 },
        abilities: { 0: 'Thick Fat' },
        types: ['Normal']
    },
    Blissey: {
        bs: { hp: 255, at: 10, df: 10, sa: 75, sd: 165, sp: 55 },
        abilities: { 0: 'Regenerator' },
        types: ['Normal']
    },
    Raikou: {
        bs: { hp: 90, at: 85, df: 75, sa: 115, sd: 100, sp: 135 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric']
    },
    Entei: {
        bs: { hp: 115, at: 135, df: 85, sa: 90, sd: 75, sp: 100 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Suicune: {
        bs: { hp: 100, at: 75, df: 115, sa: 90, sd: 135, sp: 85 },
        abilities: { 0: 'Marvel Scale' },
        types: ['Water']
    },
    Larvitar: {
        bs: { hp: 50, at: 64, df: 70, sa: 25, sd: 60, sp: 41 },
        abilities: { 0: 'Sand Stream' },
        types: ['Rock', 'Ground']
    },
    Pupitar: {
        bs: { hp: 70, at: 94, df: 90, sa: 35, sd: 80, sp: 51 },
        abilities: { 0: 'Sand Stream' },
        types: ['Rock', 'Ground']
    },
    Tyranitar: {
        bs: { hp: 100, at: 144, df: 120, sa: 45, sd: 110, sp: 81 },
        abilities: { 0: 'Sand Stream' },
        types: ['Rock', 'Dark']
    },
    Lugia: {
        bs: { hp: 106, at: 40, df: 130, sa: 140, sd: 154, sp: 110 },
        abilities: { 0: 'Multiscale' },
        types: ['Psychic', 'Water']
    },
    HoOh: {
        bs: { hp: 106, at: 150, df: 90, sa: 90, sd: 154, sp: 90 },
        abilities: { 0: 'Regenerator' },
        types: ['Fire', 'Psychic']
    },
    Celebi: {
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        abilities: { 0: 'Regenerator' },
        types: ['Psychic', 'Grass']
    },
    Treecko: {
        bs: { hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70 },
        abilities: { 0: 'Unburden' },
        types: ['Grass']
    },
    Grovyle: {
        bs: { hp: 50, at: 65, df: 45, sa: 85, sd: 65, sp: 95 },
        abilities: { 0: 'Unburden' },
        types: ['Grass']
    },
    Sceptile: {
        bs: { hp: 80, at: 45, df: 85, sa: 105, sd: 95, sp: 140 },
        abilities: { 0: 'Unburden' },
        types: ['Grass']
    },
    Torchic: {
        bs: { hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45 },
        abilities: { 0: 'Speed Boost' },
        types: ['Fire']
    },
    Combusken: {
        bs: { hp: 60, at: 85, df: 60, sa: 65, sd: 60, sp: 85 },
        abilities: { 0: 'Speed Boost' },
        types: ['Fire', 'Fighting']
    },
    Blaziken: {
        bs: { hp: 100, at: 125, df: 80, sa: 50, sd: 75, sp: 120 },
        abilities: { 0: 'Speed Boost' },
        types: ['Fire', 'Fighting']
    },
    Mudkip: {
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 40 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water']
    },
    Marshtomp: {
        bs: { hp: 70, at: 105, df: 70, sa: 30, sd: 70, sp: 50 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water', 'Ground']
    },
    Swampert: {
        bs: { hp: 100, at: 150, df: 100, sa: 45, sd: 95, sp: 60 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water', 'Ground']
    },
    Poochyena: {
        bs: { hp: 35, at: 75, df: 85, sa: 30, sd: 40, sp: 65 },
        abilities: { 0: 'Intimidate' },
        types: ['Dark']
    },
    Mightyena: {
        bs: { hp: 70, at: 115, df: 120, sa: 30, sd: 80, sp: 96 },
        abilities: { 0: 'Intimidate' },
        types: ['Dark']
    },
    Zigzagoon: {
        bs: { hp: 38, at: 45, df: 41, sa: 30, sd: 41, sp: 120 },
        abilities: { 0: 'Quick Feet' },
        types: ['Normal']
    },
    Linoone: {
        bs: { hp: 78, at: 95, df: 61, sa: 50, sd: 61, sp: 160 },
        abilities: { 0: 'Quick Feet' },
        types: ['Normal']
    },
    Wurmple: {
        bs: { hp: 45, at: 45, df: 35, sa: 20, sd: 30, sp: 20 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug']
    },
    Silcoon: {
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug']
    },
    Beautifly: {
        bs: { hp: 60, at: 70, df: 70, sa: 120, sd: 70, sp: 101 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug', 'Flying']
    },
    Cascoon: {
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug']
    },
    Dustox: {
        bs: { hp: 60, at: 80, df: 140, sa: 20, sd: 150, sp: 65 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug', 'Poison']
    },
    Lotad: {
        bs: { hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water', 'Grass']
    },
    Lombre: {
        bs: { hp: 60, at: 50, df: 50, sa: 60, sd: 70, sp: 50 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water', 'Grass']
    },
    Ludicolo: {
        bs: { hp: 80, at: 40, df: 70, sa: 110, sd: 140, sp: 86 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water', 'Grass']
    },
    Seedot: {
        bs: { hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass']
    },
    Nuzleaf: {
        bs: { hp: 70, at: 70, df: 40, sa: 60, sd: 40, sp: 60 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Dark']
    },
    Shiftry: {
        bs: { hp: 90, at: 125, df: 60, sa: 60, sd: 60, sp: 120 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Grass', 'Dark']
    },
    Taillow: {
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 85 },
        abilities: { 0: 'Guts' },
        types: ['Normal', 'Flying']
    },
    Swellow: {
        bs: { hp: 60, at: 95, df: 70, sa: 75, sd: 60, sp: 155 },
        abilities: { 0: 'Guts' },
        types: ['Normal', 'Flying']
    },
    Wingull: {
        bs: { hp: 40, at: 30, df: 30, sa: 55, sd: 30, sp: 85 },
        abilities: { 0: 'Drizzle' },
        types: ['Water', 'Flying']
    },
    Pelipper: {
        bs: { hp: 60, at: 50, df: 130, sa: 95, sd: 100, sp: 65 },
        abilities: { 0: 'Drizzle' },
        types: ['Water', 'Flying']
    },
    Ralts: {
        bs: { hp: 28, at: 25, df: 25, sa: 45, sd: 35, sp: 40 },
        abilities: { 0: 'Synchronize' },
        types: ['Psychic', 'Fairy']
    },
    Kirlia: {
        bs: { hp: 38, at: 35, df: 35, sa: 65, sd: 55, sp: 50 },
        abilities: { 0: 'Synchronize' },
        types: ['Psychic', 'Fairy']
    },
    Gardevoir: {
        bs: { hp: 68, at: 35, df: 65, sa: 145, sd: 120, sp: 95 },
        abilities: { 0: 'Synchronize' },
        types: ['Psychic', 'Fairy']
    },
    Surskit: {
        bs: { hp: 40, at: 30, df: 32, sa: 80, sd: 52, sp: 65 },
        abilities: { 0: 'Intimidate' },
        types: ['Bug', 'Water']
    },
    Masquerain: {
        bs: { hp: 70, at: 60, df: 62, sa: 130, sd: 82, sp: 144 },
        abilities: { 0: 'Intimidate' },
        types: ['Bug', 'Water']
    },
    Shroomish: {
        bs: { hp: 60, at: 80, df: 70, sa: 20, sd: 60, sp: 55 },
        abilities: { 0: 'Technician' },
        types: ['Grass']
    },
    Breloom: {
        bs: { hp: 60, at: 150, df: 90, sa: 40, sd: 70, sp: 90 },
        abilities: { 0: 'Technician' },
        types: ['Grass', 'Fighting']
    },
    Slakoth: {
        bs: { hp: 60, at: 60, df: 60, sa: 35, sd: 35, sp: 30 },
        abilities: { 0: 'Comatose' },
        types: ['Normal']
    },
    Vigoroth: {
        bs: { hp: 80, at: 80, df: 80, sa: 55, sd: 55, sp: 90 },
        abilities: { 0: 'Sheer Force' },
        types: ['Normal']
    },
    Slaking: {
        bs: { hp: 170, at: 160, df: 110, sa: 65, sd: 65, sp: 100 },
        abilities: { 0: 'Comatose' },
        types: ['Normal']
    },
    Nincada: {
        bs: { hp: 31, at: 65, df: 90, sa: 30, sd: 30, sp: 100 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug', 'Ground']
    },
    Ninjask: {
        bs: { hp: 61, at: 90, df: 45, sa: 50, sd: 50, sp: 200 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug', 'Flying']
    },
    Shedinja: {
        bs: { hp: 1, at: 130, df: 45, sa: 30, sd: 30, sp: 70 },
        abilities: { 0: 'Wonder Guard' },
        types: ['Bug', 'Ghost']
    },
    Whismur: {
        bs: { hp: 64, at: 11, df: 23, sa: 61, sd: 53, sp: 28 },
        abilities: { 0: 'Scrappy' },
        types: ['Normal']
    },
    Loudred: {
        bs: { hp: 84, at: 21, df: 43, sa: 71, sd: 103, sp: 48 },
        abilities: { 0: 'Scrappy' },
        types: ['Normal']
    },
    Exploud: {
        bs: { hp: 134, at: 31, df: 73, sa: 91, sd: 143, sp: 68 },
        abilities: { 0: 'Scrappy' },
        types: ['Normal']
    },
    Makuhita: {
        bs: { hp: 82, at: 67, df: 45, sa: 10, sd: 30, sp: 25 },
        abilities: { 0: 'Skill Link' },
        types: ['Fighting']
    },
    Hariyama: {
        bs: { hp: 164, at: 134, df: 90, sa: 20, sd: 60, sp: 50 },
        abilities: { 0: 'Skill Link' },
        types: ['Fighting']
    },
    Azurill: {
        bs: { hp: 50, at: 20, df: 40, sa: 20, sd: 40, sp: 20 },
        abilities: { 0: 'Misty Surge' },
        types: ['Normal', 'Fairy']
    },
    Nosepass: {
        bs: { hp: 30, at: 45, df: 135, sa: 45, sd: 140, sp: 30 },
        abilities: { 0: 'Sturdy' },
        types: ['Rock']
    },
    LunarPaw: {
        bs: { hp: 120, at: 135, df: 95, sa: 35, sd: 85, sp: 100 },
        abilities: { 0: 'Beast Boost' },
        types: ['Fairy', 'Dark']
    },
    Delcatty: {
        bs: { hp: 100, at: 115, df: 65, sa: 55, sd: 55, sp: 140 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Sableye: {
        bs: { hp: 90, at: 95, df: 145, sa: 25, sd: 85, sp: 50 },
        abilities: { 0: 'Prankster' },
        types: ['Dark', 'Ghost']
    },
    Mawile: {
        bs: { hp: 90, at: 145, df: 105, sa: 25, sd: 85, sp: 50 },
        abilities: { 0: 'Intimidate' },
        types: ['Steel', 'Fairy']
    },
    Aron: {
        bs: { hp: 50, at: 70, df: 100, sa: 40, sd: 40, sp: 30 },
        abilities: { 0: 'Sturdy' },
        types: ['Steel', 'Rock']
    },
    Lairon: {
        bs: { hp: 60, at: 90, df: 160, sa: 50, sd: 50, sp: 40 },
        abilities: { 0: 'Sturdy' },
        types: ['Steel', 'Rock']
    },
    Aggron: {
        bs: { hp: 100, at: 130, df: 220, sa: 20, sd: 60, sp: 20 },
        abilities: { 0: 'Sturdy' },
        types: ['Steel', 'Rock']
    },
    Meditite: {
        bs: { hp: 30, at: 40, df: 55, sa: 40, sd: 55, sp: 60 },
        abilities: { 0: 'Pure Power' },
        types: ['Fighting', 'Psychic']
    },
    Medicham: {
        bs: { hp: 90, at: 110, df: 105, sa: 20, sd: 75, sp: 105 },
        abilities: { 0: 'Pure Power' },
        types: ['Fighting', 'Psychic']
    },
    Electrike: {
        bs: { hp: 40, at: 45, df: 40, sa: 85, sd: 40, sp: 85 },
        abilities: { 0: 'Intimidate' },
        types: ['Electric']
    },
    Manectric: {
        bs: { hp: 70, at: 75, df: 60, sa: 135, sd: 60, sp: 135 },
        abilities: { 0: 'Intimidate' },
        types: ['Electric']
    },
    Plusle: {
        bs: { hp: 60, at: 50, df: 40, sa: 105, sd: 95, sp: 115 },
        abilities: { 0: 'Plus' },
        types: ['Electric']
    },
    Minun: {
        bs: { hp: 60, at: 40, df: 50, sa: 95, sd: 105, sp: 115 },
        abilities: { 0: 'Minus' },
        types: ['Electric']
    },
    Volbeat: {
        bs: { hp: 65, at: 73, df: 105, sa: 47, sd: 125, sp: 85 },
        abilities: { 0: 'Prankster' },
        types: ['Bug']
    },
    Illumise: {
        bs: { hp: 65, at: 47, df: 105, sa: 73, sd: 125, sp: 85 },
        abilities: { 0: 'Prankster' },
        types: ['Bug']
    },
    Roselia: {
        bs: { hp: 50, at: 20, df: 45, sa: 125, sd: 80, sp: 95 },
        abilities: { 0: 'Technician' },
        types: ['Grass', 'Poison']
    },
    Gulpin: {
        bs: { hp: 100, at: 43, df: 73, sa: 13, sd: 73, sp: 40 },
        abilities: { 0: 'Thick Fat' },
        types: ['Poison']
    },
    Swalot: {
        bs: { hp: 150, at: 93, df: 103, sa: 23, sd: 103, sp: 55 },
        abilities: { 0: 'Thick Fat' },
        types: ['Poison']
    },
    Carvanha: {
        bs: { hp: 45, at: 90, df: 20, sa: 90, sd: 20, sp: 65 },
        abilities: { 0: 'Speed Boost' },
        types: ['Fire', 'Dark']
    },
    Sharpedo: {
        bs: { hp: 70, at: 120, df: 40, sa: 120, sd: 40, sp: 165 },
        abilities: { 0: 'Speed Boost' },
        types: ['Fire', 'Dark']
    },
    Wailmer: {
        bs: { hp: 250, at: 5, df: 95, sa: 70, sd: 5, sp: 20 },
        abilities: { 0: 'Unaware' },
        types: ['Water']
    },
    Wailord: {
        bs: { hp: 255, at: 10, df: 145, sa: 90, sd: 10, sp: 40 },
        abilities: { 0: 'Unaware' },
        types: ['Water']
    },
    Numel: {
        bs: { hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water', 'Ground']
    },
    Camerupt: {
        bs: { hp: 90, at: 150, df: 70, sa: 45, sd: 125, sp: 40 },
        abilities: { 0: 'Sheer Force' },
        types: ['Water', 'Ground']
    },
    Torkoal: {
        bs: { hp: 110, at: 45, df: 160, sa: 95, sd: 70, sp: 20 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Spoink: {
        bs: { hp: 70, at: 25, df: 35, sa: 80, sd: 100, sp: 60 },
        abilities: { 0: 'Fur Coat' },
        types: ['Psychic']
    },
    Grumpig: {
        bs: { hp: 100, at: 45, df: 65, sa: 110, sd: 150, sp: 80 },
        abilities: { 0: 'Fur Coat' },
        types: ['Psychic']
    },
    Spinda: {
        bs: { hp: 99, at: 33, df: 99, sa: 99, sd: 99, sp: 99 },
        abilities: { 0: 'Contrary' },
        types: ['Normal']
    },
    Trapinch: {
        bs: { hp: 65, at: 100, df: 65, sa: 45, sd: 45, sp: 10 },
        abilities: { 0: 'Arena Trap' },
        types: ['Ground']
    },
    Vibrava: {
        bs: { hp: 80, at: 110, df: 80, sa: 20, sd: 50, sp: 70 },
        abilities: { 0: 'Levitate' },
        types: ['Ground', 'Dragon']
    },
    Flygon: {
        bs: { hp: 110, at: 140, df: 120, sa: 45, sd: 80, sp: 105 },
        abilities: { 0: 'Levitate' },
        types: ['Ground', 'Dragon']
    },
    Cacnea: {
        bs: { hp: 50, at: 95, df: 70, sa: 45, sd: 40, sp: 35 },
        abilities: { 0: 'Sand Veil' },
        types: ['Grass']
    },
    Cacturne: {
        bs: { hp: 90, at: 145, df: 110, sa: 20, sd: 60, sp: 75 },
        abilities: { 0: 'Sand Veil' },
        types: ['Grass', 'Dark']
    },
    Swablu: {
        bs: { hp: 45, at: 40, df: 60, sa: 40, sd: 75, sp: 50 },
        abilities: { 0: 'Cloud Nine' },
        types: ['Normal', 'Flying']
    },
    Altaria: {
        bs: { hp: 75, at: 30, df: 90, sa: 135, sd: 115, sp: 95 },
        abilities: { 0: 'Delta Stream' },
        types: ['Dragon', 'Flying']
    },
    Zangoose: {
        bs: { hp: 73, at: 125, df: 60, sa: 60, sd: 60, sp: 140 },
        abilities: { 0: 'Guts' },
        types: ['Normal']
    },
    Seviper: {
        bs: { hp: 133, at: 133, df: 93, sa: 30, sd: 60, sp: 55 },
        abilities: { 0: 'Stamina' },
        types: ['Poison']
    },
    Lunatone: {
        bs: { hp: 130, at: 25, df: 65, sa: 95, sd: 125, sp: 95 },
        abilities: { 0: 'Levitate' },
        types: ['Rock', 'Psychic']
    },
    Solrock: {
        bs: { hp: 130, at: 95, df: 125, sa: 25, sd: 65, sp: 95 },
        abilities: { 0: 'Levitate' },
        types: ['Rock', 'Psychic']
    },
    Barboach: {
        bs: { hp: 50, at: 48, df: 43, sa: 46, sd: 41, sp: 60 },
        abilities: { 0: 'Unaware' },
        types: ['Water', 'Ground']
    },
    Whiscash: {
        bs: { hp: 110, at: 88, df: 113, sa: 36, sd: 111, sp: 60 },
        abilities: { 0: 'Unaware' },
        types: ['Water', 'Ground']
    },
    Corphish: {
        bs: { hp: 43, at: 80, df: 65, sa: 50, sd: 35, sp: 35 },
        abilities: { 0: 'Water Bubble' },
        types: ['Water']
    },
    Crawdaunt: {
        bs: { hp: 103, at: 145, df: 125, sa: 40, sd: 55, sp: 35 },
        abilities: { 0: 'Water Bubble' },
        types: ['Water', 'Dark']
    },
    Baltoy: {
        bs: { hp: 50, at: 40, df: 55, sa: 40, sd: 90, sp: 55 },
        abilities: { 0: 'Levitate' },
        types: ['Ground', 'Psychic']
    },
    Claydol: {
        bs: { hp: 90, at: 20, df: 115, sa: 70, sd: 160, sp: 75 },
        abilities: { 0: 'Levitate' },
        types: ['Ground', 'Psychic']
    },
    Lileep: {
        bs: { hp: 86, at: 11, df: 77, sa: 61, sd: 87, sp: 23 },
        abilities: { 0: 'Storm Drain' },
        types: ['Rock', 'Grass']
    },
    Cradily: {
        bs: { hp: 106, at: 31, df: 97, sa: 111, sd: 127, sp: 43 },
        abilities: { 0: 'Storm Drain' },
        types: ['Rock', 'Grass']
    },
    Anorith: {
        bs: { hp: 45, at: 95, df: 70, sa: 20, sd: 60, sp: 75 },
        abilities: { 0: 'Swift Swim' },
        types: ['Rock', 'Bug']
    },
    Armaldo: {
        bs: { hp: 75, at: 145, df: 120, sa: 30, sd: 100, sp: 45 },
        abilities: { 0: 'Storm Drain' },
        types: ['Rock', 'Bug']
    },
    Feebas: {
        bs: { hp: 20, at: 15, df: 20, sa: 10, sd: 55, sp: 80 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water']
    },
    Milotic: {
        bs: { hp: 125, at: 20, df: 79, sa: 111, sd: 144, sp: 81 },
        abilities: { 0: 'Marvel Scale' },
        types: ['Water']
    },
    Castform: {
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        abilities: { 0: 'Cloud Nine' },
        types: ['Normal']
    },
    Kecleon: {
        bs: { hp: 90, at: 90, df: 70, sa: 60, sd: 130, sp: 98 },
        abilities: { 0: 'Protean' },
        types: ['Normal']
    },
    Shuppet: {
        bs: { hp: 44, at: 75, df: 35, sa: 63, sd: 33, sp: 25 },
        abilities: { 0: 'Prankster' },
        types: ['Ghost']
    },
    Banette: {
        bs: { hp: 64, at: 125, df: 65, sa: 83, sd: 63, sp: 35 },
        abilities: { 0: 'Prankster' },
        types: ['Ghost']
    },
    Duskull: {
        bs: { hp: 20, at: 40, df: 110, sa: 30, sd: 110, sp: 25 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost']
    },
    Dusclops: {
        bs: { hp: 40, at: 70, df: 150, sa: 60, sd: 150, sp: 25 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost']
    },
    Tropius: {
        bs: { hp: 149, at: 28, df: 103, sa: 112, sd: 159, sp: 31 },
        abilities: { 0: 'Triage' },
        types: ['Grass', 'Flying']
    },
    Chimecho: {
        bs: { hp: 95, at: 20, df: 90, sa: 135, sd: 120, sp: 65 },
        abilities: { 0: 'Levitate' },
        types: ['Psychic']
    },
    Absol: {
        bs: { hp: 65, at: 130, df: 90, sa: 45, sd: 60, sp: 125 },
        abilities: { 0: 'Moxie' },
        types: ['Dark']
    },
    Wynaut: {
        bs: { hp: 13, at: 95, df: 5, sa: 5, sd: 5, sp: 95 },
        abilities: { 0: 'Rock Head' },
        types: ['Rock', 'Ice']
    },
    Snorunt: {
        bs: { hp: 50, at: 50, df: 50, sa: 50, sd: 50, sp: 50 },
        abilities: { 0: 'Moody' },
        types: ['Ice']
    },
    Glalie: {
        bs: { hp: 100, at: 140, df: 100, sa: 20, sd: 100, sp: 100 },
        abilities: { 0: 'Moody' },
        types: ['Ice']
    },
    Spheal: {
        bs: { hp: 70, at: 40, df: 50, sa: 55, sd: 50, sp: 25 },
        abilities: { 0: 'Fur Coat' },
        types: ['Ice', 'Water']
    },
    Sealeo: {
        bs: { hp: 90, at: 60, df: 70, sa: 75, sd: 70, sp: 45 },
        abilities: { 0: 'Fur Coat' },
        types: ['Ice', 'Water']
    },
    Walrein: {
        bs: { hp: 140, at: 30, df: 110, sa: 95, sd: 130, sp: 35 },
        abilities: { 0: 'Fur Coat' },
        types: ['Ice', 'Water']
    },
    Clamperl: {
        bs: { hp: 35, at: 34, df: 55, sa: 34, sd: 55, sp: 32 },
        abilities: { 0: 'Adaptability' },
        types: ['Dragon']
    },
    Huntail: {
        bs: { hp: 55, at: 138, df: 75, sa: 34, sd: 105, sp: 138 },
        abilities: { 0: 'Adaptability' },
        types: ['Dragon', 'Fire']
    },
    Gorebyss: {
        bs: { hp: 55, at: 34, df: 105, sa: 138, sd: 75, sp: 138 },
        abilities: { 0: 'Adaptability' },
        types: ['Dragon', 'Fairy']
    },
    Relicanth: {
        bs: { hp: 120, at: 90, df: 150, sa: 45, sd: 65, sp: 55 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water', 'Rock']
    },
    Luvdisc: {
        bs: { hp: 43, at: 30, df: 55, sa: 90, sd: 65, sp: 117 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water']
    },
    Bagon: {
        bs: { hp: 45, at: 75, df: 60, sa: 40, sd: 30, sp: 50 },
        abilities: { 0: 'Intimidate' },
        types: ['Dragon']
    },
    Shelgon: {
        bs: { hp: 65, at: 95, df: 100, sa: 60, sd: 50, sp: 50 },
        abilities: { 0: 'Intimidate' },
        types: ['Dragon']
    },
    Salamence: {
        bs: { hp: 120, at: 145, df: 80, sa: 50, sd: 80, sp: 125 },
        abilities: { 0: 'Intimidate' },
        types: ['Dragon', 'Flying']
    },
    Beldum: {
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        abilities: { 0: 'Stamina' },
        types: ['Steel', 'Psychic']
    },
    Metang: {
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        abilities: { 0: 'Stamina' },
        types: ['Steel', 'Psychic']
    },
    Metagross: {
        bs: { hp: 110, at: 145, df: 130, sa: 50, sd: 95, sp: 70 },
        abilities: { 0: 'Stamina' },
        types: ['Steel', 'Psychic']
    },
    Regirock: {
        bs: { hp: 80, at: 100, df: 200, sa: 50, sd: 100, sp: 50 },
        abilities: { 0: 'Huge Power' },
        types: ['Rock']
    },
    Regice: {
        bs: { hp: 80, at: 50, df: 100, sa: 100, sd: 200, sp: 50 },
        abilities: { 0: 'No Guard' },
        types: ['Ice']
    },
    Registeel: {
        bs: { hp: 80, at: 75, df: 150, sa: 75, sd: 150, sp: 50 },
        abilities: { 0: 'Stamina' },
        types: ['Steel']
    },
    Latias: {
        bs: { hp: 80, at: 80, df: 90, sa: 110, sd: 130, sp: 110 },
        abilities: { 0: 'Levitate' },
        types: ['Dragon', 'Psychic']
    },
    Latios: {
        bs: { hp: 80, at: 90, df: 80, sa: 130, sd: 110, sp: 110 },
        abilities: { 0: 'Levitate' },
        types: ['Dragon', 'Psychic']
    },
    Kyogre: {
        bs: { hp: 120, at: 80, df: 90, sa: 150, sd: 140, sp: 90 },
        abilities: { 0: 'Drizzle' },
        types: ['Water']
    },
    Groudon: {
        bs: { hp: 120, at: 150, df: 140, sa: 80, sd: 90, sp: 90 },
        abilities: { 0: 'Drought' },
        types: ['Ground']
    },
    Rayquaza: {
        bs: { hp: 105, at: 150, df: 70, sa: 150, sd: 70, sp: 135 },
        abilities: { 0: 'Intimidate' },
        types: ['Bug', 'Dragon']
    },
    Jirachi: {
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        abilities: { 0: 'Serene Grace' },
        types: ['Steel', 'Psychic']
    },
    Deoxys: {
        bs: { hp: 50, at: 150, df: 50, sa: 150, sd: 50, sp: 150 },
        abilities: { 0: 'Download' },
        types: ['Electric', 'Psychic']
    },
    Turtwig: {
        bs: { hp: 55, at: 68, df: 84, sa: 15, sd: 55, sp: 31 },
        abilities: { 0: 'Thick Fat' },
        types: ['Grass']
    },
    Grotle: {
        bs: { hp: 75, at: 89, df: 105, sa: 25, sd: 65, sp: 36 },
        abilities: { 0: 'Thick Fat' },
        types: ['Grass']
    },
    Torterra: {
        bs: { hp: 95, at: 124, df: 155, sa: 35, sd: 85, sp: 56 },
        abilities: { 0: 'Thick Fat' },
        types: ['Grass', 'Ground']
    },
    Chimchar: {
        bs: { hp: 44, at: 58, df: 44, sa: 58, sd: 44, sp: 61 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire']
    },
    Monferno: {
        bs: { hp: 64, at: 78, df: 52, sa: 78, sd: 52, sp: 81 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire', 'Fighting']
    },
    Infernape: {
        bs: { hp: 76, at: 124, df: 51, sa: 124, sd: 51, sp: 124 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire', 'Fighting']
    },
    Piplup: {
        bs: { hp: 53, at: 36, df: 53, sa: 61, sd: 56, sp: 40 },
        abilities: { 0: 'Intimidate' },
        types: ['Water']
    },
    Prinplup: {
        bs: { hp: 64, at: 46, df: 68, sa: 91, sd: 96, sp: 50 },
        abilities: { 0: 'Intimidate' },
        types: ['Water']
    },
    Empoleon: {
        bs: { hp: 94, at: 36, df: 88, sa: 131, sd: 141, sp: 60 },
        abilities: { 0: 'Intimidate' },
        types: ['Water', 'Steel']
    },
    Starly: {
        bs: { hp: 40, at: 75, df: 30, sa: 30, sd: 30, sp: 75 },
        abilities: { 0: 'Intimidate' },
        types: ['Normal', 'Flying']
    },
    Staravia: {
        bs: { hp: 55, at: 85, df: 50, sa: 40, sd: 40, sp: 85 },
        abilities: { 0: 'Intimidate' },
        types: ['Normal', 'Flying']
    },
    Staraptor: {
        bs: { hp: 85, at: 130, df: 70, sa: 50, sd: 60, sp: 130 },
        abilities: { 0: 'Intimidate' },
        types: ['Normal', 'Flying']
    },
    Bidoof: {
        bs: { hp: 79, at: 55, df: 50, sa: 35, sd: 60, sp: 31 },
        abilities: { 0: 'Moody' },
        types: ['Normal']
    },
    Bibarel: {
        bs: { hp: 129, at: 85, df: 80, sa: 55, sd: 90, sp: 71 },
        abilities: { 0: 'Moody' },
        types: ['Normal', 'Water']
    },
    Kricketot: {
        bs: { hp: 37, at: 25, df: 41, sa: 25, sd: 41, sp: 25 },
        abilities: { 0: 'Dancer' },
        types: ['Bug']
    },
    Kricketune: {
        bs: { hp: 127, at: 95, df: 81, sa: 55, sd: 51, sp: 105 },
        abilities: { 0: 'Dancer' },
        types: ['Bug']
    },
    Shinx: {
        bs: { hp: 45, at: 65, df: 34, sa: 40, sd: 34, sp: 45 },
        abilities: { 0: 'Intimidate' },
        types: ['Electric']
    },
    Luxio: {
        bs: { hp: 60, at: 85, df: 49, sa: 60, sd: 49, sp: 60 },
        abilities: { 0: 'Intimidate' },
        types: ['Electric']
    },
    Luxray: {
        bs: { hp: 110, at: 120, df: 79, sa: 45, sd: 79, sp: 120 },
        abilities: { 0: 'Intimidate' },
        types: ['Electric']
    },
    Budew: {
        bs: { hp: 40, at: 30, df: 35, sa: 50, sd: 70, sp: 55 },
        abilities: { 0: 'Merciless' },
        types: ['Grass', 'Poison']
    },
    Roserade: {
        bs: { hp: 60, at: 20, df: 65, sa: 155, sd: 105, sp: 125 },
        abilities: { 0: 'Merciless' },
        types: ['Grass', 'Poison']
    },
    Cranidos: {
        bs: { hp: 67, at: 125, df: 40, sa: 30, sd: 30, sp: 58 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Rock']
    },
    Rampardos: {
        bs: { hp: 97, at: 165, df: 110, sa: 65, sd: 50, sp: 38 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Rock']
    },
    Shieldon: {
        bs: { hp: 60, at: 42, df: 118, sa: 7, sd: 88, sp: 30 },
        abilities: { 0: 'Thick Fat' },
        types: ['Rock', 'Steel']
    },
    Bastiodon: {
        bs: { hp: 90, at: 82, df: 168, sa: 17, sd: 138, sp: 30 },
        abilities: { 0: 'Thick Fat' },
        types: ['Rock', 'Steel']
    },
    Burmy: {
        bs: { hp: 40, at: 19, df: 55, sa: 49, sd: 85, sp: 36 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Bug']
    },
    Wormadam: {
        bs: { hp: 80, at: 29, df: 105, sa: 99, sd: 135, sp: 36 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Bug', 'Grass']
    },
    Mothim: {
        bs: { hp: 100, at: 134, df: 50, sa: 54, sd: 80, sp: 66 },
        abilities: { 0: 'Prankster' },
        types: ['Bug', 'Flying']
    },
    Combee: {
        bs: { hp: 30, at: 30, df: 42, sa: 30, sd: 42, sp: 70 },
        abilities: { 0: 'Dazzling' },
        types: ['Bug', 'Flying']
    },
    Vespiquen: {
        bs: { hp: 110, at: 10, df: 152, sa: 120, sd: 152, sp: 20 },
        abilities: { 0: 'Queenly Majesty' },
        types: ['Bug', 'Flying']
    },
    Pachirisu: {
        bs: { hp: 90, at: 45, df: 100, sa: 45, sd: 140, sp: 95 },
        abilities: { 0: 'Fur Coat' },
        types: ['Electric']
    },
    Buizel: {
        bs: { hp: 55, at: 75, df: 35, sa: 60, sd: 30, sp: 105 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water']
    },
    Floatzel: {
        bs: { hp: 85, at: 115, df: 55, sa: 85, sd: 50, sp: 165 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water']
    },
    Cherubi: {
        bs: { hp: 45, at: 10, df: 45, sa: 82, sd: 53, sp: 75 },
        abilities: { 0: 'Drought' },
        types: ['Grass']
    },
    Cherrim: {
        bs: { hp: 70, at: 20, df: 70, sa: 137, sd: 98, sp: 115 },
        abilities: { 0: 'Drought' },
        types: ['Grass']
    },
    Shellos: {
        bs: { hp: 96, at: 23, df: 48, sa: 57, sd: 72, sp: 34 },
        abilities: { 0: 'Sap Sipper' },
        types: ['Water']
    },
    Gastrodon: {
        bs: { hp: 151, at: 43, df: 78, sa: 92, sd: 112, sp: 39 },
        abilities: { 0: 'Sap Sipper' },
        types: ['Water', 'Ground']
    },
    Ambipom: {
        bs: { hp: 95, at: 110, df: 66, sa: 60, sd: 66, sp: 125 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Drifloon: {
        bs: { hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70 },
        abilities: { 0: 'Unburden' },
        types: ['Ghost', 'Flying']
    },
    Drifblim: {
        bs: { hp: 180, at: 50, df: 44, sa: 90, sd: 74, sp: 90 },
        abilities: { 0: 'Unburden' },
        types: ['Ghost', 'Flying']
    },
    Buneary: {
        bs: { hp: 55, at: 76, df: 44, sa: 44, sd: 56, sp: 95 },
        abilities: { 0: 'Adaptability' },
        types: ['Normal']
    },
    Lopunny: {
        bs: { hp: 65, at: 106, df: 84, sa: 54, sd: 96, sp: 135 },
        abilities: { 0: 'Adaptability' },
        types: ['Normal']
    },
    Mismagius: {
        bs: { hp: 60, at: 60, df: 60, sa: 135, sd: 135, sp: 135 },
        abilities: { 0: 'Beast Boost' },
        types: ['Ghost']
    },
    Honchkrow: {
        bs: { hp: 140, at: 135, df: 52, sa: 55, sd: 52, sp: 91 },
        abilities: { 0: 'Prankster' },
        types: ['Dark', 'Flying']
    },
    Glameow: {
        bs: { hp: 49, at: 55, df: 42, sa: 42, sd: 37, sp: 85 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Purugly: {
        bs: { hp: 71, at: 112, df: 64, sa: 64, sd: 59, sp: 142 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Chingling: {
        bs: { hp: 45, at: 30, df: 50, sa: 85, sd: 80, sp: 45 },
        abilities: { 0: 'Levitate' },
        types: ['Psychic']
    },
    Stunky: {
        bs: { hp: 63, at: 83, df: 47, sa: 41, sd: 41, sp: 74 },
        abilities: { 0: 'Fur Coat' },
        types: ['Poison', 'Dark']
    },
    Skuntank: {
        bs: { hp: 123, at: 133, df: 67, sa: 41, sd: 61, sp: 104 },
        abilities: { 0: 'Fur Coat' },
        types: ['Poison', 'Dark']
    },
    Bronzor: {
        bs: { hp: 57, at: 24, df: 106, sa: 14, sd: 106, sp: 23 },
        abilities: { 0: 'Levitate' },
        types: ['Steel', 'Psychic']
    },
    Bronzong: {
        bs: { hp: 97, at: 89, df: 146, sa: 39, sd: 146, sp: 33 },
        abilities: { 0: 'Levitate' },
        types: ['Steel', 'Psychic']
    },
    Bonsly: {
        bs: { hp: 50, at: 80, df: 95, sa: 10, sd: 45, sp: 80 },
        abilities: { 0: 'Sturdy' },
        types: ['Rock']
    },
    MimeJr: {
        bs: { hp: 20, at: 25, df: 45, sa: 70, sd: 100, sp: 60 },
        abilities: { 0: 'Filter' },
        types: ['Psychic', 'Fairy']
    },
    Happiny: {
        bs: { hp: 100, at: 5, df: 5, sa: 15, sd: 65, sp: 30 },
        abilities: { 0: 'Regenerator' },
        types: ['Normal']
    },
    Chatot: {
        bs: { hp: 96, at: 65, df: 75, sa: 112, sd: 72, sp: 111 },
        abilities: { 0: 'Gale Wings' },
        types: ['Normal', 'Flying']
    },
    Spiritomb: {
        bs: { hp: 70, at: 92, df: 138, sa: 92, sd: 138, sp: 35 },
        abilities: { 0: 'Shadow Shield' },
        types: ['Ghost', 'Dark']
    },
    Gible: {
        bs: { hp: 68, at: 70, df: 45, sa: 5, sd: 45, sp: 52 },
        abilities: { 0: 'Sand Rush' },
        types: ['Dragon', 'Ground']
    },
    Gabite: {
        bs: { hp: 88, at: 110, df: 65, sa: 5, sd: 55, sp: 92 },
        abilities: { 0: 'Sand Rush' },
        types: ['Dragon', 'Ground']
    },
    Garchomp: {
        bs: { hp: 108, at: 160, df: 110, sa: 5, sd: 85, sp: 132 },
        abilities: { 0: 'Sand Rush' },
        types: ['Dragon', 'Ground']
    },
    Munchlax: {
        bs: { hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5 },
        abilities: { 0: 'Thick Fat' },
        types: ['Normal']
    },
    Riolu: {
        bs: { hp: 40, at: 90, df: 40, sa: 55, sd: 40, sp: 60 },
        abilities: { 0: 'Justified' },
        types: ['Fighting']
    },
    Lucario: {
        bs: { hp: 70, at: 140, df: 70, sa: 145, sd: 70, sp: 90 },
        abilities: { 0: 'Justified' },
        types: ['Fighting', 'Steel']
    },
    Hippopotas: {
        bs: { hp: 68, at: 72, df: 78, sa: 38, sd: 42, sp: 32 },
        abilities: { 0: 'Sand Stream' },
        types: ['Ground']
    },
    Hippowdon: {
        bs: { hp: 148, at: 112, df: 138, sa: 38, sd: 72, sp: 47 },
        abilities: { 0: 'Sand Stream' },
        types: ['Ground']
    },
    Skorupi: {
        bs: { hp: 40, at: 50, df: 90, sa: 30, sd: 55, sp: 65 },
        abilities: { 0: 'Sniper' },
        types: ['Poison', 'Bug']
    },
    Drapion: {
        bs: { hp: 70, at: 120, df: 130, sa: 30, sd: 75, sp: 115 },
        abilities: { 0: 'Sniper' },
        types: ['Poison', 'Dark']
    },
    Croagunk: {
        bs: { hp: 48, at: 81, df: 40, sa: 61, sd: 40, sp: 90 },
        abilities: { 0: 'Sturdy' },
        types: ['Poison', 'Fighting']
    },
    Toxicroak: {
        bs: { hp: 83, at: 116, df: 65, sa: 86, sd: 65, sp: 125 },
        abilities: { 0: 'Sturdy' },
        types: ['Poison', 'Fighting']
    },
    Carnivine: {
        bs: { hp: 74, at: 100, df: 142, sa: 20, sd: 142, sp: 46 },
        abilities: { 0: 'Arena Trap' },
        types: ['Grass']
    },
    Finneon: {
        bs: { hp: 49, at: 38, df: 96, sa: 49, sd: 61, sp: 66 },
        abilities: { 0: 'Multiscale' },
        types: ['Fairy', 'Fighting']
    },
    Lumineon: {
        bs: { hp: 69, at: 48, df: 146, sa: 108, sd: 86, sp: 91 },
        abilities: { 0: 'Multiscale' },
        types: ['Fairy', 'Fighting']
    },
    Mantyke: {
        bs: { hp: 75, at: 20, df: 50, sa: 60, sd: 120, sp: 50 },
        abilities: { 0: 'Rain Dish' },
        types: ['Water', 'Flying']
    },
    Snover: {
        bs: { hp: 110, at: 62, df: 50, sa: 12, sd: 100, sp: 40 },
        abilities: { 0: 'Snow Warning' },
        types: ['Grass', 'Ice']
    },
    Abomasnow: {
        bs: { hp: 160, at: 92, df: 75, sa: 22, sd: 155, sp: 60 },
        abilities: { 0: 'Snow Warning' },
        types: ['Grass', 'Ice']
    },
    Weavile: {
        bs: { hp: 70, at: 130, df: 35, sa: 45, sd: 45, sp: 165 },
        abilities: { 0: 'Protean' },
        types: ['Normal', 'Ghost']
    },
    Magnezone: {
        bs: { hp: 90, at: 30, df: 125, sa: 145, sd: 90, sp: 80 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Steel']
    },
    Lickilicky: {
        bs: { hp: 140, at: 105, df: 135, sa: 30, sd: 95, sp: 50 },
        abilities: { 0: 'Unaware' },
        types: ['Normal']
    },
    Rhyperior: {
        bs: { hp: 145, at: 160, df: 140, sa: 55, sd: 55, sp: 10 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Ground', 'Rock']
    },
    Tangrowth: {
        bs: { hp: 120, at: 100, df: 155, sa: 110, sd: 50, sp: 30 },
        abilities: { 0: 'Regenerator' },
        types: ['Grass']
    },
    Electivire: {
        bs: { hp: 75, at: 143, df: 67, sa: 55, sd: 85, sp: 115 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric']
    },
    Magmortar: {
        bs: { hp: 75, at: 45, df: 67, sa: 155, sd: 95, sp: 103 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Togekiss: {
        bs: { hp: 85, at: 20, df: 95, sa: 130, sd: 125, sp: 100 },
        abilities: { 0: 'Serene Grace' },
        types: ['Fairy', 'Flying']
    },
    Yanmega: {
        bs: { hp: 86, at: 46, df: 86, sa: 126, sd: 56, sp: 155 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug', 'Flying']
    },
    Eonmeta: {
        bs: { hp: 80, at: 160, df: 115, sa: 20, sd: 50, sp: 130 },
        abilities: { 0: 'Technician' },
        types: ['Steel']
    },
    Eonbane: {
        bs: { hp: 130, at: 160, df: 115, sa: 20, sd: 80, sp: 50 },
        abilities: { 0: 'Corrosion' },
        types: ['Poison']
    },
    Gliscor: {
        bs: { hp: 105, at: 95, df: 145, sa: 25, sd: 95, sp: 95 },
        abilities: { 0: 'Poison Heal' },
        types: ['Ground', 'Flying']
    },
    Mamoswine: {
        bs: { hp: 110, at: 150, df: 80, sa: 70, sd: 60, sp: 85 },
        abilities: { 0: 'Thick Fat' },
        types: ['Ice', 'Ground']
    },
    PorygonZ: {
        bs: { hp: 85, at: 50, df: 70, sa: 135, sd: 75, sp: 135 },
        abilities: { 0: 'Tinted Lens' },
        types: ['Normal']
    },
    Gallade: {
        bs: { hp: 68, at: 125, df: 65, sa: 65, sd: 135, sp: 95 },
        abilities: { 0: 'Download' },
        types: ['Psychic', 'Fighting']
    },
    Probopass: {
        bs: { hp: 100, at: 55, df: 145, sa: 75, sd: 150, sp: 40 },
        abilities: { 0: 'Levitate' },
        types: ['Rock', 'Steel']
    },
    Dusknoir: {
        bs: { hp: 70, at: 145, df: 135, sa: 25, sd: 135, sp: 45 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost']
    },
    Froslass: {
        bs: { hp: 70, at: 20, df: 70, sa: 120, sd: 70, sp: 150 },
        abilities: { 0: 'Snow Cloak' },
        types: ['Ice', 'Ghost']
    },
    Rotom: {
        bs: { hp: 50, at: 50, df: 77, sa: 95, sd: 97, sp: 91 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Ghost']
    },
    Uxie: {
        bs: { hp: 75, at: 75, df: 130, sa: 75, sd: 130, sp: 95 },
        abilities: { 0: 'Wonder Guard' },
        types: ['Psychic']
    },
    Mesprit: {
        bs: { hp: 80, at: 105, df: 105, sa: 105, sd: 105, sp: 80 },
        abilities: { 0: 'Wonder Guard' },
        types: ['Psychic']
    },
    Azelf: {
        bs: { hp: 75, at: 125, df: 70, sa: 125, sd: 70, sp: 115 },
        abilities: { 0: 'Wonder Guard' },
        types: ['Psychic']
    },
    Dialga: {
        bs: { hp: 110, at: 90, df: 130, sa: 150, sd: 110, sp: 90 },
        abilities: { 0: 'Regenerator' },
        types: ['Steel', 'Dragon']
    },
    Palkia: {
        bs: { hp: 100, at: 90, df: 100, sa: 150, sd: 130, sp: 110 },
        abilities: { 0: 'Beast Boost' },
        types: ['Water', 'Dragon']
    },
    Heatran: {
        bs: { hp: 91, at: 25, df: 106, sa: 224, sd: 99, sp: 55 },
        abilities: { 0: 'Dry Skin' },
        types: ['Fire', 'Steel']
    },
    Regigigas: {
        bs: { hp: 120, at: 160, df: 110, sa: 50, sd: 110, sp: 130 },
        abilities: { 0: 'Speed Boost' },
        types: ['Normal']
    },
    Giratina: {
        bs: { hp: 150, at: 36, df: 140, sa: 100, sd: 150, sp: 90 },
        abilities: { 0: 'Thick Fat' },
        types: ['Ghost', 'Dragon']
    },
    Cresselia: {
        bs: { hp: 120, at: 30, df: 120, sa: 115, sd: 130, sp: 85 },
        abilities: { 0: 'Levitate' },
        types: ['Psychic']
    },
    Phione: {
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        abilities: { 0: 'Regenerator' },
        types: ['Water']
    },
    Manaphy: {
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        abilities: { 0: 'Regenerator' },
        types: ['Water']
    },
    Darkrai: {
        bs: { hp: 70, at: 90, df: 90, sa: 135, sd: 90, sp: 125 },
        abilities: { 0: 'Prankster' },
        types: ['Dark']
    },
    Shaymin: {
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        abilities: { 0: 'Thick Fat' },
        types: ['Grass']
    },
    Arceus: {
        bs: { hp: 255, at: 248, df: 255, sa: 248, sd: 255, sp: 248 },
        abilities: { 0: 'Protean' },
        types: ['Normal']
    },
    Victini: {
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        abilities: { 0: 'Battery' },
        types: ['Psychic', 'Fire']
    },
    Snivy: {
        bs: { hp: 20, at: 10, df: 70, sa: 65, sd: 130, sp: 40 },
        abilities: { 0: 'Contrary' },
        types: ['Grass', 'Poison']
    },
    Servine: {
        bs: { hp: 30, at: 15, df: 85, sa: 85, sd: 150, sp: 55 },
        abilities: { 0: 'Contrary' },
        types: ['Grass', 'Poison']
    },
    Serperior: {
        bs: { hp: 55, at: 5, df: 75, sa: 100, sd: 180, sp: 135 },
        abilities: { 0: 'Contrary' },
        types: ['Grass', 'Poison']
    },
    Tepig: {
        bs: { hp: 80, at: 65, df: 90, sa: 5, sd: 90, sp: 5 },
        abilities: { 0: 'Filter' },
        types: ['Rock', 'Ground']
    },
    Pignite: {
        bs: { hp: 105, at: 75, df: 115, sa: 5, sd: 115, sp: 5 },
        abilities: { 0: 'Filter' },
        types: ['Rock', 'Ground']
    },
    Emboar: {
        bs: { hp: 135, at: 85, df: 160, sa: 5, sd: 160, sp: 5 },
        abilities: { 0: 'Filter' },
        types: ['Rock', 'Ground']
    },
    Oshawott: {
        bs: { hp: 10, at: 90, df: 125, sa: 5, sd: 5, sp: 100 },
        abilities: { 0: 'Technician' },
        types: ['Steel', 'Fighting']
    },
    Dewott: {
        bs: { hp: 15, at: 120, df: 145, sa: 5, sd: 5, sp: 130 },
        abilities: { 0: 'Technician' },
        types: ['Steel', 'Fighting']
    },
    Samurott: {
        bs: { hp: 25, at: 160, df: 155, sa: 5, sd: 5, sp: 200 },
        abilities: { 0: 'Technician' },
        types: ['Steel', 'Fighting']
    },
    Patrat: {
        bs: { hp: 65, at: 55, df: 69, sa: 35, sd: 39, sp: 42 },
        abilities: { 0: 'No Guard' },
        types: ['Normal']
    },
    Watchog: {
        bs: { hp: 100, at: 95, df: 109, sa: 60, sd: 69, sp: 77 },
        abilities: { 0: 'No Guard' },
        types: ['Normal']
    },
    Lillipup: {
        bs: { hp: 45, at: 60, df: 45, sa: 25, sd: 45, sp: 55 },
        abilities: { 0: 'Intimidate' },
        types: ['Normal']
    },
    Herdier: {
        bs: { hp: 65, at: 90, df: 65, sa: 35, sd: 65, sp: 80 },
        abilities: { 0: 'Intimidate' },
        types: ['Normal']
    },
    Stoutland: {
        bs: { hp: 85, at: 130, df: 90, sa: 45, sd: 90, sp: 120 },
        abilities: { 0: 'Intimidate' },
        types: ['Normal']
    },
    Purrloin: {
        bs: { hp: 41, at: 80, df: 37, sa: 20, sd: 37, sp: 66 },
        abilities: { 0: 'Prankster' },
        types: ['Dark']
    },
    Liepard: {
        bs: { hp: 64, at: 108, df: 50, sa: 38, sd: 50, sp: 146 },
        abilities: { 0: 'Prankster' },
        types: ['Dark']
    },
    Pansage: {
        bs: { hp: 50, at: 83, df: 48, sa: 18, sd: 48, sp: 84 },
        abilities: { 0: 'Adaptability' },
        types: ['Grass']
    },
    Simisage: {
        bs: { hp: 75, at: 148, df: 63, sa: 38, sd: 63, sp: 126 },
        abilities: { 0: 'Adaptability' },
        types: ['Grass']
    },
    Pansear: {
        bs: { hp: 50, at: 18, df: 48, sa: 83, sd: 48, sp: 84 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire']
    },
    Simisear: {
        bs: { hp: 75, at: 38, df: 63, sa: 148, sd: 63, sp: 126 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire']
    },
    Panpour: {
        bs: { hp: 50, at: 18, df: 48, sa: 83, sd: 48, sp: 84 },
        abilities: { 0: 'Adaptability' },
        types: ['Water']
    },
    Simipour: {
        bs: { hp: 75, at: 38, df: 63, sa: 148, sd: 63, sp: 126 },
        abilities: { 0: 'Adaptability' },
        types: ['Water']
    },
    Munna: {
        bs: { hp: 76, at: 25, df: 45, sa: 67, sd: 85, sp: 24 },
        abilities: { 0: 'Telepathy' },
        types: ['Psychic']
    },
    Musharna: {
        bs: { hp: 116, at: 55, df: 85, sa: 107, sd: 155, sp: 29 },
        abilities: { 0: 'Comatose' },
        types: ['Psychic']
    },
    Pidove: {
        bs: { hp: 50, at: 55, df: 50, sa: 36, sd: 30, sp: 43 },
        abilities: { 0: 'Super Luck' },
        types: ['Normal', 'Flying']
    },
    Tranquill: {
        bs: { hp: 62, at: 87, df: 72, sa: 50, sd: 42, sp: 75 },
        abilities: { 0: 'Super Luck' },
        types: ['Normal', 'Flying']
    },
    Unfezant: {
        bs: { hp: 80, at: 125, df: 110, sa: 65, sd: 55, sp: 113 },
        abilities: { 0: 'Super Luck' },
        types: ['Normal', 'Flying']
    },
    Blitzle: {
        bs: { hp: 45, at: 70, df: 32, sa: 20, sd: 32, sp: 106 },
        abilities: { 0: 'Speed Boost' },
        types: ['Electric']
    },
    Zebstrika: {
        bs: { hp: 75, at: 110, df: 63, sa: 40, sd: 63, sp: 156 },
        abilities: { 0: 'Speed Boost' },
        types: ['Electric']
    },
    Roggenrola: {
        bs: { hp: 55, at: 75, df: 95, sa: 5, sd: 25, sp: 15 },
        abilities: { 0: 'Stamina' },
        types: ['Rock']
    },
    Boldore: {
        bs: { hp: 70, at: 105, df: 135, sa: 10, sd: 40, sp: 20 },
        abilities: { 0: 'Stamina' },
        types: ['Rock']
    },
    Gigalith: {
        bs: { hp: 105, at: 135, df: 170, sa: 30, sd: 80, sp: 25 },
        abilities: { 0: 'Stamina' },
        types: ['Rock']
    },
    Woobat: {
        bs: { hp: 65, at: 5, df: 43, sa: 75, sd: 63, sp: 92 },
        abilities: { 0: 'Simple' },
        types: ['Psychic', 'Flying']
    },
    Swoobat: {
        bs: { hp: 67, at: 17, df: 55, sa: 127, sd: 98, sp: 154 },
        abilities: { 0: 'Simple' },
        types: ['Psychic', 'Flying']
    },
    Drilbur: {
        bs: { hp: 60, at: 95, df: 40, sa: 30, sd: 45, sp: 78 },
        abilities: { 0: 'Sand Rush' },
        types: ['Ground']
    },
    Excadrill: {
        bs: { hp: 110, at: 145, df: 60, sa: 50, sd: 65, sp: 118 },
        abilities: { 0: 'Sand Rush' },
        types: ['Ground', 'Steel']
    },
    Audino: {
        bs: { hp: 203, at: 10, df: 146, sa: 60, sd: 86, sp: 50 },
        abilities: { 0: 'Regenerator' },
        types: ['Normal']
    },
    Timburr: {
        bs: { hp: 75, at: 80, df: 55, sa: 25, sd: 75, sp: 35 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Grass']
    },
    Gurdurr: {
        bs: { hp: 85, at: 105, df: 65, sa: 40, sd: 105, sp: 35 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Grass', 'Steel']
    },
    Conkeldurr: {
        bs: { hp: 105, at: 140, df: 75, sa: 55, sd: 155, sp: 35 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Grass', 'Steel']
    },
    Tympole: {
        bs: { hp: 50, at: 50, df: 40, sa: 50, sd: 40, sp: 64 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water']
    },
    Palpitoad: {
        bs: { hp: 95, at: 75, df: 75, sa: 65, sd: 55, sp: 69 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water', 'Ground']
    },
    Seismitoad: {
        bs: { hp: 145, at: 135, df: 95, sa: 35, sd: 75, sp: 74 },
        abilities: { 0: 'Swift Swim' },
        types: ['Water', 'Ground']
    },
    Throh: {
        bs: { hp: 150, at: 140, df: 85, sa: 30, sd: 85, sp: 45 },
        abilities: { 0: 'Contrary' },
        types: ['Fighting']
    },
    Sawk: {
        bs: { hp: 75, at: 145, df: 55, sa: 30, sd: 125, sp: 105 },
        abilities: { 0: 'Sturdy' },
        types: ['Fighting']
    },
    Sewaddle: {
        bs: { hp: 45, at: 53, df: 70, sa: 40, sd: 60, sp: 42 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Bug', 'Grass']
    },
    Swadloon: {
        bs: { hp: 55, at: 63, df: 140, sa: 50, sd: 100, sp: 42 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Bug', 'Grass']
    },
    Leavanny: {
        bs: { hp: 75, at: 123, df: 80, sa: 70, sd: 80, sp: 112 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Bug', 'Grass']
    },
    Venipede: {
        bs: { hp: 30, at: 67, df: 59, sa: 15, sd: 7, sp: 87 },
        abilities: { 0: 'Beast Boost' },
        types: ['Steel', 'Electric']
    },
    Whirlipede: {
        bs: { hp: 40, at: 87, df: 99, sa: 25, sd: 17, sp: 107 },
        abilities: { 0: 'Beast Boost' },
        types: ['Steel', 'Electric']
    },
    Scolipede: {
        bs: { hp: 60, at: 137, df: 139, sa: 35, sd: 27, sp: 147 },
        abilities: { 0: 'Beast Boost' },
        types: ['Steel', 'Electric']
    },
    Cottonee: {
        bs: { hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 96 },
        abilities: { 0: 'Prankster' },
        types: ['Grass', 'Fairy']
    },
    Whimsicott: {
        bs: { hp: 60, at: 67, df: 85, sa: 77, sd: 75, sp: 146 },
        abilities: { 0: 'Prankster' },
        types: ['Grass', 'Fairy']
    },
    Petilil: {
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Grass']
    },
    Lilligant: {
        bs: { hp: 70, at: 20, df: 75, sa: 140, sd: 105, sp: 130 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Grass']
    },
    Basculin: {
        bs: { hp: 120, at: 112, df: 45, sa: 80, sd: 55, sp: 128 },
        abilities: { 0: 'Reckless' },
        types: ['Water']
    },
    Sandile: {
        bs: { hp: 50, at: 92, df: 35, sa: 5, sd: 35, sp: 75 },
        abilities: { 0: 'Swift Swim' },
        types: ['Dark', 'Water']
    },
    Krokorok: {
        bs: { hp: 60, at: 102, df: 45, sa: 5, sd: 45, sp: 94 },
        abilities: { 0: 'Swift Swim' },
        types: ['Dark', 'Water']
    },
    Krookodile: {
        bs: { hp: 110, at: 145, df: 80, sa: 5, sd: 80, sp: 130 },
        abilities: { 0: 'Swift Swim' },
        types: ['Dark', 'Water']
    },
    Darumaka: {
        bs: { hp: 70, at: 15, df: 45, sa: 90, sd: 45, sp: 90 },
        abilities: { 0: 'Sheer Force' },
        types: ['Electric']
    },
    Darmanitan: {
        bs: { hp: 105, at: 30, df: 125, sa: 55, sd: 140, sp: 55 },
        abilities: { 0: 'Sheer Force' },
        types: ['Electric', 'Psychic']
    },
    Maractus: {
        bs: { hp: 75, at: 100, df: 144, sa: 100, sd: 57, sp: 60 },
        abilities: { 0: 'Wonder Guard' },
        types: ['Psychic', 'Ground']
    },
    Dwebble: {
        bs: { hp: 50, at: 85, df: 125, sa: 35, sd: 35, sp: 55 },
        abilities: { 0: 'Weak Armor' },
        types: ['Bug', 'Rock']
    },
    Crustle: {
        bs: { hp: 70, at: 125, df: 185, sa: 65, sd: 75, sp: 45 },
        abilities: { 0: 'Weak Armor' },
        types: ['Bug', 'Rock']
    },
    Scraggy: {
        bs: { hp: 50, at: 75, df: 100, sa: 35, sd: 100, sp: 48 },
        abilities: { 0: 'Moxie' },
        types: ['Dark', 'Fighting']
    },
    Scrafty: {
        bs: { hp: 65, at: 90, df: 165, sa: 15, sd: 165, sp: 58 },
        abilities: { 0: 'Moxie' },
        types: ['Dark', 'Fighting']
    },
    Sigilyph: {
        bs: { hp: 72, at: 18, df: 110, sa: 133, sd: 80, sp: 127 },
        abilities: { 0: 'Triage' },
        types: ['Psychic', 'Flying']
    },
    Yamask: {
        bs: { hp: 38, at: 30, df: 85, sa: 55, sd: 65, sp: 30 },
        abilities: { 0: 'Shadow Tag' },
        types: ['Ghost']
    },
    Cofagrigus: {
        bs: { hp: 58, at: 50, df: 165, sa: 115, sd: 135, sp: 30 },
        abilities: { 0: 'Shadow Tag' },
        types: ['Ghost']
    },
    Tirtouga: {
        bs: { hp: 54, at: 78, df: 103, sa: 53, sd: 45, sp: 22 },
        abilities: { 0: 'Weak Armor' },
        types: ['Water', 'Rock']
    },
    Carracosta: {
        bs: { hp: 74, at: 118, df: 203, sa: 43, sd: 105, sp: 32 },
        abilities: { 0: 'Weak Armor' },
        types: ['Water', 'Rock']
    },
    Archen: {
        bs: { hp: 55, at: 132, df: 45, sa: 74, sd: 45, sp: 90 },
        abilities: { 0: 'Unburden' },
        types: ['Rock', 'Flying']
    },
    Archeops: {
        bs: { hp: 75, at: 160, df: 85, sa: 32, sd: 85, sp: 140 },
        abilities: { 0: 'Unburden' },
        types: ['Rock', 'Flying']
    },
    Trubbish: {
        bs: { hp: 70, at: 50, df: 62, sa: 40, sd: 92, sp: 65 },
        abilities: { 0: 'Thick Fat' },
        types: ['Poison']
    },
    Garbodor: {
        bs: { hp: 110, at: 95, df: 92, sa: 30, sd: 142, sp: 75 },
        abilities: { 0: 'Thick Fat' },
        types: ['Poison']
    },
    Zorua: {
        bs: { hp: 40, at: 80, df: 30, sa: 80, sd: 40, sp: 105 },
        abilities: { 0: 'Illusion' },
        types: ['Dark']
    },
    Zoroark: {
        bs: { hp: 60, at: 120, df: 40, sa: 120, sd: 60, sp: 155 },
        abilities: { 0: 'Illusion' },
        types: ['Dark']
    },
    Minccino: {
        bs: { hp: 55, at: 50, df: 40, sa: 40, sd: 40, sp: 75 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Cinccino: {
        bs: { hp: 75, at: 95, df: 100, sa: 35, sd: 60, sp: 125 },
        abilities: { 0: 'Skill Link' },
        types: ['Normal']
    },
    Gothita: {
        bs: { hp: 45, at: 30, df: 50, sa: 55, sd: 65, sp: 45 },
        abilities: { 0: 'Contrary' },
        types: ['Psychic']
    },
    Gothorita: {
        bs: { hp: 60, at: 45, df: 70, sa: 75, sd: 85, sp: 55 },
        abilities: { 0: 'Contrary' },
        types: ['Psychic']
    },
    Gothitelle: {
        bs: { hp: 100, at: 55, df: 75, sa: 115, sd: 140, sp: 65 },
        abilities: { 0: 'Contrary' },
        types: ['Psychic']
    },
    Solosis: {
        bs: { hp: 45, at: 30, df: 60, sa: 105, sd: 50, sp: 20 },
        abilities: { 0: 'Psychic Surge' },
        types: ['Psychic']
    },
    Duosion: {
        bs: { hp: 65, at: 40, df: 80, sa: 125, sd: 60, sp: 30 },
        abilities: { 0: 'Psychic Surge' },
        types: ['Psychic']
    },
    Reuniclus: {
        bs: { hp: 110, at: 65, df: 135, sa: 125, sd: 105, sp: 30 },
        abilities: { 0: 'Psychic Surge' },
        types: ['Psychic']
    },
    Ducklett: {
        bs: { hp: 62, at: 44, df: 50, sa: 55, sd: 50, sp: 75 },
        abilities: { 0: 'Aerilate' },
        types: ['Water', 'Flying']
    },
    Swanna: {
        bs: { hp: 75, at: 87, df: 63, sa: 107, sd: 63, sp: 128 },
        abilities: { 0: 'Aerilate' },
        types: ['Water', 'Flying']
    },
    Vanillite: {
        bs: { hp: 36, at: 20, df: 50, sa: 75, sd: 60, sp: 44 },
        abilities: { 0: 'Slush Rush' },
        types: ['Ice']
    },
    Vanillish: {
        bs: { hp: 51, at: 35, df: 65, sa: 90, sd: 75, sp: 69 },
        abilities: { 0: 'Slush Rush' },
        types: ['Ice']
    },
    Vanilluxe: {
        bs: { hp: 71, at: 55, df: 85, sa: 130, sd: 95, sp: 109 },
        abilities: { 0: 'Slush Rush' },
        types: ['Ice']
    },
    Deerling: {
        bs: { hp: 60, at: 60, df: 50, sa: 40, sd: 50, sp: 75 },
        abilities: { 0: 'Normalize' },
        types: ['Normal', 'Grass']
    },
    Sawsbuck: {
        bs: { hp: 90, at: 120, df: 90, sa: 60, sd: 70, sp: 115 },
        abilities: { 0: 'Normalize' },
        types: ['Normal', 'Grass']
    },
    Emolga: {
        bs: { hp: 55, at: 55, df: 60, sa: 125, sd: 90, sp: 143 },
        abilities: { 0: 'Gale Wings' },
        types: ['Electric', 'Flying']
    },
    Karrablast: {
        bs: { hp: 50, at: 75, df: 45, sa: 40, sd: 45, sp: 60 },
        abilities: { 0: 'Skill Link' },
        types: ['Bug']
    },
    Escavalier: {
        bs: { hp: 120, at: 135, df: 165, sa: 10, sd: 105, sp: 20 },
        abilities: { 0: 'Skill Link' },
        types: ['Bug', 'Steel']
    },
    Foongus: {
        bs: { hp: 69, at: 55, df: 55, sa: 55, sd: 75, sp: 15 },
        abilities: { 0: 'Effect Spore' },
        types: ['Grass', 'Poison']
    },
    Amoonguss: {
        bs: { hp: 114, at: 85, df: 90, sa: 85, sd: 120, sp: 30 },
        abilities: { 0: 'Effect Spore' },
        types: ['Grass', 'Poison']
    },
    Frillish: {
        bs: { hp: 65, at: 10, df: 50, sa: 85, sd: 95, sp: 40 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water', 'Ghost']
    },
    Jellicent: {
        bs: { hp: 100, at: 30, df: 70, sa: 105, sd: 145, sp: 60 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water', 'Ghost']
    },
    Alomomola: {
        bs: { hp: 185, at: 75, df: 120, sa: 40, sd: 45, sp: 65 },
        abilities: { 0: 'Regenerator' },
        types: ['Water']
    },
    Joltik: {
        bs: { hp: 50, at: 47, df: 50, sa: 67, sd: 80, sp: 75 },
        abilities: { 0: 'Electric Surge' },
        types: ['Bug', 'Electric']
    },
    Galvantula: {
        bs: { hp: 70, at: 27, df: 60, sa: 127, sd: 110, sp: 138 },
        abilities: { 0: 'Electric Surge' },
        types: ['Bug', 'Electric']
    },
    Ferroseed: {
        bs: { hp: 54, at: 50, df: 111, sa: 24, sd: 86, sp: 10 },
        abilities: { 0: 'Iron Barbs' },
        types: ['Grass', 'Steel']
    },
    Ferrothorn: {
        bs: { hp: 94, at: 94, df: 151, sa: 54, sd: 126, sp: 20 },
        abilities: { 0: 'Iron Barbs' },
        types: ['Grass', 'Steel']
    },
    Klink: {
        bs: { hp: 40, at: 55, df: 70, sa: 45, sd: 60, sp: 30 },
        abilities: { 0: 'Technician' },
        types: ['Steel']
    },
    Klang: {
        bs: { hp: 60, at: 90, df: 105, sa: 20, sd: 85, sp: 60 },
        abilities: { 0: 'Technician' },
        types: ['Steel']
    },
    Klinklang: {
        bs: { hp: 60, at: 120, df: 145, sa: 30, sd: 105, sp: 90 },
        abilities: { 0: 'Technician' },
        types: ['Steel']
    },
    Tynamo: {
        bs: { hp: 35, at: 75, df: 40, sa: 15, sd: 40, sp: 80 },
        abilities: { 0: 'Levitate' },
        types: ['Electric']
    },
    Eelektrik: {
        bs: { hp: 65, at: 105, df: 70, sa: 25, sd: 70, sp: 120 },
        abilities: { 0: 'Levitate' },
        types: ['Electric']
    },
    Eelektross: {
        bs: { hp: 135, at: 145, df: 120, sa: 45, sd: 80, sp: 30 },
        abilities: { 0: 'Levitate' },
        types: ['Electric']
    },
    Elgyem: {
        bs: { hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30 },
        abilities: { 0: 'Adaptability' },
        types: ['Psychic']
    },
    Beheeyem: {
        bs: { hp: 135, at: 25, df: 75, sa: 135, sd: 115, sp: 25 },
        abilities: { 0: 'Adaptability' },
        types: ['Psychic']
    },
    Litwick: {
        bs: { hp: 50, at: 5, df: 55, sa: 85, sd: 65, sp: 20 },
        abilities: { 0: 'Contrary' },
        types: ['Ghost', 'Fire']
    },
    Lampent: {
        bs: { hp: 60, at: 10, df: 60, sa: 105, sd: 80, sp: 55 },
        abilities: { 0: 'Contrary' },
        types: ['Ghost', 'Fire']
    },
    Chandelure: {
        bs: { hp: 90, at: 20, df: 90, sa: 145, sd: 130, sp: 80 },
        abilities: { 0: 'Contrary' },
        types: ['Ghost', 'Fire']
    },
    Axew: {
        bs: { hp: 46, at: 87, df: 60, sa: 30, sd: 40, sp: 57 },
        abilities: { 0: 'Moxie' },
        types: ['Water', 'Dragon']
    },
    Fraxure: {
        bs: { hp: 66, at: 117, df: 70, sa: 40, sd: 50, sp: 87 },
        abilities: { 0: 'Moxie' },
        types: ['Water', 'Dragon']
    },
    Haxorus: {
        bs: { hp: 96, at: 147, df: 100, sa: 50, sd: 70, sp: 137 },
        abilities: { 0: 'Moxie' },
        types: ['Water', 'Dragon']
    },
    Cubchoo: {
        bs: { hp: 55, at: 70, df: 40, sa: 60, sd: 40, sp: 40 },
        abilities: { 0: 'Guts' },
        types: ['Ice']
    },
    Beartic: {
        bs: { hp: 135, at: 170, df: 80, sa: 30, sd: 80, sp: 50 },
        abilities: { 0: 'Guts' },
        types: ['Ice']
    },
    Cryogonal: {
        bs: { hp: 80, at: 20, df: 20, sa: 145, sd: 135, sp: 155 },
        abilities: { 0: 'Refrigerate' },
        types: ['Ice']
    },
    Shelmet: {
        bs: { hp: 50, at: 40, df: 85, sa: 40, sd: 65, sp: 25 },
        abilities: { 0: 'Stamina' },
        types: ['Bug']
    },
    Accelgor: {
        bs: { hp: 80, at: 110, df: 40, sa: 60, sd: 60, sp: 185 },
        abilities: { 0: 'Speed Boost' },
        types: ['Bug']
    },
    Stunfisk: {
        bs: { hp: 159, at: 26, df: 84, sa: 81, sd: 139, sp: 32 },
        abilities: { 0: 'Arena Trap' },
        types: ['Ground', 'Electric']
    },
    Mienfoo: {
        bs: { hp: 45, at: 85, df: 50, sa: 85, sd: 50, sp: 95 },
        abilities: { 0: 'Unburden' },
        types: ['Fighting']
    },
    Mienshao: {
        bs: { hp: 65, at: 135, df: 60, sa: 135, sd: 60, sp: 135 },
        abilities: { 0: 'Unburden' },
        types: ['Fighting']
    },
    Druddigon: {
        bs: { hp: 107, at: 130, df: 150, sa: 20, sd: 90, sp: 48 },
        abilities: { 0: 'Rough Skin' },
        types: ['Dragon']
    },
    Golett: {
        bs: { hp: 59, at: 74, df: 50, sa: 35, sd: 50, sp: 5 },
        abilities: { 0: 'No Guard' },
        types: ['Ground', 'Ghost']
    },
    Golurk: {
        bs: { hp: 89, at: 184, df: 80, sa: 55, sd: 80, sp: 5 },
        abilities: { 0: 'No Guard' },
        types: ['Ground', 'Ghost']
    },
    Pawniard: {
        bs: { hp: 45, at: 85, df: 70, sa: 20, sd: 60, sp: 80 },
        abilities: { 0: 'Adaptability' },
        types: ['Dark', 'Steel']
    },
    Bisharp: {
        bs: { hp: 65, at: 135, df: 120, sa: 30, sd: 100, sp: 110 },
        abilities: { 0: 'Adaptability' },
        types: ['Dark', 'Steel']
    },
    Bouffalant: {
        bs: { hp: 95, at: 110, df: 95, sa: 20, sd: 95, sp: 125 },
        abilities: { 0: 'Huge Power' },
        types: ['Normal']
    },
    Rufflet: {
        bs: { hp: 70, at: 83, df: 50, sa: 37, sd: 50, sp: 60 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire', 'Water']
    },
    Braviary: {
        bs: { hp: 100, at: 123, df: 95, sa: 57, sd: 95, sp: 80 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire', 'Water']
    },
    Vullaby: {
        bs: { hp: 70, at: 55, df: 75, sa: 15, sd: 65, sp: 60 },
        abilities: { 0: 'Prankster' },
        types: ['Dark', 'Flying']
    },
    Mandibuzz: {
        bs: { hp: 110, at: 95, df: 135, sa: 25, sd: 95, sp: 80 },
        abilities: { 0: 'Prankster' },
        types: ['Dark', 'Flying']
    },
    Heatmor: {
        bs: { hp: 85, at: 27, df: 126, sa: 145, sd: 66, sp: 65 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Fire']
    },
    Durant: {
        bs: { hp: 58, at: 109, df: 112, sa: 48, sd: 48, sp: 139 },
        abilities: { 0: 'Flash Fire' },
        types: ['Bug', 'Steel']
    },
    Deino: {
        bs: { hp: 52, at: 25, df: 50, sa: 65, sd: 50, sp: 68 },
        abilities: { 0: 'Galvanize' },
        types: ['Ghost', 'Electric']
    },
    Zweilous: {
        bs: { hp: 72, at: 35, df: 70, sa: 85, sd: 70, sp: 98 },
        abilities: { 0: 'Galvanize' },
        types: ['Ghost', 'Electric']
    },
    Hydreigon: {
        bs: { hp: 92, at: 45, df: 90, sa: 137, sd: 91, sp: 145 },
        abilities: { 0: 'Galvanize' },
        types: ['Ghost', 'Electric']
    },
    Larvesta: {
        bs: { hp: 55, at: 85, df: 55, sa: 50, sd: 55, sp: 60 },
        abilities: { 0: 'Flame Body' },
        types: ['Bug', 'Fire']
    },
    Volcarona: {
        bs: { hp: 95, at: 15, df: 65, sa: 145, sd: 105, sp: 125 },
        abilities: { 0: 'Flame Body' },
        types: ['Bug', 'Fire']
    },
    Cobalion: {
        bs: { hp: 91, at: 90, df: 129, sa: 90, sd: 72, sp: 108 },
        abilities: { 0: 'Justified' },
        types: ['Steel', 'Fighting']
    },
    Terrakion: {
        bs: { hp: 91, at: 129, df: 90, sa: 72, sd: 90, sp: 108 },
        abilities: { 0: 'Justified' },
        types: ['Rock', 'Fighting']
    },
    Virizion: {
        bs: { hp: 91, at: 90, df: 72, sa: 90, sd: 129, sp: 108 },
        abilities: { 0: 'Justified' },
        types: ['Grass', 'Fighting']
    },
    Tornadus: {
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        abilities: { 0: 'Prankster' },
        types: ['Flying']
    },
    Thundurus: {
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        abilities: { 0: 'Prankster' },
        types: ['Electric', 'Flying']
    },
    Reshiram: {
        bs: { hp: 100, at: 80, df: 100, sa: 150, sd: 120, sp: 130 },
        abilities: { 0: 'Turboblaze' },
        types: ['Dragon', 'Fire']
    },
    Zekrom: {
        bs: { hp: 100, at: 160, df: 130, sa: 80, sd: 120, sp: 90 },
        abilities: { 0: 'Teravolt' },
        types: ['Dragon', 'Electric']
    },
    Landorus: {
        bs: { hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101 },
        abilities: { 0: 'Prankster' },
        types: ['Ground', 'Flying']
    },
    Kyurem: {
        bs: { hp: 125, at: 130, df: 90, sa: 130, sd: 90, sp: 95 },
        abilities: { 0: 'Sheer Force' },
        types: ['Dragon', 'Ice']
    },
    Keldeo: {
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        abilities: { 0: 'Justified' },
        types: ['Water', 'Fighting']
    },
    Meloetta: {
        bs: { hp: 100, at: 77, df: 77, sa: 128, sd: 128, sp: 90 },
        abilities: { 0: 'Dancer' },
        types: ['Normal', 'Psychic']
    },
    Genesect: {
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        abilities: { 0: 'Download' },
        types: ['Bug', 'Steel']
    },
    Chespin: {
        bs: { hp: 66, at: 61, df: 105, sa: 5, sd: 45, sp: 38 },
        abilities: { 0: 'Stamina' },
        types: ['Grass']
    },
    Quilladin: {
        bs: { hp: 71, at: 78, df: 132, sa: 10, sd: 58, sp: 57 },
        abilities: { 0: 'Stamina' },
        types: ['Grass']
    },
    Chesnaught: {
        bs: { hp: 108, at: 107, df: 182, sa: 14, sd: 75, sp: 64 },
        abilities: { 0: 'Stamina' },
        types: ['Grass', 'Fighting']
    },
    Fennekin: {
        bs: { hp: 40, at: 9, df: 40, sa: 82, sd: 60, sp: 83 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire']
    },
    Braixen: {
        bs: { hp: 59, at: 9, df: 58, sa: 110, sd: 80, sp: 103 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire']
    },
    Delphox: {
        bs: { hp: 75, at: 9, df: 72, sa: 144, sd: 130, sp: 120 },
        abilities: { 0: 'Adaptability' },
        types: ['Fire', 'Psychic']
    },
    Froakie: {
        bs: { hp: 41, at: 5, df: 40, sa: 72, sd: 54, sp: 91 },
        abilities: { 0: 'Protean' },
        types: ['Water']
    },
    Frogadier: {
        bs: { hp: 54, at: 10, df: 52, sa: 93, sd: 66, sp: 127 },
        abilities: { 0: 'Protean' },
        types: ['Water']
    },
    Greninja: {
        bs: { hp: 72, at: 15, df: 77, sa: 123, sd: 81, sp: 182 },
        abilities: { 0: 'Protean' },
        types: ['Water', 'Dark']
    },
    Bunnelby: {
        bs: { hp: 38, at: 76, df: 87, sa: 12, sd: 36, sp: 18 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Normal']
    },
    Diggersby: {
        bs: { hp: 85, at: 136, df: 147, sa: 20, sd: 77, sp: 38 },
        abilities: { 0: 'Mold Breaker' },
        types: ['Normal', 'Ground']
    },
    Fletchling: {
        bs: { hp: 45, at: 50, df: 43, sa: 40, sd: 38, sp: 62 },
        abilities: { 0: 'Gale Wings' },
        types: ['Normal', 'Flying']
    },
    Fletchinder: {
        bs: { hp: 62, at: 73, df: 55, sa: 56, sd: 52, sp: 84 },
        abilities: { 0: 'Gale Wings' },
        types: ['Fire', 'Flying']
    },
    Talonflame: {
        bs: { hp: 98, at: 131, df: 71, sa: 34, sd: 69, sp: 156 },
        abilities: { 0: 'Gale Wings' },
        types: ['Fire', 'Flying']
    },
    Scatterbug: {
        bs: { hp: 38, at: 5, df: 40, sa: 27, sd: 25, sp: 35 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug']
    },
    Spewpa: {
        bs: { hp: 45, at: 12, df: 90, sa: 27, sd: 30, sp: 29 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug']
    },
    Vivillon: {
        bs: { hp: 80, at: 12, df: 50, sa: 100, sd: 110, sp: 139 },
        abilities: { 0: 'Compound Eyes' },
        types: ['Bug', 'Flying']
    },
    Litleo: {
        bs: { hp: 62, at: 28, df: 78, sa: 93, sd: 54, sp: 92 },
        abilities: { 0: 'Merciless' },
        types: ['Poison']
    },
    Pyroar: {
        bs: { hp: 86, at: 38, df: 122, sa: 129, sd: 66, sp: 126 },
        abilities: { 0: 'Merciless' },
        types: ['Poison']
    },
    Flabébé: {
        bs: { hp: 44, at: 15, df: 39, sa: 71, sd: 89, sp: 42 },
        abilities: { 0: 'Serene Grace' },
        types: ['Fairy']
    },
    Floette: {
        bs: { hp: 54, at: 25, df: 47, sa: 85, sd: 108, sp: 52 },
        abilities: { 0: 'Serene Grace' },
        types: ['Fairy']
    },
    Florges: {
        bs: { hp: 108, at: 35, df: 68, sa: 132, sd: 154, sp: 75 },
        abilities: { 0: 'Serene Grace' },
        types: ['Fairy']
    },
    Skiddo: {
        bs: { hp: 66, at: 65, df: 48, sa: 22, sd: 57, sp: 92 },
        abilities: { 0: 'Speed Boost' },
        types: ['Grass']
    },
    Gogoat: {
        bs: { hp: 123, at: 100, df: 62, sa: 47, sd: 81, sp: 138 },
        abilities: { 0: 'Speed Boost' },
        types: ['Grass']
    },
    Pancham: {
        bs: { hp: 67, at: 102, df: 82, sa: 46, sd: 48, sp: 43 },
        abilities: { 0: 'Prankster' },
        types: ['Fighting']
    },
    Pangoro: {
        bs: { hp: 95, at: 154, df: 118, sa: 69, sd: 71, sp: 58 },
        abilities: { 0: 'Prankster' },
        types: ['Fighting', 'Dark']
    },
    Furfrou: {
        bs: { hp: 115, at: 80, df: 100, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal']
    },
    Espurr: {
        bs: { hp: 62, at: 78, df: 24, sa: 83, sd: 60, sp: 98 },
        abilities: { 0: 'Download' },
        types: ['Psychic']
    },
    Meowstic: {
        bs: { hp: 74, at: 118, df: 36, sa: 123, sd: 81, sp: 144 },
        abilities: { 0: 'Download' },
        types: ['Psychic']
    },
    Honedge: {
        bs: { hp: 45, at: 80, df: 100, sa: 35, sd: 37, sp: 28 },
        abilities: { 0: 'Huge Power' },
        types: ['Steel', 'Ghost']
    },
    Doublade: {
        bs: { hp: 59, at: 110, df: 150, sa: 45, sd: 49, sp: 35 },
        abilities: { 0: 'Huge Power' },
        types: ['Steel', 'Ghost']
    },
    Aegislash: {
        bs: { hp: 60, at: 50, df: 180, sa: 50, sd: 180, sp: 60 },
        abilities: { 0: 'Stance Change' },
        types: ['Steel', 'Ghost']
    },
    Spritzee: {
        bs: { hp: 78, at: 52, df: 60, sa: 63, sd: 65, sp: 23 },
        abilities: { 0: 'Plus' },
        types: ['Fairy']
    },
    Aromatisse: {
        bs: { hp: 141, at: 72, df: 72, sa: 99, sd: 129, sp: 29 },
        abilities: { 0: 'Plus' },
        types: ['Fairy']
    },
    Swirlix: {
        bs: { hp: 62, at: 28, df: 86, sa: 59, sd: 57, sp: 49 },
        abilities: { 0: 'Minus' },
        types: ['Fairy']
    },
    Slurpuff: {
        bs: { hp: 142, at: 30, df: 136, sa: 85, sd: 75, sp: 72 },
        abilities: { 0: 'Minus' },
        types: ['Fairy']
    },
    Inkay: {
        bs: { hp: 63, at: 74, df: 53, sa: 17, sd: 66, sp: 45 },
        abilities: { 0: 'Dark Aura' },
        types: ['Dark', 'Psychic']
    },
    Malamar: {
        bs: { hp: 116, at: 122, df: 88, sa: 28, sd: 115, sp: 73 },
        abilities: { 0: 'Dark Aura' },
        types: ['Dark', 'Psychic']
    },
    Binacle: {
        bs: { hp: 42, at: 102, df: 97, sa: 14, sd: 26, sp: 50 },
        abilities: { 0: 'Triage' },
        types: ['Bug', 'Fighting']
    },
    Barbaracle: {
        bs: { hp: 72, at: 145, df: 165, sa: 24, sd: 46, sp: 88 },
        abilities: { 0: 'Triage' },
        types: ['Bug', 'Fighting']
    },
    Skrelp: {
        bs: { hp: 50, at: 35, df: 60, sa: 90, sd: 60, sp: 30 },
        abilities: { 0: 'Levitate' },
        types: ['Poison', 'Water']
    },
    Dragalge: {
        bs: { hp: 65, at: 45, df: 90, sa: 147, sd: 133, sp: 44 },
        abilities: { 0: 'Levitate' },
        types: ['Poison', 'Dragon']
    },
    Clauncher: {
        bs: { hp: 50, at: 13, df: 62, sa: 128, sd: 63, sp: 44 },
        abilities: { 0: 'Beast Boost' },
        types: ['Water']
    },
    Clawitzer: {
        bs: { hp: 71, at: 13, df: 88, sa: 200, sd: 89, sp: 59 },
        abilities: { 0: 'Beast Boost' },
        types: ['Water']
    },
    Helioptile: {
        bs: { hp: 64, at: 38, df: 33, sa: 71, sd: 43, sp: 90 },
        abilities: { 0: 'Dry Skin' },
        types: ['Electric', 'Normal']
    },
    Heliolisk: {
        bs: { hp: 92, at: 55, df: 52, sa: 119, sd: 94, sp: 129 },
        abilities: { 0: 'Dry Skin' },
        types: ['Electric', 'Normal']
    },
    Tyrunt: {
        bs: { hp: 58, at: 89, df: 77, sa: 45, sd: 45, sp: 48 },
        abilities: { 0: 'Huge Power' },
        types: ['Rock', 'Dragon']
    },
    Tyrantrum: {
        bs: { hp: 82, at: 131, df: 119, sa: 69, sd: 59, sp: 71 },
        abilities: { 0: 'Huge Power' },
        types: ['Rock', 'Dragon']
    },
    Amaura: {
        bs: { hp: 127, at: 9, df: 50, sa: 67, sd: 93, sp: 26 },
        abilities: { 0: 'Snow Cloak' },
        types: ['Rock', 'Ice']
    },
    Aurorus: {
        bs: { hp: 183, at: 17, df: 72, sa: 99, sd: 142, sp: 38 },
        abilities: { 0: 'Snow Cloak' },
        types: ['Rock', 'Ice']
    },
    Eonbrawl: {
        bs: { hp: 80, at: 20, df: 115, sa: 160, sd: 50, sp: 130 },
        abilities: { 0: 'Serene Grace' },
        types: ['Fighting']
    },
    Hawlucha: {
        bs: { hp: 78, at: 122, df: 75, sa: 64, sd: 63, sp: 138 },
        abilities: { 0: 'Unburden' },
        types: ['Fighting', 'Flying']
    },
    Dedenne: {
        bs: { hp: 97, at: 99, df: 57, sa: 10, sd: 137, sp: 137 },
        abilities: { 0: 'Protean' },
        types: ['Bug']
    },
    Carbink: {
        bs: { hp: 50, at: 30, df: 180, sa: 30, sd: 180, sp: 30 },
        abilities: { 0: 'Sturdy' },
        types: ['Rock', 'Fairy']
    },
    Goomy: {
        bs: { hp: 45, at: 15, df: 35, sa: 55, sd: 105, sp: 40 },
        abilities: { 0: 'Water Bubble' },
        types: ['Dragon', 'Water']
    },
    Sliggoo: {
        bs: { hp: 68, at: 35, df: 53, sa: 83, sd: 145, sp: 60 },
        abilities: { 0: 'Water Bubble' },
        types: ['Dragon', 'Water']
    },
    Goodra: {
        bs: { hp: 110, at: 50, df: 70, sa: 110, sd: 180, sp: 80 },
        abilities: { 0: 'Water Bubble' },
        types: ['Dragon', 'Water']
    },
    Klefki: {
        bs: { hp: 57, at: 80, df: 121, sa: 80, sd: 87, sp: 115 },
        abilities: { 0: 'Prankster' },
        types: ['Steel', 'Fairy']
    },
    Phantump: {
        bs: { hp: 43, at: 70, df: 48, sa: 50, sd: 60, sp: 38 },
        abilities: { 0: 'Cheek Pouch' },
        types: ['Ghost', 'Grass']
    },
    Trevenant: {
        bs: { hp: 85, at: 140, df: 126, sa: 35, sd: 82, sp: 56 },
        abilities: { 0: 'Cheek Pouch' },
        types: ['Ghost', 'Grass']
    },
    Pumpkaboo: {
        bs: { hp: 59, at: 66, df: 90, sa: 24, sd: 75, sp: 51 },
        abilities: { 0: 'Drizzle' },
        types: ['Ghost', 'Grass']
    },
    Gourgeist: {
        bs: { hp: 85, at: 100, df: 142, sa: 18, sd: 125, sp: 84 },
        abilities: { 0: 'Drizzle' },
        types: ['Ghost', 'Grass']
    },
    Bergmite: {
        bs: { hp: 85, at: 69, df: 135, sa: 2, sd: 35, sp: 8 },
        abilities: { 0: 'Filter' },
        types: ['Ice']
    },
    Avalugg: {
        bs: { hp: 146, at: 117, df: 248, sa: 4, sd: 46, sp: 8 },
        abilities: { 0: 'Filter' },
        types: ['Ice']
    },
    Noibat: {
        bs: { hp: 40, at: 10, df: 35, sa: 65, sd: 40, sp: 127 },
        abilities: { 0: 'Surge Surfer' },
        types: ['Electric', 'Water']
    },
    Noivern: {
        bs: { hp: 85, at: 30, df: 80, sa: 117, sd: 80, sp: 177 },
        abilities: { 0: 'Surge Surfer' },
        types: ['Electric', 'Water']
    },
    Xerneas: {
        bs: { hp: 126, at: 61, df: 95, sa: 131, sd: 128, sp: 139 },
        abilities: { 0: 'Fairy Aura' },
        types: ['Fairy']
    },
    Yveltal: {
        bs: { hp: 126, at: 61, df: 128, sa: 131, sd: 98, sp: 139 },
        abilities: { 0: 'Dark Aura' },
        types: ['Dark', 'Flying']
    },
    Zygarde: {
        bs: { hp: 108, at: 100, df: 121, sa: 81, sd: 95, sp: 95 },
        abilities: { 0: 'Aura Break' },
        types: ['Dragon', 'Ground']
    },
    Diancie: {
        bs: { hp: 80, at: 100, df: 180, sa: 30, sd: 180, sp: 30 },
        abilities: { 0: 'Magic Guard' },
        types: ['Rock', 'Fairy']
    },
    Hoopa: {
        bs: { hp: 80, at: 110, df: 60, sa: 150, sd: 130, sp: 70 },
        abilities: { 0: 'Prankster' },
        types: ['Psychic', 'Ghost']
    },
    Volcanion: {
        bs: { hp: 80, at: 60, df: 120, sa: 140, sd: 90, sp: 110 },
        abilities: { 0: 'Desolate Land' },
        types: ['Fire', 'Water']
    },
    Rowlet: {
        bs: { hp: 78, at: 55, df: 55, sa: 10, sd: 70, sp: 42 },
        abilities: { 0: 'Long Reach' },
        types: ['Grass', 'Flying']
    },
    Dartrix: {
        bs: { hp: 88, at: 75, df: 75, sa: 20, sd: 90, sp: 52 },
        abilities: { 0: 'Long Reach' },
        types: ['Grass', 'Flying']
    },
    Decidueye: {
        bs: { hp: 108, at: 127, df: 75, sa: 40, sd: 130, sp: 70 },
        abilities: { 0: 'Long Reach' },
        types: ['Grass', 'Ghost']
    },
    Litten: {
        bs: { hp: 45, at: 85, df: 40, sa: 20, sd: 40, sp: 70 },
        abilities: { 0: 'Intimidate' },
        types: ['Fire']
    },
    Torracat: {
        bs: { hp: 65, at: 105, df: 50, sa: 30, sd: 50, sp: 90 },
        abilities: { 0: 'Intimidate' },
        types: ['Fire']
    },
    Incineroar: {
        bs: { hp: 125, at: 135, df: 90, sa: 50, sd: 90, sp: 60 },
        abilities: { 0: 'Intimidate' },
        types: ['Fire', 'Dark']
    },
    Popplio: {
        bs: { hp: 50, at: 4, df: 54, sa: 86, sd: 86, sp: 20 },
        abilities: { 0: 'Liquid Voice' },
        types: ['Water']
    },
    Brionne: {
        bs: { hp: 80, at: 14, df: 69, sa: 101, sd: 101, sp: 30 },
        abilities: { 0: 'Liquid Voice' },
        types: ['Water']
    },
    Primarina: {
        bs: { hp: 110, at: 24, df: 74, sa: 136, sd: 166, sp: 40 },
        abilities: { 0: 'Liquid Voice' },
        types: ['Water', 'Fairy']
    },
    Pikipek: {
        bs: { hp: 35, at: 75, df: 15, sa: 10, sd: 30, sp: 85 },
        abilities: { 0: 'Motor Drive' },
        types: ['Ghost']
    },
    Trumbeak: {
        bs: { hp: 55, at: 105, df: 25, sa: 15, sd: 70, sp: 125 },
        abilities: { 0: 'Motor Drive' },
        types: ['Ghost', 'Fire']
    },
    Toucannon: {
        bs: { hp: 80, at: 180, df: 35, sa: 35, sd: 135, sp: 30 },
        abilities: { 0: 'Motor Drive' },
        types: ['Ghost', 'Fire']
    },
    Yungoos: {
        bs: { hp: 68, at: 90, df: 60, sa: 30, sd: 40, sp: 45 },
        abilities: { 0: 'Intimidate' },
        types: ['Grass']
    },
    Gumshoos: {
        bs: { hp: 108, at: 120, df: 100, sa: 55, sd: 80, sp: 45 },
        abilities: { 0: 'Intimidate' },
        types: ['Grass']
    },
    Grubbin: {
        bs: { hp: 57, at: 62, df: 45, sa: 55, sd: 45, sp: 46 },
        abilities: { 0: 'Download' },
        types: ['Bug']
    },
    Charjabug: {
        bs: { hp: 77, at: 102, df: 95, sa: 55, sd: 75, sp: 36 },
        abilities: { 0: 'Download' },
        types: ['Bug', 'Electric']
    },
    Vikavolt: {
        bs: { hp: 107, at: 30, df: 120, sa: 165, sd: 75, sp: 43 },
        abilities: { 0: 'Download' },
        types: ['Bug', 'Electric']
    },
    Crabrawler: {
        bs: { hp: 57, at: 102, df: 97, sa: 42, sd: 77, sp: 33 },
        abilities: { 0: 'Technician' },
        types: ['Ghost', 'Fighting']
    },
    Crabominable: {
        bs: { hp: 97, at: 152, df: 107, sa: 62, sd: 67, sp: 43 },
        abilities: { 0: 'Technician' },
        types: ['Fighting', 'Ghost']
    },
    Oricorio: {
        bs: { hp: 95, at: 40, df: 70, sa: 118, sd: 70, sp: 133 },
        abilities: { 0: 'Dancer' },
        types: ['Fire', 'Flying']
    },
    Cutiefly: {
        bs: { hp: 40, at: 15, df: 40, sa: 85, sd: 70, sp: 94 },
        abilities: { 0: 'Serene Grace' },
        types: ['Dark']
    },
    Ribombee: {
        bs: { hp: 60, at: 25, df: 60, sa: 135, sd: 110, sp: 144 },
        abilities: { 0: 'Serene Grace' },
        types: ['Dark', 'Ghost']
    },
    Rockruff: {
        bs: { hp: 45, at: 85, df: 60, sa: 30, sd: 40, sp: 80 },
        abilities: { 0: 'Tough Claws' },
        types: ['Rock']
    },
    Lycanroc: {
        bs: { hp: 75, at: 135, df: 95, sa: 35, sd: 65, sp: 132 },
        abilities: { 0: 'Tough Claws' },
        types: ['Rock']
    },
    Wishiwashi: {
        bs: { hp: 45, at: 20, df: 20, sa: 25, sd: 25, sp: 40 },
        abilities: { 0: 'Klutz' },
        types: ['Water']
    },
    Mareanie: {
        bs: { hp: 50, at: 53, df: 62, sa: 43, sd: 52, sp: 45 },
        abilities: { 0: 'Regenerator' },
        types: ['Poison', 'Water']
    },
    Toxapex: {
        bs: { hp: 70, at: 43, df: 152, sa: 53, sd: 142, sp: 35 },
        abilities: { 0: 'Regenerator' },
        types: ['Poison', 'Water']
    },
    Mudbray: {
        bs: { hp: 70, at: 100, df: 70, sa: 45, sd: 55, sp: 45 },
        abilities: { 0: 'Gluttony' },
        types: ['Fighting']
    },
    Mudsdale: {
        bs: { hp: 100, at: 135, df: 125, sa: 55, sd: 85, sp: 35 },
        abilities: { 0: 'Heavy Metal' },
        types: ['Fighting', 'Steel']
    },
    Dewpider: {
        bs: { hp: 68, at: 70, df: 52, sa: 40, sd: 72, sp: 27 },
        abilities: { 0: 'Water Bubble' },
        types: ['Poison', 'Dark']
    },
    Araquanid: {
        bs: { hp: 98, at: 110, df: 92, sa: 50, sd: 132, sp: 42 },
        abilities: { 0: 'Water Bubble' },
        types: ['Poison', 'Dark']
    },
    Fomantis: {
        bs: { hp: 60, at: 75, df: 55, sa: 30, sd: 35, sp: 35 },
        abilities: { 0: 'Contrary' },
        types: ['Ice']
    },
    Lurantis: {
        bs: { hp: 90, at: 135, df: 110, sa: 50, sd: 90, sp: 45 },
        abilities: { 0: 'Contrary' },
        types: ['Ice', 'Fairy']
    },
    Morelull: {
        bs: { hp: 40, at: 35, df: 75, sa: 65, sd: 95, sp: 15 },
        abilities: { 0: 'Dazzling' },
        types: ['Grass', 'Fairy']
    },
    Shiinotic: {
        bs: { hp: 90, at: 45, df: 100, sa: 90, sd: 160, sp: 30 },
        abilities: { 0: 'Dazzling' },
        types: ['Grass', 'Fairy']
    },
    Salandit: {
        bs: { hp: 48, at: 44, df: 40, sa: 71, sd: 40, sp: 77 },
        abilities: { 0: 'Intimidate' },
        types: ['Poison', 'Fire']
    },
    Salazzle: {
        bs: { hp: 68, at: 54, df: 60, sa: 131, sd: 60, sp: 147 },
        abilities: { 0: 'Intimidate' },
        types: ['Poison', 'Fire']
    },
    Stufful: {
        bs: { hp: 70, at: 75, df: 50, sa: 45, sd: 50, sp: 50 },
        abilities: { 0: 'Huge Power' },
        types: ['Normal', 'Fighting']
    },
    Bewear: {
        bs: { hp: 120, at: 125, df: 100, sa: 55, sd: 60, sp: 60 },
        abilities: { 0: 'Huge Power' },
        types: ['Normal', 'Fighting']
    },
    Bounsweet: {
        bs: { hp: 42, at: 30, df: 38, sa: 30, sd: 38, sp: 32 },
        abilities: { 0: 'Queenly Majesty' },
        types: ['Grass']
    },
    Steenee: {
        bs: { hp: 52, at: 40, df: 48, sa: 40, sd: 48, sp: 62 },
        abilities: { 0: 'Queenly Majesty' },
        types: ['Grass']
    },
    Tsareena: {
        bs: { hp: 92, at: 130, df: 118, sa: 50, sd: 98, sp: 72 },
        abilities: { 0: 'Queenly Majesty' },
        types: ['Grass']
    },
    Comfey: {
        bs: { hp: 51, at: 22, df: 90, sa: 82, sd: 140, sp: 130 },
        abilities: { 0: 'Triage' },
        types: ['Fairy']
    },
    Oranguru: {
        bs: { hp: 90, at: 20, df: 80, sa: 120, sd: 140, sp: 60 },
        abilities: { 0: 'Telepathy' },
        types: ['Normal', 'Psychic']
    },
    Passimian: {
        bs: { hp: 120, at: 140, df: 90, sa: 20, sd: 60, sp: 80 },
        abilities: { 0: 'Defiant' },
        types: ['Fighting']
    },
    Wimpod: {
        bs: { hp: 25, at: 35, df: 40, sa: 20, sd: 30, sp: 80 },
        abilities: { 0: 'Regenerator' },
        types: ['Bug', 'Steel']
    },
    Golisopod: {
        bs: { hp: 95, at: 125, df: 160, sa: 30, sd: 120, sp: 40 },
        abilities: { 0: 'Regenerator' },
        types: ['Bug', 'Steel']
    },
    Sandygast: {
        bs: { hp: 75, at: 15, df: 120, sa: 70, sd: 45, sp: 15 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water', 'Grass']
    },
    Palossand: {
        bs: { hp: 115, at: 25, df: 180, sa: 90, sd: 75, sp: 35 },
        abilities: { 0: 'Lightning Rod' },
        types: ['Water', 'Grass']
    },
    Pyukumuku: {
        bs: { hp: 145, at: 60, df: 60, sa: 30, sd: 60, sp: 5 },
        abilities: { 0: 'Innards Out' },
        types: ['Water']
    },
    Bruxish: {
        bs: { hp: 98, at: 85, df: 100, sa: 20, sd: 140, sp: 92 },
        abilities: { 0: 'Dazzling' },
        types: ['Water', 'Psychic']
    },
    Drampa: {
        bs: { hp: 118, at: 85, df: 85, sa: 155, sd: 121, sp: 36 },
        abilities: { 0: 'Swift Swim' },
        types: ['Normal', 'Dragon']
    },
    Dhelmise: {
        bs: { hp: 70, at: 131, df: 140, sa: 56, sd: 90, sp: 40 },
        abilities: { 0: 'Steelworker' },
        types: ['Ghost', 'Grass']
    },
    Jangmoo: {
        bs: { hp: 45, at: 55, df: 65, sa: 45, sd: 45, sp: 45 },
        abilities: { 0: 'Adaptability' },
        types: ['Water']
    },
    Hakamoo: {
        bs: { hp: 55, at: 75, df: 90, sa: 65, sd: 70, sp: 65 },
        abilities: { 0: 'Adaptability' },
        types: ['Psychic', 'Fighting']
    },
    Kommoo: {
        bs: { hp: 75, at: 140, df: 155, sa: 40, sd: 105, sp: 85 },
        abilities: { 0: 'Adaptability' },
        types: ['Dragon', 'Psychic']
    },
    TapuKoko: {
        bs: { hp: 70, at: 145, df: 85, sa: 45, sd: 105, sp: 150 },
        abilities: { 0: 'Electric Surge' },
        types: ['Electric', 'Fairy']
    },
    TapuLele: {
        bs: { hp: 70, at: 45, df: 85, sa: 140, sd: 155, sp: 105 },
        abilities: { 0: 'Psychic Surge' },
        types: ['Psychic', 'Fairy']
    },
    TapuBulu: {
        bs: { hp: 70, at: 160, df: 155, sa: 45, sd: 95, sp: 75 },
        abilities: { 0: 'Grassy Surge' },
        types: ['Grass', 'Fairy']
    },
    TapuFini: {
        bs: { hp: 70, at: 45, df: 105, sa: 125, sd: 170, sp: 85 },
        abilities: { 0: 'Misty Surge' },
        types: ['Water', 'Fairy']
    },
    Cosmog: {
        bs: { hp: 43, at: 29, df: 31, sa: 29, sd: 31, sp: 37 },
        abilities: { 0: 'Unaware' },
        types: ['Psychic']
    },
    Cosmoem: {
        bs: { hp: 43, at: 29, df: 131, sa: 29, sd: 131, sp: 37 },
        abilities: { 0: 'Sturdy' },
        types: ['Psychic']
    },
    Solgaleo: {
        bs: { hp: 137, at: 137, df: 127, sa: 83, sd: 89, sp: 107 },
        abilities: { 0: 'Full Metal Body' },
        types: ['Psychic', 'Steel']
    },
    Lunala: {
        bs: { hp: 137, at: 83, df: 89, sa: 137, sd: 127, sp: 107 },
        abilities: { 0: 'Shadow Shield' },
        types: ['Psychic', 'Ghost']
    },
    Nihilego: {
        bs: { hp: 131, at: 53, df: 47, sa: 127, sd: 109, sp: 103 },
        abilities: { 0: 'Levitate' },
        types: ['Poison', 'Dark']
    },
    Buzzwole: {
        bs: { hp: 107, at: 139, df: 79, sa: 53, sd: 53, sp: 139 },
        abilities: { 0: 'Tinted Lens' },
        types: ['Bug', 'Dark']
    },
    Pheromosa: {
        bs: { hp: 71, at: 157, df: 37, sa: 117, sd: 37, sp: 151 },
        abilities: { 0: 'Beast Boost' },
        types: ['Bug', 'Fighting']
    },
    Xurkitree: {
        bs: { hp: 83, at: 69, df: 81, sa: 173, sd: 81, sp: 83 },
        abilities: { 0: 'Speed Boost' },
        types: ['Electric']
    },
    Celesteela: {
        bs: { hp: 97, at: 11, df: 123, sa: 107, sd: 171, sp: 61 },
        abilities: { 0: 'Heavy Metal' },
        types: ['Steel', 'Flying']
    },
    Kartana: {
        bs: { hp: 59, at: 181, df: 131, sa: 39, sd: 21, sp: 139 },
        abilities: { 0: 'Tough Claws' },
        types: ['Grass', 'Steel']
    },
    Guzzlord: {
        bs: { hp: 223, at: 31, df: 53, sa: 137, sd: 83, sp: 43 },
        abilities: { 0: 'Innards Out' },
        types: ['Dark', 'Dragon']
    },
    Necrozma: {
        bs: { hp: 97, at: 57, df: 101, sa: 147, sd: 89, sp: 79 },
        abilities: { 0: 'Beast Boost' },
        types: ['Dark']
    },
    Magearna: {
        bs: { hp: 100, at: 55, df: 115, sa: 140, sd: 125, sp: 65 },
        abilities: { 0: 'Download' },
        types: ['Steel', 'Fairy']
    },
    Marshadow: {
        bs: { hp: 90, at: 125, df: 80, sa: 50, sd: 130, sp: 125 },
        abilities: { 0: 'Technician' },
        types: ['Fighting', 'Ghost']
    },
    Poipole: {
        bs: { hp: 67, at: 73, df: 67, sa: 73, sd: 67, sp: 73 },
        abilities: { 0: 'Fairy Aura' },
        types: ['Poison', 'Fairy']
    },
    Naganadel: {
        bs: { hp: 73, at: 73, df: 73, sa: 157, sd: 73, sp: 151 },
        abilities: { 0: 'Fairy Aura' },
        types: ['Poison', 'Fairy']
    },
    Stakataka: {
        bs: { hp: 61, at: 131, df: 248, sa: 33, sd: 84, sp: 13 },
        abilities: { 0: 'Heavy Metal' },
        types: ['Rock', 'Steel']
    },
    Blacephalon: {
        bs: { hp: 103, at: 67, df: 53, sa: 151, sd: 79, sp: 117 },
        abilities: { 0: 'Reckless' },
        types: ['Fire', 'Ghost']
    },
    Zeraora: {
        bs: { hp: 88, at: 112, df: 75, sa: 102, sd: 80, sp: 143 },
        abilities: { 0: 'Moxie' },
        types: ['Electric']
    },
    Deoxys1: {
        bs: { hp: 50, at: 180, df: 20, sa: 180, sd: 20, sp: 150 },
        abilities: { 0: 'Huge Power' },
        types: ['Psychic']
    },
    Deoxys2: {
        bs: { hp: 50, at: 50, df: 180, sa: 50, sd: 180, sp: 90 },
        abilities: { 0: 'Fur Coat' },
        types: ['Psychic']
    },
    Deoxys3: {
        bs: { hp: 50, at: 95, df: 70, sa: 95, sd: 70, sp: 220 },
        abilities: { 0: 'Speed Boost' },
        types: ['Psychic']
    },
    Wormadam1: {
        bs: { hp: 80, at: 29, df: 105, sa: 99, sd: 135, sp: 36 },
        abilities: { 0: 'Sand Veil' },
        types: ['Bug', 'Ground']
    },
    Wormadam2: {
        bs: { hp: 80, at: 29, df: 105, sa: 99, sd: 135, sp: 36 },
        abilities: { 0: 'Flash Fire' },
        types: ['Bug', 'Steel']
    },
    Shaymin1: {
        bs: { hp: 100, at: 103, df: 75, sa: 120, sd: 75, sp: 127 },
        abilities: { 0: 'Serene Grace' },
        types: ['Grass', 'Flying']
    },
    Giratina1: {
        bs: { hp: 150, at: 36, df: 100, sa: 160, sd: 110, sp: 110 },
        abilities: { 0: 'Levitate' },
        types: ['Ghost', 'Dragon']
    },
    Rotom1: {
        bs: { hp: 50, at: 30, df: 77, sa: 135, sd: 117, sp: 131 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Fire']
    },
    Rotom2: {
        bs: { hp: 50, at: 30, df: 77, sa: 135, sd: 117, sp: 131 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Water']
    },
    Rotom3: {
        bs: { hp: 50, at: 30, df: 77, sa: 135, sd: 117, sp: 131 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Ice']
    },
    Rotom4: {
        bs: { hp: 50, at: 30, df: 77, sa: 135, sd: 117, sp: 131 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Flying']
    },
    Rotom5: {
        bs: { hp: 50, at: 30, df: 77, sa: 135, sd: 117, sp: 131 },
        abilities: { 0: 'Levitate' },
        types: ['Electric', 'Grass']
    },
    Castform1: {
        bs: { hp: 80, at: 40, df: 80, sa: 150, sd: 100, sp: 130 },
        abilities: { 0: 'Drought' },
        types: ['Fire']
    },
    Castform2: {
        bs: { hp: 110, at: 30, df: 60, sa: 140, sd: 150, sp: 70 },
        abilities: { 0: 'Sand Rush' },
        types: ['Ground']
    },
    Castform3: {
        bs: { hp: 80, at: 40, df: 80, sa: 130, sd: 150, sp: 100 },
        abilities: { 0: 'Snow Warning' },
        types: ['Ice']
    },
    Cherrim1: {
        bs: { hp: 70, at: 20, df: 70, sa: 167, sd: 118, sp: 165 },
        abilities: { 0: 'Solar Power' },
        types: ['Grass', 'Fire']
    },
    Shellos1: {
        bs: { hp: 96, at: 23, df: 48, sa: 57, sd: 72, sp: 34 },
        abilities: { 0: 'Sap Sipper' },
        types: ['Water']
    },
    Gastrodon1: {
        bs: { hp: 151, at: 43, df: 78, sa: 92, sd: 112, sp: 39 },
        abilities: { 0: 'Sap Sipper' },
        types: ['Water', 'Ground']
    },
    Basculin1: {
        bs: { hp: 120, at: 112, df: 45, sa: 80, sd: 55, sp: 128 },
        abilities: { 0: 'Reckless' },
        types: ['Water']
    },
    Darmanitan1: {
        bs: { hp: 105, at: 30, df: 65, sa: 165, sd: 85, sp: 160 },
        abilities: { 0: 'Parental Bond' },
        types: ['Electric', 'Psychic']
    },
    Meloetta1: {
        bs: { hp: 100, at: 128, df: 90, sa: 77, sd: 77, sp: 128 },
        abilities: { 0: 'Serene Grace' },
        types: ['Normal', 'Fighting']
    },
    Kyurem1: {
        bs: { hp: 125, at: 70, df: 90, sa: 170, sd: 110, sp: 135 },
        abilities: { 0: 'Turboblaze' },
        types: ['Dragon', 'Ice']
    },
    Kyurem2: {
        bs: { hp: 125, at: 170, df: 145, sa: 70, sd: 90, sp: 105 },
        abilities: { 0: 'Teravolt' },
        types: ['Dragon', 'Ice']
    },
    Keldeo1: {
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        abilities: { 0: 'Justified' },
        types: ['Water', 'Fighting']
    },
    Tornadus1: {
        bs: { hp: 79, at: 100, df: 80, sa: 110, sd: 90, sp: 121 },
        abilities: { 0: 'Gale Wings' },
        types: ['Flying']
    },
    Thundurus1: {
        bs: { hp: 79, at: 105, df: 70, sa: 145, sd: 80, sp: 101 },
        abilities: { 0: 'Galvanize' },
        types: ['Electric', 'Flying']
    },
    Landorus1: {
        bs: { hp: 89, at: 145, df: 90, sa: 105, sd: 80, sp: 91 },
        abilities: { 0: 'Intimidate' },
        types: ['Ground', 'Flying']
    },
    Gengar1: {
        bs: { hp: 60, at: 65, df: 60, sa: 170, sd: 105, sp: 170 },
        abilities: { 0: 'Shadow Tag' },
        types: ['Ghost', 'Poison']
    },
    Meowstic1: {
        bs: { hp: 74, at: 118, df: 36, sa: 123, sd: 81, sp: 144 },
        abilities: { 0: 'Download' },
        types: ['Psychic']
    },
    Furfrou1: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Fairy']
    },
    Furfrou2: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Flying']
    },
    Furfrou3: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Fire']
    },
    Furfrou4: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Electric']
    },
    Furfrou5: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Psychic']
    },
    Furfrou6: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Grass']
    },
    Furfrou7: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Ice']
    },
    Furfrou8: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Ground']
    },
    Furfrou9: {
        bs: { hp: 115, at: 100, df: 120, sa: 65, sd: 90, sp: 102 },
        abilities: { 0: 'Fur Coat' },
        types: ['Normal', 'Water']
    },
    Gardevoir1: {
        bs: { hp: 68, at: 35, df: 85, sa: 165, sd: 140, sp: 135 },
        abilities: { 0: 'Pixilate' },
        types: ['Psychic', 'Fairy']
    },
    Ampharos1: {
        bs: { hp: 90, at: 50, df: 85, sa: 220, sd: 130, sp: 105 },
        abilities: { 0: 'Surge Surfer' },
        types: ['Electric', 'Dragon']
    },
    Venusaur1: {
        bs: { hp: 80, at: 32, df: 135, sa: 120, sd: 178, sp: 100 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Fire', 'Fairy']
    },
    Charizard1: {
        bs: { hp: 93, at: 14, df: 148, sa: 160, sd: 125, sp: 110 },
        abilities: { 0: 'Adaptability' },
        types: ['Grass', 'Fire']
    },
    Charizard2: {
        bs: { hp: 93, at: 44, df: 78, sa: 170, sd: 85, sp: 180 },
        abilities: { 0: 'Multiscale' },
        types: ['Grass', 'Dragon']
    },
    Mewtwo1: {
        bs: { hp: 86, at: 224, df: 110, sa: 50, sd: 110, sp: 190 },
        abilities: { 0: 'Pixilate' },
        types: ['Fairy', 'Ground']
    },
    Mewtwo2: {
        bs: { hp: 86, at: 50, df: 80, sa: 184, sd: 160, sp: 210 },
        abilities: { 0: 'Pixilate' },
        types: ['Fairy', 'Fighting']
    },
    Blaziken1: {
        bs: { hp: 100, at: 160, df: 90, sa: 35, sd: 85, sp: 180 },
        abilities: { 0: 'Speed Boost' },
        types: ['Fire', 'Fighting']
    },
    Medicham1: {
        bs: { hp: 90, at: 170, df: 105, sa: 20, sd: 75, sp: 145 },
        abilities: { 0: 'Pure Power' },
        types: ['Fighting', 'Psychic']
    },
    Houndoom1: {
        bs: { hp: 85, at: 60, df: 60, sa: 200, sd: 90, sp: 145 },
        abilities: { 0: 'Chlorophyll' },
        types: ['Dark', 'Fire']
    },
    Aggron1: {
        bs: { hp: 100, at: 157, df: 248, sa: 20, sd: 105, sp: 20 },
        abilities: { 0: 'Fur Coat' },
        types: ['Steel']
    },
    Banette1: {
        bs: { hp: 64, at: 175, df: 95, sa: 83, sd: 83, sp: 35 },
        abilities: { 0: 'Huge Power' },
        types: ['Ghost']
    },
    Tyranitar1: {
        bs: { hp: 100, at: 204, df: 140, sa: 45, sd: 130, sp: 81 },
        abilities: { 0: 'Sand Rush' },
        types: ['Rock', 'Dark']
    },
    Scizor1: {
        bs: { hp: 70, at: 160, df: 120, sa: 55, sd: 100, sp: 155 },
        abilities: { 0: 'Technician' },
        types: ['Bug', 'Steel']
    },
    Pinsir1: {
        bs: { hp: 65, at: 155, df: 100, sa: 55, sd: 70, sp: 155 },
        abilities: { 0: 'Huge Power' },
        types: ['Bug', 'Flying']
    },

};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
var SS_PATCH = {
    'Aegislash-Blade': { bs: { at: 140, sa: 140 } },
    'Aegislash-Both': { bs: { at: 140, df: 140, sa: 140, sd: 140 } },
    'Aegislash-Shield': { bs: { df: 140, sd: 140 } },
    Articuno: { otherFormes: ['Articuno-Galar'] },
    Blastoise: { otherFormes: ['Blastoise-Gmax', 'Blastoise-Mega'] },
    Butterfree: { otherFormes: ['Butterfree-Gmax'] },
    Charizard: { otherFormes: ['Charizard-Gmax', 'Charizard-Mega-X', 'Charizard-Mega-Y'] },
    Corsola: { otherFormes: ['Corsola-Galar'] },
    Darmanitan: {
        otherFormes: ['Darmanitan-Galar', 'Darmanitan-Galar-Zen', 'Darmanitan-Zen']
    },
    Darumaka: { otherFormes: ['Darumaka-Galar'] },
    Eevee: { otherFormes: ['Eevee-Gmax'] },
    Equilibra: { bs: { sa: 133 } },
    'Farfetch\u2019d': { otherFormes: ['Farfetch\u2019d-Galar'] },
    Garbodor: { otherFormes: ['Garbodor-Gmax'] },
    Gengar: { otherFormes: ['Gengar-Gmax', 'Gengar-Mega'] },
    Kingler: { otherFormes: ['Kingler-Gmax'] },
    Lapras: { otherFormes: ['Lapras-Gmax'] },
    Linoone: { otherFormes: ['Linoone-Galar'] },
    Machamp: { otherFormes: ['Machamp-Gmax'] },
    Melmetal: { otherFormes: ['Melmetal-Gmax'] },
    Meowth: { otherFormes: ['Meowth-Alola', 'Meowth-Galar', 'Meowth-Gmax'] },
    Moltres: { otherFormes: ['Moltres-Galar'] },
    'Mr. Mime': { otherFormes: ['Mr. Mime-Galar'] },
    Pikachu: {
        otherFormes: [
            'Pikachu-Alola',
            'Pikachu-Gmax',
            'Pikachu-Hoenn',
            'Pikachu-Kalos',
            'Pikachu-Original',
            'Pikachu-Partner',
            'Pikachu-Sinnoh',
            'Pikachu-Unova',
            'Pikachu-World',
        ]
    },
    Ponyta: { otherFormes: ['Ponyta-Galar'] },
    Pyroak: { bs: { sa: 70, sd: 65 } },
    Rapidash: { otherFormes: ['Rapidash-Galar'] },
    Slowbro: { otherFormes: ['Slowbro-Galar', 'Slowbro-Mega'] },
    Slowking: { otherFormes: ['Slowking-Galar'] },
    Slowpoke: { otherFormes: ['Slowpoke-Galar'] },
    Snorlax: { otherFormes: ['Snorlax-Gmax'] },
    Stunfisk: { otherFormes: ['Stunfisk-Galar'] },
    Venusaur: { otherFormes: ['Venusaur-Gmax', 'Venusaur-Mega'] },
    Voodoom: { bs: { sa: 130 } },
    Weezing: { otherFormes: ['Weezing-Galar'] },
    Yamask: { otherFormes: ['Yamask-Galar'] },
    Zapdos: { otherFormes: ['Zapdos-Galar'] },
    Zigzagoon: { otherFormes: ['Zigzagoon-Galar'] },
    Alcremie: {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0.5,
        abilities: { 0: 'Sweet Veil' },
        otherFormes: ['Alcremie-Gmax']
    },
    'Alcremie-Gmax': {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0,
        abilities: { 0: 'Sweet Veil' },
        baseSpecies: 'Alcremie'
    },
    Appletun: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 13,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Appletun-Gmax']
    },
    'Appletun-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Appletun'
    },
    Applin: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 40, at: 40, df: 80, sa: 40, sd: 40, sp: 20 },
        weightkg: 0.5,
        abilities: { 0: 'Ripen' },
        nfe: true
    },
    Arctovish: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 90, df: 100, sa: 80, sd: 90, sp: 55 },
        weightkg: 175,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Arctozolt: {
        types: ['Electric', 'Ice'],
        bs: { hp: 90, at: 100, df: 90, sa: 90, sd: 80, sp: 55 },
        weightkg: 150,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Arrokuda: {
        types: ['Water'],
        bs: { hp: 41, at: 63, df: 40, sa: 40, sd: 30, sp: 66 },
        weightkg: 1,
        abilities: { 0: 'Swift Swim' },
        nfe: true
    },
    'Articuno-Galar': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 90, at: 85, df: 85, sa: 125, sd: 100, sp: 95 },
        weightkg: 50.9,
        abilities: { 0: 'Competitive' },
        gender: 'N',
        baseSpecies: 'Articuno'
    },
    Astrolotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 108, at: 108, df: 74, sa: 92, sd: 64, sp: 114 },
        weightkg: 50,
        abilities: { 0: 'Regenerator' }
    },
    Barraskewda: {
        types: ['Water'],
        bs: { hp: 61, at: 123, df: 60, sa: 60, sd: 50, sp: 136 },
        weightkg: 30,
        abilities: { 0: 'Swift Swim' }
    },
    'Blastoise-Gmax': {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sa: 85, sd: 105, sp: 78 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Blastoise'
    },
    Blipbug: {
        types: ['Bug'],
        bs: { hp: 25, at: 20, df: 20, sa: 25, sd: 45, sp: 45 },
        weightkg: 8,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Boltund: {
        types: ['Electric'],
        bs: { hp: 69, at: 90, df: 60, sa: 90, sd: 60, sp: 121 },
        weightkg: 34,
        abilities: { 0: 'Strong Jaw' }
    },
    'Butterfree-Gmax': {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sa: 90, sd: 80, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Compound Eyes' },
        baseSpecies: 'Butterfree'
    },
    Calyrex: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 7.7,
        abilities: { 0: 'Unnerve' },
        gender: 'N',
        otherFormes: ['Calyrex-Ice', 'Calyrex-Shadow']
    },
    'Calyrex-Ice': {
        types: ['Psychic', 'Ice'],
        bs: { hp: 100, at: 165, df: 150, sa: 85, sd: 130, sp: 50 },
        weightkg: 809.1,
        abilities: { 0: 'As One (Glastrier)' },
        gender: 'N',
        baseSpecies: 'Calyrex'
    },
    'Calyrex-Shadow': {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 100, at: 85, df: 80, sa: 165, sd: 100, sp: 150 },
        weightkg: 53.6,
        abilities: { 0: 'As One (Spectrier)' },
        gender: 'N',
        baseSpecies: 'Calyrex'
    },
    Carkol: {
        types: ['Rock', 'Fire'],
        bs: { hp: 80, at: 60, df: 90, sa: 60, sd: 70, sp: 50 },
        weightkg: 78,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Centiskorch: {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Flash Fire' },
        otherFormes: ['Centiskorch-Gmax']
    },
    'Centiskorch-Gmax': {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 0,
        abilities: { 0: 'Flash Fire' },
        baseSpecies: 'Centiskorch'
    },
    'Charizard-Gmax': {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Charizard'
    },
    Chewtle: {
        types: ['Water'],
        bs: { hp: 50, at: 64, df: 50, sa: 38, sd: 38, sp: 44 },
        weightkg: 8.5,
        abilities: { 0: 'Strong Jaw' },
        nfe: true
    },
    Chromera: {
        types: ['Dark', 'Normal'],
        bs: { hp: 85, at: 85, df: 115, sa: 115, sd: 100, sp: 100 },
        weightkg: 215,
        abilities: { 0: 'Color Change' },
        gender: 'N'
    },
    Cinderace: {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 33,
        abilities: { 0: 'Blaze' },
        otherFormes: ['Cinderace-Gmax']
    },
    'Cinderace-Gmax': {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Cinderace'
    },
    Clobbopus: {
        types: ['Fighting'],
        bs: { hp: 50, at: 68, df: 60, sa: 50, sd: 50, sp: 32 },
        weightkg: 4,
        abilities: { 0: 'Limber' },
        nfe: true
    },
    Coalossal: {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 310.5,
        abilities: { 0: 'Steam Engine' },
        otherFormes: ['Coalossal-Gmax']
    },
    'Coalossal-Gmax': {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Steam Engine' },
        baseSpecies: 'Coalossal'
    },
    Copperajah: {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 650,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Copperajah-Gmax']
    },
    'Copperajah-Gmax': {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Sheer Force' },
        baseSpecies: 'Copperajah'
    },
    'Corsola-Galar': {
        types: ['Ghost'],
        bs: { hp: 60, at: 55, df: 100, sa: 65, sd: 100, sp: 30 },
        weightkg: 0.5,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Corsola'
    },
    Corviknight: {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 75,
        abilities: { 0: 'Pressure' },
        otherFormes: ['Corviknight-Gmax']
    },
    'Corviknight-Gmax': {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Corviknight'
    },
    Corvisquire: {
        types: ['Flying'],
        bs: { hp: 68, at: 67, df: 55, sa: 43, sd: 55, sp: 77 },
        weightkg: 16,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Cramorant: {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        otherFormes: ['Cramorant-Gorging', 'Cramorant-Gulping']
    },
    'Cramorant-Gorging': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Cramorant'
    },
    'Cramorant-Gulping': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Cramorant'
    },
    Cufant: {
        types: ['Steel'],
        bs: { hp: 72, at: 80, df: 49, sa: 40, sd: 49, sp: 40 },
        weightkg: 100,
        abilities: { 0: 'Sheer Force' },
        nfe: true
    },
    Cursola: {
        types: ['Ghost'],
        bs: { hp: 60, at: 95, df: 50, sa: 145, sd: 130, sp: 30 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' }
    },
    'Darmanitan-Galar': {
        types: ['Ice'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 120,
        abilities: { 0: 'Gorilla Tactics' },
        baseSpecies: 'Darmanitan'
    },
    'Darmanitan-Galar-Zen': {
        types: ['Ice', 'Fire'],
        bs: { hp: 105, at: 160, df: 55, sa: 30, sd: 55, sp: 135 },
        weightkg: 120,
        abilities: { 0: 'Zen Mode' },
        baseSpecies: 'Darmanitan'
    },
    'Darumaka-Galar': {
        types: ['Ice'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 40,
        abilities: { 0: 'Hustle' },
        nfe: true,
        baseSpecies: 'Darumaka'
    },
    Dottler: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 35, df: 80, sa: 50, sd: 90, sp: 30 },
        weightkg: 19.5,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Dracovish: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 90, df: 100, sa: 70, sd: 80, sp: 75 },
        weightkg: 215,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Dracozolt: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 90, at: 100, df: 90, sa: 80, sd: 70, sp: 75 },
        weightkg: 190,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Dragapult: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 88, at: 120, df: 75, sa: 100, sd: 75, sp: 142 },
        weightkg: 50,
        abilities: { 0: 'Clear Body' }
    },
    Drakloak: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 68, at: 80, df: 50, sa: 60, sd: 50, sp: 102 },
        weightkg: 11,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Drednaw: {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 115.5,
        abilities: { 0: 'Strong Jaw' },
        otherFormes: ['Drednaw-Gmax']
    },
    'Drednaw-Gmax': {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 0,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Drednaw'
    },
    Dreepy: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 28, at: 60, df: 30, sa: 40, sd: 30, sp: 82 },
        weightkg: 2,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Drizzile: {
        types: ['Water'],
        bs: { hp: 65, at: 60, df: 55, sa: 95, sd: 55, sp: 90 },
        weightkg: 11.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Dubwool: {
        types: ['Normal'],
        bs: { hp: 72, at: 80, df: 100, sa: 60, sd: 90, sp: 88 },
        weightkg: 43,
        abilities: { 0: 'Fluffy' }
    },
    Duraludon: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 40,
        abilities: { 0: 'Light Metal' },
        otherFormes: ['Duraludon-Gmax']
    },
    'Duraludon-Gmax': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Light Metal' },
        baseSpecies: 'Duraludon'
    },
    'Eevee-Gmax': {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sa: 45, sd: 65, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Eevee'
    },
    Eiscue: {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 110, sa: 65, sd: 90, sp: 50 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        otherFormes: ['Eiscue-Noice']
    },
    'Eiscue-Noice': {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 70, sa: 65, sd: 50, sp: 130 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        baseSpecies: 'Eiscue'
    },
    Eldegoss: {
        types: ['Grass'],
        bs: { hp: 60, at: 50, df: 90, sa: 80, sd: 120, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Cotton Down' }
    },
    Eternatus: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 140, at: 85, df: 95, sa: 145, sd: 95, sp: 130 },
        weightkg: 950,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Eternatus-Eternamax']
    },
    'Eternatus-Eternamax': {
        types: ['Poison', 'Dragon'],
        bs: { hp: 255, at: 115, df: 250, sa: 125, sd: 250, sp: 130 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Eternatus'
    },
    Falinks: {
        types: ['Fighting'],
        bs: { hp: 65, at: 100, df: 100, sa: 70, sd: 60, sp: 75 },
        weightkg: 62,
        abilities: { 0: 'Battle Armor' },
        gender: 'N'
    },
    'Farfetch\u2019d-Galar': {
        types: ['Fighting'],
        bs: { hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55 },
        weightkg: 42,
        abilities: { 0: 'Steadfast' },
        nfe: true,
        baseSpecies: 'Farfetch\u2019d'
    },
    Flapple: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 1,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Flapple-Gmax']
    },
    'Flapple-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Flapple'
    },
    Frosmoth: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 65, df: 60, sa: 125, sd: 90, sp: 65 },
        weightkg: 42,
        abilities: { 0: 'Shield Dust' }
    },
    'Garbodor-Gmax': {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Stench' },
        baseSpecies: 'Garbodor'
    },
    'Gengar-Gmax': {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sa: 130, sd: 75, sp: 110 },
        weightkg: 0,
        abilities: { 0: 'Cursed Body' },
        baseSpecies: 'Gengar'
    },
    Glastrier: {
        types: ['Ice'],
        bs: { hp: 100, at: 145, df: 130, sa: 65, sd: 110, sp: 30 },
        weightkg: 800,
        abilities: { 0: 'Chilling Neigh' },
        gender: 'N'
    },
    Gossifleur: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 60, sa: 40, sd: 60, sp: 10 },
        weightkg: 2.2,
        abilities: { 0: 'Cotton Down' },
        nfe: true
    },
    Grapploct: {
        types: ['Fighting'],
        bs: { hp: 80, at: 118, df: 90, sa: 70, sd: 80, sp: 42 },
        weightkg: 39,
        abilities: { 0: 'Limber' }
    },
    Greedent: {
        types: ['Normal'],
        bs: { hp: 120, at: 95, df: 95, sa: 55, sd: 75, sp: 20 },
        weightkg: 6,
        abilities: { 0: 'Cheek Pouch' }
    },
    Grimmsnarl: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Grimmsnarl-Gmax']
    },
    'Grimmsnarl-Gmax': {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Prankster' },
        baseSpecies: 'Grimmsnarl'
    },
    Grookey: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 50, sa: 40, sd: 40, sp: 65 },
        weightkg: 5,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Hatenna: {
        types: ['Psychic'],
        bs: { hp: 42, at: 30, df: 45, sa: 56, sd: 53, sp: 39 },
        weightkg: 3.4,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Hatterene: {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 5.1,
        abilities: { 0: 'Healer' },
        otherFormes: ['Hatterene-Gmax']
    },
    'Hatterene-Gmax': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 0,
        abilities: { 0: 'Healer' },
        baseSpecies: 'Hatterene'
    },
    Hattrem: {
        types: ['Psychic'],
        bs: { hp: 57, at: 40, df: 65, sa: 86, sd: 73, sp: 49 },
        weightkg: 4.8,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Impidimp: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 45, at: 45, df: 30, sa: 55, sd: 40, sp: 50 },
        weightkg: 5.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Indeedee: {
        types: ['Psychic', 'Normal'],
        bs: { hp: 60, at: 65, df: 55, sa: 105, sd: 95, sp: 95 },
        weightkg: 28,
        abilities: { 0: 'Inner Focus' },
        otherFormes: ['Indeedee-F']
    },
    'Indeedee-F': {
        types: ['Psychic', 'Normal'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 105, sp: 85 },
        weightkg: 28,
        abilities: { 0: 'Own Tempo' },
        baseSpecies: 'Indeedee'
    },
    Inteleon: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 45.2,
        abilities: { 0: 'Torrent' },
        otherFormes: ['Inteleon-Gmax']
    },
    'Inteleon-Gmax': {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Inteleon'
    },
    'Kingler-Gmax': {
        types: ['Water'],
        bs: { hp: 55, at: 130, df: 115, sa: 50, sd: 50, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Hyper Cutter' },
        baseSpecies: 'Kingler'
    },
    'Kubfu': {
        types: ['Fighting'],
        bs: { hp: 60, at: 90, df: 60, sa: 53, sd: 50, sp: 72 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    'Lapras-Gmax': {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sa: 85, sd: 95, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Water Absorb' },
        baseSpecies: 'Lapras'
    },
    'Linoone-Galar': {
        types: ['Dark', 'Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Linoone'
    },
    Magearna: { otherFormes: ['Magearna-Original'] },
    'Magearna-Original': {
        baseSpecies: 'Magearna',
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        weightkg: 80.5,
        gender: 'N',
        abilities: { 0: 'Soul-Heart' }
    },
    'Machamp-Gmax': {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sa: 65, sd: 85, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Guts' },
        baseSpecies: 'Machamp'
    },
    'Melmetal-Gmax': {
        types: ['Steel'],
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        weightkg: 0,
        abilities: { 0: 'Iron Fist' },
        baseSpecies: 'Melmetal',
        gender: 'N'
    },
    'Meowth-Galar': {
        types: ['Steel'],
        bs: { hp: 50, at: 65, df: 55, sa: 40, sd: 40, sp: 40 },
        weightkg: 7.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Meowth'
    },
    'Meowth-Gmax': {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sa: 40, sd: 40, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Meowth'
    },
    Miasmaw: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 85, at: 135, df: 60, sa: 88, sd: 105, sp: 99 },
        weightkg: 57,
        abilities: { 0: 'Neutralizing Gas' }
    },
    Miasmite: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 40, at: 85, df: 60, sa: 52, sd: 52, sp: 44 },
        weightkg: 10.1,
        abilities: { 0: 'Neutralizing Gas' },
        nfe: true
    },
    Milcery: {
        types: ['Fairy'],
        bs: { hp: 45, at: 40, df: 40, sa: 50, sd: 61, sp: 34 },
        weightkg: 0.3,
        abilities: { 0: 'Sweet Veil' },
        nfe: true
    },
    'Moltres-Galar': {
        types: ['Dark', 'Flying'],
        bs: { hp: 90, at: 85, df: 90, sa: 100, sd: 125, sp: 90 },
        weightkg: 66,
        abilities: { 0: 'Berserk' },
        gender: 'N',
        baseSpecies: 'Moltres'
    },
    Morgrem: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 65, at: 60, df: 45, sa: 75, sd: 55, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Morpeko: {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        otherFormes: ['Morpeko-Hangry']
    },
    'Morpeko-Hangry': {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        baseSpecies: 'Morpeko'
    },
    'Mr. Mime-Galar': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 50, at: 65, df: 65, sa: 90, sd: 90, sp: 100 },
        weightkg: 56.8,
        abilities: { 0: 'Vital Spirit' },
        nfe: true,
        baseSpecies: 'Mr. Mime'
    },
    'Mr. Rime': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 80, at: 85, df: 75, sa: 110, sd: 100, sp: 70 },
        weightkg: 58.2,
        abilities: { 0: 'Tangled Feet' }
    },
    Nickit: {
        types: ['Dark'],
        bs: { hp: 40, at: 28, df: 28, sa: 47, sd: 52, sp: 50 },
        weightkg: 8.9,
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Obstagoon: {
        types: ['Dark', 'Normal'],
        bs: { hp: 93, at: 90, df: 101, sa: 60, sd: 81, sp: 95 },
        weightkg: 46,
        abilities: { 0: 'Reckless' }
    },
    Orbeetle: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 40.8,
        abilities: { 0: 'Swarm' },
        otherFormes: ['Orbeetle-Gmax']
    },
    'Orbeetle-Gmax': {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Swarm' },
        baseSpecies: 'Orbeetle'
    },
    Perrserker: {
        types: ['Steel'],
        bs: { hp: 70, at: 110, df: 100, sa: 50, sd: 60, sp: 50 },
        weightkg: 28,
        abilities: { 0: 'Battle Armor' }
    },
    'Pikachu-Gmax': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-World': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    Pincurchin: {
        types: ['Electric'],
        bs: { hp: 48, at: 101, df: 95, sa: 91, sd: 85, sp: 15 },
        weightkg: 1,
        abilities: { 0: 'Lightning Rod' }
    },
    Polteageist: {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        otherFormes: ['Polteageist-Antique'],
        gender: 'N'
    },
    'Polteageist-Antique': {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        baseSpecies: 'Polteageist',
        gender: 'N'
    },
    'Ponyta-Galar': {
        types: ['Psychic'],
        bs: { hp: 50, at: 85, df: 55, sa: 65, sd: 65, sp: 90 },
        weightkg: 24,
        abilities: { 0: 'Run Away' },
        nfe: true,
        baseSpecies: 'Ponyta'
    },
    Raboot: {
        types: ['Fire'],
        bs: { hp: 65, at: 86, df: 60, sa: 55, sd: 60, sp: 94 },
        weightkg: 9,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    'Rapidash-Galar': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 65, at: 100, df: 70, sa: 80, sd: 80, sp: 105 },
        weightkg: 80,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Rapidash'
    },
    Regidrago: {
        types: ['Dragon'],
        bs: { hp: 200, at: 100, df: 50, sa: 100, sd: 50, sp: 80 },
        weightkg: 200,
        abilities: { 0: 'Dragon\'s Maw' },
        gender: 'N'
    },
    Regieleki: {
        types: ['Electric'],
        bs: { hp: 80, at: 100, df: 50, sa: 100, sd: 50, sp: 200 },
        weightkg: 145,
        abilities: { 0: 'Transistor' },
        gender: 'N'
    },
    Rillaboom: {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 90,
        abilities: { 0: 'Overgrow' },
        otherFormes: ['Rillaboom-Gmax']
    },
    'Rillaboom-Gmax': {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Rillaboom'
    },
    Rolycoly: {
        types: ['Rock'],
        bs: { hp: 30, at: 40, df: 50, sa: 40, sd: 50, sp: 30 },
        weightkg: 12,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Rookidee: {
        types: ['Flying'],
        bs: { hp: 38, at: 47, df: 35, sa: 33, sd: 35, sp: 57 },
        weightkg: 1.8,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Runerigus: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 58, at: 95, df: 145, sa: 50, sd: 105, sp: 30 },
        weightkg: 66.6,
        abilities: { 0: 'Wandering Spirit' }
    },
    Saharaja: {
        types: ['Ground'],
        bs: { hp: 70, at: 112, df: 105, sa: 65, sd: 123, sp: 78 },
        weightkg: 303.9,
        abilities: { 0: 'Water Absorb' }
    },
    Saharascal: {
        types: ['Ground'],
        bs: { hp: 50, at: 80, df: 65, sa: 45, sd: 90, sp: 70 },
        weightkg: 48,
        abilities: { 0: 'Water Absorb' },
        nfe: true
    },
    Sandaconda: {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 65.5,
        abilities: { 0: 'Sand Spit' },
        otherFormes: ['Sandaconda-Gmax']
    },
    'Sandaconda-Gmax': {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 0,
        abilities: { 0: 'Sand Spit' },
        baseSpecies: 'Sandaconda'
    },
    Scorbunny: {
        types: ['Fire'],
        bs: { hp: 50, at: 71, df: 40, sa: 40, sd: 40, sp: 69 },
        weightkg: 4.5,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Silicobra: {
        types: ['Ground'],
        bs: { hp: 52, at: 57, df: 75, sa: 35, sd: 50, sp: 46 },
        weightkg: 7.6,
        abilities: { 0: 'Sand Spit' },
        nfe: true
    },
    Sinistea: {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        otherFormes: ['Sinistea-Antique'],
        gender: 'N'
    },
    'Sinistea-Antique': {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Sinistea',
        gender: 'N'
    },
    'Sirfetch\u2019d': {
        types: ['Fighting'],
        bs: { hp: 62, at: 135, df: 95, sa: 68, sd: 82, sp: 65 },
        weightkg: 117,
        abilities: { 0: 'Steadfast' }
    },
    Sizzlipede: {
        types: ['Fire', 'Bug'],
        bs: { hp: 50, at: 65, df: 45, sa: 50, sd: 50, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    Skwovet: {
        types: ['Normal'],
        bs: { hp: 70, at: 55, df: 55, sa: 35, sd: 35, sp: 25 },
        weightkg: 2.5,
        abilities: { 0: 'Cheek Pouch' },
        nfe: true
    },
    'Slowbro-Galar': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 100, df: 95, sa: 100, sd: 70, sp: 30 },
        weightkg: 70.5,
        abilities: { 0: 'Quick Draw' },
        baseSpecies: 'Slowbro'
    },
    'Slowking-Galar': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 65, df: 80, sa: 110, sd: 110, sp: 30 },
        weightkg: 79.5,
        abilities: { 0: 'Curious Medicine' },
        baseSpecies: 'Slowking'
    },
    'Slowpoke-Galar': {
        types: ['Psychic'],
        bs: { hp: 90, at: 65, df: 65, sa: 40, sd: 40, sp: 15 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Gluttony' },
        baseSpecies: 'Slowpoke'
    },
    Solotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 68, at: 48, df: 34, sa: 72, sd: 24, sp: 84 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Regenerator' }
    },
    Snom: {
        types: ['Ice', 'Bug'],
        bs: { hp: 30, at: 25, df: 35, sa: 45, sd: 30, sp: 20 },
        weightkg: 3.8,
        abilities: { 0: 'Shield Dust' },
        nfe: true
    },
    'Snorlax-Gmax': {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sa: 65, sd: 110, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Immunity' },
        baseSpecies: 'Snorlax'
    },
    Sobble: {
        types: ['Water'],
        bs: { hp: 50, at: 40, df: 40, sa: 70, sd: 40, sp: 70 },
        weightkg: 4,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Spectrier: {
        types: ['Ghost'],
        bs: { hp: 100, at: 65, df: 60, sa: 145, sd: 80, sp: 130 },
        weightkg: 44.5,
        abilities: { 0: 'Grim Neigh' },
        gender: 'N'
    },
    Stonjourner: {
        types: ['Rock'],
        bs: { hp: 100, at: 125, df: 135, sa: 20, sd: 20, sp: 70 },
        weightkg: 520,
        abilities: { 0: 'Power Spot' }
    },
    'Stunfisk-Galar': {
        types: ['Ground', 'Steel'],
        bs: { hp: 109, at: 81, df: 99, sa: 66, sd: 84, sp: 32 },
        weightkg: 20.5,
        abilities: { 0: 'Mimicry' },
        baseSpecies: 'Stunfisk'
    },
    Thievul: {
        types: ['Dark'],
        bs: { hp: 70, at: 58, df: 58, sa: 87, sd: 92, sp: 90 },
        weightkg: 19.9,
        abilities: { 0: 'Run Away' }
    },
    Thwackey: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 70, sa: 55, sd: 60, sp: 80 },
        weightkg: 14,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Toxel: {
        types: ['Electric', 'Poison'],
        bs: { hp: 40, at: 38, df: 35, sa: 54, sd: 35, sp: 40 },
        weightkg: 11,
        abilities: { 0: 'Rattled' },
        nfe: true
    },
    Toxtricity: {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        otherFormes: ['Toxtricity-Gmax', 'Toxtricity-Low-Key', 'Toxtricity-Low-Key-Gmax']
    },
    'Toxtricity-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    'Toxtricity-Low-Key': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    'Toxtricity-Low-Key-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    Urshifu: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        otherFormes: ['Urshifu-Gmax', 'Urshifu-Rapid-Strike', 'Urshifu-Rapid-Strike-Gmax']
    },
    'Urshifu-Rapid-Strike': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    'Urshifu-Rapid-Strike-Gmax': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 0,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    'Urshifu-Gmax': {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 0,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    Venomicon: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 50, df: 113, sa: 118, sd: 90, sp: 64 },
        weightkg: 11.5,
        abilities: { 0: 'Stamina' },
        otherFormes: ['Venomicon-Epilogue'],
        gender: 'N'
    },
    'Venomicon-Epilogue': {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 102, df: 85, sa: 62, sd: 85, sp: 101 },
        weightkg: 12.4,
        abilities: { 0: 'Tinted Lens' },
        baseSpecies: 'Venomicon',
        gender: 'N'
    },
    'Venusaur-Gmax': {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sa: 100, sd: 100, sp: 80 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Venusaur'
    },
    'Weezing-Galar': {
        types: ['Poison', 'Fairy'],
        bs: { hp: 65, at: 90, df: 120, sa: 85, sd: 70, sp: 60 },
        weightkg: 16,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Weezing'
    },
    Wooloo: {
        types: ['Normal'],
        bs: { hp: 42, at: 40, df: 55, sa: 40, sd: 45, sp: 48 },
        weightkg: 6,
        abilities: { 0: 'Fluffy' },
        nfe: true
    },
    'Yamask-Galar': {
        types: ['Ground', 'Ghost'],
        bs: { hp: 38, at: 55, df: 85, sa: 30, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Wandering Spirit' },
        nfe: true,
        baseSpecies: 'Yamask'
    },
    Yamper: {
        types: ['Electric'],
        bs: { hp: 59, at: 45, df: 50, sa: 40, sd: 50, sp: 26 },
        weightkg: 13.5,
        abilities: { 0: 'Ball Fetch' },
        nfe: true
    },
    Zacian: {
        types: ['Fairy'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 110,
        abilities: { 0: 'Intrepid Sword' },
        gender: 'N',
        otherFormes: ['Zacian-Crowned']
    },
    'Zacian-Crowned': {
        types: ['Fairy', 'Steel'],
        bs: { hp: 92, at: 170, df: 115, sa: 80, sd: 115, sp: 148 },
        weightkg: 355,
        abilities: { 0: 'Intrepid Sword' },
        baseSpecies: 'Zacian',
        gender: 'N'
    },
    Zamazenta: {
        types: ['Fighting'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 210,
        abilities: { 0: 'Dauntless Shield' },
        gender: 'N',
        otherFormes: ['Zamazenta-Crowned']
    },
    'Zamazenta-Crowned': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 92, at: 130, df: 145, sa: 80, sd: 145, sp: 128 },
        weightkg: 785,
        abilities: { 0: 'Dauntless Shield' },
        baseSpecies: 'Zamazenta',
        gender: 'N'
    },
    'Zapdos-Galar': {
        types: ['Fighting', 'Flying'],
        bs: { hp: 90, at: 125, df: 90, sa: 85, sd: 90, sp: 100 },
        weightkg: 58.2,
        abilities: { 0: 'Defiant' },
        gender: 'N',
        baseSpecies: 'Zapdos'
    },
    Zarude: {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        gender: 'N',
        otherFormes: ['Zarude-Dada']
    },
    'Zarude-Dada': {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        baseSpecies: 'Zarude',
        gender: 'N'
    },
    'Zigzagoon-Galar': {
        types: ['Dark', 'Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Zigzagoon'
    }
};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH);
var PLA_PATCH = {
    Arcanine: { otherFormes: ['Arcanine-Hisui'] },
    Avalugg: { otherFormes: ['Avalugg-Hisui'] },
    Basculin: { otherFormes: ['Basculin-Blue-Striped', 'Basculin-White-Striped'] },
    Braviary: { otherFormes: ['Braviary-Hisui'] },
    Decidueye: { otherFormes: ['Decidueye-Hisui'] },
    Dialga: { otherFormes: ['Dialga-Origin'] },
    Electrode: { otherFormes: ['Electrode-Hisui'] },
    Goodra: { otherFormes: ['Goodra-Hisui'] },
    Growlithe: { otherFormes: ['Growlithe-Hisui'] },
    Lilligant: { otherFormes: ['Lilligant-Hisui'] },
    Palkia: { otherFormes: ['Palkia-Origin'] },
    Qwilfish: { otherFormes: ['Qwilfish-Hisui'] },
    Samurott: { otherFormes: ['Samurott-Hisui'] },
    Sliggoo: { otherFormes: ['Sliggoo-Hisui'] },
    Sneasel: { otherFormes: ['Sneasel-Hisui'] },
    Stantler: { nfe: true },
    Typhlosion: { otherFormes: ['Typhlosion-Hisui'] },
    Ursaring: { nfe: true },
    Voltorb: { otherFormes: ['Voltorb-Hisui'] },
    Zoroark: { otherFormes: ['Zoroark-Hisui'] },
    Zorua: { otherFormes: ['Zorua-Hisui'] },
    'Arcanine-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 95, at: 115, df: 80, sa: 95, sd: 80, sp: 90 },
        weightkg: 168,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Arcanine'
    },
    'Avalugg-Hisui': {
        types: ['Ice', 'Rock'],
        bs: { hp: 95, at: 127, df: 184, sa: 34, sd: 36, sp: 38 },
        weightkg: 262.4,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Avalugg'
    },
    Basculegion: {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 112, df: 65, sa: 80, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        otherFormes: ['Basculegion-F']
    },
    'Basculegion-F': {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 92, df: 65, sa: 100, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        baseSpecies: 'Basculegion'
    },
    'Basculin-White-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rattled' },
        baseSpecies: 'Basculin',
        nfe: true
    },
    'Braviary-Hisui': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 110, at: 83, df: 70, sa: 112, sd: 70, sp: 65 },
        weightkg: 43.4,
        abilities: { 0: 'Keen Eye' },
        baseSpecies: 'Braviary'
    },
    'Decidueye-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 88, at: 112, df: 80, sa: 95, sd: 95, sp: 60 },
        weightkg: 37,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Decidueye'
    },
    'Dialga-Origin': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 100, df: 120, sa: 150, sd: 120, sp: 90 },
        weightkg: 850,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Dialga'
    },
    'Electrode-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 60, at: 50, df: 70, sa: 80, sd: 80, sp: 150 },
        weightkg: 71,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Electrode'
    },
    Enamorus: {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 70, sa: 135, sd: 80, sp: 106 },
        weightkg: 48,
        abilities: { 0: 'Cute Charm' },
        otherFormes: ['Enamorus-Therian']
    },
    'Enamorus-Therian': {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 110, sa: 135, sd: 100, sp: 46 },
        weightkg: 48,
        abilities: { 0: 'Overcoat' },
        baseSpecies: 'Enamorus'
    },
    'Goodra-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 80, at: 100, df: 100, sa: 110, sd: 150, sp: 60 },
        weightkg: 334.1,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Goodra'
    },
    'Growlithe-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 60, at: 75, df: 45, sa: 65, sd: 50, sp: 55 },
        weightkg: 22.7,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Growlithe',
        nfe: true
    },
    Kleavor: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 135, df: 95, sa: 45, sd: 70, sp: 85 },
        weightkg: 89,
        abilities: { 0: 'Swarm' }
    },
    'Lilligant-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 70, at: 105, df: 75, sa: 50, sd: 75, sp: 105 },
        weightkg: 19.2,
        abilities: { 0: 'Chlorophyll' },
        baseSpecies: 'Lilligant'
    },
    Overqwil: {
        types: ['Dark', 'Poison'],
        bs: { hp: 85, at: 115, df: 95, sa: 65, sd: 65, sp: 85 },
        weightkg: 60.5,
        abilities: { 0: 'Poison Point' }
    },
    'Palkia-Origin': {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 100, df: 100, sa: 150, sd: 120, sp: 120 },
        weightkg: 660,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Palkia'
    },
    'Qwilfish-Hisui': {
        types: ['Dark', 'Poison'],
        bs: { hp: 65, at: 95, df: 85, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Qwilfish',
        nfe: true
    },
    'Samurott-Hisui': {
        types: ['Water', 'Dark'],
        bs: { hp: 90, at: 108, df: 80, sa: 100, sd: 65, sp: 85 },
        weightkg: 58.2,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Samurott'
    },
    'Sliggoo-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 58, at: 75, df: 83, sa: 83, sd: 113, sp: 40 },
        weightkg: 68.5,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Sliggoo',
        nfe: true
    },
    'Sneasel-Hisui': {
        types: ['Fighting', 'Poison'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 27,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Sneasel',
        nfe: true
    },
    Sneasler: {
        types: ['Fighting', 'Poison'],
        bs: { hp: 80, at: 130, df: 60, sa: 40, sd: 80, sp: 120 },
        weightkg: 43,
        abilities: { 0: 'Pressure' }
    },
    'Typhlosion-Hisui': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 73, at: 84, df: 78, sa: 119, sd: 85, sp: 95 },
        weightkg: 69.8,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Typhlosion'
    },
    Ursaluna: {
        types: ['Ground', 'Normal'],
        bs: { hp: 130, at: 140, df: 105, sa: 45, sd: 80, sp: 50 },
        weightkg: 290,
        abilities: { 0: 'Guts' }
    },
    'Voltorb-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 40, at: 30, df: 50, sa: 55, sd: 55, sp: 100 },
        weightkg: 13,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Voltorb',
        nfe: true
    },
    Wyrdeer: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 103, at: 105, df: 72, sa: 105, sd: 75, sp: 65 },
        weightkg: 95.1,
        abilities: { 0: 'Intimidate' }
    },
    'Zoroark-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 55, at: 100, df: 60, sa: 125, sd: 60, sp: 110 },
        weightkg: 73,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zoroark'
    },
    'Zorua-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 35, at: 60, df: 40, sa: 85, sd: 40, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zorua',
        nfe: true
    }
};
var SV_PATCH = {
    Bisharp: { nfe: true },
    Cresselia: { bs: { df: 110, sd: 120 } },
    Dunsparce: { nfe: true },
    Duraludon: { nfe: true },
    Girafarig: { nfe: true },
    Primeape: { nfe: true },
    Tauros: { otherFormes: ['Tauros-Paldea-Aqua', 'Tauros-Paldea-Blaze', 'Tauros-Paldea-Combat'] },
    Wooper: { otherFormes: ['Wooper-Paldea'] },
    Zacian: { bs: { at: 120 } },
    'Zacian-Crowned': { bs: { at: 150 } },
    Zamazenta: { bs: { at: 120 } },
    'Zamazenta-Crowned': { bs: { at: 120, df: 140, sd: 140 } },
    Ababo: {
        types: ['Fairy'],
        bs: { hp: 42, at: 35, df: 27, sa: 35, sd: 35, sp: 38 },
        weightkg: 3.5,
        abilities: { 0: 'Pixilate' },
        nfe: true
    },
    Annihilape: {
        types: ['Fighting', 'Ghost'],
        bs: { hp: 110, at: 115, df: 80, sa: 50, sd: 90, sp: 90 },
        weightkg: 56,
        abilities: { 0: 'Vital Spirit' }
    },
    Arboliva: {
        types: ['Grass', 'Normal'],
        bs: { hp: 78, at: 69, df: 90, sa: 125, sd: 109, sp: 39 },
        weightkg: 48.2,
        abilities: { 0: 'Seed Sower' }
    },
    Archaludon: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 90, at: 105, df: 130, sa: 125, sd: 65, sp: 85 },
        weightkg: 60,
        abilities: { 0: 'Stamina' }
    },
    Arctibax: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 90, at: 95, df: 66, sa: 45, sd: 65, sp: 62 },
        weightkg: 30,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Armarouge: {
        types: ['Fire', 'Psychic'],
        bs: { hp: 85, at: 60, df: 100, sa: 125, sd: 80, sp: 75 },
        weightkg: 85,
        abilities: { 0: 'Flash Fire' }
    },
    Baxcalibur: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 115, at: 145, df: 92, sa: 75, sd: 86, sp: 87 },
        weightkg: 210,
        abilities: { 0: 'Thermal Exchange' }
    },
    Bellibolt: {
        types: ['Electric'],
        bs: { hp: 109, at: 64, df: 91, sa: 103, sd: 83, sp: 45 },
        weightkg: 113,
        abilities: { 0: 'Electromorphosis' }
    },
    Bombirdier: {
        types: ['Flying', 'Dark'],
        bs: { hp: 70, at: 103, df: 85, sa: 60, sd: 85, sp: 82 },
        weightkg: 42.9,
        abilities: { 0: 'Big Pecks' }
    },
    Brambleghast: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 55, at: 115, df: 70, sa: 80, sd: 70, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Wind Rider' }
    },
    Bramblin: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 65, df: 30, sa: 45, sd: 35, sp: 60 },
        weightkg: 0.6,
        abilities: { 0: 'Wind Rider' },
        nfe: true
    },
    'Brute Bonnet': {
        types: ['Grass', 'Dark'],
        bs: { hp: 111, at: 127, df: 99, sa: 79, sd: 99, sp: 55 },
        weightkg: 21,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Capsakid: {
        types: ['Grass'],
        bs: { hp: 50, at: 62, df: 40, sa: 62, sd: 40, sp: 50 },
        weightkg: 3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Ceruledge: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 75, at: 125, df: 80, sa: 60, sd: 100, sp: 85 },
        weightkg: 62,
        abilities: { 0: 'Flash Fire' }
    },
    Cetitan: {
        types: ['Ice'],
        bs: { hp: 170, at: 113, df: 65, sa: 45, sd: 55, sp: 73 },
        weightkg: 700,
        abilities: { 0: 'Thick Fat' }
    },
    Cetoddle: {
        types: ['Ice'],
        bs: { hp: 108, at: 68, df: 45, sa: 30, sd: 40, sp: 43 },
        weightkg: 45,
        abilities: { 0: 'Thick Fat' },
        nfe: true
    },
    Charcadet: {
        types: ['Fire'],
        bs: { hp: 40, at: 50, df: 40, sa: 50, sd: 40, sp: 35 },
        weightkg: 10.5,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    'Chi-Yu': {
        types: ['Dark', 'Fire'],
        bs: { hp: 55, at: 80, df: 80, sa: 135, sd: 120, sp: 100 },
        weightkg: 4.9,
        gender: 'N',
        abilities: { 0: 'Beads of Ruin' }
    },
    'Chien-Pao': {
        types: ['Dark', 'Ice'],
        bs: { hp: 80, at: 120, df: 80, sa: 90, sd: 65, sp: 135 },
        weightkg: 152.2,
        gender: 'N',
        abilities: { 0: 'Sword of Ruin' }
    },
    Clodsire: {
        types: ['Poison', 'Ground'],
        bs: { hp: 130, at: 75, df: 60, sa: 45, sd: 100, sp: 20 },
        weightkg: 223,
        abilities: { 0: 'Poison Point' }
    },
    Cresceidon: {
        types: ['Water', 'Fairy'],
        bs: { hp: 80, at: 32, df: 111, sa: 88, sd: 99, sp: 125 },
        weightkg: 999.9,
        abilities: { 0: 'Multiscale' }
    },
    Crocalor: {
        types: ['Fire'],
        bs: { hp: 81, at: 55, df: 78, sa: 90, sd: 58, sp: 49 },
        weightkg: 30.7,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Cyclizar: {
        types: ['Dragon', 'Normal'],
        bs: { hp: 70, at: 95, df: 65, sa: 85, sd: 65, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Shed Skin' }
    },
    Dachsbun: {
        types: ['Fairy'],
        bs: { hp: 57, at: 80, df: 115, sa: 50, sd: 80, sp: 95 },
        weightkg: 14.9,
        abilities: { 0: 'Well-Baked Body' }
    },
    Dipplin: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 80, at: 80, df: 110, sa: 95, sd: 80, sp: 40 },
        weightkg: 4.4,
        abilities: { 0: 'Supersweet Syrup' },
        nfe: true
    },
    Dolliv: {
        types: ['Grass', 'Normal'],
        bs: { hp: 52, at: 53, df: 60, sa: 78, sd: 78, sp: 33 },
        weightkg: 11.9,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Dondozo: {
        types: ['Water'],
        bs: { hp: 150, at: 100, df: 115, sa: 65, sd: 65, sp: 35 },
        weightkg: 220,
        abilities: { 0: 'Unaware' }
    },
    Dudunsparce: {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 39.2,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Dudunsparce-Three-Segment']
    },
    'Dudunsparce-Three-Segment': {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 47.4,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Dudunsparce'
    },
    Espathra: {
        types: ['Psychic'],
        bs: { hp: 95, at: 60, df: 60, sa: 101, sd: 60, sp: 105 },
        weightkg: 90,
        abilities: { 0: 'Opportunist' }
    },
    Farigiraf: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 120, at: 90, df: 70, sa: 110, sd: 70, sp: 60 },
        weightkg: 160,
        abilities: { 0: 'Cud Chew' }
    },
    Fezandipiti: {
        types: ['Poison', 'Fairy'],
        bs: { hp: 88, at: 91, df: 82, sa: 70, sd: 125, sp: 99 },
        weightkg: 30.1,
        abilities: { 0: 'Toxic Chain' }
    },
    Fidough: {
        types: ['Fairy'],
        bs: { hp: 37, at: 55, df: 70, sa: 30, sd: 55, sp: 65 },
        weightkg: 10.9,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Finizen: {
        types: ['Water'],
        bs: { hp: 70, at: 45, df: 40, sa: 45, sd: 40, sp: 75 },
        weightkg: 60.2,
        abilities: { 0: 'Water Veil' },
        nfe: true
    },
    Flamigo: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 82, at: 115, df: 74, sa: 75, sd: 64, sp: 90 },
        weightkg: 37,
        abilities: { 0: 'Scrappy' }
    },
    Flittle: {
        types: ['Psychic'],
        bs: { hp: 30, at: 35, df: 30, sa: 55, sd: 30, sp: 75 },
        weightkg: 1.5,
        abilities: { 0: 'Anticipation' },
        nfe: true
    },
    Floragato: {
        types: ['Grass'],
        bs: { hp: 61, at: 80, df: 63, sa: 60, sd: 63, sp: 83 },
        weightkg: 12.2,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    'Flutter Mane': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 55, df: 55, sa: 135, sd: 135, sp: 135 },
        weightkg: 4,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Frigibax: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 65, at: 75, df: 45, sa: 35, sd: 45, sp: 55 },
        weightkg: 17,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Fuecoco: {
        types: ['Fire'],
        bs: { hp: 67, at: 45, df: 59, sa: 63, sd: 40, sp: 36 },
        weightkg: 9.8,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Garganacl: {
        types: ['Rock'],
        bs: { hp: 100, at: 100, df: 130, sa: 45, sd: 90, sp: 35 },
        weightkg: 240,
        abilities: { 0: 'Purifying Salt' }
    },
    Gholdengo: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 87, at: 60, df: 95, sa: 133, sd: 91, sp: 84 },
        weightkg: 30,
        gender: 'N',
        abilities: { 0: 'Good as Gold' }
    },
    Gimmighoul: {
        types: ['Ghost'],
        bs: { hp: 45, at: 30, df: 70, sa: 75, sd: 70, sp: 10 },
        weightkg: 5,
        gender: 'N',
        abilities: { 0: 'Rattled' },
        nfe: true,
        otherFormes: ['Gimmighoul-Roaming']
    },
    'Gimmighoul-Roaming': {
        types: ['Ghost'],
        bs: { hp: 45, at: 30, df: 25, sa: 75, sd: 45, sp: 80 },
        weightkg: 0.1,
        gender: 'N',
        abilities: { 0: 'Run Away' },
        nfe: true,
        baseSpecies: 'Gimmighoul'
    },
    Glimmet: {
        types: ['Rock', 'Poison'],
        bs: { hp: 48, at: 35, df: 42, sa: 105, sd: 60, sp: 60 },
        weightkg: 8,
        abilities: { 0: 'Toxic Debris' },
        nfe: true
    },
    Glimmora: {
        types: ['Rock', 'Poison'],
        bs: { hp: 83, at: 55, df: 90, sa: 130, sd: 81, sp: 86 },
        weightkg: 45,
        abilities: { 0: 'Toxic Debris' }
    },
    'Gouging Fire': {
        types: ['Fire', 'Dragon'],
        bs: { hp: 105, at: 115, df: 121, sa: 65, sd: 93, sp: 91 },
        weightkg: 590,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Grafaiai: {
        types: ['Poison', 'Normal'],
        bs: { hp: 63, at: 95, df: 65, sa: 80, sd: 72, sp: 110 },
        weightkg: 27.2,
        abilities: { 0: 'Unburden' }
    },
    'Great Tusk': {
        types: ['Ground', 'Fighting'],
        bs: { hp: 115, at: 131, df: 131, sa: 53, sd: 53, sp: 87 },
        weightkg: 320,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Greavard: {
        types: ['Ghost'],
        bs: { hp: 50, at: 61, df: 60, sa: 30, sd: 55, sp: 34 },
        weightkg: 35,
        abilities: { 0: 'Pickup' },
        nfe: true
    },
    Hemogoblin: {
        types: ['Fairy', 'Fire'],
        bs: { hp: 90, at: 96, df: 87, sa: 96, sd: 89, sp: 55 },
        weightkg: 85,
        abilities: { 0: 'Pixilate' }
    },
    Houndstone: {
        types: ['Ghost'],
        bs: { hp: 72, at: 101, df: 100, sa: 50, sd: 97, sp: 68 },
        weightkg: 15,
        abilities: { 0: 'Sand Rush' }
    },
    Hydrapple: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 106, at: 80, df: 110, sa: 120, sd: 80, sp: 44 },
        weightkg: 93,
        abilities: { 0: 'Supersweet Syrup' }
    },
    'Iron Bundle': {
        types: ['Ice', 'Water'],
        bs: { hp: 56, at: 80, df: 114, sa: 124, sd: 60, sp: 136 },
        weightkg: 11,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Boulder': {
        types: ['Rock', 'Psychic'],
        bs: { hp: 90, at: 120, df: 80, sa: 68, sd: 108, sp: 124 },
        weightkg: 162.5,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Crown': {
        types: ['Steel', 'Psychic'],
        bs: { hp: 90, at: 72, df: 100, sa: 122, sd: 108, sp: 98 },
        weightkg: 156,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Hands': {
        types: ['Fighting', 'Electric'],
        bs: { hp: 154, at: 140, df: 108, sa: 50, sd: 68, sp: 50 },
        weightkg: 380.7,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Jugulis': {
        types: ['Dark', 'Flying'],
        bs: { hp: 94, at: 80, df: 86, sa: 122, sd: 80, sp: 108 },
        weightkg: 111,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Leaves': {
        types: ['Grass', 'Psychic'],
        bs: { hp: 90, at: 130, df: 88, sa: 70, sd: 108, sp: 104 },
        weightkg: 125,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Moth': {
        types: ['Fire', 'Poison'],
        bs: { hp: 80, at: 70, df: 60, sa: 140, sd: 110, sp: 110 },
        weightkg: 36,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Thorns': {
        types: ['Rock', 'Electric'],
        bs: { hp: 100, at: 134, df: 110, sa: 70, sd: 84, sp: 72 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Treads': {
        types: ['Ground', 'Steel'],
        bs: { hp: 90, at: 112, df: 120, sa: 72, sd: 70, sp: 106 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Valiant': {
        types: ['Fairy', 'Fighting'],
        bs: { hp: 74, at: 130, df: 90, sa: 120, sd: 60, sp: 116 },
        weightkg: 35,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    Kilowattrel: {
        types: ['Electric', 'Flying'],
        bs: { hp: 70, at: 70, df: 60, sa: 105, sd: 60, sp: 125 },
        weightkg: 38.6,
        abilities: { 0: 'Wind Power' }
    },
    Kingambit: {
        types: ['Dark', 'Steel'],
        bs: { hp: 100, at: 135, df: 120, sa: 60, sd: 85, sp: 50 },
        weightkg: 120,
        abilities: { 0: 'Defiant' }
    },
    Klawf: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 35, sd: 55, sp: 75 },
        weightkg: 79,
        abilities: { 0: 'Anger Shell' }
    },
    Koraidon: {
        types: ['Fighting', 'Dragon'],
        bs: { hp: 100, at: 135, df: 115, sa: 85, sd: 100, sp: 135 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Orichalcum Pulse' }
    },
    Lechonk: {
        types: ['Normal'],
        bs: { hp: 54, at: 45, df: 40, sa: 35, sd: 45, sp: 35 },
        weightkg: 10.2,
        abilities: { 0: 'Aroma Veil' },
        nfe: true
    },
    Lokix: {
        types: ['Bug', 'Dark'],
        bs: { hp: 71, at: 102, df: 78, sa: 52, sd: 55, sp: 92 },
        weightkg: 17.5,
        abilities: { 0: 'Swarm' }
    },
    Mabosstiff: {
        types: ['Dark'],
        bs: { hp: 80, at: 120, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Maschiff: {
        types: ['Dark'],
        bs: { hp: 60, at: 78, df: 60, sa: 40, sd: 51, sp: 51 },
        weightkg: 16,
        abilities: { 0: 'Intimidate' },
        nfe: true
    },
    Maushold: {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.3,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        otherFormes: ['Maushold-Four']
    },
    'Maushold-Four': {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.8,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        baseSpecies: 'Maushold'
    },
    Meowscarada: {
        types: ['Grass', 'Dark'],
        bs: { hp: 76, at: 110, df: 70, sa: 81, sd: 70, sp: 123 },
        weightkg: 31.2,
        abilities: { 0: 'Overgrow' }
    },
    Miraidon: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 100, at: 85, df: 100, sa: 135, sd: 115, sp: 135 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Hadron Engine' }
    },
    Munkidori: {
        types: ['Poison', 'Psychic'],
        bs: { hp: 88, at: 75, df: 66, sa: 130, sd: 90, sp: 106 },
        weightkg: 12.2,
        abilities: { 0: 'Toxic Chain' }
    },
    Nacli: {
        types: ['Rock'],
        bs: { hp: 55, at: 55, df: 75, sa: 35, sd: 35, sp: 25 },
        weightkg: 16,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Naclstack: {
        types: ['Rock'],
        bs: { hp: 60, at: 60, df: 100, sa: 35, sd: 65, sp: 35 },
        weightkg: 105,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Nymble: {
        types: ['Bug'],
        bs: { hp: 33, at: 46, df: 40, sa: 21, sd: 25, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Ogerpon: {
        types: ['Grass'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Defiant' },
        weightkg: 39.8,
        otherFormes: [
            'Ogerpon-Cornerstone', 'Ogerpon-Cornerstone-Tera',
            'Ogerpon-Hearthflame', 'Ogerpon-Hearthflame-Tera',
            'Ogerpon-Teal-Tera',
            'Ogerpon-Wellspring', 'Ogerpon-Wellspring-Tera',
        ]
    },
    'Ogerpon-Wellspring': {
        types: ['Grass', 'Water'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Water Absorb' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon'
    },
    'Ogerpon-Hearthflame': {
        types: ['Grass', 'Fire'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Mold Breaker' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon'
    },
    'Ogerpon-Cornerstone': {
        types: ['Grass', 'Rock'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Sturdy' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon'
    },
    'Ogerpon-Teal-Tera': {
        types: ['Grass'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Teal)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon'
    },
    'Ogerpon-Wellspring-Tera': {
        types: ['Grass', 'Water'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Wellspring)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon'
    },
    'Ogerpon-Hearthflame-Tera': {
        types: ['Grass', 'Fire'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Hearthflame)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon'
    },
    'Ogerpon-Cornerstone-Tera': {
        types: ['Grass', 'Rock'],
        bs: { hp: 80, at: 120, df: 84, sa: 60, sd: 96, sp: 110 },
        abilities: { 0: 'Embody Aspect (Cornerstone)' },
        weightkg: 39.8,
        baseSpecies: 'Ogerpon'
    },
    Oinkologne: {
        types: ['Normal'],
        bs: { hp: 110, at: 100, df: 75, sa: 59, sd: 80, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Lingering Aroma' },
        otherFormes: ['Oinkologne-F']
    },
    'Oinkologne-F': {
        types: ['Normal'],
        bs: { hp: 115, at: 90, df: 70, sa: 59, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Aroma Veil' },
        baseSpecies: 'Oinkologne'
    },
    Okidogi: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 88, at: 128, df: 115, sa: 58, sd: 86, sp: 80 },
        weightkg: 92,
        abilities: { 0: 'Toxic Chain' }
    },
    Orthworm: {
        types: ['Steel'],
        bs: { hp: 70, at: 85, df: 145, sa: 60, sd: 55, sp: 65 },
        weightkg: 310,
        abilities: { 0: 'Earth Eater' }
    },
    Palafin: {
        types: ['Water'],
        bs: { hp: 100, at: 70, df: 72, sa: 53, sd: 62, sp: 100 },
        weightkg: 60.2,
        abilities: { 0: 'Zero to Hero' },
        otherFormes: ['Palafin-Hero']
    },
    'Palafin-Hero': {
        types: ['Water'],
        bs: { hp: 100, at: 160, df: 97, sa: 106, sd: 87, sp: 100 },
        weightkg: 97.4,
        abilities: { 0: 'Zero to Hero' },
        baseSpecies: 'Palafin'
    },
    Pawmi: {
        types: ['Electric'],
        bs: { hp: 45, at: 50, df: 20, sa: 40, sd: 25, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Static' },
        nfe: true
    },
    Pawmo: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 60, at: 75, df: 40, sa: 50, sd: 40, sp: 85 },
        weightkg: 6.5,
        abilities: { 0: 'Volt Absorb' },
        nfe: true
    },
    Pawmot: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 70, at: 115, df: 70, sa: 70, sd: 60, sp: 105 },
        weightkg: 41,
        abilities: { 0: 'Volt Absorb' }
    },
    Pecharunt: {
        types: ['Poison', 'Ghost'],
        bs: { hp: 88, at: 88, df: 160, sa: 88, sd: 88, sp: 88 },
        weightkg: 0.3,
        gender: 'N',
        abilities: { 0: 'Poison Puppeteer' }
    },
    Poltchageist: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 1.1,
        abilities: { 0: 'Hospitality' },
        nfe: true,
        otherFormes: ['Poltchageist-Artisan'],
        gender: 'N'
    },
    'Poltchageist-Artisan': {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 1.1,
        abilities: { 0: 'Hospitality' },
        nfe: true,
        gender: 'N',
        baseSpecies: 'Poltchageist'
    },
    Quaquaval: {
        types: ['Water', 'Fighting'],
        bs: { hp: 85, at: 120, df: 80, sa: 85, sd: 75, sp: 85 },
        weightkg: 61.9,
        abilities: { 0: 'Torrent' }
    },
    Quaxly: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 45, sa: 50, sd: 45, sp: 50 },
        weightkg: 6.1,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Quaxwell: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 65, sd: 60, sp: 65 },
        weightkg: 21.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Rabsca: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 75, at: 50, df: 85, sa: 115, sd: 100, sp: 45 },
        weightkg: 3.5,
        abilities: { 0: 'Synchronize' }
    },
    'Raging Bolt': {
        types: ['Electric', 'Dragon'],
        bs: { hp: 125, at: 73, df: 91, sa: 137, sd: 89, sp: 75 },
        weightkg: 480,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Rellor: {
        types: ['Bug'],
        bs: { hp: 41, at: 50, df: 60, sa: 31, sd: 58, sp: 30 },
        weightkg: 1,
        abilities: { 0: 'Compound Eyes' },
        nfe: true
    },
    Revavroom: {
        types: ['Steel', 'Poison'],
        bs: { hp: 80, at: 119, df: 90, sa: 54, sd: 67, sp: 90 },
        weightkg: 120,
        abilities: { 0: 'Overcoat' }
    },
    'Roaring Moon': {
        types: ['Dragon', 'Dark'],
        bs: { hp: 105, at: 139, df: 71, sa: 55, sd: 101, sp: 119 },
        weightkg: 380,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    'Sandy Shocks': {
        types: ['Electric', 'Ground'],
        bs: { hp: 85, at: 81, df: 97, sa: 121, sd: 85, sp: 101 },
        weightkg: 60,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Scattervein: {
        types: ['Fairy'],
        bs: { hp: 75, at: 74, df: 87, sa: 62, sd: 89, sp: 63 },
        weightkg: 25,
        abilities: { 0: 'Pixilate' },
        nfe: true
    },
    Scovillain: {
        types: ['Grass', 'Fire'],
        bs: { hp: 65, at: 108, df: 65, sa: 108, sd: 65, sp: 75 },
        weightkg: 15,
        abilities: { 0: 'Chlorophyll' }
    },
    'Scream Tail': {
        types: ['Fairy', 'Psychic'],
        bs: { hp: 115, at: 65, df: 99, sa: 65, sd: 115, sp: 111 },
        weightkg: 8,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Shroodle: {
        types: ['Poison', 'Normal'],
        bs: { hp: 40, at: 65, df: 35, sa: 40, sd: 35, sp: 75 },
        weightkg: 0.7,
        abilities: { 0: 'Unburden' },
        nfe: true
    },
    'Sinistcha': {
        types: ['Grass', 'Ghost'],
        bs: { hp: 71, at: 60, df: 106, sa: 121, sd: 80, sp: 70 },
        weightkg: 2.2,
        abilities: { 0: 'Hospitality' },
        otherFormes: ['Sinistcha-Masterpiece'],
        gender: 'N'
    },
    'Sinistcha-Masterpiece': {
        types: ['Grass', 'Ghost'],
        bs: { hp: 71, at: 60, df: 106, sa: 121, sd: 80, sp: 70 },
        weightkg: 2.2,
        abilities: { 0: 'Hospitality' },
        gender: 'N',
        baseSpecies: 'Sinistcha'
    },
    Skeledirge: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 104, at: 75, df: 100, sa: 110, sd: 75, sp: 66 },
        weightkg: 326.5,
        abilities: { 0: 'Blaze' }
    },
    'Slither Wing': {
        types: ['Bug', 'Fighting'],
        bs: { hp: 85, at: 135, df: 79, sa: 85, sd: 105, sp: 81 },
        weightkg: 92,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Smoliv: {
        types: ['Grass', 'Normal'],
        bs: { hp: 41, at: 35, df: 45, sa: 58, sd: 51, sp: 30 },
        weightkg: 6.5,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Spidops: {
        types: ['Bug'],
        bs: { hp: 60, at: 79, df: 92, sa: 52, sd: 86, sp: 35 },
        weightkg: 16.5,
        abilities: { 0: 'Insomnia' }
    },
    Sprigatito: {
        types: ['Grass'],
        bs: { hp: 40, at: 61, df: 54, sa: 45, sd: 45, sp: 65 },
        weightkg: 4.1,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Squawkabilly: {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        otherFormes: ['Squawkabilly-Blue', 'Squawkabilly-White', 'Squawkabilly-Yellow']
    },
    'Squawkabilly-Blue': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    'Squawkabilly-White': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    'Squawkabilly-Yellow': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    Tadbulb: {
        types: ['Electric'],
        bs: { hp: 61, at: 31, df: 41, sa: 59, sd: 35, sp: 45 },
        weightkg: 0.4,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Tandemaus: {
        types: ['Normal'],
        bs: { hp: 50, at: 50, df: 45, sa: 40, sd: 45, sp: 75 },
        weightkg: 1.8,
        gender: 'N',
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Tarountula: {
        types: ['Bug'],
        bs: { hp: 35, at: 41, df: 45, sa: 29, sd: 40, sp: 20 },
        weightkg: 4,
        abilities: { 0: 'Insomnia' },
        nfe: true
    },
    Tatsugiri: {
        types: ['Dragon', 'Water'],
        bs: { hp: 68, at: 50, df: 60, sa: 120, sd: 95, sp: 82 },
        weightkg: 8,
        abilities: { 0: 'Commander' }
    },
    'Tauros-Paldea-Aqua': {
        types: ['Fighting', 'Water'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 110,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Blaze': {
        types: ['Fighting', 'Fire'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 85,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Combat': {
        types: ['Fighting'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 115,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Terapagos': {
        types: ['Normal'],
        bs: { hp: 90, at: 65, df: 85, sa: 65, sd: 85, sp: 60 },
        weightkg: 6.5,
        abilities: { 0: 'Tera Shift' },
        otherFormes: ['Terapagos-Stellar', 'Terapagos-Terastal']
    },
    'Terapagos-Stellar': {
        types: ['Normal'],
        bs: { hp: 160, at: 105, df: 110, sa: 130, sd: 110, sp: 85 },
        weightkg: 77,
        abilities: { 0: 'Teraform Zero' },
        baseSpecies: 'Terapagos'
    },
    'Terapagos-Terastal': {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 110, sa: 105, sd: 110, sp: 85 },
        weightkg: 16,
        abilities: { 0: 'Tera Shell' },
        baseSpecies: 'Terapagos'
    },
    'Ting-Lu': {
        types: ['Dark', 'Ground'],
        bs: { hp: 155, at: 110, df: 125, sa: 55, sd: 80, sp: 45 },
        weightkg: 699.7,
        gender: 'N',
        abilities: { 0: 'Vessel of Ruin' }
    },
    Tinkatink: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 64, sp: 58 },
        weightkg: 8.9,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Tinkaton: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 85, at: 75, df: 77, sa: 70, sd: 105, sp: 94 },
        weightkg: 112.8,
        abilities: { 0: 'Mold Breaker' }
    },
    Tinkatuff: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 65, at: 55, df: 55, sa: 45, sd: 82, sp: 78 },
        weightkg: 59.1,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Toedscool: {
        types: ['Ground', 'Grass'],
        bs: { hp: 40, at: 40, df: 35, sa: 50, sd: 100, sp: 70 },
        weightkg: 33,
        abilities: { 0: 'Mycelium Might' },
        nfe: true
    },
    Toedscruel: {
        types: ['Ground', 'Grass'],
        bs: { hp: 80, at: 70, df: 65, sa: 80, sd: 120, sp: 100 },
        weightkg: 58,
        abilities: { 0: 'Mycelium Might' }
    },
    'Ursaluna': {
        otherFormes: ['Ursaluna-Bloodmoon']
    },
    'Ursaluna-Bloodmoon': {
        types: ['Ground', 'Normal'],
        bs: { hp: 113, at: 70, df: 120, sa: 135, sd: 65, sp: 52 },
        weightkg: 333,
        abilities: { 0: 'Mind\'s Eye' },
        baseSpecies: 'Ursaluna'
    },
    Varoom: {
        types: ['Steel', 'Poison'],
        bs: { hp: 45, at: 70, df: 63, sa: 30, sd: 45, sp: 47 },
        weightkg: 35,
        abilities: { 0: 'Overcoat' },
        nfe: true
    },
    Veluza: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 102, df: 73, sa: 78, sd: 65, sp: 70 },
        weightkg: 90,
        abilities: { 0: 'Mold Breaker' }
    },
    'Walking Wake': {
        types: ['Water', 'Dragon'],
        bs: { hp: 99, at: 83, df: 91, sa: 125, sd: 83, sp: 109 },
        weightkg: 280,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Wattrel: {
        types: ['Electric', 'Flying'],
        bs: { hp: 40, at: 40, df: 35, sa: 55, sd: 40, sp: 70 },
        weightkg: 3.6,
        abilities: { 0: 'Wind Power' },
        nfe: true
    },
    Wiglett: {
        types: ['Water'],
        bs: { hp: 10, at: 55, df: 25, sa: 35, sd: 25, sp: 95 },
        weightkg: 1.8,
        abilities: { 0: 'Gooey' },
        nfe: true
    },
    'Wo-Chien': {
        types: ['Dark', 'Grass'],
        bs: { hp: 85, at: 85, df: 100, sa: 95, sd: 135, sp: 70 },
        weightkg: 74.2,
        gender: 'N',
        abilities: { 0: 'Tablets of Ruin' }
    },
    'Wooper-Paldea': {
        types: ['Poison', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 11,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Wooper',
        nfe: true
    },
    Wugtrio: {
        types: ['Water'],
        bs: { hp: 35, at: 100, df: 50, sa: 50, sd: 70, sp: 120 },
        weightkg: 5.4,
        abilities: { 0: 'Gooey' }
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH, PLA_PATCH);
exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
exports.HACK_SPECIES = [{}, EK];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = SPECIES_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = 'Species';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        var baseStats = {};
        baseStats.hp = data.bs.hp;
        baseStats.atk = data.bs.at;
        baseStats.def = data.bs.df;
        baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
        baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
        baseStats.spe = data.bs.sp;
        this.baseStats = baseStats;
        if (data.otherFormes) {
            this.otherFormes = data.otherFormes;
            if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
                this.otherFormes = this.otherFormes.filter(function (f) { return !f.endsWith('-Gmax'); });
                if (!this.otherFormes.length)
                    this.otherFormes = undefined;
                if (this.otherFormes)
                    this.otherFormes = __spreadArray([], __read(new Set(this.otherFormes)), false);
            }
        }
        (0, util_1.assignWithout)(this, data, Specie.EXCLUDE);
    }
    Specie.EXCLUDE = new Set(['bs', 'otherFormes']);
    return Specie;
}());
var SPECIES_BY_ID = [];
var gen = 0;
try {
    for (var SPECIES_1 = __values(exports.SPECIES), SPECIES_1_1 = SPECIES_1.next(); !SPECIES_1_1.done; SPECIES_1_1 = SPECIES_1.next()) {
        var species = SPECIES_1_1.value;
        var map = {};
        for (var specie in species) {
            if (gen >= 2 && species[specie].bs.sl)
                delete species[specie].bs.sl;
            var m = new Specie(specie, species[specie]);
            map[m.id] = m;
        }
        SPECIES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (SPECIES_1_1 && !SPECIES_1_1.done && (_a = SPECIES_1["return"])) _a.call(SPECIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=species.js.map