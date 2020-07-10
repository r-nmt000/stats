import fs from "fs";
import { dateStringToDate } from "./utils";
import {MatchResult} from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export abstract class CsvFileReader {
    private _data: MatchData[] = [];

    constructor(private _filename: string) {
    }

    read(): void {
        this._data = fs.readFileSync(this._filename, {encoding: 'utf-8'})
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow);

    }

    get data(): MatchData[] {
        return this._data;
    }

    abstract mapRow(row: string[]): MatchData;
}
