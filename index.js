const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (namesArray, sortAscendDescend)  => {
  let arraySorted = sortAscendDescend(namesArray); //invoke hasil function sortAscending/sortDescending ke dalam var arraySorted
  let arrayNew = [];
  for (let index = 0; index < namesArray.length; index++) {
    let dataNew = (index + 1).toString() + ". " + arraySorted[index];
    arrayNew.push(dataNew);
  }
  return arrayNew;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (namesArray)  => {
  return namesArray.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (namesArray) =>  {
  return namesArray.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
