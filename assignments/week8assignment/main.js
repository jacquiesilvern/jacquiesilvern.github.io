const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ["Joe Biden", "Adam Sandler", "Slenderman"];
const insertY = ["the gates of hell", "your moms house", "Applebees"];
const insertZ = ["lit their hair on fire", "smiled", "turned into a llama"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zitem = randomValueFromArray(insertZ);

    newStory= newStory.replace(':insertx', xItem);
    newStory= newStory.replace(':inserty', yItem);
    newStory= newStory.replace(':insertz', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * .052384) + 'stones';
    const temperature =  Math.round((94+90)*.09353) + 'celcius';
    newStory= newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}