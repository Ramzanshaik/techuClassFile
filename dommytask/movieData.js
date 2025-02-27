
const movies = [
      {
        "id": 1,
        "title": "RRR",
        "language": "Telugu",
        "genre": ["Action", "Drama"],
        "releaseYear": 2022,
        "director": "S. S. Rajamouli",
        "cast": [
          {
            "name": "N. T. Rama Rao Jr.",
            "role": "Komaram Bheem"
          },
          {
            "name": "Ram Charan",
            "role": "Alluri Sitarama Raju"
          },
          {
            "name": "Alia Bhatt",
            "role": "Sita"
          }
        ],
        "rating": 8.2
      },
      {
        "id": 2,
        "title": "Pushpa: The Rise",
        "language": "Telugu",
        "genre": ["Action", "Crime"],
        "releaseYear": 2021,
        "director": "Sukumar",
        "cast": [
          {
            "name": "Allu Arjun",
            "role": "Pushpa Raj"
          },
          {
            "name": "Rashmika Mandanna",
            "role": "Srivalli"
          },
          {
            "name": "Fahadh Faasil",
            "role": "SP Bhanwar Singh Shekhawat"
          }
        ],
        "rating": 7.9
      },
      {
        "id": 3,
        "title": "Kantara",
        "language": "Kannada",
        "genre": ["Action", "Adventure", "Drama"],
        "releaseYear": 2022,
        "director": "Rishab Shetty",
        "cast": [
          {
            "name": "Rishab Shetty",
            "role": "Kaadubettu Shiva"
          },
          {
            "name": "Sapthami Gowda",
            "role": "Leela"
          }
        ],
        "rating": 8.4
      },
      {
        "id": 4,
        "title": "Vikram",
        "language": "Tamil",
        "genre": ["Action", "Thriller"],
        "releaseYear": 2022,
        "director": "Lokesh Kanagaraj",
        "cast": [
          {
            "name": "Kamal Haasan",
            "role": "Vikram"
          },
          {
            "name": "Vijay Sethupathi",
            "role": "Santhanam"
          },
          {
            "name": "Fahadh Faasil",
            "role": "Ammar"
          }
        ],
        "rating": 8.3
      },
      {
        "id": 5,
        "title": "KGF: Chapter 2",
        "language": "Kannada",
        "genre": ["Action", "Drama"],
        "releaseYear": 2022,
        "director": "Prashanth Neel",
        "cast": [
          {
            "name": "Yash",
            "role": "Rocky Bhai"
          },
          {
            "name": "Srinidhi Shetty",
            "role": "Reena Desai"
          },
          {
            "name": "Sanjay Dutt",
            "role": "Adheera"
          }
        ],
        "rating": 8.4
      }
    ]
  
    const moviesList = document.getElementById('movies-list');
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('col-md-4');
      
      movieCard.innerHTML = `
        <div class="card movie-card">
          <img src="https://via.placeholder.com/400x200?text=Movie+Poster" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title} (${movie.releaseYear})</h5>
            <p class="card-text"><strong>Director:</strong> ${movie.director}</p>
            <p class="card-text"><strong>Language:</strong> ${movie.language}</p>
            <p class="card-text"><strong>Genres:</strong> ${movie.genre.join(', ')}</p>
            <p class="card-text"><strong>Cast:</strong> ${movie.cast.map(actor => `${actor.name} as ${actor.role}`).join(', ')}</p>
            <p class="card-text"><strong>Rating:</strong> ${movie.rating}</p>
          </div>
        </div>
      `;
      
      moviesList.appendChild(movieCard);
    });