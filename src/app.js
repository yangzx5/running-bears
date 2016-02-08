var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = data.winSize;
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.

        //var bear1_2 = ccs.load(res.Bear1_2_json);
        //var node = bear1_2.node;
        //var action = bear1_2.action;
        //node.runAction(action);
        //action.gotoFrameAndPlay(0,25,0,true);
        //node.runAction(action);
        //this.addChild(node);
        var bg = new cc.Sprite(res.Background);
        bg.x = size.width/2;
        bg.y = size.height/2;
        this.addChild(bg);

        var sprite = new cc.Sprite(res.Bear1_2_png);
        sprite.x = size.width/2;
        sprite.y = size.height/2;
        this.addChild(sprite);

        var contentSize = sprite.getContentSize();
        var scaleFactor = data.spriteSize.BIG_ONE_WIDTH/contentSize.width;
        sprite.scale = scaleFactor;

        var animation = new cc.Animation();
        for(var i=0;i<6;i++)
        {
            var spriteFrame = new cc.SpriteFrame(g_resources[i],cc.rect(0,0,573,504));
            animation.addSpriteFrame(spriteFrame);
        }
        animation.setDelayPerUnit(0.15);
        animation.setRestoreOriginalFrame(true);
        var action = cc.animate(animation);
        var action1 = cc.repeat(action,4);
        var action2 = cc.moveBy(3.6,cc.p(500,0));
        var action3 = cc.spawn(action1,action2);
        sprite.runAction(action3);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

