-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 24. 08 2018 kl. 08:49:27
-- Serverversion: 10.1.26-MariaDB
-- PHP-version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `butik_opg_aug`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `brand`
--

INSERT INTO `brand` (`id`, `navn`) VALUES
(1, 'ILVA'),
(2, 'Ide Møbler');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `navn` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kategori`
--

INSERT INTO `kategori` (`id`, `navn`) VALUES
(1, 'Lamper'),
(2, 'Sofaer'),
(3, 'Tilbehør');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontaktform`
--

CREATE TABLE `kontaktform` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefon` varchar(11) NOT NULL,
  `emne` varchar(50) NOT NULL,
  `besked` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kontaktform`
--

INSERT INTO `kontaktform` (`id`, `navn`, `email`, `telefon`, `emne`, `besked`) VALUES
(1, 'Maiken Plougmann Rais', 'maikenpr@hotmail.com', '28833301', 'test', 'tralalal'),
(2, 'Maiken P. Rais', 'maikenpr@hotmail.com', '12345678', 'test', 'test af success besked'),
(3, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'test', 'testestestes'),
(4, 'Maiken P. Rais', 'maikenpr@gmail.com', '28833301', 'test igen', 'Ny test'),
(5, '', '', '', '', ''),
(6, 'Maiken P. Rais', 'maikenpr@gmail.com', '28833301', 'test igen igen ', 'ehstyjeutm'),
(7, '', '', '', '', ''),
(8, '', '', '', '', ''),
(9, 'Maiken Plougmann Rais', 'maikenpr@hotmail.com', '28833301', 'test igen igen ', 'afebagdbag'),
(10, '', '', '', '', ''),
(11, '', '', '', '', ''),
(12, 'Maiken Plougmann Rais', 'maikenpr@hotmail.com', '12345678', 'hej', 'hej med dig'),
(13, 'Maiken P. Rais', 'maikenpr@gmail.com', '28833301', 'virk', 'srgjdkuyfluiu'),
(14, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'blah', 'rghytiukki,gjvh'),
(15, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'fhjkfiug', 'sytduyifog.'),
(16, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'test', 'shsjdkl'),
(17, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'hej', 'rtysjukuio'),
(18, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'ytujik', 'gfhjk'),
(19, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'dgh', 'djhhkl'),
(20, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'ghjk', 'strdyfuj'),
(21, 'Maiken P. Rais', 'maikenpr@hotmail.com', '28833301', 'tehs', 'fhjklæ');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `produkt`
--

CREATE TABLE `produkt` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL,
  `beskrivelse` varchar(200) NOT NULL,
  `pris` decimal(10,0) NOT NULL,
  `billede` varchar(50) NOT NULL,
  `fk_kategori` int(11) NOT NULL,
  `fk_brand` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `produkt`
--

INSERT INTO `produkt` (`id`, `navn`, `beskrivelse`, `pris`, `billede`, `fk_kategori`, `fk_brand`) VALUES
(1, 'Belly Large Lampe', 'Pendel, max. 60W, sokkel e27, ekskl. pære, energiklasse a++ til energiklasse e og 3m ledning.\r\n\r\nSort metalskærm og sort tekstilledning', '799', 'Belly-large-lampe.jpg', 1, 1),
(2, 'Ball Wall', 'Væglampe, max. 25W, sokkel e14, ekskl. pære, 2,5m ledning, energiklasse a++ og til energiklasse e.\r\n\r\nMat sort metalskærm, m/ hylde og USB tilslutning og sort tekstilledning', '1499', 'ball-wall.jpg', 1, 1),
(3, 'Serena', 'Serena 3 pers sofa L231 x H79 x B95', '15999', 'serena.jpg', 2, 1),
(4, 'Sky', 'Sky H82 x L234 x D167', '11999', 'sky.jpg', 2, 1),
(5, 'Moss', 'Moss pude H50 x L50', '299', 'moss.jpg', 3, 1),
(6, 'Soon', 'Flot plakat i sort ramme.', '1299', 'soon.jpg', 3, 1),
(7, 'Cohen Lampe', 'Pendel. Dia 16,3 cm. Fås i flere varianter.', '599', 'cohen_lampe.jpg', 1, 2),
(8, 'Hobby Deluxe Gulvlampe', 'Gulvlampe i sortmalet metal. Højde 180 cm. Fås i flere varianter.', '899', 'hobby _deluxe_gulvlampe.jpg', 1, 2),
(9, 'Vesta Hjørnesofa', '5-pers. sofa, emerald og ben i sort metal. Højde: 74 cm Vægt: 187 kg ', '27195', 'vesta_hjornesofa.jpg', 2, 2),
(10, 'Padova Sofa', 'Sofa, grå med ben i sortlakeret metal. Længde: 167 cm Bredde: 82 cm Højde: 84 cm ', '3999', 'padova_sofa.jpg', 2, 2),
(11, 'Molecyles Plakat', 'Plakat med sort alu ramme. Mål: B 60 cm x H 80 cm', '899', 'molecyles_plakat.jpg', 3, 2),
(12, 'Breakfast Tray', 'Serveringsbakke med foldeben i mat hvidlakeret mahogni. Mål: L 60 cm x B 36 cm x ', '399', 'breakfast_tray.jpg', 3, 2),
(14, 'Saluzzo sofa', 'TEST OPRET', '22345', 'saluzzo.jpg', 2, 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(77) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2b$10$x1RwlkMgDTw.pOdtQvMXneMlR1i.S/Ca2brad.dB3Z53uJ4Xr4yFq');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kontaktform`
--
ALTER TABLE `kontaktform`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `produkt`
--
ALTER TABLE `produkt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kategori` (`fk_kategori`),
  ADD KEY `fk_brand` (`fk_brand`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Tilføj AUTO_INCREMENT i tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Tilføj AUTO_INCREMENT i tabel `kontaktform`
--
ALTER TABLE `kontaktform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- Tilføj AUTO_INCREMENT i tabel `produkt`
--
ALTER TABLE `produkt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `produkt`
--
ALTER TABLE `produkt`
  ADD CONSTRAINT `produkt_ibfk_1` FOREIGN KEY (`fk_brand`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `produkt_ibfk_2` FOREIGN KEY (`fk_kategori`) REFERENCES `kategori` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
