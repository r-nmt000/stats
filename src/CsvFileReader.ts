import fs from "fs";
import { dateStringToDate } from "./utils";
import {MatchResult} from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
    data: string[][] = [];

    constructor(private _filename: string) {
    }

    read(): void {
        this.data = fs.readFileSync(this._filename, {encoding: 'utf-8'})
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            });
    }
}
