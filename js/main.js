const DESCRIPTION = [
  'Наш отель',
  'Уже близко!',
  'Вид как в фильмах!',
  'Ура отпуск!',
  'Даже есть жалко...',
  'Прикольное такси',
  'Кажется меня обманули...',
  'Морсик)',
  'Низко летят',
  'Прикольно',
  'Коридорчик к морю',
  'Не БМВ, но тоже ничего',
  'Мммм',
  'Подумой! Не ешь',
  'Правильная обувь для нашей зимы!',
  'На перегонки',
  'Услада для ушей',
  'Классика',
  'Ножной жор теперь удобнее',
  'Ууу пальмочкиии',
  '...еще и вкусно',
  'Поймал!!!',
  'Мистер крабс!',
  '<3',
  'Страшно..'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артем',
  'Генадий',
  'Александр',
  'Таня',
  'Даша',
  'Максим',
  'Маша',
  'Саша',
  'Гоша',
  'Арсений',
  'Миша',
  'Женя',
];

let commentId = 0;

const getCommentId = () => {
  commentId++;
  return commentId;
};
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

function createComments() {
  const commentsArray = [];
  const commentsCount = getRandomPositiveInteger(1, 3);

  for (let i = 1; i <= commentsCount; i++) {
    const comment = {
      id: getCommentId(),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.jpg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    };
    commentsArray.push(comment);
  }
  return commentsArray;
}
const posts = [];
const createPost = (postsCount) => {
  for (let i = 0; i < postsCount; i++) {

    const post = {
      id: i + 1,
      url: `photos/${i+1}.jpg`,
      description: DESCRIPTION[i],
      likes: getRandomPositiveInteger(15, 200),
      comments: createComments()
    };
    posts.push(post);
  }
};
createPost(25);

function checkString(comment, maxLength) {
  return comment.length <= maxLength;
}
checkString(MESSAGES[1], 20);
