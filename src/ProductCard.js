function Productcard({ title, price, image, rating }) {
  console.log(rating);
  return (
    <div className="card">
      <img src={image} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{rating.rate}</p>
    </div>
  );
}
export default Productcard;
