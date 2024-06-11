/* exported getStudentNames */
interface students {
  name: string;
}

function getStudentNames(students: students[]): any {
  const names: string[] = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }

  return names;
}
