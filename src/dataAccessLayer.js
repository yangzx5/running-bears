/**
 * Created by Administrator on 2016/2/8 0008.
 */

var DataAccessLayer = cc.Class.extend({
    // the size of the window in pixels
    winSize : null,
    // pixels per unit
    pixelsPerUnit : 0.0,
    // the size of the window in units
    winSizeInUnits : null,
    // the size of all the preys (sprites)
    spriteSize : null,
    // the speed of preys in quiet scenario
    quietSpeed : null,
    // the speed of preys in normal scenario
    normalSpeed : null,
    // the speed of preys in medium scenario
    mediumSpeed : null,
    // the speed of preys in hard scenario
    hardSpeed : null,
    // the emergence number of preys in one unit time in different scenarios
    emergenceNumberPerUnitTime : null,
    // the hang time of the fruits in the trees
    hangTime : null,
    // the score that the player get from different preys
    score : null,
    // the HP of different preys
    hp : null,
    // the capture probability of different preys
    captureProbability : null,
    // the damage of different kinds of nets
    damage : null,
    // the score consumption of different kinds of nets
    scoreConsumption : null,
    // the required rank of player when using different kinds of nets
    requiredRank : null,
    // the speed of different kinds of nets
    netSpeed : null,
    ctor : function(spriteSize,quietSpeed,normalSpeed,mediumSpeed,hardSpeed,emergenceNumberPerUnitTime,hangTime,score,hp,captureProbability,damage,scoreConsumption,requiredRank,netSpeed) {
        this.winSize = cc.director.getWinSize();
        this.pixelsPerUnit = this.winSize.width/WIDTH_UNITS;
        this.winSizeInUnits = {
            width : WIDTH_UNITS,
            height : this.winSize.height/this.pixelsPerUnit
        };
        this.spriteSize = this.unitsToPixels(spriteSize);
        this.quietSpeed = this.unitsToPixels(quietSpeed);
        this.normalSpeed = this.unitsToPixels(normalSpeed);
        this.mediumSpeed = this.unitsToPixels(mediumSpeed);
        this.hardSpeed = this.unitsToPixels(hardSpeed);
        this.emergenceNumberPerUnitTime = this.deepCopy(emergenceNumberPerUnitTime);
        this.hangTime = this.deepCopy(hangTime);
        this.score = this.deepCopy(score);
        this.hp = this.deepCopy(hp);
        this.captureProbability = this.deepCopy(captureProbability);
        this.damage = this.deepCopy(damage);
        this.scoreConsumption = this.deepCopy(scoreConsumption);
        this.requiredRank = this.deepCopy(requiredRank);
        this.netSpeed = this.unitsToPixels(netSpeed);
    },
    // deep copy of an object
    deepCopy : function(source){
        var result={};
        for (var key in source) {
            result[key] = typeof source[key] == 'object' ? this.deepCopy(source[key]) : source[key];
        }
        return result;
    },
    // build an object, whose values are expressed in pixels, from "source" object, whose values are expressed in units
    unitsToPixels : function(source){
        var result={};
        for (var key in source) {
            result[key] = typeof source[key] == 'object' ? this.unitsToPixels(source[key]) : Math.round(source[key]*this.pixelsPerUnit);
        }
        return result;
    }
});
// instantiation of dataAccessLayer
var data = null;
if (USING_DEFAULT_SPEED)
    data = new DataAccessLayer(SpriteSize,QuietSpeed.DEFAULT,NormalSpeed.DEFAULT,MediumSpeed.DEFAULT,HardSpeed.DEFAULT,EmergenceNumberPerUnitTime,HangTime,Score,Hp,CaptureProbability,Damage,ScoreConsumption,RequiredRank,NetSpeed);
else
    data = new DataAccessLayer(SpriteSize,QuietSpeed.SETTING,NormalSpeed.SETTING,MediumSpeed.SETTING,HardSpeed.SETTING,EmergenceNumberPerUnitTime,HangTime,Score,Hp,CaptureProbability,Damage,ScoreConsumption,RequiredRank,NetSpeed);
