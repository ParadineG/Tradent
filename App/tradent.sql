-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2018 at 11:41 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tradent`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `furniture` tinyint(4) DEFAULT NULL,
  `sports` tinyint(4) DEFAULT NULL,
  `kitchen` tinyint(4) DEFAULT NULL,
  `clothes` tinyint(4) DEFAULT NULL,
  `electronics` tinyint(4) DEFAULT NULL,
  `home` tinyint(4) DEFAULT NULL,
  `books` tinyint(4) DEFAULT NULL,
  `tools` tinyint(4) DEFAULT NULL,
  `other` tinyint(4) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `pricer` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `description`, `user`, `furniture`, `sports`, `kitchen`, `clothes`, `electronics`, `home`, `books`, `tools`, `other`, `price`, `pricer`, `location`) VALUES
(1, '321321312', '312312321', 'sbg@tlu.ee', 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 'Exchange', 'mercedes');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `profile` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `info` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tweeter` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `instagram` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `linkedIn` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `profile`, `info`, `facebook`, `tweeter`, `instagram`, `linkedIn`) VALUES
(1, 'LierLoki', 'sbg@tlu.ee', '123', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'LierLoki', '123@123', '123', NULL, NULL, NULL, NULL, NULL, NULL),
(3, '123123123', 'asfgjhadsjfgh@asdgfasfa', '123', NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
