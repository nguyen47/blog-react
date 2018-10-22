import * as genresAPI from './fakeGenreService';

const blogs = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    title: 'Linux.org',
    genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Linux' },
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat velit tortor, quis finibus ligula accumsan a. Etiam lacinia diam libero, congue sagittis nisl aliquet sit amet. Proin a malesuada ante. Vivamus ut sodales erat, quis sollicitudin nibh. Donec sed turpis at sem tincidunt lobortis vitae vel ligula. Morbi condimentum egestas orci non viverra. Sed gravida eget lorem et posuere. Vivamus in libero posuere arcu varius pharetra vel a libero. Pellentesque in feugiat augue. Pellentesque vel condimentum eros. Morbi maximus, ante consequat molestie finibus, nulla enim varius massa, sed mollis eros massa ut nibh. Praesent non molestie mauris. Curabitur quis mauris dui. Quisque iaculis, ipsum sed suscipit porta, mi tortor facilisis mi, et tincidunt nibh metus et massa. Vestibulum sit amet nisi in dolor ornare luctus ac eu risus. Proin aliquam porttitor suscipit. ',
    rating: 2.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: true
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    title: 'The Linux Kernel Archives',
    genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Linux' },
    description:
      ' Sed tempor sagittis urna, quis imperdiet eros congue vel. Ut interdum maximus est, eu feugiat nulla lacinia vitae. Curabitur in pulvinar nulla. Aenean eget eros sapien. Duis placerat dui a elementum sagittis. Donec scelerisque egestas lorem eget efficitur. Fusce tristique id dolor quis condimentum. ',
    rating: 2.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: true
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    title: 'React – A JavaScript library for building user interfaces',
    genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'ReactJS' },
    description:
      ' Maecenas euismod pretium velit a convallis. Phasellus neque massa, vestibulum ut felis sit amet, iaculis pellentesque risus. Donec pulvinar cursus dui at tincidunt. Mauris eleifend massa eget odio dictum auctor. Proin id erat sit amet justo viverra egestas. Curabitur sed quam id ipsum placerat consequat. Cras facilisis sodales risus ut mollis. Pellentesque enim neque, hendrerit tempor neque at, convallis blandit lorem. Suspendisse mattis, urna a molestie laoreet, ante elit finibus quam, et convallis eros risus et sapien. Morbi iaculis ultricies rutrum. ',
    rating: 3.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: false
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    title: 'Node.js Foundation',
    genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'NodeJS' },
    description:
      ' Maecenas a rhoncus nibh. Nulla pretium sed nisi eget eleifend. Proin orci sapien, congue et ex sed, vehicula viverra ipsum. Nullam dictum, massa non aliquam viverra, ligula nisl dignissim justo, vitae euismod magna nisi id neque. Integer at tellus tristique lectus dapibus egestas. Aliquam mattis sed ligula quis porttitor. Nullam eget viverra purus. Praesent venenatis quam velit, in venenatis turpis malesuada mattis. Proin congue ante sed est vestibulum, eget pellentesque mauris congue. ',
    rating: 3.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: true
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181a',
    title: 'Azure for Node.js developers',
    genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'NodeJS' },
    description:
      ' Phasellus tempus, orci volutpat fermentum finibus, libero purus luctus ligula, sed fringilla augue nulla nec risus. Curabitur ultrices velit eget dolor fermentum, in sagittis ipsum fringilla. Mauris lacinia, odio id finibus fringilla, risus augue suscipit magna, ac fringilla est metus eu justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex quam, finibus id vehicula non, lacinia in odio. Curabitur mattis, orci vitae suscipit sagittis, felis nisi hendrerit nibh, et mollis magna mauris in nulla. Sed in turpis nisi. Nulla eu fermentum leo. ',
    rating: 3.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: false
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181b',
    title: 'Node.js JavaScript runtime',
    genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'NodeJS' },
    description:
      ' Etiam facilisis mollis purus, ac vulputate lectus facilisis eget. In volutpat vitae nunc et mattis. Nam mattis augue et erat ornare feugiat a eget quam. Nulla tincidunt pulvinar lectus non condimentum. Quisque bibendum ultrices tellus, id malesuada eros auctor vitae. In quis felis pulvinar, finibus elit vitae, tincidunt enim. Morbi nunc odio, condimentum a velit in, lacinia placerat leo. Phasellus euismod, elit at posuere auctor, sem urna luctus libero, nec accumsan purus orci sit amet velit. Ut non mi sed enim pulvinar vestibulum sed eu velit. Maecenas ullamcorper, nibh ut iaculis luctus, dui nunc varius arcu, in aliquam felis magna sed orci. Nam massa turpis, vulputate ac ornare sed, dignissim in sem. ',
    rating: 3.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: false
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181e',
    title:
      'React.js: a better introduction to the most powerful UI library ever',
    genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'ReactJS' },
    description: 7,
    rating: 4.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: false
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181f',
    title: 'React.js cheatsheet',
    genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'ReactJS' },
    description:
      ' Integer suscipit, nisl eget interdum feugiat, purus nulla semper lacus, a tempus elit nulla lobortis quam. In vulputate scelerisque dignissim. Curabitur ligula dolor, posuere ac vestibulum interdum, semper ut nulla. Donec quis vehicula arcu. Vestibulum ullamcorper scelerisque commodo. Nullam sit amet quam pharetra, porttitor justo efficitur, tempor ligula. Etiam accumsan, felis non accumsan finibus, lectus eros aliquet nisi, ac cursus ipsum libero a felis. Morbi elementum suscipit arcu, quis malesuada eros ullamcorper eu. Fusce dignissim nibh quis eros hendrerit, quis tristique justo malesuada. Etiam tristique ex vitae sagittis congue. Etiam venenatis velit vitae rutrum interdum. Aliquam metus mi, maximus eget sodales sit amet, porttitor a felis. Vestibulum interdum eget arcu et hendrerit. Fusce vestibulum turpis nulla, non interdum libero aliquet in. ',
    rating: 3.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: true
  },
  {
    _id: '5b21ca3eeb7f6fbccd471821',
    title: 'What is Linux?',
    genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Linux' },
    description:
      ' Etiam ut magna est. Aliquam elit ligula, feugiat vel ante ut, commodo semper enim. Sed elementum magna id odio faucibus mollis. Mauris id quam ante. Ut a dui nec nulla faucibus porta. Sed et rutrum lacus. Nullam suscipit lorem ac lacus laoreet luctus ac ut ligula. Vestibulum quis leo porta, placerat est non, suscipit massa. Sed ultrices lacinia turpis, a ullamcorper dui porta sed. Cras at odio posuere, molestie enim vitae, porttitor leo. Nulla tempus pulvinar nisl, et molestie magna convallis sed. Nulla imperdiet quam quis diam tempor luctus. Duis laoreet aliquet arcu, volutpat semper purus consectetur eu. Donec dignissim, mauris at placerat sollicitudin, arcu ipsum accumsan felis, id aliquam justo magna ac tortor. Phasellus ac elit nec sapien vulputate consequat a et felis. Curabitur convallis vitae urna pharetra porttitor. ',
    rating: 3.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    like: true
  }
];

export function getBlogs() {
  return blogs;
}

export function getBlog(id) {
  return blogs.find((m) => m._id === id);
}

export function saveBlog(blog) {
  let blogInDb = blogs.find((m) => m._id === blog._id) || {};
  blogInDb.name = blog.name;
  blogInDb.genre = genresAPI.genres.find((g) => g._id === blog.genreId);
  blogInDb.description = blog.description;
  blogInDb.rating = blog.rating;

  if (!blogInDb._id) {
    blogInDb._id = Date.now();
    blogs.push(blogInDb);
  }

  return blogInDb;
}

export function deleteBlog(id) {
  let blogInDb = blogs.find((m) => m._id === id);
  blogs.splice(blogs.indexOf(blogInDb), 1);
  return blogInDb;
}
