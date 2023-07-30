import "./HeaderCard.scss";
const HeaderCard = ({ content, icon }) => {
  return (
    <div className="headerCard">
      {icon}
      <p>{content}</p>
    </div>
  )
}
export default HeaderCard;