const apiKey =
  "dnJnd3JfOp4kLx1zZklPe6y5jmp0z-fAzgQ3zsAZfYcq9xgxXLenDvKZ_QdGzVPzsXL98SiEuniIMro8806sFp6iPG0Ygw5Y9W9FXTTR0KzyGd-4pibs1uFvQM_PXnYx";

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].alias,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};
