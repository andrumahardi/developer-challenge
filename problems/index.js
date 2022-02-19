"use strict";
function findJudge(trust) {
    if (typeof trust !== typeof "string")
        return -1;
    const convertToArray = trust.split(", ");
    let trusting = [];
    let trusted = [];
    convertToArray.forEach((str) => {
        if (typeof trust !== typeof "string")
            return;
        const trustInto = str.split(" ");
        if (!Boolean(trustInto[0]) || trustInto.length < 2)
            return;
        trusting.push(trustInto[0]);
        trusted.push(trustInto[1]);
    });
    let suspectedJudges = [];
    trusted.forEach((person, i) => {
        if (!trusting.includes(person)) {
            if (i === 0)
                suspectedJudges.push(+person);
            else if (!suspectedJudges.includes(+person)) {
                suspectedJudges.push(+person);
            }
        }
    });
    return suspectedJudges[0] || -1;
}
[
    "1 2",
    "1 3, 2 3",
    "1 3, 2 3, 3 1",
    "1 2, 2 3",
    "1 3, 1 4, 2 3, 2 4, 4 3",
    "",
    "    ",
].forEach((trust) => console.log(findJudge(trust)));
