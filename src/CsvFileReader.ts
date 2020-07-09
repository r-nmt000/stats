import fs from "fs";
import { dateStringToDate } from "./utils";
import {MatchResult} from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
    private _data: MatchData[] = [];

    constructor(private _filename: string) {}

    read(): void {
        this._data = fs.readFileSync(this._filename, {encoding: 'utf-8'})
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map((row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ]
            })

    }

    get data(): MatchData[] {
        return this._data;
    }
}