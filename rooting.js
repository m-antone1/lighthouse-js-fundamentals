const judgeVegetable = function (vegetables, metric) {
  this.criteria = metric;
  let myArray = vegetables.sort(function (a, b) {
    return b[this.criteria] - a[this.criteria];
  });
  return myArray[0].submitter;
};
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)