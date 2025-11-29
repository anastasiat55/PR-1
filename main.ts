// Практична 1: Типи та змінні
let studentName: string = "Анастасія";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// Практична 2: Функції з типами
function greet(name: string): string {
  return `Привіт, ${name}!`;
}
console.log(greet(studentName));

// Практична 3: Масиви та об'єкти
type Course = {
  id: number;
  title: string;
  credits: number;
};

const courses: Course[] = [
  { id: 1, title: "Математика", credits: 3 },
  { id: 2, title: "Історія", credits: 2 },
];

// Практична 4: Enum та умовна логіка
enum Grade {
  Excellent,
  Good,
  Satisfactory,
  Fail,
}

function getGradeMessage(grade: Grade): string {
  switch (grade) {
    case Grade.Excellent:
      return "Відмінно!";
    case Grade.Good:
      return "Добре!";
    case Grade.Satisfactory:
      return "Задовільно.";
    case Grade.Fail:
      return "Не склав.";
  }
}
console.log(getGradeMessage(Grade.Good));

// Практична 5: DOM + події
const openBtn: HTMLElement | null = document.querySelector('.open-modal');
const modal: HTMLElement | null = document.querySelector('.modal');
const closeBtn: HTMLElement | null = document.querySelector('.close-modal');

openBtn?.addEventListener('click', () => modal?.classList.add('visible'));
closeBtn?.addEventListener('click', () => modal?.classList.remove('visible'));

// Практична 6: Fetch + типізація
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data: Post[]) => {
    const container = document.getElementById('posts');
    if (container) {
      data.slice(0, 5).forEach(post => {
        const div = document.createElement('div');
        div.class