-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 05:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `customer_id` int(10) DEFAULT NULL,
  `product_id` char(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `customer_id`, `product_id`, `name`, `price`, `quantity`, `image`, `created_at`) VALUES
(249, 4, '304', 'Iced Tea', 100.00, 1, 'Design Elements/Coffee Models/Iced/Iced Tea.png', '2023-05-28 11:00:04');

-- --------------------------------------------------------

--
-- Table structure for table `coffee_product_catalog`
--

CREATE TABLE `coffee_product_catalog` (
  `product_id` char(4) NOT NULL,
  `category` varchar(20) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `calories` varchar(20) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coffee_product_catalog`
--

INSERT INTO `coffee_product_catalog` (`product_id`, `category`, `name`, `image`, `calories`, `time`, `price`) VALUES
('0101', 'Basic', 'Americano Coffee', 'Design Elements/Coffee Models/Basic/Americano Coffee.png', '10 cal', '5 mins', 'Php 120.00'),
('0102', 'Basic', 'Chocolate Coffee', 'Design Elements/Coffee Models/Basic/Chocolate Coffee.png', '190 cal', '8 mins', 'Php 140.00'),
('0103', 'Basic', 'Espresso Coffee', 'Design Elements/Coffee Models/Basic/Espresso Coffee.png', '20 cal', '5 mins', 'Php 110.00'),
('0104', 'Basic', 'Latte Coffee', 'Design Elements/Coffee Models/Basic/Latte Coffee.png', '150 cal', '10 mins', 'Php 140.00'),
('0201', 'Specialties', 'Cappuccino Coffee', 'Design Elements/Coffee Models/Specialties/Cappuccino Coffee.png', '45 cal', '8 mins', 'Php 120.00'),
('0202', 'Specialties', 'Macchiato Coffee', 'Design Elements/Coffee Models/Specialties/Macchiato Coffee.png', '10 cal', '5 mins', 'Php 130.00'),
('0203', 'Specialties', 'Ristretto Coffee', 'Design Elements/Coffee Models/Specialties/Ristretto Coffee.png', '2 cal', '8 mins', 'Php 100.00'),
('0301', 'Iced', 'Iced Frappe', 'Design Elements/Coffee Models/Iced/Iced Frappe.png', '280 cal', '5 mins', 'Php 160.00'),
('0302', 'Iced', 'Iced Latte', 'Design Elements/Coffee Models/Iced/Iced Latte.png', '120 cal', '8 mins', 'Php 180.00'),
('0303', 'Iced', 'Iced Mocha', 'Design Elements/Coffee Models/Iced/Iced Mocha.png', '130 cal', '5 mins', 'Php 170.00'),
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
  `dob` varchar(150) NOT NULL,
  `address` varchar(50) NOT NULL,
  `address_work` varchar(255) DEFAULT NULL,
  `address_friend` varchar(255) DEFAULT NULL,
  `address_school` varchar(255) DEFAULT NULL,
  `contact_number` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='This is the user''s credentials and information';

--
-- Dumping data for table `customer_user_credentials_and_information`
--

INSERT INTO `customer_user_credentials_and_information` (`customer_id`, `username`, `password`, `name`, `dob`, `address`, `address_work`, `address_friend`, `address_school`, `contact_number`) VALUES
(1, 'username', '123', 'Gonzales, Kenneth', '2003-01-07', 'Regidor Street, Daraga, Albay', 'Legazpi, City', 'Binitayan, Daraga, Albay', 'Sugcad, Polangui', '09925885653'),
(2, 'admin', '123', 'Gonzales, Kenneth', '2003-07-01', 'Regidor Street, Daraga, Albay', 'Legazpi, City', 'Binitayan, Daraga, Albay', 'Sugcad, Polangui', '09925885653'),
(3, 'ken', '123', 'Son, Goku', '2003-07-01', 'Regidor Street, Daraga, Albay', 'Legazpi, City', 'Binitayan, Daraga, Albay', 'Sugcad, Polangui', '09925885653'),
(4, 'maynard_uknow', 'OfflineTVToast13', 'may, maynard, aycardo', '2002-09-29', '764 ems barrio 1 legazpi city, albay', 'n/a', 'n/a', 'leagazpi city, albay', '09517059580'),
(5, 'usernam3', 'password', 'surname, first name, midldle name', '1999-05-28', 'address home', 'address', 'address friend', 'school', '0912 345 6789'),
(6, 'usernam3', 'password', 'surname, first name, midldle name', '1999-05-28', 'address home', 'address', 'address friend', 'school', '0912 345 6789'),
(7, 'SanKrushan', 'nov7anniv', 'macenas, nel, g', '2004-11-30', 'PNR Site Daraga, Albay', 'N/A', 'N/A', 'N/A', '09513761123'),
(8, 'kenkenken', '123', 'Paul, Jake', '2003-07-01', 'Regidor Street, Daraga, Albay', 'Legazpi, City', 'Binitayan, Daraga, Albay', 'Sugcad, Polangui', '09925885653');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_id` int(10) DEFAULT NULL,
  `product_id` char(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `product_id`, `name`, `price`, `quantity`, `image`, `created_at`, `address`) VALUES
(79, 2, '103', 'Espresso Coffee', 440.00, 4, 'Design Elements/Coffee Models/Basic/Espresso Coffee.png', '2023-05-29 03:26:04', 'Home: Regidor Street, Daraga, Albay'),
(80, 2, '103', 'Espresso Coffee', 550.00, 5, 'Design Elements/Coffee Models/Basic/Espresso Coffee.png', '2023-05-29 03:26:39', 'School: Sugcad, Polangui'),
(81, 2, '102', 'Chocolate Coffee', 700.00, 5, 'Design Elements/Coffee Models/Basic/Chocolate Coffee.png', '2023-05-29 03:26:39', 'School: Sugcad, Polangui'),
(82, 2, '202', 'Macchiato Coffee', 910.00, 7, 'Design Elements/Coffee Models/Specialties/Macchiato Coffee.png', '2023-05-29 03:26:39', 'School: Sugcad, Polangui'),
(83, 8, '103', 'Espresso Coffee', 550.00, 5, 'Design Elements/Coffee Models/Basic/Espresso Coffee.png', '2023-05-29 03:31:09', 'Home: Regidor Street, Daraga, Albay'),
(84, 8, '102', 'Chocolate Coffee', 840.00, 6, 'Design Elements/Coffee Models/Basic/Chocolate Coffee.png', '2023-05-29 03:31:09', 'Home: Regidor Street, Daraga, Albay'),
(85, 8, '101', 'Americano Coffee', 720.00, 6, 'Design Elements/Coffee Models/Basic/Americano Coffee.png', '2023-05-29 03:31:09', 'Home: Regidor Street, Daraga, Albay'),
(86, 8, '103', 'Espresso Coffee', 440.00, 4, 'Design Elements/Coffee Models/Basic/Espresso Coffee.png', '2023-05-29 03:31:21', 'School: Sugcad, Polangui'),
(87, 8, '104', 'Latte Coffee', 1400.00, 10, 'Design Elements/Coffee Models/Basic/Latte Coffee.png', '2023-05-29 03:32:24', 'Friend: Binitayan, Daraga, Albay'),
(88, 8, '104', 'Latte Coffee', 420.00, 3, 'Design Elements/Coffee Models/Basic/Latte Coffee.png', '2023-05-29 03:32:42', 'Home: Regidor Street, Daraga, Albay');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coffee_product_catalog`
--
ALTER TABLE `coffee_product_catalog`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `customer_user_credentials_and_information`
--
ALTER TABLE `customer_user_credentials_and_information`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=265;

--
-- AUTO_INCREMENT for table `customer_user_credentials_and_information`
--
ALTER TABLE `customer_user_credentials_and_information`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
