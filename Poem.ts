// Display the poem one line at a time.
namespace Poem {
    export class Poem {
        private lines : Array<string> = [];
        private ind : number;
        private rate : number;
        private callsPerNewLine : number;
        constructor(callsPerNewLine : number) {
            this.ind = 0;
            this.rate = 0;
            this.callsPerNewLine = callsPerNewLine;
            // Place one line per push.
            this.lines.push("line 1");
            this.lines.push("line 2");
            this.lines.push("etc...");
        }
        // Return the correct line of the poem as a string.
        getLine() {
            if (this.rate == this.callsPerNewLine) {
                this.rate = 0;
                this.ind++;  // Go to next line in poem.
                if (this.ind >= this.lines.length)
                    this.ind = 0;
            }
            else {
                this.rate++;
            }
            return this.lines[this.ind];
        }
        // Useful for anything that wants to time to specific lines in the poem.
        getInd() {
            return this.ind;
        }
    }
}