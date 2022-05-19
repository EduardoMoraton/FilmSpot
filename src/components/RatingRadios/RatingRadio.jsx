import './RaitingRadio.css'


export default function RaitingRadio({rating}){
  const ratingContent = rating;
  const ratingScore = rating * 10;
  const scoreClass = ratingScore < 40 ? "bad" : ratingScore < 65 ? "meh" : "good";

  const gradient = `conic-gradient(${ratingScore < 40 ? "#e74c3c" : ratingScore < 65 ? "#f1c40f" : "#27ae60"} ${ratingScore}%, transparent 0 100%)`;

  const GRADIENT_STYLE = {
      background: gradient,
  }
    let finalClass = ["rating", scoreClass].join(" ")

    return (
        <>
            <div style={GRADIENT_STYLE} className={finalClass}>
                <span>{rating}</span>
            </div>
        </>
    )
}