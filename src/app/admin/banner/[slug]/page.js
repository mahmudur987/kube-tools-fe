const SingleBanner = ({ params }) => {
  console.log(params.slug);

  return <div>Single Banner{params.slug}</div>;
};

export default SingleBanner;
