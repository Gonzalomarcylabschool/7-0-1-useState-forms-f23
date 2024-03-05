const InstagramPost = ({ picture }) => {

  let likes = 0;

  const handleClick = {

  }

  return (
    <div className="insta-pic">
      <img alt={picture.caption} src={picture.src} />
      <p>{picture.caption}</p>
      <button onClick={handleClick}>❤️ {likes}</button>
    </div>
  );
};

export default InstagramPost;