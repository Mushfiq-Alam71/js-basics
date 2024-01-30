let books = ["kaizen", "the archemist", "psychology and money"];
let hasBook = books.includes("kaizens", "the archemists");

if (hasBook == true) {
  console.log("Mentioned bookes are present in the queue");
} else {
  console.log("Mentioned bookes are not present in the queue");
}
