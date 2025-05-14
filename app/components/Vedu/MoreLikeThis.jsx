export function MoreLikeThis() {
  const similarContent = [
    // {
    //   id: "chaukdi-yaaran-di",
    //   title: "Chaukdi Yaaran Di",
    //   posterUrl: "https://i.imgur.com/sample1.jpg",
    //   rating: 8.0,
    //   language: "PUNJABI",
    // },
    {
      id: 1,
      title: "Barbarosa",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      slug: "barbarosa",
      rating: 8.0,
      language: "ENGLISH",
      count: 23,
    },
    {
      id: 2,
      title: "Ertgrul",
      image:
        "https://i.pinimg.com/736x/04/12/31/041231239378b53e1b58789165089ea2.jpg",
      slug: "ertgrul",
      rating: 8.0,
      count: 23,
    },
    {
      id: 3,
      title: "Yunus Emre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkj9dfGjEzm2WJiabQ3RmZvnfbSogo1_kZOA&s",
      slug: "yunus-emre",
      rating: 8.0,
      count: 4,
    },
    {
      id: 4,
      title: "Sultan Fatih",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IAFxtO549vqYMonuNwNFSp3rlWf0FGl4SA&s",
      slug: "sultan-fatih",
      rating: 8.0,

      count: 10,
    },
    {
      id: 5,
      title: "Sultan Fatih",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IAFxtO549vqYMonuNwNFSp3rlWf0FGl4SA&s",
      slug: "sultan-fatih",
      count: 42,
      rating: 8.0,
    },
    {
      id: 6,
      title: "Sultan Abdul Hamid",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/source/c612e650556379.58d36c1643d2a.jpg",
      slug: "sultan-abdul-hamid",
      rating: 8.0,

      count: 35,
    },
    {
      id: 7,
      title: "Mehmat",
      image:
        "https://i.pinimg.com/736x/19/33/df/1933dfaeaac91773c9c505ecd8904457.jpg",
      slug: "mehmat",
      rating: 8.0,

      count: 28,
    },
    {
      id: 8,
      title: "Alp Arsalan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZm8OWAO0UcM73b4AfjlzF2oNOPiqsBP7tKg&s",
      slug: "alp-arsalan",
      rating: 8.0,

      count: 50,
    },
  ];

  return (
    <section className="mt-6 px-4 pb-16">
      <h2 className="text-white font-bold text-base mb-3">More like this</h2>

      <div className="grid grid-cols-2 gap-3">
        {similarContent.map((item) => (
          <div key={item.id} className="relative">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[2/3] object-cover rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/160x240?text=Movie";
                }}
              />
              {item.language && (
                <div className="absolute top-1 left-1 bg-blue-500 text-white text-[8px] px-1 py-0.5 rounded">
                  {item.language}
                </div>
              )}
              <div className="absolute bottom-1 right-1 flex items-center bg-black/70 px-1 rounded text-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-yellow-500 mr-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {item.rating}
              </div>
            </div>
            <div className="mt-1 text-xs text-white truncate">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
