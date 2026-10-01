function Student({name,className,specialization, age}) {
    return (
        <div>
            <p>Nazwa: {name}</p>
            <p>Klasa: {className}</p>
            <p>Specjalizacja: {specialization}</p>
            <p>Wiek: {age}</p>
        </div>
    )
}
export default Student;