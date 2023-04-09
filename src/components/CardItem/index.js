import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, className, imgUrl} = cardsList
  return (
    <li className={`${className} listCSS`}>
      <div className="content">
        <h1 className="cardTitle">{title}</h1>
        <p className="cardDescription">{description}</p>
        <img className="imageAlter" alt={title} src={imgUrl} />
      </div>
    </li>
  )
}

export default CardItem
