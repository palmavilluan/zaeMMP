-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 19. Jan 2023 um 10:08
-- Server-Version: 10.3.31-MariaDB-0+deb10u1
-- PHP-Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `450731_3_1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Benutzer`
--

CREATE TABLE `Benutzer` (
  `ID` int(11) NOT NULL,
  `name` varchar(42) NOT NULL,
  `email` varchar(42) NOT NULL,
  `passwort` varchar(200) NOT NULL,
  `handyNr` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Benutzer`
--

INSERT INTO `Benutzer` (`ID`, `name`, `email`, `passwort`, `handyNr`) VALUES
(60, 'raul', 'raul@gmail.com', '$2y$10$yfod.ElzV7GweeA4gAkkxujxL6clwK3TEtSe0PhR8eExPvYFRNVry', '078 742 34 56'),
(62, 'david', 'raul7@sunrise.ch', '$2y$10$TvdhHe3nqbFgP2H/z.vw0.RDxpwpP/90no.rVXJ8xOpDMtqZzS9yC', '076 987 87 23'),
(63, 'Emily', 'emily@mmp.ch', '$2y$10$jt3uBR5GfEWCID5VcasChui4/ThyfDXmdczmF0lLL7z2wCKyADhT.', '078 168 47 89'),
(64, 'Luan', 'lua@lua.ch', '$2y$10$UCl248CW/o76XFrTHfanYeBGlCLOE7FT0T78lGUv1Aqj5yjHhiyxi', '079 138 93 28'),
(65, 'Michel', 'michelgruen@gmail.com', '$2y$10$PqcGrgkqx252CnMe6rqSseIJiCmHrGxUXZfXTLxRKWe84wnwtQXD.', '079 567 32 12'),
(66, 'David123', 'mmp123', '$2y$10$PgL73RtWNcdqp7UA9.PqfOQNXxMIRfUnuNMzRLp6l8Wr1bbkn9WVi', '079 108 80 81');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Kurs`
--

CREATE TABLE `Kurs` (
  `ID` int(11) NOT NULL,
  `semester` int(42) NOT NULL,
  `name` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Kurs`
--

INSERT INTO `Kurs` (`ID`, `semester`, `name`) VALUES
(1, 4, 'Interaktive Medien IIII'),
(2, 4, 'Visualisieren IIII'),
(3, 4, 'Schreiben und Sprechen IIII'),
(4, 3, 'Interaktive Medien III'),
(7, 3, 'Medien BWL III'),
(8, 3, 'Medien Recht III'),
(9, 2, 'Interaktive Medien II'),
(10, 2, 'Medien BWL II'),
(11, 2, 'Medien Recht II'),
(12, 1, 'Interaktive Medien I'),
(13, 1, 'Medien BWL I'),
(15, 1, 'Medien Recht I');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `PDF`
--

CREATE TABLE `PDF` (
  `ID` int(11) NOT NULL,
  `dokument` varchar(200) DEFAULT NULL,
  `benutzer_ID` int(11) DEFAULT NULL,
  `kurs_ID` int(11) DEFAULT NULL,
  `standort` varchar(42) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `PDF`
--

INSERT INTO `PDF` (`ID`, `dokument`, `benutzer_ID`, `kurs_ID`, `standort`) VALUES
(219, 'pp_tiktok-08.png', 62, 8, 'Bern'),
(220, 'undefined', 62, 1, 'Bern'),
(222, 'Medienrecht_RepetitionNotizen.docx', 29, 11, 'Zuerich'),
(226, 'Medienrecht_RepetitionNotizen.docx', 29, 1, 'Bern'),
(227, 'Medienrecht III_Zusammenfassung_LuanPalma.docx', 64, 11, 'Zuerich'),
(228, 'Markenrecht Repetition.pdf', 64, 7, 'Chur'),
(229, 'Medienrecht_RepetitionNotizen.docx', 64, 10, 'Zuerich'),
(230, 'Zusammenfassung_Medienrecht_3Sem.pdf', 63, 8, 'Bern'),
(231, 'Zusammenfassung_MedienBWL_2Sem.pdf', 63, 10, 'Chur'),
(233, 'zusammenfassung-bwl.pdf', 66, 13, 'Bern'),
(235, 'Zusammenfassung.ai', 65, 7, 'Bern');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Session`
--

CREATE TABLE `Session` (
  `ID` int(11) NOT NULL,
  `benutzer_ID` int(11) NOT NULL,
  `token` varchar(100) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Session`
--

INSERT INTO `Session` (`ID`, `benutzer_ID`, `token`, `timestamp`) VALUES
(77, 63, 'gu7DC3xaZW5bwQL2hATnhGcDwh2Z2Darp2kzsApMYP', '2023-01-19 09:00:32'),
(78, 64, 'SMslRsjru7YdehSP7wa89zO4enDqqNF1n5oOddCO4w', '2023-01-19 09:07:39'),
(79, 63, 'KKeXLfPs3iS9I2hgxh056dY1A53q3sFoDQh1GUp8XT', '2023-01-19 09:01:12'),
(80, 65, 'AlaRqHWDcIHUx3m2vBCv8cFXoVYnk8QygSm1ZF52w7', '2023-01-19 09:04:56'),
(81, 66, '5unsacuAZPQNLLKNyNqoVKr7KeiBDfcfpPaYHqdlxw', '2023-01-19 09:06:23');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Benutzer`
--
ALTER TABLE `Benutzer`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `Kurs`
--
ALTER TABLE `Kurs`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `PDF`
--
ALTER TABLE `PDF`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `PDF_benutzerid` (`benutzer_ID`),
  ADD KEY `PDF_kursid` (`kurs_ID`);

--
-- Indizes für die Tabelle `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Session_benutzerid` (`benutzer_ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Benutzer`
--
ALTER TABLE `Benutzer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
--
-- AUTO_INCREMENT für Tabelle `Kurs`
--
ALTER TABLE `Kurs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT für Tabelle `PDF`
--
ALTER TABLE `PDF`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=236;
--
-- AUTO_INCREMENT für Tabelle `Session`
--
ALTER TABLE `Session`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `PDF`
--
ALTER TABLE `PDF`
  ADD CONSTRAINT `PDF_kursid` FOREIGN KEY (`kurs_ID`) REFERENCES `Kurs` (`ID`);

--
-- Constraints der Tabelle `Session`
--
ALTER TABLE `Session`
  ADD CONSTRAINT `Session_benutzerid` FOREIGN KEY (`benutzer_ID`) REFERENCES `Benutzer` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
