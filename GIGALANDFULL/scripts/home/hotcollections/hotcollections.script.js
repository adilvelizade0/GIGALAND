const hotCollections = [
  {
    Name: "Papercut",
    imgSrc: "../assets/home/hotcollections/imgs/coll-6.jpg",
    authorSrc: "../assets/home/hotcollections/imgs/author-6.jpg",
    ercCode: "ERC-42",
  },
  {
    Name: "VIRTULAND",
    imgSrc: "../assets/home/hotcollections/imgs/coll-5.jpg",
    authorSrc: "../assets/home/hotcollections/imgs/author-5.jpg",
    ercCode: "ERC-85",
  },
  {
    Name: "CARTOONISM",
    imgSrc: "../assets/home/hotcollections/imgs/coll-4.jpg",
    authorSrc: "../assets/home/hotcollections/imgs/author-4.jpg",
    ercCode: "ERC-73",
  },
  {
    Name: "SKECTHIFY",
    imgSrc: "../assets/home/hotcollections/imgs/coll-3.jpg",
    authorSrc: "../assets/home/hotcollections/imgs/author-3.jpg",
    ercCode: "ERC-126",
  },
  {
    Name: "PATTERNLICIOUS",
    imgSrc: "../assets/home/hotcollections/imgs/coll-2.jpg",
    authorSrc: "../assets/home/hotcollections/imgs/author-2.jpg",
    ercCode: "ERC-61",
  },
  {
    Name: "ABSTRACTION",
    imgSrc: "../assets/home/hotcollections/imgs/coll-1.jpg",
    authorSrc: "../assets/home/hotcollections/imgs/author-1.jpg",
    ercCode: "ERC-192",
  },
];

hotCollections.forEach((collection) => {
  document.querySelector(".collection-swiper-wrapper").innerHTML += `
    <div class="swiper-slide">
                <div class="nft_coll">
                  <div class="nft_wrap">
                    <a href="#">
                      <img
                        src="${collection.imgSrc}"
                        alt="coll"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="nft_coll_pp">
                    <a href="#">
                      <img
                        src="${collection.authorSrc}"
                        class="img-fluid"
                        alt="author"
                      />
                    </a>
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="nft_coll_info p-2">
                    <a href="#" class="text-decoration-none">
                      <h4>${collection.Name}</h4>
                    </a>
                    <span>${collection.ercCode}</span>
                  </div>
                </div>
    </div>
`;
});
