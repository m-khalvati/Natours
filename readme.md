```markdown
# 🗺️ Natours - Tour Management & Booking Platform

A comprehensive Node.js web application for discovering, tracking, and booking unique travel tours. Users can explore various tours, view real-time interactive routes on a map, and securely book their spots online.

---

## 🚀 Key Features

* **User Account Management:** Users can update their name, email, password, and upload a profile picture.
* **Online Booking & Payments:** Fully integrated with **Stripe**. Once a payment is successful, the reserved tour is automatically added to the user's *Bookings* panel.
* **Interactive Mapping:** Displays precise tour locations and daily itineraries dynamically on an embedded map.
* **Reviews & Ratings:** Dynamic review section under each tour showing real user feedback and star ratings.

---

## 🛠️ Prerequisites & Setup

Getting started takes just 3 simple steps:

1. **Database:** The project uses **MongoDB**. You will need to set up either a local MongoDB instance or a remote MongoDB Atlas cluster.
2. **Payments:** A registered **Stripe** account is required to handle the checkout functionality.
3. **Map Service:** By default, the project runs on **MapTiler** (which requires simple API integration without complex validation). However, the source code also contains pre-configured support for **MapBox** if you wish to switch.

---

## ⚙️ Environment Configuration (`config.env`)

Create a file named `config.env` in the **root directory** of the project and populate it with your credentials:

```env
NODE_ENV=development
PORT=3000

# Database Connections
DATABASE=mongodb+srv://user:<PASSWORD>@cluster0.AAAAAAA.mongodb.net/natours?appName=Cluster0
DATABASE_LOCAL=mongodb://localhost:27017/natours
DATABASE_PASSWORD=password

# Authentication (JWT)
JWT_SECRET=Any-Strong-And-Long_Secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Standard Email Configuration
EMAIL_USERNAME=info@Email.com
EMAIL_PASSWORD=PaSsWoRd
EMAIL_HOST=Host.com
EMAIL_PORT=123
EMAIL_FROM=Your Name

# SendGrid Configuration (To activate, uncomment the condition inside utils/email.js)
SENDGRID_USERNAME=apikey
SENDGRID_PASSWORD=token_taken_from_sendgrid_Site

# Stripe API Keys
STRIPE_SECRET_KEY=sk_test_SECRET
STRIPE_WEBHOOK_SECRET=whsec_SECRET

```

---

## 💻 Installation & Usage

### 1. Install Dependencies

Run the following command to install all the necessary packages along with the required `body-parser` module:

```bash
npm install

```

### 2. Manage Initial Data (Import / Delete)

To seed your database with sample data (tours, users, and reviews), run:

```bash
node ./dev-data/data/import-dev-data.js --import

```

If you ever need to completely wipe the database, run:

```bash
node ./dev-data/data/import-dev-data.js --delete

```

### 3. Run the Application

Start the development server with:

```bash
node start

```

Once started, the application will be live at [http://127.0.0.1:3000](https://www.google.com/search?q=http://127.0.0.1:3000).

---

## 💡 Technical Notes

### Switching Map Provider from MapTiler to MapBox (Optional)

If you prefer using **MapBox** over MapTiler, follow these steps:

1. Open `public/js/index.js`, comment out the **MapTiler** block, and uncomment the **DELEGATION Map box** section.
2. Open `views/tour.pug`, comment out the MapTiler CDN scripts, and uncomment the **MapBox** CDN links.

### User Registration (SignUp API)

While the frontend user interface for the SignUp page is not yet implemented, the **backend API is fully functional**. You can create a new user by sending a `POST` request with a `JSON` payload to your signup route:

* **Endpoint:** `http://127.0.0.1:3000/api/v1/users/signup`
* **Payload Fields:** `name`, `email`, `password`, `passwordConfirm`, `role`

> 📌 **Note:** In `development` mode, you can manually assign roles such as `user`, `guide`, `lead-guide`, or `admin`. If no role is specified, it defaults to `user`.

---

## 📸 Screenshots

<details>
  <summary>🖼️ Click to view Screenshot 1: Homepage</summary>
  <br>
  <div align="center">
    <img src="screenshots\screencapture-127-0-0-1-3000-2026-06-22-07_01_31.png" alt="Homepage" width="85%" />
  </div>
</details>

<details>
  <summary>🖼️ Click to view Screenshot 2: Tour Details & Map</summary>
  <br>
  <div align="center">
    <img src="screenshots\screencapture-127-0-0-1-3000-tour-the-sports-lover-2026-06-22-07_14_12.png" alt="Tour Details" width="85%" />
  </div>
</details>

<details>
  <summary>🖼️ Click to view Screenshot 3: User Panel</summary>
  <br>
  <div align="center">
    <img src="screenshots\screencapture-127-0-0-1-3000-me-2026-06-22-07_03_23.png" alt="UserPanel" width="85%" />
  </div>
</details>