// Generate the X and Y coordinates for the cool shapes that are displayed.
namespace Attractor {
    export class Attractor {
        private gain : number;
        private unitIncrement : number;
        private unit : number;
        private X : number;
        private Y : number;
        constructor (gain, unitIncrement, startingUnit) {
            this.gain = gain;
            this.unitIncrement = unitIncrement;
            this.unit = startingUnit;
        }
        update()
        {
            this.unit = this.unit + this.unitIncrement;
        }
        clearXY() {
            this.X = 0;
            this.Y = 0;
        }
        calcXY(index) {
            // These nonlinear functions generate the interesting shapes.
            this.X = this.X * Math.cos(3*this.unit + 2*this.Y) + this.Y/3
            this.Y = Math.sin(3*this.X + this.Y + this.unit/3) +
                     this.gain*Math.cos(index+this.X + this.unit)/4;
        }
        getX() {
            return this.X;
        }
        getY() {
            return this.Y;
        }
    }
}