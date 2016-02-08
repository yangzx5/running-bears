/**
 * Created by Administrator on 2016/2/8 0008.
 */

var DataAccessLayer = cc.Class.extend({
    winSize : null,
    pixelsPerUnit : 0.0,
    winSizeInUnits : null,
    spriteSize : null,
    quietSpeed : null,
    normalSpeed : null,
    mediumSpeed : null,
    hardSpeed : null,
    emergenceNumberPerUnitTime : null,
    hangTime : null,
    score : null,
    hp : null,
    captureProbability : null,
    damage : null,
    scoreConsumption : null,
    requiredRank : null,
    ctor : function(spriteSize,quietSpeed,normalSpeed,mediumSpeed,hardSpeed,emergenceNumberPerUnitTime,hangTime,score,hp,captureProbability,damage,scoreConsumption,requiredRank) {
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
    },
    deepCopy : function(source){
        var result={};
        for (var key in source) {
            result[key] = typeof source[key] == 'object' ? this.deepCopy(source[key]) : source[key];
        }
        return result;
    },
    unitsToPixels : function(source){
        var result={};
        for (var key in source) {
            result[key] = typeof source[key] == 'object' ? this.unitsToPixels(source[key]) : Math.round(source[key]*this.pixelsPerUnit);
        }
        return result;
    }
});

var data = null;
if (USING_DEFAULT_SPEED)
    data = new DataAccessLayer(SpriteSize,QuietSpeed.DEFAULT,NormalSpeed.DEFAULT,MediumSpeed.DEFAULT,HardSpeed.DEFAULT,EmergenceNumberPerUnitTime,HangTime,Score,Hp,CaptureProbability,Damage,ScoreConsumption,RequiredRank);
else
    data = new DataAccessLayer(SpriteSize,QuietSpeed.SETTING,NormalSpeed.SETTING,MediumSpeed.SETTING,HardSpeed.SETTING,EmergenceNumberPerUnitTime,HangTime,Score,Hp,CaptureProbability,Damage,ScoreConsumption,RequiredRank);
