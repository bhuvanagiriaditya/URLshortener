# 🔗 URL Shortener

A lightweight and efficient URL Shortener web application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Paste any long URL and get a compact, shareable short link in seconds.

---

## ✨ Features

- Shorten any long URL into a compact, unique link
- Instant redirection from short URL to the original destination
- Clean and minimal web interface rendered with EJS
- Persistent storage of URL mappings using MongoDB
- Fast short ID generation via `shortid`

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Runtime    | Node.js                           |
| Framework  | Express v5                        |
| Database   | MongoDB (via Mongoose)            |
| Templating | EJS v5                            |
| Short IDs  | shortid / short-id                |
| Dev Tool   | Nodemon                           |

---

## 📂 Project Structure

```
URLshortener/
├── controllers/        # Route handler logic
├── models/             # Mongoose schema for URL mappings
├── routes/             # Express route definitions
├── views/              # EJS templates (frontend UI)
├── connection.js       # MongoDB connection setup
├── index.js            # App entry point
├── package.json        # Project metadata & dependencies
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bhuvanagiriaditya/URLshortener.git
   cd URLshortener
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure the database**

   Open `connection.js` and update the MongoDB connection string to point to your local or cloud MongoDB instance:

   ```js
   mongoose.connect('mongodb://localhost:27017/urlshortener');
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   The app will start using `nodemon` and be available at `http://localhost:8000` (or whichever port is configured in `index.js`).

---

## 📖 Usage

1. Open the app in your browser.
2. Paste a long URL into the input field and submit.
3. Receive a shortened URL — copy and share it.
4. Visiting the short URL will automatically redirect to the original page.

---

## 📦 Dependencies

| Package     | Version   | Purpose                          |
|-------------|-----------|----------------------------------|
| express     | ^5.2.1    | Web server framework             |
| mongoose    | ^9.6.1    | MongoDB object modelling         |
| ejs         | ^5.0.2    | Server-side HTML templating      |
| shortid     | ^2.2.17   | Unique short ID generation       |
| short-id    | ^0.1.0-1  | Alternative short ID utility     |
| nodemon     | ^3.1.14   | Auto-restart during development  |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**Bhuvanagiri Aditya**  
GitHub: [@bhuvanagiriaditya](https://github.com/bhuvanagiriaditya)
