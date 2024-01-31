// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Magnus Mitbø',
      job: 'Climbing Youtuber/Professinal Climber',
      img: 'Magnus Mitbo.jpg',
      text: "Magnus Midtbø is a Norwegian professional rock climber known for his achievements in both indoor and outdoor climbing. Born on June 21, 1988, he has excelled in various climbing disciplines, including bouldering, lead climbing, and speed climbing. Magnus is also involved in sharing his climbing experiences through social media platforms and has garnered a significant following",
    },
    {
      id: 2,
      name: 'Adam Ondra',
      job: 'Professional Climber',
      img: 'Adam ondra.jpg',
      text: 'Adam Ondra is a highly accomplished professional rock climber from the Czech Republic. Born on February 5, 1993, he is widely regarded as the best climber in the world. Ondra has excelled in both indoor and outdoor climbing, with notable achievements in lead climbing, bouldering, and speed climbing. Adam Ondra also remains has the only person in the world to have climber Silence.',
    },
    {
      id: 3,
      name: 'Mori Buntarou',
      job: 'World class climber',
      img: 'Mori buntarou.webp',
      text: 'Mori Buntarou is a fictional character in the manga series "The Climber" by Shinchi Sakamoto. Through out the manga his journey starts when he discovers his passion for climbing in High school   to being an World Class climber Going through the different stages of his life dealing with loneliness, solo climbing, and depression, in pursuit of his dream, conquering the most difficult mountain, K2 East face.',
    },
    {
      id: 4,
      name: 'Alex Honnold',
      job: 'World class climber',
      img: 'Alex Honnold.jpg',
      text: "Alex Honnold is a renowned American rock climber known for his remarkable achievements in free solo climbing, which involves climbing without the use of ropes or protective gear. Born on August 17, 1985, in Sacramento, California, Honnold gained widespread recognition for his free solo ascent of El Capitan's Freerider route in Yosemite National Park in 2017. This accomplishment is considered one of the most significant milestones in the history of rock climbing.",
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });

// show initial person
  const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});

// show the last person
const goToEndBtn = document.querySelector('.end-btn');

goToEndBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});