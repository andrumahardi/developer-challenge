function findJudge(trust: string): number {
  if (typeof trust !== typeof "string") return -1

  const convertToArray: Array<string> = trust.split(", ")

  let trusting: Array<string> = []
  let trusted: Array<string> = []
  
  convertToArray.forEach((str: string) => {
    if (typeof trust !== typeof "string") return

    const trustInto: Array<string> = str.split(" ")
    if (!Boolean(trustInto[0]) || trustInto.length < 2) return

    trusting.push(trustInto[0])
    trusted.push(trustInto[1])
  })

  let suspectedJudges: Array<number> = []
  trusted.forEach((person: string, i: number): void => {
    if (!trusting.includes(person)) {
      if (i === 0) suspectedJudges.push(+person)
      else if (!suspectedJudges.includes(+person)) {
        suspectedJudges.push(+person)
      }
    }
  })

  return suspectedJudges[0] || -1
}


[
  "1 2",
  "1 3, 2 3",
  "1 3, 2 3, 3 1",
  "1 2, 2 3",
  "1 3, 1 4, 2 3, 2 4, 4 3",
  "",
  "    ",
].forEach((trust: string) => console.log(findJudge(trust)))