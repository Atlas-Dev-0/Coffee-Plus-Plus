-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2023 at 04:23 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffeeplusplusdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `coffees`
--

CREATE TABLE `coffees` (
  `id` varchar(4) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `calories` varchar(20) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coffees`
--

INSERT INTO `coffees` (`id`, `category`, `name`, `image`, `calories`, `time`, `price`) VALUES
('0101', 'Basic', 'Americano Coffee', 'Design Elements/Coffee Models/Basic/Americano Coffee.png', '10 cal', '5 mins', 'Php 120.00'),
('0102', 'Basic', 'Chocolate Coffee', 'Design Elements/Coffee Models/Basic/Chocolate Coffee.png', '190 cal', '8 mins', 'Php 140.00'),
('0103', 'Basic', 'Espresso Coffee', 'Design Elements/Coffee Models/Basic/Espresso Coffee.png', '20 cal', '5 mins', 'Php 110.00'),
('0104', 'Basic', 'Latte Coffee', 'Design Elements/Coffee Models/Basic/Latte Coffee.png', '150 cal', '10 mins', 'Php 140.00'),
('0201', 'Specialties', 'Cappuccino Coffee', 'Design Elements/Coffee Models/Specialties/Cappuccino Coffee.png', '45 cal', '8 mins', 'Php 120.00'),
('0202', 'Specialties', 'Macchiato Coffee', 'Design Elements/Coffee Models/Specialties/Macchiato Coffee.png', '10 cal', '5 mins', 'Php 130.00'),
('0203', 'Specialties', 'Ristretto Coffee', 'Design Elements/Coffee Models/Specialties/Ristretto Coffee.png', '2 cal', '8 mins', 'Php 100.00'),
('0301', 'Iced', 'Iced Frappe', 'Design Elements/Coffee Models/Iced/Iced Frappe.png', '280 cal', '5 mins', 'Php 160.00'),
('0302', 'Iced', 'Iced Latte', 'Design Elements/Coffee Models/Iced/Iced Latte.png', '120 cal', '8 mins', 'Php 180.00'),
('0303', 'Iced', 'Iced Mocha', 'Design Elements/Coffee Models/Iced/Iced Mocha.png', '130 cal', '5 mins', 'Php 170'),
('0304', 'Iced', 'Iced Tea', 'Design Elements/Coffee Models/Iced/Iced Tea.png', '50 cal', '5 mins', 'Php 100.00');

-- --------------------------------------------------------

--
-- Table structure for table `customer_user_credentials_and_information`
--

CREATE TABLE `customer_user_credentials_and_information` (
  `customer_id` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` varchar(150) NOT NULL,
  `address` varchar(50) NOT NULL,
  `contact_number` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='This is the user''s credentials and information';

--
-- Dumping data for table `customer_user_credentials_and_information`
--

INSERT INTO `customer_user_credentials_and_information` (`customer_id`, `username`, `password`, `name`, `age`, `address`, `contact_number`) VALUES
(4, '123', '123', 'asdasd, KENNETH GONZALES sdasd', '19', 'Regidor Street, Market Site, Daraga, Albay', '09925885653'),
(1, 'admin', 'password', 'Kenneth Gonzales', '29', 'Market Site, Daraga, Albay', '09925775654'),
(5, 'eric123', '123456', 'REBLANDO, ERIC R.', '20', 'Daraga, Albay', '099237168236'),
(2, 'kenken', 'password', 'gonzales, kenneth none', '19', 'Regidor Street, Market Site, Daraga, Albay', '09925885653'),
(6, 'maricon1919', 'password', 'Saunar, Maricon none', '20', 'Sugcad', '09925885653'),
(7, 'maricon28', 'password', 'saunar, maricon as', '20', 'pasd', 'asdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer_user_credentials_and_information`
--
ALTER TABLE `customer_user_credentials_and_information`
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `custome_id` (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer_user_credentials_and_information`
--
ALTER TABLE `customer_user_credentials_and_information`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
