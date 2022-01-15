//HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.

// On the first day, half of those 5 people (i.e.,2 ) like the advertisement and each shares it with 3 of their friends. At the beginning of the second day,  people receive the advertisement.

// Each day, half of the recipients like the advertisement and will share it with  friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day .


function viralAdvertisement(days) {
  let count = 0;
  let shared = 5;
  let liked = 0;

  for (var i = 0; i < days; i++) {
    liked = Math.floor(shared / 2);
    shared = liked * 3;
    count += liked;
  }

  return count;
}

console.log(viralAdvertisement(4))