# ATM Management System

This is an ATM Management System built using React, Tailwind CSS, Node.js, and MySQL. It allows users to perform various banking operations such as withdrawing cash, depositing money, checking account balances, and transferring funds between accounts.

## Features

- User authentication: Users can log in to the system to access their accounts.
- Account management: Users can view their account details, including the account balance and transaction history.
- Cash withdrawal: Users can withdraw cash from their accounts based on available balances.
- Cash deposit: Users can deposit cash into their accounts by specifying the amount.
- Transaction history: Users can view a record of their past transactions.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Node.js: A JavaScript runtime environment for server-side development.
- MySQL: An open-source relational database management system.

## Prerequisites

Before running the application, make sure you have the following software installed:

- Node.js: [Download Node.js](https://nodejs.org)
- MySQL: [Download MySQL](https://www.mysql.com/downloads/)
- Yarn :

  ```bash
  npm i -g yarn
  ```

## Installation

1.  Clone the repository from GitHub:

    ```bash
    git clone https://github.com/iamevs/atm-management.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd atm-management
    ```

3.  Install the dependencies:

    ```bash
    yarn
    ```

4.  Create a MySQL database:

    - Open the MySQL command line or a MySQL client tool.
    - Run the following commands to create the database and the required tables:

    ```sql
            Create Database atm;


            CREATE TABLE User (
                accno VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255),
                ifsc VARCHAR(255),
                address VARCHAR(255),
                phoneno VARCHAR(255),
                age INT
            );

            CREATE TABLE Card (
                cardno INT PRIMARY KEY,
                accno VARCHAR(255),
                acctype VARCHAR(255),
                name_card VARCHAR(255),
                pin VARCHAR(255),
                bankname VARCHAR(255),
                expiredate DATE,
                cvv INT,
                balance DECIMAL(10, 2),
                FOREIGN KEY (accno) REFERENCES User(accno)
            );

            CREATE TABLE Transaction (
                transid INT PRIMARY KEY AUTO_INCREMENT,
                cardno INT,
                transtype VARCHAR(255),
                amt DECIMAL(10, 2),
                date DATE,
                time TIME,
                FOREIGN KEY (cardno) REFERENCES Card(cardno)
            );

            INSERT INTO User (accno, name, ifsc, address, phoneno, age) VALUES
                (123456, 'John Doe', 'IFSC001', '123 Main St', '555-1234', 30),
                (234567, 'Jane Smith', 'IFSC002', '456 Elm St', '555-5678', 25),
                (345678, 'Alice Johnson', 'IFSC003', '789 Oak St', '555-9012', 40);

            
            INSERT INTO Card (cardno, accno, acctype, name_card, pin, bankname, expiredate, cvv, balance) VALUES
                (11112222, 123456, 'Savings', 'John Doe', '1234', 'KCT Bank', '2025-12-31', 123, 1000.00),
                (22223333, 234567, 'Checking', 'Jane Smith', '5678', 'KCT Bank', '2026-11-30', 456, 2000.00),
                (33334444, 345678, 'Savings', 'Alice Johnson', '9012', 'KCT Bank', '2027-10-31', 789, 3000.00);
            

            INSERT INTO Transaction (cardno, transtype, amt, date, time) VALUES
                (11112222, 'Deposit', 500.00, '2025-03-01', '10:00:00'),
                (11112222, 'Withdrawal', 200.00, '2025-03-02', '11:00:00'),
                (22223333, 'Deposit', 1000.00, '2025-03-03', '12:00:00'),
                (22223333, 'Withdrawal', 300.00, '2025-03-04', '13:00:00'),
                (33334444, 'Deposit', 1500.00, '2025-03-05', '14:00:00'),
                (33334444, 'Withdrawal', 400.00, '2025-03-06', '15:00:00');

    ```

         Note: Make sure to configure your MySQL connection details in the project's database configuration file (`server/database.js`).

    ```

5.  Start the application:

    ```bash
    yarn start
    ```

6.  Open your web browser and navigate to localhost url to access the ATM Management System.

## Usage

1. Log in using your account credentials.
2. Explore the available options in the system, such as viewing account details, making transactions, and checking transaction history.
3. Perform various operations like cash withdrawal, cash deposit, and fund transfers as needed.
4. Log out when you are finished using the system.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit your code.
4. Push your changes to your forked repository.
5. Submit a

pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

**Happy banking!**
