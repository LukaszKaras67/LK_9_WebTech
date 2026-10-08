function CourseCard() {
   const course = {
        name: "React",
        teacher:"Rafał",
        hours: 30,
        completed: true

    };
    const technologie = [
  {
    id: 1,
    name: "Łukasz",
    category: "kategoria2"
  },
  {
    id: 2,
    name: "Kazimierz",
    category: "kategoria2"
  }
];
     return (
    <section>
        <h2>{course.name}</h2>
        <p>{course.teacher}</p>
        <p>{course.hours * 60} minut</p>
        <p>{course.completed}</p>

        <h2>Dodatkowe 3</h2>
        <p>{technologie[0].id}</p>
        <p>{technologie[1].name}</p>
        <p>{technologie[1].category}</p>
    </section>
  );

}
export default CourseCard