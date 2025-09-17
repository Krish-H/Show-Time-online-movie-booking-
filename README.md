
# ShowTime 


ShowTime  is the Online Movie Booking platform. It provides RESTful APIs for movie listings, showtimes, bookings, user authentication, and management features. 

---

## 🚀 Features

- **User Authentication:** Secure login/signup with JWT
- **Movie Listings:** Browse all available movies and details
- **Showtime Management:** View showtimes for each movie
- **Online Booking:** Book tickets for your favorite movies
- **Admin Panel:** Add/edit/delete movies & showtimes (admin only)
- **Booking History:** View past and upcoming bookings
- **Robust API:** RESTful endpoints for frontend integration

---

## 🛠️ Tech Stack

- **Node.js** & **Express**: Server and REST API
- **MongoDB**: Database for movies, showtimes, users, bookings
- **JWT**: Authentication and session management
- **Mongoose**: MongoDB ODM
- **Vercel**: Cloud deployment

---

## 📖 API Documentation

### Authentication

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – User login

### Movies

- `GET /api/movies` – List all movies
- `GET /api/movies/:id` – Get movie details
- `POST /api/movies` – Add a new movie (admin)
- `PUT /api/movies/:id` – Update movie (admin)
- `DELETE /api/movies/:id` – Delete movie (admin)

### Showtimes

- `GET /api/showtimes` – List all showtimes
- `GET /api/showtimes/:id` – Get showtime details
- `POST /api/showtimes` – Add showtime (admin)
- `PUT /api/showtimes/:id` – Update showtime (admin)
- `DELETE /api/showtimes/:id` – Delete showtime (admin)

### Bookings

- `POST /api/bookings` – Book tickets
- `GET /api/bookings` – List user bookings



## 💻 Getting Started (Local Development)

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Krish-H/Show-Time-online-movie-booking-.git
    cd Show-Time-online-movie-booking-
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

### Server `.env`

Create a `.env` file in your server root directory and add:

```
MONGODB_URI=your_mongodb_uri
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
TMDB_API_KEY=your_tmdb_api_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
SENDER_EMAIL=your_sender_email_address
SMTP_USER=your_smtp_username
SMTP_PASSWORD=your_smtp_password
```

### Client `.env`

Create a `.env` file in your client root directory and add:

```
VITE_CURRENCY='$'
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

4. **Run the server:**
    ```bash
    npm run dev
    ```




## 🧑‍💻 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Contact & Support

For questions, issues, or feature requests, please [open an issue](https://github.com/Krish-H/Show-Time-online-movie-booking-/issues).

---

**Happy Booking! 🎬🍿**
