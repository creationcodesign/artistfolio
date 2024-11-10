import useSkillsSection from "../../../hooks/useSkillsSection";

export default function SkillsSection() {
  const { skillsData, loading } = useSkillsSection();

  if (!skillsData || loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="skills-section section" id="skills">
      <div className="skills-content">
        <h2 className="section-title">{skillsData?.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: skillsData?.text }}
        />
      </div>
      <div className="tools">
        {skillsData?.skills.map((skill, index) => (
          <span className="tag" key={index}>{skill}</span>
        ))}
      </div>
    </div>
  )
}