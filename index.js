// code your solution here

const superbowlWin = (records) => {
  let Winner = records.find((record) => record.result === "W");

  if (Winner) {
    return Winner.year;
  }
};
