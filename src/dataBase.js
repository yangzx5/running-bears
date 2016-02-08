/**
 * Created by Administrator on 2016/2/7 0007.
 */

const WIDTH_UNITS = 192;
const SpriteSize ={
    BEAR : {
        WIDTH : 12.0,
        HEIGHT : 10.0
    },
    FRUIT : {
        WIDTH : 6.0,
        HEIGHT : 4.0
    }
};
const USING_DEFAULT_SPEED = true;
const DEFAULT_QUIET_SPEED = 25.0;
const DEFAULT_NORMAL_SPEED = 50.0;
const DEFAULT_MEDIUM_SPEED = 100.0;
const DEFAULT_HARD_SPEED = 200.0;
const QuietSpeed = {
    DEFAULT : {
        PEAR : DEFAULT_QUIET_SPEED,
        APPLE : DEFAULT_QUIET_SPEED,
        BANANA : DEFAULT_QUIET_SPEED,
        MELON : DEFAULT_QUIET_SPEED,
        SQUIRREL : DEFAULT_QUIET_SPEED,
        MONKEY : DEFAULT_QUIET_SPEED,
        SMALL_TWO : DEFAULT_QUIET_SPEED,
        SMALL_ONE : DEFAULT_QUIET_SPEED,
        BIG_TWO : DEFAULT_QUIET_SPEED,
        BIG_ONE : DEFAULT_QUIET_SPEED
    },
    SETTING : {
        PEAR : 25.0,
        APPLE : 25.0,
        BANANA : 25.0,
        MELON : 25.0,
        SQUIRREL : 25.0,
        MONKEY : 25.0,
        SMALL_TWO : 25.0,
        SMALL_ONE : 25.0,
        BIG_TWO : 25.0,
        BIG_ONE : 25.0
    }
};
const NormalSpeed = {
    DEFAULT : {
        PEAR : DEFAULT_NORMAL_SPEED,
        APPLE : DEFAULT_NORMAL_SPEED,
        BANANA : DEFAULT_NORMAL_SPEED,
        MELON : DEFAULT_NORMAL_SPEED,
        SQUIRREL : DEFAULT_NORMAL_SPEED,
        MONKEY : DEFAULT_NORMAL_SPEED,
        SMALL_TWO : DEFAULT_NORMAL_SPEED,
        SMALL_ONE : DEFAULT_NORMAL_SPEED,
        BIG_TWO : DEFAULT_NORMAL_SPEED,
        BIG_ONE : DEFAULT_NORMAL_SPEED
    },
    SETTING : {
        PEAR : 50.0,
        APPLE : 50.0,
        BANANA : 50.0,
        MELON : 50.0,
        SQUIRREL : 50.0,
        MONKEY : 50.0,
        SMALL_TWO : 50.0,
        SMALL_ONE : 50.0,
        BIG_TWO : 50.0,
        BIG_ONE : 50.0
    }
};
const MediumSpeed = {
    DEFAULT : {
        PEAR : DEFAULT_MEDIUM_SPEED,
        APPLE : DEFAULT_MEDIUM_SPEED,
        BANANA : DEFAULT_MEDIUM_SPEED,
        MELON : DEFAULT_MEDIUM_SPEED,
        SQUIRREL : DEFAULT_MEDIUM_SPEED,
        MONKEY : DEFAULT_MEDIUM_SPEED,
        SMALL_TWO : DEFAULT_MEDIUM_SPEED,
        SMALL_ONE : DEFAULT_MEDIUM_SPEED,
        BIG_TWO : DEFAULT_MEDIUM_SPEED,
        BIG_ONE : DEFAULT_MEDIUM_SPEED
    },
    SETTING : {
        PEAR : 100.0,
        APPLE : 100.0,
        BANANA : 100.0,
        MELON : 100.0,
        SQUIRREL : 100.0,
        MONKEY : 100.0,
        SMALL_TWO : 100.0,
        SMALL_ONE : 100.0,
        BIG_TWO : 100.0,
        BIG_ONE : 100.0
    }
};
const HardSpeed = {
    DEFAULT : {
        PEAR : DEFAULT_HARD_SPEED,
        APPLE : DEFAULT_HARD_SPEED,
        BANANA : DEFAULT_HARD_SPEED,
        MELON : DEFAULT_HARD_SPEED,
        SQUIRREL : DEFAULT_HARD_SPEED,
        MONKEY : DEFAULT_HARD_SPEED,
        SMALL_TWO : DEFAULT_HARD_SPEED,
        SMALL_ONE : DEFAULT_HARD_SPEED,
        BIG_TWO : DEFAULT_HARD_SPEED,
        BIG_ONE : DEFAULT_HARD_SPEED
    },
    SETTING : {
        PEAR : 200.0,
        APPLE : 200.0,
        BANANA : 200.0,
        MELON : 200.0,
        SQUIRREL : 200.0,
        MONKEY : 200.0,
        SMALL_TWO : 200.0,
        SMALL_ONE : 200.0,
        BIG_TWO : 200.0,
        BIG_ONE : 200.0
    }
};
const EmergenceNumberPerUnitTime = {
    Quiet : {
        FRUIT : 12,
        OTHER_ANIMAL : 4,
        BEAR : 3,
        PEAR : 4,
        APPLE : 3,
        BANANA : 2,
        MELON : 3,
        SQUIRREL : 1,
        MONKEY : 3,
        SMALL_TWO : 1,
        SMALL_ONE : 1,
        BIG_TWO : 1,
        BIG_ONE : 0
    },
    Normal : {
        FRUIT : 12,
        OTHER_ANIMAL : 4,
        BEAR : 3,
        Stage1 : {
            PEAR : 4,
            APPLE : 3,
            BANANA : 2,
            MELON : 3,
            SQUIRREL : 1,
            MONKEY : 3,
            SMALL_TWO : 1,
            SMALL_ONE : 1,
            BIG_TWO : 1,
            BIG_ONE : 0
        },
        Stage2 : {
            PEAR : 5,
            APPLE : 2,
            BANANA : 1,
            MELON : 1,
            SQUIRREL : 2,
            MONKEY : 2,
            SMALL_TWO : 2,
            SMALL_ONE : 2,
            BIG_TWO : 0,
            BIG_ONE : 0
        },
        Stage3 : {
            PEAR : 2,
            APPLE : 3,
            BANANA : 4,
            MELON : 3,
            SQUIRREL : 3,
            MONKEY : 1,
            SMALL_TWO : 1,
            SMALL_ONE : 2,
            BIG_TWO : 1,
            BIG_ONE : 0
        },
        Stage4 : {
            PEAR : 3,
            APPLE : 1,
            BANANA : 3,
            MELON : 5,
            SQUIRREL : 2,
            MONKEY : 2,
            SMALL_TWO : 0,
            SMALL_ONE : 2,
            BIG_TWO : 1,
            BIG_ONE : 1
        },
        Stage5 : {
            PEAR : 2,
            APPLE : 4,
            BANANA : 3,
            MELON : 3,
            SQUIRREL : 0,
            MONKEY : 4,
            SMALL_TWO : 1,
            SMALL_ONE : 1,
            BIG_TWO : 1,
            BIG_ONE : 1
        }
    },
    Medium : {
        FRUIT : 15,
        OTHER_ANIMAL : 6,
        BEAR : 4,
        Stage1 : {
            PEAR : 5,
            APPLE : 3,
            BANANA : 4,
            MELON : 3,
            SQUIRREL : 2,
            MONKEY : 4,
            SMALL_TWO : 2,
            SMALL_ONE : 1,
            BIG_TWO : 1,
            BIG_ONE : 0
        },
        Stage2 : {
            PEAR : 3,
            APPLE : 4,
            BANANA : 5,
            MELON : 3,
            SQUIRREL : 3,
            MONKEY : 3,
            SMALL_TWO : 0,
            SMALL_ONE : 3,
            BIG_TWO : 1,
            BIG_ONE : 0
        },
        Stage3 : {
            PEAR : 2,
            APPLE : 5,
            BANANA : 5,
            MELON : 3,
            SQUIRREL : 4,
            MONKEY : 2,
            SMALL_TWO : 2,
            SMALL_ONE : 0,
            BIG_TWO : 2,
            BIG_ONE : 1
        },
        Stage4 : {
            PEAR : 3,
            APPLE : 3,
            BANANA : 4,
            MELON : 5,
            SQUIRREL : 5,
            MONKEY : 1,
            SMALL_TWO : 1,
            SMALL_ONE : 2,
            BIG_TWO : 0,
            BIG_ONE : 1
        }
    },
    Hard : {
        FRUIT : 20,
        OTHER_ANIMAL : 8,
        BEAR : 6,
        Stage1 : {
            PEAR : 5,
            APPLE : 5,
            BANANA : 5,
            MELON : 5,
            SQUIRREL : 3,
            MONKEY : 5,
            SMALL_TWO : 2,
            SMALL_ONE : 3,
            BIG_TWO : 1,
            BIG_ONE : 0
        },
        Stage2 : {
            PEAR : 3,
            APPLE : 6,
            BANANA : 5,
            MELON : 6,
            SQUIRREL : 4,
            MONKEY : 2,
            SMALL_TWO : 3,
            SMALL_ONE : 2,
            BIG_TWO : 1,
            BIG_ONE : 0
        },
        Stage3 : {
            PEAR : 4,
            APPLE : 7,
            BANANA : 6,
            MELON : 3,
            SQUIRREL : 5,
            MONKEY : 3,
            SMALL_TWO : 2,
            SMALL_ONE : 1,
            BIG_TWO : 2,
            BIG_ONE : 1
        }
    }
};
const HangTime = {
    //ms
    PEAR : 30,
    APPLE : 30,
    BANANA : 20,
    MELON : 20
};
const Score = {
    PEAR : 5,
    APPLE : 5,
    BANANA : 10,
    MELON : 10,
    SQUIRREL : 20,
    MONKEY : 20,
    SMALL_TWO : 50,
    SMALL_ONE : 50,
    BIG_TWO : 100,
    BIG_ONE : 100
};
const Hp = {
    PEAR :1.0,
    APPLE : 1.0,
    BANANA : 1.0,
    MELON : 1.0,
    SQUIRREL : 2.0,
    MONKEY : 2.0,
    SMALL_TWO : 2.0,
    SMALL_ONE : 2.0,
    BIG_TWO : 3.0,
    BIG_ONE : 3.0
};
const CaptureProbability = {
    PEAR :1.0,
    APPLE : 1.0,
    BANANA : 1.0,
    MELON : 1.0,
    SQUIRREL : 1.0,
    MONKEY : 1.0,
    SMALL_TWO : 0.5,
    SMALL_ONE : 0.5,
    BIG_TWO : 0.2,
    BIG_ONE : 0.2
};
const Damage = {
    SMALL_NET : 2.0,
    MEDIUM_NET : 3.0,
    LARGE_NET : 5.0
};
const ScoreConsumption = {
    SMALL_NET : 2,
    MEDIUM_NET : 5,
    LARGE_NET : 10
};
const RequiredRank = {
    SMALL_NET : 1,
    MEDIUM_NET : 2,
    LARGE_NET : 4
};