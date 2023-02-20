function printThisTitle() {
  console.log(this.title);
}

const courseA = {
  title: '프로그래밍 기초 in JavaScript',
  printTitle: printThisTitle,
};

const courseB = {
  title: '컴퓨터 개론',
  printTitle: courseA.printTitle,
};

console.log('====')

const getFullName = () => `${this.firstName} ${this.lastName}`;

const user = {
  firstName: 'Ted',
  lastName: 'Chang',
  getFullName: getFullName,
};

console.log(user.getFullName());