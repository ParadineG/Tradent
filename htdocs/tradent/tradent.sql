-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2018 at 05:35 PM
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
  `photo` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
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

INSERT INTO `items` (`id`, `name`, `description`, `photo`, `user`, `furniture`, `sports`, `kitchen`, `clothes`, `electronics`, `home`, `books`, `tools`, `other`, `price`, `pricer`, `location`) VALUES
(14, 'itemname1', 'description 1', '4/action-adventure-puzzledungeons-rpg-forgotten-game-wallpapers-free-wallpaper-free-artworks-free-warrior-magic-dragon-hd-fantasy-dragons-realms.jpg', '', 0, 0, 1, 0, 0, 0, 0, 0, 0, 51, 'Sell', 'Central'),
(15, 'itemname2', 'description 2', 'temp.JPG', 'sbg@tlu.ee', 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 'Sell', 'Central'),
(16, 'itemname3', 'description 3', 'temp.JPG', 'sbg@tlu.ee', 0, 0, 0, 0, 0, 0, 1, 0, 0, 456, 'Sell', 'Central'),
(17, 'yes this is responsive', 'i would describe it but our time here is limited', 'temp.JPG', 'sbg@tlu.ee', 1, 0, 0, 0, 0, 0, 0, 0, 0, 123, 'Sell', 'Central'),
(18, 'ofc i\'m telling the truth', 'somerandomnumbers', 'temp.JPG', 'sbg@tlu.ee', 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 'Sell', 'Central');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `location` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pricer` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `arts` tinyint(1) NOT NULL,
  `music` tinyint(1) NOT NULL,
  `language` tinyint(1) NOT NULL,
  `general` tinyint(1) NOT NULL,
  `household` tinyint(1) NOT NULL,
  `mecha` tinyint(1) NOT NULL,
  `other` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `name`, `description`, `user`, `price`, `location`, `pricer`, `arts`, `music`, `language`, `general`, `household`, `mecha`, `other`) VALUES
(4, 'sa', 'sa', 'sbg@tlu.ee', 7, 'volvo', 'Give Away', 0, 0, 0, 0, 0, 1, '0');

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
(4, 'Saba', 'sbg@tlu.ee', '123', NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
