// This program is helping create art and so I need many constants to fine
// tune just exactly how I want everything to appear.  Place all constants in
// this one class so that it is easy to adjust them and see how they all relate.
// Constants are for capturing at 1280x720.
namespace Constants {
    export class Constants {
        public attributeX = 1100;  // X position of string with my name.
        public attributeY = 20;    // Y position of string with my name.
        public poemX = 705;        // X position of the poem text.
        public poemY = 705;        // Y position of the poem text.

        // Create an effect where each line of the poem is approximately
        // centered but moves around slightly (use non-constant-width font
        // to my advantage here).
        public poemScale = 18;

        // Number of times the animation is called before generating a new line.
        public callsPerNewLine = 90;

        public attractorX = 725;      // X position of the attractor plot point.
        public attractorY = 325;      // Y position of the attractor plot point.
        public attractorGainX = 550;  // X scaling of the attractor plot point.
        public attractorGainY = 250;  // Y scaling of the attractor plot point.

        // Number of points to plot each iteration.
        public mainAttractorPoints = 13000;
        public secondAttractorPoints = 500;

        // Tuned to get the right shapes.
        public attractorStartingUnit = 2.06;
        public attractorIncrementAmount = 1/2000;
        public mainAttractorGain = -1;
        public secondaryAttractorGain = 3;

        // When to not display second attractor.
        public stopSecondAttractor = 20;
        public restartSecondAttractor = 40;

        // Update interval is this many milliseconds.
        // It could be slightly longer, that is ok, but
        // this is why its called 'minimum'.
        public minimumInterval = 17;
    }
}