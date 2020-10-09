const router = require('express').Router();

router.get('/bubbles_gen', async (req, res) => {
    let bubbles = [[], [], []];
    let used = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < getRandomInt(1, 6); j++) {
            let flag = false;
            while (!flag) {
                const temp = getRandomInt(0, 18);
                if (!used.includes(temp) || temp === 0) {
                    if (temp !== 0) used.push(temp)
                    bubbles[i].push(`${temp}`);
                    flag = true
                }
            }
        }
    }
    let sum = 0;
    for (let i = 0; i < bubbles.length; i++) {
        for (let j = 0; j < bubbles[i].length; j++) {
            if(bubbles[i][j]!=='0') sum++;
        }
    }
    let arrows = []

    for (let i = 0; i < (sum - 1); i++) {
        let flag = false
        while (!flag) {
            let a = used[getRandomInt(0, used.length)];
            let b = used[getRandomInt(0, used.length)];
            let tempA = 0;
            let tempB = 0;
            for (let j = 0; j < arrows.length; j++) {
                if (arrows[j].filter(x => x === a).length > 0) tempA++;
                if (arrows[j].filter(x => x === b).length > 0) tempB++;
            }
            if (tempA < 2) {
                if (tempB < 2) {
                    if(a!==b){
                        arrows.push([a, b]);
                        flag = true;
                    }
                }
            }
        }
    }
    return res.json({bubbles, arrows}).status(200).end()
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

module.exports.router = router;
