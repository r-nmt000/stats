import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";
import {WinsAnalysis} from "./analyzer/WinsAnalysis";
import {ConsoleReporter} from "./reportTargets/ConsoleReporter";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const analysis = new WinsAnalysis('nomoto');
const report = new ConsoleReporter();
const summary = new Summary(analysis, report);
summary.buildAndReport(matchReader.matches);
