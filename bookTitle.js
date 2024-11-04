const bookTitles = [
  "The Catcher in the Rye",
  "To Kill a Mockingbird",
  "1984",
  "Moby Dick",
  "Intermezzo",
];

const compareTitles = (books) => {
  const orderedBooks = {};

  for (title of books) {
    let count = 0;
    for (let i = 0; i < title.length; i++) {
      count += title.charCodeAt(i);
    }
    orderedBooks[title] = count;
  }
  const values = Object.entries(orderedBooks);

  const sortedValues = values.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < sortedValues.length; i++) {
    console.log(
      `The book ${sortedValues[i][0]} has a complexity of ${sortedValues[i][1]}.`
    );
  }
  return sortedValues;
};

setTimeout(() => compareTitles(bookTitles), 2000);
