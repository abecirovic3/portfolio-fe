const Skills = ({skills}) => {
    return (
        <>
            <h1>Skills</h1>
            <div>
                {skills.map((skill) => ( <h3 key={skill.id}>{skill.description}</h3> ))}
            </div>
            <hr/>
        </>
    );
}

export default Skills;