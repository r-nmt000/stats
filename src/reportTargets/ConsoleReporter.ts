import {OutputTarget} from "../Summary";

export class ConsoleReporter implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}