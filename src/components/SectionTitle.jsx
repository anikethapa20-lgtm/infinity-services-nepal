export default function SectionTitle({
  eyebrow,
  title,
  text
}) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">
          {eyebrow}
        </span>

        <h2>
          {title}
        </h2>
      </div>

      {text && (
        <p>
          {text}
        </p>
      )}
    </div>
  )
}
