const Card = ({ icon, title, description }) => {
  return (
    <div className="card"> {/* On utilise la classe .card du CSS */}
      <i className={`fas ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};