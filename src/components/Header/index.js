import HeaderCard from "./components";
import "./Header.scss";
import { headerData } from "./HeaderData";
const Header = () => {

  const renderCard = () => {
    return headerData.map((it, idx) => {
      return (
        <HeaderCard
          key={idx}
          content={it.content}
          icon={it.icon}
        />
      )
    })
  }

  return (
    <div className="header">
      {renderCard()}
    </div>
  )
}
export default Header;