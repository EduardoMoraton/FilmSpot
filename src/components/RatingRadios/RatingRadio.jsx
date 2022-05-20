import './RaitingRadio.css'


export default function RaitingRadio({rating}){
  const ratingScore = rating * 10;
  const scoreClass = ratingScore < 40 ? "bad" : ratingScore < 65 ? "meh" : "good";
  const gradient = `conic-gradient(${ratingScore < 40 ? "#ff5555" : ratingScore < 65 ? "#ffb86c" : "#50fa7b"} ${ratingScore}%, transparent 0 100%)`;

  const GRADIENT_STYLE = {
      background: gradient,
  }
    let finalClass = ["rating", scoreClass].join(" ")

    return (
            <div style={GRADIENT_STYLE} className={finalClass}>
                <span>{rating}</span>
            </div>
    )
}