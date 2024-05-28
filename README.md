**InvestMash Website**
Welcome to InvestMash, a comprehensive personal finance and investment platform designed to empower users with the tools they need to manage their finances, screen stocks, and perform in-depth stock analysis. This project combines the power of Node.js for the backend and Flask for certain web services, ensuring a robust and efficient system.

**Features**
Personal Finance Calculations: Tools to help you calculate various personal finance metrics, including budgeting, savings, loan repayments, and more.
Stock Screener: A customizable stock screener to filter stocks based on multiple criteria such as market cap, P/E ratio, dividend yield, etc.
Stock Analysis: Detailed analysis tools providing insights into stock performance, technical indicators, financial statements, and more.
User Authentication: Secure user registration and login system.
Real-time Data: Integration with financial data APIs to provide real-time stock data and news.
**Tech Stack**
Backend:
Node.js: Handles the main server logic, API requests, and user authentication.
Flask: Serves specific web services and handles certain data processing tasks.
Frontend:
HTML/CSS: For the basic structure and styling of the website.
JavaScript: Enhances interactivity and user experience.
React.js: For building dynamic and responsive user interfaces.
Database:
MongoDB: Stores user data, financial records, and other critical information.
**Installation**
Clone the repository:

git clone https://github.com/yourusername/investmash.git

cd investmash

**Backend Setup:**

Install Node.js dependencies:

cd backend
npm install

**Set up Flask environment:**

cd flask_services
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt

**Database Setup:**

Make sure you have MongoDB installed and running.
Create a .env file in the root directory of the project and add your MongoDB URI and other environment variables:

MONGODB_URI=mongodb://localhost:27017/investmash
SECRET_KEY=your_secret_key

**Run the Backend:**

Start the Node.js server:

cd backend
npm start

**Start the Flask services:**

cd flask_services
flask run

**Frontend Setup:**

Navigate to the frontend directory and install dependencies:

cd frontend
npm install

**Start the React development server:**

npm start

**Usage**
Personal Finance Tools: Access tools for budgeting, savings, and loan calculations from the finance section.
Stock Screener: Use the stock screener to filter and find stocks based on your investment criteria.
Stock Analysis: Perform detailed analysis on selected stocks to make informed investment decisions.
Real-time Data: Stay updated with the latest stock prices and financial news.

**Contributing**
We welcome contributions to improve InvestMash. If you are interested in contributing, please follow these steps:

1.Fork the repository.
2.Create a new branch:

git checkout -b feature/your-feature-name

3.Make your changes.
4.Commit your changes:

git commit -m 'Add some feature'

5.Push to the branch:

git push origin feature/your-feature-name

6.Open a pull request.

**License**
This project is licensed under the MIT License. See the LICENSE file for details.

**Contact**
If you have any questions or feedback, feel free to reach out:

Email: support@investmash.com
Twitter: @InvestMash
GitHub: InvestMash
We hope you find InvestMash useful for your personal finance and investment needs. Happy investing!
